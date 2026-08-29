'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  { value: 'web', label: 'Web app' },
  { value: 'mobile', label: 'Mobile app' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'other', label: 'Other' },
];

const BUDGETS = [
  { value: '5-10k', label: '$5–10K' },
  { value: '10-25k', label: '$10–25K' },
  { value: '25-50k', label: '$25–50K' },
  { value: '50k+', label: '$50K+' },
];

const DETAILS_MAX = 2000;
// Same pattern the API validates against
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}

type FieldName = keyof FormData;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  details: '',
};

function validateField(name: FieldName, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case 'name':
      if (!v) return 'Enter your name.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
      if (v.length > 100) return 'Name must be under 100 characters.';
      return;
    case 'email':
      if (!v) return 'Enter your email.';
      if (!EMAIL_REGEX.test(v)) return 'Enter a valid email, like name@company.com.';
      return;
    case 'projectType':
      if (!v) return 'Pick a project type.';
      return;
    case 'budget':
      if (!v) return 'Pick a budget range.';
      return;
    case 'details':
      if (!v) return 'Tell us a little about the project.';
      if (v.length < 10) return 'Add a few more words — at least 10 characters.';
      if (v.length > DETAILS_MAX) return `Keep it under ${DETAILS_MAX} characters.`;
      return;
  }
}

function validateAll(data: FormData): Errors {
  const errors: Errors = {};
  (Object.keys(data) as FieldName[]).forEach((key) => {
    const error = validateField(key, data[key]);
    if (error) errors[key] = error;
  });
  return errors;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const panelRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const statusRef = useRef(status);
  statusRef.current = status;

  // Body scroll lock + initial focus
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = setTimeout(() => nameInputRef.current?.focus(), 250);
    return () => {
      document.body.style.overflow = previous;
      clearTimeout(focusTimer);
    };
  }, [isOpen]);

  // Escape closes (unless a request is in flight)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && statusRef.current !== 'submitting') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Cleanup on unmount: cancel in-flight request and timers
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const setField = (name: FieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Live-revalidate fields the user has already touched
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name]) }));
  };

  const requestClose = useCallback(() => {
    if (statusRef.current === 'submitting') return;
    onClose();
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    // Bots fill the hidden field — pretend success, send nothing
    if (honeypot) {
      setStatus('success');
      closeTimerRef.current = setTimeout(onClose, 1500);
      return;
    }

    const allErrors = validateAll(formData);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched({ name: true, email: true, projectType: true, budget: true, details: true });
      const firstInvalid = panelRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setStatus('error');
      setErrorMessage('You appear to be offline. Check your connection and try again.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const controller = new AbortController();
    abortRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          projectType: formData.projectType,
          budget: formData.budget,
          details: formData.details.trim(),
        }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'The message could not be sent. Try again.');
      }

      setStatus('success');
      setFormData(EMPTY_FORM);
      setTouched({});
      setErrors({});
      closeTimerRef.current = setTimeout(() => {
        onClose();
        // Reset status after the exit animation so reopening shows a fresh form
        setTimeout(() => setStatus('idle'), 400);
      }, 2600);
    } catch (error) {
      const aborted = error instanceof DOMException && error.name === 'AbortError';
      setStatus('error');
      setErrorMessage(
        aborted
          ? 'The request timed out. Check your connection and try again.'
          : error instanceof Error
            ? error.message
            : 'Something went wrong. Try again.'
      );
    } finally {
      clearTimeout(timeout);
      abortRef.current = null;
    }
  };

  const inputClass = (field: FieldName) =>
    `w-full px-4 py-3.5 text-sm bg-white/[0.04] border rounded-xl text-white placeholder:text-white/25 outline-none transition-colors ${
      touched[field] && errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/10 focus:border-brand hover:border-white/20'
    }`;

  const fieldError = (field: FieldName) =>
    touched[field] && errors[field] ? (
      <p id={`${field}-error`} role="alert" className="mt-1.5 text-xs text-red-400/90">
        {errors[field]}
      </p>
    ) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={requestClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          <div className="fixed inset-0 z-[60] overflow-y-auto pointer-events-none">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <motion.div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 24 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative w-full max-w-2xl bg-[#111110] border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Console header strip */}
                <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                      New project brief
                    </span>
                  </div>
                  <button
                    onClick={requestClose}
                    disabled={status === 'submitting'}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors disabled:opacity-40"
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 sm:px-8 py-16 flex flex-col items-center text-center"
                  >
                    <span className="flex items-center justify-center w-14 h-14 rounded-full border border-brand/40 bg-brand/10 mb-6">
                      <Check className="w-6 h-6 text-brand" />
                    </span>
                    <h2 className="text-2xl font-medium tracking-tight text-white mb-2">
                      Brief received
                    </h2>
                    <p className="text-sm text-white/45 max-w-sm">
                      A confirmation is on its way to your inbox. You&apos;ll hear back within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <div className="max-h-[80vh] overflow-y-auto px-6 sm:px-8 py-7 sm:py-8">
                    <h2
                      id="contact-modal-title"
                      className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-1.5"
                    >
                      Tell us what you&apos;re building
                    </h2>
                    <p className="text-sm text-white/40 mb-8">
                      A few details now, a reply within 24 hours. No calls required.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Honeypot — hidden from real users */}
                      <input
                        type="text"
                        name="company"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="absolute -left-[9999px] w-px h-px opacity-0"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

                      <div className="grid sm:grid-cols-2 gap-5 mb-6">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2"
                          >
                            Name
                          </label>
                          <input
                            ref={nameInputRef}
                            id="contact-name"
                            type="text"
                            autoComplete="name"
                            maxLength={100}
                            value={formData.name}
                            onChange={(e) => setField('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            aria-invalid={Boolean(touched.name && errors.name)}
                            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                            placeholder="Your name"
                            className={inputClass('name')}
                          />
                          {fieldError('name')}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            inputMode="email"
                            value={formData.email}
                            onChange={(e) => setField('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            aria-invalid={Boolean(touched.email && errors.email)}
                            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                            placeholder="name@company.com"
                            className={inputClass('email')}
                          />
                          {fieldError('email')}
                        </div>
                      </div>

                      <fieldset className="mb-6">
                        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2.5">
                          Project type
                        </legend>
                        <div
                          className="flex flex-wrap gap-2"
                          role="radiogroup"
                          aria-invalid={Boolean(touched.projectType && errors.projectType)}
                          tabIndex={-1}
                        >
                          {PROJECT_TYPES.map((type) => {
                            const selected = formData.projectType === type.value;
                            return (
                              <button
                                key={type.value}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => {
                                  setField('projectType', type.value);
                                  setTouched((prev) => ({ ...prev, projectType: true }));
                                  setErrors((prev) => ({ ...prev, projectType: undefined }));
                                }}
                                className={`px-4 py-2.5 rounded-full text-sm border transition-colors ${
                                  selected
                                    ? 'border-brand bg-brand/10 text-brand'
                                    : 'border-white/10 text-white/55 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                {type.label}
                              </button>
                            );
                          })}
                        </div>
                        {fieldError('projectType')}
                      </fieldset>

                      <fieldset className="mb-6">
                        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2.5">
                          Budget
                        </legend>
                        <div
                          className="flex flex-wrap gap-2"
                          role="radiogroup"
                          aria-invalid={Boolean(touched.budget && errors.budget)}
                          tabIndex={-1}
                        >
                          {BUDGETS.map((budget) => {
                            const selected = formData.budget === budget.value;
                            return (
                              <button
                                key={budget.value}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => {
                                  setField('budget', budget.value);
                                  setTouched((prev) => ({ ...prev, budget: true }));
                                  setErrors((prev) => ({ ...prev, budget: undefined }));
                                }}
                                className={`px-4 py-2.5 rounded-full text-sm border transition-colors ${
                                  selected
                                    ? 'border-brand bg-brand/10 text-brand'
                                    : 'border-white/10 text-white/55 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                {budget.label}
                              </button>
                            );
                          })}
                        </div>
                        {fieldError('budget')}
                      </fieldset>

                      <div className="mb-7">
                        <div className="flex items-baseline justify-between mb-2">
                          <label
                            htmlFor="contact-details"
                            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
                          >
                            The project
                          </label>
                          <span
                            className={`font-mono text-[10px] tabular-nums ${
                              formData.details.length > DETAILS_MAX - 100
                                ? 'text-red-400/80'
                                : 'text-white/25'
                            }`}
                          >
                            {formData.details.length}/{DETAILS_MAX}
                          </span>
                        </div>
                        <textarea
                          id="contact-details"
                          rows={4}
                          maxLength={DETAILS_MAX}
                          value={formData.details}
                          onChange={(e) => setField('details', e.target.value)}
                          onBlur={() => handleBlur('details')}
                          aria-invalid={Boolean(touched.details && errors.details)}
                          aria-describedby={touched.details && errors.details ? 'details-error' : undefined}
                          placeholder="What are you building, who is it for, and when do you want to ship?"
                          className={`${inputClass('details')} resize-none leading-relaxed`}
                        />
                        {fieldError('details')}
                      </div>

                      {status === 'error' && (
                        <div
                          role="alert"
                          className="mb-5 px-4 py-3 rounded-xl border border-red-400/25 bg-red-400/[0.06] text-sm text-red-300/90"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group w-full flex items-center justify-center gap-2 bg-white text-[#0a0a0a] py-4 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                            Sending brief…
                          </>
                        ) : (
                          <>
                            Send brief
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Replies within 24 hrs · No spam, ever
                      </p>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
