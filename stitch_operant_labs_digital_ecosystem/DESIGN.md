---
name: Cyber-Premium Minimalist
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e5'
  inverse-on-surface: '#2a3233'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c8c6c8'
  on-secondary: '#313032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#fff5de'
  on-tertiary: '#3b2f00'
  tertiary-container: '#fed639'
  on-tertiary-container: '#715d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e5e1e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1c1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffe179'
  tertiary-fixed-dim: '#eac324'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#0d1515'
  on-background: '#dce4e5'
  surface-variant: '#2e3637'
  electric-cyan: '#00F0FF'
  midnight-blue: '#0A0C10'
  deep-charcoal: '#121214'
  surface-glass: rgba(255, 255, 255, 0.03)
  glow-accent: rgba(0, 240, 255, 0.15)
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  technical-data:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

This design system embodies a "Cyber-Premium" aesthetic—a sophisticated intersection of high-end corporate consulting and cutting-edge innovation. It is designed for a target audience of C-suite executives and tech visionary founders who value precision, forward-thinking, and reliability.

The visual style leverages **Minimalism** as a structural foundation, utilizing heavy whitespace (dark space) to allow content to breathe. This is layered with **Glassmorphism** and subtle **Vaporwave-inspired** light leaks to provide a sense of depth and energy. The emotional response is one of "calm authority"—the UI does not shout; it hums with the quiet efficiency of a high-performance machine. Key characteristics include:

- **Atmospheric Depth:** Using layered translucent surfaces rather than flat colors.
- **Precision Engineering:** Clean lines, technical typography, and strict alignment.
- **Kinetic Accents:** Vibrant cyan glows that guide the eye to interactive elements.

## Colors

The palette is rooted in a "Void" philosophy, using deep blacks and charcoals to minimize eye strain and maximize the impact of the accent colors. 

- **Primary (Electric Cyan):** Derived from the logo's core energy. Use this for CTAs, focus states, and data visualizations.
- **Secondary (Midnight):** The primary background color. It is not pure black (#000) but a slightly warmer charcoal to prevent "smearing" on OLED screens and provide a more premium feel.
- **Neutral:** A range of grays and off-whites. Text should rarely be #FFFFFF; instead, use slightly dimmed whites to maintain the high-end, sophisticated look.
- **Glows:** Use the `glow-accent` for soft background blurs behind primary cards or icons to simulate light emitting from within the hardware.

## Typography

Typography is used to create a "Technical-Editorial" hierarchy. 

- **Display & Headlines:** Use **Sora**. Its geometric construction and wide stance evoke modern technology and architectural strength.
- **Body Text:** Use **Inter**. It is the gold standard for readability in digital interfaces, ensuring long-form consulting reports are legible.
- **Labels & Data:** Use **Space Grotesk**. Its slightly eccentric, monospaced-adjacent character reinforces the "Labs" and innovation aspect of the brand.

Apply **Display XL** sparingly for hero sections. **Label Caps** should be used for section eyebrows (e.g., "OUR SERVICES") to provide a clear entry point for the user's eye.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centering the content with generous outer margins to maintain a premium "boutique" feel.

- **Desktop:** 12 columns, 24px gutters, max-width of 1280px.
- **Tablet:** 8 columns, 20px gutters.
- **Mobile:** 4 columns, 16px gutters.

The "Section Padding" (120px) is intentional and aggressive. This whitespace is a design element in itself, used to signal luxury and focus. Group related components using an 8px base-unit system (8, 16, 24, 32, 48, 64) to ensure mathematical harmony across all views.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Base Layer:** Midnight Blue (#0A0C10).
- **Surface Layer (Cards/Modals):** Deep Charcoal (#121214) with a 1px border using a 10% opacity white. 
- **Active Layer:** Use a `backdrop-filter: blur(20px)` on semi-transparent surfaces to create a "frosted tech" appearance.
- **Interaction Depth:** Instead of shadows, use "Inner Glows" (subtle cyan box-shadows with high blur) to indicate active or hover states. This makes elements appear as if they are powering on rather than physically lifting off the page.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a precise, engineered look that is more modern than sharp 90-degree corners, but more professional than overly rounded or playful "bubbly" designs.

- **Standard Buttons:** 4px radius.
- **Cards/Containers:** 8px radius (Large).
- **Inputs:** 4px radius.
- **Icon Backdrops:** 12px radius (Extra Large) to create a subtle contrast with the more rigid structural elements.

## Components

### Buttons
- **Primary:** Solid Electric Cyan background with Midnight Blue text. No border. On hover, apply a 20px cyan outer glow.
- **Secondary:** Transparent background with a 1px Electric Cyan border. Text is Electric Cyan.
- **Tertiary:** Text-only with a trailing arrow icon. Arrow moves 4px to the right on hover.

### Cards
- **Innovation Card:** Glassmorphic background (3% white), 8px rounded corners, and a 1px border (#FFFFFF 10%). On hover, the border opacity increases to 30% and a subtle cyan glow appears at the top edge.

### Input Fields
- **Search/Form:** Dark background (#050505), 1px stroke (#222). On focus, the stroke changes to Electric Cyan and a 2px soft glow is applied. Labels use **Space Grotesk** in all caps.

### Chips/Tags
- Small, 4px rounded shapes with a `deep-charcoal` fill and technical labels. Used for categorizing services like "AI", "Cloud", or "Strategy."

### Navigation
- A floating "Glass Header" that triggers a blur on the content below it. Links should have a subtle underline animation that expands from the center on hover.