# LAPS. GLOBAL Logo Guidelines

## Logo Overview

The LAPS logo is a minimalist, enterprise-grade identity system inspired by Netflix's sophisticated design language. Built around **"Two Bars, Global Reach"** — a powerful visual metaphor expressed through two vertical bar groups with thin accent lines, representing duality, strength, and worldwide excellence.

## Design Concept

### Core Philosophy: "Precision & Presence"

The logo embodies LAPS's commitment to precision engineering and global presence, with clean vertical elements that create a strong, memorable mark suitable for international enterprise use.

### Design Inspiration

Inspired by Netflix's iconic brand language, the logo uses:
- **Dual vertical bars** - Clean, bold presence
- **Thin accent lines** - Sophisticated detail (30% opacity)
- **Minimal color palette** - Navy, Gold, White
- **Bold wordmark** - "LAPS." with gold punctuation
- **Refined subtitle** - "GLOBAL" with wide letter-spacing

### Visual Elements

**Two Bar Groups**
Each bar group consists of a thick primary bar paired with a thin accent line:

1. **First Bar Group** (Navy/White)
   - Primary bar: Full height, solid color
   - Accent line: Full height, 30% opacity
   - Spacing: 2px gap between bars
   
2. **Second Bar Group** (Gold)
   - Primary bar: Full height, signature gold
   - Accent line: Full height, 30% opacity gold
   - Spacing: 2px gap between bars

**Bar Specifications:**
- Small (sm): h-8 (32px) × w-1/w-[2px] thick/thin
- Medium (md): h-10 (40px) × w-1.5/w-[3px] thick/thin
- Large (lg): h-12 (48px) × w-2/w-[4px] thick/thin

**Wordmark Structure**
- Primary text: **LAPS** (bold, wide tracking 0.1em)
- Gold punctuation: **.** (same size as LAPS, bold)
- Secondary text: **GLOBAL** (medium weight, ultra-wide tracking 0.3em, 60% opacity)
- Layout: Stacked vertical with mt-1 spacing

### Symbolism

**Dual Bars**
- Represents duality: local expertise + global reach
- Two pillars: innovation + reliability
- Binary excellence: precision + performance

**Thin Accent Lines**
- Sophistication and attention to detail
- Netflix-inspired premium positioning
- Subtle depth creates visual interest

**Gold Punctuation**
- Bold dot after "LAPS" establishes premium brand
- Creates visual pause and emphasis
- Signature brand element for recognition

**"GLOBAL" Subtitle**
- Replaces "GROUP" to emphasize worldwide presence
- Wide letter-spacing (0.3em) creates modern, executive feel
- Reduced opacity (60%) establishes hierarchy

## Color Palette

**Primary: Navy Blue**
- Hex: `#0A1628`
- RGB: `rgb(10, 22, 40)`
- Tailwind: `bg-laps-navy`
- Usage: First bar group (dark variant), primary wordmark text
- Represents: Corporate authority, trust, stability

**Accent: Gold**
- Hex: `#C9A227`
- RGB: `rgb(201, 162, 39)`
- Tailwind: `bg-laps-gold`
- Usage: Second bar group, punctuation dot
- Represents: Premium quality, excellence, global achievement

**Light Variant: White**
- Hex: `#FFFFFF`
- RGB: `rgb(255, 2
  - Bars: h-8 (32px), w-1/w-[2px]
  - Text: text-xl (20px "LAPS"), text-[8px] ("GLOBAL")
  - Usage: Mobile navigation, compact headers
  
- **Medium (md)**: 
  - Bars: h-10 (40px), w-1.5/w-[3px]
  - Text: text-2xl (24px "LAPS"), text-[9px] ("GLOBAL")
  - Usage: Standard website headers, email signatures
  
- **Large (lg)**: 
  - Bars: h-12 (48px), w-2/w-[4px]
  - Text: text-3xl (30px "LAPS"), text-[10px] ("GLOBAL")
  - Usage: Hero sections, print materials, presentations

### Color Variants
- **Dark Variant**: Navy bars + gold bars on white/light backgrounds
  - First bar group: Navy primary + 30% navy accent
  - Second bar group: Gold primary + 30% gold accent
  - Wordmark: Navy "LAPS" + gold "." + slate/60 "GLOBAL"
  
- **Light Variant**: White bars + gold bars on dark backgrounds
  - First bar group: White primary + 30% white accent
  - Second bar group: Gold primary + 30% gold accent
  - Wordmark: White "LAPS" + gold "." + white/50 "GLOBAL"

### Layout Variants
- **Horizontal**: Bars + wordmark side-by-side (standard, recommended)
- **Icon Only**: Two bar groups without text (favicon, app icons, social media)

### Tagline Options
- **StTwo Bars with Thin Accents Work:**

✓ **Netflix-Inspired** - Borrows visual language from world-class streaming brand  
✓ **Premium Positioning** - Thin accent lines create sophistication and depth  
✓ **Ultra-Minimal** - Reduces brand to essential dual elements  
✓ **Instantly Recognizable** - Distinctive bar pairing creates strong memory  
✓ **Scalable Perfection** - Works from 16px favicon to large-format print  
✓ **Motion-Ready** - Bars can animate sequentially or fade in with accents  
✓ **Print-Friendly** - Simple geometry reproduces flawlessly in any medium  
✓ **Timeless Design** - Classic minimalism won't date  
✓ **Executive Presence** - Conveys global authority and confidence  
✓ **Gold Signature** - Bold dot punctuation creates unique brand marker  

**Design Inspiration:**
- **Netflix** - Dual vertical bars, thin accent details, premium feel
- **Stripe** - Progressive bars, technology-forward simplicity
- **Mastercard** - Dual elements, global recognition
- **IBM** - Linear structure, corporate reliability

**Typography Specifications:**

**Font Family:** Inter (sans-serif)

**Letter Spacing:**
- "LAPS": tracking-wider (0.1em) - Bold, confident spacing
- ".": No additional spacing - Tight integration with "LAPS"
- "GLOBAL": tracking-[0.3em] - Ultra-wide for modern executive feel

**Font Weights:**
- "LAPS": Bold (700) - Primary brand emphasisheight of logo bars)  
✓ Use approved color variants only (dark/light)  
✓ Ensure high contrast for readability on all backgrounds  
✓ Scale proportionally (never stretch or distort)  
✓ Use vector SVG files for all digital applications  
✓ Keep gold dot punctuation exactly same size as "LAPS"  
✓ Maintain 30% opacity for thin accent bars  
✓ Preserve mt-1 spacing between "LAPS." and "GLOBAL"  
✓ Use Inter font family for wordmark consistency  

### Don'ts
✗ Never change the opacity of thin accent bars (must be 30%)  
✗ Never alter the gold color (#C9A227) or use substitutes  
✗ Never separate or rearrange bar groups  
✗ Never remove the gold dot punctuation after "LAPS"  
✗ Never change "GLOBAL" back to "GROUP"  
✗ Never rotate or skew the logo  
✗ Never add effects (drop shadows, glows, gradients not in design)  
✗ Never place on busy backgrounds that reduce legibility  
✗ Never change letter-spacing values  
✗ Never adjust the gap between thick and thin bars (0.5 spacing)  

## Technical Specifications

### React Component (Logo.tsx)
**Bar Structure:**
```tsx
// First bar group (Navy/White)
<div className="flex items-center gap-0.5">
  <div className="h-10 w-1.5 bg-laps-navy" />       // Thick bar
  <div className="h-10 w-[3px] bg-laps-navy/30" />  // Thin accent
</div>

// Second bar group (Gold)
<div className="flex items-center gap-0.5">
  <div className="h-10 w-1.5 bg-laps-gold" />       // Thick bar
  <div className="h-10 w-[3px] bg-laps-gold/30" />  // Thin accent
</div>
```

**Spacing:**
- Between bar groups: gap-1.5 (6px)
- Between thick and thin bars: gap-0.5 (2px)
- Between bars and wordmark: gap-3 (12px for md)
- Between "LAPS." and "GLOBAL": mt-1 (4px)

### SVG Specifications's core values:

- **Global Presence**: "GLOBAL" subtitle emphasizes worldwide operations
- **Dual Excellence**: Two bar groups represent local expertise + international reach
- **Premium Quality**: Gold signature color and Netflix-inspired design language
- **Precision**: Thin accent bars show attention to detail and sophistication
- **Professionalism**: Enterprise-grade minimalism builds trust and authority
- **Modern Leadership**: Contemporary design positions LAPS as industry innovator
- **Confidence**: Bold punctuation (gold dot) creates strong brand signature

## File Naming Convention

### SVG Logo Files
- `logo-laps-dark.svg` - Dark variant (navy + gold bars, navy text) for light backgrounds
- `logo-laps-light.svg` - Light variant (white + gold bars, white text) for dark backgrounds
- `logo-laps-icon.svg` - Icon only (two bar groups, no text) for favicons/apps
- `logo-laps-favicon.svg` - Optimized favicon version (32×32)
- `logo-laps-horizontal-dark.svg` - Full horizontal with tagline (200×60)

### Component Files
- `/frontend/src/components/common/Logo.tsx` - React component with size/variant props

## Brand Evolution Note

**Previous Design:** Four vertical pillars with graduated heights and opacity  
**Current Design:** Two bar groups with Netflix-style thin accent lines  
**Key Change Date:** January 2026  
**Rationale:** Simplified to dual-bar system for stronger brand recognition, added thin accents for premium positioning, rebranded from "GROUP" to "GLOBAL" to emphasize international scope

---

**Last Updated**: January 19, 2026  
**Version**: 2.0  
**Design Evolution**: Netflix-inspired two-bar system with "LAPS. GLOBAL" branding  
**Designed By**: LAPS
### Don'ts
✗ Never change the opacity values of individual squares  
✗ Never alter the gold color or use other colors  
✗ Never rearrange or remove individual squares  
✗ Never rotate or skew the logo  
✗ Never add effects (shadows, outlines, gradients beyond the design)  
✗ Never place on busy backgrounds that reduce legibility  

## Technical Specifications

**Format**: SVG (vector)  
**Grid**: 32×32 viewBox  
**Square Dimensions**: 12×12 units each  
**Border Radius**: 1 unit (rounded corners)  
**Spacing**: 4 units between squares  

**Responsive Sizing:**
- Small: 28px × 28px symbol
- Medium: 32px × 32px symbol
- Large: 40px × 40px symbol

## Brand Alignment

The logo embodies LAPS Global's core values:

- **Unity**: Five divisions working as one cohesive group
- **Excellence**: Premium gold color reflects quality standards
- **Innovation**: Modern, geometric design suggests forward-thinking
- **Professionalism**: Enterprise-grade minimalism builds trust
- **Growth**: Progressive opacity represents continuous evolution

## File Naming Convention

- `logo-laps-dark.svg` - Dark variant (gold on light)
- `logo-laps-light.svg` - Light variant (white on dark)
- `logo-laps-dark-lg.svg` - Large size dark variant
- `logo-laps-favicon.svg` - Optimized for favicon use

---

**Last Updated**: January 7, 2026  
**Version**: 1.0  
**Designed By**: LAPS Global Design Team
