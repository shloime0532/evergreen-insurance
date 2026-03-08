# Evergreen Insurance Group — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Premium Apple-style spec website for a fictional full-service insurance agency ("Evergreen Insurance Group") as a Maiven pitch piece.

**Architecture:** Next.js 16 static site with 8 pages, GSAP ScrollTrigger Premium animations, Resend for form-to-email. No database. Component library components copied from `~/Desktop/Website_Projects/_components/` and customized.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS, GSAP + ScrollTrigger, Resend, Vercel

---

## Task 1: Scaffold Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Create Next.js project**

```bash
cd ~/Desktop/Website_Projects/evergreen-insurance/code
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes
```

**Step 2: Install dependencies**

```bash
npm install gsap @gsap/react resend
```

**Step 3: Initialize git**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js project with GSAP and Resend"
```

**Step 4: Set up Tailwind theme in `tailwind.config.ts`**

Extend theme with brand colors:
```ts
colors: {
  primary: '#0D9488',
  secondary: '#1E293B',
  accent: '#F59E0B',
  surface: '#F8FAFC',
}
```

Add Inter font via `next/font/google` in `layout.tsx`.

**Step 5: Set up `globals.css`**

CSS custom properties for the brand palette. Base styles: `scroll-behavior: auto` (NOT smooth — prevents mobile auto-scroll bug). Body defaults.

**Step 6: Create `layout.tsx`**

- Inter font loaded via `next/font/google`
- Metadata with `metadataBase: new URL("https://evergreen-insurance.vercel.app")`
- Title: "Evergreen Insurance Group | Coverage That Grows With You"
- Description for SEO

**Step 7: Create placeholder `app/page.tsx`**

Simple "Coming Soon" text to verify build works.

**Step 8: Verify build**

```bash
npm run dev
```

Open http://localhost:3000, confirm it loads.

**Step 9: Commit**

```bash
git add -A
git commit -m "chore: configure Tailwind theme, Inter font, and brand colors"
```

---

## Task 2: Premium Navigation

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/premium-nav.tsx`
- Create: `app/components/nav.tsx`

**Step 1: Copy premium-nav component**

Copy `premium-nav.tsx` from the component library into `app/components/nav.tsx`. Add `"use client"` directive.

**Step 2: Customize for Evergreen**

- Logo: text-based "Evergreen" with a simple shield icon (inline SVG or Unicode &#x1f6e1;)
- Nav links: Home, About, Services (dropdown: Personal, Commercial, Life & Health), Get a Quote, Claims, Contact
- Services gets a dropdown on hover/click with 3 sub-links
- Colors: transparent over hero → `bg-white/95 backdrop-blur-lg` on scroll
- Mobile hamburger with slide-out menu
- CTA button in nav: "Get a Quote" pill button (teal)

**Step 3: Add nav to `layout.tsx`**

Import and render `<Nav />` above `{children}`.

**Step 4: Test at 375px**

Verify hamburger menu, touch targets (44px+), dropdown behavior.

**Step 5: Commit**

```bash
git add app/components/nav.tsx app/layout.tsx
git commit -m "feat: add premium navigation with services dropdown"
```

---

## Task 3: Footer

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/footer.tsx`
- Create: `app/components/footer.tsx`

**Step 1: Copy and customize footer**

- 4 columns: Company (About, Team, Careers), Services (Personal, Commercial, Life & Health), Support (Claims, FAQ, Contact), Connect (Phone, Email, Address)
- Bottom bar: copyright + "Licensed in NJ, NY, PA" + social icons (placeholder)
- Colors: `bg-secondary` (deep slate) with white text

**Step 2: Add to `layout.tsx`**

Render `<Footer />` below `{children}`.

**Step 3: Verify mobile layout**

Columns should stack on mobile.

**Step 4: Commit**

```bash
git add app/components/footer.tsx app/layout.tsx
git commit -m "feat: add footer with 4-column layout"
```

---

## Task 4: Home Page — Hero Section

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/scroll-hero.tsx`
- Create/Modify: `app/page.tsx`, `app/components/scroll-hero.tsx`

**Step 1: Copy scroll-hero component**

Copy and customize. Variant: "fade". Height: "immersive" (full viewport).

**Step 2: Build the hero content**

- Headline: "Protection that feels effortless."
- Subheadline: "Independent insurance agents who find the right coverage at the right price — so you don't have to."
- CTA: Pill button "Get Your Free Quote →" linking to `/get-a-quote`
- Background: CSS gradient (teal-to-slate diagonal) or abstract SVG pattern. No external images needed for spec site.
- GSAP page-load choreography: headline (0ms) → subheadline (200ms) → CTA (400ms)

**Step 3: Verify at 375px**

Text sizing responsive, CTA visible above fold.

**Step 4: Commit**

```bash
git add app/components/scroll-hero.tsx app/page.tsx
git commit -m "feat: add home hero with GSAP entrance animation"
```

---

## Task 5: Home Page — Logo Cloud (Carrier Trust Bar)

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/logo-cloud.tsx`
- Create: `app/components/logo-cloud.tsx`

**Step 1: Copy and customize**

- Label: "Trusted carriers we work with"
- Logos: Use text placeholders styled as logos (Allstate, Progressive, Travelers, Hartford, Liberty Mutual, Nationwide) — simple gray text in brand-like fonts, no actual logo images needed for spec
- Auto-scroll marquee animation (CSS `@keyframes` infinite scroll)

**Step 2: Add below hero on home page**

**Step 3: Commit**

```bash
git add app/components/logo-cloud.tsx app/page.tsx
git commit -m "feat: add carrier logo cloud with marquee scroll"
```

---

## Task 6: Home Page — Pinned Services Section

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/pinned-services.tsx`
- Create: `app/components/pinned-services.tsx`

**Step 1: Copy and customize**

3 panels that swap while the section header stays pinned:

Panel 1 — Personal Insurance:
- Icon: shield with person
- Headline: "Personal Insurance"
- Body: Auto, Home, Renters, Umbrella coverage
- CTA: "Explore Personal Lines →" → `/services/personal`

Panel 2 — Commercial Insurance:
- Icon: building
- Headline: "Business Insurance"
- Body: General Liability, Workers Comp, Commercial Property
- CTA: "Explore Commercial Lines →" → `/services/commercial`

Panel 3 — Life & Health:
- Icon: heart
- Headline: "Life & Health"
- Body: Life, Health, Medicare, Disability
- CTA: "Explore Life & Health →" → `/services/life-health`

**Step 2: Mobile behavior**

On mobile (< 768px), disable pinning — panels stack vertically with scroll-section fade-in.

**Step 3: Verify at 375px**

Stacked, no janky scroll behavior.

**Step 4: Commit**

```bash
git add app/components/pinned-services.tsx app/page.tsx
git commit -m "feat: add pinned services section with 3 insurance panels"
```

---

## Task 7: Home Page — Stats Counter

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/counter-stats.tsx`
- Create: `app/components/counter-stats.tsx`

**Step 1: Copy and customize**

4 stats:
- "25+" / "Years of Experience"
- "10,000+" / "Active Policies"
- "98%" / "Client Retention Rate"
- "50+" / "Insurance Carriers"

GSAP counts from 0 to target on scroll.

**Step 2: Add to home page below pinned services**

**Step 3: Commit**

```bash
git add app/components/counter-stats.tsx app/page.tsx
git commit -m "feat: add animated stats counter section"
```

---

## Task 8: Home Page — Testimonials

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/scroll-section.tsx`, `~/Desktop/Website_Projects/_components/premium/premium-testimonial.tsx`
- Create: `app/components/scroll-section.tsx`, `app/components/testimonials.tsx`

**Step 1: Copy scroll-section and premium-testimonial**

**Step 2: Build testimonials section**

3 fictional testimonials:
1. "Evergreen saved us $2,400/year on our business insurance. The process was painless." — Michael R., Restaurant Owner
2. "After our house fire, they handled everything. I didn't have to make a single extra call." — Sarah T., Homeowner
3. "They found my daughter a health plan in under 48 hours. Actual humans who care." — David K., Parent

Each in a scroll-section with staggered fade-in.

**Step 3: Verify mobile layout**

**Step 4: Commit**

```bash
git add app/components/scroll-section.tsx app/components/testimonials.tsx app/page.tsx
git commit -m "feat: add testimonials section with scroll animations"
```

---

## Task 9: Home Page — CTA Banner

**Files:**
- Copy from: `~/Desktop/Website_Projects/_components/premium/premium-cta.tsx`
- Create: `app/components/cta-banner.tsx`

**Step 1: Copy and customize**

- Full-bleed teal background
- Headline: "Ready to save on your insurance?"
- Subtext: "Get a personalized quote in under 5 minutes."
- CTA: White pill button "Start Your Free Quote"
- Phone: "(732) 555-0188"

**Step 2: Add to home page as final section before footer**

**Step 3: Commit**

```bash
git add app/components/cta-banner.tsx app/page.tsx
git commit -m "feat: add CTA banner section"
```

---

## Task 10: About Page

**Files:**
- Create: `app/about/page.tsx`
- Copy from: `~/Desktop/Website_Projects/_components/premium/text-reveal.tsx`, `~/Desktop/Website_Projects/_components/team-grid.tsx`, `~/Desktop/Website_Projects/_components/feature-card.tsx`
- Create: `app/components/text-reveal.tsx`, `app/components/team-grid.tsx`, `app/components/feature-card.tsx`

**Step 1: Copy components**

text-reveal, team-grid, feature-card from library.

**Step 2: Build about page**

Sections in order:
1. Text-reveal hero: "Your neighbors, your agents."
2. Story split section: Left side — placeholder for team photo (gray box with text "Our team"). Right side — founding story paragraph + "Founded in 1998" timeline points.
3. Team grid: 4 fictional team members with name, role, specialty. Hover reveals bio text.
4. Values: 3 feature cards — Transparency ("No hidden fees, no surprises"), Advocacy ("We fight for your best rate"), Simplicity ("Insurance shouldn't be complicated")

**Step 3: Verify at 375px**

Team grid 1-column on mobile. Story section stacks.

**Step 4: Commit**

```bash
git add app/about/ app/components/text-reveal.tsx app/components/team-grid.tsx app/components/feature-card.tsx
git commit -m "feat: add about page with team grid and values"
```

---

## Task 11: Services — Personal Lines Page

**Files:**
- Create: `app/services/personal/page.tsx`
- Copy from: `~/Desktop/Website_Projects/_components/service-tabs.tsx`, `~/Desktop/Website_Projects/_components/faq-accordion.tsx`
- Create: `app/components/service-tabs.tsx`, `app/components/faq-accordion.tsx`

**Step 1: Copy components**

service-tabs, faq-accordion from library.

**Step 2: Build personal lines page**

1. Hero-minimal: "Protect what matters most." + subtext
2. Service tabs with 4 tabs:
   - **Auto:** Liability, Collision, Comprehensive, Uninsured Motorist
   - **Home:** Dwelling, Personal Property, Liability, Loss of Use
   - **Renters:** Personal Property, Liability, Additional Living Expenses
   - **Umbrella:** Extended liability coverage beyond standard limits
3. FAQ accordion: 5 questions (What does homeowners insurance cover? How much auto insurance do I need? What's the difference between HO-3 and HO-5? Do I need renters insurance? What is an umbrella policy?)
4. CTA: "Get a personalized quote →"

**Step 3: Verify tabs work on mobile (full-width, touch-friendly)**

**Step 4: Commit**

```bash
git add app/services/personal/ app/components/service-tabs.tsx app/components/faq-accordion.tsx
git commit -m "feat: add personal insurance services page with tabs and FAQ"
```

---

## Task 12: Services — Commercial Lines Page

**Files:**
- Create: `app/services/commercial/page.tsx`

**Step 1: Build commercial page**

1. Hero-minimal: "Built for businesses like yours."
2. Industry grid: 6 cards (Construction, Restaurants, Retail, Healthcare, Professional Services, Real Estate) — each with icon + short description
3. Coverage types section: General Liability, Workers Comp, Commercial Auto, Commercial Property, Professional Liability, Cyber Liability — listed with brief descriptions
4. CTA: "Talk to a commercial specialist →"

**Step 2: Reuse feature-card and scroll-section components**

**Step 3: Verify at 375px**

**Step 4: Commit**

```bash
git add app/services/commercial/
git commit -m "feat: add commercial insurance services page"
```

---

## Task 13: Services — Life & Health Page

**Files:**
- Create: `app/services/life-health/page.tsx`

**Step 1: Build life & health page**

1. Hero-minimal: "Plan for every chapter."
2. Comparison section: Two columns — "Without proper coverage" (red-tinted risks) vs "With Evergreen" (green-tinted peace of mind). CSS grid, animated on scroll.
3. Products: 4 feature cards — Life Insurance, Health Insurance, Medicare Supplements, Disability Insurance
4. CTA: "Schedule a free consultation →"

**Step 2: Verify at 375px**

**Step 3: Commit**

```bash
git add app/services/life-health/
git commit -m "feat: add life and health services page"
```

---

## Task 14: Get a Quote Page (Multi-Step Form)

**Files:**
- Create: `app/get-a-quote/page.tsx`, `app/components/quote-form.tsx`
- Create: `app/api/quote/route.ts` (Resend API route)

**Step 1: Build multi-step form component**

`"use client"` component with 4 steps managed by useState:

Step 1 — Insurance Type:
- Radio buttons: Personal Auto, Homeowners, Renters, Commercial, Life, Health, Other
- "Next" button

Step 2 — Basic Info:
- Full Name, Phone, Email
- "Next" / "Back" buttons

Step 3 — Coverage Details:
- Current provider (text)
- Policy renewal date (date picker)
- Anything specific you're looking for? (textarea)
- "Next" / "Back" buttons

Step 4 — Review & Submit:
- Summary of selections
- "Submit" button

GSAP transitions between steps (slide left/right).
Progress bar at top showing step 1/2/3/4.

**Step 2: Build side panel**

Right side (desktop only): "Why get a quote from us?"
- "We compare 50+ carriers"
- "Average savings of $800/year"
- "No obligation, no spam"

**Step 3: Build API route**

`app/api/quote/route.ts`:
- Receives form data via POST
- Sends email via Resend to `info@maivenai.com`
- Returns success/error JSON

**Step 4: Verify form flow at 375px**

Side panel hidden on mobile. Form is full-width. Steps transition smoothly.

**Step 5: Commit**

```bash
git add app/get-a-quote/ app/components/quote-form.tsx app/api/quote/
git commit -m "feat: add multi-step quote form with Resend email"
```

---

## Task 15: Claims Support Page

**Files:**
- Create: `app/claims/page.tsx`
- Copy from: `~/Desktop/Website_Projects/_components/process-timeline.tsx`
- Create: `app/components/process-timeline.tsx`

**Step 1: Copy process-timeline component**

**Step 2: Build claims page**

1. Hero-minimal: "We're here when it matters."
2. Process timeline — 4 steps:
   - Report: "Call us or file online — we start immediately"
   - Review: "We review your claim and coordinate with your carrier"
   - Resolution: "We advocate for the best possible outcome"
   - Follow-up: "We check in to make sure everything is resolved"
3. Emergency contact card: prominent phone number with "24/7 Claims Hotline" styling
4. Claims FAQ: 4 questions (How do I file a claim? How long does it take? Will my rates go up? What if my claim is denied?)

**Step 3: Verify at 375px**

**Step 4: Commit**

```bash
git add app/claims/ app/components/process-timeline.tsx
git commit -m "feat: add claims support page with process timeline"
```

---

## Task 16: Contact Page

**Files:**
- Create: `app/contact/page.tsx`
- Copy from: `~/Desktop/Website_Projects/_components/contact-form.tsx`, `~/Desktop/Website_Projects/_components/map-embed.tsx`
- Create: `app/components/contact-form.tsx`, `app/components/map-embed.tsx`
- Create: `app/api/contact/route.ts`

**Step 1: Copy components**

contact-form and map-embed from library.

**Step 2: Build contact page**

Split layout (desktop):
- Left: Contact form (Name, Email, Phone, Subject dropdown, Message textarea, Submit)
- Right: Office info card + map embed

Office info:
- Address: 742 Ocean Avenue, Lakewood, NJ 08701
- Phone: (732) 555-0188
- Email: info@evergreeninsurance.com
- Hours: Mon-Fri 9am-6pm, Sat 10am-2pm

Map: Google Maps embed for Lakewood, NJ.

**Step 3: Build API route**

`app/api/contact/route.ts` — Resend email to `info@maivenai.com`.

**Step 4: Verify at 375px**

Stacks vertically. Map full-width on mobile.

**Step 5: Commit**

```bash
git add app/contact/ app/components/contact-form.tsx app/components/map-embed.tsx app/api/contact/
git commit -m "feat: add contact page with form and map"
```

---

## Task 17: PWA Setup

**Files:**
- Create: `app/manifest.ts`, `app/icon.tsx`, `app/apple-icon.tsx`

**Step 1: Create manifest**

```ts
export default function manifest() {
  return {
    name: 'Evergreen Insurance Group',
    short_name: 'Evergreen',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#0D9488',
  }
}
```

**Step 2: Create icon generators**

Dynamic `icon.tsx` and `apple-icon.tsx` — simple shield icon with "E" letter in teal.

**Step 3: Commit**

```bash
git add app/manifest.ts app/icon.tsx app/apple-icon.tsx
git commit -m "feat: add PWA manifest and icons"
```

---

## Task 18: GitHub + Vercel + Deploy

**Step 1: Create GitHub repo**

```bash
cd ~/Desktop/Website_Projects/evergreen-insurance/code
gh repo create shloime0532/evergreen-insurance --public --source=. --push
```

**Step 2: Set up Vercel**

```bash
vercel link
```

**Step 3: Add environment variable**

Set `RESEND_API_KEY` in Vercel dashboard (use existing Resend key from other projects).

**Step 4: Deploy**

```bash
vercel --prod --yes
```

**Step 5: Verify live site**

Open deployed URL. Check all 8 pages. Verify mobile at 375px.

**Step 6: Commit any fixes**

**Step 7: Create `_status.md`**

```markdown
# Evergreen Insurance Group

## Project Type: Spec Site (Maiven Pitch)
## Build Mode: Premium (Apple-style)
## Phase: Complete
## Live URL: [vercel URL]
## GitHub: https://github.com/shloime0532/evergreen-insurance
## Stack: Next.js 16 + React 19 + Tailwind + GSAP + Resend
## Database: None
## Last Updated: 2026-03-07
```

---

## Task 19: Final Polish & Mobile Audit

**Step 1: Full mobile audit at 375px**

Check every page:
- [ ] Nav hamburger works
- [ ] All text readable (no overflow)
- [ ] Touch targets 44px+
- [ ] Scroll animations smooth (no jank)
- [ ] Forms usable on mobile
- [ ] Map responsive
- [ ] CTA buttons prominent

**Step 2: Desktop audit at 1440px**

- [ ] Full-bleed sections edge-to-edge
- [ ] Typography hierarchy clear
- [ ] GSAP animations fire on scroll
- [ ] Pinned services work correctly
- [ ] Quote form step transitions smooth

**Step 3: Fix any issues found**

**Step 4: Final commit and deploy**

```bash
git add -A
git commit -m "polish: final mobile and desktop audit fixes"
vercel --prod --yes
```

---

## Task 20: Update Tracking

**Step 1: Add to `_recent-builds.md`**

Add Evergreen Insurance Group to `~/Desktop/Maiven_Leads/_recent-builds.md` under a new "Insurance" industry section.

**Step 2: Commit**

Done.
