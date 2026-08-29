import { siteConfig, siteUrl } from './site'

interface ContactFormData {
  name: string
  email: string
  projectType: string
  budget: string
  details: string
}

const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="38" viewBox="0 0 64 51" fill="none">
  <path d="M35.1308 0.0714507L30.2235 0C30.2235 0 28.7815 0.0714496 28.1482 1.1562L0 49.7457H18.0445C18.0445 49.7457 19.2006 49.9633 20.0645 48.518L38.3948 16.9435L54.3607 44.4681L48.8136 44.4551C48.8136 44.4551 48.19 44.3869 47.4885 43.4678L38.4208 27.8396L35.8713 32.354C35.8713 32.354 35.3647 33.4712 35.7999 34.3221L44.1985 48.911C44.1985 48.911 44.8838 50.1906 46.1277 50.0737L64 49.8561L38.4598 5.67705L16.7811 43.0358C16.7811 43.0358 16.0763 44.244 15.456 44.4161L9.59058 44.4973L35.1308 0.0714507Z" fill="#ffffff"/>
</svg>`

const brandGradient = 'linear-gradient(135deg, #34A983 0%, #2A8A6B 100%)'

function emailShell(content: string) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            ${content}
            <tr>
              <td style="background-color: #f7fafc; padding: 28px 40px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="font-size: 14px; color: #718096; margin: 0 0 8px 0;">
                  <a href="mailto:${siteConfig.contactEmail}" style="color: #34A983; text-decoration: none;">${siteConfig.contactEmail}</a>
                </p>
                <p style="font-size: 12px; color: #a0aec0; margin: 0;">
                  © ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export function getUserConfirmationEmailHTML(name: string): string {
  return emailShell(`
            <tr>
              <td style="background: ${brandGradient}; padding: 48px 40px; text-align: center;">
                ${logoSVG}
                <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 24px 0 0 0; letter-spacing: -0.5px;">
                  Thanks for reaching out
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <p style="font-size: 18px; color: #1a1a1a; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi <strong>${name}</strong>,
                </p>
                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0 0 20px 0;">
                  I received your project inquiry at ${siteConfig.name}. I review every message personally and reply within 24 hours on business days.
                </p>
                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0 0 32px 0;">
                  If your timeline is urgent, book a call directly and we can scope it live.
                </p>
                <table cellpadding="0" cellspacing="0" style="margin: 0 0 32px 0;">
                  <tr>
                    <td style="background-color: #34A983; border-radius: 999px; text-align: center;">
                      <a href="${siteConfig.calendlyUrl}" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
                        Book a call
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0;">
                  Talk soon,<br />
                  <strong style="color: #1a1a1a;">${siteConfig.owner}</strong><br />
                  <span style="color: #718096; font-size: 14px;">${siteConfig.name} · Zero Handoff design and development</span>
                </p>
              </td>
            </tr>`)
}

export function getAdminNotificationEmailHTML({
  name,
  email,
  projectType,
  budget,
  details,
}: ContactFormData): string {
  const submittedAt = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return emailShell(`
            <tr>
              <td style="background: ${brandGradient}; padding: 40px; text-align: center;">
                ${logoSVG}
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 20px 0 0 0;">
                  New contact form submission
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <p style="font-size: 16px; color: #4a5568; margin: 0 0 24px 0;">
                  A new inquiry arrived on <a href="${siteUrl}" style="color: #34A983; text-decoration: none;">${siteUrl.replace('https://', '')}</a>.
                </p>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; border-radius: 12px; margin-bottom: 24px;">
                  <tr><td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0;"><span style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span><br /><strong>${name}</strong></p>
                    <p style="margin: 0 0 16px 0;"><span style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span><br /><a href="mailto:${email}" style="color: #34A983; text-decoration: none;">${email}</a></p>
                    <p style="margin: 0 0 16px 0;"><span style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Project type</span><br /><strong>${projectType}</strong></p>
                    <p style="margin: 0 0 16px 0;"><span style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</span><br /><strong>$${budget}</strong></p>
                    <p style="margin: 0;"><span style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Details</span><br />${details}</p>
                  </td></tr>
                </table>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color: #34A983; border-radius: 999px; text-align: center;">
                      <a href="mailto:${email}?subject=${encodeURIComponent(`Re: Your ${siteConfig.name} inquiry`)}" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 12px; color: #a0aec0; margin: 24px 0 0 0;">Submitted ${submittedAt}</p>
              </td>
            </tr>`)
}
