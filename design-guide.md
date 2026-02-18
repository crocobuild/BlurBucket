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

| Element | Desktop | Tablet | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|--------|-------------|----------------|
| **Display / Hero H1** | 56px (3.5rem) | 44px (2.75rem) | 36px (2.25rem) | 800 (ExtraBold) | 1.1 | -0.02em |
| **H1** | 48px (3rem) | 40px (2.5rem) | 32px (2rem) | 700 (Bold) | 1.15 | -0.02em |
| **H2 (Section Headings)** | 36px (2.25rem) | 30px (1.875rem) | 26px (1.625rem) | 700 (Bold) | 1.2 | -0.01em |
| **H3 (Subsection Headings)** | 24px (1.5rem) | 22px (1.375rem) | 20px (1.25rem) | 600 (SemiBold) | 1.3 | 0 |
| **H4 (Minor Headings)** | 20px (1.25rem) | 18px (1.125rem) | 18px (1.125rem) | 600 (SemiBold) | 1.35 | 0 |
| **Body (Large)** | 18px (1.125rem) | 18px (1.125rem) | 16px (1rem) | 400 (Regular) | 1.6 | 0 |
| **Body (Default)** | 16px (1rem) | 16px (1rem) | 16px (1rem) | 400 (Regular) | 1.6 | 0 |
| **Body (Small)** | 14px (0.875rem) | 14px (0.875rem) | 14px (0.875rem) | 400 (Regular) | 1.5 | 0 |
| **Caption / Label** | 12px (0.75rem) | 12px (0.75rem) | 12px (0.75rem) | 500 (Medium) | 1.4 | 0.02em |
| **Eyebrow / Pre-headline** | 14px (0.875rem) | 14px (0.875rem) | 13px (0.8125rem) | 600 (SemiBold) | 1.4 | 0.08em |
| **CTA Button Text** | 18px (1.125rem) | 16px (1rem) | 16px (1rem) | 600 (SemiBold) | 1 | 0.01em |
| **Nav Links** | 15px (0.9375rem) | 15px | 16px (1rem) | 500 (Medium) | 1 | 0.01em |
| **Stat Numbers** | 48px (3rem) | 40px (2.5rem) | 36px (2.25rem) | 800 (ExtraBold) | 1.1 | -0.02em |
| **Stat Labels** | 14px (0.875rem) | 14px | 13px | 400 (Regular) | 1.4 | 0.01em |
| **Blockquote / Pull Quote** | 20px (1.25rem) | 18px (1.125rem) | 17px (1.0625rem) | 400 (Regular) Italic | 1.5 | 0 |

### Fluid Typography CSS (clamp)

```css
:root {
  /* Display / Hero */
  --text-display: clamp(2.25rem, 5vw, 3.5rem);

  /* H1 */
  --text-h1: clamp(2rem, 4vw, 3rem);

  /* H2 */
  --text-h2: clamp(1.625rem, 3vw, 2.25rem);

  /* H3 */
  --text-h3: clamp(1.25rem, 2.5vw, 1.5rem);

  /* H4 */
  --text-h4: clamp(1.125rem, 2vw, 1.25rem);

  /* Body Large */
  --text-body-lg: clamp(1rem, 1.5vw, 1.125rem);

  /* Body Default */
  --text-body: 1rem; /* Always 16px — do not go below this */

  /* Eyebrow */
  --text-eyebrow: clamp(0.8125rem, 1.2vw, 0.875rem);

  /* Stats */
  --text-stat: clamp(2.25rem, 4vw, 3rem);
}
```

### Typography Rules

1. **Maximum line length:** 65–75 characters for body text (approximately `max-width: 680px` for 16px body). This is critical for readability.
2. **Paragraph spacing:** `margin-bottom: 1.5em` between paragraphs.
3. **Heading spacing:** Headings get `margin-top: 2em` and `margin-bottom: 0.75em` relative to their font size.
4. **Never go below 16px** for any readable body text on any screen size. This is a hard rule for accessibility.
5. **Eyebrow text** is always uppercase with wide letter-spacing (0.08em).
6. **Bold emphasis** within body text uses weight 600 (SemiBold), not 700, to avoid visual heaviness in paragraphs.
7. **No underlines** except for text links on hover.

---

## 3. Color System

### Design Decision: Near-Black + Orange Accent

**Why not pure black (#000000)?** Pure black creates harsh contrast against white text that causes eye strain on extended reading. A near-black (#0A0A0F) with a subtle cool undertone feels premium, reduces fatigue, and creates depth when layered with card surfaces.

**Why orange as the primary accent?** Orange combines energy with warmth. On dark backgrounds, it creates one of the highest-contrast, most visible accent colors. In color psychology, orange signals urgency without aggression, action without anxiety — perfect for CTAs targeting a burned-out audience who needs motivation, not pressure. Orange also stands out in a B2B landscape dominated by blues and greens.

### Color Palette

#### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0F` | Main page background — near-black with subtle blue-purple undertone |
| `--bg-secondary` | `#12121A` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#1A1A24` | Hover states, nested elements, input fields |
| `--bg-elevated` | `#22222E` | Modal backgrounds, dropdown menus, tooltips |
| `--bg-accent-subtle` | `rgba(255, 107, 53, 0.08)` | Subtle orange tint for highlighted sections |

#### Text Colors

| Token | Hex | Usage | Contrast on #0A0A0F |
|-------|-----|-------|---------------------|
| `--text-primary` | `#FFFFFF` | Headings (H1, H2) — pure white for maximum impact | 19.5:1 |
| `--text-secondary` | `#E0E0E6` | Body text — slightly off-white to reduce eye strain | 14.8:1 |
| `--text-tertiary` | `#9999A8` | Supporting text, labels, secondary info | 6.2:1 |
| `--text-muted` | `#666680` | Disabled text, footnotes, fine print | 3.8:1 |
| `--text-accent` | `#FF6B35` | Highlighted keywords, accent text | 5.1:1 |

#### Brand / Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#FF6B35` | Primary CTA buttons, key highlights, active states |
| `--accent-primary-hover` | `#FF8555` | CTA hover state — slightly lighter and warmer |
| `--accent-primary-active` | `#E55A2B` | CTA pressed/active state — slightly darker |
| `--accent-primary-glow` | `rgba(255, 107, 53, 0.25)` | Glow effect behind CTA buttons (box-shadow) |
| `--accent-secondary` | `#6B46C1` | Secondary highlights, tags, badges, framework labels |
| `--accent-secondary-hover` | `#7C5CD0` | Secondary hover state |

#### Borders & Dividers

| Token | Hex | Usage |
|-------|-----|-------|
| `--border-default` | `#1F1F2E` | Default card borders, subtle separators |
| `--border-hover` | `#2E2E40` | Hover state borders |
| `--border-accent` | `rgba(255, 107, 53, 0.3)` | Accent-colored borders for emphasis |
| `--divider` | `#1A1A24` | Horizontal section dividers |

#### Semantic / Utility Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#34D399` | Success indicators, positive stats |
| `--warning` | `#FBBF24` | Warning states, attention items |
| `--error` | `#F87171` | Error states, critical stats (burnout %) |
| `--info` | `#60A5FA` | Informational elements, links |

### Color Usage Rules

1. **60-30-10 Rule:** 60% dark backgrounds, 30% text (white/off-white), 10% accent orange.
2. **CTA buttons** are the ONLY elements that use `--accent-primary` at full saturation. Everything else gets the desaturated or transparent variant.
3. **Never use orange for body text** — only for short highlights, tags, or single keywords within a sentence.
4. **Section backgrounds alternate** between `--bg-primary` and `--bg-secondary` to create visual rhythm between page sections.
5. **Gradient usage** is minimal. If used, always subtle: `linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)`.
6. **Stats and numbers** that represent pain (69.6%, 85%) use `--error` (#F87171). Stats that represent positive outcomes use `--success` (#34D399).

### Gradient Specifications

```css
/* Hero section subtle gradient */
.hero-bg {
  background: linear-gradient(180deg, #0F0F18 0%, #0A0A0F 100%);
}

/* CTA button gradient (optional, for extra emphasis) */
.cta-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
}

/* Accent glow behind CTA */
.cta-primary {
  box-shadow: 0 0 40px rgba(255, 107, 53, 0.2), 0 4px 16px rgba(255, 107, 53, 0.15);
}

/* Section divider gradient line */
.section-divider {
  background: linear-gradient(90deg, transparent 0%, #FF6B35 50%, transparent 100%);
  height: 1px;
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
| Between paragraphs | 24px | 24px | 20px |
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
- Stacked stat cards (1 per row)
- Hamburger menu navigation
- Pain quotes: show 6 of 12, expand to reveal rest
- Before/After table: stacked cards instead of side-by-side
- Curriculum weeks: accordion (collapsed by default)
- Value stack: vertical card layout
- FAQ: accordion (collapsed by default)
- Font sizes at mobile minimum

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
  background: #FF6B35;
  color: #FFFFFF;
  font-size: 1.125rem;       /* 18px */
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 56px;
  min-width: 200px;
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
}

.cta-primary:hover {
  background: #FF8555;
  box-shadow: 0 0 40px rgba(255, 107, 53, 0.3);
  transform: translateY(-1px);
}

.cta-primary:active {
  background: #E55A2B;
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
  color: #FF6B35;
  border: 2px solid #FF6B35;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 8px;
}

.cta-secondary:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: #FF8555;
}
```

**CTA micro-text (below button):**
```css
.cta-micro {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin-top: 12px;
  text-align: center;
}
```

### Cards (General)

```css
.card {
  background: var(--bg-secondary);       /* #12121A */
  border: 1px solid var(--border-default); /* #1F1F2E */
  border-radius: 12px;
  padding: 32px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.card:hover {
  border-color: var(--border-hover);     /* #2E2E40 */
  background: var(--bg-tertiary);        /* #1A1A24 */
}

/* Mobile */
@media (max-width: 767px) {
  .card {
    padding: 24px;
    border-radius: 10px;
  }
}
```

### Stat Cards (Trust Bar)

```css
.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
}

.stat-number {
  font-size: var(--text-stat);          /* clamp(2.25rem, 4vw, 3rem) */
  font-weight: 800;
  color: var(--error);                  /* #F87171 for pain stats */
  line-height: 1.1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  line-height: 1.4;
}

.stat-source {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 8px;
  font-style: italic;
}
```

### Blockquote / Pain Quotes

```css
.pain-quote {
  border-left: 3px solid var(--accent-primary); /* #FF6B35 */
  padding: 16px 24px;
  margin: 16px 0;
  background: var(--bg-accent-subtle);   /* rgba(255, 107, 53, 0.08) */
  border-radius: 0 8px 8px 0;
}

.pain-quote p {
  font-size: 1rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.6;
}

.pain-quote cite {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  font-style: normal;
  font-weight: 600;
  display: block;
  margin-top: 8px;
}
```

### Before/After Table

```css
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-default);
}

.comparison-table th {
  background: var(--bg-tertiary);
  padding: 16px 24px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
}

.comparison-table th.before { color: var(--error); }
.comparison-table th.after  { color: var(--success); }

.comparison-table td {
  padding: 16px 24px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-default);
}
```

### FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid var(--border-default);
  padding: 24px 0;
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-top: 16px;
  max-width: 720px;
}
```

### Sticky CTA Bar

```css
.sticky-cta-bar {
  position: fixed;
  bottom: 0;                /* mobile: bottom bar */
  /* OR top: 0; for desktop: top bar */
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
- Subtle gradient: `linear-gradient(180deg, #0F0F18 0%, #0A0A0F 100%)`
- Optional: very subtle grid pattern overlay at 3–5% opacity for depth
- No hero image — the typography IS the hero

**Content stack (top to bottom):**
1. **Eyebrow tag** — uppercase, 14px, SemiBold, `--text-accent` (#FF6B35), letter-spacing 0.08em
   - Example: `FOR AGENCY OWNERS DOING $200K–$750K WHO ARE DONE BEING THE BOTTLENECK`
2. **Headline (H1)** — Display size (56px desktop / 36px mobile), ExtraBold, `--text-primary` (white)
   - Max-width: 900px, centered
   - Recommended: "Remove Yourself as the Bottleneck in 4 Weeks"
3. **Subheadline** — Body Large (18px), Regular, `--text-secondary` (off-white)
   - Max-width: 680px, centered
   - `margin-top: 24px`
4. **CTA Button** — Primary CTA, centered
   - `margin-top: 40px`
5. **Micro-text below CTA** — 14px, `--text-tertiary`
   - Example: "Only 15 spots per cohort. Next cohort starts [DATE]."
   - `margin-top: 12px`
6. **Risk reducer** — 14px, `--text-tertiary`
   - Example: "60-day money-back guarantee."
   - `margin-top: 8px`

**Spacing:**
- Eyebrow to H1: 16px
- H1 to subheadline: 24px
- Subheadline to CTA: 40px

### SECTION 2: TRUST BAR

**Layout:**
- Background: `--bg-secondary` (#12121A) to create visual separation from hero
- Padding: 48px top/bottom (desktop), 32px (mobile)
- Stat cards in a responsive grid

**Grid:**
- Desktop: 4 cards in a row (if 4 stats) or 3 in a row
- Tablet: 2x2 grid
- Mobile: 2x2 grid (or 1 column if space is tight)
- Gap: 24px between cards

**Stat card structure:**
- Number: `--text-stat` size, weight 800, colored per type (red for pain, orange for BlurOps, white for neutral)
- Label: 14px, `--text-secondary`, max 2 lines
- Source: 12px, `--text-muted`, italic

**Recommended 4 stats:**
1. 69.6% — burnout rate (color: `--error`)
2. 85% — believe it gets worse (color: `--error`)
3. 90% — sell due to burnout (color: `--error`)
4. 4 weeks — to build systems (color: `--accent-primary`)

### SECTION 3: PROBLEM + AMPLIFY

**Layout:**
- Background: `--bg-primary`
- Two-part structure: intro text block, then pain quotes, then cost-of-inaction

**Part A — Problem Statement:**
- Section heading (H2): Left-aligned, max-width 720px
- Intro paragraphs: Body Large (18px), max-width 680px
- Recommended heading: "You're Successful. You're Exhausted. And Nobody Talks About That Combination."

**Part B — Pain Quotes:**
- Layout: vertically stacked quote cards with left orange border
- Mobile: show first 6 quotes, "See more" button to expand remaining 6
- Desktop: show all 12 or use a 2-column masonry layout

**Part C — Cost of Inaction:**
- Sub-heading (H3): "Here's what staying in this pattern costs you."
- 4 blocks, each with an icon/emoji, a label (bold), and 2–3 sentence explanation
  - Your Time — use `--error` accent
  - Your Revenue — use `--error` accent
  - Your Health — use `--error` accent
  - Your Business Value — use `--error` accent

**Cost-of-Inaction Table:**
- Use the comparison table component
- Background: `--bg-secondary` within a card
- Headers: bold, `--text-primary`
- Data: `--text-secondary`

**Bridge Statement:**
- Max-width: 680px
- Slightly larger text: 20px, italic, `--text-primary`
- Optional: thin accent line above (`--accent-primary`, 60px wide, centered)

### SECTION 4: DREAM OUTCOME

**Layout:**
- Background: `--bg-secondary` (alternating from Section 3)
- Two parts: visualization block + before/after table

**"Imagine If..." Block:**
- Each "Imagine" paragraph starts with "Imagine" in `--accent-primary` (orange, bold)
- Rest of paragraph in `--text-secondary`
- Each paragraph has `margin-bottom: 24px`
- Wrap in a max-width: 720px container

**Before/After Table:**
- Use comparison table component (defined in Section 6)
- Desktop: side-by-side columns
- Mobile: stacked cards — "BEFORE" card (with red tinted top border) followed by "AFTER" card (with green tinted top border)

### SECTION 5: STORY + TRANSFORMATION (BLUR Framework)

**Layout:**
- Background: `--bg-primary`
- Three sub-sections: Failed Solutions Pattern → StoryBrand Reframe → BLUR Framework

**Failed Solutions Pattern (Stages 1–5):**
- Each stage is a card with:
  - Stage number badge (small circle, `--bg-tertiary`, `--text-primary`)
  - Stage title (H4, bold): e.g., "Stage 1: You hire someone to help."
  - 1 paragraph description (Body, `--text-secondary`)
- Cards stacked vertically with 24px gap
- Optional: thin connecting line between stage badges (timeline visual)

**BLUR Framework:**
- 4 blocks, each representing B / L / U / R
- Each block:
  - Letter: Large (48px), `--accent-primary` (orange), weight 800
  - Label (H3): e.g., "Build Clarity"
  - 1–2 paragraphs of description
  - Italic closing line: `--text-tertiary`
- Layout: stacked vertically on mobile, 2x2 grid on desktop (optional)
- Each block background: `--bg-secondary` card with left border in `--accent-primary`

**CTA #2:**
- Centered, primary CTA button
- Micro-text below
- 48px spacing above and below

### SECTION 6: CURRICULUM (Offer)

**Layout:**
- Background: `--bg-secondary`
- 4 week cards

**Week Cards:**
- Desktop: show all 4 visible, stacked vertically or in a 2x2 grid
- Mobile: accordion — only the week title visible, tap to expand
- Tablet: tabs (Week 1 | Week 2 | Week 3 | Week 4)

**Each Week Card:**
```
┌────────────────────────────────────────────┐
│  WEEK 1                        [B icon]    │
│  ─────────────────────────────────         │
│  BUILD CLARITY                             │
│                                            │
│  Theme: See the bottleneck. Define the     │
│  destination. Set the targets.             │
│                                            │
│  WHAT YOU DO:                              │
│  • Founder Vision Exercise...              │
│  • Core Process Identification...          │
│  • Founder Role Redesign...                │
│  • 90-Day OKRs...                          │
│                                            │
│  WHAT YOU WALK AWAY WITH:                  │
│  ✓ Founder Vision Map                      │
│  ✓ 3-5 core processes identified           │
│  ✓ Clear "stop doing" list                 │
│  ✓ 90-day OKR set                          │
│  ✓ OKR Dashboard — live and tracking       │
└────────────────────────────────────────────┘
```

- Card background: `--bg-primary` (darker, to stand out against section bg)
- Week number: Eyebrow style, `--accent-primary`
- Title: H3, `--text-primary`
- Theme: Body Small, `--text-tertiary`, italic
- "What you do" items: Body, `--text-secondary`, with `•` bullet in `--accent-primary`
- "Walk away with" items: Body, `--text-secondary`, with `✓` checkmark in `--success` (#34D399)

**Master Deliverables List ("By the end of 4 weeks..."):**
- Numbered list, 1–10
- Each number: `--accent-primary`, weight 700
- Each item: `--text-secondary`
- Wrap in a card with slightly different background or border-accent

**CTA #3:** Centered, primary CTA

### SECTION 7: SOCIAL PROOF

**Layout:**
- Background: `--bg-primary`
- Two rows: stat cards + founder pull quotes

**Stat Cards:**
- Same component as Trust Bar, but with more detail
- Desktop: 5 in a row (or 3+2)
- Mobile: horizontal swipe carousel, 1 card visible at a time

**Founder Pull Quotes:**
- Desktop: 3-column grid of quote cards
- Tablet: 2-column grid
- Mobile: horizontal swipe carousel
- Each card:
  - Large opening quotation mark " in `--accent-primary`, 48px, opacity 0.3
  - Quote text: 16px, italic, `--text-secondary`
  - Attribution: 14px, bold, `--text-primary` (name) + `--text-tertiary` (title)
  - Card background: `--bg-secondary`

**Testimonials (when available):**
- Larger cards than pull quotes
- Include photo placeholder (circular, 64px, with `--border-accent`)
- Star rating: 5 stars in `--accent-primary`
- Longer quote text

### SECTION 8: WHO THIS IS FOR / NOT FOR

**Layout:**
- Background: `--bg-secondary`
- Two-column layout on desktop (For | Not For), stacked on mobile

**"This Is For You If..." Column:**
- Background: subtle green tint — `rgba(52, 211, 153, 0.05)`
- Left border: 3px solid `--success`
- Each item: checkmark icon (✓) in `--success` + text in `--text-secondary`

**"This Is NOT For You If..." Column:**
- Background: subtle red tint — `rgba(248, 113, 113, 0.05)`
- Left border: 3px solid `--error`
- Each item: X icon (✕) in `--error` + text in `--text-secondary`

**CTA #4:** Centered below both columns

### SECTION 9: VALUE STACK + PRICING

**Layout:**
- Background: `--bg-primary`
- Value stack table → competitor anchoring → ROI math → pricing card → guarantee

**Value Stack Table:**
- Full-width card with `--bg-secondary` background
- Table with two columns: "What You Get" | "Individual Value"
- Value column right-aligned, `--text-tertiary`
- Total row: bold, `--text-primary`, larger font, `--accent-primary` for total number
- Striped rows: alternate between `--bg-secondary` and `--bg-tertiary`

**Pricing Card (centered, prominent):**
```
┌─────────────────────────────────────────┐
│           YOUR INVESTMENT               │
│                                         │
│           $2,997                         │
│      (or 3 payments of $1,099)          │
│                                         │
│     [APPLY NOW — RISK FREE]            │
│                                         │
│    60-day money-back guarantee          │
│    Next cohort starts [DATE]            │
│    Only 15 spots available              │
└─────────────────────────────────────────┘
```
- Card background: `--bg-secondary`
- Border: 2px solid `--accent-primary`
- Price: 48px, weight 800, `--text-primary`
- Payment plan: 16px, `--text-tertiary`
- Box-shadow: CTA glow effect
- Max-width: 480px, centered

**Guarantee Block:**
- Bordered card with a shield/checkmark icon
- Background: `--bg-accent-subtle`
- Border: 1px solid `--accent-primary` at 30% opacity
- H3 heading + paragraph text

**Competitor Anchoring:**
- 4 blocks, each showing competitor + price + limitation
- Layout: 2x2 grid (desktop), stacked (mobile)
- Each block: card with `--bg-secondary`, struck-through price in `--text-muted`

**ROI Math:**
- Simple 3-line calculation
- Numbers in `--accent-primary` or `--success`
- Final line bold, larger font

### SECTION 10: FAQ

**Layout:**
- Background: `--bg-secondary`
- Accordion component (defined in Section 6 components)
- Max-width: 800px, centered
- 8 questions

**Desktop:** All collapsed by default. Click to expand one at a time (or allow multiple).
**Mobile:** Same, accordion.

### SECTION 11: FOUNDER CREDIBILITY

**Layout:**
- Background: `--bg-primary`
- Photo placeholder (left) + text (right) on desktop
- Stacked on mobile (photo on top, text below)

**Photo:**
- Circular or rounded-square (border-radius: 16px)
- 200px × 200px on desktop, 120px × 120px on mobile
- Border: 2px solid `--accent-primary`

**Text:**
- H2 heading
- 2–3 paragraphs, max-width: 600px

### SECTION 12: FINAL CTA

**Layout:**
- Background: gradient from `--bg-secondary` to `--bg-primary`
- Full-width section, content centered
- Maximum emotional impact — this is the last shot

**Content stack:**
1. H2 headline (transformation restatement) — display-sized, bold
2. 1 paragraph — body large, `--text-secondary`
3. Final testimonial in a highlighted quote card
4. Primary CTA — slightly larger than previous CTAs (padding: 20px 48px)
5. Price + guarantee micro-text
6. Urgency line: "15 spots per cohort. Next cohort starts [DATE]."
7. Application process steps (4 numbered steps, compact)

**Application Steps:**
- Horizontal timeline on desktop (4 dots connected by a line)
- Vertical timeline on mobile
- Each step: number circle (`--accent-primary` background, white text) + short description

### FOOTER

**Layout:**
- Background: `--bg-primary` (or slightly darker)
- Border-top: 1px solid `--border-default`
- Padding: 48px top, 32px bottom

**Content:**
- Logo (left)
- Copyright + legal links (center or below)
- Social links (right) — icons only, `--text-tertiary`, hover → `--text-primary`
- Keep minimal — this is a landing page, not a multi-page site

---

## 8. SEO & Accessibility Requirements

### Heading Hierarchy (SEO-Critical)

```
<h1>  → ONE per page — Hero headline
        Example: "Remove Yourself as the Bottleneck in 4 Weeks"

<h2>  → Section headings (one per major section)
        Examples:
        "You're Successful. You're Exhausted."
        "What Changes When You're No Longer the Bottleneck"
        "The BLUR Framework"
        "What You Build in 4 Weeks"
        "The Investment"
        "FAQ"

<h3>  → Subsections within H2 sections
        Examples:
        "Your Time" / "Your Revenue" / "Your Health"
        "Week 1: Build Clarity" / "Week 2: Layer in Systems"
        Individual FAQ questions

<h4>  → Minor headings within H3 sections
        Examples:
        "What You Do" / "What You Walk Away With"
        Individual stages in the "failed solutions" pattern
```

**Rules:**
- Never skip heading levels (no H1 → H3)
- One H1 per page
- Headings must be descriptive, not generic ("Our Solution" is bad; "The BLUR Framework" is good)
- Include target keywords naturally: "agency operations," "founder bottleneck," "AI-ready SOPs"

### Meta Tags

```html
<title>BlurOps — Remove Yourself as the Bottleneck in 4 Weeks | Agency Operations Bootcamp</title>
<meta name="description" content="A 4-week live bootcamp for agency founders doing $200K-$750K. Build documented systems, AI-ready SOPs, and OKR dashboards. Stop being the bottleneck.">
<meta name="keywords" content="agency operations, founder burnout, SOP creation, agency systems, AI operations, OKR dashboard, agency scaling">
```

### Open Graph Tags

```html
<meta property="og:title" content="BlurOps — Remove Yourself as the Bottleneck in 4 Weeks">
<meta property="og:description" content="The live bootcamp for burnt-out agency founders. Build systems. Reclaim 20+ hours/week. In 4 weeks.">
<meta property="og:image" content="[1200x630 social share image]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://blurops.com">
```

### Accessibility (WCAG AA Compliance)

| Requirement | Standard | BlurOps Implementation |
|-------------|----------|------------------------|
| Text contrast (normal) | 4.5:1 minimum | All body text ≥ 14.8:1 ✅ |
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
| Page scroll reveal | Fade up (20px) + opacity 0→1 | 600ms | ease-out |
| CTA button hover | Scale 1.02 + shadow expand | 200ms | ease |
| CTA button press | Scale 0.98 | 100ms | ease |
| Nav background | Opacity 0→1 on scroll | 300ms | ease |
| Accordion expand | Height auto + fade in | 300ms | ease-in-out |
| Sticky bar enter | Slide in from bottom/top | 300ms | ease-out |
| Carousel slide | Translate-X | 400ms | ease-in-out |
| Stat number | Count up from 0 | 1500ms | ease-out (on scroll into view) |
| Tab switch | Fade + slight slide | 200ms | ease |

### Rules

1. **No animation on initial page load** except hero content (fade in).
2. **Scroll-triggered animations fire once** — never re-animate when scrolling back up.
3. **Respect `prefers-reduced-motion`** — disable all motion animations for users who prefer reduced motion.
4. **No parallax scrolling.** It's distracting and often causes performance issues on mobile.
5. **No auto-playing carousels.** All carousels are user-controlled (swipe or click).
6. **Maximum of 3 elements animating simultaneously** in any viewport. More creates visual chaos.

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
  --bg-secondary: #12121A;
  --bg-tertiary: #1A1A24;
  --bg-elevated: #22222E;
  --bg-accent-subtle: rgba(255, 107, 53, 0.08);

  /* Colors - Text */
  --text-primary: #FFFFFF;
  --text-secondary: #E0E0E6;
  --text-tertiary: #9999A8;
  --text-muted: #666680;
  --text-accent: #FF6B35;

  /* Colors - Accent */
  --accent-primary: #FF6B35;
  --accent-primary-hover: #FF8555;
  --accent-primary-active: #E55A2B;
  --accent-primary-glow: rgba(255, 107, 53, 0.25);
  --accent-secondary: #6B46C1;
  --accent-secondary-hover: #7C5CD0;

  /* Colors - Borders */
  --border-default: #1F1F2E;
  --border-hover: #2E2E40;
  --border-accent: rgba(255, 107, 53, 0.3);
  --divider: #1A1A24;

  /* Colors - Semantic */
  --success: #34D399;
  --warning: #FBBF24;
  --error: #F87171;
  --info: #60A5FA;

  /* Typography */
  --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --text-display: clamp(2.25rem, 5vw, 3.5rem);
  --text-h1: clamp(2rem, 4vw, 3rem);
  --text-h2: clamp(1.625rem, 3vw, 2.25rem);
  --text-h3: clamp(1.25rem, 2.5vw, 1.5rem);
  --text-h4: clamp(1.125rem, 2vw, 1.25rem);
  --text-body-lg: clamp(1rem, 1.5vw, 1.125rem);
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-eyebrow: clamp(0.8125rem, 1.2vw, 0.875rem);
  --text-stat: clamp(2.25rem, 4vw, 3rem);

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
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Transitions */
  --transition-fast: 100ms ease;
  --transition-default: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-reveal: 600ms ease-out;
}
```

---

## Final Notes

This design system was built specifically for the BlurOps landing page and its target audience of burnt-out agency founders. Every decision — from the near-black background to the orange accent, from the Inter font to the 8px spacing grid — was chosen based on research into conversion optimization, color psychology, responsive design best practices, and the specific emotional needs of the ICP.

**Key conversion drivers in this design:**

1. **Dark premium aesthetic** builds immediate trust and differentiates from typical "guru" course pages
2. **Orange CTAs on dark background** create maximum contrast and visibility at every scroll depth
3. **Generous whitespace** signals organization and calm — the exact feeling this audience craves
4. **Single-column text** at 720px max-width ensures comfortable reading without eye fatigue
5. **5 CTA placements** across the page ensure no visitor has to scroll far to take action
6. **Mobile-first responsive** captures the 60%+ of traffic arriving from social and email
7. **Red for pain stats, green for outcomes** creates unconscious before/after emotional contrast
8. **Accordion patterns on mobile** prevent scroll fatigue on a long-form sales page

Use this document as the single source of truth for every design and development decision on the BlurOps landing page.
