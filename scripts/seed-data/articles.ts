export interface SeedArticle {
  slug: string
  title: string
  description: string
  publishedAt: string
  paragraphs: string[]
}

export const seedArticles: SeedArticle[] = [
  {
    slug: 'what-zero-handoff-means',
    title: 'What "Zero Handoff" Actually Means and Why Most Agencies Cannot Offer It',
    description:
      'Zero Handoff is one person designing in Figma and shipping in Next.js, Flutter, or WordPress. Here is why agencies with separate design and dev teams cannot replicate it.',
    publishedAt: '2026-01-15',
    paragraphs: [
      'Zero Handoff means the same person who frames the product in Figma ships the production build — in Next.js, Flutter, or WordPress depending on what the product needs. There is no translation layer between a design file and a developer ticket.',
      'Most agencies split design and development across people or vendors. That creates a handoff gap: intent gets lost, components get rebuilt differently, and revision cycles double because feedback bounces between roles.',
      'When one person owns both sides, decisions happen faster. A layout choice in Figma maps directly to a React component, Flutter widget, or WordPress template. Spacing, motion, and edge cases get resolved in the same brain that understood the user problem.',
      'Agencies rarely offer this because their margin model depends on billable roles. A single senior designer-developer is harder to staff on a bench model and harder to sell in a line-item SOW.',
      'Zero Handoff is not "designer who codes a bit." It is full ownership from discovery through deployment. You get one accountable person, one timeline, and one codebase that matches what was designed.',
      'For founders, the practical benefit is fewer surprises at launch. What you approved in Figma is what ships. That is the entire point.',
    ],
  },
  {
    slug: 'figma-to-flutter-workflow',
    title: 'Figma to Production Code: The Real Workflow, Step by Step',
    description:
      'A step-by-step look at how Adnan Studios moves from Figma frames to shipped Next.js, Flutter, or WordPress code without a handoff layer.',
    publishedAt: '2026-01-22',
    paragraphs: [
      'Every project starts with scope, not screens. I define the user job, success metric, and platform constraints before opening Figma. That includes choosing the right stack: Next.js for web apps and marketing sites, Flutter for cross-platform mobile, WordPress for content-heavy products.',
      'Wireframes come next. Low fidelity, fast iteration, shared with the client for alignment. Once the flow is approved, I build a component system in Figma that mirrors the production structure: atoms, molecules, screens.',
      'Design tokens map directly to code. Color, type scale, spacing, and radius values live in one place and get copied into theme config, Tailwind tokens, or WordPress theme settings. No manual eyeballing on every screen.',
      'Each screen is designed with real content and empty states, not lorem ipsum placeholders. Error states, loading states, and mobile breakpoints are part of the same pass, not a later "dev phase."',
      'Build happens in the chosen stack using the same component names as Figma. Shared components for buttons, inputs, and cards mean the codebase stays maintainable as the product grows.',
      'Testing runs on real devices and browsers throughout, not just at the end. Performance, tap targets, and scroll behavior get validated while screens are still small in number.',
      'Launch includes store assets or hosting setup, analytics hooks, and a short post-launch window for fixes. Because I built it, I can patch production issues without waiting on another team to interpret a design file.',
    ],
  },
  {
    slug: 'how-to-brief-a-product-designer',
    title: 'How to Brief a Product Designer So You Do Not Waste Your First Two Weeks',
    description:
      'A practical briefing guide for founders. Clear inputs save revision cycles and keep your first two weeks focused on building, not guessing.',
    publishedAt: '2026-02-01',
    paragraphs: [
      'A bad brief costs two weeks of guessing. A good brief costs thirty minutes to write and saves multiple revision rounds.',
      'Start with the user and the job. Who is this for, what problem are they paying to solve, and what does success look like in one sentence? Skip the vision paragraph until the basics are clear.',
      'List what is in scope and explicitly out of scope. "MVP with login, dashboard, and settings" is useful. "Something like Notion but simpler" is not.',
      'Share three reference products and one anti-reference. "I like the onboarding from X" and "I hate the density of Y" gives me direction without copying.',
      'Name the decision-maker and the approval process. If three founders need to sign off, say so upfront. Hidden stakeholders are the main cause of timeline slips.',
      'Attach whatever exists: pitch deck, competitor links, user interview notes, old wireframes. Imperfect context beats a blank slate.',
      'Budget and timeline should be honest ranges, not anchors for negotiation. I can tell you what fits in four weeks versus eight. I cannot read your runway from silence.',
    ],
  },
  {
    slug: 'why-mvp-budgets-fail',
    title: 'Why Most MVP Budgets Fail Before the Build Even Starts',
    description:
      'Most MVP budgets fail in scoping, not development. Here is where money gets lost before a single screen is built.',
    publishedAt: '2026-02-08',
    paragraphs: [
      'MVPs fail in the spreadsheet, not the codebase. Founders underestimate scope, overestimate speed, and pay twice for the handoff between design and development.',
      'The first leak is building too much. An MVP should prove one hypothesis. If your v1 includes admin panels, analytics dashboards, and five user roles, you are building a product, not testing an idea.',
      'The second leak is wrong platform choice. A marketing site, a cross-platform app, and a CMS-backed product have different costs. Picking Flutter when you need WordPress — or Next.js when you need native mobile — adds weeks with no learning benefit.',
      'The third leak is multi-vendor workflows. Designer delivers Figma, developer quotes rebuild time separately, and neither owns the gap between them. That gap often costs 20 to 40 percent of the total budget.',
      'Fixed-price MVPs without defined screen counts invite scope creep. Either the vendor cuts quality or the project stalls at change request number twelve.',
      'A realistic MVP budget includes discovery, design, build, one revision round, and one week post-launch. Anything that skips discovery is betting on luck.',
      'Zero Handoff exists partly to remove the third leak. One person, one quote, one timeline.',
    ],
  },
  {
    slug: 'productized-vs-bespoke',
    title: 'Productized vs Bespoke: How to Know Which One Your Project Needs',
    description:
      'Not every project needs custom everything. Learn when a productized package fits and when you need a bespoke engagement.',
    publishedAt: '2026-02-15',
    paragraphs: [
      'Productized packages work when the problem is known and the deliverable is bounded. Starter and Professional tiers at Adnan Studios cover most early-stage MVPs and growth-stage feature sets.',
      'Choose Starter when you need up to ten screens, a clear user flow, and a first launch in four to six weeks. Typical fit: landing plus core app loop, pre-seed budget, one primary user type.',
      'Choose Professional when you need user testing, a larger design system, up to thirty screens, and post-launch support. Typical fit: funded seed stage, multiple roles, or a product replacing an existing tool.',
      'Choose Enterprise when requirements are open-ended: unlimited screens, accessibility audits, ongoing maintenance, or multiple workstreams in parallel.',
      'Bespoke is the right call when you have compliance requirements, native-only features, or integrations that change the architecture. Fintech KYC flows, healthcare HIPAA constraints, and custom hardware pairings usually need custom scoping.',
      'If you are unsure, book a call. The wrong choice is not picking the cheaper tier. It is picking a tier that does not match your screen count or timeline and then forcing it to fit.',
    ],
  },
  {
    slug: 'fintech-onboarding-anatomy',
    title: 'Anatomy of a High-Converting Fintech Onboarding Flow',
    description:
      'A breakdown of fintech onboarding patterns that build trust and convert, using real examples from Lockn and similar products.',
    publishedAt: '2026-02-22',
    paragraphs: [
      'Fintech onboarding fails when it asks for trust before earning it. Users will not link accounts or deposit money until they understand what happens to their data and their funds.',
      'Lead with security, not features. The first screen should answer: who is this, is my money safe, and what happens next. Lockn leads with escrow protection before asking for signup details.',
      'Progressive disclosure beats long forms. Collect email first, verify identity later, link funding last. Each step should feel like a small yes, not a compliance exam.',
      'Social proof belongs above the fold. Logos, user counts, and regulatory badges reduce anxiety faster than feature lists.',
      'Copy must be plain language. "Your funds are held in escrow until the group savings goal is met" converts better than "Secure multi-party ledger settlement."',
      'Mobile-first layout matters. Most fintech discovery happens on phones. Tap targets, thumb zones, and single-column flows are not optional polish.',
      'Measure drop-off per step, not just overall conversion. The step with the highest exit rate is where you rewrite copy or reduce fields, not where you add more animation.',
    ],
  },
  {
    slug: '5k-vs-15k-design-package',
    title: 'What a $5k Design Package Actually Gets You vs a $15k One',
    description:
      'A transparent comparison of Starter and Professional packages: screens, revisions, testing, and post-launch support.',
    publishedAt: '2026-03-01',
    paragraphs: [
      'The Starter package at $5,000 covers up to ten screens, two revision rounds, UX research and wireframes, a basic design system, and production development in Next.js, Flutter, or WordPress. Timeline is four to six weeks.',
      'Starter fits founders who need a credible MVP to show investors or early users. You get one primary flow done well, not an entire platform.',
      'The Professional package at $15,000 covers up to thirty screens, four revision rounds, user testing, advanced design system work, micro-interactions, and two weeks of post-launch support. Timeline is six to eight weeks.',
      'Professional fits teams that already validated demand and need polish, scale, and confidence before a public launch or App Store submission.',
      'Both packages include Figma design and production build by the same person. The difference is depth, screen count, and support after launch.',
      'Neither package includes ongoing maintenance, backend infrastructure, or marketing site copywriting unless scoped separately under Enterprise.',
      'If your screen list exceeds the tier limit mid-project, we re-scope before work continues. Surprises on invoice day mean the brief was incomplete, not that the tier was wrong.',
    ],
  },
  {
    slug: 'switching-freelancers-mid-project',
    title: 'The Real Cost of Switching Freelancers Mid-Project',
    description:
      'Switching designers or developers mid-project resets context, burns budget, and delays launch. Here is what it actually costs.',
    publishedAt: '2026-03-08',
    paragraphs: [
      'Switching vendors mid-project usually costs thirty to fifty percent of what you already spent, plus two to four weeks of delay. That is not the new vendor quote. That is the hidden reset tax.',
      'The new person must reverse-engineer decisions that were never documented. Why is that button there? Why that spacing? Why Next.js over WordPress? Without answers, they rebuild or guess.',
      'Design files without a matching codebase are half an asset. A Figma file from a designer who did not build creates a second handoff gap with your next developer.',
      'Code without design context has the same problem. A developer who inherits components without understanding user flows will refactor what should have been left alone.',
      'Client morale drops twice: once during the painful transition, again when the new vendor re-estimates everything you thought was done.',
      'Zero Handoff reduces this risk because one person holds design and code. If you must switch, switch at a milestone with full export: Figma, repo access, decision log, and analytics baseline.',
      'The cheapest project is often the one that finishes with the same person who started it.',
    ],
  },
]
