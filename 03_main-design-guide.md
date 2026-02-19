# BlurOps — Complete Design Guidelines

> The definitive design system for the BlurOps landing page.
> Every font, color, spacing value, and layout decision — documented and ready for implementation.

---

## Table of Contents

1. [Brand Identity & Design Philosophy](#1-brand-identity--design-philosophy)
2. [Typography System](#2-typography-system)
3. [Color System](#3-color-system)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Responsive Breakpoints](#5-responsive-breakpoints)
6. [Component Specifications](#6-component-specifications)
7. [Section-by-Section Design Specifications](#7-section-by-section-design-specifications)
8. [SEO & Accessibility Requirements](#8-seo--accessibility-requirements)
9. [Animation & Interaction Guidelines](#9-animation--interaction-guidelines)
10. [Image & Media Guidelines](#10-image--media-guidelines)

---

## 1. Brand Identity & Design Philosophy

### Who We're Designing For

BlurOps targets burnt-out agency founders doing $200K–$750K/year with teams of 3–10 people. These are professionals in their late 20s to 40s who are overwhelmed, skeptical of yet another solution, and short on time. They need to feel: **trust, authority, clarity, and relief**.

### Design Principles

1. **Dark, premium, no-nonsense** — The design should feel like a high-end tool, not a flashy course page. Dark backgrounds signal sophistication and focus.
2. **Clarity over decoration** — Every element earns its space. No decorative clutter. No stock photos of people pointing at whiteboards.
3. **Conversion through credibility** — Trust signals, real data, and structured information convert this audience. Not hype.
4. **Mobile-first, always** — Over 60% of traffic will come from mobile (LinkedIn, social, email links). Design for 375px first, then scale up.
5. **Breathing room** — Generous whitespace. This audience is overwhelmed. The page should feel calm and organized — the exact opposite of their current business.

---

## 2. Typography System

### Primary Font: Inter

**Why Inter:**
Inter is the most widely adopted sans-serif in modern SaaS and B2B design. It was purpose-built for digital screens with open letterforms, balanced spacing, and excellent readability at all sizes. It's professional without being sterile, modern without being trendy. It signals "we are a serious tool" — which is exactly what BlurOps needs for a founder audience that has been burned by flashy course sellers.

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Font stack (CSS):**
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale

All sizes use `rem` units with `clamp()` for fluid scaling. Base size: `1rem = 16px`.

**IMPORTANT: Body text minimum is 18px on desktop and 17px on mobile.** This is a hard rule for readability and premium feel.

| Element | Desktop | Tablet | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|--------|-------------|----------------|
| **Display / Hero H1** | 64px (4rem) | 48px (3rem) | 40px (2.5rem) | 800 (ExtraBold) | 1.08 | -0.025em |
| **H1** | 52px (3.25rem) | 44px (2.75rem) | 36px (2.25rem) | 700 (Bold) | 1.12 | -0.02em |
| **H2 (Section Headings)** | 40px (2.5rem) | 34px (2.125rem) | 30px (1.875rem) | 700 (Bold) | 1.18 | -0.015em |
| **H3 (Subsection Headings)** | 28px (1.75rem) | 24px (1.5rem) | 22px (1.375rem) | 600 (SemiBold) | 1.3 | -0.005em |
| **H4 (Minor Headings)** | 22px (1.375rem) | 20px (1.25rem) | 20px (1.25rem) | 600 (SemiBold) | 1.35 | 0 |
| **Body (Large)** | 20px (1.25rem) | 19px (1.1875rem) | 18px (1.125rem) | 400 (Regular) | 1.7 | 0 |
| **Body (Default)** | 18px (1.125rem) | 18px (1.125rem) | 17px (1.0625rem) | 400 (Regular) | 1.7 | 0.005em |
| **Body (Small)** | 16px (1rem) | 15px (0.9375rem) | 15px (0.9375rem) | 400 (Regular) | 1.6 | 0.005em |
| **Caption / Label** | 13px (0.8125rem) | 13px (0.8125rem) | 12px (0.75rem) | 500 (Medium) | 1.4 | 0.02em |
| **Eyebrow / Pre-headline** | 15px (0.9375rem) | 14px (0.875rem) | 13px (0.8125rem) | 600 (SemiBold) | 1.4 | 0.1em |
| **CTA Button Text** | 18px (1.125rem) | 17px (1.0625rem) | 16px (1rem) | 600 (SemiBold) | 1 | 0.02em |
| **Nav Links** | 16px (1rem) | 15px (0.9375rem) | 16px (1rem) | 500 (Medium) | 1 | 0.01em |
| **Stat Numbers** | 52px (3.25rem) | 44px (2.75rem) | 38px (2.375rem) | 800 (ExtraBold) | 1.1 | -0.02em |
| **Stat Labels** | 15px (0.9375rem) | 15px | 14px | 400 (Regular) | 1.5 | 0.01em |
| **Blockquote / Pull Quote** | 22px (1.375rem) | 20px (1.25rem) | 18px (1.125rem) | 400 (Regular) Italic | 1.6 | 0 |

### Fluid Typography CSS (clamp)

```css
:root {
  /* Display / Hero */
  --text-display: clamp(2.5rem, 5.5vw, 4rem);

  /* H1 */
  --text-h1: clamp(2.25rem, 4.5vw, 3.25rem);

  /* H2 */
  --text-h2: clamp(1.875rem, 3.5vw, 2.5rem);

  /* H3 */
  --text-h3: clamp(1.375rem, 2.5vw, 1.75rem);

  /* H4 */
  --text-h4: clamp(1.25rem, 2vw, 1.375rem);

  /* Body Large */
  --text-body-lg: clamp(1.125rem, 1.6vw, 1.25rem);

  /* Body Default — NEVER below 17px (1.0625rem) */
  --text-body: clamp(1.0625rem, 1.4vw, 1.125rem);

  /* Body Small */
  --text-body-sm: clamp(0.9375rem, 1.2vw, 1rem);

  /* Eyebrow */
  --text-eyebrow: clamp(0.8125rem, 1.2vw, 0.9375rem);

  /* Stats */
  --text-stat: clamp(2.375rem, 4.5vw, 3.25rem);
}
```

### Typography Rules

1. **Maximum line length:** 65–75 characters for body text (approximately `max-width: 720px` for 18px body). This is critical for readability.
2. **Paragraph spacing:** `margin-bottom: 1.5em` between paragraphs.
3. **Heading spacing:** Headings get `margin-top: 2em` and `margin-bottom: 0.75em` relative to their font size.
4. **Never go below 17px** for any readable body text on any screen size. 18px is the preferred default. This is a hard rule for accessibility and premium feel.
5. **Eyebrow text** is always uppercase with wide letter-spacing (0.1em).
6. **Bold emphasis** within body text uses weight 600 (SemiBold), not 700, to avoid visual heaviness in paragraphs.
7. **No underlines** except for text links on hover.

---

## 3. Color System

### Design Decision: Near-Black + Electric Blue Accent

**Why not pure black (#000000)?** Pure black creates harsh contrast against white text that causes eye strain on extended reading. A near-black (#0A0A0F) with a subtle cool undertone feels premium, reduces fatigue, and creates depth when layered with card surfaces.

**Why blue as the primary accent?** Blue conveys trust, intelligence, and professionalism — exactly the qualities a burnt-out founder needs to see from a business solutions provider. On dark backgrounds, electric blue (#5271FF) creates exceptional contrast and visibility while feeling authoritative rather than aggressive. Blue is the dominant color in enterprise SaaS and high-trust B2B applications, signaling credibility. Combined with cyan highlights (#2CBBFF), it creates a modern, tech-forward palette that differentiates BlurOps from guru-style course pages while maintaining a calm, focused aesthetic.

### Color Palette

#### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0F` | Main page background — near-black with subtle blue-purple undertone |
| `--bg-secondary` | `#10101A` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#181828` | Hover states, nested elements, input fields |
| `--bg-elevated` | `#20203A` | Modal backgrounds, dropdown menus, tooltips |
| `--bg-accent-subtle` | `rgba(82, 113, 255, 0.07)` | Subtle blue tint for highlighted sections |

#### Text Colors

| Token | Hex | Usage | Contrast on #0A0A0F |
|-------|-----|-------|---------------------|
| `--text-primary` | `#FFFFFF` | Headings (H1, H2) — pure white for maximum impact | 19.5:1 |
| `--text-secondary` | `#D8D8E8` | Body text — slightly off-white with cool tint to reduce eye strain | 14.2:1 |
| `--text-tertiary` | `#9090A8` | Supporting text, labels, secondary info | 6.0:1 |
| `--text-muted` | `#606080` | Disabled text, footnotes, fine print | 3.6:1 |
| `--text-accent` | `#5271FF` | Highlighted keywords, accent text | 5.3:1 |

#### Brand / Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#5271FF` | Primary CTA buttons, key highlights, active states |
| `--accent-primary-hover` | `#6B87FF` | CTA hover state — slightly lighter and brighter |
| `--accent-primary-active` | `#4060E0` | CTA pressed/active state — slightly darker |
| `--accent-primary-glow` | `rgba(82, 113, 255, 0.25)` | Glow effect behind CTA buttons (box-shadow) |
| `--accent-secondary` | `#2CBBFF` | Secondary highlights, tags, badges, framework labels, cyan accent |
| `--accent-secondary-hover` | `#50CCFF` | Secondary hover state |
| `--accent-tertiary` | `#01FEFF` | Sparingly used for special emphasis, glow effects, stat highlights |

#### Borders & Dividers

| Token | Hex | Usage |
|-------|-----|-------|
| `--border-default` | `#1C1C32` | Default card borders, subtle separators |
| `--border-hover` | `#2A2A48` | Hover state borders |
| `--border-accent` | `rgba(82, 113, 255, 0.3)` | Accent-colored borders for emphasis |
| `--divider` | `#181828` | Horizontal section dividers |

#### Semantic / Utility Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#34D399` | Success indicators, positive stats, "after" states |
| `--warning` | `#FBBF24` | Warning states, attention items |
| `--error` | `#F87171` | Error states, critical stats (burnout %), "before" pain states |
| `--info` | `#2CBBFF` | Informational elements, links (uses accent-secondary) |

### Color Usage Rules

1. **60-30-10 Rule:** 60% dark backgrounds, 30% text (white/off-white), 10% accent blue.
2. **CTA buttons** are the ONLY elements that use `--accent-primary` at full saturation as a background fill. Everything else gets the desaturated or transparent variant.
3. **Never use blue for body text** — only for short highlights, tags, or single keywords within a sentence.
4. **Section backgrounds alternate** between `--bg-primary` and `--bg-secondary` to create visual rhythm between page sections.
5. **Gradient usage** is minimal. If used, always subtle: `linear-gradient(180deg, #0A0A0F 0%, #10101A 100%)`.
6. **Stats and numbers** that represent pain (69.6%, 90%) use `--error` (#F87171). Stats that represent positive outcomes use `--success` (#34D399). Stats representing BlurOps/action use `--accent-secondary` (#2CBBFF).
7. **Cyan (#01FEFF)** is reserved for special glow effects, decorative line accents, and very sparingly as a visual highlight. Never for body text.

### Gradient Specifications

```css
/* Hero section subtle gradient */
.hero-bg {
  background: linear-gradient(180deg, #0E0E1A 0%, #0A0A0F 100%);
}

/* CTA button gradient */
.cta-primary {
  background: linear-gradient(135deg, #5271FF 0%, #6B87FF 100%);
}

/* Accent glow behind CTA */
.cta-primary {
  box-shadow: 0 0 40px rgba(82, 113, 255, 0.2), 0 4px 16px rgba(82, 113, 255, 0.15);
}

/* Section divider gradient line */
.section-divider {
  background: linear-gradient(90deg, transparent 0%, #2CBBFF 50%, transparent 100%);
  height: 1px;
}

/* Decorative glow line (sparingly) */
.glow-line {
  background: linear-gradient(90deg, transparent 0%, #01FEFF 50%, transparent 100%);
  height: 1px;
  opacity: 0.4;
}
```

---

## 4. Spacing & Layout System

### Base Unit: 8px Grid

All spacing values are multiples of 8px for consistency and alignment.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro spacing — icon to text gap |
| `--space-2` | 8px | Tight spacing — inline elements |
| `--space-3` | 12px | Small gap — list item spacing |
| `--space-4` | 16px | Default gap — paragraph spacing, small padding |
| `--space-5` | 20px | Medium-small — card internal padding (mobile) |
| `--space-6` | 24px | Medium — heading to text gap, card padding |
| `--space-8` | 32px | Large — between content blocks within a section |
| `--space-10` | 40px | Section padding (mobile) |
| `--space-12` | 48px | Section padding (tablet) |
| `--space-16` | 64px | Between subsections (desktop) |
| `--space-20` | 80px | Section padding (desktop) |
| `--space-24` | 96px | Large section spacing (desktop) |
| `--space-32` | 128px | Maximum section spacing (large desktop) |

### Container Widths

| Context | Max Width | Padding (each side) |
|---------|-----------|---------------------|
| **Content container** | 1200px | 24px (mobile), 40px (tablet), 64px (desktop) |
| **Narrow content** (body text) | 720px | Centered within content container |
| **Wide content** (stats, cards grid) | 1200px | Same as content container |
| **Full bleed** (hero, some sections) | 100vw | 0px — edge to edge |

### Section Spacing

| Spacing Type | Desktop | Tablet | Mobile |
|-------------|---------|--------|--------|
| Between major sections | 120px | 80px | 60px |
| Section top/bottom padding | 96px | 64px | 48px |
| Heading to first paragraph | 24px | 20px | 16px |
| Between paragraphs | 28px | 24px | 20px |
| Between content blocks | 48px | 40px | 32px |
| Between cards in a grid | 24px | 20px | 16px |

### Layout Grid

| Screen | Columns | Gutter | Margin |
|--------|---------|--------|--------|
| Mobile (< 768px) | 4 columns | 16px | 24px |
| Tablet (768px–1023px) | 8 columns | 24px | 40px |
| Desktop (1024px–1279px) | 12 columns | 24px | 48px |
| Large Desktop (1280px+) | 12 columns | 32px | 64px |

---

## 5. Responsive Breakpoints

### Breakpoint Definitions

```css
/* Mobile-first approach: styles start at mobile, scale up */

/* Small phones (default — no media query needed) */
/* 320px - 479px */

/* Large phones */
@media (min-width: 480px) { }

/* Tablets */
@media (min-width: 768px) { }

/* Small desktops / large tablets */
@media (min-width: 1024px) { }

/* Standard desktops */
@media (min-width: 1280px) { }

/* Large desktops */
@media (min-width: 1440px) { }

/* Extra-large / ultra-wide */
@media (min-width: 1920px) { }
```

### What Changes at Each Breakpoint

**Mobile (320px – 479px):**
- Single column layout for all content
- Full-width CTA buttons
- Stacked stat cards (2x2 grid)
- Hamburger menu navigation
- Pain quotes: show 6 of 8, expand to reveal rest
- Before/After table: stacked cards instead of side-by-side
- Curriculum weeks: accordion (collapsed by default)
- Value stack: vertical card layout
- FAQ: accordion (collapsed by default)
- Font sizes at mobile minimum (17px body)

**Large phones (480px – 767px):**
- Stat cards: 2-column grid
- Slightly more breathing room
- Pain quotes: still collapsed with expand

**Tablets (768px – 1023px):**
- 2-column layouts where appropriate
- Navigation can expand to horizontal (or remain hamburger based on item count)
- Before/After table: side-by-side columns
- Stat cards: 2x2 grid
- CTA buttons: auto-width (not full-width)
- Curriculum weeks: can show as tabs

**Small desktop (1024px – 1279px):**
- Full horizontal navigation
- 3-column stat card grid
- Full Before/After table
- Curriculum weeks: side-by-side or tabbed
- Sticky CTA bar activates

**Desktop (1280px+):**
- Maximum content width at 1200px, centered
- Full layout with all visual elements
- 4-column stat card grid
- Sticky CTA bar
- Comfortable reading width for body text (720px max)

**Large desktop (1440px+):**
- Increased section spacing (128px between sections)
- Larger hero text (display size at maximum)
- More generous padding

---

## 6. Component Specifications

### Navigation Bar

```
Position: Fixed top, z-index: 1000
Height: 72px (desktop), 64px (mobile)
Background: rgba(10, 10, 15, 0.9) with backdrop-filter: blur(20px)
Border bottom: 1px solid var(--border-default)
Content: Logo (left) | Nav Links (center) | CTA Button (right)
Mobile: Logo (left) | Hamburger (right) → slides in from right
```

**Nav links:** 5 maximum. Suggested: How It Works, Curriculum, Pricing, FAQ, Apply Now (CTA)

**Sticky behavior:** Transparent on load, gains background + border on scroll (after 100px).

### CTA Buttons

**Primary CTA (Apply Now):**
```css
.cta-primary {
  background: linear-gradient(135deg, #5271FF 0%, #6B87FF 100%);
  color: #FFFFFF;
  font-size: 1.125rem;       /* 18px */
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  min-height: 56px;
  min-width: 200px;
  box-shadow: 0 0 30px rgba(82, 113, 255, 0.2);
  letter-spacing: 0.02em;
}

.cta-primary:hover {
  background: linear-gradient(135deg, #6B87FF 0%, #7D96FF 100%);
  box-shadow: 0 0 50px rgba(82, 113, 255, 0.35);
  transform: translateY(-2px);
}

.cta-primary:active {
  background: #4060E0;
  transform: translateY(0);
}

/* Mobile */
@media (max-width: 767px) {
  .cta-primary {
    width: 100%;
    font-size: 1rem;
    padding: 16px 24px;
    min-height: 52px;
  }
}
```

**Secondary CTA (ghost/outline style):**
```css
.cta-secondary {
  background: transparent;
  color: #5271FF;
  border: 2px solid #5271FF;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 10px;
  transition: all 0.25s ease;
}

.cta-secondary:hover {
  background: rgba(82, 113, 255, 0.1);
  border-color: #6B87FF;
}
```

**CTA micro-text (below button):**
```css
.cta-micro {
  font-size: 0.9375rem;      /* 15px */
  color: var(--text-tertiary);
  margin-top: 12px;
  text-align: center;
  line-height: 1.5;
}
```

### Cards (General)

```css
.card {
  background: var(--bg-secondary);       /* #10101A */
  border: 1px solid var(--border-default); /* #1C1C32 */
  border-radius: 14px;
  padding: 36px;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.card:hover {
  border-color: var(--border-hover);     /* #2A2A48 */
  background: var(--bg-tertiary);        /* #181828 */
}

/* Mobile */
@media (max-width: 767px) {
  .card {
    padding: 24px;
    border-radius: 12px;
  }
}
```

### Stat Cards (Trust Bar)

```css
.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 14px;
  padding: 36px 28px;
  text-align: center;
}

.stat-number {
  font-size: var(--text-stat);          /* clamp(2.375rem, 4.5vw, 3.25rem) */
  font-weight: 800;
  color: var(--error);                  /* #F87171 for pain stats */
  line-height: 1.1;
  margin-bottom: 12px;
}

.stat-label {
  font-size: var(--text-body-sm);       /* 15-16px */
  color: var(--text-secondary);
  line-height: 1.5;
}

.stat-source {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-top: 8px;
  font-style: italic;
}
```

### Blockquote / Pain Quotes

```css
.pain-quote {
  border-left: 3px solid var(--accent-secondary); /* #2CBBFF */
  padding: 20px 28px;
  margin: 16px 0;
  background: var(--bg-accent-subtle);   /* rgba(82, 113, 255, 0.07) */
  border-radius: 0 10px 10px 0;
}

.pain-quote p {
  font-size: var(--text-body);           /* 17-18px */
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.7;
}

.pain-quote cite {
  font-size: var(--text-body-sm);
  color: var(--text-tertiary);
  font-style: normal;
  font-weight: 600;
  display: block;
  margin-top: 10px;
}
```

### Before/After Table

```css
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border-default);
}

.comparison-table th {
  background: var(--bg-tertiary);
  padding: 18px 28px;
  font-size: var(--text-body-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-primary);
}

.comparison-table th.before { color: var(--error); }
.comparison-table th.after  { color: var(--success); }

.comparison-table td {
  padding: 18px 28px;
  font-size: var(--text-body);
  line-height: 1.6;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-default);
}
```

### FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid var(--border-default);
  padding: 28px 0;
}

.faq-question {
  font-size: var(--text-h4);            /* 20-22px */
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  font-size: var(--text-body);          /* 17-18px */
  color: var(--text-secondary);
  line-height: 1.7;
  padding-top: 18px;
  max-width: 720px;
}
```

### Sticky CTA Bar

```css
.sticky-cta-bar {
  position: fixed;
  bottom: 0;                /* mobile: bottom bar */
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-default);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.sticky-cta-bar.visible {
  transform: translateY(0);
}

/* Desktop: top bar */
@media (min-width: 1024px) {
  .sticky-cta-bar {
    top: 0;
    bottom: auto;
    border-top: none;
    border-bottom: 1px solid var(--border-default);
    transform: translateY(-100%);
  }
  .sticky-cta-bar.visible {
    transform: translateY(0);
  }
}
```

---

## 7. Section-by-Section Design Specifications

### SECTION 1: HERO

**Layout:**
- Full viewport height on desktop (`min-height: 100vh`)
- Mobile: `min-height: 90vh` (account for mobile browser chrome)
- Content vertically centered
- Single column, text centered

**Background:**
- Subtle gradient: `linear-gradient(180deg, #0E0E1A 0%, #0A0A0F 100%)`
- Optional: very subtle grid pattern overlay at 3–5% opacity for depth
- No hero image — the typography IS the hero

**Content stack (top to bottom):**
1. **Eyebrow tag** — uppercase, 15px, SemiBold, `--accent-secondary` (#2CBBFF), letter-spacing 0.1em
   - Text: `A LIVE BOOTCAMP FOR 6-FIGURE FOUNDERS READY TO STOP RUNNING EVERYTHING`
2. **Headline (H1)** — Display size (64px desktop / 40px mobile), ExtraBold, `--text-primary` (white)
   - Max-width: 900px, centered
   - Text: "Reimagine your business, that grows without you"
3. **Subheadline** — Body Large (20px desktop / 18px mobile), Regular, `--text-secondary`
   - Max-width: 680px, centered
   - `margin-top: 28px`
   - Text: "Join 4 weeks of live sessions, build your SOPs with AI, install OKR dashboards, and walk away with a business that doesn't collapse the moment you close your laptop."
4. **CTA Button** — Primary CTA, centered
   - `margin-top: 44px`
   - Text: "Apply for the Next Cohort"
5. **Micro-text below CTA** — 15px, `--text-tertiary`
   - Text: "Join founders from agencies doing $200K-$750K/year."
   - `margin-top: 14px`
6. **Risk reducer** — 15px, `--text-tertiary`
   - Text: "Backed by a 10-day guarantee — you either see results or you get a full refund."
   - `margin-top: 8px`

**Spacing:**
- Eyebrow to H1: 20px
- H1 to subheadline: 28px
- Subheadline to CTA: 44px

### SECTION 2: TRUST BAR

**Layout:**
- Background: `--bg-secondary` (#10101A) to create visual separation from hero
- Padding: 48px top/bottom (desktop), 32px (mobile)
- Stat cards in a responsive grid

**Grid:**
- Desktop: 4 cards in a row, evenly distributed with equal widths
- Tablet: 2x2 grid, cards evenly spaced
- Mobile: 2x2 grid
- Gap: 24px between cards

**Stat card structure:**
- Number: `--text-stat` size, weight 800, colored per type
- Label: 15px, `--text-secondary`, max 2 lines
- Source: 13px, `--text-muted`, italic

**4 stats (evenly distributed):**
1. 69.6% — Worldwide burnout rate in marketing agencies (color: `--error`) *(Forecast.app)*
2. 90% — Of agency owners under 55 sell due to burnout (color: `--error`) *(IA Magazine)*
3. Only 36% — Say their agency "runs like a well-oiled machine" (color: `--error`) *(4As/PCI)*
4. 1 in 5 — Small agency owners don't pay themselves a regular salary (color: `--error`) *(SAGA Q4 2024)*

### SECTION 3: PROBLEM + AMPLIFY

**Layout:**
- Background: `--bg-primary`
- Three-part structure: intro text block → pain quotes → cost-of-inaction table

**Part A — Problem Statement:**
- Section heading (H2): Left-aligned or centered, max-width 800px
- Heading: "You Built This Business to Be Free. Here's What No One Tells You About."
- Intro paragraphs: Body Large (20px), `--text-secondary`, max-width 720px
- Each paragraph well-spaced at 28px apart

**Part B — Pain Quotes:**
- Layout: 2-column grid on desktop (cards evenly distributed), single column on mobile
- Each quote uses the pain-quote component with left cyan border
- Mobile: show first 6 quotes, "See more" button to expand remaining
- Desktop: show all 8 quotes in 2-column layout, evenly distributed
- Gap: 20px between cards

**Part C — Cost of Inaction Table:**
- Sub-heading (H3): "Let's be blunt about the numbers:"
- Full-width card with `--bg-secondary` background
- Table with 3 columns: "What it costs you" | "Per month" | "Per year"
- Table cells use `--text-body` size (17-18px)
- Pain values in `--error` color
- Evenly distributed columns

**CTA #2:**
- Centered, primary CTA button
- Text: "Apply for the Next Cohort"
- Micro-text: "Application takes 2 minutes. We'll confirm fit within 24 hours."
- Risk reducer: "10-day money-back guarantee — you either build the systems or you pay nothing."
- 48px spacing above and below

### SECTION 4: DREAM OUTCOME

**Layout:**
- Background: `--bg-secondary` (alternating from Section 3)
- Two parts: "Imagine If..." block + Before/After comparison

**"Imagine If..." Block:**
- Section heading (H2): "What you need is systems, we want you to imagine this"
- Each "Imagine" paragraph starts with "Imagine" in `--accent-secondary` (#2CBBFF, bold)
- Rest of paragraph in `--text-secondary`
- Each paragraph has `margin-bottom: 28px`
- Wrap in a max-width: 720px container
- 4 imagine blocks, evenly spaced

**Mid-section heading (H3):** "That's what it looks like — with BlurOps" in `--text-primary`

**Before/After Table:**
- Use comparison table component
- Desktop: side-by-side columns, evenly distributed
- Mobile: stacked cards — "BEFORE" card (with red tinted top border) followed by "AFTER" card (with green tinted top border)
- 5 comparison rows, evenly distributed

### SECTION 5: INTRODUCING BLUR FRAMEWORK

**Layout:**
- Background: `--bg-primary`
- Two sub-sections: StoryBrand Reframe → BLUR Framework explanation

**StoryBrand Reframe:**
- Section heading (H2): "Every Agency Owner Hits This Wall. We fix it in 4 steps, in 4 weeks."
- Max-width: 720px
- Intro text: Body Large (20px), `--text-secondary`
- "You're not the problem here. You're the hero of this story."

**Sub-heading (H3):** "You need the BLUR Framework"
- Bridge text: Body text explaining the framework

**BLUR Framework Visual:**
- 4 blocks representing B / L / U / R, evenly distributed in a 2x2 grid on desktop, stacked on mobile
- Each block:
  - Letter: Large (52px), `--accent-primary` (#5271FF), weight 800
  - Label (H3): e.g., "Build Clarity" / "Layer in Systems" / "Units and Scores" / "Run and Track"
  - 1-2 sentences of description in `--text-secondary`
- Each block: `--bg-secondary` card with left border in `--accent-primary`
- Equal sizing across all 4 cards, gap: 24px

### SECTION 6: CURRICULUM (Offer)

**Layout:**
- Background: `--bg-secondary`
- Section heading (H2): "Here's Exactly What Happens Inside BlurOps in 4 weeks"
- Section subheadline: Body Large, `--text-secondary`, max-width 720px

**Week Cards:**
- Desktop: 2x2 grid, all 4 visible, evenly distributed with equal card heights
- Mobile: accordion — only the week title visible, tap to expand
- Tablet: tabs (Week 1 | Week 2 | Week 3 | Week 4)
- Gap: 24px between cards

**Each Week Card:**
- Card background: `--bg-primary` (darker, to stand out against section bg)
- Week number: Eyebrow style, `--accent-secondary` (#2CBBFF)
- Title (H3): `--text-primary`
- Theme: Body text, `--text-tertiary`, italic
- "What you do" items: Body text (17-18px), `--text-secondary`, with `•` bullet in `--accent-primary` (#5271FF)
- "Walk away with" items: Body text (17-18px), `--text-secondary`, with `✓` checkmark in `--success` (#34D399)
- All cards same height (use CSS Grid or flexbox stretch)

**Master Deliverables List ("By the end of 4 weeks..."):**
- Numbered list, 1–10
- Each number: `--accent-primary`, weight 700
- Each item: `--text-secondary`, Body text (17-18px)
- Wrap in a card with `--bg-primary` background and `--border-accent` border
- 2-column layout on desktop (5 items per column, evenly distributed), single column on mobile

**CTA #3:** Centered, primary CTA
- Text: "Yes — I Want to Build This"
- Micro-text: "10 spots per cohort. Application takes 2 minutes."
- Risk reducer: "10-day guarantee: Build the systems or get a full refund. Zero risk."

### SECTION 7: SOCIAL PROOF

**Layout:**
- Background: `--bg-primary`
- Two rows: founder pull quotes + placeholder testimonials

**Section heading (H2):** "This Isn't a You Problem. It's an Industry Problem."

**Founder Pull Quotes:**
- Desktop: 3-column grid of quote cards, evenly distributed
- Tablet: 2-column grid
- Mobile: single column stacked (or horizontal swipe carousel)
- 5 quote cards
- Each card:
  - Large opening quotation mark " in `--accent-primary` (#5271FF), 48px, opacity 0.3
  - Quote text: `--text-body` (17-18px), italic, `--text-secondary`
  - Attribution: 15px, bold, `--text-primary` (name) + `--text-tertiary` (title)
  - Card background: `--bg-secondary`
  - Equal card heights across all cards in the grid
- Gap: 24px

**Placeholder Testimonials (3):**
- Larger cards than pull quotes, full width or 1-column layout
- Include photo placeholder (circular, 64px, with `--border-accent`)
- Longer quote text in `--text-body` (17-18px)
- Card background: `--bg-secondary` with left border `--accent-secondary`

### SECTION 8: VALUE STACK + PRICING

**Layout:**
- Background: `--bg-secondary`
- Value stack table → competitor anchoring → ROI math → pricing card → guarantee

**Section heading (H2):** "Everything You Get Inside BlurOps (and What It's Actually Worth)"

**Value Stack Table:**
- Full-width card with `--bg-primary` background
- Table with two columns: "What You Get" | "Individual Value"
- Value column right-aligned, `--text-tertiary`
- Total row: bold, `--text-primary`, larger font, `--accent-primary` (#5271FF) for total number
- Striped rows: alternate between `--bg-primary` and `--bg-secondary`
- Cell text: `--text-body` (17-18px)

**Pricing Card (centered, prominent):**
- Card background: `--bg-primary`
- Border: 2px solid `--accent-primary` (#5271FF)
- Price: 52px, weight 800, `--text-primary`
- Increase note: "Increases to $3,499 in next cohort" — 16px, `--accent-secondary` (#2CBBFF)
- Box-shadow: CTA glow effect
- Max-width: 520px, centered
- CTA button inside the card

**Competitor Anchoring:**
- Sub-heading (H3): "See how we compare with others (and win!)"
- 4 cards, evenly distributed in 2x2 grid (desktop), stacked (mobile)
- Each card: `--bg-primary`, competitor name + price in `--text-muted` (struck through) + limitation text in `--text-secondary`
- Gap: 24px

**ROI Math:**
- Card with `--bg-primary` background
- Key numbers in `--accent-secondary` (#2CBBFF) or `--success`
- Final line bold, larger font (H3 size)

**Guarantee Block:**
- Card with `--bg-accent-subtle` background
- Border: 1px solid `rgba(82, 113, 255, 0.3)`
- H3 heading: "The BlurOps 10-Day Guarantee"
- Body text (17-18px): guarantee details
- Shield/checkmark icon in `--accent-primary`

**CTA (Repeated):**
- Primary CTA: "Apply Now — Risk Free"
- Micro-text: "$1,599 (Increases to $3,499 in next cohort). Backed by a 10-day money-back guarantee."
- Urgency: "Next cohort starts on March 20. Only 10 spots available."

### SECTION 9: FAQ / OBJECTION HANDLER

**Layout:**
- Background: `--bg-primary`
- Accordion component, max-width: 800px, centered
- 6 questions

**Section heading (H2):** "Got Questions? (You're Probably Thinking One of These Right Now)"

**Desktop & Mobile:** All collapsed by default. Click to expand one at a time.
- FAQ question text: `--text-h4` (20-22px), weight 600
- FAQ answer text: `--text-body` (17-18px), `--text-secondary`, line-height 1.7
- Evenly spaced items with 28px padding between

### SECTION 10: FINAL CTA + RESPONSE

**Layout:**
- Background: gradient from `--bg-secondary` to `--bg-primary`
- Full-width section, content centered
- Maximum emotional impact — this is the last shot

**Content stack:**
1. **H2 headline** (transformation restatement): "Four Weeks From Now, Your Business Looks Completely Different. Or Nothing Changes. Your Call."
   - Display-sized (H1 scale), bold
2. **1 paragraph** — Body Large (20px), `--text-secondary`, max-width 680px
3. **Final testimonial** in a highlighted quote card with left `--accent-primary` border
4. **Primary CTA** — slightly larger than previous CTAs (padding: 20px 52px)
   - Text: "Apply Now — Start Building Your Systems"
5. **Price + guarantee micro-text:** "$1,599 (Increases to $3,499 in next cohort). 10-day money-back guarantee."
6. **Urgency line:** "Each cohort is limited to 10 founders."

**Application Steps:**
- Horizontal timeline on desktop (5 dots connected by a line), evenly distributed
- Vertical timeline on mobile
- Each step: number circle (`--accent-primary` background, white text) + short description in `--text-secondary`
- 5 steps, evenly distributed

### FOOTER

**Layout:**
- Background: `#08080C` (slightly darker than bg-primary)
- Border-top: 1px solid `--border-default`
- Padding: 48px top, 32px bottom

**Content:**
- Logo (left/center)
- Copyright + legal links (center or below)
- Social links (right) — icons only, `--text-tertiary`, hover → `--text-primary`
- Keep minimal — this is a landing page, not a multi-page site

---

## 8. SEO & Accessibility Requirements

### Heading Hierarchy (SEO-Critical)

```
<h1>  → ONE per page — Hero headline
        "Reimagine your business, that grows without you"

<h2>  → Section headings (one per major section)
        "You Built This Business to Be Free. Here's What No One Tells You About."
        "What you need is systems, we want you to imagine this"
        "Every Agency Owner Hits This Wall."
        "Here's Exactly What Happens Inside BlurOps in 4 weeks"
        "This Isn't a You Problem. It's an Industry Problem."
        "Everything You Get Inside BlurOps"
        "Got Questions?"
        "Four Weeks From Now, Your Business Looks Completely Different."

<h3>  → Subsections within H2 sections
        "Let's be blunt about the numbers"
        "That's what it looks like — with BlurOps"
        "You need the BLUR Framework"
        "Week 1: Build Clarity" / "Week 2: Layer in Systems" / etc.
        "The BlurOps 10-Day Guarantee"
        Individual FAQ questions

<h4>  → Minor headings within H3 sections
        "What You Do" / "What You Walk Away With"
```

**Rules:**
- Never skip heading levels (no H1 → H3)
- One H1 per page
- Headings must be descriptive, not generic
- Include target keywords naturally: "agency operations," "founder bottleneck," "AI-ready SOPs"

### Meta Tags

```html
<title>BlurOps — Reimagine Your Business That Grows Without You | 4-Week Agency Bootcamp</title>
<meta name="description" content="A 4-week live bootcamp for agency founders doing $200K-$750K. Build documented systems, AI-ready SOPs, and OKR dashboards. Stop being the bottleneck.">
<meta name="keywords" content="agency operations, founder burnout, SOP creation, agency systems, AI operations, OKR dashboard, agency scaling">
```

### Open Graph Tags

```html
<meta property="og:title" content="BlurOps — Reimagine Your Business That Grows Without You">
<meta property="og:description" content="The live bootcamp for burnt-out agency founders. Build systems. Reclaim 20+ hours/week. In 4 weeks.">
<meta property="og:image" content="[1200x630 social share image]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://blurops.com">
```

### Accessibility (WCAG AA Compliance)

| Requirement | Standard | BlurOps Implementation |
|-------------|----------|------------------------|
| Text contrast (normal) | 4.5:1 minimum | All body text ≥ 14.2:1 ✅ |
| Text contrast (large) | 3:1 minimum | All headings ≥ 19.5:1 ✅ |
| Touch target size | 44x44px minimum | All buttons ≥ 52px height ✅ |
| Focus indicators | Visible focus ring | 2px solid `--accent-primary` with 4px offset |
| Alt text | All images | Required for every `<img>` tag |
| Form labels | All inputs | Labels required, not placeholder-only |
| Motion | Reduced motion | Respect `prefers-reduced-motion` media query |
| Font scaling | Up to 200% zoom | Layout must not break at 200% browser zoom |

### Performance (SEO Ranking Factor)

- **Font loading:** Use `font-display: swap` to prevent invisible text during load
- **Images:** WebP format, lazy-loaded below the fold, explicit width/height attributes
- **Critical CSS:** Inline above-the-fold styles in `<head>`
- **Target metrics:** LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 9. Animation & Interaction Guidelines

### Philosophy

Animations should feel purposeful, not decorative. This audience is busy and skeptical — flashy animations read as "salesy." Use motion to guide attention and provide feedback.

### Specifications

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page scroll reveal | Fade up (24px) + opacity 0→1 | 600ms | ease-out |
| Staggered card reveal | Fade up with 100ms stagger per card | 500ms each | ease-out |
| CTA button hover | Scale 1.02 + shadow expand + translateY(-2px) | 250ms | ease |
| CTA button press | Scale 0.98 | 100ms | ease |
| Nav background | Opacity 0→1 on scroll | 300ms | ease |
| Accordion expand | Height auto + fade in | 300ms | ease-in-out |
| Sticky bar enter | Slide in from bottom/top | 300ms | ease-out |
| Stat number | Count up from 0 | 1500ms | ease-out (on scroll into view) |
| Tab switch | Fade + slight slide | 200ms | ease |
| Card hover | Border-color transition + subtle lift | 250ms | ease |

### Rules

1. **No animation on initial page load** except hero content (fade in).
2. **Scroll-triggered animations fire once** — never re-animate when scrolling back up.
3. **Respect `prefers-reduced-motion`** — disable all motion animations for users who prefer reduced motion.
4. **No parallax scrolling.** It's distracting and often causes performance issues on mobile.
5. **No auto-playing carousels.** All carousels are user-controlled (swipe or click).
6. **Maximum of 3 elements animating simultaneously** in any viewport. More creates visual chaos.
7. **Stagger card reveals** when multiple cards enter the viewport — 100ms delay between each for a polished cascading effect.

---

## 10. Image & Media Guidelines

### General Rules

- **No generic stock photos.** This audience is allergic to "person smiling at laptop" images.
- **Screenshots and dashboards** are the best visual proof. Show the actual OKR dashboard, the Founder Clarity Dashboard, the SOP tool.
- **Icons** over illustrations. Use a consistent icon set (Lucide, Phosphor, or Heroicons) in outline style, `--text-tertiary` color, 24px default size.
- **Founder photo** should be authentic, not overly produced. Casual professional.

### Image Specifications

| Usage | Dimensions | Format | Notes |
|-------|-----------|--------|-------|
| Social share (og:image) | 1200 × 630px | PNG or JPG | Brand colors, headline text |
| Founder photo | 400 × 400px (source) | WebP | Displayed at 200px max, circular crop |
| Dashboard screenshots | 1200px wide | WebP | Show in browser frame mockup, slight perspective |
| Icons | 24 × 24px (default) | SVG | Inline SVG preferred for color control |
| Background patterns | Tileable | SVG or PNG | Maximum 3-5% opacity |
| Favicon | 32 × 32px + 180 × 180px | ICO + PNG | Brand mark in `--accent-primary` on transparent |

### Dark Mode Image Treatment

- All screenshots should use dark-mode versions of dashboards/tools
- Add a subtle vignette overlay to images that sit on the dark background
- Never place a white-background image directly on the dark page — always wrap in a card or add border-radius + border

---

## Quick Reference: CSS Custom Properties (Full List)

```css
:root {
  /* Colors - Backgrounds */
  --bg-primary: #0A0A0F;
  --bg-secondary: #10101A;
  --bg-tertiary: #181828;
  --bg-elevated: #20203A;
  --bg-accent-subtle: rgba(82, 113, 255, 0.07);

  /* Colors - Text */
  --text-primary: #FFFFFF;
  --text-secondary: #D8D8E8;
  --text-tertiary: #9090A8;
  --text-muted: #606080;
  --text-accent: #5271FF;

  /* Colors - Accent */
  --accent-primary: #5271FF;
  --accent-primary-hover: #6B87FF;
  --accent-primary-active: #4060E0;
  --accent-primary-glow: rgba(82, 113, 255, 0.25);
  --accent-secondary: #2CBBFF;
  --accent-secondary-hover: #50CCFF;
  --accent-tertiary: #01FEFF;

  /* Colors - Borders */
  --border-default: #1C1C32;
  --border-hover: #2A2A48;
  --border-accent: rgba(82, 113, 255, 0.3);
  --divider: #181828;

  /* Colors - Semantic */
  --success: #34D399;
  --warning: #FBBF24;
  --error: #F87171;
  --info: #2CBBFF;

  /* Typography */
  --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --text-display: clamp(2.5rem, 5.5vw, 4rem);
  --text-h1: clamp(2.25rem, 4.5vw, 3.25rem);
  --text-h2: clamp(1.875rem, 3.5vw, 2.5rem);
  --text-h3: clamp(1.375rem, 2.5vw, 1.75rem);
  --text-h4: clamp(1.25rem, 2vw, 1.375rem);
  --text-body-lg: clamp(1.125rem, 1.6vw, 1.25rem);
  --text-body: clamp(1.0625rem, 1.4vw, 1.125rem);
  --text-body-sm: clamp(0.9375rem, 1.2vw, 1rem);
  --text-caption: 0.8125rem;
  --text-eyebrow: clamp(0.8125rem, 1.2vw, 0.9375rem);
  --text-stat: clamp(2.375rem, 4.5vw, 3.25rem);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* Layout */
  --container-max: 1200px;
  --content-max: 720px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 18px;

  /* Transitions */
  --transition-fast: 100ms ease;
  --transition-default: 250ms ease;
  --transition-slow: 300ms ease;
  --transition-reveal: 600ms ease-out;
}
```

---

## Final Notes

This design system was built specifically for the BlurOps landing page and its target audience of burnt-out agency founders. Every decision — from the near-black background to the electric blue accent, from the 18px body text to the 8px spacing grid — was chosen based on research into conversion optimization, color psychology, responsive design best practices, and the specific emotional needs of the ICP.

**Key conversion drivers in this design:**

1. **Dark premium aesthetic** builds immediate trust and differentiates from typical "guru" course pages
2. **Blue CTAs on dark background** create maximum contrast and visibility while signaling trust and professionalism
3. **Cyan (#2CBBFF) secondary accents** add energy and a modern, tech-forward feel without overwhelming
4. **Larger body text (18px default)** ensures comfortable, effortless reading for a busy audience
5. **Generous whitespace** signals organization and calm — the exact feeling this audience craves
6. **Single-column text** at 720px max-width ensures comfortable reading without eye fatigue
7. **5 CTA placements** across the page ensure no visitor has to scroll far to take action
8. **Mobile-first responsive** captures the 60%+ of traffic arriving from social and email
9. **Red for pain stats, green for outcomes** creates unconscious before/after emotional contrast
10. **Evenly distributed card grids** create visual balance and professional polish across all sections
11. **Accordion patterns on mobile** prevent scroll fatigue on a long-form sales page

Use this document as the single source of truth for every design and development decision on the BlurOps landing page.
