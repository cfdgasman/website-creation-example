# Professional Website Built with AI — A Complete Example

**🌐 [View Live Site](https://cfdgasman.github.io/website-creation-example/)**

**⚠️ Experimental AI Usage** — This project is an experimental demonstration of building production-grade websites using AI assistance. It shows what's possible with Claude Code and AI collaboration, but is intended as a learning example and proof-of-concept, not as production-ready software.

This is a **portfolio website** built entirely using **Claude Code** and **Claude AI**, demonstrating how to create professional-grade static sites without traditional web frameworks or build tools.

## What This Shows

✨ **Professional Design Quality**
- Institutional navy & blue color palette (#0a0e1a dark, #4f89f0 accent)
- 8 categorical icon colors with radial gradient effects
- Responsive layouts, scroll-reveal animations, sticky navigation
- Real app branding (icon, hero banner, favicon)

🎯 **Complete Feature Set**
- 9 interconnected pages telling one coherent story
- Real embedded screenshots (10 optimized webp images)
- Comprehensive legal disclaimers
- Navigation with active-state tracking
- Zero external dependencies (Google Fonts only)

⚡ **Pure HTML/CSS/JavaScript**
- No frameworks, no build step, no npm
- ~77KB total HTML + CSS
- ~580KB images (compressed webp)
- Loads instantly, works offline

## How It Was Built (Experimental Process)

1. **Design System First** — defined all colors, typography, spacing as CSS custom properties (`--ic-blue`, `--ic-teal`, etc.)
2. **Component-First HTML** — `.topnav`, `.legal-notice`, `.nav-card`, etc. as reusable class patterns
3. **Real Content** — embedded actual app screenshots instead of mockups
4. **Iterative Polish** — scroll reveals, animations, responsive breakpoints, accessibility
5. **Browser-Based Verification** — continuously tested in live browser during development

**Experiment:** Built in one extended session using Claude Code with continuous browser verification. This demonstrates how AI can collaborate in real-time to iterate on design and functionality, making adjustments based on visual feedback.

## File Structure

```
.
├── index.html                    # Landing page with feature overview
├── walkthrough.html              # Guided one-ticker tour (Stage 1-5)
├── architecture.html             # 8-layer decision framework
├── screener.html                 # Layer 2: candidate discovery
├── ticker-detail.html            # Layers 3-5: scoring & evidence
├── level-playbook.html           # Layer 3: execution playbook
├── backtesting.html              # Layer 5: performance validation
├── features.html                 # Advanced features & toolkit
├── faq.html                      # Common questions & reference
└── assets/
    ├── style.css                 # Complete design system (~35KB)
    ├── site.js                   # Navigation & scroll reveals (~2KB)
    ├── brand-icon.png            # App icon (4-bar chart)
    ├── hero-banner.jpg           # Homepage featured image
    └── screens/                  # 10 real app screenshots (webp)
```

## Website Creation: Technical Overview

### Architecture
- **Pure HTML/CSS/JS** — no frameworks, no build tools, no npm dependencies
- **9 interconnected pages** — index, walkthrough, architecture, screener, ticker-detail, level-playbook, backtesting, features, faq
- **Single design system** — all pages share `assets/style.css` (~35KB)
- **Minimal JavaScript** — `assets/site.js` (~2KB) handles navigation and scroll reveals only
- **Responsive design** — works on mobile, tablet, desktop without media query bloat

### Design System

**Colors** — 8 categorical icon colors defined as CSS custom properties:
```css
--ic-blue: #5b93f5;
--ic-teal: #2dd4bf;
--ic-purple: #a78bfa;
--ic-amber: #f0b552;
--ic-green: #4ade80;
--ic-pink: #f472b6;
--ic-cyan: #38bdf8;
--ic-orange: #fb923c;
```

Each icon uses `radial-gradient(120% 130% at 25% 15%, ...)` with inset glow for depth.

**Typography** — Google Fonts (3 families):
- `Fraunces` (serif) — headings, brand name
- `Public Sans` (sans) — body text, UI
- `IBM Plex Mono` (monospace) — technical labels, code

**Spacing** — Using CSS `clamp()` for fluid responsive spacing:
```css
padding: 56px clamp(18px, 4vw, 56px) 38px;
```

**Layouts** — Flexbox and CSS Grid for all page structures

### Legal Disclaimers
Single `.legal-notice` component with:
- Gold accent border + diagonal stripe pattern
- Warning icon + "Important — Please Read" title
- Split paragraphs for readability
- Consistent across all 9 pages
- Fully explains the site is illustrative, non-professional, built with AI

### Navigation
Sticky `.topnav` with:
- Brand logo + name
- Flex-based link navigation (auto-scrolls on mobile)
- Active state tracking via JavaScript
- GitHub link placeholder

### Component Architecture

**Reusable Classes (No Components Library)**
- `.topnav` — sticky header with flex navigation
- `.legal-notice` — styled legal disclaimer box with pattern background
- `.nav-card` — clickable feature cards with icon, title, description
- `.shot-frame` — image container with border, shadow, proper aspect ratio
- `.score-bar` — mini bar chart for statistics

Each component is self-contained CSS — easy to copy to other projects.

### Real Content Integration

**Screenshots** — 10 real app screenshots (webp optimized):
1. Crop app header/chrome (y=90–150 offset)
2. Resize to 1600px max width preserving aspect ratio
3. Save as webp quality 86 (~50–120KB per image)
4. Embed with `.shot-frame` wrapper — handles responsive scaling
5. Add `.shot-caption` labels underneath

**Hero Banner** — Full-width responsive image (1400×810 original)
- JPEG fallback + WebP modern format
- `<picture>` element for format negotiation
- Scales perfectly from mobile to 4K

**Brand Icon** — SVG-quality 512×512 PNG
- Favicon reference
- Navigation brand mark
- Renders crisp at any size

## Educational Guide: Hover Effects, Animations & Banners

### Hover Banner Effects

**CSS Hover States**
```css
.banner:hover {
  background-color: var(--app-surface-2);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease-in-out;
}
```

**Key Principles:**
- Use `transition` for smooth animations (typically 0.2s–0.5s)
- `transform` for GPU-accelerated movement (translate, scale, rotate)
- Box-shadows for depth without reflow
- Always define a base state + hover state

**Hover Banner Example:**
```html
<div class="banner hover-banner">
  <h3>Hover over me</h3>
  <p>This lifts up and gets a shadow on hover</p>
</div>

<style>
.hover-banner {
  padding: 20px;
  border-radius: 8px;
  background: var(--app-surface);
  cursor: pointer;
  transition: all 0.3s ease;
}

.hover-banner:hover {
  transform: translateY(-8px);
  background: var(--app-surface-2);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
</style>
```

### CSS Animations

**Scroll-Reveal Animation (Used Throughout This Site)**
```css
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: revealUp 0.6s ease-out;
}
```

**Pulse Animation**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse { animation: pulse 2s infinite; }
```

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in { animation: fadeIn 0.5s ease-in; }
```

### Smooth Transitions

**Avoid jarring changes** — use `transition` for state changes:
```css
/* Smooth color change */
button { 
  background: #4f89f0; 
  transition: background 0.2s ease;
}
button:hover { background: #3f7ad0; }

/* Smooth all properties */
.card { transition: all 0.3s ease; }
```

**Easing Functions:**
- `ease` — slow start/end, fast middle (most natural)
- `ease-in-out` — symmetric, good for transforms
- `linear` — constant speed (use rarely, feels robotic)
- `cubic-bezier(0.4, 0.0, 0.2, 1)` — custom curves

### Hover with JavaScript (Advanced)

```javascript
// Add class on hover for more complex effects
document.querySelectorAll('.interactive').forEach(el => {
  el.addEventListener('mouseenter', () => el.classList.add('active'));
  el.addEventListener('mouseleave', () => el.classList.remove('active'));
});
```

Then style the `.active` state:
```css
.interactive.active {
  background: var(--app-blue);
  transform: scale(1.05);
  box-shadow: inset 0 0 20px rgba(79, 137, 240, 0.5);
}
```

### Performance Tips

1. **Use `transform` + `opacity`** for animations (GPU-accelerated)
2. **Avoid animating:** `top`, `left`, `width`, `height` (causes reflow)
3. **Keep animations < 0.6s** for interactive feedback (snappy feel)
4. **Use `will-change` sparingly:**
   ```css
   .animated-element { will-change: transform; }
   ```
5. **Batch animations** — multiple items animating together feels cohesive

### Real Examples from This Site

**Scroll Reveal (site.js):**
- Detects when element enters viewport
- Adds `.reveal` class → triggers animation
- Creates progressive, elegant page loads

**Navigation Sticky Effect:**
```css
.topnav {
  position: sticky;
  top: 0;
  transition: background 0.2s ease;
}

.topnav.scrolled {
  background: rgba(10, 14, 26, 0.95);
  box-shadow: var(--shadow);
}
```

---

## Pop-Out Window (Modal) Creation Guide

### What Is a Modal?

A **modal** is an overlay window that sits on top of the page, blocking interaction with everything behind it until the user responds. Used here for the site's entry disclaimer — shown once per browser to explain the data is fictional before anyone reads further.

### Basic Modal Structure

```html
<div id="my-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
  <div class="modal-box">
    <div class="modal-title" id="modal-title">Title Here</div>
    <p>Modal body content.</p>
    <button type="button" id="modal-ack">Continue</button>
  </div>
</div>
```

**Key attributes:**
- `hidden` — starts closed; JavaScript removes it to open
- `role="dialog"` + `aria-modal="true"` — tells screen readers this is a modal
- `aria-labelledby` — points to the title element for accessibility

### CSS: Overlay + Centered Box

```css
.modal-overlay{
  position:fixed; inset:0; z-index:9999;
  display:flex; align-items:center; justify-content:center;
  background:rgba(4,7,14,.86);
  backdrop-filter:blur(3px);
  padding:20px;
}
.modal-overlay[hidden]{ display:none; }

.modal-box{
  max-width:540px; width:100%;
  background:#151a28;
  border-radius:10px;
  padding:26px 28px;
  box-shadow:0 30px 80px rgba(0,0,0,.5);
}
```

**Key principles:**
- `position:fixed; inset:0` — covers the full viewport regardless of scroll position
- `[hidden]{ display:none }` — CSS attribute selector is a clean way to toggle visibility without a JS-managed class
- `backdrop-filter:blur()` — softly blurs the page behind the modal for focus
- `z-index:9999` — must exceed every other element's stacking context (nav bars, sticky headers, etc.)

### JavaScript: Show Once, Remember the Choice

The pattern used on this site — show a modal on first visit, then never again on that browser:

```javascript
(function(){
  var modal = document.getElementById('my-modal');
  if (!modal) return;

  var KEY = 'my-modal-ack-v1';
  var seen = false;
  try { seen = !!localStorage.getItem(KEY); } catch(e){}

  if (!seen){
    modal.removeAttribute('hidden');
    document.documentElement.style.overflow = 'hidden'; // lock background scroll
  }

  document.getElementById('modal-ack').addEventListener('click', function(){
    modal.setAttribute('hidden', '');
    document.documentElement.style.overflow = '';
    try { localStorage.setItem(KEY, '1'); } catch(e){}
  });
})();
```

**Why this approach:**
- `localStorage` persists across browser sessions (unlike `sessionStorage`, which clears on tab close)
- Wrapping storage calls in `try/catch` prevents a crash in privacy modes where storage access can throw
- Locking `document.documentElement.style.overflow` while the modal is open stops the page scrolling behind it
- Versioning the key (`-v1`) lets you force the modal to reappear for everyone by bumping to `-v2` after a content change

### Making It Dismissible by More Than One Action

For a friendlier modal, also close it on the Escape key or a click outside the box:

```javascript
modal.addEventListener('click', function(e){
  if (e.target === modal) closeModal(); // clicked the overlay, not the box
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
});
```

*(Not used on this site's disclaimer intentionally — the agreement should require a deliberate click, not an accidental Escape tap.)*

### Real Example From This Site

Every page here (`index.html`, `walkthrough.html`, etc.) ships a `#site-disclaimer-modal` with this exact show-once pattern, styled to match each page's own color variables (`--ic-amber` on the shared-CSS pages, `--app-amber` on the self-contained `walkthrough.html`). It's a good template for:
- Cookie/consent notices
- "New feature" announcements
- Terms-of-use gates
- Newsletter signup prompts

---

## Image Manipulation & Bounding Boxes Guide

### Understanding Bounding Boxes

A **bounding box** is an invisible rectangle that defines an element's position and size. Essential for:
- Precise image cropping
- Layout alignment
- Animation targeting
- Collision detection

**Get Bounding Box in JavaScript:**
```javascript
const element = document.querySelector('.image-container');
const bbox = element.getBoundingClientRect();

console.log({
  top: bbox.top,        // Distance from viewport top
  left: bbox.left,      // Distance from viewport left
  width: bbox.width,    // Element width in pixels
  height: bbox.height,  // Element height in pixels
  bottom: bbox.bottom,  // Distance from viewport bottom
  right: bbox.right     // Distance from viewport right
});
```

### Image Cropping & Modification

**Using Canvas API (Recommended for Web)**
```javascript
function cropImage(imageSrc, x, y, width, height) {
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  img.onload = () => {
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg');
  };
  img.src = imageSrc;
}
```

**Using Python (Offline Processing)**
```python
from PIL import Image

# Open image
img = Image.open('screenshot.png')

# Crop: (left, top, right, bottom)
cropped = img.crop((50, 100, 1350, 900))

# Resize while maintaining aspect ratio
cropped.thumbnail((1600, 1200), Image.Resampling.LANCZOS)

# Convert to JPG for better compression
cropped.save('cropped.jpg', 'JPEG', quality=86)
```

### Applying CSS Filters to Images

**CSS Filters (No Processing Required)**
```css
.image-normal {
  filter: brightness(1) contrast(1) saturate(1) blur(0px);
}

/* Hover effects */
.image-hover:hover {
  filter: brightness(1.1) contrast(1.15) saturate(1.2);
  transition: filter 0.3s ease;
}

/* Dark mode dimming */
.image-dark-mode {
  filter: brightness(0.85) contrast(1.1);
}
```

**Available Filters:**
- `brightness(0.5–2)` — darken/lighten
- `contrast(0–2)` — increase/decrease contrast
- `saturate(0–2)` — color intensity
- `hue-rotate(0–360deg)` — color shift
- `blur(0–20px)` — Gaussian blur
- `invert(0–1)` — photographic negative
- `sepia(0–1)` — warm tone

### Animating Images

**Zoom In on Hover**
```css
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

**Fade Image On Scroll**
```javascript
const images = document.querySelectorAll('.scroll-fade img');

window.addEventListener('scroll', () => {
  images.forEach(img => {
    const bbox = img.getBoundingClientRect();
    const scrollPercent = 1 - (bbox.top / window.innerHeight);
    img.style.opacity = Math.max(0, Math.min(1, scrollPercent));
  });
});
```

**Pan Animation (Cinematic Effect)**
```css
@keyframes pan {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, -30px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

.image-pan {
  animation: pan 8s ease-in-out infinite;
}
```

**Parallax Scroll**
```javascript
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    const scrollPos = window.scrollY;
    el.style.transform = `translateY(${scrollPos * 0.5}px)`;
  });
});
```

### Image Optimization Pipeline

**Step 1: Capture/Screenshot**
- Take clean screenshot (avoid chrome/UI)
- Use 1600px width standard for consistency
- Maintain 16:9 or 3:2 aspect ratio

**Step 2: Crop with Bounding Box**
```python
# Define crop region based on visual inspection
crop_box = (90, 150, 1510, 900)  # (left, top, right, bottom)
cropped = img.crop(crop_box)
```

**Step 3: Resize**
```python
# Fit to 1600×max while maintaining aspect ratio
cropped.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
```

**Step 4: Compress**
```python
# JPEG quality 85-90 for web (good balance)
cropped.save('screenshot.jpg', 'JPEG', quality=86, optimize=True)
```

**Step 5: Embed in HTML**
```html
<div class="shot-frame reveal">
  <img src="assets/screens/screenshot.jpg" 
       alt="Descriptive alt text for accessibility"
       loading="lazy">
</div>
```

### Batch Image Processing

**Python Script for Multiple Images**
```python
import os
from PIL import Image

image_dir = 'raw_screenshots/'
output_dir = 'assets/screens/'

for filename in os.listdir(image_dir):
    if filename.endswith('.png'):
        img = Image.open(os.path.join(image_dir, filename))
        
        # Crop to remove UI chrome
        img = img.crop((90, 150, 1510, 900))
        
        # Resize
        img.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
        
        # Save as JPEG
        output_name = filename.replace('.png', '.jpg')
        img.save(os.path.join(output_dir, output_name), 
                'JPEG', quality=86, optimize=True)
        print(f'✓ Processed {output_name}')
```

### Accessibility with Images

**Always Include Alt Text**
```html
<!-- ✗ Bad -->
<img src="screenshot.jpg">

<!-- ✓ Good -->
<img src="screenshot.jpg" 
     alt="Dashboard showing portfolio metrics with real-time updates">
```

**Lazy Loading for Performance**
```html
<!-- Image loads only when scrolled into view -->
<img src="screenshot.jpg" loading="lazy" alt="...">
```

**Responsive Images with srcset**
```html
<img 
  src="screenshot-1600.jpg"
  srcset="screenshot-800.jpg 800w,
          screenshot-1600.jpg 1600w,
          screenshot-2400.jpg 2400w"
  sizes="(max-width: 768px) 100vw, 
         (max-width: 1400px) 80vw, 
         1600px"
  alt="...">
```

### Image Animation Best Practices

1. **Use GPU-accelerated transforms** — `transform`, `opacity`
2. **Avoid animating** — `width`, `height`, `top`, `left`
3. **Add `will-change` for heavy animations:**
   ```css
   .animated-image {
     will-change: transform;
     animation: slideIn 0.6s ease;
   }
   ```
4. **Keep animations < 1 second** for product images (feels snappy)
5. **Use `prefers-reduced-motion` for accessibility:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     .animated-image {
       animation: none;
       transform: none;
     }
   }
   ```

---

## Make Your Site Live (Deployment)

### GitHub Pages (What We Did)

**Step 1: Push to GitHub**
```bash
git remote add origin https://github.com/YOUR-USERNAME/your-repo-name.git
git branch -M main
git push -u origin main
```

**Step 2: Enable GitHub Pages**
```bash
# Option A: Use GitHub CLI (what we used)
gh api repos/YOUR-USERNAME/your-repo-name/pages -X POST -f 'source[branch]=main' -f 'source[path]=/'

# Option B: Manual (GitHub website)
# Go to Settings → Pages → Source: Deploy from a branch → main / (root) → Save
```

**Step 3: Wait 1-2 minutes**
- Your site goes live at: `https://YOUR-USERNAME.github.io/your-repo-name/`

**Result:** 
- Repo stays private (only you can edit)
- Website is public (everyone can visit)

### Other Hosting Options

**Netlify** (Fastest)
- Drag & drop folder → instant live URL
- Auto-deploys on git push
- Free tier: 100GB/month

**Vercel**
- Connect GitHub repo
- Auto-deploys main branch
- Free with GitHub

**Cloudflare Pages**
- Connect GitHub repo
- Ultra-fast global CDN
- Free tier available

## About This Project

This is a personal experimental project showcasing how AI can assist in creating professional websites. All code, design, and assets are protected by copyright. This repository is provided as a portfolio example only — reproduction, modification, or redistribution is not permitted without explicit written permission.

## Why This Matters

**This proves you can build production-ready websites with AI by:**
- Maintaining consistent design across 9 pages
- Embedding real media without breaking layout
- Handling responsive design properly
- Writing clean, semantic HTML
- Keeping file sizes small (pure HTML/CSS/JS)
- Adding real functionality (navigation, animations) with minimal code

No templates, no frameworks, no magic — just a professional site built by giving Claude Code clear requirements and iterating in the browser.

## How This Was Built With AI

### The Process
1. **Design system defined first** — all colors, fonts, spacing as reusable tokens
2. **Component templates created** — `.topnav`, `.nav-card`, `.legal-notice` as copy-paste patterns
3. **Pages built systematically** — index → walkthrough → each layer page
4. **Live browser feedback** — every change tested immediately in browser
5. **Image optimization** — screenshots cropped, resized, converted to webp in batch
6. **Responsive refinement** — tested at mobile (375px), tablet (768px), desktop (1920px+)

### AI's Role
- **Wrote all HTML/CSS/JS** from requirements → code in real-time
- **Maintained consistency** across 9 pages (no visual drift, no forgotten styles)
- **Solved constraints** — responsive typography, mobile navigation, accessibility
- **Optimized assets** — batch-processed 10 screenshots through PIL pipeline
- **Iterated on feedback** — adjusted colors, spacing, animations based on browser results

### What This Demonstrates
- **No manual pixel-pushing** — all layouts described in code, not Figma
- **Maintainability** — every style in one place, easy to change colors/fonts globally
- **Scalability** — add page 10 by copying template + editing content
- **No build fragility** — no npm, no webpack, no build step to break
- **Real-world quality** — compressed images, responsive design, accessibility considered

### Experimental Goals

This project explores:
- **AI-assisted web design** — can Claude Code produce professional, pixel-perfect layouts from text requirements?
- **Rapid iteration** — how fast do feedback loops (browser preview → code edit → instant result) enable polished sites?
- **Design system consistency** — can AI maintain visual coherence across 9 pages without a framework forcing it?
- **Real-world workflows** — can AI handle image optimization, responsive breakpoints, accessibility, copyright notices?

The goal is **not** production software, but a **teaching example** showing what's possible when AI collaborates with human direction on web design.

---

**Built with:** Claude Code + Claude AI (Haiku 4.5)  
**Status:** Experimental demonstration  
**Copyright:** © 2026. All Rights Reserved.  
**Last updated:** August 29, 2026
