# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Breaking CAD (https://breakingcad.ai) is a portfolio/landing page website showcasing CAD engineering and manufacturing projects. The site features a modern, industrial design aesthetic with scroll-driven effects and a periodic table-inspired branding (Br-eaking Ca-D using elements Bromine-35 and Calcium-20).

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom theme
- **JSX** - Component markup (not TypeScript)

## Development Commands

```bash
# Start development server (runs on default Vite port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Best Practice**: After making code changes, always run `npm run dev` to verify the site loads correctly. Check both terminal output and browser console for errors.

## Project Structure

```
src/
├── App.jsx              # Main app component with navigation and layout
├── main.jsx             # Entry point
├── index.css            # Tailwind imports and custom styles
└── components/
    ├── Hero.jsx         # Landing hero section
    ├── About.jsx        # About section
    ├── Projects.jsx     # Portfolio/projects showcase
    └── Contact.jsx      # Contact form/section
```

## Design System

### Custom Tailwind Theme
The project uses custom color variables defined in `tailwind.config.js`:
- `machine-orange` - Primary brand color for accents and CTAs
- `steel` - Secondary color for text and borders
- `blueprint` - Background color

### Branding Elements
- Periodic table-style logo using Bromine (Br, 35) and Calcium (Ca, 20)
- Monospace font for technical aesthetic
- Industrial/manufacturing design language

### Scroll Effects
The site implements scroll-driven animations and parallax effects:
- Scroll position is tracked via `scrollY` state in `App.jsx`
- Passed as prop to components for scroll-responsive behavior
- Components like Hero, About, and Projects use `scrollY` for dynamic effects

## Component Architecture

### Navigation
Fixed top navigation with:
- Custom periodic table-style logo
- Desktop menu with section anchors
- Orange hover states for links

### Layout Sections
1. **Hero** - Landing section with scroll effects
2. **About** - Information about Breaking CAD
3. **Projects** - Portfolio showcase
4. **Contact** - Contact form or information
5. **Footer** - Simple copyright footer

## Development Guidelines

### Making Changes
- All components use JSX (not TypeScript)
- Follow existing naming conventions (PascalCase for components)
- Maintain consistent use of Tailwind utilities
- Preserve scroll effect patterns when adding new sections

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Pass `scrollY` prop if scroll effects are needed
4. Add navigation link to nav menu

### Styling
- Use Tailwind utilities first
- Leverage custom theme colors (machine-orange, steel, blueprint)
- Follow responsive breakpoints (md:, lg:, etc.)
- Maintain industrial/technical aesthetic

## Build Output

Vite builds to `dist/` directory:
- Optimized and minified JS/CSS bundles
- Assets copied from `public/` directory
- Ready for static hosting deployment

## Deployment

The site is hosted at https://breakingcad.ai. Static hosting platforms like:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

All are suitable for deployment. Simply build and deploy the `dist/` directory.

## Troubleshooting

### Dev Server Won't Start
1. Ensure dependencies are installed: `npm install`
2. Check for port conflicts (default: 5173)
3. Clear node_modules and reinstall if needed

### Build Errors
1. Check for JSX syntax errors
2. Verify all imports are correct
3. Ensure Tailwind config is valid

### Styling Issues
1. Verify custom colors are defined in `tailwind.config.js`
2. Check that Tailwind directives are in `index.css`
3. Ensure PostCSS and Autoprefixer are configured
