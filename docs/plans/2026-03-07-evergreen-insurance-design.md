# Evergreen Insurance Group — Website Design

**Date:** 2026-03-07
**Type:** Spec/sample site (Maiven pitch)
**Build Mode:** Premium (Apple-style GSAP)
**Approach:** "Shield" — Premium Scroll Experience

---

## Brand Identity

- **Name:** Evergreen Insurance Group
- **Tagline:** "Coverage that grows with you."
- **Mood:** Modern & Approachable

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #0D9488 | Teal — buttons, links, accents |
| Secondary | #1E293B | Deep Slate — headings, nav |
| Accent | #F59E0B | Warm Amber — CTAs, highlights |
| Background | #F8FAFC | Off-white sections |
| Background Alt | #FFFFFF | White sections |
| Text Body | #334155 | Paragraph text |
| Text Heading | #0F172A | Headings |

### Typography
- Headings: Inter (bold/semibold)
- Body: Inter (regular/medium)

---

## Pages

### 1. Home
- Full-viewport scroll-hero: "Protection that feels effortless." + teal pill CTA
- Logo cloud: carrier logos auto-scroll
- Pinned-services: 3-panel (Personal / Commercial / Life & Health)
- Counter-stats: 25+ Years, 10,000+ Policies, 98% Renewal Rate, 50+ Carriers
- Testimonials: parallax scroll-section with 3 cards
- CTA banner: full-bleed teal "Ready to save?"

### 2. About
- Text-reveal hero: "Your neighbors, your agents."
- Split story section with timeline
- Team grid with hover reveal
- Values: 3 feature cards (Transparency, Advocacy, Simplicity)

### 3. Services — Personal Lines
- Hero: "Protect what matters most."
- Service tabs: Auto, Home, Renters, Umbrella
- FAQ accordion
- Quote CTA

### 4. Services — Commercial Lines
- Hero: "Built for businesses like yours."
- Industry grid cards
- Coverage types list
- CTA: "Talk to a commercial specialist"

### 5. Services — Life & Health
- Hero: "Plan for every chapter."
- Comparison columns (without vs with coverage)
- Product feature cards: Life, Health, Medicare, Disability
- CTA: "Schedule a consultation"

### 6. Get a Quote
- Multi-step form (4 steps) with GSAP transitions + progress bar
- Submits via Resend email (no database)
- Side panel: 3 trust points

### 7. Claims Support
- Hero: "We're here when it matters."
- Process timeline: Report → Review → Resolution → Follow-up
- Emergency contact card
- Claims FAQ

### 8. Contact
- Split: form left, info + map right
- Google Maps embed (fictional NJ location)
- Office hours, phone, email

---

## Premium Components

scroll-hero, text-reveal, pinned-services, counter-stats, premium-nav,
premium-cta, parallax-image, scroll-section, premium-testimonial,
service-tabs, faq-accordion, process-timeline, team-grid, logo-cloud,
map-embed, hero-minimal, feature-card

---

## Tech Stack

- Next.js 16 + React 19 + Tailwind CSS
- GSAP + ScrollTrigger
- Resend (form emails to info@maivenai.com)
- Vercel deployment
- No database (pure static/SSG + form-to-email)

---

## Anti-Sameness

- First insurance vertical in portfolio
- Shield/protection metaphor unique across all builds
- Teal palette differentiates from navy/corporate insurance norm
- Pinned 3-category scroll is new usage pattern
