# Prompt to Pixel

A submission-ready frontend website for a college team project focused on AI-assisted design, prompt engineering, iteration, and creative process documentation.

## Project Overview

This project is a polished single-page portfolio website built with plain HTML, CSS, and JavaScript. It is designed to present AI-generated creative work as a process rather than a static gallery. The site emphasizes version history, prompt evolution, tool comparison, final selection logic, and reflection scaffolding.

The current codebase is intentionally complete and presentation-ready while still leaving clearly labeled placeholder areas for:

- AI-generated images
- prompt screenshots
- tool comparison screenshots
- team member names
- final reflection text
- final project-specific wording

## Features

- Responsive single-page layout with anchor navigation
- Dark AI-lab visual design with strong typography and polished spacing
- Hero section with placeholder hero/logo asset area
- About section with editable assignment-aligned copy
- Data-driven gallery overview for featured case studies
- Detailed case study viewer generated from centralized JavaScript objects
- Iteration slider that swaps version visuals and notes dynamically
- Style switcher that compares multiple prepared visual directions
- Meta analysis section with editable academic/professional scaffold text
- Process documentation support with workflow stages, tool rationale, stats, and screenshot placeholders
- Reflection support cards for the final team write-up
- Graceful missing-image handling so empty asset folders show styled placeholders instead of broken image icons
- Ready to zip and submit directly or deploy to GitHub Pages

## File Structure

```text
CSC150-Team-Demo-Website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── icons/
    └── images/
        ├── shared/
        ├── case1/
        ├── case2/
        ├── case3/
        └── case4/
```

## Setup Instructions

1. Download or clone the repository.
2. Open `index.html` directly in a browser, or serve the folder with any basic static server if you prefer.
3. No install step, package manager, or build command is required.

## Customization Guide

### Replace placeholder images

Put your final exported images into the existing folders inside `assets/images/`.

Suggested organization:

- `assets/images/shared/` for the logo, hero art, prompt screenshots, and style-switcher assets
- `assets/images/case1/` through `assets/images/case4/` for case-study-specific iterations and final outputs

The current JavaScript already points to obvious placeholder file names such as:

- `assets/images/shared/logo-placeholder.png`
- `assets/images/case1/v1-placeholder.jpg`
- `assets/images/case2/final-placeholder.jpg`

If you keep the same filenames, the site will update automatically as soon as the real images are added. If you use different filenames, update the paths inside `script.js`.

### Replace placeholder text

Most editable content lives in `script.js`, especially:

- case study titles
- summaries
- prompt versions
- iteration notes
- tool comparison content
- final selection rationale
- meta analysis scaffolds
- process documentation scaffolds
- reflection support cards

Static layout copy such as the hero, about section intro, and footer can be edited in `index.html`.

### Add or remove case studies

Open `script.js` and update the `caseStudies` array.

Each case study object includes fields such as:

- `id`
- `title`
- `subtitle`
- `category`
- `tags`
- `intent`
- `promptVersions`
- `iterationImages`
- `toolComparisons`
- `finalSelection`
- `lessonsLearned`

The overview cards and detailed case study viewer will update automatically.

## GitHub Pages Deployment

This repository is already configured for GitHub Pages with a workflow file at `.github/workflows/deploy-pages.yml`.

To publish it:

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Under `Build and deployment`, set the source to `GitHub Actions`.
5. Make sure your default branch is `main` or `master`, since the workflow listens for pushes to either branch.
6. Push your latest changes and wait for the `Deploy static site to GitHub Pages` workflow to finish.

The workflow uploads the project root as a static site, so no package install or build step is required.

After deployment, update the footer placeholder text in `index.html` with your final live URL.

## Important Submission Note

This repository does not include actual AI-generated images or real prompt screenshots yet. Those assets must be added manually later by the student team before final submission.

The website is built so that missing assets still display as clean placeholder panels, which makes it safe to edit incrementally without breaking the presentation.

## Suggested Final Checklist

- Replace all placeholder image files with final exported visuals
- Replace prompt screenshot placeholders with real evidence captures
- Update team names and project title if needed
- Finalize case-study-specific prompt and analysis text in `script.js`
- Add GitHub repository and live deployment information to the footer
- Review the site on desktop and mobile before submission
