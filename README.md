# Prompt to Pixel

Prompt to Pixel is a static showcase website for AI image evolution. The site focuses on four case studies, and each one presents:

- the prompt revisions
- the matching generated images
- the progression from the first version to the strongest result

The website is intentionally narrow in scope. Tool comparison, reflection, and other supporting documentation live outside the site in separate project documents.

## Project Focus

This build is designed to show how prompts become more specific and how the images change in response. The website is not a full process archive. It is the visual showcase portion of the project.

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No build tools, backend, or package manager are required.

## Site Structure

The site contains three main parts:

- a hero section
- a gallery overview of the four case studies
- a detailed case study viewer

Each case study displays:

- a short overview
- four prompt versions
- four corresponding image versions

## Main Files

- `index.html`
  The page structure and visible site sections.
- `styles.css`
  All visual styling and responsive layout rules.
- `script.js`
  The case study data plus the rendering logic for the gallery and detailed viewer.

## Image Organization

Images are stored in `assets/images/`.

Case study folders:

- `assets/images/case1/`
- `assets/images/case2/`
- `assets/images/case3/`
- `assets/images/case4/`

Each case folder currently holds the generated images used for that prompt track.

## Updating Content

### Change prompt text

Edit the `promptVersions` entries in `script.js`.

### Change images

Update the image paths in the matching case study object in `script.js`, or keep the existing filenames and replace the files inside each case folder.

### Change the featured image

Each case study has:

- `thumbnail`
- `featuredImage`

Both are defined in `script.js`.

## Local Preview

You can preview the site by:

1. Opening `index.html` directly in a browser.
2. Using a lightweight local server such as the VS Code Live Server extension.
3. Serving the folder from any static web server.

## Submission Notes

Before final submission, make sure to:

- add the final GitHub repository URL in `index.html`
- add the final live deployment URL in `index.html`
- commit the generated image files now referenced by `script.js`

## Notes

Large parts of the project were intentionally vibe coded to fit the assignment requirements.
