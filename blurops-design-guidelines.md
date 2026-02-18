# BlurOps — UX Design & Conversion Structure Guidelines

**Version:** 1.0
**Last Updated:** February 18, 2026
**Purpose:** This document defines every design decision for the BlurOps website — typography, colors, spacing, responsiveness, navigation, buttons, and conversion structure. Follow this document before writing a single line of code.

---

## 1. DESIGN PHILOSOPHY

BlurOps sells a $2,997 bootcamp to burnt-out agency founders doing $200K–$750K/year. Every design decision serves one goal: **make the founder feel understood, then show them the way out.**

The design must feel:

- **Premium but not corporate** — these founders hate corporate. They want founder-to-founder energy.
- **Clean and structured** — mirrors the "systems thinking" BlurOps teaches. The website itself should feel like a well-built system.
- **Direct and confident** — no decorative fluff. Every element earns its place.
- **Warm and human** — dark, authoritative tones paired with warm accents. This isn't a cold SaaS dashboard. It's a lifeline.

**Anti-patterns to avoid:** Overly playful illustrations, stock photos of smiling people in offices, gradients everywhere, rounded-everything bubble aesthetic, cluttered layouts with competing CTAs.

---

## 2. COLOR PALETTE

### Primary Colors

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Primary Dark** | Midnight | `#0F172A` | 15, 23, 42 | Hero backgrounds, navbar, footer, dark sections |
| **Primary Mid** | Deep Navy | `#1E293B` | 30, 41, 59 | Card backgrounds on dark sections, secondary dark |
| **Accent** | Amber Fire | `#F59E0B` | 245, 158, 11 | Primary CTA buttons, highlights, stat numbers, key data |
| **Accent Hover** | Deep Amber | `#D97706` | 217, 119, 6 | CTA hover state |
| **White** | Snow | `#FFFFFF` | 255, 255, 255 | Light section backgrounds, text on dark |
| **Off-White** | Warm Gray | `#F8FAFC` | 248, 250, 252 | Alternating section backgrounds |
| **Light Gray** | Mist | `#E2E8F0` | 226, 232, 240 | Borders, dividers, subtle backgrounds |

### Text Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Heading Text (light bg)** | `#0F172A` | All headings on white/light backgrounds |
| **Body Text (light bg)** | `#334155` | Paragraphs, descriptions on light backgrounds |
| **Secondary Text (light bg)** | `#64748B` | Captions, meta info, eyebrow text |
| **Text on Dark** | `#F1F5F9` | Body text on dark backgrounds |
| **Heading on Dark** | `#FFFFFF` | Headings on dark backgrounds |

### Extended Neutral Colors (used in specific components)

| Role | Hex | Usage |
|------|-----|-------|
| **Slate 300** | `#CBD5E1` | Subheadline text on dark backgrounds, secondary text on dark |
| **Slate 400** | `#94A3B8` | Micro-copy on dark backgrounds, muted text on dark |
| **Before Red (light)** | `#FEE2E2` | Before/After table — "Before" column background |
| **After Green (light)** | `#DCFCE7` | Before/After table — "After" column background |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Checkmarks, positive indicators |
| **Warning** | `#F59E0B` | Same as accent — urgency indicators |
| **Error/Pain** | `#EF4444` | Pain points, cost-of-inaction numbers |
| **Link** | `#3B82F6` | Inline text links |
| **Link Hover** | `#2563EB` | Link hover state |

### Color Usage Rules

- **Dark sections** (hero, problem/pain, final CTA): Use `#0F172A` background with white/amber text
- **Light sections** (dream outcome, framework, curriculum): Use `#FFFFFF` or `#F8FAFC` background with dark text
- **Alternating rhythm**: Dark → Light → Light → Dark → Light → Dark. Never stack three light or three dark sections.
- **Accent color (`#F59E0B`) appears ONLY on**: CTA buttons, stat numbers, highlighted keywords, and active nav indicators. Overusing amber kills its impact.

---

## 3. TYPOGRAPHY

### Font Selection

| Role | Font | Fallback | Source |
|------|------|----------|--------|
| **Headings** | Inter | system-ui, -apple-system, sans-serif | Google Fonts (variable) |
| **Body** | Inter | system-ui, -apple-system, sans-serif | Google Fonts (variable) |
| **Stats/Numbers** | DM Mono | "Courier New", monospace | Google Fonts |

Inter is used for both headings and body because it's clean, modern, highly legible at all sizes, and comes in variable weights — perfect for a systems-focused brand. DM Mono is used exclusively for statistics and data callouts to give them a "dashboard" feel that reinforces the operational/data theme.

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale — Desktop (≥1024px)

| Element | Font Size | Weight | Line Height | Letter Spacing | Max Width |
|---------|-----------|--------|-------------|----------------|-----------|
| **H1 — Hero Headline** | 56px (3.5rem) | 800 | 1.1 | -0.03em | 14–16 words |
| **H2 — Section Headline** | 40px (2.5rem) | 700 | 1.2 | -0.02em | 900px |
| **H3 — Subsection Head** | 28px (1.75rem) | 700 | 1.3 | -0.02em | — |
| **H4 — Card Title** | 22px (1.375rem) | 600 | 1.3 | -0.01em | — |
| **Eyebrow / Pre-head** | 14px (0.875rem) | 600 | 1.4 | 0.08em | — |
| **Body — Large** | 18px (1.125rem) | 400 | 1.7 | -0.01em | 680px (≈66 chars) |
| **Body — Regular** | 16px (1rem) | 400 | 1.6 | -0.01em | 680px |
| **Body — Small** | 14px (0.875rem) | 400 | 1.5 | 0em | — |
| **Caption / Meta** | 13px (0.8125rem) | 500 | 1.4 | 0.01em | — |
| **Stat Number** | 48px (3rem) | 500 | 1.1 | -0.02em | — |
| **Stat Label** | 14px (0.875rem) | 500 | 1.4 | 0.02em | — |
| **Button Text** | 16px (1rem) | 600 | 1 | 0em | — |
| **Nav Links** | 15px (0.9375rem) | 500 | 1 | 0em | — |

### Type Scale — Tablet (768px–1023px)

| Element | Font Size | Notes |
|---------|-----------|-------|
| **H1** | 44px (2.75rem) | Scaled down from 56px |
| **H2** | 34px (2.125rem) | Scaled down from 40px |
| **H3** | 24px (1.5rem) | |
| **H4** | 20px (1.25rem) | |
| **Body Large** | 17px (1.0625rem) | |
| **Body Regular** | 16px (1rem) | Same as desktop |
| **Stat Number** | 40px (2.5rem) | |

### Type Scale — Mobile (<768px)

| Element | Font Size | Notes |
|---------|-----------|-------|
| **H1** | 32px (2rem) | Significantly reduced for mobile readability |
| **H2** | 26px (1.625rem) | |
| **H3** | 21px (1.3125rem) | |
| **H4** | 18px (1.125rem) | |
| **Eyebrow** | 12px (0.75rem) | Slightly smaller, still uppercase |
| **Body Large** | 17px (1.0625rem) | Always stays 1px above Body Regular |
| **Body Regular** | 15px (0.9375rem) | Bumped slightly from 14px for mobile readability |
| **Stat Number** | 36px (2.25rem) | |
| **Button Text** | 16px (1rem) | Same — buttons stay consistent |

### Fluid Typography with CSS clamp()

For smooth scaling between breakpoints, use these clamp values:

```css
h1 { font-size: clamp(2rem, 5vw + 0.5rem, 3.5rem); }      /* 32px → 56px */
h2 { font-size: clamp(1.625rem, 3.5vw + 0.25rem, 2.5rem); } /* 26px → 40px */
h3 { font-size: clamp(1.3125rem, 2vw + 0.25rem, 1.75rem); } /* 21px → 28px */
.body-large { font-size: clamp(1rem, 1vw + 0.5rem, 1.125rem); } /* 16px → 18px */
```

### Typography Rules

1. **Headings are always Inter weight 700 or 800.** Never use 400 or 500 for headings.
2. **Body text is always Inter weight 400.** Use 500 only for emphasis within body text (instead of bold).
3. **Eyebrow text is always uppercase, weight 600, with wide letter-spacing (0.08em).** Color: accent amber on dark backgrounds, secondary gray on light backgrounds.
4. **Line length for body text must not exceed 680px (≈66 characters).** This is non-negotiable for readability.
5. **Stat numbers use DM Mono** in amber (`#F59E0B`) on dark backgrounds, or midnight (`#0F172A`) on light backgrounds.
6. **Never underline text unless it's a link.**

---

## 4. SPACING SYSTEM

All spacing uses an **8px base grid**. Every margin, padding, and gap is a multiple of 8.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon-to-text gaps, micro adjustments |
| `space-2` | 8px | Tight internal padding, inline gaps |
| `space-3` | 12px | Small component padding |
| `space-4` | 16px | Between list items, small gaps |
| `space-5` | 20px | Mobile horizontal padding |
| `space-6` | 24px | Between paragraphs, card internal padding |
| `space-8` | 32px | Between content blocks within a section |
| `space-10` | 40px | Between subsections, mobile section padding |
| `space-12` | 48px | Component group spacing |
| `space-16` | 64px | Tablet section padding (top/bottom) |
| `space-20` | 80px | Desktop section padding (top/bottom) |
| `space-24` | 96px | Hero section padding, large desktop spacing |
| `space-32` | 128px | Maximum hero padding on large screens |

### Section Padding by Breakpoint

| Breakpoint | Vertical (top/bottom) | Horizontal (left/right) | Max Content Width |
|------------|----------------------|------------------------|-------------------|
| Mobile (<768px) | 48px | 20px | 100% (with 20px gutters) |
| Tablet (768–1023px) | 64px | 40px | 720px |
| Desktop (1024–1279px) | 80px | 60px | 960px |
| Large Desktop (1280–1439px) | 96px | auto (centered) | 1140px |
| XL Desktop (≥1440px) | 96px | auto (centered) | 1200px |

### Spacing Rules

1. **External spacing is always ≥ internal spacing.** Section padding (80–96px) > card padding (24–32px) > element spacing (16–24px).
2. **Heading-to-body gap: 16px.** Between an H2 and the paragraph below it.
3. **Body-to-body gap: 24px.** Between consecutive paragraphs.
4. **Section heading to first content block: 40px.** Give section headlines room to breathe.
5. **CTA button margin-top: 32px.** Separation between last content element and the CTA button.
6. **Between cards in a grid: 24px gap** on desktop, **16px gap** on mobile.

---

## 5. RESPONSIVE BREAKPOINTS

### Breakpoint Definitions

```css
/* Mobile First — Base styles are for mobile (320px+) */

/* Small Mobile */
@media (min-width: 375px)  { /* iPhone default viewport */ }

/* Large Mobile / Small Tablet */
@media (min-width: 640px)  { /* Two-column card grids kick in */ }

/* Tablet */
@media (min-width: 768px)  { /* Navbar expands, layout shifts to multi-column */ }

/* Desktop */
@media (min-width: 1024px) { /* Full desktop nav, side-by-side layouts */ }

/* Large Desktop */
@media (min-width: 1280px) { /* Max content width reached, generous spacing */ }

/* XL Desktop */
@media (min-width: 1440px) { /* Content stays at max-width, outer margins grow */ }
```

### What Changes at Each Breakpoint

| Breakpoint | Layout Changes |
|------------|---------------|
| **<640px** | Single column. Full-width buttons. Stacked cards. Hamburger nav. Body text 15px. |
| **640px** | 2-column card grids. Pain bullets in 2 columns. Stats in 2×2 grid. |
| **768px** | Navbar switches from hamburger to full horizontal links. Before/After table side-by-side. Testimonials in 2-column layout. |
| **1024px** | Full desktop layout. Hero text + visual side-by-side (60/40 split). 3-column card grids. Curriculum in 2-column layout (week selector + content). |
| **1280px** | Max content width (1140px) kicks in. Content centers with auto margins. Generous section padding. |
| **1440px** | Max content width increases to 1200px. No layout changes, just more breathing room. |

### Grid System

- **Columns:** 12-column grid on desktop, 6-column on tablet, 4-column on mobile
- **Gutter:** 24px on desktop, 16px on mobile
- **Max content width:** 1200px
- **Content never touches screen edges** — minimum 20px padding on mobile

---

## 6. NAVBAR

### Desktop Navbar (≥1024px)

```
Height:         72px
Background:     Transparent on hero → White with shadow on scroll
Position:       Fixed (sticky at top)
Transition:     Background color 0.3s ease, box-shadow 0.3s ease
Logo:           Left-aligned. "BlurOps" wordmark in Inter 700, 22px
Nav Links:      Right-aligned. 5 links max. Inter 500, 15px
Link Spacing:   32px between links
CTA Button:     Right-most element. "Apply Now" in amber
Shadow:         0 1px 3px rgba(0,0,0,0.08) — only appears after scroll
Z-index:        1000
```

**Nav Link Order:** Framework → Curriculum → Results → Pricing → [Apply Now button]

**Scroll Behavior:**
- At top of page: Transparent background, white text (since hero is dark)
- After 80px scroll: White background, dark text, subtle shadow appears
- Transition: `background 0.3s ease, box-shadow 0.3s ease`

### Tablet Navbar (768px–1023px)

```
Height:         64px
Background:     White with shadow
Position:       Fixed
Logo:           Left-aligned, 20px
Hamburger:      Right-aligned, 32×32px touch target (48×48px clickable area)
Menu:           Full-screen overlay, dark background (#0F172A at 97% opacity)
Menu Links:     Centered, 24px font size, 48px vertical spacing between links
Menu CTA:       Full-width amber button at bottom of menu
```

### Mobile Navbar (<768px)

```
Height:         60px
Background:     White with shadow
Position:       Fixed
Logo:           Left, 18px
Hamburger:      Right, 28×28px icon (48×48px touch area)
Menu:           Same as tablet — full-screen overlay
Padding:        0 20px
```

### Navbar Rules

1. **Maximum 5 navigation links** (excluding CTA). More than 5 creates decision fatigue.
2. **CTA button is always visible** in desktop nav. It's the only element with a background color.
3. **Active section indicator:** 2px amber underline on the current section link (tracked via scroll spy).
4. **No dropdowns.** This is a single-page sales page. Every link scrolls to a section.
5. **Mobile menu close button:** Top-right X icon, same position as hamburger, for muscle memory.

---

## 7. BUTTONS & CTAs

### Primary CTA Button (Apply Now)

```css
.btn-primary {
  background: #F59E0B;
  color: #0F172A;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  min-width: 200px;
  text-align: center;
}

.btn-primary:hover {
  background: #D97706;
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**On Mobile:** Full-width (100% of container, max-width: 400px, centered).

### Hero CTA Button (Larger Variant)

```css
.btn-hero {
  /* Same as .btn-primary, but: */
  font-size: 18px;
  padding: 18px 48px;
  min-width: 280px;
  border-radius: 10px;
}
```

### Secondary Button (Ghost)

```css
.btn-secondary {
  background: transparent;
  color: #F59E0B;
  border: 2px solid #F59E0B;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 36px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(245, 158, 11, 0.1);
}
```

### CTA Placement Strategy

There are **5 CTA placements** across the page (per the PASTOR framework):

| # | Location | CTA Text | Context |
|---|----------|----------|---------|
| 1 | Hero section | "Apply for the Next Cohort" | After headline + subheadline |
| 2 | After BLUR Framework section | "I'm Ready to Build My Systems" | After they understand the method |
| 3 | After Curriculum section | "Apply Now — Limited Spots" | After they see the week-by-week plan |
| 4 | After Qualifier section | "Yes — I'm Ready to Apply" | After "Is this for you?" filtering |
| 5 | Final CTA section | "Apply Now" + risk reducer | Last chance, full amber background section |

### CTA Supporting Elements

**Micro-copy below CTA:** Always include a 1-line risk reducer directly below the button.
- Font: Inter 400, 14px, color: `#64748B` (on light bg) or `#94A3B8` (on dark bg)
- Example: "Application takes 2 minutes. No commitment until you speak with our team."

**Urgency line:** Placed above or below the CTA in bold.
- Font: Inter 600, 14px, color: `#F59E0B`
- Example: "Only 15 spots per cohort. Next cohort starts [DATE]."

### Button Rules

1. **One primary CTA per scroll section.** Two amber buttons should never be visible in the same viewport simultaneously. Space CTA placements so that scrolling reveals them one at a time — the 5 CTAs are distributed across the full page length, not clustered together.
2. **CTA text is always action-oriented.** "Apply Now" not "Learn More." "I'm Ready" not "Click Here."
3. **Minimum touch target: 48×48px.** Even if the button looks smaller, the clickable area must be at least this.
4. **No button shadows.** Shadows make buttons feel heavy. The amber color is enough contrast.
5. **Button border-radius is always 8px.** Not fully rounded (too playful), not sharp corners (too corporate).

---

## 8. SECTION LAYOUT & CONVERSION STRUCTURE

### Page Section Order (PASTOR Framework)

This is the exact section flow. Do not rearrange sections.

```
1.  HERO                          — Dark bg (#0F172A)
2.  TRUST BAR (Stats)             — Light bg (#F8FAFC)
3.  PROBLEM + AMPLIFY             — Dark bg (#0F172A)
4.  COST OF INACTION (Table)      — Dark bg (continuation of section 3)
5.  DREAM OUTCOME                 — Light bg (#FFFFFF)
6.  BEFORE vs. AFTER TABLE        — Light bg (continuation of section 5)
7.  WHY NOTHING WORKED (Story)    — Light bg (#F8FAFC)
8.  BLUR FRAMEWORK                — Dark bg (#0F172A)
9.  CURRICULUM (4 Weeks)          — Light bg (#FFFFFF)
10. QUALIFIER ("Is this for you?") — Light bg (#F8FAFC)
11. PRICING / VALUE STACK         — Dark bg (#0F172A)
12. TESTIMONIALS / SOCIAL PROOF   — Light bg (#FFFFFF)
13. FAQ                           — Light bg (#F8FAFC)
14. FINAL CTA                     — Amber bg (#F59E0B) — full section
15. FOOTER                        — Dark bg (#0F172A)
```

### Section Design Specifications

#### Section 1: HERO

```
Background:       #0F172A
Layout:           Centered text (single column)
Padding:          128px top, 96px bottom (desktop) / 80px top, 64px bottom (mobile)
Eyebrow:          Uppercase, amber, 14px, 600 weight, tracking 0.08em
Headline:         White, 56px, 800 weight, max-width 800px, centered
Subheadline:      #CBD5E1 (light gray), 18px, 400 weight, max-width 620px, centered
CTA Button:       Amber, hero-sized, centered, 32px below subheadline
Micro-copy:       Below button, 14px, #94A3B8
```

#### Section 2: TRUST BAR

```
Background:       #F8FAFC
Layout:           4 stats in a horizontal row (2×2 grid on mobile)
Padding:          40px top and bottom (compact)
Stat Number:      DM Mono, 48px, 500 weight, #0F172A
Stat Label:       Inter, 14px, 500 weight, #64748B
Dividers:         1px vertical line (#E2E8F0) between stats on desktop
```

#### Section 3: PROBLEM + AMPLIFY

```
Background:       #0F172A
Layout:           Centered text, max-width 760px
Headline:         White, H2 size
Body text:        #CBD5E1, 18px body-large
Pain bullets:     Quoted text in italics, #94A3B8, with left amber border (3px)
Pain bullet box:  background #1E293B, 24px padding, 8px border-radius
```

#### Section 5: DREAM OUTCOME

```
Background:       #FFFFFF
Layout:           Centered text intro → Before/After comparison table
Headline:         H2, dark
"Imagine if..."   Body-large, italic-style (not actual italic — use lighter weight)
Before/After:     2-column table with clear visual distinction
                  "Before" column: light red-tinted bg (#FEE2E2)
                  "After" column: light green-tinted bg (#DCFCE7)
```

#### Section 8: BLUR FRAMEWORK

```
Background:       #0F172A
Layout:           4 vertical blocks (B-L-U-R), each with letter + title + description
Letter display:   DM Mono, 64px, amber (#F59E0B)
Title:            H3, white
Description:      Body text, #CBD5E1
Spacing:          40px between each framework block
Visual:           Vertical amber line (2px) connecting the four blocks on the left side
```

#### Section 14: FINAL CTA

```
Background:       #F59E0B (full amber section)
Text:             #0F172A (dark text on amber)
Headline:         H2 size, "You've Read This Far. That Tells Us Something."
Body:             1–2 sentences, dark text
CTA Button:       Dark (#0F172A background, white text) — inverted from normal
Padding:          80px vertical
Guarantee line:   Below CTA, 14px, #78350F (dark amber)
```

---

## 9. COMPONENTS

### Card Component

```
Background:       #FFFFFF (light sections) or #1E293B (dark sections)
Border:           1px solid #E2E8F0 (light) or none (dark)
Border-radius:    12px
Padding:          32px
Shadow:           0 1px 3px rgba(0,0,0,0.06) (light only)
Hover:            Shadow lifts to 0 4px 12px rgba(0,0,0,0.1), translateY(-2px)
Transition:       0.2s ease
```

### Testimonial Component

```
Layout:           Quote text + attribution (name, title, company)
Quote mark:       DM Mono, 48px, amber, positioned top-left
Quote text:       Body-large (18px), italic, #334155
Attribution:      Inter 600, 14px, #0F172A (name) + Inter 400, 14px, #64748B (title)
Card style:       Same as card component (light section variant)
```

### FAQ Accordion

```
Container:        Max-width 760px, centered
Question:         Inter 600, 18px, #0F172A. Clickable full row.
Answer:           Inter 400, 16px, #334155, with 16px top padding when open
Divider:          1px solid #E2E8F0 between items
Icon:             Plus/minus or chevron, right-aligned, 20px, #64748B
Animation:        Height transition 0.3s ease
Open state:       Question text changes to amber (#F59E0B)
```

### Before/After Comparison Table

```
Layout:           2-column table, equal width
Header row:       "BEFORE BlurOps" (left, red-tinted) / "AFTER BlurOps" (right, green-tinted)
Header bg:        #FEE2E2 (before) / #DCFCE7 (after)
Header text:      Inter 700, 16px, uppercase
Row height:       Auto, minimum 56px
Row padding:      16px 24px
Alternating rows: Subtle tint difference (2% opacity shift)
Border:           1px solid #E2E8F0
Border-radius:    12px on outer container
```

### Cost of Inaction Table

```
Background:       #1E293B (on dark section)
Text:             White headers, #CBD5E1 body
Currency numbers: DM Mono, amber (#F59E0B), 600 weight
Border:           1px solid #334155
Border-radius:    12px
Padding:          16px 24px per cell
```

---

## 10. IMAGERY & VISUAL ELEMENTS

### Icons

- **Style:** Line icons, 1.5px stroke weight, consistent 24px size
- **Color:** Match surrounding text color. Amber for highlighted items.
- **Source:** Lucide Icons or Phosphor Icons (consistent set — never mix icon libraries)

### Decorative Elements

- **Gradient glow:** Subtle radial gradient behind hero headline. Amber (#F59E0B at 8% opacity), 400px radius, centered behind the headline. Creates a warm "spotlight" effect.
- **Grid pattern:** Very subtle dot grid (#1E293B dots on #0F172A background, 2px dots, 32px spacing, 3% opacity) in dark sections. Adds texture without distraction.
- **Amber line accents:** 2–3px lines used sparingly as section dividers or framework connectors.

### No-Go List

- No stock photos
- No AI-generated faces
- No generic "team meeting" imagery
- No decorative illustrations that don't serve the content
- No background videos (they slow load time and distract from copy)

---

## 11. ANIMATION & INTERACTION

### Scroll Animations

```
Type:             Fade-in-up
Distance:         20px (translate from 20px below to 0)
Duration:         0.6s
Easing:           ease-out
Trigger:          When element enters viewport (50% visible)
Stagger:          Cards and list items stagger by 100ms
```

### Hover States

```
Buttons:          Background color shift + translateY(-1px)
Cards:            Shadow lift + translateY(-2px)
Nav links:        Color change to amber
Links:            Underline appears (not color change)
All transitions:  0.2s ease
```

### Rules

1. **Never animate text content.** Headings and body text appear instantly. Only containers/cards animate in.
2. **No animations on mobile under 768px.** They cause jank on lower-end devices and slow perceived load time.
3. **Reduced motion:** Respect `prefers-reduced-motion: reduce`. Disable all animations when this media query is active.
4. **No parallax scrolling.** It's distracting and hurts mobile performance.

---

## 12. ACCESSIBILITY REQUIREMENTS

- **Color contrast:** All text meets WCAG 2.1 AA. Body text on light backgrounds: ratio ≥ 4.5:1. Text on dark backgrounds: ratio ≥ 4.5:1. Large text (≥24px): ratio ≥ 3:1.
- **Focus states:** Visible 2px amber outline on all interactive elements when focused via keyboard.
- **Alt text:** All meaningful images have descriptive alt text.
- **Semantic HTML:** Use proper heading hierarchy (H1 → H2 → H3). Never skip levels.
- **Touch targets:** Minimum 48×48px on all clickable elements.
- **Font sizing:** Use rem units, not px, so users can scale text with browser settings.

---

## 13. PERFORMANCE TARGETS

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Total page weight:** < 500KB (excluding fonts)
- **Font files:** Use `font-display: swap` to prevent invisible text during load
- **Images:** WebP format, lazy-loaded below the fold
- **CSS:** Critical CSS inlined in `<head>`, rest loaded async
- **No JavaScript frameworks for the landing page.** Vanilla JS or Alpine.js for interactivity (accordion, scroll spy, mobile menu). No React/Vue/Angular overhead for a sales page.

---

## 14. QUICK REFERENCE — CSS CUSTOM PROPERTIES

```css
:root {
  /* Colors */
  --color-midnight:      #0F172A;
  --color-navy:          #1E293B;
  --color-amber:         #F59E0B;
  --color-amber-hover:   #D97706;
  --color-white:         #FFFFFF;
  --color-off-white:     #F8FAFC;
  --color-gray-light:    #E2E8F0;
  --color-text-dark:     #0F172A;
  --color-text-body:     #334155;
  --color-text-muted:    #64748B;
  --color-text-on-dark:  #F1F5F9;
  --color-text-light:    #CBD5E1;
  --color-text-micro:    #94A3B8;
  --color-before-red:    #FEE2E2;
  --color-after-green:   #DCFCE7;
  --color-success:       #10B981;
  --color-error:         #EF4444;
  --color-link:          #3B82F6;

  /* Typography */
  --font-heading:        'Inter', system-ui, sans-serif;
  --font-body:           'Inter', system-ui, sans-serif;
  --font-mono:           'DM Mono', 'Courier New', monospace;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Layout */
  --max-width-content:   1200px;
  --max-width-text:      680px;
  --max-width-headline:  900px;
  --border-radius:       8px;
  --border-radius-lg:    12px;
  --navbar-height:       72px;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md:  0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-nav: 0 1px 3px rgba(0, 0, 0, 0.08);
}
```

---

## 15. DESIGN DECISION LOG

| Decision | Reasoning |
|----------|-----------|
| Inter for both headings and body | Single font family reduces load time. Inter's variable weights (400–800) provide enough contrast between headings and body. Consistent with "systems" brand. All weights (400, 500, 600, 700, 800) loaded via Google Fonts variable font — single file, small footprint. |
| DM Mono for stats only | Creates a "dashboard data" feel that reinforces operational/metrics messaging. Used sparingly to maintain impact. |
| Amber (#F59E0B) as accent | Warm, energetic, urgent — matches the "fire under them" feeling burnt-out founders have. High contrast against both dark navy and white backgrounds. Not red (too aggressive), not blue (too cold/corporate). |
| Dark navy (#0F172A) as primary dark | Feels more premium and approachable than pure black. Has enough depth for contrast without feeling oppressive. |
| 8px spacing grid | Industry standard. Forces consistency. Every spacing decision maps to a predictable scale. |
| No animations on mobile | Burnt-out founders are likely checking this page between meetings on their phone. Speed and readability beat visual flair. |
| 5 CTA placements | Follows PASTOR framework. Each CTA appears after a complete psychological "unit" (problem, solution, proof, qualification). Not more — that's pushy. Not fewer — that's leaving money on the table. |
| Single-page scroll layout | This audience doesn't browse. They read a sales page or they leave. Multi-page sites create friction and reduce conversion for high-ticket offers. |
| Max line width 680px | 66 characters per line. Research-backed optimal reading length. Prevents eye fatigue on long-form copy — critical when the copy is 3,000+ words. |

---

*This document is the single source of truth for all BlurOps website design decisions. Every element on the page should trace back to a specification in this file. If a design question isn't answered here, the answer is: keep it simple, keep it consistent, and serve the conversion goal.*
