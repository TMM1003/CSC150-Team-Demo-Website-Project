# Prompt to Pixel

Prompt to Pixel is a static frontend portfolio website that presents AI-assisted design as a visible creative process instead of a simple final-image gallery. The project is built to showcase prompt iteration, output comparison, decision-making, and reflection in a format that is easy to review, easy to customize, and ready for direct deployment as a static site.

The current version is intentionally submission-ready while still using clearly labeled placeholder assets and scaffolded content. Real AI-generated images, prompt screenshots, team details, and final written reflection content can be swapped in later without restructuring the site.

## Project Purpose

NOTE: Large aspect of the project were intentionally Vibe Coded as required by the assignment documents

This website is designed around one core idea: the value of AI-assisted creative work is not only the final result, but the sequence of revisions that led there.

Instead of treating each artwork as a standalone image, the site organizes work into case studies that highlight:

- the original design intent
- prompt evolution across versions
- visual output changes from one iteration to the next
- tool or model comparison
- rationale for the final selected result
- lessons learned from the process

That structure makes the site useful as both a portfolio piece and a process-documentation artifact.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No backend, package manager, framework, build step, or API integration is required.

## How The Site Is Organized

The project is a single-page website with anchored sections. Navigation links jump to each major content area, while JavaScript renders the dynamic case study content and interactive modules.

Main sections:

- Hero / landing area
- About the concept
- Gallery overview
- Detailed case study viewer
- Interactive lab
- Meta analysis
- Process documentation support
- Reflection support
- Footer

## How The Code Works

### `index.html`

`index.html` defines the full page structure and all major semantic sections. It contains:

- the navigation and anchor targets
- the hero content and CTA buttons
- containers that JavaScript fills with case study cards and detail views
- interactive module shells
- process, analysis, and reflection sections
- the footer and project metadata area

This file handles layout structure and the content that is meant to remain mostly static.

### `styles.css`

`styles.css` controls the visual system of the project. It includes:

- the dark AI-lab visual theme
- typography, spacing, and color variables
- responsive layout behavior
- hover and transition states
- mobile navigation behavior
- card, panel, and media styling
- placeholder and image-loading states

The stylesheet is written to keep the site readable, presentation-ready, and resilient even when some images have not been added yet.

### `script.js`

`script.js` is the content and interaction engine for the website. It holds the structured project data and renders dynamic UI from that data.

Key responsibilities:

- stores the case study content model
- renders gallery cards from the case study data
- renders the detailed case study view for the active project
- powers the iteration slider
- powers the style variation switcher
- fills process, analysis, and reflection sections from centralized content objects
- handles graceful image fallback behavior when placeholder assets are missing

Most project-specific content can be updated in this file without rewriting the HTML layout.

## Content Model

The main case study data lives in the `caseStudies` array in `script.js`.

Each case study object contains fields such as:

- `id`
- `title`
- `subtitle`
- `category`
- `tags`
- `versionRange`
- `summary`
- `intent`
- `promptVersions`
- `iterationImages`
- `toolComparisons`
- `finalSelection`
- `lessonsLearned`

Because the interface is data-driven, overview cards and detailed case study layouts update automatically when those objects are edited.

Additional content objects in `script.js` support:

- the interactive lab modules
- meta analysis content
- process statistics and workflow stages
- tool documentation
- contribution placeholders
- reflection scaffolding

## Image And Asset System

All image paths are organized under `assets/images/`.

### Case study folders

Each case study has its own folder:

- `assets/images/case1/`
- `assets/images/case2/`
- `assets/images/case3/`
- `assets/images/case4/`

These folders hold the visuals for one case study, including:

- overview thumbnail
- prompt screenshot placeholders
- iteration images
- tool comparison images
- final selected image

### Shared assets

`assets/images/shared/` stores visuals that are used across the site rather than in a single case study, such as:

- logo or hero image
- process screenshots
- workflow imagery
- tool rationale visual
- interactive style-switcher images

### Missing image behavior

The site is built so missing files do not create broken image icons. If an expected image is not present, JavaScript shows a styled fallback block with a clear label instead. This makes the project safe to present and easy to build incrementally.

## File Structure

```text
CSC150-Team-Demo-Website/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
|-- .nojekyll
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
`-- assets/
    |-- icons/
    `-- images/
        |-- shared/
        |-- case1/
        |-- case2/
        |-- case3/
        `-- case4/
```

## Features

- responsive single-page layout
- mobile-friendly anchor navigation
- data-driven case study gallery
- dynamic detailed case study viewer
- iteration slider with version-by-version updates
- style variation switcher
- structured process documentation support
- meta analysis and reflection scaffolding
- graceful fallback UI for missing assets
- static hosting compatibility, including GitHub Pages

## Running The Project Locally

This site can be previewed locally without installing anything.

Options:

1. Open `index.html` directly in a browser.
2. Use a lightweight local server such as the VS Code Live Server extension.
3. Serve the folder from any static server of your choice.

Because the project is fully static, no dependency installation or build command is needed.

## Customizing The Site

### Replace images

Replace the placeholder files inside `assets/images/` with final exported assets. The simplest workflow is to keep the existing filenames so the site updates automatically without code changes.

If different filenames are preferred, update the corresponding paths in `script.js`.

### Replace text

Update project-specific content in:

- `script.js` for case studies, process notes, analysis, and reflection scaffolding
- `index.html` for static copy such as hero wording, section intros, and footer details

### Add or remove case studies

Edit the `caseStudies` array in `script.js`. The gallery overview and detailed viewer are rendered from that data, so the interface will adapt automatically after the content model is updated.

## Accessibility And UX Notes

The site includes several baseline usability features:

- semantic HTML structure
- skip link support
- keyboard-friendly buttons and controls
- responsive navigation behavior
- readable contrast within the selected dark theme
- clear fallback states for missing content

## Deployment

The repository includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.

To publish the site:

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to `GitHub Actions`.
5. Push changes to `main` or `master`.
6. Wait for the deployment workflow to finish.

No build process is required because the site is served directly as static files.

## Notes For Future Contributors

- Keep image filenames consistent unless you are also updating the paths in `script.js`.
- Use the case-study data objects as the main source of truth for portfolio content.
- Treat `index.html` as the structural layer, `styles.css` as the visual layer, and `script.js` as the content-and-interaction layer.
- Keep new additions static-site friendly if the project should continue to work on GitHub Pages without extra tooling.

## Status

The current repository includes a complete working frontend with placeholder assets and editable scaffold content. It is intended to be easy to understand, easy to swap content into, and suitable for both local preview and static deployment.
