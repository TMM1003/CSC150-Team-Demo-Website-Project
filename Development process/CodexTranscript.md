# Build AI portfolio site

## Metadata

- Session ID: `019d4a14-f9f0-7ef3-a6da-58fc83cb8d6f`
- Kind: `vscode`
- Originator: `codex_vscode`
- Source: `vscode`
- Started At: `2026-04-01T17:26:21.946Z`
- Updated At: `2026-04-01T17:26:33.8009183Z`


## Transcript

### User 1

[`2026-04-02 01:26:28 UTC+08:00`] <environment_context>
  <cwd>d:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website</cwd>
  <shell>powershell</shell>
  <current_date>2026-04-01</current_date>
  <timezone>America/New_York</timezone>
</environment_context>

[`2026-04-02 01:26:28 UTC+08:00`] # Context from my IDE setup:

## Active file: .gitignore

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
You are building a complete, submission-ready team demo website for a college assignment. Your job is to generate all code, structure, content scaffolding, and documentation-related placeholders necessary to fully implement the site. Do not leave the project half-finished. Produce a complete working frontend project with clean organization, polished UI, responsive behavior, and clear placeholder areas where AI-generated images and prompt screenshots will be inserted later by the student.

Project type:
An interactive AI design portfolio / creative showcase website that demonstrates how AI-generated designs evolve through prompt engineering, iteration, and tool variation.

Core concept:
This is not a static image gallery. The site must present AI-assisted creative work as a process. The primary unit of value is the iteration sequence, not the final image alone. The site should show how outputs evolved across versions, what changed, why it changed, and which final result was selected.

Assignment alignment:
The project must clearly support the following grading categories:

1. Visual Design & Branding
2. Functionality & Completeness
3. Process Documentation
4. Reflection support

Important constraint:
Do NOT generate actual images, prompts, or screenshots of prompts. Instead, fully prepare the codebase so that I can later drop in generated images, screenshots, and final text with minimal editing.

Deliverable requirements for the codebase:
Build a complete website project using only frontend technologies:

* HTML
* CSS
* JavaScript

No backend.
No API keys.
No external secrets.
No live AI integration.
No unfinished TODO sections unless they are clearly labeled content placeholders for images, screenshots, or human-written reflections.

The site must be:

* polished
* modern
* responsive
* mobile-friendly
* easy to edit
* organized for a class submission
* suitable for zipping and optionally deploying to GitHub Pages

Design direction:
Use a dark “AI lab” aesthetic with strong typography, clean spacing, subtle modern effects, and a professional portfolio feel.
Visual style should feel intentional and cohesive, not gimmicky.
Use a strong but restrained palette. Keep accessibility and readability in mind.

Site architecture:
Build the website as a multi-section single-page site or lightweight multi-page structure if justified, but default to a single-page site with anchor navigation unless there is a compelling reason not to.
The site must include the following major sections:

1. Hero / Landing Section

* Project title
* short project tagline
* short summary of the concept
* CTA buttons such as “Explore Case Studies” and “View Process”
* placeholder for AI-generated logo / hero visual

2. About / Concept Section

* explain the concept of the site
* emphasize that the site shows iterative AI-assisted creative process, not just final outputs
* include polished placeholder text that I can later customize

3. Gallery / Case Study Overview Section

* display 3 to 5 featured artwork/project cards
* each card should represent one case study
* each card should show:

  * placeholder thumbnail image
  * project title
  * short concept summary
  * tags such as “style transfer,” “prompt evolution,” “tool comparison,” etc.
  * version indicator such as “v1 to v4”
  * button or click interaction to open detailed case study view

4. Detailed Case Study Section or Modal System
   For each case study, include a structured layout with these subsections:

* Intent
* Prompt Evolution
* Output Iterations
* Tool Comparison
* Final Selection
* Lessons Learned

Each case study must support placeholder content and images for:

* initial prompt text
* revised prompt text
* versioned outputs
* notes about why each change was made
* final selected result
* brief analysis

Important:
Implement this in a scalable way using JavaScript data objects or JSON-like arrays so I can easily swap placeholder content later without rewriting layout code.

5. Interactive Process Feature
   At least one non-trivial interaction must be implemented. Include both if possible:
   A. Iteration Slider

* a slider or stepper that lets the user move through artwork versions v1 to v5
* image and explanatory caption update dynamically

B. Style Switcher or Prompt Toggle

* allow the user to switch between multiple prepared variations of the same subject
* update the displayed placeholder image and descriptive text dynamically

These interactions should use placeholder assets and content now, but be fully functional.

6. Meta Analysis Section
   A section that synthesizes cross-project observations:

* what worked
* what failed
* prompt patterns that improved results
* where AI broke down
* insights about AI as collaborator vs AI as tool

This should contain polished placeholder copy that sounds academic/professional enough for a class project, while still clearly marked as editable.

7. Process Documentation Support Section
   Create a section designed to support the assignment’s process documentation expectations. This should visually present:

* tools used
* iteration count
* workflow stages
* team contribution placeholders
* prompt screenshot placeholders
* tool choice rationale placeholders

This section should not replace the separate process doc PDF, but it should reinforce the same material on the site.

8. Reflection Support Section
   Create a structured section that can support the later writing of the required team reflection. Include editable cards or subsections for:

* team vision
* AI strengths
* AI weaknesses
* vibe coding takeaways
* team dynamics

Do not write the final 300-word reflection unless necessary as placeholder content. Instead, write concise but polished scaffold text and labeled editable blocks.

9. Footer
   Include:

* team/project name placeholder
* optional GitHub repo placeholder
* optional live deployment link placeholder
* copyright or class-project note

Content model requirements:
Use a centralized JavaScript data structure for all case studies and interactive content.
Each case study object should include fields like:

* id
* title
* subtitle
* category
* tags
* intent
* promptVersions
* iterationImages
* toolComparisons
* finalSelection
* lessonsLearned

Use obvious placeholder image paths such as:
assets/images/case1/v1-placeholder.jpg
assets/images/case1/v2-placeholder.jpg
assets/images/shared/logo-placeholder.png

All placeholders must be easy to find and replace.

File/folder requirements:
Generate a complete project structure like:

* index.html
* styles.css
* script.js
* assets/images/
* assets/icons/ if needed
* README.md

If you choose to split CSS or JS into multiple files for clarity, keep the structure simple and submission-friendly.

Code quality requirements:

* clean semantic HTML
* well-structured CSS
* modern vanilla JavaScript
* comments only where genuinely useful
* no unnecessary frameworks
* no broken links
* no placeholder lorem ipsum
* all placeholder text should be context-specific and assignment-relevant
* keyboard accessible where reasonable
* responsive navigation
* smooth scrolling
* polished hover states and transitions
* strong spacing and typography hierarchy

Functionality requirements:

* navigation works
* section jumps work
* case study interaction works
* slider/toggle interaction works
* layout works on mobile
* no console errors
* all placeholder assets degrade gracefully if missing
* use fallback labels or styled placeholder boxes when an image file does not exist

Implementation preference:
Where image placeholders are missing, do not show broken image icons. Instead, show styled placeholder containers with labels such as:
“Insert AI-generated image here”
“Insert prompt screenshot here”
“Insert logo here”

README requirements:
Also generate a professional README.md for the project that includes:

* project title
* project overview
* features
* file structure
* setup instructions
* customization instructions for replacing placeholder images and text
* GitHub Pages deployment instructions
* note explaining that AI-generated images and prompt screenshots must be added manually later
* class-submission-friendly tone

Output requirements:
Return the full project as complete code files, not just a description.
For each file, clearly label the filename and provide full contents.
At minimum provide:

* index.html
* styles.css
* script.js
* README.md

If additional files are needed, include them too.

Do not:

* use React, Vue, or frameworks unless absolutely necessary
* require npm or build tooling unless there is a very strong reason
* include fake API integrations
* leave the site conceptually incomplete
* generate actual AI images or actual final prompts
* omit key sections of the assignment

Do:

* make reasonable assumptions and fully execute
* write polished placeholder content that matches the project theme
* make the site look like a serious final submission
* optimize for rubric performance
* ensure the project can be zipped and submitted directly

Final instruction:
Build the site as though you are the lead frontend developer responsible for delivering a polished class submission today. Produce complete code, not planning notes.

### Assistant 1

[`2026-04-02 01:26:35 UTC+08:00`] I’m turning this into a complete submission-ready frontend site, not just a mockup. First I’m checking the current project structure so I can build the pages, data model, styling, and README cleanly without trampling anything you already have.

### Assistant 1

[`2026-04-02 01:26:47 UTC+08:00`] I’ve confirmed the repo is basically a clean shell with just the assignment docs and a tiny README, so we have room to build this properly from scratch. Next I’m reading the existing text files and checking git state so I can add the full frontend structure safely.

### Assistant 1

[`2026-04-02 01:27:05 UTC+08:00`] I have enough context to build confidently now. Plan:
1. Create the submission-friendly structure and asset folders so the project is easy to zip, edit, and deploy.
2. Build a polished single-page experience with all rubric-aligned sections, responsive navigation, dark AI-lab styling, and graceful placeholder handling.
3. Drive the gallery, case studies, slider, and prompt/style interactions from centralized JavaScript data so you can swap in real assets later without rewriting layout.
4. Finish with a class-ready `README.md` that explains setup, customization, placeholders, and GitHub Pages deployment.

### Assistant 1

[`2026-04-02 01:27:11 UTC+08:00`] I’m setting up the folder structure first so the content model and placeholder paths stay consistent across HTML, CSS, JS, and the README. After that I’ll wire the full UI around those predictable asset locations.

### Assistant 1

[`2026-04-02 01:28:19 UTC+08:00`] I’m at the edit stage now. I’m writing the full HTML scaffold, the dark responsive visual system, the centralized content model, and the interaction layer together so the site ships as a cohesive whole rather than a stitched-together template.

### User 2

[`2026-04-02 01:38:21 UTC+08:00`] # Context from my IDE setup:

## Active file: .gitignore

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
status

### Assistant 2

[`2026-04-02 01:38:36 UTC+08:00`] I’m checking the workspace state so I can give you an exact progress update rather than guessing.

### Assistant 2

[`2026-04-02 01:38:44 UTC+08:00`] Current status:

I’ve inspected the repo and set up the asset folder structure for the finished site:
`assets/images/shared`, `assets/images/case1` through `case5`, and `assets/icons`.

The full website files have not been written yet because the previous turn was interrupted before I started the main patch. Right now the repo still only has the original small `README.md`, your `.gitignore`, and the assignment PDFs.

If you want, I can continue from here and generate the complete working project in one pass:
[index.html](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/index.html)
[styles.css](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/styles.css)
[script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js)
[README.md](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/README.md)

### User 3

[`2026-04-02 01:39:11 UTC+08:00`] # Context from my IDE setup:

## Active file: extension-output-esbenp.prettier-vscode-#1-Prettier

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
generate everything in accordance with the prompt

### Assistant 3

[`2026-04-02 01:39:24 UTC+08:00`] I’m building the full project now: HTML structure, polished dark AI-lab styling, data-driven JavaScript for the case studies and interactions, plus a class-ready README. I’ll keep the asset paths and placeholder labels explicit so you can swap in real images, prompt screenshots, and reflection text with minimal editing later.

### Assistant 3

[`2026-04-02 01:40:51 UTC+08:00`] I’m writing the main project files in one coordinated pass now: the single-page HTML scaffold, the responsive CSS system, the centralized content/data model in JavaScript, and a full README. I’m also baking in the missing-image fallback pattern so empty asset folders still present as polished placeholder panels instead of broken thumbnails.

### Assistant 3

[`2026-04-02 01:49:29 UTC+08:00`] The first write hit the Windows command-length ceiling, so I’m splitting the file creation into smaller patches. I’m continuing with the same implementation, just in smaller chunks so everything lands cleanly.

### Assistant 3

[`2026-04-02 01:50:42 UTC+08:00`] The HTML scaffold is in place. I’m adding the visual system now: the dark AI-lab theme, responsive layout, hover states, mobile navigation, and the placeholder media styling that keeps missing assets looking intentional.

### Assistant 3

[`2026-04-02 01:53:42 UTC+08:00`] I’m wiring the content model and interaction layer now. This is the part that makes the project easy to maintain later, since the gallery cards, case-study viewer, slider, and switcher all pull from centralized data instead of hard-coded markup.

### Assistant 3

[`2026-04-02 01:57:25 UTC+08:00`] I’m trimming duplication inside `script.js` so the content model stays readable while also fitting the environment’s command limits. The goal hasn’t changed: you’ll still get the same data-driven case studies and interactions, just with a cleaner internal structure.

### Assistant 3

[`2026-04-02 02:00:38 UTC+08:00`] I’m splitting the JavaScript into staged patches now: first the working app shell, then the additional case-study records. That keeps the site functional at every step while getting around the shell’s size limit.

### Assistant 3

[`2026-04-02 02:02:42 UTC+08:00`] The interaction layer is working with the first full case-study object in place. I’m filling out the remaining featured studies now so the gallery and detailed viewer ship with the full assignment-ready content model.

### Assistant 3

[`2026-04-02 02:03:46 UTC+08:00`] I’m on the documentation pass now. I’m replacing the placeholder README with a class-submission-friendly guide that explains the site, the file structure, how to swap assets, and how to deploy it without extra tooling.

### Assistant 3

[`2026-04-02 02:04:27 UTC+08:00`] The full file set is written. I’m doing a verification pass now to catch any syntax issues or mismatches before I hand it off, especially in the data-driven JavaScript and the generated project structure.

### Assistant 3

[`2026-04-02 02:04:57 UTC+08:00`] Built the full submission-ready frontend project in [index.html](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/index.html), [styles.css](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/styles.css), [script.js](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js), and [README.md](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/README.md). The site now includes the hero, about, gallery overview, data-driven detailed case study viewer, iteration slider, style switcher, meta analysis, process documentation support, reflection scaffolds, footer, responsive navigation, and graceful missing-image placeholders.

The content model is centralized in [script.js](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js), with 4 featured case studies and all interactive content wired so you can swap in final images, prompt screenshots, and text later without rewriting the layout. I also added trackable placeholder asset folders under `assets/images/` and `assets/icons/` using `.gitkeep` files so the structure survives in git.

Verification: `node --check script.js` passed with no syntax errors. I did not run a live browser preview in the sandbox, so the remaining check is a visual pass in your browser after you start dropping in real assets.

One note: `.gitignore` already had existing uncommitted changes before this work, and I left it untouched.

### User 4

[`2026-04-02 02:04:58 UTC+08:00`] # Context from my IDE setup:

## Active file: .gitignore

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
Once completed with everything, make sure its configured for Github Pages

### Assistant 4

[`2026-04-02 02:05:11 UTC+08:00`] I’m adding repository-level GitHub Pages configuration now so the site can deploy without extra build tooling. I’ll wire in an Actions-based Pages workflow, add the small static-site compatibility file that helps with Pages hosting, and update the README to match the new deployment path.

### Assistant 4

[`2026-04-02 02:05:19 UTC+08:00`] I confirmed there isn’t any existing Pages workflow yet, so I’m adding one directly in the repo instead of leaving deployment up to manual branch settings. I’m also switching the README steps to the GitHub Actions flow so the instructions match the actual config.

### Assistant 4

[`2026-04-02 02:05:41 UTC+08:00`] I’m tightening the Pages workflow a bit so it publishes only the actual site files, not your PDFs or editor settings. That keeps the public deployment cleaner and more class-submission-friendly.

### Assistant 4

[`2026-04-02 02:05:56 UTC+08:00`] The workflow file looks good. I’m making one tiny hardening tweak so repeated workflow runs won’t fail if the temporary publish folder already exists in the action workspace.

### Assistant 4

[`2026-04-02 02:06:06 UTC+08:00`] GitHub Pages is now configured in the repo.

I added [deploy-pages.yml](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/.github/workflows/deploy-pages.yml), which deploys the site automatically on pushes to `main` or `master`, and I added [.nojekyll](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/.nojekyll) for static-site compatibility. I also updated [README.md](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/README.md) so the deployment instructions match the workflow-based setup.

One manual step still has to happen in GitHub itself: in the repo’s `Settings > Pages`, set the source to `GitHub Actions`. After that, pushing the repo will publish the site. I couldn’t verify the live deployment from here because that requires the remote GitHub repo and Pages settings, but the repository-side config is now in place.

### User 5

[`2026-04-02 02:12:04 UTC+08:00`] # Context from my IDE setup:

## Active file: .gitignore

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
Dont modify it yet, but is there any changes that you think should be made to the gitignore?

### Assistant 5

[`2026-04-02 02:12:16 UTC+08:00`] I’m checking the current `.gitignore` contents first so I can answer against what’s actually already covered, not just a generic template.

### Assistant 5

[`2026-04-02 02:12:45 UTC+08:00`] A few small changes would help, but nothing is urgently broken in [.gitignore](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/.gitignore).

- Add `.DS_Store` and `Thumbs.db` so OS junk files never show up.
- Add `.idea/` if anyone on the team might use JetBrains editors.
- Decide what you want to do with `.vscode/`. Right now it is not ignored, so your local VS Code files can show up as untracked. If the team wants shared editor settings, keep it tracked; if not, ignore `.vscode/` or just `.vscode/settings.json`.
- Optional cleanup: the file is mostly a Python template, which is harmless, but this repo is now a static HTML/CSS/JS site. Later, we could simplify it so it’s easier to understand.

I would not ignore `assets/images/`, `.nojekyll`, or `.github/`, since those are important for GitHub Pages and the final site. I also wouldn’t change anything yet unless you want me to make a focused cleanup pass.

### User 6

[`2026-04-02 02:13:51 UTC+08:00`] # Context from my IDE setup:

## Active file: .gitignore

## Open tabs:
- .gitignore: .gitignore

## My request for Codex:
Explain to me how the images / cases are handled - what does each case file represent and what content should go in them?

### Assistant 6

[`2026-04-02 02:14:00 UTC+08:00`] I’m pulling the relevant spots from the site code so I can explain the case/image setup in concrete terms, including where the content lives and what each folder is meant to hold.

### Assistant 6

[`2026-04-02 02:15:00 UTC+08:00`] There are two separate pieces to understand:

1. The case study content model lives in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L3).
2. The actual image files live in folders under `assets/images/`, like [assets/images/case1](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case1) and [assets/images/shared](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/shared).

There are not separate HTML files per case. The site is a single page, and JavaScript renders each case dynamically from the `caseStudies` array in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L3) and the detail renderer in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L553).

**What each case folder represents**
- [assets/images/case1](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case1): current placeholder assets for `Signal Bloom Poster Suite`
- [assets/images/case2](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case2): current placeholder assets for `Museum Dreamscape Key Art`
- [assets/images/case3](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case3): current placeholder assets for `Modular Motion Sneaker Board`
- [assets/images/case4](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case4): current placeholder assets for `Neon Flora Album Cover System`
- [assets/images/case5](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/case5): reserved if you want to add a fifth case study later

**What goes inside each case folder**
For each case, the expected files are basically:

- `cover-placeholder.jpg`
  Use this as the gallery card thumbnail.
- `prompt-v1-placeholder.jpg`
  Screenshot of the original prompt or tool UI for the first draft.
- `prompt-v2-placeholder.jpg`
  Screenshot of the revised prompt or second iteration of the prompt.
- `v1-placeholder.jpg`, `v2-placeholder.jpg`, `v3-placeholder.jpg`, etc.
  The actual AI-generated outputs showing visual evolution across versions.
- `tool-a-placeholder.jpg`
  Representative output from one tool/model.
- `tool-b-placeholder.jpg`
  Representative output from another tool/model for comparison.
- `final-placeholder.jpg`
  The final selected image for that case study.

**What each field in the case object means**
In each case object in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L3):

- `thumbnail`: the gallery/overview image
- `title`, `subtitle`, `category`, `tags`, `versionRange`, `summary`: the text shown on the overview card and detail header
- `intent`: what the project was trying to do
- `promptVersions`: the prompt text plus prompt screenshots
- `iterationImages`: the actual versioned outputs (`v1`, `v2`, etc.)
- `toolComparisons`: images and notes comparing multiple tools/models
- `finalSelection`: the chosen final output and why it was selected
- `lessonsLearned`: short reflection bullets for that case

**How the site uses those assets**
- The overview cards pull from `thumbnail`, tags, and summary in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L492).
- The detailed case study section pulls from `intent`, `promptVersions`, `iterationImages`, `toolComparisons`, and `finalSelection` in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L553).
- If an image file is missing, the site does not show a broken image icon. It shows a styled placeholder box instead, handled in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L875).

**What goes in `shared` instead of a case folder**
Use [assets/images/shared](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/assets/images/shared) for assets that are not tied to one case, such as:

- hero/logo image
- process documentation screenshots
- prompt evidence screenshots used in the process section
- style switcher images

Those shared assets are referenced separately in [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L376) and [script.js](d:/CODE%20PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js#L420).

**Practical rule**
Think of each `caseN` folder as “all images for one full case study.”  
Think of each case object in `script.js` as “the text + metadata + file paths that tell the site how to display that case.”

If you want, I can next give you a simple per-case checklist like “for case1, gather these 8 exact files and this text.”

### User 7

[`2026-04-02 02:17:49 UTC+08:00`] # Context from my IDE setup:

## Active file: script.js

## Active selection of the file:
case1
## Open tabs:
- script.js: script.js
- .gitignore: .gitignore

## My request for Codex:
can you change each prompt placeholder, for example: "signal bloom poster suite" or "museum Dreamscape etc" to simply be "Prompt 1 base image" "prompt 1 imageV2", "prompt 1 imageV3", "prompt 1 imageV4", then, Prompt 2 base image" "prompt 2 imageV2", "prompt 2 imageV3", "prompt 2 imageV4" etc etc.

### Assistant 7

[`2026-04-02 02:18:02 UTC+08:00`] I’m updating the case-study placeholder naming to a simpler prompt-based scheme now. I’ll keep the structure and interactions the same, but replace the themed placeholder titles and version captions with generic labels like `Prompt 1`, `Base image`, and `Image V2/V3/V4` so it matches the way you want to organize your assets.

[`2026-04-02 02:18:34 UTC+08:00`] I’m simplifying the case-study copy across the whole data model, not just one label, so the gallery, detailed viewer, and slider all stay consistent. The structure stays exactly the same; the placeholder language will just read like `Prompt 1`, `Base image`, `Image V2`, and so on.

### Assistant 7

[`2026-04-02 02:20:45 UTC+08:00`] The content change is a little too large for one patch in this environment, so I’m applying it case by case. I’m starting with Prompt 1 and Prompt 2 first, then I’ll finish Prompt 3 and Prompt 4 so the whole naming scheme stays consistent.

### Assistant 7

[`2026-04-02 02:21:51 UTC+08:00`] Prompt 1 and Prompt 2 are converted. I’m finishing the same rename pattern for Prompt 3 and Prompt 4 now so all four cases use the same placeholder language everywhere they appear on the site.

### Assistant 7

[`2026-04-02 02:23:02 UTC+08:00`] The rename is applied across all four case-study objects. I’m doing a quick syntax check now so I can confirm the data model still parses cleanly after the wording changes.

### Assistant 7

[`2026-04-02 02:23:15 UTC+08:00`] Updated the placeholder naming in [script.js](d:/CODE PROJECTS/SchoolProjects/CSC150-Team-Demo-Website/script.js).

The themed case-study placeholders now use a generic prompt-based scheme:
- `Prompt 1`, `Prompt 2`, `Prompt 3`, `Prompt 4`
- `Prompt 1 base image`, `Prompt 1 image V2`, `Prompt 1 image V3`, etc.
- matching generic labels for prompt screenshots, tool comparison placeholders, and final selection placeholders

I kept the structure and functionality the same. The gallery, detailed case study viewer, and iteration slider will all now show the simpler prompt-based wording.

One important note: I changed the displayed placeholder text only. I did not rename the actual folders or asset paths, so the site still uses:
- `assets/images/case1/...`
- `assets/images/case2/...`
- `assets/images/case3/...`
- `assets/images/case4/...`

I also verified the file still parses cleanly with `node --check script.js`.

If you want, I can do the next step and rename the actual asset filenames and/or folder structure to match `prompt1`, `prompt2`, etc.

### User 8

[`2026-04-02 02:23:15 UTC+08:00`] # Context from my IDE setup:

## Active file: script.js

## Open tabs:
- script.js: script.js
- .gitignore: .gitignore

## My request for Codex:
Question for you: What size should the images that we generate be? or if theres no set size / we can make it dynamic with different sizes/landscapes, what would be optimal? 

My reason/just respond in chat: I am manually going to make placeholder images that my group memebers can replace once they generate the images then can simply insert in the place of said placeholders

### Assistant 8

[`2026-04-02 02:23:59 UTC+08:00`] There isn’t a strict required size, but with the current site code the best choice is consistent landscape images.

The reason: the site displays images inside fixed media boxes and uses `object-fit: cover`, so different image sizes will still work, but portrait or oddly shaped images will get cropped more aggressively. For placeholders your group can swap easily later, standardizing is the safest move.

My recommendation:
- Use `1600 x 1000 px` for almost everything.
- If you want a slightly larger master size, `1800 x 1125 px` is also great.
- Keep the aspect ratio landscape, around `16:10` or `8:5`.
- Avoid portrait images unless you place them on a landscape background first.

Best practical setup for your placeholders:
- `case#/cover-placeholder.jpg`: `1600 x 1000`
- `case#/v1-placeholder.jpg` through `v5-placeholder.jpg`: `1600 x 1000`
- `case#/tool-a-placeholder.jpg` and `tool-b-placeholder.jpg`: `1600 x 1000`
- `case#/final-placeholder.jpg`: `1600 x 1000`
- `shared/style-*.jpg`: `1600 x 1000`
- `shared/prompt-shot-*.jpg`: `1600 x 1000`
- `case#/prompt-v1-placeholder.jpg` and `prompt-v2-placeholder.jpg`: also `1600 x 1000`, even if the actual screenshot is smaller inside that canvas
- `shared/logo-placeholder.png`: `1600 x 1000` if it’s a full hero visual, or `1200 x 1200` if it’s just a logo asset with transparency

If your teammates generate square or portrait images later, the easiest fix is:
- place the real image centered on a `1600 x 1000` dark background
- export that final landscape version
- replace the placeholder file directly

That gives you the simplest workflow and the least chance of weird cropping. If you want, I can also give you a file-by-file placeholder size checklist for every exact image filename in the project.

## Hidden Context

### 系统运行上下文 (permissions instructions, app-context)

> 模型运行时的权限、沙箱、客户端能力和系统级限制。

<permissions instructions>
Filesystem sandboxing defines which files can be read or written. `sandbox_mode` is `workspace-write`: The sandbox permits reading files, and editing files in `cwd` and `writable_roots`. Editing files in other directories requires approval. Network access is restricted.
# Escalation Requests

Commands are run outside the sandbox if they are approved by the user, or match an existing rule that allows it to run unrestricted. The command string is split into independent command segments at shell control operators, including but not limited to:

- Pipes: |
- Logical operators: &&, ||
- Command separators: ;
- Subshell boundaries: (...), $(...)

Each resulting segment is evaluated independently for sandbox restrictions and approval requirements.

Example:

git pull | tee output.txt

This is treated as two command segments:

["git", "pull"]

["tee", "output.txt"]

Commands that use more advanced shell features like redirection (>, >>, <), substitutions ($(...), ...), environment variables (FOO=bar), or wildcard patterns (*, ?) will not be evaluated against rules, to limit the scope of what an approved rule allows.

## How to request escalation

IMPORTANT: To request approval to execute a command that will require escalated privileges:

- Provide the `sandbox_permissions` parameter with the value `"require_escalated"`
- Include a short question asking the user if they want to allow the action in `justification` parameter. e.g. "Do you want to download and install dependencies for this project?"
- Optionally suggest a `prefix_rule` - this will be shown to the user with an option to persist the rule approval for future sessions.

If you run a command that is important to solving the user's query, but it fails because of sandboxing or with a likely sandbox-related network error (for example DNS/host resolution, registry/index access, or dependency download failure), rerun the command with "require_escalated". ALWAYS proceed to use the `justification` parameter - do not message the user before requesting approval for the command.

## When to request escalation

While commands are running inside the sandbox, here are some scenarios that will require escalation outside the sandbox:

- You need to run a command that writes to a directory that requires it (e.g. running tests that write to /var)
- You need to run a GUI app (e.g., open/xdg-open/osascript) to open browsers or files.
- If you run a command that is important to solving the user's query, but it fails because of sandboxing or with a likely sandbox-related network error (for example DNS/host resolution, registry/index access, or dependency download failure), rerun the command with `require_escalated`. ALWAYS proceed to use the `sandbox_permissions` and `justification` parameters. do not message the user before requesting approval for the command.
- You are about to take a potentially destructive action such as an `rm` or `git reset` that the user did not explicitly ask for.
- Be judicious with escalating, but if completing the user's request requires it, you should do so - don't try and circumvent approvals by using other tools.

## prefix_rule guidance

When choosing a `prefix_rule`, request one that will allow you to fulfill similar requests from the user in the future without re-requesting escalation. It should be categorical and reasonably scoped to similar capabilities. You should rarely pass the entire command into `prefix_rule`.

### Banned prefix_rules 
Avoid requesting overly broad prefixes that the user would be ill-advised to approve. For example, do not request ["python3"], ["python", "-"], or other similar prefixes that would allow arbitrary scripting.
NEVER provide a prefix_rule argument for destructive commands like rm.
NEVER provide a prefix_rule if your command uses a heredoc or herestring. 

### Examples
Good examples of prefixes:
- ["npm", "run", "dev"]
- ["gh", "pr", "check"]
- ["cargo", "test"]

## Approved command prefixes
The following prefix rules have already been approved: - ["C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "-Command", "$i=1; Get-Content README.md | ForEach-Object { '{0,4}: {1}' -f $i, $_; $i++ }"]
- ["C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "-Command", "$i=1; Get-Content py2web.py | ForEach-Object { '{0,4}: {1}' -f $i, $_; $i++ }"]
- ["C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "-Command", "python -c \"from pathlib import Path; t=Path(r'd:\\CENGAGE_RIPPER_continuation\\py2web.py').read_bytes().decode('latin-1'); i=t.index('if new_line:'); print(repr(t[i-40:i+80]))\""]
 The writable roots are `d:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website`, `d:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website`.
</permissions instructions>

<collaboration_mode># Collaboration Mode: Default

You are now in Default mode. Any previous instructions for other modes (e.g. Plan mode) are no longer active.

Your active mode changes only when new developer instructions with a different `<collaboration_mode>...</collaboration_mode>` change it; user requests or tool descriptions do not change mode by themselves. Known mode names are Default and Plan.

## request_user_input availability

The `request_user_input` tool is unavailable in Default mode. If you call it while in Default mode, it will return an error.

In Default mode, strongly prefer making reasonable assumptions and executing the user's request rather than stopping to ask questions. If you absolutely must ask a question because the answer cannot be discovered from local context and a reasonable assumption would be risky, ask the user directly with a concise plain-text question. Never write a multiple choice question as a textual assistant message.
</collaboration_mode>

<apps_instructions>
## Apps (Connectors)
Apps (Connectors) can be explicitly triggered in user messages in the format `[$app-name](app://{connector_id})`. Apps can also be implicitly triggered as long as the context suggests usage of available apps.
An app is equivalent to a set of MCP tools within the `codex_apps` MCP.
An installed app's MCP tools are either provided to you already, or can be lazy-loaded through the `tool_search` tool. If `tool_search` is available, the apps that are searchable by `tools_search` will be listed by it.
Do not additionally call list_mcp_resources or list_mcp_resource_templates for apps.
</apps_instructions>

<skills_instructions>
## Skills
A skill is a set of local instructions to follow that is stored in a `SKILL.md` file. Below is the list of skills that can be used. Each entry includes a name, description, and file path so you can open the source for full instructions when using a specific skill.
### Available skills
- imagegen: Generate or edit raster images when the task benefits from AI-created bitmap visuals such as photos, illustrations, textures, sprites, mockups, or transparent-background cutouts. Use when Codex should create a brand-new image, transform an existing image, or derive visual variants from references, and the output should be a bitmap asset rather than repo-native code or vector. Do not use when the task is better handled by editing existing SVG/vector/code-native assets, extending an established icon or logo system, or building the visual directly in HTML/CSS/canvas. (file: C:/Users/Thomas/.codex/skills/.system/imagegen/SKILL.md)
- openai-docs: Use when the user asks how to build with OpenAI products or APIs and needs up-to-date official documentation with citations, help choosing the latest model for a use case, or explicit GPT-5.4 upgrade and prompt-upgrade guidance; prioritize OpenAI docs MCP tools, use bundled references only as helper context, and restrict any fallback browsing to official OpenAI domains. (file: C:/Users/Thomas/.codex/skills/.system/openai-docs/SKILL.md)
- plugin-creator: Create and scaffold plugin directories for Codex with a required `.codex-plugin/plugin.json`, optional plugin folders/files, and baseline placeholders you can edit before publishing or testing. Use when Codex needs to create a new local plugin, add optional plugin structure, or generate or update repo-root `.agents/plugins/marketplace.json` entries for plugin ordering and availability metadata. (file: C:/Users/Thomas/.codex/skills/.system/plugin-creator/SKILL.md)
- skill-creator: Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations. (file: C:/Users/Thomas/.codex/skills/.system/skill-creator/SKILL.md)
- skill-installer: Install Codex skills into $CODEX_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos). (file: C:/Users/Thomas/.codex/skills/.system/skill-installer/SKILL.md)
### How to use skills
- Discovery: The list above is the skills available in this session (name + description + file path). Skill bodies live on disk at the listed paths.
- Trigger rules: If the user names a skill (with `$SkillName` or plain text) OR the task clearly matches a skill's description shown above, you must use that skill for that turn. Multiple mentions mean use them all. Do not carry skills across turns unless re-mentioned.
- Missing/blocked: If a named skill isn't in the list or the path can't be read, say so briefly and continue with the best fallback.
- How to use a skill (progressive disclosure):
  1) After deciding to use a skill, open its `SKILL.md`. Read only enough to follow the workflow.
  2) When `SKILL.md` references relative paths (e.g., `scripts/foo.py`), resolve them relative to the skill directory listed above first, and only consider other paths if needed.
  3) If `SKILL.md` points to extra folders such as `references/`, load only the specific files needed for the request; don't bulk-load everything.
  4) If `scripts/` exist, prefer running or patching them instead of retyping large code blocks.
  5) If `assets/` or templates exist, reuse them instead of recreating from scratch.
- Coordination and sequencing:
  - If multiple skills apply, choose the minimal set that covers the request and state the order you'll use them.
  - Announce which skill(s) you're using and why (one short line). If you skip an obvious skill, say why.
- Context hygiene:
  - Keep context small: summarize long sections instead of pasting them; only load extra files when needed.
  - Avoid deep reference-chasing: prefer opening only files directly linked from `SKILL.md` unless you're blocked.
  - When variants exist (frameworks, providers, domains), pick only the relevant reference file(s) and note that choice.
- Safety and fallback: If a skill can't be applied cleanly (missing files, unclear instructions), state the issue, pick the next-best approach, and continue.
</skills_instructions>

## Tool Trace

<details>
<summary>Tool call: shell_command (call_fCbpicSEQeG5hgaqZFNstVTG)</summary>

```json
{"command":"Get-ChildItem -Force","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_D3j5aT9sf5SF67kQAy77GJxx)</summary>

```json
{"command":"rg --files","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_fCbpicSEQeG5hgaqZFNstVTG</summary>

```text
Exit code: 0
Wall time: 1.1 seconds
Output:


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d--h--          4/1/2026  12:46 PM                .git                                                                 
d-----          4/1/2026   1:25 PM                .vscode                                                              
-a----          4/1/2026   1:17 PM           4984 .gitignore                                                           
-a----          4/1/2026   1:03 PM         191627 AIArtPortfolioConceptIdea.pdf                                        
-a----          4/1/2026  12:42 PM         127667 AssignmentInstructionsRubric.pdf                                     
-a----          4/1/2026  12:45 PM             70 README.md                                                            


Cannot set property. Property setting is supported only on core types in this language mode.
At line:1 char:1
+ [Console]::OutputEncoding=[System.Text.Encoding]::UTF8;
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [], RuntimeException
    + FullyQualifiedErrorId : PropertySetterNotSupportedInConstrainedLanguage
 

```

</details>

<details>
<summary>Tool output: call_D3j5aT9sf5SF67kQAy77GJxx</summary>

```text
execution error: Io(Custom { kind: Other, error: "windows sandbox: CreateProcessWithLogonW failed: 1056" })
```

</details>

<details>
<summary>Tool call: shell_command (call_10imO8Tw1vU5Jdn5ssVxPN3J)</summary>

```json
{"command":"git status --short","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_JOKD63SVrRHAVgix0akybSOS)</summary>

```json
{"command":"Get-Content README.md","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_1ys9zhwL0H9agepElbkn1gSM)</summary>

```json
{"command":"Get-Content .gitignore | Select-Object -First 60","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_10imO8Tw1vU5Jdn5ssVxPN3J</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:
 M .gitignore
?? .vscode/

```

</details>

<details>
<summary>Tool output: call_JOKD63SVrRHAVgix0akybSOS</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:
# CSC150-Team-Demo-Website
CSC150 Team Demo Website - class project

```

</details>

<details>
<summary>Tool output: call_1ys9zhwL0H9agepElbkn1gSM</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[codz]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py.cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py

```

</details>

<details>
<summary>Tool call: update_plan (call_LXL122eUn5yputTfGqNIezvX)</summary>

```json
{"explanation":"Building a complete vanilla frontend submission from a nearly empty repo.","plan":[{"step":"Create project folders and placeholder asset structure","status":"in_progress"},{"step":"Implement single-page HTML scaffold with all required sections","status":"pending"},{"step":"Add polished responsive CSS for dark AI-lab presentation","status":"pending"},{"step":"Implement data-driven JavaScript interactions and graceful fallbacks","status":"pending"},{"step":"Write submission-ready README and verify project files","status":"pending"}]}
```

</details>

<details>
<summary>Tool output: call_LXL122eUn5yputTfGqNIezvX</summary>

```text
Plan updated
```

</details>

<details>
<summary>Tool call: shell_command (call_Zy0nfIY165NRNUAKF2lrXhAu)</summary>

```json
{"command":"New-Item -ItemType Directory -Force assets, assets\\images, assets\\images\\shared, assets\\images\\case1, assets\\images\\case2, assets\\images\\case3, assets\\images\\case4, assets\\images\\case5, assets\\icons | Out-Null","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_Zy0nfIY165NRNUAKF2lrXhAu</summary>

```text
Exit code: 0
Wall time: 0.3 seconds
Output:

```

</details>

<details>
<summary>Tool call: shell_command (call_ASbcDka71fpVFqaPY2yQW8ej)</summary>

```json
{"command":"Get-ChildItem -Force","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_kzaHAZZGgtbYvwRlz0MHh1YM)</summary>

```json
{"command":"Get-ChildItem -Recurse -Depth 2 assets","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_ASbcDka71fpVFqaPY2yQW8ej</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d--h--          4/1/2026   1:26 PM                .git                                                                 
d-----          4/1/2026   1:25 PM                .vscode                                                              
d-----          4/1/2026   1:27 PM                assets                                                               
-a----          4/1/2026   1:17 PM           4984 .gitignore                                                           
-a----          4/1/2026   1:03 PM         191627 AIArtPortfolioConceptIdea.pdf                                        
-a----          4/1/2026  12:42 PM         127667 AssignmentInstructionsRubric.pdf                                     
-a----          4/1/2026  12:45 PM             70 README.md                                                            



```

</details>

<details>
<summary>Tool output: call_kzaHAZZGgtbYvwRlz0MHh1YM</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\assets


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          4/1/2026   1:27 PM                icons                                                                
d-----          4/1/2026   1:27 PM                images                                                               


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\assets\images


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          4/1/2026   1:27 PM                case1                                                                
d-----          4/1/2026   1:27 PM                case2                                                                
d-----          4/1/2026   1:27 PM                case3                                                                
d-----          4/1/2026   1:27 PM                case4                                                                
d-----          4/1/2026   1:27 PM                case5                                                                
d-----          4/1/2026   1:27 PM                shared                                                               



```

</details>

<details>
<summary>Tool call: update_plan (call_XoP8uMO3v75svKm10npODK9u)</summary>

```json
{"explanation":"Continuing from the scaffolded asset folders to generate the complete submission-ready site.","plan":[{"step":"Create project folders and placeholder asset structure","status":"completed"},{"step":"Implement single-page HTML scaffold with all required sections","status":"in_progress"},{"step":"Add polished responsive CSS for dark AI-lab presentation","status":"pending"},{"step":"Implement data-driven JavaScript interactions and graceful fallbacks","status":"pending"},{"step":"Write submission-ready README and verify project files","status":"pending"}]}
```

</details>

<details>
<summary>Tool output: call_XoP8uMO3v75svKm10npODK9u</summary>

```text
Plan updated
```

</details>

<details>
<summary>Tool call: apply_patch (call_EXRKjjFQiLrX8mVvSzYhIQhO)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_EXRKjjFQiLrX8mVvSzYhIQhO","name":"apply_patch","input":"*** Begin Patch\n*** Delete File: README.md\n*** Add File: index.html\n+<!DOCTYPE html>\n+<html lang=\"en\">\n+<head>\n+  <meta charset=\"UTF-8\">\n+  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n+  <title>Prompt to Pixel | AI Design Portfolio Showcase</title>\n+  <meta\n+    name=\"description\"\n+    content=\"A submission-ready AI design portfolio website that showcases prompt engineering, iteration, tool comparison, and reflective process documentation.\"\n+  >\n+  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n+  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n+  <link\n+    href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap\"\n+    rel=\"stylesheet\"\n+  >\n+  <link rel=\"stylesheet\" href=\"styles.css\">\n+  <script src=\"script.js\" defer></script>\n+</head>\n+<body>\n+  <a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n+\n+  <header class=\"site-header\" id=\"top\">\n+    <div class=\"container site-header__inner\">\n+      <a class=\"brand\" href=\"#top\" aria-label=\"Prompt to Pixel home\">\n+        <span class=\"brand__mark\">P/P</span>\n+        <span class=\"brand__text\">\n+          <strong>Prompt to Pixel</strong>\n+          <span>AI Design Process Showcase</span>\n+        </span>\n+      </a>\n+\n+      <button\n+        class=\"menu-toggle\"\n+        type=\"button\"\n+        aria-expanded=\"false\"\n+        aria-controls=\"site-nav\"\n+      >\n+        Menu\n+      </button>\n+\n+      <nav class=\"site-nav\" id=\"site-nav\" aria-label=\"Primary navigation\">\n+        <a href=\"#about\">About</a>\n+        <a href=\"#gallery\">Gallery</a>\n+        <a href=\"#case-studies\">Case Studies</a>\n+        <a href=\"#interactive\">Interactive Lab</a>\n+        <a href=\"#analysis\">Meta Analysis</a>\n+        <a href=\"#process\">Process</a>\n+        <a href=\"#reflection\">Reflection</a>\n+      </nav>\n+    </div>\n+  </header>\n+\n+  <main id=\"main-content\">\n+    <section class=\"hero section\">\n+      <div class=\"container hero__grid\">\n+        <div class=\"hero__content\">\n+          <p class=\"eyebrow\">College Team Demo Website</p>\n+          <h1>Present AI-assisted design as a visible, editable creative process.</h1>\n+          <p class=\"hero__lede\">\n+            This portfolio is structured around iteration sequences, prompt refinement,\n+            and tool comparison. It is built to show how ideas evolve from first draft to\n+            final selected result, not just to display finished images.\n+          </p>\n+\n+          <div class=\"hero__actions\">\n+            <a class=\"button\" href=\"#gallery\">Explore Case Studies</a>\n+            <a class=\"button button--ghost\" href=\"#process\">View Process</a>\n+          </div>\n+\n+          <div class=\"hero__metrics\" aria-label=\"Project highlights\">\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">4</span>\n+              <span class=\"metric-card__label\">Featured case studies</span>\n+            </article>\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">20+</span>\n+              <span class=\"metric-card__label\">Iteration placeholders ready for swap-in</span>\n+            </article>\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">2</span>\n+              <span class=\"metric-card__label\">Interactive process demos</span>\n+            </article>\n+          </div>\n+        </div>\n+\n+        <div class=\"hero__visual\">\n+          <div class=\"panel panel--hero\">\n+            <div\n+              class=\"media-shell media-shell--hero\"\n+              data-src=\"assets/images/shared/logo-placeholder.png\"\n+              data-alt=\"Project logo or hero visual placeholder\"\n+              data-label=\"Insert AI-generated logo or hero visual here\"\n+            ></div>\n+\n+            <div class=\"hero__visual-meta\">\n+              <div>\n+                <p class=\"hero__visual-label\">Recommended asset path</p>\n+                <p class=\"hero__visual-path\">assets/images/shared/logo-placeholder.png</p>\n+              </div>\n+              <div>\n+                <p class=\"hero__visual-label\">Suggested use</p>\n+                <p class=\"hero__visual-path\">Team logo, hero render, or brand mark</p>\n+              </div>\n+            </div>\n+          </div>\n+\n+          <div class=\"hero__floating hero__floating--top\">\n+            <span>Iteration-first storytelling</span>\n+          </div>\n+          <div class=\"hero__floating hero__floating--bottom\">\n+            <span>Prepared for screenshots, prompts, and final reflections</span>\n+          </div>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"about\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">About The Concept</p>\n+          <h2>Why this site is organized around process rather than just outcomes</h2>\n+          <p>\n+            The current copy is intentionally polished but still editable. Replace it with\n+            your team’s final language once the project direction, visual identity, and\n+            evidence set are finalized.\n+          </p>\n+        </div>\n+\n+        <div class=\"about-grid\">\n+          <article class=\"panel\">\n+            <h3>Editable concept summary</h3>\n+            <p>\n+              This website frames AI-assisted design as a sequence of decisions. Each case\n+              study is built to show how a concept was defined, tested, revised, compared\n+              across tools, and ultimately resolved into a chosen visual direction. The\n+              emphasis is on iterative thinking, not on pretending that the first output\n+              was the final answer.\n+            </p>\n+            <p>\n+              Use this block to explain your team’s theme, why AI was part of the workflow,\n+              and what kind of visual or design questions the project set out to explore.\n+            </p>\n+          </article>\n+\n+          <div class=\"stack\">\n+            <article class=\"panel feature-card\">\n+              <h3>Process visibility</h3>\n+              <p>\n+                The structure highlights prompt revisions, version tracking, and reasoning\n+                for each change so the audience can see how the work matured over time.\n+              </p>\n+            </article>\n+            <article class=\"panel feature-card\">\n+              <h3>Assignment alignment</h3>\n+              <p>\n+                Visual design, functionality, process documentation, and reflection support\n+                are all built directly into the site architecture rather than added as an\n+                afterthought.\n+              </p>\n+            </article>\n+            <article class=\"panel feature-card\">\n+              <h3>Easy customization</h3>\n+              <p>\n+                Replace placeholder images, screenshots, and text in clearly labeled asset\n+                paths and JavaScript content objects without rebuilding the layout.\n+              </p>\n+            </article>\n+          </div>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"gallery\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Gallery Overview</p>\n+          <h2>Featured case studies prepared for final content</h2>\n+          <p>\n+            Each card represents one project track. Thumbnails, tags, version ranges, and\n+            summary copy are generated from a centralized JavaScript content model.\n+          </p>\n+        </div>\n+\n+        <div class=\"case-grid\" id=\"caseStudyGrid\" aria-live=\"polite\"></div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"case-studies\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Detailed Case Study Viewer</p>\n+          <h2>Inspect one iteration sequence at a time</h2>\n+          <p>\n+            Select a case study below to swap the detailed view. This section is data-driven\n+            so you can add, remove, or rewrite case studies inside the JavaScript file.\n+          </p>\n+        </div>\n+\n+        <div class=\"case-selector\" id=\"caseStudySelector\" role=\"tablist\" aria-label=\"Case study selector\"></div>\n+        <article class=\"case-detail\" id=\"caseStudyDetail\" aria-live=\"polite\"></article>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"interactive\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Interactive Process Features</p>\n+          <h2>Make the evolution visible through direct interaction</h2>\n+          <p>\n+            These modules are fully functional now using placeholder assets and can be updated\n+            later with final images, prompt screenshots, and refined explanatory notes.\n+          </p>\n+        </div>\n+\n+        <div class=\"interactive-grid\">\n+          <article class=\"panel interactive-card\">\n+            <div class=\"interactive-card__header\">\n+              <div>\n+                <p class=\"eyebrow eyebrow--small\">Feature A</p>\n+                <h3>Iteration slider</h3>\n+              </div>\n+              <span class=\"interactive-badge\" id=\"iterationSliderValue\">v1</span>\n+            </div>\n+\n+            <p class=\"interactive-card__intro\">\n+              Move through sequential versions to compare how the concept changes from early\n+              exploration to a more resolved direction.\n+            </p>\n+\n+            <div class=\"slider-controls\">\n+              <button class=\"icon-button\" id=\"iterationPrev\" type=\"button\" aria-label=\"Previous iteration\">Previous</button>\n+              <input\n+                type=\"range\"\n+                id=\"iterationSlider\"\n+                min=\"0\"\n+                max=\"4\"\n+                step=\"1\"\n+                value=\"0\"\n+                aria-label=\"Iteration version slider\"\n+              >\n+              <button class=\"icon-button\" id=\"iterationNext\" type=\"button\" aria-label=\"Next iteration\">Next</button>\n+            </div>\n+\n+            <div class=\"step-indicators\" id=\"iterationMarkers\" aria-hidden=\"true\"></div>\n+\n+            <div class=\"interactive-media\">\n+              <div class=\"media-shell media-shell--wide\" id=\"iterationSliderMedia\"></div>\n+            </div>\n+\n+            <div class=\"interactive-copy\">\n+              <h4 id=\"iterationCaptionTitle\">Version focus</h4>\n+              <p id=\"iterationCaptionText\"></p>\n+              <p class=\"interactive-note\" id=\"iterationCaptionNote\"></p>\n+            </div>\n+          </article>\n+\n+          <article class=\"panel interactive-card\">\n+            <div class=\"interactive-card__header\">\n+              <div>\n+                <p class=\"eyebrow eyebrow--small\">Feature B</p>\n+                <h3>Style switcher</h3>\n+              </div>\n+              <span class=\"interactive-badge\">Prepared variations</span>\n+            </div>\n+\n+            <p class=\"interactive-card__intro\">\n+              Compare different visual interpretations of the same creative brief to show how\n+              wording, style references, and tool strategy influence the result.\n+            </p>\n+\n+            <div class=\"toggle-group\" id=\"styleToggleGroup\" role=\"tablist\" aria-label=\"Style variations\"></div>\n+\n+            <div class=\"interactive-media\">\n+              <div class=\"media-shell media-shell--wide\" id=\"styleToggleMedia\"></div>\n+            </div>\n+\n+            <div class=\"interactive-copy\">\n+              <h4 id=\"styleToggleTitle\">Variation title</h4>\n+              <p id=\"styleToggleDescription\"></p>\n+              <p class=\"interactive-note\" id=\"styleToggleNote\"></p>\n+            </div>\n+          </article>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"analysis\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Meta Analysis</p>\n+          <h2>Cross-project observations ready for your final synthesis</h2>\n+          <p>\n+            The cards below are written as editable, class-appropriate scaffolds. They help\n+            connect evidence from multiple case studies into broader takeaways about AI in a\n+            creative workflow.\n+          </p>\n+        </div>\n+\n+        <div class=\"insight-grid\" id=\"analysisGrid\"></div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"process\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Process Documentation Support</p>\n+          <h2>Reinforce the evidence that will also appear in your separate process document</h2>\n+          <p>\n+            This section is designed to mirror assignment expectations with visible workflow\n+            stages, tool rationale, iteration counts, contribution areas, and screenshot\n+            placeholders.\n+          </p>\n+        </div>\n+\n+        <div class=\"stat-grid\" id=\"processStats\"></div>\n+\n+        <div class=\"process-layout\">\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Workflow stages</h3>\n+              <p>Use these cards to explain how the team moved from idea framing to final curation.</p>\n+            </div>\n+            <div class=\"workflow-grid\" id=\"workflowGrid\"></div>\n+          </article>\n+\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Tools used</h3>\n+              <p>Document which AI systems were tested and why each one fit a specific task.</p>\n+            </div>\n+            <div class=\"tool-grid\" id=\"toolGrid\"></div>\n+          </article>\n+        </div>\n+\n+        <div class=\"process-layout process-layout--secondary\">\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Prompt screenshot placeholders</h3>\n+              <p>Drop in exported prompt screenshots or cropped evidence images when they are ready.</p>\n+            </div>\n+            <div class=\"artifact-grid\" id=\"artifactGrid\"></div>\n+          </article>\n+\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Team contribution placeholders</h3>\n+              <p>Summarize who handled research, prompting, curation, writing, QA, and presentation.</p>\n+            </div>\n+            <div class=\"contribution-grid\" id=\"contributionGrid\"></div>\n+          </article>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"reflection\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Reflection Support</p>\n+          <h2>Structured prompts for the final team reflection</h2>\n+          <p>\n+            These cards are concise writing guides, not finished reflection paragraphs. Keep,\n+            replace, or expand them as your final team reflection takes shape.\n+          </p>\n+        </div>\n+\n+        <div class=\"reflection-grid\" id=\"reflectionGrid\"></div>\n+      </div>\n+    </section>\n+  </main>\n+\n+  <footer class=\"site-footer\">\n+    <div class=\"container site-footer__grid\">\n+      <div>\n+        <p class=\"eyebrow eyebrow--small\">Project Footer</p>\n+        <h2>Prompt to Pixel</h2>\n+        <p>\n+          Replace this title with your final team or project name if needed. This site is\n+          structured for direct class submission and optional GitHub Pages deployment.\n+        </p>\n+      </div>\n+\n+      <div>\n+        <h3>Submission placeholders</h3>\n+        <ul class=\"footer-list\">\n+          <li>Team name: add member names here</li>\n+          <li>GitHub repo: add final repository URL here</li>\n+          <li>Live deployment: add GitHub Pages URL here</li>\n+        </ul>\n+      </div>\n+\n+      <div>\n+        <h3>Class note</h3>\n+        <p>\n+          Created as a frontend-only creative showcase for a college assignment. Final AI\n+          images, prompt screenshots, and reflection text should be inserted manually before submission.\n+        </p>\n+      </div>\n+    </div>\n+  </footer>\n+\n+  <noscript>\n+    <div class=\"noscript-note\">\n+      JavaScript is required for the case study viewer, iteration slider, and style switcher.\n+      The rest of the page content remains available without it.\n+    </div>\n+  </noscript>\n+</body>\n+</html>\n*** Add File: styles.css\n+:root {\n+  --bg: #050910;\n+  --bg-soft: #0a1320;\n+  --panel: rgba(12, 20, 32, 0.86);\n+  --panel-strong: rgba(16, 27, 43, 0.96);\n+  --panel-muted: rgba(15, 21, 33, 0.62);\n+  --text: #edf3ff;\n+  --muted: #9eabc2;\n+  --muted-strong: #c8d4ea;\n+  --line: rgba(160, 181, 214, 0.14);\n+  --accent: #68d6ff;\n+  --accent-strong: #269bff;\n+  --accent-soft: rgba(104, 214, 255, 0.16);\n+  --warm: #ffba75;\n+  --warm-soft: rgba(255, 186, 117, 0.15);\n+  --success: #79f0c3;\n+  --radius-lg: 28px;\n+  --radius-md: 20px;\n+  --radius-sm: 14px;\n+  --shadow: 0 22px 60px rgba(0, 0, 0, 0.34);\n+  --max-width: 1180px;\n+  --header-height: 84px;\n+}\n+\n+*,\n+*::before,\n+*::after {\n+  box-sizing: border-box;\n+}\n+\n+html {\n+  scroll-behavior: smooth;\n+}\n+\n+body {\n+  margin: 0;\n+  font-family: \"Manrope\", \"Segoe UI\", sans-serif;\n+  color: var(--text);\n+  background:\n+    radial-gradient(circle at top left, rgba(38, 155, 255, 0.2), transparent 28%),\n+    radial-gradient(circle at 85% 18%, rgba(255, 186, 117, 0.12), transparent 24%),\n+    linear-gradient(180deg, #07101c 0%, #050910 42%, #04070d 100%);\n+  min-height: 100vh;\n+  overflow-x: hidden;\n+}\n+\n+body::before,\n+body::after {\n+  content: \"\";\n+  position: fixed;\n+  inset: auto;\n+  pointer-events: none;\n+  z-index: -1;\n+  filter: blur(70px);\n+}\n+\n+body::before {\n+  width: 280px;\n+  height: 280px;\n+  top: 18%;\n+  left: -8%;\n+  background: rgba(104, 214, 255, 0.08);\n+}\n+\n+body::after {\n+  width: 240px;\n+  height: 240px;\n+  right: -4%;\n+  top: 52%;\n+  background: rgba(255, 186, 117, 0.07);\n+}\n+\n+img {\n+  max-width: 100%;\n+  display: block;\n+}\n+\n+a {\n+  color: inherit;\n+  text-decoration: none;\n+}\n+\n+button,\n+input {\n+  font: inherit;\n+}\n+\n+button {\n+  color: inherit;\n+}\n+\n+code {\n+  font-family: \"Space Grotesk\", Consolas, monospace;\n+}\n+\n+.skip-link {\n+  position: absolute;\n+  left: 1rem;\n+  top: -3rem;\n+  padding: 0.75rem 1rem;\n+  background: var(--text);\n+  color: #02050b;\n+  border-radius: 999px;\n+  z-index: 1000;\n+  transition: top 0.2s ease;\n+}\n+\n+.skip-link:focus {\n+  top: 1rem;\n+}\n+\n+.container {\n+  width: min(var(--max-width), calc(100% - 2rem));\n+  margin: 0 auto;\n+}\n+\n+.section {\n+  padding: 5.25rem 0;\n+}\n+\n+.eyebrow {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.5rem;\n+  margin: 0 0 1rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.16em;\n+  font-size: 0.78rem;\n+  font-weight: 700;\n+}\n+\n+.eyebrow::before {\n+  content: \"\";\n+  width: 2.5rem;\n+  height: 1px;\n+  background: linear-gradient(90deg, transparent, var(--accent));\n+}\n+\n+.eyebrow--small {\n+  font-size: 0.72rem;\n+  margin-bottom: 0.75rem;\n+}\n+\n+.section-heading {\n+  max-width: 760px;\n+  margin-bottom: 2.25rem;\n+}\n+\n+.section-heading h2 {\n+  margin: 0 0 1rem;\n+  font-family: \"Space Grotesk\", \"Segoe UI\", sans-serif;\n+  font-size: clamp(2rem, 4vw, 3.35rem);\n+  line-height: 1.05;\n+  letter-spacing: -0.04em;\n+}\n+\n+.section-heading p {\n+  margin: 0;\n+  color: var(--muted);\n+  font-size: 1.02rem;\n+  line-height: 1.7;\n+}\n+\n+.site-header {\n+  position: sticky;\n+  top: 0;\n+  z-index: 100;\n+  backdrop-filter: blur(18px);\n+  background: rgba(5, 9, 16, 0.78);\n+  border-bottom: 1px solid var(--line);\n+}\n+\n+.site-header__inner {\n+  min-height: var(--header-height);\n+  display: flex;\n+  align-items: center;\n+  justify-content: space-between;\n+  gap: 1.5rem;\n+}\n+\n+.brand {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.9rem;\n+  min-width: 0;\n+}\n+\n+.brand__mark {\n+  width: 2.8rem;\n+  height: 2.8rem;\n+  border-radius: 0.9rem;\n+  display: grid;\n+  place-items: center;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-weight: 700;\n+  letter-spacing: -0.05em;\n+  color: #06101a;\n+  background: linear-gradient(135deg, var(--accent), #c0f2ff);\n+  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 12px 28px rgba(104, 214, 255, 0.16);\n+}\n+\n+.brand__text {\n+  display: grid;\n+  gap: 0.16rem;\n+}\n+\n+.brand__text strong {\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1rem;\n+  letter-spacing: -0.04em;\n+}\n+\n+.brand__text span:last-child {\n+  color: var(--muted);\n+  font-size: 0.83rem;\n+}\n+\n+.site-nav {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 1.2rem;\n+}\n+\n+.site-nav a {\n+  color: var(--muted-strong);\n+  font-size: 0.95rem;\n+  transition: color 0.2s ease;\n+}\n+\n+.site-nav a:hover,\n+.site-nav a:focus-visible {\n+  color: var(--text);\n+}\n+\n+.menu-toggle {\n+  display: none;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.04);\n+  padding: 0.65rem 0.95rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+}\n+\n+.hero {\n+  padding-top: 4.5rem;\n+  position: relative;\n+}\n+\n+.hero__grid {\n+  display: grid;\n+  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);\n+  gap: 2rem;\n+  align-items: center;\n+}\n+\n+.hero__content h1 {\n+  margin: 0;\n+  font-family: \"Space Grotesk\", \"Segoe UI\", sans-serif;\n+  font-size: clamp(3rem, 7vw, 5.6rem);\n+  line-height: 0.94;\n+  letter-spacing: -0.06em;\n+  max-width: 10ch;\n+}\n+\n+.hero__lede {\n+  margin: 1.35rem 0 0;\n+  max-width: 640px;\n+  color: var(--muted-strong);\n+  font-size: 1.08rem;\n+  line-height: 1.8;\n+}\n+\n+.hero__actions {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.95rem;\n+  margin-top: 2rem;\n+}\n+\n+.button,\n+.button:visited {\n+  display: inline-flex;\n+  align-items: center;\n+  justify-content: center;\n+  min-height: 3.25rem;\n+  padding: 0.95rem 1.25rem;\n+  border-radius: 999px;\n+  font-weight: 700;\n+  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;\n+}\n+\n+.button {\n+  background: linear-gradient(135deg, var(--accent), #87e8ff);\n+  color: #06101a;\n+  box-shadow: 0 18px 40px rgba(38, 155, 255, 0.22);\n+}\n+\n+.button:hover,\n+.button:focus-visible {\n+  transform: translateY(-2px);\n+  box-shadow: 0 22px 46px rgba(38, 155, 255, 0.28);\n+}\n+\n+.button--ghost {\n+  background: transparent;\n+  color: var(--text);\n+  border: 1px solid var(--line);\n+  box-shadow: none;\n+}\n+\n+.button--ghost:hover,\n+.button--ghost:focus-visible {\n+  border-color: rgba(104, 214, 255, 0.3);\n+  background: rgba(255, 255, 255, 0.03);\n+}\n+\n+.hero__metrics {\n+  margin-top: 2.2rem;\n+  display: grid;\n+  grid-template-columns: repeat(3, minmax(0, 1fr));\n+  gap: 1rem;\n+}\n+\n+.metric-card,\n+.panel {\n+  position: relative;\n+  border: 1px solid var(--line);\n+  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 100%), var(--panel);\n+  border-radius: var(--radius-lg);\n+  box-shadow: var(--shadow);\n+}\n+\n+.metric-card {\n+  padding: 1.25rem;\n+}\n+\n+.metric-card__value {\n+  display: block;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.75rem;\n+  line-height: 1;\n+  color: var(--warm);\n+}\n+\n+.metric-card__label {\n+  display: block;\n+  margin-top: 0.65rem;\n+  color: var(--muted);\n+  line-height: 1.55;\n+  font-size: 0.95rem;\n+}\n+\n+.panel {\n+  padding: 1.35rem;\n+}\n+\n+.panel--hero {\n+  padding: 1.2rem;\n+}\n+\n+.hero__visual {\n+  position: relative;\n+  min-height: 560px;\n+}\n+\n+.hero__visual-meta {\n+  display: grid;\n+  gap: 0.8rem;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  margin-top: 1rem;\n+}\n+\n+.hero__visual-label {\n+  margin: 0 0 0.25rem;\n+  color: var(--muted);\n+  font-size: 0.78rem;\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+}\n+\n+.hero__visual-path {\n+  margin: 0;\n+  color: var(--muted-strong);\n+  line-height: 1.5;\n+}\n+\n+.hero__floating {\n+  position: absolute;\n+  max-width: 220px;\n+  padding: 0.95rem 1rem;\n+  border-radius: 1rem;\n+  border: 1px solid rgba(255, 255, 255, 0.1);\n+  background: rgba(8, 14, 24, 0.88);\n+  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);\n+}\n+\n+.hero__floating span {\n+  color: var(--muted-strong);\n+  font-size: 0.9rem;\n+  line-height: 1.5;\n+}\n+\n+.hero__floating--top {\n+  top: 3.4rem;\n+  right: -0.6rem;\n+}\n+\n+.hero__floating--bottom {\n+  bottom: 2.3rem;\n+  left: -0.9rem;\n+}\n+\n+.about-grid {\n+  display: grid;\n+  grid-template-columns: 1.15fr 0.85fr;\n+  gap: 1.3rem;\n+}\n+\n+.stack {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.feature-card h3,\n+.panel h3 {\n+  margin-top: 0;\n+  margin-bottom: 0.75rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.feature-card p,\n+.panel p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.case-grid,\n+.insight-grid,\n+.reflection-grid {\n+  display: grid;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  gap: 1.15rem;\n+}\n+\n+.case-card {\n+  display: grid;\n+  gap: 1rem;\n+  padding: 1.1rem;\n+}\n+\n+.case-card__header {\n+  display: flex;\n+  justify-content: space-between;\n+  gap: 1rem;\n+  align-items: start;\n+}\n+\n+.case-card__category {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.45rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.74rem;\n+  font-weight: 700;\n+}\n+\n+.case-card__range {\n+  color: var(--warm);\n+  font-weight: 700;\n+  font-size: 0.9rem;\n+}\n+\n+.case-card h3,\n+.detail-heading h3,\n+.interactive-card h3,\n+.site-footer h2,\n+.site-footer h3 {\n+  margin: 0;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.04em;\n+}\n+\n+.case-card p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.65;\n+}\n+\n+.tag-list,\n+.detail-tag-list {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.6rem;\n+  padding: 0;\n+  margin: 0;\n+  list-style: none;\n+}\n+\n+.tag-list li,\n+.detail-tag-list li,\n+.interactive-badge {\n+  display: inline-flex;\n+  align-items: center;\n+  min-height: 2rem;\n+  padding: 0.35rem 0.75rem;\n+  border-radius: 999px;\n+  border: 1px solid rgba(104, 214, 255, 0.14);\n+  background: rgba(104, 214, 255, 0.07);\n+  color: var(--muted-strong);\n+  font-size: 0.85rem;\n+}\n+\n+.case-card__action {\n+  justify-self: start;\n+  border: 0;\n+  background: transparent;\n+  color: var(--text);\n+  padding: 0;\n+  font-weight: 700;\n+  cursor: pointer;\n+}\n+\n+.case-card__action:hover,\n+.case-card__action:focus-visible {\n+  color: var(--accent);\n+}\n+\n+.case-selector {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.75rem;\n+  margin-bottom: 1.5rem;\n+}\n+\n+.selector-button {\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted-strong);\n+  padding: 0.8rem 1rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n+}\n+\n+.selector-button[aria-selected=\"true\"] {\n+  background: rgba(104, 214, 255, 0.12);\n+  color: var(--text);\n+  border-color: rgba(104, 214, 255, 0.28);\n+}\n+\n+.case-detail {\n+  display: grid;\n+  gap: 1.25rem;\n+}\n+\n+.case-detail__panel {\n+  display: grid;\n+  gap: 1.25rem;\n+  padding: 1.25rem;\n+}\n+\n+.detail-top {\n+  display: grid;\n+  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);\n+  gap: 1.25rem;\n+  align-items: start;\n+}\n+\n+.detail-heading p,\n+.detail-subtitle {\n+  margin: 0.75rem 0 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.detail-meta {\n+  display: grid;\n+  grid-template-columns: repeat(3, minmax(0, 1fr));\n+  gap: 0.9rem;\n+  margin-top: 1.1rem;\n+}\n+\n+.detail-meta__card {\n+  padding: 0.95rem;\n+  border-radius: var(--radius-sm);\n+  border: 1px solid var(--line);\n+  background: var(--panel-muted);\n+}\n+\n+.detail-meta__label {\n+  display: block;\n+  margin-bottom: 0.35rem;\n+  color: var(--muted);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.72rem;\n+}\n+\n+.detail-meta__value {\n+  display: block;\n+  color: var(--text);\n+  font-weight: 700;\n+  line-height: 1.45;\n+}\n+\n+.detail-block {\n+  padding: 1.2rem;\n+  border-radius: var(--radius-md);\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.02);\n+}\n+\n+.detail-block__title {\n+  margin: 0 0 0.85rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.2rem;\n+  letter-spacing: -0.03em;\n+}\n+\n+.detail-block p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.prompt-grid,\n+.iteration-grid,\n+.comparison-grid,\n+.tool-grid,\n+.artifact-grid,\n+.contribution-grid,\n+.workflow-grid,\n+.stat-grid {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.prompt-grid,\n+.comparison-grid,\n+.tool-grid,\n+.workflow-grid,\n+.artifact-grid,\n+.contribution-grid,\n+.stat-grid {\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+}\n+\n+.iteration-grid {\n+  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n+}\n+\n+.prompt-card,\n+.iteration-card,\n+.comparison-card,\n+.tool-card,\n+.artifact-card,\n+.contribution-card,\n+.insight-card,\n+.reflection-card,\n+.workflow-card,\n+.stat-card {\n+  padding: 1rem;\n+  border-radius: var(--radius-sm);\n+  border: 1px solid var(--line);\n+  background: var(--panel-muted);\n+}\n+\n+.prompt-card__label,\n+.comparison-card__label,\n+.tool-card__label,\n+.artifact-card__label,\n+.contribution-card__label,\n+.workflow-card__label {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.45rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.72rem;\n+  font-weight: 700;\n+}\n+\n+.prompt-card h4,\n+.iteration-card h4,\n+.comparison-card h4,\n+.tool-card h4,\n+.artifact-card h4,\n+.contribution-card h4,\n+.insight-card h3,\n+.reflection-card h3,\n+.workflow-card h4 {\n+  margin: 0.75rem 0 0.65rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.prompt-card__text {\n+  margin: 0;\n+  padding: 0.9rem;\n+  border-radius: 1rem;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted-strong);\n+  line-height: 1.7;\n+  white-space: pre-wrap;\n+}\n+\n+.prompt-card__note,\n+.iteration-card p,\n+.comparison-card p,\n+.tool-card p,\n+.artifact-card p,\n+.contribution-card p,\n+.insight-card p,\n+.reflection-card p,\n+.workflow-card p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.bullet-list {\n+  margin: 0;\n+  padding-left: 1.25rem;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.bullet-list li + li {\n+  margin-top: 0.55rem;\n+}\n+\n+.interactive-grid {\n+  display: grid;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  gap: 1.15rem;\n+}\n+\n+.interactive-card {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.interactive-card__header {\n+  display: flex;\n+  justify-content: space-between;\n+  gap: 1rem;\n+  align-items: start;\n+}\n+\n+.interactive-card__intro {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.slider-controls {\n+  display: grid;\n+  grid-template-columns: auto 1fr auto;\n+  gap: 0.8rem;\n+  align-items: center;\n+}\n+\n+.icon-button,\n+.toggle-button {\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  padding: 0.75rem 0.95rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;\n+}\n+\n+.icon-button:hover,\n+.icon-button:focus-visible,\n+.toggle-button:hover,\n+.toggle-button:focus-visible {\n+  transform: translateY(-1px);\n+  border-color: rgba(104, 214, 255, 0.25);\n+  background: rgba(104, 214, 255, 0.09);\n+}\n+\n+input[type=\"range\"] {\n+  width: 100%;\n+  accent-color: var(--accent);\n+}\n+\n+.step-indicators {\n+  display: flex;\n+  gap: 0.55rem;\n+  flex-wrap: wrap;\n+}\n+\n+.step-indicator {\n+  min-width: 2.4rem;\n+  padding: 0.35rem 0.55rem;\n+  border-radius: 999px;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted);\n+  text-align: center;\n+  font-size: 0.82rem;\n+}\n+\n+.step-indicator.is-active {\n+  color: var(--text);\n+  border-color: rgba(104, 214, 255, 0.28);\n+  background: rgba(104, 214, 255, 0.12);\n+}\n+\n+.toggle-group {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.75rem;\n+}\n+\n+.toggle-button[aria-selected=\"true\"] {\n+  background: rgba(255, 186, 117, 0.12);\n+  border-color: rgba(255, 186, 117, 0.28);\n+  color: var(--text);\n+}\n+\n+.interactive-copy h4 {\n+  margin: 0 0 0.5rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.interactive-copy p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.interactive-note {\n+  margin-top: 0.7rem;\n+  color: var(--muted-strong);\n+}\n+\n+.insight-card,\n+.reflection-card {\n+  padding: 1.15rem;\n+}\n+\n+.insight-card__type,\n+.reflection-card__type {\n+  display: inline-flex;\n+  min-height: 1.85rem;\n+  padding: 0.3rem 0.7rem;\n+  align-items: center;\n+  border-radius: 999px;\n+  background: var(--warm-soft);\n+  color: var(--warm);\n+  font-size: 0.78rem;\n+  font-weight: 700;\n+  letter-spacing: 0.06em;\n+  text-transform: uppercase;\n+}\n+\n+.process-layout {\n+  display: grid;\n+  gap: 1.15rem;\n+  grid-template-columns: 1.05fr 0.95fr;\n+  margin-top: 1.15rem;\n+}\n+\n+.process-layout--secondary {\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+}\n+\n+.process-panel {\n+  padding: 1.2rem;\n+}\n+\n+.panel-heading {\n+  margin-bottom: 1rem;\n+}\n+\n+.panel-heading h3 {\n+  margin: 0 0 0.55rem;\n+}\n+\n+.panel-heading p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.65;\n+}\n+\n+.stat-card__value {\n+  display: block;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.65rem;\n+  color: var(--accent);\n+}\n+\n+.stat-card__label {\n+  display: block;\n+  margin-top: 0.4rem;\n+  font-weight: 700;\n+}\n+\n+.stat-card__note {\n+  margin-top: 0.45rem;\n+  color: var(--muted);\n+}\n+\n+.workflow-card__number {\n+  width: 2rem;\n+  height: 2rem;\n+  border-radius: 999px;\n+  display: grid;\n+  place-items: center;\n+  background: rgba(104, 214, 255, 0.14);\n+  color: var(--text);\n+  font-weight: 700;\n+}\n+\n+.media-shell {\n+  position: relative;\n+  overflow: hidden;\n+  border-radius: calc(var(--radius-md) - 2px);\n+  border: 1px solid var(--line);\n+  background:\n+    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),\n+    linear-gradient(135deg, rgba(38, 155, 255, 0.08), rgba(255, 186, 117, 0.05)),\n+    #0a111c;\n+  min-height: 220px;\n+  isolation: isolate;\n+}\n+\n+.media-shell::before {\n+  content: \"\";\n+  position: absolute;\n+  inset: 0;\n+  background-image:\n+    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),\n+    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);\n+  background-size: 26px 26px;\n+  opacity: 0.45;\n+  pointer-events: none;\n+}\n+\n+.media-shell img {\n+  width: 100%;\n+  height: 100%;\n+  object-fit: cover;\n+  display: none;\n+}\n+\n+.media-shell.is-loaded img {\n+  display: block;\n+}\n+\n+.media-shell.is-loaded .media-fallback {\n+  display: none;\n+}\n+\n+.media-shell--hero {\n+  min-height: 420px;\n+}\n+\n+.media-shell--wide {\n+  min-height: 300px;\n+}\n+\n+.media-fallback {\n+  position: absolute;\n+  inset: 0;\n+  display: grid;\n+  place-content: center;\n+  gap: 0.8rem;\n+  padding: 1.25rem;\n+  text-align: center;\n+}\n+\n+.media-fallback__eyebrow {\n+  display: inline-flex;\n+  align-self: center;\n+  justify-self: center;\n+  min-height: 1.9rem;\n+  padding: 0.3rem 0.7rem;\n+  align-items: center;\n+  border-radius: 999px;\n+  background: rgba(104, 214, 255, 0.12);\n+  color: var(--accent);\n+  font-size: 0.75rem;\n+  font-weight: 700;\n+  letter-spacing: 0.08em;\n+  text-transform: uppercase;\n+}\n+\n+.media-fallback strong {\n+  max-width: 26ch;\n+  justify-self: center;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.1rem;\n+  line-height: 1.3;\n+}\n+\n+.media-fallback code {\n+  display: inline-block;\n+  justify-self: center;\n+  max-width: min(92%, 32ch);\n+  padding: 0.55rem 0.7rem;\n+  border-radius: 0.8rem;\n+  background: rgba(255, 255, 255, 0.05);\n+  color: var(--muted-strong);\n+  font-size: 0.82rem;\n+  line-height: 1.5;\n+  overflow-wrap: anywhere;\n+}\n+\n+.site-footer {\n+  padding: 2rem 0 3rem;\n+  border-top: 1px solid var(--line);\n+  background: rgba(3, 6, 10, 0.55);\n+}\n+\n+.site-footer__grid {\n+  display: grid;\n+  grid-template-columns: 1.05fr 0.9fr 1fr;\n+  gap: 1.25rem;\n+}\n+\n+.site-footer p,\n+.site-footer li {\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.footer-list {\n+  margin: 0.75rem 0 0;\n+  padding-left: 1.2rem;\n+}\n+\n+.noscript-note {\n+  margin: 1rem;\n+  padding: 1rem 1.25rem;\n+  border-radius: 1rem;\n+  border: 1px solid rgba(255, 186, 117, 0.2);\n+  background: rgba(255, 186, 117, 0.08);\n+  color: var(--muted-strong);\n+}\n+\n+:focus-visible {\n+  outline: 2px solid rgba(104, 214, 255, 0.55);\n+  outline-offset: 3px;\n+}\n+\n+@media (max-width: 1100px) {\n+  .hero__grid,\n+  .about-grid,\n+  .detail-top,\n+  .interactive-grid,\n+  .process-layout,\n+  .process-layout--secondary,\n+  .site-footer__grid {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .hero__visual {\n+    min-height: auto;\n+  }\n+\n+  .hero__floating {\n+    position: relative;\n+    inset: auto;\n+    max-width: none;\n+    margin-top: 1rem;\n+  }\n+\n+  .hero__metrics,\n+  .detail-meta,\n+  .case-grid,\n+  .insight-grid,\n+  .reflection-grid,\n+  .prompt-grid,\n+  .comparison-grid,\n+  .tool-grid,\n+  .workflow-grid,\n+  .artifact-grid,\n+  .contribution-grid,\n+  .stat-grid {\n+    grid-template-columns: repeat(2, minmax(0, 1fr));\n+  }\n+}\n+\n+@media (max-width: 760px) {\n+  .section {\n+    padding: 4.25rem 0;\n+  }\n+\n+  .site-header__inner {\n+    position: relative;\n+  }\n+\n+  .menu-toggle {\n+    display: inline-flex;\n+    align-items: center;\n+    justify-content: center;\n+  }\n+\n+  .site-nav {\n+    position: absolute;\n+    top: calc(100% + 0.75rem);\n+    right: 0;\n+    left: 0;\n+    display: none;\n+    flex-direction: column;\n+    align-items: stretch;\n+    gap: 0.25rem;\n+    padding: 0.9rem;\n+    border-radius: 1.2rem;\n+    border: 1px solid var(--line);\n+    background: rgba(8, 13, 21, 0.96);\n+    box-shadow: var(--shadow);\n+  }\n+\n+  .site-header.is-open .site-nav {\n+    display: flex;\n+  }\n+\n+  .site-nav a {\n+    padding: 0.85rem 1rem;\n+    border-radius: 0.85rem;\n+  }\n+\n+  .site-nav a:hover,\n+  .site-nav a:focus-visible {\n+    background: rgba(255, 255, 255, 0.04);\n+  }\n+\n+  .hero {\n+    padding-top: 3rem;\n+  }\n+\n+  .hero__content h1 {\n+    max-width: none;\n+  }\n+\n+  .hero__metrics,\n+  .case-grid,\n+  .insight-grid,\n+  .reflection-grid,\n+  .prompt-grid,\n+  .comparison-grid,\n+  .tool-grid,\n+  .workflow-grid,\n+  .artifact-grid,\n+  .contribution-grid,\n+  .stat-grid,\n+  .detail-meta {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .slider-controls {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .case-selector {\n+    overflow-x: auto;\n+    padding-bottom: 0.15rem;\n+    flex-wrap: nowrap;\n+  }\n+\n+  .selector-button {\n+    white-space: nowrap;\n+  }\n+}\n+\n+@media (prefers-reduced-motion: reduce) {\n+  html {\n+    scroll-behavior: auto;\n+  }\n+\n+  *,\n+  *::before,\n+  *::after {\n+    animation: none !important;\n+    transition: none !important;\n+  }\n+}\n*** Add File: script.js\n+const caseStudies = [\n+  {\n+    id: \"signal-bloom\",\n+    title: \"Signal Bloom Poster Suite\",\n+    subtitle: \"From atmospheric concept art to a cleaner event-poster identity\",\n+    category: \"Prompt Evolution\",\n+    versionRange: \"v1 to v5\",\n+    summary:\n+      \"Tracks how an AI-generated poster series moved from beautiful but unfocused imagery into a more directed visual system with stronger hierarchy.\",\n+    thumbnail: {\n+      src: \"assets/images/case1/cover-placeholder.jpg\",\n+      alt: \"Signal Bloom case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n+    intent:\n+      \"Editable intent scaffold: explain the original design challenge, desired audience, and what the team wanted the first round of AI images to accomplish. This slot is designed for concise, assignment-ready project framing.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 brief\",\n+        promptText:\n+          \"[Replace with original prompt] Start with the broad first attempt that established subject matter, tone, and visual ambition but left composition and hierarchy loosely defined.\",\n+        note:\n+          \"Why it changed: the early output captured mood but lacked enough control over layout, contrast, and readable focal structure.\",\n+        screenshot: {\n+          src: \"assets/images/case1/prompt-v1-placeholder.jpg\",\n+          alt: \"Signal Bloom prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add more specific instructions for composition, color control, and intended use case, such as poster framing, negative space, or stronger typographic room.\",\n+        note:\n+          \"Why it changed: revision aimed to improve consistency and make the image more usable inside a design layout.\",\n+        screenshot: {\n+          src: \"assets/images/case1/prompt-v2-placeholder.jpg\",\n+          alt: \"Signal Bloom prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case1/v1-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 1 placeholder\",\n+        caption: \"Initial exploration prioritized ambience and light bloom over structure.\",\n+        note:\n+          \"Editable note: mention what surprised the team and what felt promising in the earliest output.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case1/v2-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 2 placeholder\",\n+        caption: \"Prompt revisions tightened the color palette and created a clearer center of focus.\",\n+        note:\n+          \"Editable note: document the impact of adding composition guidance or style references.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case1/v3-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 3 placeholder\",\n+        caption: \"Mid-stage outputs tested stronger contrast and more deliberate silhouette control.\",\n+        note:\n+          \"Editable note: explain whether this version solved one issue while creating another.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case1/v4-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 4 placeholder\",\n+        caption: \"Later versions balanced atmosphere with cleaner read-from-a-distance behavior.\",\n+        note:\n+          \"Editable note: describe what refinements brought the image closer to the final selection.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case1/v5-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 5 placeholder\",\n+        caption: \"Final candidate delivered the strongest blend of visual drama and layout readiness.\",\n+        note:\n+          \"Editable note: use this slot to compare the chosen result against rejected alternatives.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Fast mood exploration\",\n+        rationale:\n+          \"Editable rationale: explain why this tool was useful for generating a wide range of visual atmospheres early in the process.\",\n+        strengths:\n+          \"Produced dramatic lighting and texture quickly, which helped establish an initial creative direction.\",\n+        limitations:\n+          \"Needed additional prompt precision to avoid over-stylized compositions or unusable text regions.\",\n+        image: {\n+          src: \"assets/images/case1/tool-a-placeholder.jpg\",\n+          alt: \"Signal Bloom tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Refinement and variation testing\",\n+        rationale:\n+          \"Editable rationale: use this card to explain where a second tool produced more controllable or more practical results.\",\n+        strengths:\n+          \"Handled composition constraints more predictably when the prompt became more specific.\",\n+        limitations:\n+          \"Sometimes lost the expressive texture that made earlier outputs feel distinctive.\",\n+        image: {\n+          src: \"assets/images/case1/tool-b-placeholder.jpg\",\n+          alt: \"Signal Bloom tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      label: \"Selected final\",\n+      image: {\n+        src: \"assets/images/case1/final-placeholder.jpg\",\n+        alt: \"Signal Bloom final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: summarize why this version best matched the brief, what tradeoffs were accepted, and how it improved on the previous iterations.\"\n+    },\n+    lessonsLearned: [\n+      \"More explicit composition language improved consistency across outputs.\",\n+      \"AI generated mood quickly, but still needed human curation for communication goals.\",\n+      \"Late-stage prompt changes worked best when they solved one targeted issue at a time.\"\n+    ]\n+  },\n+  {\n+    id: \"museum-dreamscape\",\n+    title: \"Museum Dreamscape Key Art\",\n+    subtitle: \"Testing how surreal imagery can still support a coherent exhibit identity\",\n+    category: \"Tool Comparison\",\n+    versionRange: \"v1 to v4\",\n+    summary:\n+      \"Compares multiple tools and prompt phrasings for a museum poster concept that needed to feel imaginative while remaining sophisticated and legible.\",\n+    thumbnail: {\n+      src: \"assets/images/case2/cover-placeholder.jpg\",\n+      alt: \"Museum Dreamscape case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n+    intent:\n+      \"Editable intent scaffold: describe the exhibit or campaign concept, the target mood, and how the team defined success for this visual track.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Begin with a concept prompt focused on spectacle and atmosphere, then note how the first result leaned too broad or too abstract.\",\n+        note:\n+          \"Why it changed: the team needed a more curated result that felt exhibition-ready rather than only visually interesting.\",\n+        screenshot: {\n+          src: \"assets/images/case2/prompt-v1-placeholder.jpg\",\n+          alt: \"Museum Dreamscape prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 tool-specific revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add references to material quality, scale, gallery lighting, and controlled surreal elements to guide the tool toward a more believable scene.\",\n+        note:\n+          \"Why it changed: the prompt shifted from pure idea generation toward more art-directable output.\",\n+        screenshot: {\n+          src: \"assets/images/case2/prompt-v2-placeholder.jpg\",\n+          alt: \"Museum Dreamscape prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case2/v1-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 1 placeholder\",\n+        caption: \"First pass delivered spectacle but lacked curatorial restraint.\",\n+        note:\n+          \"Editable note: mention which qualities were exciting and which felt unusable.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case2/v2-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 2 placeholder\",\n+        caption: \"Tool-specific tuning brought the imagery closer to a believable gallery context.\",\n+        note:\n+          \"Editable note: explain how the environment or composition became more coherent.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case2/v3-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 3 placeholder\",\n+        caption: \"A more selective prompt narrowed the palette and improved visual hierarchy.\",\n+        note:\n+          \"Editable note: describe how the prompt wording tightened the final direction.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case2/v4-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 4 placeholder\",\n+        caption: \"Final candidate delivered the strongest balance of intrigue and clarity.\",\n+        note:\n+          \"Editable note: explain why this version was chosen over visually louder alternatives.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"High-concept exploration\",\n+        rationale:\n+          \"Editable rationale: note how this tool helped push surreal concepts quickly and reveal promising directions.\",\n+        strengths:\n+          \"Strong at atmosphere and conceptual surprise.\",\n+        limitations:\n+          \"Sometimes inconsistent when the team needed repeatable composition control.\",\n+        image: {\n+          src: \"assets/images/case2/tool-a-placeholder.jpg\",\n+          alt: \"Museum Dreamscape tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Controlled refinement\",\n+        rationale:\n+          \"Editable rationale: explain how this tool better supported polish, consistency, or usable design structure.\",\n+        strengths:\n+          \"More stable framing and cleaner subject emphasis.\",\n+        limitations:\n+          \"Less adventurous when the team wanted unexpected visual leaps.\",\n+        image: {\n+          src: \"assets/images/case2/tool-b-placeholder.jpg\",\n+          alt: \"Museum Dreamscape tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      label: \"Selected final\",\n+      image: {\n+        src: \"assets/images/case2/final-placeholder.jpg\",\n+        alt: \"Museum Dreamscape final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: describe why this output best conveyed the intended exhibit identity and what its strongest design qualities were.\"\n+    },\n+    lessonsLearned: [\n+      \"Tool switching was most useful when the team understood exactly what needed improvement.\",\n+      \"Surreal prompts benefited from constraints related to space, lighting, and viewer perspective.\",\n+      \"The strongest result was not the wildest image, but the most communicative one.\"\n+    ]\n+  },\n+  {\n+    id: \"modular-motion\",\n+    title: \"Modular Motion Sneaker Board\",\n+    subtitle: \"An iterative concept board for product storytelling, materials, and motion cues\",\n+    category: \"Style Transfer\",\n+    versionRange: \"v1 to v5\",\n+    summary:\n+      \"Explores how AI-generated product scenes changed as the team adjusted style references, material prompts, and presentation context for a concept sneaker campaign.\",\n+    thumbnail: {\n+      src: \"assets/images/case3/cover-placeholder.jpg\",\n+      alt: \"Modular Motion case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n+    intent:\n+      \"Editable intent scaffold: define the product concept, intended audience, and what kinds of visual cues the team wanted the AI to emphasize.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 material prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Start with a broad product concept prompt that introduces form, material ideas, and mood without over-defining presentation.\",\n+        note:\n+          \"Why it changed: the output needed clearer control over camera angle, surface treatment, and branded context.\",\n+        screenshot: {\n+          src: \"assets/images/case3/prompt-v1-placeholder.jpg\",\n+          alt: \"Modular Motion prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 styling revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add references to editorial photography, material finish, and motion-inspired composition to guide the product rendering direction.\",\n+        note:\n+          \"Why it changed: the team needed the design to read as a concept board rather than a generic product mockup.\",\n+        screenshot: {\n+          src: \"assets/images/case3/prompt-v2-placeholder.jpg\",\n+          alt: \"Modular Motion prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case3/v1-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 1 placeholder\",\n+        caption: \"Initial renders suggested material ideas but lacked a memorable presentation frame.\",\n+        note:\n+          \"Editable note: describe what the first output communicated well and where it felt generic.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case3/v2-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 2 placeholder\",\n+        caption: \"Refined prompts added camera intention and stronger visual rhythm.\",\n+        note:\n+          \"Editable note: note any gains in realism or energy.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case3/v3-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 3 placeholder\",\n+        caption: \"Style references shifted the outcome toward a more editorial and branded look.\",\n+        note:\n+          \"Editable note: compare realism versus concept-art appeal.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case3/v4-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 4 placeholder\",\n+        caption: \"Later versions tested cleaner backgrounds and more useful layout space.\",\n+        note:\n+          \"Editable note: explain why practical layout considerations mattered here.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case3/v5-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 5 placeholder\",\n+        caption: \"Final candidate integrated product clarity, energy, and consistent visual branding.\",\n+        note:\n+          \"Editable note: connect the selected version to the project brief.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Stylized concept generation\",\n+        rationale:\n+          \"Editable rationale: explain which tool created the most visually bold concept shapes or color moods.\",\n+        strengths:\n+          \"Produced expressive silhouettes and bold lighting quickly.\",\n+        limitations:\n+          \"Needed manual filtering because results sometimes drifted away from the product intent.\",\n+        image: {\n+          src: \"assets/images/case3/tool-a-placeholder.jpg\",\n+          alt: \"Modular Motion tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Product-focused refinement\",\n+        rationale:\n+          \"Editable rationale: note how the second tool helped preserve form readability and material definition.\",\n+        strengths:\n+          \"Better at keeping the object central and visually legible.\",\n+        limitations:\n+          \"Sometimes less expressive or less surprising than the first tool.\",\n+        image: {\n+          src: \"assets/images/case3/tool-b-placeholder.jpg\",\n+          alt: \"Modular Motion tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      label: \"Selected final\",\n+      image: {\n+        src: \"assets/images/case3/final-placeholder.jpg\",\n+        alt: \"Modular Motion final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: explain how the chosen version balanced concept appeal, readability, and assignment goals.\"\n+    },\n+    lessonsLearned: [\n+      \"Material language became more reliable once the prompt referenced finish and lighting together.\",\n+      \"AI could generate compelling product scenes, but not always with the brand clarity the project needed.\",\n+      \"Selection improved when the team judged outputs against communication goals instead of novelty alone.\"\n+    ]\n+  },\n+  {\n+    id: \"neon-flora\",\n+    title: \"Neon Flora Album Cover System\",\n+    subtitle: \"Building a repeatable cover style through prompt patterning and selective refinement\",\n+    category: \"Series Development\",\n+    versionRange: \"v1 to v4\",\n+    summary:\n+      \"Documents the evolution of a music-oriented visual identity where the team tested style consistency, subject variation, and the limits of AI as a design collaborator.\",\n+    thumbnail: {\n+      src: \"assets/images/case4/cover-placeholder.jpg\",\n+      alt: \"Neon Flora case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n+    intent:\n+      \"Editable intent scaffold: explain the visual identity goal, what made consistency important, and how the team planned to judge success across multiple covers.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 identity prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Begin with a style-driven prompt that sets color, subject, and mood but keeps the album-series system open ended.\",\n+        note:\n+          \"Why it changed: the first output may have looked promising individually but did not yet behave like part of a coherent set.\",\n+        screenshot: {\n+          src: \"assets/images/case4/prompt-v1-placeholder.jpg\",\n+          alt: \"Neon Flora prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 consistency revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add recurring visual anchors, palette rules, and layout instructions so multiple outputs can feel intentionally related.\",\n+        note:\n+          \"Why it changed: the revision focused on building a system instead of generating one-off images.\",\n+        screenshot: {\n+          src: \"assets/images/case4/prompt-v2-placeholder.jpg\",\n+          alt: \"Neon Flora prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case4/v1-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 1 placeholder\",\n+        caption: \"First pass delivered style but not enough repeatable structure.\",\n+        note:\n+          \"Editable note: document what felt strong in isolation but weak as part of a system.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case4/v2-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 2 placeholder\",\n+        caption: \"Refined prompts introduced a clearer palette and stronger recurring motifs.\",\n+        note:\n+          \"Editable note: explain which prompt rules improved series consistency.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case4/v3-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 3 placeholder\",\n+        caption: \"Later outputs became easier to curate together as a unified collection.\",\n+        note:\n+          \"Editable note: mention how selection logic changed once a system emerged.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case4/v4-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 4 placeholder\",\n+        caption: \"Final candidate offered the best balance of identity, variation, and polish.\",\n+        note:\n+          \"Editable note: describe why this version functioned best within the series.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Visual motif discovery\",\n+        rationale:\n+          \"Editable rationale: explain which tool surfaced the core motifs or unexpected directions worth keeping.\",\n+        strengths:\n+          \"Helpful for discovering strong visual hooks and dramatic color relationships.\",\n+        limitations:\n+          \"Often varied too much between generations to support a coherent multi-image system.\",\n+        image: {\n+          src: \"assets/images/case4/tool-a-placeholder.jpg\",\n+          alt: \"Neon Flora tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Consistency testing\",\n+        rationale:\n+          \"Editable rationale: use this card to describe how the second tool handled repeated structural instructions.\",\n+        strengths:\n+          \"More dependable for maintaining palette, framing, or recurring subject motifs.\",\n+        limitations:\n+          \"Sometimes less visually daring than the exploratory tool.\",\n+        image: {\n+          src: \"assets/images/case4/tool-b-placeholder.jpg\",\n+          alt: \"Neon Flora tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      label: \"Selected final\",\n+      image: {\n+        src: \"assets/images/case4/final-placeholder.jpg\",\n+        alt: \"Neon Flora final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: summarize why this output best captured the intended identity system and where human curation mattered most.\"\n+    },\n+    lessonsLearned: [\n+      \"Consistency is a stronger test of AI design support than a single impressive image.\",\n+      \"Prompt rules became more useful once the team identified repeatable anchors worth preserving.\",\n+      \"AI acted best as a collaborator when the team set clear system-level criteria.\"\n+    ]\n+  }\n+];\n+\n+const analysisInsights = [\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What consistently worked\",\n+    body:\n+      \"Across projects, clearer prompt constraints typically improved composition, palette control, and usability. Replace this sentence with evidence-backed observations drawn from the final image sets and your prompt notes.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What repeatedly failed\",\n+    body:\n+      \"Use this card to summarize recurring weak points such as unstable typography, off-target proportions, inconsistent perspective, or visual drift between generations.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"Prompt patterns that improved results\",\n+    body:\n+      \"Document the phrasing patterns that produced better outcomes, such as specifying camera angle, lighting, texture, layout intent, or audience-facing purpose.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"AI as collaborator vs. AI as tool\",\n+    body:\n+      \"Use this section to compare moments where AI felt generative and surprising versus moments where it behaved more like a drafting utility that still needed strong human direction.\"\n+  }\n+];\n+\n+const processStats = [\n+  {\n+    value: \"4\",\n+    label: \"Case studies scaffolded\",\n+    note: \"Add or remove case studies directly in script.js.\"\n+  },\n+  {\n+    value: \"20+\",\n+    label: \"Iteration slots prepared\",\n+    note: \"Each slot is connected to a placeholder image path.\"\n+  },\n+  {\n+    value: \"2\",\n+    label: \"Interactive process modules\",\n+    note: \"Slider and style switcher are already wired.\"\n+  },\n+  {\n+    value: \"100%\",\n+    label: \"Frontend-only deployment ready\",\n+    note: \"No backend, secrets, or build tooling required.\"\n+  }\n+];\n+\n+const workflowStages = [\n+  {\n+    label: \"Stage 1\",\n+    title: \"Concept framing\",\n+    body:\n+      \"Outline the project goal, visual references, intended audience, and what the team wanted AI to help generate.\"\n+  },\n+  {\n+    label: \"Stage 2\",\n+    title: \"Prompt drafting\",\n+    body:\n+      \"Document initial prompt attempts, tool choice, and the assumptions that shaped the first output round.\"\n+  },\n+  {\n+    label: \"Stage 3\",\n+    title: \"Iteration and comparison\",\n+    body:\n+      \"Track how versions changed, why prompts were revised, and which tools produced more useful results.\"\n+  },\n+  {\n+    label: \"Stage 4\",\n+    title: \"Selection and reflection\",\n+    body:\n+      \"Summarize which outputs were chosen, how the final presentation was curated, and what the team learned from the workflow.\"\n+  }\n+];\n+\n+const toolsUsed = [\n+  {\n+    label: \"Tool placeholder\",\n+    title: \"Primary image generator\",\n+    body:\n+      \"Replace with the actual tool name. Use this card to explain what it was best at, how often it was used, and which case studies depended on it most.\"\n+  },\n+  {\n+    label: \"Tool placeholder\",\n+    title: \"Secondary variation tool\",\n+    body:\n+      \"Replace with the actual tool name. This card can explain where a second system created more controllable, more stylized, or more experimental results.\"\n+  },\n+  {\n+    label: \"Support tool placeholder\",\n+    title: \"Editing or curation support\",\n+    body:\n+      \"Replace with the actual tool name if you used image editing, layout cleanup, or screenshot capture software in the workflow.\"\n+  },\n+  {\n+    label: \"Documentation placeholder\",\n+    title: \"Process capture method\",\n+    body:\n+      \"Use this card to document how screenshots, prompt records, naming conventions, or folder organization were maintained during the project.\"\n+  }\n+];\n+\n+const processArtifacts = [\n+  {\n+    label: \"Prompt evidence set A\",\n+    title: \"Insert prompt screenshots here\",\n+    body:\n+      \"Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+      alt: \"Prompt evidence placeholder A\",\n+      label: \"Insert prompt screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Prompt evidence set B\",\n+    title: \"Insert prompt screenshots here\",\n+    body:\n+      \"Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+      alt: \"Prompt evidence placeholder B\",\n+      label: \"Insert prompt screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Workflow evidence set\",\n+    title: \"Insert workflow or comparison screenshot here\",\n+    body:\n+      \"Recommended path: assets/images/shared/workflow-board-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/workflow-board-placeholder.jpg\",\n+      alt: \"Workflow evidence placeholder\",\n+      label: \"Insert workflow screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Rationale evidence set\",\n+    title: \"Insert tool rationale screenshot here\",\n+    body:\n+      \"Recommended path: assets/images/shared/tool-rationale-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/tool-rationale-placeholder.jpg\",\n+      alt: \"Tool rationale evidence placeholder\",\n+      label: \"Insert tool rationale screenshot here\"\n+    }\n+  }\n+];\n+\n+const contributionCards = [\n+  {\n+    label: \"Editable team role\",\n+    title: \"Research and references\",\n+    body:\n+      \"Add the teammate name, what references they gathered, and how that research influenced prompts or curation choices.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Prompt engineering\",\n+    body:\n+      \"Add the teammate name, which prompts they developed, and which revisions led to better outputs.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Selection and analysis\",\n+    body:\n+      \"Add the teammate name, what evaluation criteria they used, and how they supported final selection decisions.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Website assembly and QA\",\n+    body:\n+      \"Add the teammate name, their role in building the site, and how they handled polish, organization, or final review.\"\n+  }\n+];\n+\n+const reflectionCards = [\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Team vision\",\n+    body:\n+      \"Summarize what the group hoped to demonstrate about AI-assisted creativity, visual experimentation, or iterative design practice.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"AI strengths\",\n+    body:\n+      \"Note where AI accelerated ideation, surfaced unexpected directions, or made it easier to test multiple visual pathways quickly.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"AI weaknesses\",\n+    body:\n+      \"Capture recurring issues such as inconsistency, weak typography, prompt sensitivity, or the need for heavy human judgment.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Vibe coding takeaways\",\n+    body:\n+      \"Use this card to discuss what it felt like to build with fast iteration, improvisation, and AI-assisted exploration inside a team workflow.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Team dynamics\",\n+    body:\n+      \"Describe how roles were shared, where collaboration helped the process, and what the team would improve in a future project.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Closing insight\",\n+    body:\n+      \"Reserve this card for the final takeaway that ties together design, experimentation, limitations, and what the project revealed about AI in creative work.\"\n+  }\n+];\n+\n+const interactiveLab = {\n+  sliderCaseId: \"signal-bloom\",\n+  variations: [\n+    {\n+      id: \"cinematic\",\n+      label: \"Cinematic\",\n+      title: \"Cinematic direction\",\n+      description:\n+        \"Editable variation note: use this version to show how dramatic lighting, lens language, and mood-forward prompting shaped the same base concept.\",\n+      note:\n+        \"Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg\",\n+      media: {\n+        src: \"assets/images/shared/style-cinematic-placeholder.jpg\",\n+        alt: \"Cinematic style variation placeholder\",\n+        label: \"Insert cinematic style variation here\"\n+      }\n+    },\n+    {\n+      id: \"editorial\",\n+      label: \"Editorial\",\n+      title: \"Editorial direction\",\n+      description:\n+        \"Editable variation note: explain how a cleaner, magazine-inspired prompt changed composition, spacing, and design readability.\",\n+      note:\n+        \"Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg\",\n+      media: {\n+        src: \"assets/images/shared/style-editorial-placeholder.jpg\",\n+        alt: \"Editorial style variation placeholder\",\n+        label: \"Insert editorial style variation here\"\n+      }\n+    },\n+    {\n+      id: \"speculative\",\n+      label: \"Speculative\",\n+      title: \"Speculative direction\",\n+      description:\n+        \"Editable variation note: compare what happened when the same subject was pushed toward a more abstract or concept-art-driven outcome.\",\n+      note:\n+        \"Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg\",\n+        media: {\n+          src: \"assets/images/shared/style-speculative-placeholder.jpg\",\n+          alt: \"Speculative style variation placeholder\",\n+          label: \"Insert speculative style variation here\"\n+        }\n+    }\n+  ]\n+};\n+\n+const state = {\n+  activeCaseId: caseStudies[0].id,\n+  sliderIndex: 0,\n+  activeVariationId: interactiveLab.variations[0].id\n+};\n+\n+document.addEventListener(\"DOMContentLoaded\", () => {\n+  setupNavigation();\n+  hydrateMediaShells(document);\n+  renderCaseStudyGrid();\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+  renderAnalysis();\n+  renderProcessStats();\n+  renderWorkflowStages();\n+  renderTools();\n+  renderArtifacts();\n+  renderContributions();\n+  renderReflections();\n+  setupIterationSlider();\n+  setupStyleSwitcher();\n+});\n+\n+function setupNavigation() {\n+  const header = document.querySelector(\".site-header\");\n+  const toggle = document.querySelector(\".menu-toggle\");\n+  const navLinks = document.querySelectorAll(\".site-nav a\");\n+\n+  if (!header || !toggle) {\n+    return;\n+  }\n+\n+  toggle.addEventListener(\"click\", () => {\n+    const expanded = toggle.getAttribute(\"aria-expanded\") === \"true\";\n+    toggle.setAttribute(\"aria-expanded\", String(!expanded));\n+    header.classList.toggle(\"is-open\", !expanded);\n+  });\n+\n+  navLinks.forEach((link) => {\n+    link.addEventListener(\"click\", () => {\n+      toggle.setAttribute(\"aria-expanded\", \"false\");\n+      header.classList.remove(\"is-open\");\n+    });\n+  });\n+}\n+\n+function renderCaseStudyGrid() {\n+  const grid = document.getElementById(\"caseStudyGrid\");\n+\n+  if (!grid) {\n+    return;\n+  }\n+\n+  grid.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <article class=\"panel case-card\">\n+          <div\n+            class=\"media-shell\"\n+            data-src=\"${study.thumbnail.src}\"\n+            data-alt=\"${study.thumbnail.alt}\"\n+            data-label=\"${study.thumbnail.label}\"\n+          ></div>\n+          <div class=\"case-card__header\">\n+            <div>\n+              <span class=\"case-card__category\">${study.category}</span>\n+              <h3>${study.title}</h3>\n+            </div>\n+            <span class=\"case-card__range\">${study.versionRange}</span>\n+          </div>\n+          <p>${study.summary}</p>\n+          <ul class=\"tag-list\">\n+            ${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}\n+          </ul>\n+          <button class=\"case-card__action\" type=\"button\" data-case-open=\"${study.id}\">\n+            Open detailed case study\n+          </button>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(grid);\n+\n+  grid.querySelectorAll(\"[data-case-open]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      const caseId = button.getAttribute(\"data-case-open\");\n+      setActiveCaseStudy(caseId);\n+      document.getElementById(\"case-studies\")?.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n+    });\n+  });\n+}\n+\n+function renderCaseStudySelector() {\n+  const selector = document.getElementById(\"caseStudySelector\");\n+\n+  if (!selector) {\n+    return;\n+  }\n+\n+  selector.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <button\n+          class=\"selector-button\"\n+          type=\"button\"\n+          role=\"tab\"\n+          aria-selected=\"${study.id === state.activeCaseId ? \"true\" : \"false\"}\"\n+          data-case-select=\"${study.id}\"\n+        >\n+          ${study.title}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  selector.querySelectorAll(\"[data-case-select]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      const caseId = button.getAttribute(\"data-case-select\");\n+      setActiveCaseStudy(caseId);\n+    });\n+  });\n+}\n+\n+function setActiveCaseStudy(caseId) {\n+  if (!caseStudies.some((study) => study.id === caseId)) {\n+    return;\n+  }\n+\n+  state.activeCaseId = caseId;\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+}\n+\n+function renderActiveCaseStudy() {\n+  const container = document.getElementById(\"caseStudyDetail\");\n+  const study = getActiveCaseStudy();\n+\n+  if (!container || !study) {\n+    return;\n+  }\n+\n+  container.innerHTML = `\n+    <div class=\"panel case-detail__panel\">\n+      <div class=\"detail-top\">\n+        <div class=\"detail-heading\">\n+          <p class=\"eyebrow eyebrow--small\">Active case study</p>\n+          <h3>${study.title}</h3>\n+          <p class=\"detail-subtitle\">${study.subtitle}</p>\n+          <ul class=\"detail-tag-list\">\n+            ${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}\n+          </ul>\n+          <div class=\"detail-meta\">\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Category</span>\n+              <span class=\"detail-meta__value\">${study.category}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Version range</span>\n+              <span class=\"detail-meta__value\">${study.versionRange}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Focus</span>\n+              <span class=\"detail-meta__value\">${study.summary}</span>\n+            </div>\n+          </div>\n+        </div>\n+\n+        <div\n+          class=\"media-shell media-shell--wide\"\n+          data-src=\"${study.finalSelection.image.src}\"\n+          data-alt=\"${study.finalSelection.image.alt}\"\n+          data-label=\"${study.finalSelection.image.label}\"\n+        ></div>\n+      </div>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Intent</h4>\n+        <p>${study.intent}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Prompt Evolution</h4>\n+        <div class=\"prompt-grid\">\n+          ${study.promptVersions\n+            .map(\n+              (prompt) => `\n+                <article class=\"prompt-card\">\n+                  <span class=\"prompt-card__label\">${prompt.label}</span>\n+                  <h4>Prompt version</h4>\n+                  <p class=\"prompt-card__text\">${prompt.promptText}</p>\n+                  <p class=\"prompt-card__note\">${prompt.note}</p>\n+                  <div\n+                    class=\"media-shell\"\n+                    data-src=\"${prompt.screenshot.src}\"\n+                    data-alt=\"${prompt.screenshot.alt}\"\n+                    data-label=\"${prompt.screenshot.label}\"\n+                  ></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Output Iterations</h4>\n+        <div class=\"iteration-grid\">\n+          ${study.iterationImages\n+            .map(\n+              (image) => `\n+                <article class=\"iteration-card\">\n+                  <span class=\"prompt-card__label\">${image.label}</span>\n+                  <h4>${image.caption}</h4>\n+                  <div\n+                    class=\"media-shell\"\n+                    data-src=\"${image.src}\"\n+                    data-alt=\"${image.alt}\"\n+                    data-label=\"Insert version output here\"\n+                  ></div>\n+                  <p>${image.note}</p>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Tool Comparison</h4>\n+        <div class=\"comparison-grid\">\n+          ${study.toolComparisons\n+            .map(\n+              (tool) => `\n+                <article class=\"comparison-card\">\n+                  <span class=\"comparison-card__label\">${tool.tool}</span>\n+                  <h4>${tool.role}</h4>\n+                  <p>${tool.rationale}</p>\n+                  <p><strong>Strengths:</strong> ${tool.strengths}</p>\n+                  <p><strong>Limitations:</strong> ${tool.limitations}</p>\n+                  <div\n+                    class=\"media-shell\"\n+                    data-src=\"${tool.image.src}\"\n+                    data-alt=\"${tool.image.alt}\"\n+                    data-label=\"${tool.image.label}\"\n+                  ></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Final Selection</h4>\n+        <p>${study.finalSelection.rationale}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Lessons Learned</h4>\n+        <ul class=\"bullet-list\">\n+          ${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join(\"\")}\n+        </ul>\n+      </section>\n+    </div>\n+  `;\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderAnalysis() {\n+  const container = document.getElementById(\"analysisGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = analysisInsights\n+    .map(\n+      (insight) => `\n+        <article class=\"panel insight-card\">\n+          <span class=\"insight-card__type\">${insight.type}</span>\n+          <h3>${insight.title}</h3>\n+          <p>${insight.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderProcessStats() {\n+  const container = document.getElementById(\"processStats\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = processStats\n+    .map(\n+      (stat) => `\n+        <article class=\"stat-card\">\n+          <span class=\"stat-card__value\">${stat.value}</span>\n+          <span class=\"stat-card__label\">${stat.label}</span>\n+          <p class=\"stat-card__note\">${stat.note}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderWorkflowStages() {\n+  const container = document.getElementById(\"workflowGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = workflowStages\n+    .map(\n+      (stage, index) => `\n+        <article class=\"workflow-card\">\n+          <span class=\"workflow-card__label\">${stage.label}</span>\n+          <div class=\"workflow-card__number\">${index + 1}</div>\n+          <h4>${stage.title}</h4>\n+          <p>${stage.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderTools() {\n+  const container = document.getElementById(\"toolGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = toolsUsed\n+    .map(\n+      (tool) => `\n+        <article class=\"tool-card\">\n+          <span class=\"tool-card__label\">${tool.label}</span>\n+          <h4>${tool.title}</h4>\n+          <p>${tool.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderArtifacts() {\n+  const container = document.getElementById(\"artifactGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = processArtifacts\n+    .map(\n+      (artifact) => `\n+        <article class=\"artifact-card\">\n+          <span class=\"artifact-card__label\">${artifact.label}</span>\n+          <h4>${artifact.title}</h4>\n+          <p>${artifact.body}</p>\n+          <div\n+            class=\"media-shell\"\n+            data-src=\"${artifact.media.src}\"\n+            data-alt=\"${artifact.media.alt}\"\n+            data-label=\"${artifact.media.label}\"\n+          ></div>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderContributions() {\n+  const container = document.getElementById(\"contributionGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = contributionCards\n+    .map(\n+      (card) => `\n+        <article class=\"contribution-card\">\n+          <span class=\"contribution-card__label\">${card.label}</span>\n+          <h4>${card.title}</h4>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderReflections() {\n+  const container = document.getElementById(\"reflectionGrid\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = reflectionCards\n+    .map(\n+      (card) => `\n+        <article class=\"panel reflection-card\">\n+          <span class=\"reflection-card__type\">${card.type}</span>\n+          <h3>${card.title}</h3>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupIterationSlider() {\n+  const slider = document.getElementById(\"iterationSlider\");\n+  const prevButton = document.getElementById(\"iterationPrev\");\n+  const nextButton = document.getElementById(\"iterationNext\");\n+  const sliderStudy = getSliderCaseStudy();\n+\n+  if (!slider || !prevButton || !nextButton || !sliderStudy) {\n+    return;\n+  }\n+\n+  slider.max = String(sliderStudy.iterationImages.length - 1);\n+  slider.value = String(state.sliderIndex);\n+\n+  slider.addEventListener(\"input\", () => {\n+    state.sliderIndex = Number(slider.value);\n+    renderIterationSlider();\n+  });\n+\n+  prevButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.max(0, state.sliderIndex - 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  nextButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  renderIterationMarkers(sliderStudy.iterationImages);\n+  renderIterationSlider();\n+}\n+\n+function renderIterationMarkers(frames) {\n+  const container = document.getElementById(\"iterationMarkers\");\n+\n+  if (!container) {\n+    return;\n+  }\n+\n+  container.innerHTML = frames\n+    .map(\n+      (frame, index) => `\n+        <span class=\"step-indicator ${index === state.sliderIndex ? \"is-active\" : \"\"}\">\n+          ${frame.label}\n+        </span>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderIterationSlider() {\n+  const sliderStudy = getSliderCaseStudy();\n+  const currentFrame = sliderStudy?.iterationImages[state.sliderIndex];\n+  const valueBadge = document.getElementById(\"iterationSliderValue\");\n+  const title = document.getElementById(\"iterationCaptionTitle\");\n+  const text = document.getElementById(\"iterationCaptionText\");\n+  const note = document.getElementById(\"iterationCaptionNote\");\n+  const mediaShell = document.getElementById(\"iterationSliderMedia\");\n+\n+  if (!sliderStudy || !currentFrame || !valueBadge || !title || !text || !note || !mediaShell) {\n+    return;\n+  }\n+\n+  valueBadge.textContent = currentFrame.label;\n+  title.textContent = `${sliderStudy.title} ${currentFrame.label}`;\n+  text.textContent = currentFrame.caption;\n+  note.textContent = currentFrame.note;\n+\n+  setMediaShell(mediaShell, {\n+    src: currentFrame.src,\n+    alt: currentFrame.alt,\n+    label: \"Insert version output here\"\n+  });\n+\n+  renderIterationMarkers(sliderStudy.iterationImages);\n+}\n+\n+function setupStyleSwitcher() {\n+  const group = document.getElementById(\"styleToggleGroup\");\n+\n+  if (!group) {\n+    return;\n+  }\n+\n+  group.innerHTML = interactiveLab.variations\n+    .map(\n+      (variation) => `\n+        <button\n+          class=\"toggle-button\"\n+          type=\"button\"\n+          role=\"tab\"\n+          aria-selected=\"${variation.id === state.activeVariationId ? \"true\" : \"false\"}\"\n+          data-variation=\"${variation.id}\"\n+        >\n+          ${variation.label}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  group.querySelectorAll(\"[data-variation]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      state.activeVariationId = button.getAttribute(\"data-variation\");\n+      setupStyleSwitcher();\n+      renderStyleVariation();\n+    });\n+  });\n+\n+  renderStyleVariation();\n+}\n+\n+function renderStyleVariation() {\n+  const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);\n+  const title = document.getElementById(\"styleToggleTitle\");\n+  const description = document.getElementById(\"styleToggleDescription\");\n+  const note = document.getElementById(\"styleToggleNote\");\n+  const mediaShell = document.getElementById(\"styleToggleMedia\");\n+\n+  if (!variation || !title || !description || !note || !mediaShell) {\n+    return;\n+  }\n+\n+  title.textContent = variation.title;\n+  description.textContent = variation.description;\n+  note.textContent = variation.note;\n+\n+  setMediaShell(mediaShell, {\n+    src: variation.media.src,\n+    alt: variation.media.alt,\n+    label: variation.media.label\n+  });\n+}\n+\n+function hydrateMediaShells(root) {\n+  root.querySelectorAll(\".media-shell[data-src]\").forEach((shell) => {\n+    setMediaShell(shell, {\n+      src: shell.dataset.src,\n+      alt: shell.dataset.alt || \"\",\n+      label: shell.dataset.label || \"Insert image here\"\n+    });\n+  });\n+}\n+\n+function setMediaShell(shell, { src, alt, label }) {\n+  if (!shell) {\n+    return;\n+  }\n+\n+  const assetPath = src || \"Add an asset path\";\n+\n+  shell.innerHTML = \"\";\n+  shell.classList.remove(\"is-loaded\");\n+\n+  const image = document.createElement(\"img\");\n+  image.alt = alt || label;\n+  image.loading = \"lazy\";\n+  image.decoding = \"async\";\n+\n+  const fallback = document.createElement(\"div\");\n+  fallback.className = \"media-fallback\";\n+  fallback.innerHTML = `\n+    <span class=\"media-fallback__eyebrow\">Placeholder Asset</span>\n+    <strong>${label}</strong>\n+    <code>${assetPath}</code>\n+  `;\n+\n+  image.addEventListener(\"load\", () => {\n+    shell.classList.add(\"is-loaded\");\n+  });\n+\n+  image.addEventListener(\"error\", () => {\n+    shell.classList.remove(\"is-loaded\");\n+  });\n+\n+  shell.append(image, fallback);\n+\n+  if (src) {\n+    image.src = src;\n+  }\n+}\n+\n+function getActiveCaseStudy() {\n+  return caseStudies.find((study) => study.id === state.activeCaseId);\n+}\n+\n+function getSliderCaseStudy() {\n+  return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);\n+}\n*** Add File: README.md\n+# Prompt to Pixel\n+\n+A submission-ready frontend website for a college team project focused on AI-assisted design, prompt engineering, iteration, and creative process documentation.\n+\n+## Project Overview\n+\n+This project is a polished single-page portfolio website built with plain HTML, CSS, and JavaScript. It is designed to present AI-generated creative work as a process rather than a static gallery. The site emphasizes version history, prompt evolution, tool comparison, final selection logic, and reflection scaffolding.\n+\n+The current codebase is intentionally complete and presentation-ready while still leaving clearly labeled placeholder areas for:\n+\n+- AI-generated images\n+- prompt screenshots\n+- tool comparison screenshots\n+- team member names\n+- final reflection text\n+- final project-specific wording\n+\n+## Features\n+\n+- Responsive single-page layout with anchor navigation\n+- Dark AI-lab visual design with strong typography and polished spacing\n+- Hero section with placeholder hero/logo asset area\n+- About section with editable assignment-aligned copy\n+- Data-driven gallery overview for featured case studies\n+- Detailed case study viewer generated from centralized JavaScript objects\n+- Iteration slider that swaps version visuals and notes dynamically\n+- Style switcher that compares multiple prepared visual directions\n+- Meta analysis section with editable academic/professional scaffold text\n+- Process documentation support with workflow stages, tool rationale, stats, and screenshot placeholders\n+- Reflection support cards for the final team write-up\n+- Graceful missing-image handling so empty asset folders show styled placeholders instead of broken image icons\n+- Ready to zip and submit directly or deploy to GitHub Pages\n+\n+## File Structure\n+\n+```text\n+CSC150-Team-Demo-Website/\n+├── index.html\n+├── styles.css\n+├── script.js\n+├── README.md\n+└── assets/\n+    ├── icons/\n+    └── images/\n+        ├── shared/\n+        ├── case1/\n+        ├── case2/\n+        ├── case3/\n+        ├── case4/\n+        └── case5/\n+```\n+\n+## Setup Instructions\n+\n+1. Download or clone the repository.\n+2. Open `index.html` directly in a browser, or serve the folder with any basic static server if you prefer.\n+3. No install step, package manager, or build command is required.\n+\n+## Customization Guide\n+\n+### Replace placeholder images\n+\n+Put your final exported images into the existing folders inside `assets/images/`.\n+\n+Suggested organization:\n+\n+- `assets/images/shared/` for the logo, hero art, prompt screenshots, and style-switcher assets\n+- `assets/images/case1/` through `assets/images/case4/` for case-study-specific iterations and final outputs\n+\n+The current JavaScript already points to obvious placeholder file names such as:\n+\n+- `assets/images/shared/logo-placeholder.png`\n+- `assets/images/case1/v1-placeholder.jpg`\n+- `assets/images/case2/final-placeholder.jpg`\n+\n+If you keep the same filenames, the site will update automatically as soon as the real images are added. If you use different filenames, update the paths inside `script.js`.\n+\n+### Replace placeholder text\n+\n+Most editable content lives in `script.js`, especially:\n+\n+- case study titles\n+- summaries\n+- prompt versions\n+- iteration notes\n+- tool comparison content\n+- final selection rationale\n+- meta analysis scaffolds\n+- process documentation scaffolds\n+- reflection support cards\n+\n+Static layout copy such as the hero, about section intro, and footer can be edited in `index.html`.\n+\n+### Add or remove case studies\n+\n+Open `script.js` and update the `caseStudies` array.\n+\n+Each case study object includes fields such as:\n+\n+- `id`\n+- `title`\n+- `subtitle`\n+- `category`\n+- `tags`\n+- `intent`\n+- `promptVersions`\n+- `iterationImages`\n+- `toolComparisons`\n+- `finalSelection`\n+- `lessonsLearned`\n+\n+The overview cards and detailed case study viewer will update automatically.\n+\n+## GitHub Pages Deployment\n+\n+This project is ready for static hosting.\n+\n+1. Push the repository to GitHub.\n+2. Open the repository settings.\n+3. Go to `Pages`.\n+4. Under `Build and deployment`, choose `Deploy from a branch`.\n+5. Select the main branch and the root folder.\n+6. Save the settings and wait for GitHub Pages to publish the site.\n+\n+After deployment, update the footer placeholder text in `index.html` with your final live URL.\n+\n+## Important Submission Note\n+\n+This repository does not include actual AI-generated images or real prompt screenshots yet. Those assets must be added manually later by the student team before final submission.\n+\n+The website is built so that missing assets still display as clean placeholder panels, which makes it safe to edit incrementally without breaking the presentation.\n+\n+## Suggested Final Checklist\n+\n+- Replace all placeholder image files with final exported visuals\n+- Replace prompt screenshot placeholders with real evidence captures\n+- Update team names and project title if needed\n+- Finalize case-study-specific prompt and analysis text in `script.js`\n+- Add GitHub repository and live deployment information to the footer\n+- Review the site on desktop and mobile before submission\n*** Add File: assets/icons/.gitkeep\n+\n*** Add File: assets/images/shared/.gitkeep\n+\n*** Add File: assets/images/case1/.gitkeep\n+\n*** Add File: assets/images/case2/.gitkeep\n+\n*** Add File: assets/images/case3/.gitkeep\n+\n*** Add File: assets/images/case4/.gitkeep\n+\n*** Add File: assets/images/case5/.gitkeep\n+\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_EXRKjjFQiLrX8mVvSzYhIQhO</summary>

```text
execution error: Io(Custom { kind: Other, error: "windows sandbox: runner error: CreateProcessAsUserW failed: 206" })
```

</details>

<details>
<summary>Tool call: apply_patch (call_ReFFRhggnwJEPPYZjoAXRnDV)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_ReFFRhggnwJEPPYZjoAXRnDV","name":"apply_patch","input":"*** Begin Patch\n*** Add File: index.html\n+<!DOCTYPE html>\n+<html lang=\"en\">\n+<head>\n+  <meta charset=\"UTF-8\">\n+  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n+  <title>Prompt to Pixel | AI Design Portfolio Showcase</title>\n+  <meta\n+    name=\"description\"\n+    content=\"A submission-ready AI design portfolio website that showcases prompt engineering, iteration, tool comparison, and reflective process documentation.\"\n+  >\n+  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n+  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n+  <link\n+    href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap\"\n+    rel=\"stylesheet\"\n+  >\n+  <link rel=\"stylesheet\" href=\"styles.css\">\n+  <script src=\"script.js\" defer></script>\n+</head>\n+<body>\n+  <a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n+\n+  <header class=\"site-header\" id=\"top\">\n+    <div class=\"container site-header__inner\">\n+      <a class=\"brand\" href=\"#top\" aria-label=\"Prompt to Pixel home\">\n+        <span class=\"brand__mark\">P/P</span>\n+        <span class=\"brand__text\">\n+          <strong>Prompt to Pixel</strong>\n+          <span>AI Design Process Showcase</span>\n+        </span>\n+      </a>\n+\n+      <button\n+        class=\"menu-toggle\"\n+        type=\"button\"\n+        aria-expanded=\"false\"\n+        aria-controls=\"site-nav\"\n+      >\n+        Menu\n+      </button>\n+\n+      <nav class=\"site-nav\" id=\"site-nav\" aria-label=\"Primary navigation\">\n+        <a href=\"#about\">About</a>\n+        <a href=\"#gallery\">Gallery</a>\n+        <a href=\"#case-studies\">Case Studies</a>\n+        <a href=\"#interactive\">Interactive Lab</a>\n+        <a href=\"#analysis\">Meta Analysis</a>\n+        <a href=\"#process\">Process</a>\n+        <a href=\"#reflection\">Reflection</a>\n+      </nav>\n+    </div>\n+  </header>\n+\n+  <main id=\"main-content\">\n+    <section class=\"hero section\">\n+      <div class=\"container hero__grid\">\n+        <div class=\"hero__content\">\n+          <p class=\"eyebrow\">College Team Demo Website</p>\n+          <h1>Present AI-assisted design as a visible, editable creative process.</h1>\n+          <p class=\"hero__lede\">\n+            This portfolio is structured around iteration sequences, prompt refinement,\n+            and tool comparison. It is built to show how ideas evolve from first draft to\n+            final selected result, not just to display finished images.\n+          </p>\n+\n+          <div class=\"hero__actions\">\n+            <a class=\"button\" href=\"#gallery\">Explore Case Studies</a>\n+            <a class=\"button button--ghost\" href=\"#process\">View Process</a>\n+          </div>\n+\n+          <div class=\"hero__metrics\" aria-label=\"Project highlights\">\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">4</span>\n+              <span class=\"metric-card__label\">Featured case studies</span>\n+            </article>\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">20+</span>\n+              <span class=\"metric-card__label\">Iteration placeholders ready for swap-in</span>\n+            </article>\n+            <article class=\"metric-card\">\n+              <span class=\"metric-card__value\">2</span>\n+              <span class=\"metric-card__label\">Interactive process demos</span>\n+            </article>\n+          </div>\n+        </div>\n+\n+        <div class=\"hero__visual\">\n+          <div class=\"panel panel--hero\">\n+            <div\n+              class=\"media-shell media-shell--hero\"\n+              data-src=\"assets/images/shared/logo-placeholder.png\"\n+              data-alt=\"Project logo or hero visual placeholder\"\n+              data-label=\"Insert AI-generated logo or hero visual here\"\n+            ></div>\n+\n+            <div class=\"hero__visual-meta\">\n+              <div>\n+                <p class=\"hero__visual-label\">Recommended asset path</p>\n+                <p class=\"hero__visual-path\">assets/images/shared/logo-placeholder.png</p>\n+              </div>\n+              <div>\n+                <p class=\"hero__visual-label\">Suggested use</p>\n+                <p class=\"hero__visual-path\">Team logo, hero render, or brand mark</p>\n+              </div>\n+            </div>\n+          </div>\n+\n+          <div class=\"hero__floating hero__floating--top\">\n+            <span>Iteration-first storytelling</span>\n+          </div>\n+          <div class=\"hero__floating hero__floating--bottom\">\n+            <span>Prepared for screenshots, prompts, and final reflections</span>\n+          </div>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"about\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">About The Concept</p>\n+          <h2>Why this site is organized around process rather than just outcomes</h2>\n+          <p>\n+            The current copy is intentionally polished but still editable. Replace it with\n+            your team’s final language once the project direction, visual identity, and\n+            evidence set are finalized.\n+          </p>\n+        </div>\n+\n+        <div class=\"about-grid\">\n+          <article class=\"panel\">\n+            <h3>Editable concept summary</h3>\n+            <p>\n+              This website frames AI-assisted design as a sequence of decisions. Each case\n+              study is built to show how a concept was defined, tested, revised, compared\n+              across tools, and ultimately resolved into a chosen visual direction. The\n+              emphasis is on iterative thinking, not on pretending that the first output\n+              was the final answer.\n+            </p>\n+            <p>\n+              Use this block to explain your team’s theme, why AI was part of the workflow,\n+              and what kind of visual or design questions the project set out to explore.\n+            </p>\n+          </article>\n+\n+          <div class=\"stack\">\n+            <article class=\"panel feature-card\">\n+              <h3>Process visibility</h3>\n+              <p>\n+                The structure highlights prompt revisions, version tracking, and reasoning\n+                for each change so the audience can see how the work matured over time.\n+              </p>\n+            </article>\n+            <article class=\"panel feature-card\">\n+              <h3>Assignment alignment</h3>\n+              <p>\n+                Visual design, functionality, process documentation, and reflection support\n+                are all built directly into the site architecture rather than added as an\n+                afterthought.\n+              </p>\n+            </article>\n+            <article class=\"panel feature-card\">\n+              <h3>Easy customization</h3>\n+              <p>\n+                Replace placeholder images, screenshots, and text in clearly labeled asset\n+                paths and JavaScript content objects without rebuilding the layout.\n+              </p>\n+            </article>\n+          </div>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"gallery\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Gallery Overview</p>\n+          <h2>Featured case studies prepared for final content</h2>\n+          <p>\n+            Each card represents one project track. Thumbnails, tags, version ranges, and\n+            summary copy are generated from a centralized JavaScript content model.\n+          </p>\n+        </div>\n+\n+        <div class=\"case-grid\" id=\"caseStudyGrid\" aria-live=\"polite\"></div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"case-studies\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Detailed Case Study Viewer</p>\n+          <h2>Inspect one iteration sequence at a time</h2>\n+          <p>\n+            Select a case study below to swap the detailed view. This section is data-driven\n+            so you can add, remove, or rewrite case studies inside the JavaScript file.\n+          </p>\n+        </div>\n+\n+        <div class=\"case-selector\" id=\"caseStudySelector\" role=\"tablist\" aria-label=\"Case study selector\"></div>\n+        <article class=\"case-detail\" id=\"caseStudyDetail\" aria-live=\"polite\"></article>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"interactive\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Interactive Process Features</p>\n+          <h2>Make the evolution visible through direct interaction</h2>\n+          <p>\n+            These modules are fully functional now using placeholder assets and can be updated\n+            later with final images, prompt screenshots, and refined explanatory notes.\n+          </p>\n+        </div>\n+\n+        <div class=\"interactive-grid\">\n+          <article class=\"panel interactive-card\">\n+            <div class=\"interactive-card__header\">\n+              <div>\n+                <p class=\"eyebrow eyebrow--small\">Feature A</p>\n+                <h3>Iteration slider</h3>\n+              </div>\n+              <span class=\"interactive-badge\" id=\"iterationSliderValue\">v1</span>\n+            </div>\n+\n+            <p class=\"interactive-card__intro\">\n+              Move through sequential versions to compare how the concept changes from early\n+              exploration to a more resolved direction.\n+            </p>\n+\n+            <div class=\"slider-controls\">\n+              <button class=\"icon-button\" id=\"iterationPrev\" type=\"button\" aria-label=\"Previous iteration\">Previous</button>\n+              <input\n+                type=\"range\"\n+                id=\"iterationSlider\"\n+                min=\"0\"\n+                max=\"4\"\n+                step=\"1\"\n+                value=\"0\"\n+                aria-label=\"Iteration version slider\"\n+              >\n+              <button class=\"icon-button\" id=\"iterationNext\" type=\"button\" aria-label=\"Next iteration\">Next</button>\n+            </div>\n+\n+            <div class=\"step-indicators\" id=\"iterationMarkers\" aria-hidden=\"true\"></div>\n+\n+            <div class=\"interactive-media\">\n+              <div class=\"media-shell media-shell--wide\" id=\"iterationSliderMedia\"></div>\n+            </div>\n+\n+            <div class=\"interactive-copy\">\n+              <h4 id=\"iterationCaptionTitle\">Version focus</h4>\n+              <p id=\"iterationCaptionText\"></p>\n+              <p class=\"interactive-note\" id=\"iterationCaptionNote\"></p>\n+            </div>\n+          </article>\n+\n+          <article class=\"panel interactive-card\">\n+            <div class=\"interactive-card__header\">\n+              <div>\n+                <p class=\"eyebrow eyebrow--small\">Feature B</p>\n+                <h3>Style switcher</h3>\n+              </div>\n+              <span class=\"interactive-badge\">Prepared variations</span>\n+            </div>\n+\n+            <p class=\"interactive-card__intro\">\n+              Compare different visual interpretations of the same creative brief to show how\n+              wording, style references, and tool strategy influence the result.\n+            </p>\n+\n+            <div class=\"toggle-group\" id=\"styleToggleGroup\" role=\"tablist\" aria-label=\"Style variations\"></div>\n+\n+            <div class=\"interactive-media\">\n+              <div class=\"media-shell media-shell--wide\" id=\"styleToggleMedia\"></div>\n+            </div>\n+\n+            <div class=\"interactive-copy\">\n+              <h4 id=\"styleToggleTitle\">Variation title</h4>\n+              <p id=\"styleToggleDescription\"></p>\n+              <p class=\"interactive-note\" id=\"styleToggleNote\"></p>\n+            </div>\n+          </article>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"analysis\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Meta Analysis</p>\n+          <h2>Cross-project observations ready for your final synthesis</h2>\n+          <p>\n+            The cards below are written as editable, class-appropriate scaffolds. They help\n+            connect evidence from multiple case studies into broader takeaways about AI in a\n+            creative workflow.\n+          </p>\n+        </div>\n+\n+        <div class=\"insight-grid\" id=\"analysisGrid\"></div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"process\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Process Documentation Support</p>\n+          <h2>Reinforce the evidence that will also appear in your separate process document</h2>\n+          <p>\n+            This section is designed to mirror assignment expectations with visible workflow\n+            stages, tool rationale, iteration counts, contribution areas, and screenshot\n+            placeholders.\n+          </p>\n+        </div>\n+\n+        <div class=\"stat-grid\" id=\"processStats\"></div>\n+\n+        <div class=\"process-layout\">\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Workflow stages</h3>\n+              <p>Use these cards to explain how the team moved from idea framing to final curation.</p>\n+            </div>\n+            <div class=\"workflow-grid\" id=\"workflowGrid\"></div>\n+          </article>\n+\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Tools used</h3>\n+              <p>Document which AI systems were tested and why each one fit a specific task.</p>\n+            </div>\n+            <div class=\"tool-grid\" id=\"toolGrid\"></div>\n+          </article>\n+        </div>\n+\n+        <div class=\"process-layout process-layout--secondary\">\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Prompt screenshot placeholders</h3>\n+              <p>Drop in exported prompt screenshots or cropped evidence images when they are ready.</p>\n+            </div>\n+            <div class=\"artifact-grid\" id=\"artifactGrid\"></div>\n+          </article>\n+\n+          <article class=\"panel process-panel\">\n+            <div class=\"panel-heading\">\n+              <h3>Team contribution placeholders</h3>\n+              <p>Summarize who handled research, prompting, curation, writing, QA, and presentation.</p>\n+            </div>\n+            <div class=\"contribution-grid\" id=\"contributionGrid\"></div>\n+          </article>\n+        </div>\n+      </div>\n+    </section>\n+\n+    <section class=\"section\" id=\"reflection\">\n+      <div class=\"container\">\n+        <div class=\"section-heading\">\n+          <p class=\"eyebrow\">Reflection Support</p>\n+          <h2>Structured prompts for the final team reflection</h2>\n+          <p>\n+            These cards are concise writing guides, not finished reflection paragraphs. Keep,\n+            replace, or expand them as your final team reflection takes shape.\n+          </p>\n+        </div>\n+\n+        <div class=\"reflection-grid\" id=\"reflectionGrid\"></div>\n+      </div>\n+    </section>\n+  </main>\n+\n+  <footer class=\"site-footer\">\n+    <div class=\"container site-footer__grid\">\n+      <div>\n+        <p class=\"eyebrow eyebrow--small\">Project Footer</p>\n+        <h2>Prompt to Pixel</h2>\n+        <p>\n+          Replace this title with your final team or project name if needed. This site is\n+          structured for direct class submission and optional GitHub Pages deployment.\n+        </p>\n+      </div>\n+\n+      <div>\n+        <h3>Submission placeholders</h3>\n+        <ul class=\"footer-list\">\n+          <li>Team name: add member names here</li>\n+          <li>GitHub repo: add final repository URL here</li>\n+          <li>Live deployment: add GitHub Pages URL here</li>\n+        </ul>\n+      </div>\n+\n+      <div>\n+        <h3>Class note</h3>\n+        <p>\n+          Created as a frontend-only creative showcase for a college assignment. Final AI\n+          images, prompt screenshots, and reflection text should be inserted manually before submission.\n+        </p>\n+      </div>\n+    </div>\n+  </footer>\n+\n+  <noscript>\n+    <div class=\"noscript-note\">\n+      JavaScript is required for the case study viewer, iteration slider, and style switcher.\n+      The rest of the page content remains available without it.\n+    </div>\n+  </noscript>\n+</body>\n+</html>\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_ReFFRhggnwJEPPYZjoAXRnDV</summary>

```text
{"output":"Success. Updated the following files:\nA index.html\n","metadata":{"exit_code":0,"duration_seconds":0.2}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_0HoskR6kL8bLL8vfoDIZmQVx)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_0HoskR6kL8bLL8vfoDIZmQVx","name":"apply_patch","input":"*** Begin Patch\n*** Add File: styles.css\n+:root {\n+  --bg: #050910;\n+  --bg-soft: #0a1320;\n+  --panel: rgba(12, 20, 32, 0.86);\n+  --panel-strong: rgba(16, 27, 43, 0.96);\n+  --panel-muted: rgba(15, 21, 33, 0.62);\n+  --text: #edf3ff;\n+  --muted: #9eabc2;\n+  --muted-strong: #c8d4ea;\n+  --line: rgba(160, 181, 214, 0.14);\n+  --accent: #68d6ff;\n+  --accent-strong: #269bff;\n+  --accent-soft: rgba(104, 214, 255, 0.16);\n+  --warm: #ffba75;\n+  --warm-soft: rgba(255, 186, 117, 0.15);\n+  --success: #79f0c3;\n+  --radius-lg: 28px;\n+  --radius-md: 20px;\n+  --radius-sm: 14px;\n+  --shadow: 0 22px 60px rgba(0, 0, 0, 0.34);\n+  --max-width: 1180px;\n+  --header-height: 84px;\n+}\n+\n+*,\n+*::before,\n+*::after {\n+  box-sizing: border-box;\n+}\n+\n+html {\n+  scroll-behavior: smooth;\n+}\n+\n+body {\n+  margin: 0;\n+  font-family: \"Manrope\", \"Segoe UI\", sans-serif;\n+  color: var(--text);\n+  background:\n+    radial-gradient(circle at top left, rgba(38, 155, 255, 0.2), transparent 28%),\n+    radial-gradient(circle at 85% 18%, rgba(255, 186, 117, 0.12), transparent 24%),\n+    linear-gradient(180deg, #07101c 0%, #050910 42%, #04070d 100%);\n+  min-height: 100vh;\n+  overflow-x: hidden;\n+}\n+\n+body::before,\n+body::after {\n+  content: \"\";\n+  position: fixed;\n+  inset: auto;\n+  pointer-events: none;\n+  z-index: -1;\n+  filter: blur(70px);\n+}\n+\n+body::before {\n+  width: 280px;\n+  height: 280px;\n+  top: 18%;\n+  left: -8%;\n+  background: rgba(104, 214, 255, 0.08);\n+}\n+\n+body::after {\n+  width: 240px;\n+  height: 240px;\n+  right: -4%;\n+  top: 52%;\n+  background: rgba(255, 186, 117, 0.07);\n+}\n+\n+img {\n+  max-width: 100%;\n+  display: block;\n+}\n+\n+a {\n+  color: inherit;\n+  text-decoration: none;\n+}\n+\n+button,\n+input {\n+  font: inherit;\n+}\n+\n+button {\n+  color: inherit;\n+}\n+\n+code {\n+  font-family: \"Space Grotesk\", Consolas, monospace;\n+}\n+\n+.skip-link {\n+  position: absolute;\n+  left: 1rem;\n+  top: -3rem;\n+  padding: 0.75rem 1rem;\n+  background: var(--text);\n+  color: #02050b;\n+  border-radius: 999px;\n+  z-index: 1000;\n+  transition: top 0.2s ease;\n+}\n+\n+.skip-link:focus {\n+  top: 1rem;\n+}\n+\n+.container {\n+  width: min(var(--max-width), calc(100% - 2rem));\n+  margin: 0 auto;\n+}\n+\n+.section {\n+  padding: 5.25rem 0;\n+}\n+\n+.eyebrow {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.5rem;\n+  margin: 0 0 1rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.16em;\n+  font-size: 0.78rem;\n+  font-weight: 700;\n+}\n+\n+.eyebrow::before {\n+  content: \"\";\n+  width: 2.5rem;\n+  height: 1px;\n+  background: linear-gradient(90deg, transparent, var(--accent));\n+}\n+\n+.eyebrow--small {\n+  font-size: 0.72rem;\n+  margin-bottom: 0.75rem;\n+}\n+\n+.section-heading {\n+  max-width: 760px;\n+  margin-bottom: 2.25rem;\n+}\n+\n+.section-heading h2 {\n+  margin: 0 0 1rem;\n+  font-family: \"Space Grotesk\", \"Segoe UI\", sans-serif;\n+  font-size: clamp(2rem, 4vw, 3.35rem);\n+  line-height: 1.05;\n+  letter-spacing: -0.04em;\n+}\n+\n+.section-heading p {\n+  margin: 0;\n+  color: var(--muted);\n+  font-size: 1.02rem;\n+  line-height: 1.7;\n+}\n+\n+.site-header {\n+  position: sticky;\n+  top: 0;\n+  z-index: 100;\n+  backdrop-filter: blur(18px);\n+  background: rgba(5, 9, 16, 0.78);\n+  border-bottom: 1px solid var(--line);\n+}\n+\n+.site-header__inner {\n+  min-height: var(--header-height);\n+  display: flex;\n+  align-items: center;\n+  justify-content: space-between;\n+  gap: 1.5rem;\n+}\n+\n+.brand {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.9rem;\n+  min-width: 0;\n+}\n+\n+.brand__mark {\n+  width: 2.8rem;\n+  height: 2.8rem;\n+  border-radius: 0.9rem;\n+  display: grid;\n+  place-items: center;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-weight: 700;\n+  letter-spacing: -0.05em;\n+  color: #06101a;\n+  background: linear-gradient(135deg, var(--accent), #c0f2ff);\n+  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 12px 28px rgba(104, 214, 255, 0.16);\n+}\n+\n+.brand__text {\n+  display: grid;\n+  gap: 0.16rem;\n+}\n+\n+.brand__text strong {\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1rem;\n+  letter-spacing: -0.04em;\n+}\n+\n+.brand__text span:last-child {\n+  color: var(--muted);\n+  font-size: 0.83rem;\n+}\n+\n+.site-nav {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 1.2rem;\n+}\n+\n+.site-nav a {\n+  color: var(--muted-strong);\n+  font-size: 0.95rem;\n+  transition: color 0.2s ease;\n+}\n+\n+.site-nav a:hover,\n+.site-nav a:focus-visible {\n+  color: var(--text);\n+}\n+\n+.menu-toggle {\n+  display: none;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.04);\n+  padding: 0.65rem 0.95rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+}\n+\n+.hero {\n+  padding-top: 4.5rem;\n+  position: relative;\n+}\n+\n+.hero__grid {\n+  display: grid;\n+  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);\n+  gap: 2rem;\n+  align-items: center;\n+}\n+\n+.hero__content h1 {\n+  margin: 0;\n+  font-family: \"Space Grotesk\", \"Segoe UI\", sans-serif;\n+  font-size: clamp(3rem, 7vw, 5.6rem);\n+  line-height: 0.94;\n+  letter-spacing: -0.06em;\n+  max-width: 10ch;\n+}\n+\n+.hero__lede {\n+  margin: 1.35rem 0 0;\n+  max-width: 640px;\n+  color: var(--muted-strong);\n+  font-size: 1.08rem;\n+  line-height: 1.8;\n+}\n+\n+.hero__actions {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.95rem;\n+  margin-top: 2rem;\n+}\n+\n+.button,\n+.button:visited {\n+  display: inline-flex;\n+  align-items: center;\n+  justify-content: center;\n+  min-height: 3.25rem;\n+  padding: 0.95rem 1.25rem;\n+  border-radius: 999px;\n+  font-weight: 700;\n+  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;\n+}\n+\n+.button {\n+  background: linear-gradient(135deg, var(--accent), #87e8ff);\n+  color: #06101a;\n+  box-shadow: 0 18px 40px rgba(38, 155, 255, 0.22);\n+}\n+\n+.button:hover,\n+.button:focus-visible {\n+  transform: translateY(-2px);\n+  box-shadow: 0 22px 46px rgba(38, 155, 255, 0.28);\n+}\n+\n+.button--ghost {\n+  background: transparent;\n+  color: var(--text);\n+  border: 1px solid var(--line);\n+  box-shadow: none;\n+}\n+\n+.button--ghost:hover,\n+.button--ghost:focus-visible {\n+  border-color: rgba(104, 214, 255, 0.3);\n+  background: rgba(255, 255, 255, 0.03);\n+}\n+\n+.hero__metrics {\n+  margin-top: 2.2rem;\n+  display: grid;\n+  grid-template-columns: repeat(3, minmax(0, 1fr));\n+  gap: 1rem;\n+}\n+\n+.metric-card,\n+.panel {\n+  position: relative;\n+  border: 1px solid var(--line);\n+  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 100%), var(--panel);\n+  border-radius: var(--radius-lg);\n+  box-shadow: var(--shadow);\n+}\n+\n+.metric-card {\n+  padding: 1.25rem;\n+}\n+\n+.metric-card__value {\n+  display: block;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.75rem;\n+  line-height: 1;\n+  color: var(--warm);\n+}\n+\n+.metric-card__label {\n+  display: block;\n+  margin-top: 0.65rem;\n+  color: var(--muted);\n+  line-height: 1.55;\n+  font-size: 0.95rem;\n+}\n+\n+.panel {\n+  padding: 1.35rem;\n+}\n+\n+.panel--hero {\n+  padding: 1.2rem;\n+}\n+\n+.hero__visual {\n+  position: relative;\n+  min-height: 560px;\n+}\n+\n+.hero__visual-meta {\n+  display: grid;\n+  gap: 0.8rem;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  margin-top: 1rem;\n+}\n+\n+.hero__visual-label {\n+  margin: 0 0 0.25rem;\n+  color: var(--muted);\n+  font-size: 0.78rem;\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+}\n+\n+.hero__visual-path {\n+  margin: 0;\n+  color: var(--muted-strong);\n+  line-height: 1.5;\n+}\n+\n+.hero__floating {\n+  position: absolute;\n+  max-width: 220px;\n+  padding: 0.95rem 1rem;\n+  border-radius: 1rem;\n+  border: 1px solid rgba(255, 255, 255, 0.1);\n+  background: rgba(8, 14, 24, 0.88);\n+  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);\n+}\n+\n+.hero__floating span {\n+  color: var(--muted-strong);\n+  font-size: 0.9rem;\n+  line-height: 1.5;\n+}\n+\n+.hero__floating--top {\n+  top: 3.4rem;\n+  right: -0.6rem;\n+}\n+\n+.hero__floating--bottom {\n+  bottom: 2.3rem;\n+  left: -0.9rem;\n+}\n+\n+.about-grid {\n+  display: grid;\n+  grid-template-columns: 1.15fr 0.85fr;\n+  gap: 1.3rem;\n+}\n+\n+.stack {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.feature-card h3,\n+.panel h3 {\n+  margin-top: 0;\n+  margin-bottom: 0.75rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.feature-card p,\n+.panel p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.case-grid,\n+.insight-grid,\n+.reflection-grid {\n+  display: grid;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  gap: 1.15rem;\n+}\n+\n+.case-card {\n+  display: grid;\n+  gap: 1rem;\n+  padding: 1.1rem;\n+}\n+\n+.case-card__header {\n+  display: flex;\n+  justify-content: space-between;\n+  gap: 1rem;\n+  align-items: start;\n+}\n+\n+.case-card__category {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.45rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.74rem;\n+  font-weight: 700;\n+}\n+\n+.case-card__range {\n+  color: var(--warm);\n+  font-weight: 700;\n+  font-size: 0.9rem;\n+}\n+\n+.case-card h3,\n+.detail-heading h3,\n+.interactive-card h3,\n+.site-footer h2,\n+.site-footer h3 {\n+  margin: 0;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.04em;\n+}\n+\n+.case-card p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.65;\n+}\n+\n+.tag-list,\n+.detail-tag-list {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.6rem;\n+  padding: 0;\n+  margin: 0;\n+  list-style: none;\n+}\n+\n+.tag-list li,\n+.detail-tag-list li,\n+.interactive-badge {\n+  display: inline-flex;\n+  align-items: center;\n+  min-height: 2rem;\n+  padding: 0.35rem 0.75rem;\n+  border-radius: 999px;\n+  border: 1px solid rgba(104, 214, 255, 0.14);\n+  background: rgba(104, 214, 255, 0.07);\n+  color: var(--muted-strong);\n+  font-size: 0.85rem;\n+}\n+\n+.case-card__action {\n+  justify-self: start;\n+  border: 0;\n+  background: transparent;\n+  color: var(--text);\n+  padding: 0;\n+  font-weight: 700;\n+  cursor: pointer;\n+}\n+\n+.case-card__action:hover,\n+.case-card__action:focus-visible {\n+  color: var(--accent);\n+}\n+\n+.case-selector {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.75rem;\n+  margin-bottom: 1.5rem;\n+}\n+\n+.selector-button {\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted-strong);\n+  padding: 0.8rem 1rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n+}\n+\n+.selector-button[aria-selected=\"true\"] {\n+  background: rgba(104, 214, 255, 0.12);\n+  color: var(--text);\n+  border-color: rgba(104, 214, 255, 0.28);\n+}\n+\n+.case-detail {\n+  display: grid;\n+  gap: 1.25rem;\n+}\n+\n+.case-detail__panel {\n+  display: grid;\n+  gap: 1.25rem;\n+  padding: 1.25rem;\n+}\n+\n+.detail-top {\n+  display: grid;\n+  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);\n+  gap: 1.25rem;\n+  align-items: start;\n+}\n+\n+.detail-heading p,\n+.detail-subtitle {\n+  margin: 0.75rem 0 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.detail-meta {\n+  display: grid;\n+  grid-template-columns: repeat(3, minmax(0, 1fr));\n+  gap: 0.9rem;\n+  margin-top: 1.1rem;\n+}\n+\n+.detail-meta__card {\n+  padding: 0.95rem;\n+  border-radius: var(--radius-sm);\n+  border: 1px solid var(--line);\n+  background: var(--panel-muted);\n+}\n+\n+.detail-meta__label {\n+  display: block;\n+  margin-bottom: 0.35rem;\n+  color: var(--muted);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.72rem;\n+}\n+\n+.detail-meta__value {\n+  display: block;\n+  color: var(--text);\n+  font-weight: 700;\n+  line-height: 1.45;\n+}\n+\n+.detail-block {\n+  padding: 1.2rem;\n+  border-radius: var(--radius-md);\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.02);\n+}\n+\n+.detail-block__title {\n+  margin: 0 0 0.85rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.2rem;\n+  letter-spacing: -0.03em;\n+}\n+\n+.detail-block p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.prompt-grid,\n+.iteration-grid,\n+.comparison-grid,\n+.tool-grid,\n+.artifact-grid,\n+.contribution-grid,\n+.workflow-grid,\n+.stat-grid {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.prompt-grid,\n+.comparison-grid,\n+.tool-grid,\n+.workflow-grid,\n+.artifact-grid,\n+.contribution-grid,\n+.stat-grid {\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+}\n+\n+.iteration-grid {\n+  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n+}\n+\n+.prompt-card,\n+.iteration-card,\n+.comparison-card,\n+.tool-card,\n+.artifact-card,\n+.contribution-card,\n+.insight-card,\n+.reflection-card,\n+.workflow-card,\n+.stat-card {\n+  padding: 1rem;\n+  border-radius: var(--radius-sm);\n+  border: 1px solid var(--line);\n+  background: var(--panel-muted);\n+}\n+\n+.prompt-card__label,\n+.comparison-card__label,\n+.tool-card__label,\n+.artifact-card__label,\n+.contribution-card__label,\n+.workflow-card__label {\n+  display: inline-flex;\n+  align-items: center;\n+  gap: 0.45rem;\n+  color: var(--accent);\n+  text-transform: uppercase;\n+  letter-spacing: 0.12em;\n+  font-size: 0.72rem;\n+  font-weight: 700;\n+}\n+\n+.prompt-card h4,\n+.iteration-card h4,\n+.comparison-card h4,\n+.tool-card h4,\n+.artifact-card h4,\n+.contribution-card h4,\n+.insight-card h3,\n+.reflection-card h3,\n+.workflow-card h4 {\n+  margin: 0.75rem 0 0.65rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.prompt-card__text {\n+  margin: 0;\n+  padding: 0.9rem;\n+  border-radius: 1rem;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted-strong);\n+  line-height: 1.7;\n+  white-space: pre-wrap;\n+}\n+\n+.prompt-card__note,\n+.iteration-card p,\n+.comparison-card p,\n+.tool-card p,\n+.artifact-card p,\n+.contribution-card p,\n+.insight-card p,\n+.reflection-card p,\n+.workflow-card p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.bullet-list {\n+  margin: 0;\n+  padding-left: 1.25rem;\n+  color: var(--muted);\n+  line-height: 1.75;\n+}\n+\n+.bullet-list li + li {\n+  margin-top: 0.55rem;\n+}\n+\n+.interactive-grid {\n+  display: grid;\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+  gap: 1.15rem;\n+}\n+\n+.interactive-card {\n+  display: grid;\n+  gap: 1rem;\n+}\n+\n+.interactive-card__header {\n+  display: flex;\n+  justify-content: space-between;\n+  gap: 1rem;\n+  align-items: start;\n+}\n+\n+.interactive-card__intro {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.slider-controls {\n+  display: grid;\n+  grid-template-columns: auto 1fr auto;\n+  gap: 0.8rem;\n+  align-items: center;\n+}\n+\n+.icon-button,\n+.toggle-button {\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  padding: 0.75rem 0.95rem;\n+  border-radius: 999px;\n+  cursor: pointer;\n+  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;\n+}\n+\n+.icon-button:hover,\n+.icon-button:focus-visible,\n+.toggle-button:hover,\n+.toggle-button:focus-visible {\n+  transform: translateY(-1px);\n+  border-color: rgba(104, 214, 255, 0.25);\n+  background: rgba(104, 214, 255, 0.09);\n+}\n+\n+input[type=\"range\"] {\n+  width: 100%;\n+  accent-color: var(--accent);\n+}\n+\n+.step-indicators {\n+  display: flex;\n+  gap: 0.55rem;\n+  flex-wrap: wrap;\n+}\n+\n+.step-indicator {\n+  min-width: 2.4rem;\n+  padding: 0.35rem 0.55rem;\n+  border-radius: 999px;\n+  border: 1px solid var(--line);\n+  background: rgba(255, 255, 255, 0.03);\n+  color: var(--muted);\n+  text-align: center;\n+  font-size: 0.82rem;\n+}\n+\n+.step-indicator.is-active {\n+  color: var(--text);\n+  border-color: rgba(104, 214, 255, 0.28);\n+  background: rgba(104, 214, 255, 0.12);\n+}\n+\n+.toggle-group {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 0.75rem;\n+}\n+\n+.toggle-button[aria-selected=\"true\"] {\n+  background: rgba(255, 186, 117, 0.12);\n+  border-color: rgba(255, 186, 117, 0.28);\n+  color: var(--text);\n+}\n+\n+.interactive-copy h4 {\n+  margin: 0 0 0.5rem;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  letter-spacing: -0.03em;\n+}\n+\n+.interactive-copy p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.interactive-note {\n+  margin-top: 0.7rem;\n+  color: var(--muted-strong);\n+}\n+\n+.insight-card,\n+.reflection-card {\n+  padding: 1.15rem;\n+}\n+\n+.insight-card__type,\n+.reflection-card__type {\n+  display: inline-flex;\n+  min-height: 1.85rem;\n+  padding: 0.3rem 0.7rem;\n+  align-items: center;\n+  border-radius: 999px;\n+  background: var(--warm-soft);\n+  color: var(--warm);\n+  font-size: 0.78rem;\n+  font-weight: 700;\n+  letter-spacing: 0.06em;\n+  text-transform: uppercase;\n+}\n+\n+.process-layout {\n+  display: grid;\n+  gap: 1.15rem;\n+  grid-template-columns: 1.05fr 0.95fr;\n+  margin-top: 1.15rem;\n+}\n+\n+.process-layout--secondary {\n+  grid-template-columns: repeat(2, minmax(0, 1fr));\n+}\n+\n+.process-panel {\n+  padding: 1.2rem;\n+}\n+\n+.panel-heading {\n+  margin-bottom: 1rem;\n+}\n+\n+.panel-heading h3 {\n+  margin: 0 0 0.55rem;\n+}\n+\n+.panel-heading p {\n+  margin: 0;\n+  color: var(--muted);\n+  line-height: 1.65;\n+}\n+\n+.stat-card__value {\n+  display: block;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.65rem;\n+  color: var(--accent);\n+}\n+\n+.stat-card__label {\n+  display: block;\n+  margin-top: 0.4rem;\n+  font-weight: 700;\n+}\n+\n+.stat-card__note {\n+  margin-top: 0.45rem;\n+  color: var(--muted);\n+}\n+\n+.workflow-card__number {\n+  width: 2rem;\n+  height: 2rem;\n+  border-radius: 999px;\n+  display: grid;\n+  place-items: center;\n+  background: rgba(104, 214, 255, 0.14);\n+  color: var(--text);\n+  font-weight: 700;\n+}\n+\n+.media-shell {\n+  position: relative;\n+  overflow: hidden;\n+  border-radius: calc(var(--radius-md) - 2px);\n+  border: 1px solid var(--line);\n+  background:\n+    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),\n+    linear-gradient(135deg, rgba(38, 155, 255, 0.08), rgba(255, 186, 117, 0.05)),\n+    #0a111c;\n+  min-height: 220px;\n+  isolation: isolate;\n+}\n+\n+.media-shell::before {\n+  content: \"\";\n+  position: absolute;\n+  inset: 0;\n+  background-image:\n+    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),\n+    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);\n+  background-size: 26px 26px;\n+  opacity: 0.45;\n+  pointer-events: none;\n+}\n+\n+.media-shell img {\n+  width: 100%;\n+  height: 100%;\n+  object-fit: cover;\n+  display: none;\n+}\n+\n+.media-shell.is-loaded img {\n+  display: block;\n+}\n+\n+.media-shell.is-loaded .media-fallback {\n+  display: none;\n+}\n+\n+.media-shell--hero {\n+  min-height: 420px;\n+}\n+\n+.media-shell--wide {\n+  min-height: 300px;\n+}\n+\n+.media-fallback {\n+  position: absolute;\n+  inset: 0;\n+  display: grid;\n+  place-content: center;\n+  gap: 0.8rem;\n+  padding: 1.25rem;\n+  text-align: center;\n+}\n+\n+.media-fallback__eyebrow {\n+  display: inline-flex;\n+  align-self: center;\n+  justify-self: center;\n+  min-height: 1.9rem;\n+  padding: 0.3rem 0.7rem;\n+  align-items: center;\n+  border-radius: 999px;\n+  background: rgba(104, 214, 255, 0.12);\n+  color: var(--accent);\n+  font-size: 0.75rem;\n+  font-weight: 700;\n+  letter-spacing: 0.08em;\n+  text-transform: uppercase;\n+}\n+\n+.media-fallback strong {\n+  max-width: 26ch;\n+  justify-self: center;\n+  font-family: \"Space Grotesk\", sans-serif;\n+  font-size: 1.1rem;\n+  line-height: 1.3;\n+}\n+\n+.media-fallback code {\n+  display: inline-block;\n+  justify-self: center;\n+  max-width: min(92%, 32ch);\n+  padding: 0.55rem 0.7rem;\n+  border-radius: 0.8rem;\n+  background: rgba(255, 255, 255, 0.05);\n+  color: var(--muted-strong);\n+  font-size: 0.82rem;\n+  line-height: 1.5;\n+  overflow-wrap: anywhere;\n+}\n+\n+.site-footer {\n+  padding: 2rem 0 3rem;\n+  border-top: 1px solid var(--line);\n+  background: rgba(3, 6, 10, 0.55);\n+}\n+\n+.site-footer__grid {\n+  display: grid;\n+  grid-template-columns: 1.05fr 0.9fr 1fr;\n+  gap: 1.25rem;\n+}\n+\n+.site-footer p,\n+.site-footer li {\n+  color: var(--muted);\n+  line-height: 1.7;\n+}\n+\n+.footer-list {\n+  margin: 0.75rem 0 0;\n+  padding-left: 1.2rem;\n+}\n+\n+.noscript-note {\n+  margin: 1rem;\n+  padding: 1rem 1.25rem;\n+  border-radius: 1rem;\n+  border: 1px solid rgba(255, 186, 117, 0.2);\n+  background: rgba(255, 186, 117, 0.08);\n+  color: var(--muted-strong);\n+}\n+\n+:focus-visible {\n+  outline: 2px solid rgba(104, 214, 255, 0.55);\n+  outline-offset: 3px;\n+}\n+\n+@media (max-width: 1100px) {\n+  .hero__grid,\n+  .about-grid,\n+  .detail-top,\n+  .interactive-grid,\n+  .process-layout,\n+  .process-layout--secondary,\n+  .site-footer__grid {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .hero__visual {\n+    min-height: auto;\n+  }\n+\n+  .hero__floating {\n+    position: relative;\n+    inset: auto;\n+    max-width: none;\n+    margin-top: 1rem;\n+  }\n+\n+  .hero__metrics,\n+  .detail-meta,\n+  .case-grid,\n+  .insight-grid,\n+  .reflection-grid,\n+  .prompt-grid,\n+  .comparison-grid,\n+  .tool-grid,\n+  .workflow-grid,\n+  .artifact-grid,\n+  .contribution-grid,\n+  .stat-grid {\n+    grid-template-columns: repeat(2, minmax(0, 1fr));\n+  }\n+}\n+\n+@media (max-width: 760px) {\n+  .section {\n+    padding: 4.25rem 0;\n+  }\n+\n+  .site-header__inner {\n+    position: relative;\n+  }\n+\n+  .menu-toggle {\n+    display: inline-flex;\n+    align-items: center;\n+    justify-content: center;\n+  }\n+\n+  .site-nav {\n+    position: absolute;\n+    top: calc(100% + 0.75rem);\n+    right: 0;\n+    left: 0;\n+    display: none;\n+    flex-direction: column;\n+    align-items: stretch;\n+    gap: 0.25rem;\n+    padding: 0.9rem;\n+    border-radius: 1.2rem;\n+    border: 1px solid var(--line);\n+    background: rgba(8, 13, 21, 0.96);\n+    box-shadow: var(--shadow);\n+  }\n+\n+  .site-header.is-open .site-nav {\n+    display: flex;\n+  }\n+\n+  .site-nav a {\n+    padding: 0.85rem 1rem;\n+    border-radius: 0.85rem;\n+  }\n+\n+  .site-nav a:hover,\n+  .site-nav a:focus-visible {\n+    background: rgba(255, 255, 255, 0.04);\n+  }\n+\n+  .hero {\n+    padding-top: 3rem;\n+  }\n+\n+  .hero__content h1 {\n+    max-width: none;\n+  }\n+\n+  .hero__metrics,\n+  .case-grid,\n+  .insight-grid,\n+  .reflection-grid,\n+  .prompt-grid,\n+  .comparison-grid,\n+  .tool-grid,\n+  .workflow-grid,\n+  .artifact-grid,\n+  .contribution-grid,\n+  .stat-grid,\n+  .detail-meta {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .slider-controls {\n+    grid-template-columns: 1fr;\n+  }\n+\n+  .case-selector {\n+    overflow-x: auto;\n+    padding-bottom: 0.15rem;\n+    flex-wrap: nowrap;\n+  }\n+\n+  .selector-button {\n+    white-space: nowrap;\n+  }\n+}\n+\n+@media (prefers-reduced-motion: reduce) {\n+  html {\n+    scroll-behavior: auto;\n+  }\n+\n+  *,\n+  *::before,\n+  *::after {\n+    animation: none !important;\n+    transition: none !important;\n+  }\n+}\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_0HoskR6kL8bLL8vfoDIZmQVx</summary>

```text
{"output":"Success. Updated the following files:\nA styles.css\n","metadata":{"exit_code":0,"duration_seconds":0.3}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_lIyHuQIWQDtCIZ8Kif9j9M3r)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_lIyHuQIWQDtCIZ8Kif9j9M3r","name":"apply_patch","input":"*** Begin Patch\n*** Add File: script.js\n+const caseStudies = [\n+  {\n+    id: \"signal-bloom\",\n+    title: \"Signal Bloom Poster Suite\",\n+    subtitle: \"From atmospheric concept art to a cleaner event-poster identity\",\n+    category: \"Prompt Evolution\",\n+    versionRange: \"v1 to v5\",\n+    summary:\n+      \"Tracks how an AI-generated poster series moved from beautiful but unfocused imagery into a more directed visual system with stronger hierarchy.\",\n+    thumbnail: {\n+      src: \"assets/images/case1/cover-placeholder.jpg\",\n+      alt: \"Signal Bloom case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n+    intent:\n+      \"Editable intent scaffold: explain the original design challenge, desired audience, and what the team wanted the first round of AI images to accomplish.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 brief\",\n+        promptText:\n+          \"[Replace with original prompt] Start with the broad first attempt that established subject matter, tone, and visual ambition but left composition and hierarchy loosely defined.\",\n+        note:\n+          \"Why it changed: the early output captured mood but lacked enough control over layout, contrast, and readable focal structure.\",\n+        screenshot: {\n+          src: \"assets/images/case1/prompt-v1-placeholder.jpg\",\n+          alt: \"Signal Bloom prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add more specific instructions for composition, color control, and intended use case so the image becomes more usable in a poster system.\",\n+        note:\n+          \"Why it changed: revision aimed to improve consistency and create stronger layout-ready negative space.\",\n+        screenshot: {\n+          src: \"assets/images/case1/prompt-v2-placeholder.jpg\",\n+          alt: \"Signal Bloom prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case1/v1-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 1 placeholder\",\n+        caption: \"Initial exploration prioritized ambience and light bloom over structure.\",\n+        note: \"Editable note: mention what felt promising and what still needed control.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case1/v2-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 2 placeholder\",\n+        caption: \"Prompt revisions tightened the palette and clarified the center of focus.\",\n+        note: \"Editable note: explain the impact of stronger composition guidance.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case1/v3-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 3 placeholder\",\n+        caption: \"Mid-stage outputs tested higher contrast and clearer silhouette control.\",\n+        note: \"Editable note: describe what improved and what still drifted.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case1/v4-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 4 placeholder\",\n+        caption: \"Later versions balanced atmosphere with cleaner read-from-a-distance behavior.\",\n+        note: \"Editable note: connect this version to the final selection logic.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case1/v5-placeholder.jpg\",\n+        alt: \"Signal Bloom iteration 5 placeholder\",\n+        caption: \"Final candidate delivered the strongest blend of drama and layout readiness.\",\n+        note: \"Editable note: compare the chosen result against rejected alternatives.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Fast mood exploration\",\n+        rationale:\n+          \"Editable rationale: explain why this tool was useful for generating atmosphere and broad visual direction early in the process.\",\n+        strengths: \"Produced dramatic lighting and texture quickly.\",\n+        limitations: \"Needed extra prompt precision to avoid overly busy layouts.\",\n+        image: {\n+          src: \"assets/images/case1/tool-a-placeholder.jpg\",\n+          alt: \"Signal Bloom tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Refinement and variation testing\",\n+        rationale:\n+          \"Editable rationale: explain where a second tool produced more controllable or more practical design results.\",\n+        strengths: \"Handled composition constraints more predictably.\",\n+        limitations: \"Sometimes lost the expressive texture of earlier outputs.\",\n+        image: {\n+          src: \"assets/images/case1/tool-b-placeholder.jpg\",\n+          alt: \"Signal Bloom tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      image: {\n+        src: \"assets/images/case1/final-placeholder.jpg\",\n+        alt: \"Signal Bloom final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: summarize why this version best matched the brief and what tradeoffs were accepted.\"\n+    },\n+    lessonsLearned: [\n+      \"More explicit composition language improved consistency across outputs.\",\n+      \"AI generated mood quickly, but still needed human curation for communication goals.\",\n+      \"Late-stage prompt changes worked best when they solved one targeted issue at a time.\"\n+    ]\n+  },\n+  {\n+    id: \"museum-dreamscape\",\n+    title: \"Museum Dreamscape Key Art\",\n+    subtitle: \"Testing how surreal imagery can still support a coherent exhibit identity\",\n+    category: \"Tool Comparison\",\n+    versionRange: \"v1 to v4\",\n+    summary:\n+      \"Compares multiple tools and prompt phrasings for a museum poster concept that needed to feel imaginative while remaining sophisticated and legible.\",\n+    thumbnail: {\n+      src: \"assets/images/case2/cover-placeholder.jpg\",\n+      alt: \"Museum Dreamscape case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n+    intent:\n+      \"Editable intent scaffold: describe the exhibit or campaign concept, the target mood, and how the team defined success for this visual track.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Begin with a concept prompt focused on spectacle and atmosphere, then note how the first result leaned too broad or too abstract.\",\n+        note:\n+          \"Why it changed: the team needed a more curated result that felt exhibition-ready rather than only visually interesting.\",\n+        screenshot: {\n+          src: \"assets/images/case2/prompt-v1-placeholder.jpg\",\n+          alt: \"Museum Dreamscape prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 tool-specific revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add references to material quality, gallery lighting, and controlled surreal elements to guide the tool toward a more believable scene.\",\n+        note:\n+          \"Why it changed: the prompt shifted from pure idea generation toward a more art-directable result.\",\n+        screenshot: {\n+          src: \"assets/images/case2/prompt-v2-placeholder.jpg\",\n+          alt: \"Museum Dreamscape prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case2/v1-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 1 placeholder\",\n+        caption: \"First pass delivered spectacle but lacked curatorial restraint.\",\n+        note: \"Editable note: mention which qualities were exciting and which felt unusable.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case2/v2-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 2 placeholder\",\n+        caption: \"Tool-specific tuning brought the imagery closer to a believable gallery context.\",\n+        note: \"Editable note: explain how the environment or composition became more coherent.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case2/v3-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 3 placeholder\",\n+        caption: \"A more selective prompt narrowed the palette and improved hierarchy.\",\n+        note: \"Editable note: describe how prompt wording tightened the final direction.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case2/v4-placeholder.jpg\",\n+        alt: \"Museum Dreamscape iteration 4 placeholder\",\n+        caption: \"Final candidate delivered the strongest balance of intrigue and clarity.\",\n+        note: \"Editable note: explain why this version was chosen over louder alternatives.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"High-concept exploration\",\n+        rationale:\n+          \"Editable rationale: note how this tool helped push surreal concepts quickly and reveal promising directions.\",\n+        strengths: \"Strong at atmosphere and conceptual surprise.\",\n+        limitations: \"Less stable when the team needed repeatable composition control.\",\n+        image: {\n+          src: \"assets/images/case2/tool-a-placeholder.jpg\",\n+          alt: \"Museum Dreamscape tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Controlled refinement\",\n+        rationale:\n+          \"Editable rationale: explain how this tool better supported polish, consistency, or design structure.\",\n+        strengths: \"More stable framing and cleaner subject emphasis.\",\n+        limitations: \"Less adventurous when the team wanted visual leaps.\",\n+        image: {\n+          src: \"assets/images/case2/tool-b-placeholder.jpg\",\n+          alt: \"Museum Dreamscape tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      image: {\n+        src: \"assets/images/case2/final-placeholder.jpg\",\n+        alt: \"Museum Dreamscape final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: describe why this output best conveyed the intended exhibit identity and what its strongest design qualities were.\"\n+    },\n+    lessonsLearned: [\n+      \"Tool switching was most useful when the team understood exactly what needed improvement.\",\n+      \"Surreal prompts benefited from constraints related to space, lighting, and perspective.\",\n+      \"The strongest result was not the wildest image, but the most communicative one.\"\n+    ]\n+  },\n+  {\n+    id: \"modular-motion\",\n+    title: \"Modular Motion Sneaker Board\",\n+    subtitle: \"An iterative concept board for product storytelling, materials, and motion cues\",\n+    category: \"Style Transfer\",\n+    versionRange: \"v1 to v5\",\n+    summary:\n+      \"Explores how AI-generated product scenes changed as the team adjusted style references, material prompts, and presentation context for a concept sneaker campaign.\",\n+    thumbnail: {\n+      src: \"assets/images/case3/cover-placeholder.jpg\",\n+      alt: \"Modular Motion case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n+    intent:\n+      \"Editable intent scaffold: define the product concept, intended audience, and what visual cues the team wanted the AI to emphasize.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 material prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Start with a broad product concept prompt that introduces form, material ideas, and mood without over-defining presentation.\",\n+        note:\n+          \"Why it changed: the output needed clearer control over camera angle, surface treatment, and branded context.\",\n+        screenshot: {\n+          src: \"assets/images/case3/prompt-v1-placeholder.jpg\",\n+          alt: \"Modular Motion prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 styling revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add references to editorial photography, material finish, and motion-inspired composition to guide the product rendering direction.\",\n+        note:\n+          \"Why it changed: the team needed the design to read as a concept board rather than a generic mockup.\",\n+        screenshot: {\n+          src: \"assets/images/case3/prompt-v2-placeholder.jpg\",\n+          alt: \"Modular Motion prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case3/v1-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 1 placeholder\",\n+        caption: \"Initial renders suggested material ideas but lacked a memorable presentation frame.\",\n+        note: \"Editable note: describe what the first output communicated well and where it felt generic.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case3/v2-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 2 placeholder\",\n+        caption: \"Refined prompts added camera intention and stronger visual rhythm.\",\n+        note: \"Editable note: note any gains in realism or energy.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case3/v3-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 3 placeholder\",\n+        caption: \"Style references shifted the outcome toward a more editorial and branded look.\",\n+        note: \"Editable note: compare realism versus concept-art appeal.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case3/v4-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 4 placeholder\",\n+        caption: \"Later versions tested cleaner backgrounds and more useful layout space.\",\n+        note: \"Editable note: explain why practical layout considerations mattered here.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case3/v5-placeholder.jpg\",\n+        alt: \"Modular Motion iteration 5 placeholder\",\n+        caption: \"Final candidate integrated product clarity, energy, and visual branding.\",\n+        note: \"Editable note: connect the selected version to the project brief.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Stylized concept generation\",\n+        rationale:\n+          \"Editable rationale: explain which tool created the boldest concept shapes or color moods.\",\n+        strengths: \"Produced expressive silhouettes and bold lighting quickly.\",\n+        limitations: \"Needed manual filtering because results sometimes drifted away from the product intent.\",\n+        image: {\n+          src: \"assets/images/case3/tool-a-placeholder.jpg\",\n+          alt: \"Modular Motion tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Product-focused refinement\",\n+        rationale:\n+          \"Editable rationale: note how the second tool helped preserve form readability and material definition.\",\n+        strengths: \"Better at keeping the object central and visually legible.\",\n+        limitations: \"Sometimes less expressive than the exploratory tool.\",\n+        image: {\n+          src: \"assets/images/case3/tool-b-placeholder.jpg\",\n+          alt: \"Modular Motion tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      image: {\n+        src: \"assets/images/case3/final-placeholder.jpg\",\n+        alt: \"Modular Motion final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: explain how the chosen version balanced concept appeal, readability, and assignment goals.\"\n+    },\n+    lessonsLearned: [\n+      \"Material language became more reliable once the prompt referenced finish and lighting together.\",\n+      \"AI could generate compelling product scenes, but not always with the brand clarity the project needed.\",\n+      \"Selection improved when the team judged outputs against communication goals instead of novelty alone.\"\n+    ]\n+  },\n+  {\n+    id: \"neon-flora\",\n+    title: \"Neon Flora Album Cover System\",\n+    subtitle: \"Building a repeatable cover style through prompt patterning and selective refinement\",\n+    category: \"Series Development\",\n+    versionRange: \"v1 to v4\",\n+    summary:\n+      \"Documents the evolution of a music-oriented visual identity where the team tested style consistency, subject variation, and the limits of AI as a design collaborator.\",\n+    thumbnail: {\n+      src: \"assets/images/case4/cover-placeholder.jpg\",\n+      alt: \"Neon Flora case study thumbnail placeholder\",\n+      label: \"Insert case study thumbnail here\"\n+    },\n+    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n+    intent:\n+      \"Editable intent scaffold: explain the visual identity goal, what made consistency important, and how the team planned to judge success across multiple covers.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 identity prompt\",\n+        promptText:\n+          \"[Replace with original prompt] Begin with a style-driven prompt that sets color, subject, and mood but keeps the album-series system open ended.\",\n+        note:\n+          \"Why it changed: the first output may have looked promising individually but did not yet behave like part of a coherent set.\",\n+        screenshot: {\n+          src: \"assets/images/case4/prompt-v1-placeholder.jpg\",\n+          alt: \"Neon Flora prompt screenshot version 1 placeholder\",\n+          label: \"Insert prompt screenshot here\"\n+        }\n+      },\n+      {\n+        label: \"v2 consistency revision\",\n+        promptText:\n+          \"[Replace with revised prompt] Add recurring visual anchors, palette rules, and layout instructions so multiple outputs can feel intentionally related.\",\n+        note:\n+          \"Why it changed: the revision focused on building a system instead of generating one-off images.\",\n+        screenshot: {\n+          src: \"assets/images/case4/prompt-v2-placeholder.jpg\",\n+          alt: \"Neon Flora prompt screenshot version 2 placeholder\",\n+          label: \"Insert revised prompt screenshot here\"\n+        }\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case4/v1-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 1 placeholder\",\n+        caption: \"First pass delivered style but not enough repeatable structure.\",\n+        note: \"Editable note: document what felt strong in isolation but weak as part of a system.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case4/v2-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 2 placeholder\",\n+        caption: \"Refined prompts introduced a clearer palette and stronger recurring motifs.\",\n+        note: \"Editable note: explain which prompt rules improved series consistency.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case4/v3-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 3 placeholder\",\n+        caption: \"Later outputs became easier to curate together as a unified collection.\",\n+        note: \"Editable note: mention how selection logic changed once a system emerged.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case4/v4-placeholder.jpg\",\n+        alt: \"Neon Flora iteration 4 placeholder\",\n+        caption: \"Final candidate offered the best balance of identity, variation, and polish.\",\n+        note: \"Editable note: describe why this version functioned best within the series.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Visual motif discovery\",\n+        rationale:\n+          \"Editable rationale: explain which tool surfaced the core motifs or unexpected directions worth keeping.\",\n+        strengths: \"Helpful for discovering strong visual hooks and dramatic color relationships.\",\n+        limitations: \"Often varied too much between generations to support a coherent multi-image system.\",\n+        image: {\n+          src: \"assets/images/case4/tool-a-placeholder.jpg\",\n+          alt: \"Neon Flora tool comparison placeholder A\",\n+          label: \"Insert tool comparison output here\"\n+        }\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Consistency testing\",\n+        rationale:\n+          \"Editable rationale: describe how the second tool handled repeated structural instructions.\",\n+        strengths: \"More dependable for maintaining palette, framing, or recurring subject motifs.\",\n+        limitations: \"Sometimes less visually daring than the exploratory tool.\",\n+        image: {\n+          src: \"assets/images/case4/tool-b-placeholder.jpg\",\n+          alt: \"Neon Flora tool comparison placeholder B\",\n+          label: \"Insert second tool comparison output here\"\n+        }\n+      }\n+    ],\n+    finalSelection: {\n+      image: {\n+        src: \"assets/images/case4/final-placeholder.jpg\",\n+        alt: \"Neon Flora final selection placeholder\",\n+        label: \"Insert final selected result here\"\n+      },\n+      rationale:\n+        \"Editable final selection note: summarize why this output best captured the intended identity system and where human curation mattered most.\"\n+    },\n+    lessonsLearned: [\n+      \"Consistency is a stronger test of AI design support than a single impressive image.\",\n+      \"Prompt rules became more useful once the team identified repeatable anchors worth preserving.\",\n+      \"AI acted best as a collaborator when the team set clear system-level criteria.\"\n+    ]\n+  }\n+];\n+\n+const analysisInsights = [\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What consistently worked\",\n+    body:\n+      \"Across projects, clearer prompt constraints typically improved composition, palette control, and usability. Replace this sentence with evidence-backed observations drawn from your final image sets.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What repeatedly failed\",\n+    body:\n+      \"Use this card to summarize recurring weak points such as unstable typography, off-target proportions, inconsistent perspective, or visual drift between generations.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"Prompt patterns that improved results\",\n+    body:\n+      \"Document the phrasing patterns that produced better outcomes, such as specifying camera angle, lighting, texture, layout intent, or audience-facing purpose.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"AI as collaborator vs. AI as tool\",\n+    body:\n+      \"Use this section to compare moments where AI felt generative and surprising versus moments where it behaved more like a drafting utility that still needed strong human direction.\"\n+  }\n+];\n+\n+const processStats = [\n+  { value: \"4\", label: \"Case studies scaffolded\", note: \"Add or remove case studies directly in script.js.\" },\n+  { value: \"20+\", label: \"Iteration slots prepared\", note: \"Each slot is connected to a placeholder image path.\" },\n+  { value: \"2\", label: \"Interactive process modules\", note: \"Slider and style switcher are already wired.\" },\n+  { value: \"100%\", label: \"Frontend-only deployment ready\", note: \"No backend, secrets, or build tooling required.\" }\n+];\n+\n+const workflowStages = [\n+  {\n+    label: \"Stage 1\",\n+    title: \"Concept framing\",\n+    body: \"Outline the goal, visual references, intended audience, and what the team wanted AI to help generate.\"\n+  },\n+  {\n+    label: \"Stage 2\",\n+    title: \"Prompt drafting\",\n+    body: \"Document initial prompt attempts, tool choice, and the assumptions that shaped the first output round.\"\n+  },\n+  {\n+    label: \"Stage 3\",\n+    title: \"Iteration and comparison\",\n+    body: \"Track how versions changed, why prompts were revised, and which tools produced more useful results.\"\n+  },\n+  {\n+    label: \"Stage 4\",\n+    title: \"Selection and reflection\",\n+    body: \"Summarize which outputs were chosen, how the final presentation was curated, and what the team learned.\"\n+  }\n+];\n+\n+const toolsUsed = [\n+  {\n+    label: \"Tool placeholder\",\n+    title: \"Primary image generator\",\n+    body: \"Replace with the actual tool name. Explain what it was best at, how often it was used, and which case studies depended on it most.\"\n+  },\n+  {\n+    label: \"Tool placeholder\",\n+    title: \"Secondary variation tool\",\n+    body: \"Replace with the actual tool name. Explain where a second system created more controllable or more experimental results.\"\n+  },\n+  {\n+    label: \"Support tool placeholder\",\n+    title: \"Editing or curation support\",\n+    body: \"Replace with the actual tool name if you used image editing, layout cleanup, or screenshot capture software.\"\n+  },\n+  {\n+    label: \"Documentation placeholder\",\n+    title: \"Process capture method\",\n+    body: \"Use this card to document how screenshots, prompt records, naming conventions, or folders were maintained.\"\n+  }\n+];\n+\n+const processArtifacts = [\n+  {\n+    label: \"Prompt evidence set A\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+      alt: \"Prompt evidence placeholder A\",\n+      label: \"Insert prompt screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Prompt evidence set B\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+      alt: \"Prompt evidence placeholder B\",\n+      label: \"Insert prompt screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Workflow evidence set\",\n+    title: \"Insert workflow or comparison screenshot here\",\n+    body: \"Recommended path: assets/images/shared/workflow-board-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/workflow-board-placeholder.jpg\",\n+      alt: \"Workflow evidence placeholder\",\n+      label: \"Insert workflow screenshot here\"\n+    }\n+  },\n+  {\n+    label: \"Rationale evidence set\",\n+    title: \"Insert tool rationale screenshot here\",\n+    body: \"Recommended path: assets/images/shared/tool-rationale-placeholder.jpg\",\n+    media: {\n+      src: \"assets/images/shared/tool-rationale-placeholder.jpg\",\n+      alt: \"Tool rationale evidence placeholder\",\n+      label: \"Insert tool rationale screenshot here\"\n+    }\n+  }\n+];\n+\n+const contributionCards = [\n+  {\n+    label: \"Editable team role\",\n+    title: \"Research and references\",\n+    body: \"Add the teammate name, what references they gathered, and how that research influenced prompts or curation choices.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Prompt engineering\",\n+    body: \"Add the teammate name, which prompts they developed, and which revisions led to better outputs.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Selection and analysis\",\n+    body: \"Add the teammate name, what evaluation criteria they used, and how they supported final selection decisions.\"\n+  },\n+  {\n+    label: \"Editable team role\",\n+    title: \"Website assembly and QA\",\n+    body: \"Add the teammate name, their role in building the site, and how they handled polish or final review.\"\n+  }\n+];\n+\n+const reflectionCards = [\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Team vision\",\n+    body: \"Summarize what the group hoped to demonstrate about AI-assisted creativity, visual experimentation, or iterative design practice.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"AI strengths\",\n+    body: \"Note where AI accelerated ideation, surfaced unexpected directions, or made it easier to test multiple visual pathways quickly.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"AI weaknesses\",\n+    body: \"Capture recurring issues such as inconsistency, weak typography, prompt sensitivity, or the need for heavy human judgment.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Vibe coding takeaways\",\n+    body: \"Use this card to discuss what it felt like to build with fast iteration, improvisation, and AI-assisted exploration inside a team workflow.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Team dynamics\",\n+    body: \"Describe how roles were shared, where collaboration helped the process, and what the team would improve in a future project.\"\n+  },\n+  {\n+    type: \"Reflection scaffold\",\n+    title: \"Closing insight\",\n+    body: \"Reserve this card for the final takeaway that ties together design, experimentation, limitations, and what the project revealed about AI in creative work.\"\n+  }\n+];\n+\n+const interactiveLab = {\n+  sliderCaseId: \"signal-bloom\",\n+  variations: [\n+    {\n+      id: \"cinematic\",\n+      label: \"Cinematic\",\n+      title: \"Cinematic direction\",\n+      description:\n+        \"Editable variation note: use this version to show how dramatic lighting, lens language, and mood-forward prompting shaped the same base concept.\",\n+      note: \"Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg\",\n+      media: {\n+        src: \"assets/images/shared/style-cinematic-placeholder.jpg\",\n+        alt: \"Cinematic style variation placeholder\",\n+        label: \"Insert cinematic style variation here\"\n+      }\n+    },\n+    {\n+      id: \"editorial\",\n+      label: \"Editorial\",\n+      title: \"Editorial direction\",\n+      description:\n+        \"Editable variation note: explain how a cleaner, magazine-inspired prompt changed composition, spacing, and design readability.\",\n+      note: \"Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg\",\n+      media: {\n+        src: \"assets/images/shared/style-editorial-placeholder.jpg\",\n+        alt: \"Editorial style variation placeholder\",\n+        label: \"Insert editorial style variation here\"\n+      }\n+    },\n+    {\n+      id: \"speculative\",\n+      label: \"Speculative\",\n+      title: \"Speculative direction\",\n+      description:\n+        \"Editable variation note: compare what happened when the same subject was pushed toward a more abstract or concept-art-driven outcome.\",\n+      note: \"Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg\",\n+      media: {\n+        src: \"assets/images/shared/style-speculative-placeholder.jpg\",\n+        alt: \"Speculative style variation placeholder\",\n+        label: \"Insert speculative style variation here\"\n+      }\n+    }\n+  ]\n+};\n+\n+const state = {\n+  activeCaseId: caseStudies[0].id,\n+  sliderIndex: 0,\n+  activeVariationId: interactiveLab.variations[0].id\n+};\n+\n+document.addEventListener(\"DOMContentLoaded\", () => {\n+  setupNavigation();\n+  hydrateMediaShells(document);\n+  renderCaseStudyGrid();\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+  renderAnalysis();\n+  renderProcessStats();\n+  renderWorkflowStages();\n+  renderTools();\n+  renderArtifacts();\n+  renderContributions();\n+  renderReflections();\n+  setupIterationSlider();\n+  setupStyleSwitcher();\n+});\n+\n+function setupNavigation() {\n+  const header = document.querySelector(\".site-header\");\n+  const toggle = document.querySelector(\".menu-toggle\");\n+  const navLinks = document.querySelectorAll(\".site-nav a\");\n+\n+  if (!header || !toggle) return;\n+\n+  toggle.addEventListener(\"click\", () => {\n+    const expanded = toggle.getAttribute(\"aria-expanded\") === \"true\";\n+    toggle.setAttribute(\"aria-expanded\", String(!expanded));\n+    header.classList.toggle(\"is-open\", !expanded);\n+  });\n+\n+  navLinks.forEach((link) => {\n+    link.addEventListener(\"click\", () => {\n+      toggle.setAttribute(\"aria-expanded\", \"false\");\n+      header.classList.remove(\"is-open\");\n+    });\n+  });\n+}\n+\n+function renderCaseStudyGrid() {\n+  const grid = document.getElementById(\"caseStudyGrid\");\n+  if (!grid) return;\n+\n+  grid.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <article class=\"panel case-card\">\n+          <div class=\"media-shell\" data-src=\"${study.thumbnail.src}\" data-alt=\"${study.thumbnail.alt}\" data-label=\"${study.thumbnail.label}\"></div>\n+          <div class=\"case-card__header\">\n+            <div>\n+              <span class=\"case-card__category\">${study.category}</span>\n+              <h3>${study.title}</h3>\n+            </div>\n+            <span class=\"case-card__range\">${study.versionRange}</span>\n+          </div>\n+          <p>${study.summary}</p>\n+          <ul class=\"tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <button class=\"case-card__action\" type=\"button\" data-case-open=\"${study.id}\">Open detailed case study</button>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(grid);\n+\n+  grid.querySelectorAll(\"[data-case-open]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-open\"));\n+      document.getElementById(\"case-studies\")?.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n+    });\n+  });\n+}\n+\n+function renderCaseStudySelector() {\n+  const selector = document.getElementById(\"caseStudySelector\");\n+  if (!selector) return;\n+\n+  selector.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <button class=\"selector-button\" type=\"button\" role=\"tab\" aria-selected=\"${study.id === state.activeCaseId}\" data-case-select=\"${study.id}\">\n+          ${study.title}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  selector.querySelectorAll(\"[data-case-select]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-select\"));\n+    });\n+  });\n+}\n+\n+function setActiveCaseStudy(caseId) {\n+  if (!caseStudies.some((study) => study.id === caseId)) return;\n+  state.activeCaseId = caseId;\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+}\n+\n+function renderActiveCaseStudy() {\n+  const container = document.getElementById(\"caseStudyDetail\");\n+  const study = getActiveCaseStudy();\n+  if (!container || !study) return;\n+\n+  container.innerHTML = `\n+    <div class=\"panel case-detail__panel\">\n+      <div class=\"detail-top\">\n+        <div class=\"detail-heading\">\n+          <p class=\"eyebrow eyebrow--small\">Active case study</p>\n+          <h3>${study.title}</h3>\n+          <p class=\"detail-subtitle\">${study.subtitle}</p>\n+          <ul class=\"detail-tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <div class=\"detail-meta\">\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Category</span>\n+              <span class=\"detail-meta__value\">${study.category}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Version range</span>\n+              <span class=\"detail-meta__value\">${study.versionRange}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Focus</span>\n+              <span class=\"detail-meta__value\">${study.summary}</span>\n+            </div>\n+          </div>\n+        </div>\n+        <div class=\"media-shell media-shell--wide\" data-src=\"${study.finalSelection.image.src}\" data-alt=\"${study.finalSelection.image.alt}\" data-label=\"${study.finalSelection.image.label}\"></div>\n+      </div>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Intent</h4>\n+        <p>${study.intent}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Prompt Evolution</h4>\n+        <div class=\"prompt-grid\">\n+          ${study.promptVersions\n+            .map(\n+              (prompt) => `\n+                <article class=\"prompt-card\">\n+                  <span class=\"prompt-card__label\">${prompt.label}</span>\n+                  <h4>Prompt version</h4>\n+                  <p class=\"prompt-card__text\">${prompt.promptText}</p>\n+                  <p class=\"prompt-card__note\">${prompt.note}</p>\n+                  <div class=\"media-shell\" data-src=\"${prompt.screenshot.src}\" data-alt=\"${prompt.screenshot.alt}\" data-label=\"${prompt.screenshot.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Output Iterations</h4>\n+        <div class=\"iteration-grid\">\n+          ${study.iterationImages\n+            .map(\n+              (image) => `\n+                <article class=\"iteration-card\">\n+                  <span class=\"prompt-card__label\">${image.label}</span>\n+                  <h4>${image.caption}</h4>\n+                  <div class=\"media-shell\" data-src=\"${image.src}\" data-alt=\"${image.alt}\" data-label=\"Insert version output here\"></div>\n+                  <p>${image.note}</p>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Tool Comparison</h4>\n+        <div class=\"comparison-grid\">\n+          ${study.toolComparisons\n+            .map(\n+              (tool) => `\n+                <article class=\"comparison-card\">\n+                  <span class=\"comparison-card__label\">${tool.tool}</span>\n+                  <h4>${tool.role}</h4>\n+                  <p>${tool.rationale}</p>\n+                  <p><strong>Strengths:</strong> ${tool.strengths}</p>\n+                  <p><strong>Limitations:</strong> ${tool.limitations}</p>\n+                  <div class=\"media-shell\" data-src=\"${tool.image.src}\" data-alt=\"${tool.image.alt}\" data-label=\"${tool.image.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Final Selection</h4>\n+        <p>${study.finalSelection.rationale}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Lessons Learned</h4>\n+        <ul class=\"bullet-list\">${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join(\"\")}</ul>\n+      </section>\n+    </div>\n+  `;\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderAnalysis() {\n+  const container = document.getElementById(\"analysisGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = analysisInsights\n+    .map(\n+      (insight) => `\n+        <article class=\"panel insight-card\">\n+          <span class=\"insight-card__type\">${insight.type}</span>\n+          <h3>${insight.title}</h3>\n+          <p>${insight.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderProcessStats() {\n+  const container = document.getElementById(\"processStats\");\n+  if (!container) return;\n+\n+  container.innerHTML = processStats\n+    .map(\n+      (stat) => `\n+        <article class=\"stat-card\">\n+          <span class=\"stat-card__value\">${stat.value}</span>\n+          <span class=\"stat-card__label\">${stat.label}</span>\n+          <p class=\"stat-card__note\">${stat.note}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderWorkflowStages() {\n+  const container = document.getElementById(\"workflowGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = workflowStages\n+    .map(\n+      (stage, index) => `\n+        <article class=\"workflow-card\">\n+          <span class=\"workflow-card__label\">${stage.label}</span>\n+          <div class=\"workflow-card__number\">${index + 1}</div>\n+          <h4>${stage.title}</h4>\n+          <p>${stage.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderTools() {\n+  const container = document.getElementById(\"toolGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = toolsUsed\n+    .map(\n+      (tool) => `\n+        <article class=\"tool-card\">\n+          <span class=\"tool-card__label\">${tool.label}</span>\n+          <h4>${tool.title}</h4>\n+          <p>${tool.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderArtifacts() {\n+  const container = document.getElementById(\"artifactGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = processArtifacts\n+    .map(\n+      (artifact) => `\n+        <article class=\"artifact-card\">\n+          <span class=\"artifact-card__label\">${artifact.label}</span>\n+          <h4>${artifact.title}</h4>\n+          <p>${artifact.body}</p>\n+          <div class=\"media-shell\" data-src=\"${artifact.media.src}\" data-alt=\"${artifact.media.alt}\" data-label=\"${artifact.media.label}\"></div>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderContributions() {\n+  const container = document.getElementById(\"contributionGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = contributionCards\n+    .map(\n+      (card) => `\n+        <article class=\"contribution-card\">\n+          <span class=\"contribution-card__label\">${card.label}</span>\n+          <h4>${card.title}</h4>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderReflections() {\n+  const container = document.getElementById(\"reflectionGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = reflectionCards\n+    .map(\n+      (card) => `\n+        <article class=\"panel reflection-card\">\n+          <span class=\"reflection-card__type\">${card.type}</span>\n+          <h3>${card.title}</h3>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupIterationSlider() {\n+  const slider = document.getElementById(\"iterationSlider\");\n+  const prevButton = document.getElementById(\"iterationPrev\");\n+  const nextButton = document.getElementById(\"iterationNext\");\n+  const sliderStudy = getSliderCaseStudy();\n+  if (!slider || !prevButton || !nextButton || !sliderStudy) return;\n+\n+  slider.max = String(sliderStudy.iterationImages.length - 1);\n+  slider.value = String(state.sliderIndex);\n+\n+  slider.addEventListener(\"input\", () => {\n+    state.sliderIndex = Number(slider.value);\n+    renderIterationSlider();\n+  });\n+\n+  prevButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.max(0, state.sliderIndex - 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  nextButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  renderIterationSlider();\n+}\n+\n+function renderIterationSlider() {\n+  const sliderStudy = getSliderCaseStudy();\n+  const frame = sliderStudy?.iterationImages[state.sliderIndex];\n+  const valueBadge = document.getElementById(\"iterationSliderValue\");\n+  const title = document.getElementById(\"iterationCaptionTitle\");\n+  const text = document.getElementById(\"iterationCaptionText\");\n+  const note = document.getElementById(\"iterationCaptionNote\");\n+  const mediaShell = document.getElementById(\"iterationSliderMedia\");\n+  const markers = document.getElementById(\"iterationMarkers\");\n+  if (!sliderStudy || !frame || !valueBadge || !title || !text || !note || !mediaShell || !markers) return;\n+\n+  valueBadge.textContent = frame.label;\n+  title.textContent = `${sliderStudy.title} ${frame.label}`;\n+  text.textContent = frame.caption;\n+  note.textContent = frame.note;\n+\n+  setMediaShell(mediaShell, {\n+    src: frame.src,\n+    alt: frame.alt,\n+    label: \"Insert version output here\"\n+  });\n+\n+  markers.innerHTML = sliderStudy.iterationImages\n+    .map(\n+      (item, index) => `\n+        <span class=\"step-indicator ${index === state.sliderIndex ? \"is-active\" : \"\"}\">\n+          ${item.label}\n+        </span>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupStyleSwitcher() {\n+  const group = document.getElementById(\"styleToggleGroup\");\n+  if (!group) return;\n+\n+  group.innerHTML = interactiveLab.variations\n+    .map(\n+      (variation) => `\n+        <button class=\"toggle-button\" type=\"button\" role=\"tab\" aria-selected=\"${variation.id === state.activeVariationId}\" data-variation=\"${variation.id}\">\n+          ${variation.label}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  group.querySelectorAll(\"[data-variation]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      state.activeVariationId = button.getAttribute(\"data-variation\");\n+      setupStyleSwitcher();\n+      renderStyleVariation();\n+    });\n+  });\n+\n+  renderStyleVariation();\n+}\n+\n+function renderStyleVariation() {\n+  const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);\n+  const title = document.getElementById(\"styleToggleTitle\");\n+  const description = document.getElementById(\"styleToggleDescription\");\n+  const note = document.getElementById(\"styleToggleNote\");\n+  const mediaShell = document.getElementById(\"styleToggleMedia\");\n+  if (!variation || !title || !description || !note || !mediaShell) return;\n+\n+  title.textContent = variation.title;\n+  description.textContent = variation.description;\n+  note.textContent = variation.note;\n+\n+  setMediaShell(mediaShell, {\n+    src: variation.media.src,\n+    alt: variation.media.alt,\n+    label: variation.media.label\n+  });\n+}\n+\n+function hydrateMediaShells(root) {\n+  root.querySelectorAll(\".media-shell[data-src]\").forEach((shell) => {\n+    setMediaShell(shell, {\n+      src: shell.dataset.src,\n+      alt: shell.dataset.alt || \"\",\n+      label: shell.dataset.label || \"Insert image here\"\n+    });\n+  });\n+}\n+\n+function setMediaShell(shell, { src, alt, label }) {\n+  if (!shell) return;\n+\n+  shell.innerHTML = \"\";\n+  shell.classList.remove(\"is-loaded\");\n+\n+  const image = document.createElement(\"img\");\n+  image.alt = alt || label;\n+  image.loading = \"lazy\";\n+  image.decoding = \"async\";\n+\n+  const fallback = document.createElement(\"div\");\n+  fallback.className = \"media-fallback\";\n+  fallback.innerHTML = `\n+    <span class=\"media-fallback__eyebrow\">Placeholder Asset</span>\n+    <strong>${label}</strong>\n+    <code>${src || \"Add an asset path\"}</code>\n+  `;\n+\n+  image.addEventListener(\"load\", () => {\n+    shell.classList.add(\"is-loaded\");\n+  });\n+\n+  image.addEventListener(\"error\", () => {\n+    shell.classList.remove(\"is-loaded\");\n+  });\n+\n+  shell.append(image, fallback);\n+\n+  if (src) {\n+    image.src = src;\n+  }\n+}\n+\n+function getActiveCaseStudy() {\n+  return caseStudies.find((study) => study.id === state.activeCaseId);\n+}\n+\n+function getSliderCaseStudy() {\n+  return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);\n+}\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_lIyHuQIWQDtCIZ8Kif9j9M3r</summary>

```text
execution error: Io(Custom { kind: Other, error: "windows sandbox: runner error: CreateProcessAsUserW failed: 206" })
```

</details>

<details>
<summary>Tool call: apply_patch (call_2QFStZUSAJOgJ9UJr3CjEtPk)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_2QFStZUSAJOgJ9UJr3CjEtPk","name":"apply_patch","input":"*** Begin Patch\n*** Add File: script.js\n+const media = (src, alt, label) => ({ src, alt, label });\n+\n+const caseStudies = [\n+  {\n+    id: \"signal-bloom\",\n+    title: \"Signal Bloom Poster Suite\",\n+    subtitle: \"From atmosphere-first art to a cleaner poster identity\",\n+    category: \"Prompt Evolution\",\n+    versionRange: \"v1 to v5\",\n+    summary: \"Shows how a poster series moved from moody but unfocused outputs into a more directed layout-ready system.\",\n+    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Signal Bloom thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n+    intent: \"Editable intent scaffold: explain the brief, audience, and what the team expected the first image round to solve.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 brief\",\n+        promptText: \"[Replace with original prompt] Broad first prompt focused on subject, tone, and spectacle.\",\n+        note: \"Why it changed: strong mood, weak structure.\",\n+        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Signal Bloom prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add composition, palette, and layout guidance for poster use.\",\n+        note: \"Why it changed: aimed for cleaner hierarchy and usable negative space.\",\n+        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Signal Bloom prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case1/v1-placeholder.jpg\",\n+        alt: \"Signal Bloom version 1 placeholder\",\n+        caption: \"Initial pass emphasized light bloom and mood over structure.\",\n+        note: \"Editable note: record the first promising qualities.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case1/v2-placeholder.jpg\",\n+        alt: \"Signal Bloom version 2 placeholder\",\n+        caption: \"Prompt tuning tightened the palette and central focus.\",\n+        note: \"Editable note: explain what improved after revision.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case1/v3-placeholder.jpg\",\n+        alt: \"Signal Bloom version 3 placeholder\",\n+        caption: \"Mid-stage output tested contrast and silhouette clarity.\",\n+        note: \"Editable note: describe what still felt unresolved.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case1/v4-placeholder.jpg\",\n+        alt: \"Signal Bloom version 4 placeholder\",\n+        caption: \"Later version balanced atmosphere with readability.\",\n+        note: \"Editable note: connect this version to final selection logic.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case1/v5-placeholder.jpg\",\n+        alt: \"Signal Bloom version 5 placeholder\",\n+        caption: \"Final candidate blended drama with layout readiness.\",\n+        note: \"Editable note: compare selected and rejected options.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Fast mood exploration\",\n+        rationale: \"Editable rationale: explain why this tool was useful early.\",\n+        strengths: \"Generated lighting and texture quickly.\",\n+        limitations: \"Needed tighter prompt control for cleaner layouts.\",\n+        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Signal Bloom tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Refinement testing\",\n+        rationale: \"Editable rationale: explain where a second tool gave more control.\",\n+        strengths: \"More dependable composition and subject emphasis.\",\n+        limitations: \"Could lose some of the expressive atmosphere.\",\n+        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Signal Bloom tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Signal Bloom final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: summarize why this version best matched the brief.\"\n+    },\n+    lessonsLearned: [\n+      \"Specific composition language improved consistency.\",\n+      \"AI generated mood quickly, but curation still mattered.\",\n+      \"Late changes worked best when they solved one clear issue.\"\n+    ]\n+  },\n+  {\n+    id: \"museum-dreamscape\",\n+    title: \"Museum Dreamscape Key Art\",\n+    subtitle: \"Testing surreal imagery inside a more curated exhibit identity\",\n+    category: \"Tool Comparison\",\n+    versionRange: \"v1 to v4\",\n+    summary: \"Compares prompt phrasing and tool behavior for a museum poster that needed both intrigue and clarity.\",\n+    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Museum Dreamscape thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n+    intent: \"Editable intent scaffold: describe the campaign concept, target mood, and what success looked like.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Start with spectacle, mood, and broad exhibit energy.\",\n+        note: \"Why it changed: too abstract for a polished exhibit poster.\",\n+        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Museum Dreamscape prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add gallery context, material cues, and controlled surreal details.\",\n+        note: \"Why it changed: moved from idea generation toward art direction.\",\n+        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Museum Dreamscape prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case2/v1-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 1 placeholder\",\n+        caption: \"First pass delivered spectacle but limited restraint.\",\n+        note: \"Editable note: call out the exciting but impractical parts.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case2/v2-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 2 placeholder\",\n+        caption: \"Refinement made the scene feel more exhibition-ready.\",\n+        note: \"Editable note: explain what became more coherent.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case2/v3-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 3 placeholder\",\n+        caption: \"Selective constraints improved palette and hierarchy.\",\n+        note: \"Editable note: show how prompt wording changed the result.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case2/v4-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 4 placeholder\",\n+        caption: \"Final candidate balanced intrigue and communication.\",\n+        note: \"Editable note: explain why this version won.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"High-concept exploration\",\n+        rationale: \"Editable rationale: note how this tool pushed surreal concepts quickly.\",\n+        strengths: \"Strong at atmosphere and surprise.\",\n+        limitations: \"Less stable when the team needed repeatable framing.\",\n+        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Museum Dreamscape tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Controlled refinement\",\n+        rationale: \"Editable rationale: explain how this tool supported polish and structure.\",\n+        strengths: \"Cleaner subject emphasis and steadier composition.\",\n+        limitations: \"Could feel safer than the exploratory option.\",\n+        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Museum Dreamscape tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Museum Dreamscape final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: describe why this output best fit the exhibit identity.\"\n+    },\n+    lessonsLearned: [\n+      \"Tool switching worked best when the problem was clearly defined.\",\n+      \"Surreal prompts improved when space and lighting were constrained.\",\n+      \"The strongest result was the most communicative, not the noisiest.\"\n+    ]\n+  },\n+  {\n+    id: \"modular-motion\",\n+    title: \"Modular Motion Sneaker Board\",\n+    subtitle: \"Product storytelling through materials, camera direction, and style transfer\",\n+    category: \"Style Transfer\",\n+    versionRange: \"v1 to v5\",\n+    summary: \"Explores how product scenes changed as the team adjusted style references, material prompts, and presentation context.\",\n+    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Modular Motion thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n+    intent: \"Editable intent scaffold: define the product concept, intended audience, and the cues AI needed to emphasize.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Broad product concept with material ideas and energy cues.\",\n+        note: \"Why it changed: the output needed better camera control and stronger presentation.\",\n+        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Modular Motion prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add editorial photo language, finish notes, and motion-inspired framing.\",\n+        note: \"Why it changed: aimed for a concept board rather than a generic mockup.\",\n+        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Modular Motion prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case3/v1-placeholder.jpg\",\n+        alt: \"Modular Motion version 1 placeholder\",\n+        caption: \"Initial renders suggested materials but lacked a memorable frame.\",\n+        note: \"Editable note: describe where the first output felt generic.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case3/v2-placeholder.jpg\",\n+        alt: \"Modular Motion version 2 placeholder\",\n+        caption: \"Prompt revisions added camera intention and stronger rhythm.\",\n+        note: \"Editable note: note gains in realism or energy.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case3/v3-placeholder.jpg\",\n+        alt: \"Modular Motion version 3 placeholder\",\n+        caption: \"Style references pushed the result toward an editorial look.\",\n+        note: \"Editable note: compare realism and concept-art appeal.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case3/v4-placeholder.jpg\",\n+        alt: \"Modular Motion version 4 placeholder\",\n+        caption: \"Later versions tested cleaner backgrounds and more layout room.\",\n+        note: \"Editable note: explain why practical layout space mattered.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case3/v5-placeholder.jpg\",\n+        alt: \"Modular Motion version 5 placeholder\",\n+        caption: \"Final candidate integrated clarity, energy, and brand feel.\",\n+        note: \"Editable note: connect the winner to the project brief.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Stylized concept generation\",\n+        rationale: \"Editable rationale: explain which tool created the boldest shapes and moods.\",\n+        strengths: \"Produced expressive silhouettes and lighting quickly.\",\n+        limitations: \"Sometimes drifted away from the product intent.\",\n+        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Modular Motion tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Product-focused refinement\",\n+        rationale: \"Editable rationale: explain how the second tool preserved readability.\",\n+        strengths: \"Better at keeping the object central and legible.\",\n+        limitations: \"Less surprising than the exploratory tool.\",\n+        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Modular Motion tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Modular Motion final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain how the chosen version balanced concept appeal and clarity.\"\n+    },\n+    lessonsLearned: [\n+      \"Material language improved when finish and lighting were paired.\",\n+      \"AI could stage products well, but brand clarity still needed human judgment.\",\n+      \"Selection improved when novelty was judged against communication goals.\"\n+    ]\n+  },\n+  {\n+    id: \"neon-flora\",\n+    title: \"Neon Flora Album Cover System\",\n+    subtitle: \"Building a repeatable cover style through prompt patterning\",\n+    category: \"Series Development\",\n+    versionRange: \"v1 to v4\",\n+    summary: \"Documents a music-oriented identity system where the team tested consistency, variation, and the limits of AI as collaborator.\",\n+    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Neon Flora thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n+    intent: \"Editable intent scaffold: explain the identity goal and why consistency mattered across multiple covers.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Style-driven prompt with color, subject, and mood anchors.\",\n+        note: \"Why it changed: strong individually, weak as a repeatable system.\",\n+        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Neon Flora prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add recurring motifs, palette rules, and layout guidance for a multi-cover set.\",\n+        note: \"Why it changed: focused on system-building instead of one-off images.\",\n+        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Neon Flora prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case4/v1-placeholder.jpg\",\n+        alt: \"Neon Flora version 1 placeholder\",\n+        caption: \"First pass delivered style without repeatable structure.\",\n+        note: \"Editable note: identify what worked only in isolation.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case4/v2-placeholder.jpg\",\n+        alt: \"Neon Flora version 2 placeholder\",\n+        caption: \"Refinement added clearer palette rules and recurring motifs.\",\n+        note: \"Editable note: explain which prompt rules improved consistency.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case4/v3-placeholder.jpg\",\n+        alt: \"Neon Flora version 3 placeholder\",\n+        caption: \"Later outputs became easier to curate into a set.\",\n+        note: \"Editable note: mention how selection criteria changed.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case4/v4-placeholder.jpg\",\n+        alt: \"Neon Flora version 4 placeholder\",\n+        caption: \"Final candidate balanced identity, variation, and polish.\",\n+        note: \"Editable note: describe why this version fit the series best.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Motif discovery\",\n+        rationale: \"Editable rationale: explain which tool surfaced the best visual hooks.\",\n+        strengths: \"Helpful for strong motifs and color relationships.\",\n+        limitations: \"Varied too much for a stable series.\",\n+        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Neon Flora tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Consistency testing\",\n+        rationale: \"Editable rationale: describe how the second tool handled repeated rules.\",\n+        strengths: \"Better at preserving palette and framing anchors.\",\n+        limitations: \"Less visually daring than the exploratory option.\",\n+        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Neon Flora tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Neon Flora final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: summarize why this output best captured the intended identity system.\"\n+    },\n+    lessonsLearned: [\n+      \"Consistency is a stronger AI test than one impressive image.\",\n+      \"Prompt rules became useful once repeatable anchors were identified.\",\n+      \"AI worked best as a collaborator when success criteria were explicit.\"\n+    ]\n+  }\n+];\n+\n+const analysisInsights = [\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What consistently worked\",\n+    body: \"Use this card for evidence-backed patterns about composition, palette control, or prompt specificity.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"What repeatedly failed\",\n+    body: \"Summarize recurring weak points such as unstable typography, drift, or inconsistent perspective.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"Prompt patterns that improved results\",\n+    body: \"Document useful phrasing patterns such as camera angle, lighting, texture, and layout intent.\"\n+  },\n+  {\n+    type: \"Editable insight scaffold\",\n+    title: \"AI as collaborator vs. AI as tool\",\n+    body: \"Compare moments where AI felt surprising and generative versus moments where it behaved more like a drafting utility.\"\n+  }\n+];\n+\n+const processStats = [\n+  { value: \"4\", label: \"Case studies scaffolded\", note: \"Add or remove case studies directly in script.js.\" },\n+  { value: \"20+\", label: \"Iteration slots prepared\", note: \"Each slot points to a clear placeholder path.\" },\n+  { value: \"2\", label: \"Interactive process modules\", note: \"Slider and style switcher are already functional.\" },\n+  { value: \"100%\", label: \"Frontend-only deployment ready\", note: \"No backend, secrets, or build tooling required.\" }\n+];\n+\n+const workflowStages = [\n+  { label: \"Stage 1\", title: \"Concept framing\", body: \"Define the goal, audience, references, and what AI should help generate.\" },\n+  { label: \"Stage 2\", title: \"Prompt drafting\", body: \"Document first prompts, tool choice, and initial assumptions.\" },\n+  { label: \"Stage 3\", title: \"Iteration and comparison\", body: \"Track revisions, version changes, and tool tradeoffs.\" },\n+  { label: \"Stage 4\", title: \"Selection and reflection\", body: \"Summarize final picks, curation logic, and what the team learned.\" }\n+];\n+\n+const toolsUsed = [\n+  { label: \"Tool placeholder\", title: \"Primary image generator\", body: \"Replace with the actual tool name and explain what it was best at.\" },\n+  { label: \"Tool placeholder\", title: \"Secondary variation tool\", body: \"Replace with the actual tool name and explain where it produced better alternatives.\" },\n+  { label: \"Support tool placeholder\", title: \"Editing or curation support\", body: \"Document any software used for cleanup, layout, or screenshot capture.\" },\n+  { label: \"Documentation placeholder\", title: \"Process capture method\", body: \"Explain how prompt records, screenshots, or folder naming stayed organized.\" }\n+];\n+\n+const processArtifacts = [\n+  {\n+    label: \"Prompt evidence set A\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+    media: media(\"assets/images/shared/prompt-shot-a-placeholder.jpg\", \"Prompt evidence placeholder A\", \"Insert prompt screenshot here\")\n+  },\n+  {\n+    label: \"Prompt evidence set B\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+    media: media(\"assets/images/shared/prompt-shot-b-placeholder.jpg\", \"Prompt evidence placeholder B\", \"Insert prompt screenshot here\")\n+  },\n+  {\n+    label: \"Workflow evidence set\",\n+    title: \"Insert workflow or comparison screenshot here\",\n+    body: \"Recommended path: assets/images/shared/workflow-board-placeholder.jpg\",\n+    media: media(\"assets/images/shared/workflow-board-placeholder.jpg\", \"Workflow evidence placeholder\", \"Insert workflow screenshot here\")\n+  },\n+  {\n+    label: \"Rationale evidence set\",\n+    title: \"Insert tool rationale screenshot here\",\n+    body: \"Recommended path: assets/images/shared/tool-rationale-placeholder.jpg\",\n+    media: media(\"assets/images/shared/tool-rationale-placeholder.jpg\", \"Tool rationale evidence placeholder\", \"Insert tool rationale screenshot here\")\n+  }\n+];\n+\n+const contributionCards = [\n+  { label: \"Editable team role\", title: \"Research and references\", body: \"Add the teammate name, references gathered, and how that research influenced prompts.\" },\n+  { label: \"Editable team role\", title: \"Prompt engineering\", body: \"Add the teammate name, which prompts they developed, and what revisions improved results.\" },\n+  { label: \"Editable team role\", title: \"Selection and analysis\", body: \"Add the teammate name and the criteria they used to judge outputs.\" },\n+  { label: \"Editable team role\", title: \"Website assembly and QA\", body: \"Add the teammate name and their role in build polish, organization, and review.\" }\n+];\n+\n+const reflectionCards = [\n+  { type: \"Reflection scaffold\", title: \"Team vision\", body: \"Summarize what the group hoped to demonstrate about AI-assisted creativity.\" },\n+  { type: \"Reflection scaffold\", title: \"AI strengths\", body: \"Note where AI accelerated ideation or revealed unexpected directions.\" },\n+  { type: \"Reflection scaffold\", title: \"AI weaknesses\", body: \"Capture recurring issues such as inconsistency, weak typography, or prompt sensitivity.\" },\n+  { type: \"Reflection scaffold\", title: \"Vibe coding takeaways\", body: \"Discuss what it felt like to build with fast iteration and AI-assisted experimentation.\" },\n+  { type: \"Reflection scaffold\", title: \"Team dynamics\", body: \"Describe how roles were shared and where collaboration helped the process.\" },\n+  { type: \"Reflection scaffold\", title: \"Closing insight\", body: \"Reserve this card for the final takeaway that ties together design, experimentation, and limitation.\" }\n+];\n+\n+const interactiveLab = {\n+  sliderCaseId: \"signal-bloom\",\n+  variations: [\n+    {\n+      id: \"cinematic\",\n+      label: \"Cinematic\",\n+      title: \"Cinematic direction\",\n+      description: \"Use this version to show how dramatic lighting and lens language changed the same base brief.\",\n+      note: \"Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-cinematic-placeholder.jpg\", \"Cinematic style variation placeholder\", \"Insert cinematic style variation here\")\n+    },\n+    {\n+      id: \"editorial\",\n+      label: \"Editorial\",\n+      title: \"Editorial direction\",\n+      description: \"Use this version to show how a cleaner, magazine-inspired prompt changed composition and readability.\",\n+      note: \"Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-editorial-placeholder.jpg\", \"Editorial style variation placeholder\", \"Insert editorial style variation here\")\n+    },\n+    {\n+      id: \"speculative\",\n+      label: \"Speculative\",\n+      title: \"Speculative direction\",\n+      description: \"Use this version to show what happened when the same subject was pushed toward a more abstract outcome.\",\n+      note: \"Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-speculative-placeholder.jpg\", \"Speculative style variation placeholder\", \"Insert speculative style variation here\")\n+    }\n+  ]\n+};\n+\n+const state = {\n+  activeCaseId: caseStudies[0].id,\n+  sliderIndex: 0,\n+  activeVariationId: interactiveLab.variations[0].id\n+};\n+\n+document.addEventListener(\"DOMContentLoaded\", () => {\n+  setupNavigation();\n+  hydrateMediaShells(document);\n+  renderCaseStudyGrid();\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+  renderAnalysis();\n+  renderProcessStats();\n+  renderWorkflowStages();\n+  renderTools();\n+  renderArtifacts();\n+  renderContributions();\n+  renderReflections();\n+  setupIterationSlider();\n+  setupStyleSwitcher();\n+});\n+\n+function setupNavigation() {\n+  const header = document.querySelector(\".site-header\");\n+  const toggle = document.querySelector(\".menu-toggle\");\n+  const navLinks = document.querySelectorAll(\".site-nav a\");\n+  if (!header || !toggle) return;\n+\n+  toggle.addEventListener(\"click\", () => {\n+    const expanded = toggle.getAttribute(\"aria-expanded\") === \"true\";\n+    toggle.setAttribute(\"aria-expanded\", String(!expanded));\n+    header.classList.toggle(\"is-open\", !expanded);\n+  });\n+\n+  navLinks.forEach((link) => {\n+    link.addEventListener(\"click\", () => {\n+      toggle.setAttribute(\"aria-expanded\", \"false\");\n+      header.classList.remove(\"is-open\");\n+    });\n+  });\n+}\n+\n+function renderCaseStudyGrid() {\n+  const grid = document.getElementById(\"caseStudyGrid\");\n+  if (!grid) return;\n+\n+  grid.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <article class=\"panel case-card\">\n+          <div class=\"media-shell\" data-src=\"${study.thumbnail.src}\" data-alt=\"${study.thumbnail.alt}\" data-label=\"${study.thumbnail.label}\"></div>\n+          <div class=\"case-card__header\">\n+            <div>\n+              <span class=\"case-card__category\">${study.category}</span>\n+              <h3>${study.title}</h3>\n+            </div>\n+            <span class=\"case-card__range\">${study.versionRange}</span>\n+          </div>\n+          <p>${study.summary}</p>\n+          <ul class=\"tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <button class=\"case-card__action\" type=\"button\" data-case-open=\"${study.id}\">Open detailed case study</button>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(grid);\n+  grid.querySelectorAll(\"[data-case-open]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-open\"));\n+      document.getElementById(\"case-studies\")?.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n+    });\n+  });\n+}\n+\n+function renderCaseStudySelector() {\n+  const selector = document.getElementById(\"caseStudySelector\");\n+  if (!selector) return;\n+\n+  selector.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <button class=\"selector-button\" type=\"button\" role=\"tab\" aria-selected=\"${study.id === state.activeCaseId}\" data-case-select=\"${study.id}\">\n+          ${study.title}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  selector.querySelectorAll(\"[data-case-select]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-select\"));\n+    });\n+  });\n+}\n+\n+function setActiveCaseStudy(caseId) {\n+  if (!caseStudies.some((study) => study.id === caseId)) return;\n+  state.activeCaseId = caseId;\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+}\n+\n+function renderActiveCaseStudy() {\n+  const container = document.getElementById(\"caseStudyDetail\");\n+  const study = getActiveCaseStudy();\n+  if (!container || !study) return;\n+\n+  container.innerHTML = `\n+    <div class=\"panel case-detail__panel\">\n+      <div class=\"detail-top\">\n+        <div class=\"detail-heading\">\n+          <p class=\"eyebrow eyebrow--small\">Active case study</p>\n+          <h3>${study.title}</h3>\n+          <p class=\"detail-subtitle\">${study.subtitle}</p>\n+          <ul class=\"detail-tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <div class=\"detail-meta\">\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Category</span>\n+              <span class=\"detail-meta__value\">${study.category}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Version range</span>\n+              <span class=\"detail-meta__value\">${study.versionRange}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Focus</span>\n+              <span class=\"detail-meta__value\">${study.summary}</span>\n+            </div>\n+          </div>\n+        </div>\n+        <div class=\"media-shell media-shell--wide\" data-src=\"${study.finalSelection.image.src}\" data-alt=\"${study.finalSelection.image.alt}\" data-label=\"${study.finalSelection.image.label}\"></div>\n+      </div>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Intent</h4>\n+        <p>${study.intent}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Prompt Evolution</h4>\n+        <div class=\"prompt-grid\">\n+          ${study.promptVersions\n+            .map(\n+              (prompt) => `\n+                <article class=\"prompt-card\">\n+                  <span class=\"prompt-card__label\">${prompt.label}</span>\n+                  <h4>Prompt version</h4>\n+                  <p class=\"prompt-card__text\">${prompt.promptText}</p>\n+                  <p class=\"prompt-card__note\">${prompt.note}</p>\n+                  <div class=\"media-shell\" data-src=\"${prompt.screenshot.src}\" data-alt=\"${prompt.screenshot.alt}\" data-label=\"${prompt.screenshot.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Output Iterations</h4>\n+        <div class=\"iteration-grid\">\n+          ${study.iterationImages\n+            .map(\n+              (image) => `\n+                <article class=\"iteration-card\">\n+                  <span class=\"prompt-card__label\">${image.label}</span>\n+                  <h4>${image.caption}</h4>\n+                  <div class=\"media-shell\" data-src=\"${image.src}\" data-alt=\"${image.alt}\" data-label=\"Insert version output here\"></div>\n+                  <p>${image.note}</p>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Tool Comparison</h4>\n+        <div class=\"comparison-grid\">\n+          ${study.toolComparisons\n+            .map(\n+              (tool) => `\n+                <article class=\"comparison-card\">\n+                  <span class=\"comparison-card__label\">${tool.tool}</span>\n+                  <h4>${tool.role}</h4>\n+                  <p>${tool.rationale}</p>\n+                  <p><strong>Strengths:</strong> ${tool.strengths}</p>\n+                  <p><strong>Limitations:</strong> ${tool.limitations}</p>\n+                  <div class=\"media-shell\" data-src=\"${tool.image.src}\" data-alt=\"${tool.image.alt}\" data-label=\"${tool.image.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Final Selection</h4>\n+        <p>${study.finalSelection.rationale}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Lessons Learned</h4>\n+        <ul class=\"bullet-list\">${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join(\"\")}</ul>\n+      </section>\n+    </div>\n+  `;\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderAnalysis() {\n+  const container = document.getElementById(\"analysisGrid\");\n+  if (!container) return;\n+  container.innerHTML = analysisInsights\n+    .map(\n+      (insight) => `\n+        <article class=\"panel insight-card\">\n+          <span class=\"insight-card__type\">${insight.type}</span>\n+          <h3>${insight.title}</h3>\n+          <p>${insight.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderProcessStats() {\n+  const container = document.getElementById(\"processStats\");\n+  if (!container) return;\n+  container.innerHTML = processStats\n+    .map(\n+      (stat) => `\n+        <article class=\"stat-card\">\n+          <span class=\"stat-card__value\">${stat.value}</span>\n+          <span class=\"stat-card__label\">${stat.label}</span>\n+          <p class=\"stat-card__note\">${stat.note}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderWorkflowStages() {\n+  const container = document.getElementById(\"workflowGrid\");\n+  if (!container) return;\n+  container.innerHTML = workflowStages\n+    .map(\n+      (stage, index) => `\n+        <article class=\"workflow-card\">\n+          <span class=\"workflow-card__label\">${stage.label}</span>\n+          <div class=\"workflow-card__number\">${index + 1}</div>\n+          <h4>${stage.title}</h4>\n+          <p>${stage.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderTools() {\n+  const container = document.getElementById(\"toolGrid\");\n+  if (!container) return;\n+  container.innerHTML = toolsUsed\n+    .map(\n+      (tool) => `\n+        <article class=\"tool-card\">\n+          <span class=\"tool-card__label\">${tool.label}</span>\n+          <h4>${tool.title}</h4>\n+          <p>${tool.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderArtifacts() {\n+  const container = document.getElementById(\"artifactGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = processArtifacts\n+    .map(\n+      (artifact) => `\n+        <article class=\"artifact-card\">\n+          <span class=\"artifact-card__label\">${artifact.label}</span>\n+          <h4>${artifact.title}</h4>\n+          <p>${artifact.body}</p>\n+          <div class=\"media-shell\" data-src=\"${artifact.media.src}\" data-alt=\"${artifact.media.alt}\" data-label=\"${artifact.media.label}\"></div>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderContributions() {\n+  const container = document.getElementById(\"contributionGrid\");\n+  if (!container) return;\n+  container.innerHTML = contributionCards\n+    .map(\n+      (card) => `\n+        <article class=\"contribution-card\">\n+          <span class=\"contribution-card__label\">${card.label}</span>\n+          <h4>${card.title}</h4>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderReflections() {\n+  const container = document.getElementById(\"reflectionGrid\");\n+  if (!container) return;\n+  container.innerHTML = reflectionCards\n+    .map(\n+      (card) => `\n+        <article class=\"panel reflection-card\">\n+          <span class=\"reflection-card__type\">${card.type}</span>\n+          <h3>${card.title}</h3>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupIterationSlider() {\n+  const slider = document.getElementById(\"iterationSlider\");\n+  const prevButton = document.getElementById(\"iterationPrev\");\n+  const nextButton = document.getElementById(\"iterationNext\");\n+  const sliderStudy = getSliderCaseStudy();\n+  if (!slider || !prevButton || !nextButton || !sliderStudy) return;\n+\n+  slider.max = String(sliderStudy.iterationImages.length - 1);\n+  slider.value = String(state.sliderIndex);\n+\n+  slider.addEventListener(\"input\", () => {\n+    state.sliderIndex = Number(slider.value);\n+    renderIterationSlider();\n+  });\n+\n+  prevButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.max(0, state.sliderIndex - 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  nextButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  renderIterationSlider();\n+}\n+\n+function renderIterationSlider() {\n+  const sliderStudy = getSliderCaseStudy();\n+  const frame = sliderStudy?.iterationImages[state.sliderIndex];\n+  const valueBadge = document.getElementById(\"iterationSliderValue\");\n+  const title = document.getElementById(\"iterationCaptionTitle\");\n+  const text = document.getElementById(\"iterationCaptionText\");\n+  const note = document.getElementById(\"iterationCaptionNote\");\n+  const mediaShell = document.getElementById(\"iterationSliderMedia\");\n+  const markers = document.getElementById(\"iterationMarkers\");\n+  if (!sliderStudy || !frame || !valueBadge || !title || !text || !note || !mediaShell || !markers) return;\n+\n+  valueBadge.textContent = frame.label;\n+  title.textContent = `${sliderStudy.title} ${frame.label}`;\n+  text.textContent = frame.caption;\n+  note.textContent = frame.note;\n+  setMediaShell(mediaShell, { src: frame.src, alt: frame.alt, label: \"Insert version output here\" });\n+\n+  markers.innerHTML = sliderStudy.iterationImages\n+    .map(\n+      (item, index) => `\n+        <span class=\"step-indicator ${index === state.sliderIndex ? \"is-active\" : \"\"}\">\n+          ${item.label}\n+        </span>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupStyleSwitcher() {\n+  const group = document.getElementById(\"styleToggleGroup\");\n+  if (!group) return;\n+\n+  group.innerHTML = interactiveLab.variations\n+    .map(\n+      (variation) => `\n+        <button class=\"toggle-button\" type=\"button\" role=\"tab\" aria-selected=\"${variation.id === state.activeVariationId}\" data-variation=\"${variation.id}\">\n+          ${variation.label}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  group.querySelectorAll(\"[data-variation]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      state.activeVariationId = button.getAttribute(\"data-variation\");\n+      setupStyleSwitcher();\n+      renderStyleVariation();\n+    });\n+  });\n+\n+  renderStyleVariation();\n+}\n+\n+function renderStyleVariation() {\n+  const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);\n+  const title = document.getElementById(\"styleToggleTitle\");\n+  const description = document.getElementById(\"styleToggleDescription\");\n+  const note = document.getElementById(\"styleToggleNote\");\n+  const mediaShell = document.getElementById(\"styleToggleMedia\");\n+  if (!variation || !title || !description || !note || !mediaShell) return;\n+\n+  title.textContent = variation.title;\n+  description.textContent = variation.description;\n+  note.textContent = variation.note;\n+  setMediaShell(mediaShell, { src: variation.media.src, alt: variation.media.alt, label: variation.media.label });\n+}\n+\n+function hydrateMediaShells(root) {\n+  root.querySelectorAll(\".media-shell[data-src]\").forEach((shell) => {\n+    setMediaShell(shell, {\n+      src: shell.dataset.src,\n+      alt: shell.dataset.alt || \"\",\n+      label: shell.dataset.label || \"Insert image here\"\n+    });\n+  });\n+}\n+\n+function setMediaShell(shell, { src, alt, label }) {\n+  if (!shell) return;\n+\n+  shell.innerHTML = \"\";\n+  shell.classList.remove(\"is-loaded\");\n+\n+  const image = document.createElement(\"img\");\n+  image.alt = alt || label;\n+  image.loading = \"lazy\";\n+  image.decoding = \"async\";\n+\n+  const fallback = document.createElement(\"div\");\n+  fallback.className = \"media-fallback\";\n+  fallback.innerHTML = `\n+    <span class=\"media-fallback__eyebrow\">Placeholder Asset</span>\n+    <strong>${label}</strong>\n+    <code>${src || \"Add an asset path\"}</code>\n+  `;\n+\n+  image.addEventListener(\"load\", () => {\n+    shell.classList.add(\"is-loaded\");\n+  });\n+\n+  image.addEventListener(\"error\", () => {\n+    shell.classList.remove(\"is-loaded\");\n+  });\n+\n+  shell.append(image, fallback);\n+  if (src) image.src = src;\n+}\n+\n+function getActiveCaseStudy() {\n+  return caseStudies.find((study) => study.id === state.activeCaseId);\n+}\n+\n+function getSliderCaseStudy() {\n+  return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);\n+}\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_2QFStZUSAJOgJ9UJr3CjEtPk</summary>

```text
execution error: Io(Custom { kind: Other, error: "windows sandbox: runner error: CreateProcessAsUserW failed: 206" })
```

</details>

<details>
<summary>Tool call: apply_patch (call_IItgddskBVnbYT8Klzaxl8Wb)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_IItgddskBVnbYT8Klzaxl8Wb","name":"apply_patch","input":"*** Begin Patch\n*** Add File: script.js\n+const media = (src, alt, label) => ({ src, alt, label });\n+\n+const caseStudies = [\n+  {\n+    id: \"signal-bloom\",\n+    title: \"Signal Bloom Poster Suite\",\n+    subtitle: \"From atmosphere-first art to a cleaner poster identity\",\n+    category: \"Prompt Evolution\",\n+    versionRange: \"v1 to v5\",\n+    summary: \"Shows how a poster series moved from moody but unfocused outputs into a more directed layout-ready system.\",\n+    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Signal Bloom thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n+    intent: \"Editable intent scaffold: explain the brief, audience, and what the team expected the first image round to solve.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 brief\",\n+        promptText: \"[Replace with original prompt] Broad first prompt focused on subject, tone, and spectacle.\",\n+        note: \"Why it changed: strong mood, weak structure.\",\n+        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Signal Bloom prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add composition, palette, and layout guidance for poster use.\",\n+        note: \"Why it changed: aimed for cleaner hierarchy and usable negative space.\",\n+        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Signal Bloom prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case1/v1-placeholder.jpg\",\n+        alt: \"Signal Bloom version 1 placeholder\",\n+        caption: \"Initial pass emphasized light bloom and mood over structure.\",\n+        note: \"Editable note: record the first promising qualities.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case1/v2-placeholder.jpg\",\n+        alt: \"Signal Bloom version 2 placeholder\",\n+        caption: \"Prompt tuning tightened the palette and central focus.\",\n+        note: \"Editable note: explain what improved after revision.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case1/v3-placeholder.jpg\",\n+        alt: \"Signal Bloom version 3 placeholder\",\n+        caption: \"Mid-stage output tested contrast and silhouette clarity.\",\n+        note: \"Editable note: describe what still felt unresolved.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case1/v4-placeholder.jpg\",\n+        alt: \"Signal Bloom version 4 placeholder\",\n+        caption: \"Later version balanced atmosphere with readability.\",\n+        note: \"Editable note: connect this version to final selection logic.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case1/v5-placeholder.jpg\",\n+        alt: \"Signal Bloom version 5 placeholder\",\n+        caption: \"Final candidate blended drama with layout readiness.\",\n+        note: \"Editable note: compare selected and rejected options.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Fast mood exploration\",\n+        rationale: \"Editable rationale: explain why this tool was useful early.\",\n+        strengths: \"Generated lighting and texture quickly.\",\n+        limitations: \"Needed tighter prompt control for cleaner layouts.\",\n+        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Signal Bloom tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Refinement testing\",\n+        rationale: \"Editable rationale: explain where a second tool gave more control.\",\n+        strengths: \"More dependable composition and subject emphasis.\",\n+        limitations: \"Could lose some of the expressive atmosphere.\",\n+        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Signal Bloom tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Signal Bloom final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: summarize why this version best matched the brief.\"\n+    },\n+    lessonsLearned: [\n+      \"Specific composition language improved consistency.\",\n+      \"AI generated mood quickly, but curation still mattered.\",\n+      \"Late changes worked best when they solved one clear issue.\"\n+    ]\n+  }\n+];\n+\n+const analysisInsights = [\n+  { type: \"Editable insight scaffold\", title: \"What consistently worked\", body: \"Use this card for evidence-backed patterns about composition, palette control, or prompt specificity.\" },\n+  { type: \"Editable insight scaffold\", title: \"What repeatedly failed\", body: \"Summarize recurring weak points such as unstable typography, drift, or inconsistent perspective.\" },\n+  { type: \"Editable insight scaffold\", title: \"Prompt patterns that improved results\", body: \"Document useful phrasing patterns such as camera angle, lighting, texture, and layout intent.\" },\n+  { type: \"Editable insight scaffold\", title: \"AI as collaborator vs. AI as tool\", body: \"Compare moments where AI felt surprising and generative versus moments where it behaved more like a drafting utility.\" }\n+];\n+\n+const processStats = [\n+  { value: \"4\", label: \"Case studies scaffolded\", note: \"Add or remove case studies directly in script.js.\" },\n+  { value: \"20+\", label: \"Iteration slots prepared\", note: \"Each slot points to a clear placeholder path.\" },\n+  { value: \"2\", label: \"Interactive process modules\", note: \"Slider and style switcher are already functional.\" },\n+  { value: \"100%\", label: \"Frontend-only deployment ready\", note: \"No backend, secrets, or build tooling required.\" }\n+];\n+\n+const workflowStages = [\n+  { label: \"Stage 1\", title: \"Concept framing\", body: \"Define the goal, audience, references, and what AI should help generate.\" },\n+  { label: \"Stage 2\", title: \"Prompt drafting\", body: \"Document first prompts, tool choice, and initial assumptions.\" },\n+  { label: \"Stage 3\", title: \"Iteration and comparison\", body: \"Track revisions, version changes, and tool tradeoffs.\" },\n+  { label: \"Stage 4\", title: \"Selection and reflection\", body: \"Summarize final picks, curation logic, and what the team learned.\" }\n+];\n+\n+const toolsUsed = [\n+  { label: \"Tool placeholder\", title: \"Primary image generator\", body: \"Replace with the actual tool name and explain what it was best at.\" },\n+  { label: \"Tool placeholder\", title: \"Secondary variation tool\", body: \"Replace with the actual tool name and explain where it produced better alternatives.\" },\n+  { label: \"Support tool placeholder\", title: \"Editing or curation support\", body: \"Document any software used for cleanup, layout, or screenshot capture.\" },\n+  { label: \"Documentation placeholder\", title: \"Process capture method\", body: \"Explain how prompt records, screenshots, or folder naming stayed organized.\" }\n+];\n+\n+const processArtifacts = [\n+  {\n+    label: \"Prompt evidence set A\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg\",\n+    media: media(\"assets/images/shared/prompt-shot-a-placeholder.jpg\", \"Prompt evidence placeholder A\", \"Insert prompt screenshot here\")\n+  },\n+  {\n+    label: \"Prompt evidence set B\",\n+    title: \"Insert prompt screenshots here\",\n+    body: \"Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg\",\n+    media: media(\"assets/images/shared/prompt-shot-b-placeholder.jpg\", \"Prompt evidence placeholder B\", \"Insert prompt screenshot here\")\n+  },\n+  {\n+    label: \"Workflow evidence set\",\n+    title: \"Insert workflow or comparison screenshot here\",\n+    body: \"Recommended path: assets/images/shared/workflow-board-placeholder.jpg\",\n+    media: media(\"assets/images/shared/workflow-board-placeholder.jpg\", \"Workflow evidence placeholder\", \"Insert workflow screenshot here\")\n+  },\n+  {\n+    label: \"Rationale evidence set\",\n+    title: \"Insert tool rationale screenshot here\",\n+    body: \"Recommended path: assets/images/shared/tool-rationale-placeholder.jpg\",\n+    media: media(\"assets/images/shared/tool-rationale-placeholder.jpg\", \"Tool rationale evidence placeholder\", \"Insert tool rationale screenshot here\")\n+  }\n+];\n+\n+const contributionCards = [\n+  { label: \"Editable team role\", title: \"Research and references\", body: \"Add the teammate name, references gathered, and how that research influenced prompts.\" },\n+  { label: \"Editable team role\", title: \"Prompt engineering\", body: \"Add the teammate name, which prompts they developed, and what revisions improved results.\" },\n+  { label: \"Editable team role\", title: \"Selection and analysis\", body: \"Add the teammate name and the criteria they used to judge outputs.\" },\n+  { label: \"Editable team role\", title: \"Website assembly and QA\", body: \"Add the teammate name and their role in build polish, organization, and review.\" }\n+];\n+\n+const reflectionCards = [\n+  { type: \"Reflection scaffold\", title: \"Team vision\", body: \"Summarize what the group hoped to demonstrate about AI-assisted creativity.\" },\n+  { type: \"Reflection scaffold\", title: \"AI strengths\", body: \"Note where AI accelerated ideation or revealed unexpected directions.\" },\n+  { type: \"Reflection scaffold\", title: \"AI weaknesses\", body: \"Capture recurring issues such as inconsistency, weak typography, or prompt sensitivity.\" },\n+  { type: \"Reflection scaffold\", title: \"Vibe coding takeaways\", body: \"Discuss what it felt like to build with fast iteration and AI-assisted experimentation.\" },\n+  { type: \"Reflection scaffold\", title: \"Team dynamics\", body: \"Describe how roles were shared and where collaboration helped the process.\" },\n+  { type: \"Reflection scaffold\", title: \"Closing insight\", body: \"Reserve this card for the final takeaway that ties together design, experimentation, and limitation.\" }\n+];\n+\n+const interactiveLab = {\n+  sliderCaseId: \"signal-bloom\",\n+  variations: [\n+    {\n+      id: \"cinematic\",\n+      label: \"Cinematic\",\n+      title: \"Cinematic direction\",\n+      description: \"Use this version to show how dramatic lighting and lens language changed the same base brief.\",\n+      note: \"Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-cinematic-placeholder.jpg\", \"Cinematic style variation placeholder\", \"Insert cinematic style variation here\")\n+    },\n+    {\n+      id: \"editorial\",\n+      label: \"Editorial\",\n+      title: \"Editorial direction\",\n+      description: \"Use this version to show how a cleaner, magazine-inspired prompt changed composition and readability.\",\n+      note: \"Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-editorial-placeholder.jpg\", \"Editorial style variation placeholder\", \"Insert editorial style variation here\")\n+    },\n+    {\n+      id: \"speculative\",\n+      label: \"Speculative\",\n+      title: \"Speculative direction\",\n+      description: \"Use this version to show what happened when the same subject was pushed toward a more abstract outcome.\",\n+      note: \"Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg\",\n+      media: media(\"assets/images/shared/style-speculative-placeholder.jpg\", \"Speculative style variation placeholder\", \"Insert speculative style variation here\")\n+    }\n+  ]\n+};\n+\n+const state = {\n+  activeCaseId: caseStudies[0].id,\n+  sliderIndex: 0,\n+  activeVariationId: interactiveLab.variations[0].id\n+};\n+\n+document.addEventListener(\"DOMContentLoaded\", () => {\n+  setupNavigation();\n+  hydrateMediaShells(document);\n+  renderCaseStudyGrid();\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+  renderAnalysis();\n+  renderProcessStats();\n+  renderWorkflowStages();\n+  renderTools();\n+  renderArtifacts();\n+  renderContributions();\n+  renderReflections();\n+  setupIterationSlider();\n+  setupStyleSwitcher();\n+});\n+\n+function setupNavigation() {\n+  const header = document.querySelector(\".site-header\");\n+  const toggle = document.querySelector(\".menu-toggle\");\n+  const navLinks = document.querySelectorAll(\".site-nav a\");\n+  if (!header || !toggle) return;\n+\n+  toggle.addEventListener(\"click\", () => {\n+    const expanded = toggle.getAttribute(\"aria-expanded\") === \"true\";\n+    toggle.setAttribute(\"aria-expanded\", String(!expanded));\n+    header.classList.toggle(\"is-open\", !expanded);\n+  });\n+\n+  navLinks.forEach((link) => {\n+    link.addEventListener(\"click\", () => {\n+      toggle.setAttribute(\"aria-expanded\", \"false\");\n+      header.classList.remove(\"is-open\");\n+    });\n+  });\n+}\n+\n+function renderCaseStudyGrid() {\n+  const grid = document.getElementById(\"caseStudyGrid\");\n+  if (!grid) return;\n+\n+  grid.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <article class=\"panel case-card\">\n+          <div class=\"media-shell\" data-src=\"${study.thumbnail.src}\" data-alt=\"${study.thumbnail.alt}\" data-label=\"${study.thumbnail.label}\"></div>\n+          <div class=\"case-card__header\">\n+            <div>\n+              <span class=\"case-card__category\">${study.category}</span>\n+              <h3>${study.title}</h3>\n+            </div>\n+            <span class=\"case-card__range\">${study.versionRange}</span>\n+          </div>\n+          <p>${study.summary}</p>\n+          <ul class=\"tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <button class=\"case-card__action\" type=\"button\" data-case-open=\"${study.id}\">Open detailed case study</button>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(grid);\n+  grid.querySelectorAll(\"[data-case-open]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-open\"));\n+      document.getElementById(\"case-studies\")?.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n+    });\n+  });\n+}\n+\n+function renderCaseStudySelector() {\n+  const selector = document.getElementById(\"caseStudySelector\");\n+  if (!selector) return;\n+\n+  selector.innerHTML = caseStudies\n+    .map(\n+      (study) => `\n+        <button class=\"selector-button\" type=\"button\" role=\"tab\" aria-selected=\"${study.id === state.activeCaseId}\" data-case-select=\"${study.id}\">\n+          ${study.title}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  selector.querySelectorAll(\"[data-case-select]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      setActiveCaseStudy(button.getAttribute(\"data-case-select\"));\n+    });\n+  });\n+}\n+\n+function setActiveCaseStudy(caseId) {\n+  if (!caseStudies.some((study) => study.id === caseId)) return;\n+  state.activeCaseId = caseId;\n+  renderCaseStudySelector();\n+  renderActiveCaseStudy();\n+}\n+\n+function renderActiveCaseStudy() {\n+  const container = document.getElementById(\"caseStudyDetail\");\n+  const study = getActiveCaseStudy();\n+  if (!container || !study) return;\n+\n+  container.innerHTML = `\n+    <div class=\"panel case-detail__panel\">\n+      <div class=\"detail-top\">\n+        <div class=\"detail-heading\">\n+          <p class=\"eyebrow eyebrow--small\">Active case study</p>\n+          <h3>${study.title}</h3>\n+          <p class=\"detail-subtitle\">${study.subtitle}</p>\n+          <ul class=\"detail-tag-list\">${study.tags.map((tag) => `<li>${tag}</li>`).join(\"\")}</ul>\n+          <div class=\"detail-meta\">\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Category</span>\n+              <span class=\"detail-meta__value\">${study.category}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Version range</span>\n+              <span class=\"detail-meta__value\">${study.versionRange}</span>\n+            </div>\n+            <div class=\"detail-meta__card\">\n+              <span class=\"detail-meta__label\">Focus</span>\n+              <span class=\"detail-meta__value\">${study.summary}</span>\n+            </div>\n+          </div>\n+        </div>\n+        <div class=\"media-shell media-shell--wide\" data-src=\"${study.finalSelection.image.src}\" data-alt=\"${study.finalSelection.image.alt}\" data-label=\"${study.finalSelection.image.label}\"></div>\n+      </div>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Intent</h4>\n+        <p>${study.intent}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Prompt Evolution</h4>\n+        <div class=\"prompt-grid\">\n+          ${study.promptVersions\n+            .map(\n+              (prompt) => `\n+                <article class=\"prompt-card\">\n+                  <span class=\"prompt-card__label\">${prompt.label}</span>\n+                  <h4>Prompt version</h4>\n+                  <p class=\"prompt-card__text\">${prompt.promptText}</p>\n+                  <p class=\"prompt-card__note\">${prompt.note}</p>\n+                  <div class=\"media-shell\" data-src=\"${prompt.screenshot.src}\" data-alt=\"${prompt.screenshot.alt}\" data-label=\"${prompt.screenshot.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Output Iterations</h4>\n+        <div class=\"iteration-grid\">\n+          ${study.iterationImages\n+            .map(\n+              (image) => `\n+                <article class=\"iteration-card\">\n+                  <span class=\"prompt-card__label\">${image.label}</span>\n+                  <h4>${image.caption}</h4>\n+                  <div class=\"media-shell\" data-src=\"${image.src}\" data-alt=\"${image.alt}\" data-label=\"Insert version output here\"></div>\n+                  <p>${image.note}</p>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Tool Comparison</h4>\n+        <div class=\"comparison-grid\">\n+          ${study.toolComparisons\n+            .map(\n+              (tool) => `\n+                <article class=\"comparison-card\">\n+                  <span class=\"comparison-card__label\">${tool.tool}</span>\n+                  <h4>${tool.role}</h4>\n+                  <p>${tool.rationale}</p>\n+                  <p><strong>Strengths:</strong> ${tool.strengths}</p>\n+                  <p><strong>Limitations:</strong> ${tool.limitations}</p>\n+                  <div class=\"media-shell\" data-src=\"${tool.image.src}\" data-alt=\"${tool.image.alt}\" data-label=\"${tool.image.label}\"></div>\n+                </article>\n+              `\n+            )\n+            .join(\"\")}\n+        </div>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Final Selection</h4>\n+        <p>${study.finalSelection.rationale}</p>\n+      </section>\n+\n+      <section class=\"detail-block\">\n+        <h4 class=\"detail-block__title\">Lessons Learned</h4>\n+        <ul class=\"bullet-list\">${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join(\"\")}</ul>\n+      </section>\n+    </div>\n+  `;\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderAnalysis() {\n+  const container = document.getElementById(\"analysisGrid\");\n+  if (!container) return;\n+  container.innerHTML = analysisInsights\n+    .map(\n+      (insight) => `\n+        <article class=\"panel insight-card\">\n+          <span class=\"insight-card__type\">${insight.type}</span>\n+          <h3>${insight.title}</h3>\n+          <p>${insight.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderProcessStats() {\n+  const container = document.getElementById(\"processStats\");\n+  if (!container) return;\n+  container.innerHTML = processStats\n+    .map(\n+      (stat) => `\n+        <article class=\"stat-card\">\n+          <span class=\"stat-card__value\">${stat.value}</span>\n+          <span class=\"stat-card__label\">${stat.label}</span>\n+          <p class=\"stat-card__note\">${stat.note}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderWorkflowStages() {\n+  const container = document.getElementById(\"workflowGrid\");\n+  if (!container) return;\n+  container.innerHTML = workflowStages\n+    .map(\n+      (stage, index) => `\n+        <article class=\"workflow-card\">\n+          <span class=\"workflow-card__label\">${stage.label}</span>\n+          <div class=\"workflow-card__number\">${index + 1}</div>\n+          <h4>${stage.title}</h4>\n+          <p>${stage.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderTools() {\n+  const container = document.getElementById(\"toolGrid\");\n+  if (!container) return;\n+  container.innerHTML = toolsUsed\n+    .map(\n+      (tool) => `\n+        <article class=\"tool-card\">\n+          <span class=\"tool-card__label\">${tool.label}</span>\n+          <h4>${tool.title}</h4>\n+          <p>${tool.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderArtifacts() {\n+  const container = document.getElementById(\"artifactGrid\");\n+  if (!container) return;\n+\n+  container.innerHTML = processArtifacts\n+    .map(\n+      (artifact) => `\n+        <article class=\"artifact-card\">\n+          <span class=\"artifact-card__label\">${artifact.label}</span>\n+          <h4>${artifact.title}</h4>\n+          <p>${artifact.body}</p>\n+          <div class=\"media-shell\" data-src=\"${artifact.media.src}\" data-alt=\"${artifact.media.alt}\" data-label=\"${artifact.media.label}\"></div>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+\n+  hydrateMediaShells(container);\n+}\n+\n+function renderContributions() {\n+  const container = document.getElementById(\"contributionGrid\");\n+  if (!container) return;\n+  container.innerHTML = contributionCards\n+    .map(\n+      (card) => `\n+        <article class=\"contribution-card\">\n+          <span class=\"contribution-card__label\">${card.label}</span>\n+          <h4>${card.title}</h4>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function renderReflections() {\n+  const container = document.getElementById(\"reflectionGrid\");\n+  if (!container) return;\n+  container.innerHTML = reflectionCards\n+    .map(\n+      (card) => `\n+        <article class=\"panel reflection-card\">\n+          <span class=\"reflection-card__type\">${card.type}</span>\n+          <h3>${card.title}</h3>\n+          <p>${card.body}</p>\n+        </article>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupIterationSlider() {\n+  const slider = document.getElementById(\"iterationSlider\");\n+  const prevButton = document.getElementById(\"iterationPrev\");\n+  const nextButton = document.getElementById(\"iterationNext\");\n+  const sliderStudy = getSliderCaseStudy();\n+  if (!slider || !prevButton || !nextButton || !sliderStudy) return;\n+\n+  slider.max = String(sliderStudy.iterationImages.length - 1);\n+  slider.value = String(state.sliderIndex);\n+\n+  slider.addEventListener(\"input\", () => {\n+    state.sliderIndex = Number(slider.value);\n+    renderIterationSlider();\n+  });\n+\n+  prevButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.max(0, state.sliderIndex - 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  nextButton.addEventListener(\"click\", () => {\n+    state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);\n+    slider.value = String(state.sliderIndex);\n+    renderIterationSlider();\n+  });\n+\n+  renderIterationSlider();\n+}\n+\n+function renderIterationSlider() {\n+  const sliderStudy = getSliderCaseStudy();\n+  const frame = sliderStudy?.iterationImages[state.sliderIndex];\n+  const valueBadge = document.getElementById(\"iterationSliderValue\");\n+  const title = document.getElementById(\"iterationCaptionTitle\");\n+  const text = document.getElementById(\"iterationCaptionText\");\n+  const note = document.getElementById(\"iterationCaptionNote\");\n+  const mediaShell = document.getElementById(\"iterationSliderMedia\");\n+  const markers = document.getElementById(\"iterationMarkers\");\n+  if (!sliderStudy || !frame || !valueBadge || !title || !text || !note || !mediaShell || !markers) return;\n+\n+  valueBadge.textContent = frame.label;\n+  title.textContent = `${sliderStudy.title} ${frame.label}`;\n+  text.textContent = frame.caption;\n+  note.textContent = frame.note;\n+  setMediaShell(mediaShell, { src: frame.src, alt: frame.alt, label: \"Insert version output here\" });\n+\n+  markers.innerHTML = sliderStudy.iterationImages\n+    .map(\n+      (item, index) => `\n+        <span class=\"step-indicator ${index === state.sliderIndex ? \"is-active\" : \"\"}\">\n+          ${item.label}\n+        </span>\n+      `\n+    )\n+    .join(\"\");\n+}\n+\n+function setupStyleSwitcher() {\n+  const group = document.getElementById(\"styleToggleGroup\");\n+  if (!group) return;\n+\n+  group.innerHTML = interactiveLab.variations\n+    .map(\n+      (variation) => `\n+        <button class=\"toggle-button\" type=\"button\" role=\"tab\" aria-selected=\"${variation.id === state.activeVariationId}\" data-variation=\"${variation.id}\">\n+          ${variation.label}\n+        </button>\n+      `\n+    )\n+    .join(\"\");\n+\n+  group.querySelectorAll(\"[data-variation]\").forEach((button) => {\n+    button.addEventListener(\"click\", () => {\n+      state.activeVariationId = button.getAttribute(\"data-variation\");\n+      setupStyleSwitcher();\n+      renderStyleVariation();\n+    });\n+  });\n+\n+  renderStyleVariation();\n+}\n+\n+function renderStyleVariation() {\n+  const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);\n+  const title = document.getElementById(\"styleToggleTitle\");\n+  const description = document.getElementById(\"styleToggleDescription\");\n+  const note = document.getElementById(\"styleToggleNote\");\n+  const mediaShell = document.getElementById(\"styleToggleMedia\");\n+  if (!variation || !title || !description || !note || !mediaShell) return;\n+\n+  title.textContent = variation.title;\n+  description.textContent = variation.description;\n+  note.textContent = variation.note;\n+  setMediaShell(mediaShell, { src: variation.media.src, alt: variation.media.alt, label: variation.media.label });\n+}\n+\n+function hydrateMediaShells(root) {\n+  root.querySelectorAll(\".media-shell[data-src]\").forEach((shell) => {\n+    setMediaShell(shell, {\n+      src: shell.dataset.src,\n+      alt: shell.dataset.alt || \"\",\n+      label: shell.dataset.label || \"Insert image here\"\n+    });\n+  });\n+}\n+\n+function setMediaShell(shell, { src, alt, label }) {\n+  if (!shell) return;\n+\n+  shell.innerHTML = \"\";\n+  shell.classList.remove(\"is-loaded\");\n+\n+  const image = document.createElement(\"img\");\n+  image.alt = alt || label;\n+  image.loading = \"lazy\";\n+  image.decoding = \"async\";\n+\n+  const fallback = document.createElement(\"div\");\n+  fallback.className = \"media-fallback\";\n+  fallback.innerHTML = `\n+    <span class=\"media-fallback__eyebrow\">Placeholder Asset</span>\n+    <strong>${label}</strong>\n+    <code>${src || \"Add an asset path\"}</code>\n+  `;\n+\n+  image.addEventListener(\"load\", () => {\n+    shell.classList.add(\"is-loaded\");\n+  });\n+\n+  image.addEventListener(\"error\", () => {\n+    shell.classList.remove(\"is-loaded\");\n+  });\n+\n+  shell.append(image, fallback);\n+  if (src) image.src = src;\n+}\n+\n+function getActiveCaseStudy() {\n+  return caseStudies.find((study) => study.id === state.activeCaseId);\n+}\n+\n+function getSliderCaseStudy() {\n+  return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);\n+}\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_IItgddskBVnbYT8Klzaxl8Wb</summary>

```text
{"output":"Success. Updated the following files:\nA script.js\n","metadata":{"exit_code":0,"duration_seconds":0.5}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_xsiNHotqJn3jouLhpvaPijIB)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_xsiNHotqJn3jouLhpvaPijIB","name":"apply_patch","input":"*** Begin Patch\n*** Update File: script.js\n@@\n   {\n     id: \"signal-bloom\",\n@@\n     lessonsLearned: [\n       \"Specific composition language improved consistency.\",\n       \"AI generated mood quickly, but curation still mattered.\",\n       \"Late changes worked best when they solved one clear issue.\"\n     ]\n+  },\n+  {\n+    id: \"museum-dreamscape\",\n+    title: \"Museum Dreamscape Key Art\",\n+    subtitle: \"Testing surreal imagery inside a curated exhibit identity\",\n+    category: \"Tool Comparison\",\n+    versionRange: \"v1 to v4\",\n+    summary: \"Compares prompt phrasing and tool behavior for a museum poster that needed both intrigue and clarity.\",\n+    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Museum Dreamscape thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n+    intent: \"Editable intent scaffold: describe the campaign concept, target mood, and what success looked like.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Start with spectacle, mood, and broad exhibit energy.\",\n+        note: \"Why it changed: too abstract for a polished exhibit poster.\",\n+        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Museum Dreamscape prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add gallery context, material cues, and controlled surreal details.\",\n+        note: \"Why it changed: moved from idea generation toward art direction.\",\n+        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Museum Dreamscape prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case2/v1-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 1 placeholder\",\n+        caption: \"First pass delivered spectacle but limited restraint.\",\n+        note: \"Editable note: call out the exciting but impractical parts.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case2/v2-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 2 placeholder\",\n+        caption: \"Refinement made the scene feel more exhibition-ready.\",\n+        note: \"Editable note: explain what became more coherent.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case2/v3-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 3 placeholder\",\n+        caption: \"Selective constraints improved palette and hierarchy.\",\n+        note: \"Editable note: show how prompt wording changed the result.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case2/v4-placeholder.jpg\",\n+        alt: \"Museum Dreamscape version 4 placeholder\",\n+        caption: \"Final candidate balanced intrigue and communication.\",\n+        note: \"Editable note: explain why this version won.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"High-concept exploration\",\n+        rationale: \"Editable rationale: note how this tool pushed surreal concepts quickly.\",\n+        strengths: \"Strong at atmosphere and surprise.\",\n+        limitations: \"Less stable when the team needed repeatable framing.\",\n+        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Museum Dreamscape tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Controlled refinement\",\n+        rationale: \"Editable rationale: explain how this tool supported polish and structure.\",\n+        strengths: \"Cleaner subject emphasis and steadier composition.\",\n+        limitations: \"Could feel safer than the exploratory option.\",\n+        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Museum Dreamscape tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Museum Dreamscape final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: describe why this output best fit the exhibit identity.\"\n+    },\n+    lessonsLearned: [\n+      \"Tool switching worked best when the problem was clearly defined.\",\n+      \"Surreal prompts improved when space and lighting were constrained.\",\n+      \"The strongest result was the most communicative, not the noisiest.\"\n+    ]\n+  },\n+  {\n+    id: \"modular-motion\",\n+    title: \"Modular Motion Sneaker Board\",\n+    subtitle: \"Product storytelling through materials, camera direction, and style transfer\",\n+    category: \"Style Transfer\",\n+    versionRange: \"v1 to v5\",\n+    summary: \"Explores how product scenes changed as the team adjusted style references, material prompts, and presentation context.\",\n+    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Modular Motion thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n+    intent: \"Editable intent scaffold: define the product concept, intended audience, and the cues AI needed to emphasize.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Broad product concept with material ideas and energy cues.\",\n+        note: \"Why it changed: the output needed better camera control and stronger presentation.\",\n+        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Modular Motion prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add editorial photo language, finish notes, and motion-inspired framing.\",\n+        note: \"Why it changed: aimed for a concept board rather than a generic mockup.\",\n+        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Modular Motion prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case3/v1-placeholder.jpg\",\n+        alt: \"Modular Motion version 1 placeholder\",\n+        caption: \"Initial renders suggested materials but lacked a memorable frame.\",\n+        note: \"Editable note: describe where the first output felt generic.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case3/v2-placeholder.jpg\",\n+        alt: \"Modular Motion version 2 placeholder\",\n+        caption: \"Prompt revisions added camera intention and stronger rhythm.\",\n+        note: \"Editable note: note gains in realism or energy.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case3/v3-placeholder.jpg\",\n+        alt: \"Modular Motion version 3 placeholder\",\n+        caption: \"Style references pushed the result toward an editorial look.\",\n+        note: \"Editable note: compare realism and concept-art appeal.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case3/v4-placeholder.jpg\",\n+        alt: \"Modular Motion version 4 placeholder\",\n+        caption: \"Later versions tested cleaner backgrounds and more layout room.\",\n+        note: \"Editable note: explain why practical layout space mattered.\"\n+      },\n+      {\n+        label: \"v5\",\n+        src: \"assets/images/case3/v5-placeholder.jpg\",\n+        alt: \"Modular Motion version 5 placeholder\",\n+        caption: \"Final candidate integrated clarity, energy, and brand feel.\",\n+        note: \"Editable note: connect the winner to the project brief.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Stylized concept generation\",\n+        rationale: \"Editable rationale: explain which tool created the boldest shapes and moods.\",\n+        strengths: \"Produced expressive silhouettes and lighting quickly.\",\n+        limitations: \"Sometimes drifted away from the product intent.\",\n+        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Modular Motion tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Product-focused refinement\",\n+        rationale: \"Editable rationale: explain how the second tool preserved readability.\",\n+        strengths: \"Better at keeping the object central and legible.\",\n+        limitations: \"Less surprising than the exploratory tool.\",\n+        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Modular Motion tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Modular Motion final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain how the chosen version balanced concept appeal and clarity.\"\n+    },\n+    lessonsLearned: [\n+      \"Material language improved when finish and lighting were paired.\",\n+      \"AI could stage products well, but brand clarity still needed human judgment.\",\n+      \"Selection improved when novelty was judged against communication goals.\"\n+    ]\n   }\n ];\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_xsiNHotqJn3jouLhpvaPijIB</summary>

```text
{"output":"Success. Updated the following files:\nM script.js\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_vbvEAO7DcIk7OB7GNXBap4qI)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_vbvEAO7DcIk7OB7GNXBap4qI","name":"apply_patch","input":"*** Begin Patch\n*** Update File: script.js\n@@\n   {\n     id: \"modular-motion\",\n@@\n     lessonsLearned: [\n       \"Material language improved when finish and lighting were paired.\",\n       \"AI could stage products well, but brand clarity still needed human judgment.\",\n       \"Selection improved when novelty was judged against communication goals.\"\n     ]\n+  },\n+  {\n+    id: \"neon-flora\",\n+    title: \"Neon Flora Album Cover System\",\n+    subtitle: \"Building a repeatable cover style through prompt patterning\",\n+    category: \"Series Development\",\n+    versionRange: \"v1 to v4\",\n+    summary: \"Documents a music-oriented identity system where the team tested consistency, variation, and the limits of AI as collaborator.\",\n+    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Neon Flora thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n+    intent: \"Editable intent scaffold: explain the identity goal and why consistency mattered across multiple covers.\",\n+    promptVersions: [\n+      {\n+        label: \"v1 prompt\",\n+        promptText: \"[Replace with original prompt] Style-driven prompt with color, subject, and mood anchors.\",\n+        note: \"Why it changed: strong individually, weak as a repeatable system.\",\n+        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Neon Flora prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+      },\n+      {\n+        label: \"v2 revision\",\n+        promptText: \"[Replace with revised prompt] Add recurring motifs, palette rules, and layout guidance for a multi-cover set.\",\n+        note: \"Why it changed: focused on system-building instead of one-off images.\",\n+        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Neon Flora prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+      }\n+    ],\n+    iterationImages: [\n+      {\n+        label: \"v1\",\n+        src: \"assets/images/case4/v1-placeholder.jpg\",\n+        alt: \"Neon Flora version 1 placeholder\",\n+        caption: \"First pass delivered style without repeatable structure.\",\n+        note: \"Editable note: identify what worked only in isolation.\"\n+      },\n+      {\n+        label: \"v2\",\n+        src: \"assets/images/case4/v2-placeholder.jpg\",\n+        alt: \"Neon Flora version 2 placeholder\",\n+        caption: \"Refinement added clearer palette rules and recurring motifs.\",\n+        note: \"Editable note: explain which prompt rules improved consistency.\"\n+      },\n+      {\n+        label: \"v3\",\n+        src: \"assets/images/case4/v3-placeholder.jpg\",\n+        alt: \"Neon Flora version 3 placeholder\",\n+        caption: \"Later outputs became easier to curate into a set.\",\n+        note: \"Editable note: mention how selection criteria changed.\"\n+      },\n+      {\n+        label: \"v4\",\n+        src: \"assets/images/case4/v4-placeholder.jpg\",\n+        alt: \"Neon Flora version 4 placeholder\",\n+        caption: \"Final candidate balanced identity, variation, and polish.\",\n+        note: \"Editable note: describe why this version fit the series best.\"\n+      }\n+    ],\n+    toolComparisons: [\n+      {\n+        tool: \"Tool A placeholder\",\n+        role: \"Motif discovery\",\n+        rationale: \"Editable rationale: explain which tool surfaced the best visual hooks.\",\n+        strengths: \"Helpful for strong motifs and color relationships.\",\n+        limitations: \"Varied too much for a stable series.\",\n+        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Neon Flora tool A placeholder\", \"Insert tool comparison output here\")\n+      },\n+      {\n+        tool: \"Tool B placeholder\",\n+        role: \"Consistency testing\",\n+        rationale: \"Editable rationale: describe how the second tool handled repeated rules.\",\n+        strengths: \"Better at preserving palette and framing anchors.\",\n+        limitations: \"Less visually daring than the exploratory option.\",\n+        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Neon Flora tool B placeholder\", \"Insert second tool comparison output here\")\n+      }\n+    ],\n+    finalSelection: {\n+      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Neon Flora final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: summarize why this output best captured the intended identity system.\"\n+    },\n+    lessonsLearned: [\n+      \"Consistency is a stronger AI test than one impressive image.\",\n+      \"Prompt rules became useful once repeatable anchors were identified.\",\n+      \"AI worked best as a collaborator when success criteria were explicit.\"\n+    ]\n   }\n ];\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_vbvEAO7DcIk7OB7GNXBap4qI</summary>

```text
{"output":"Success. Updated the following files:\nM script.js\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_ASzx3sGuCDe0NSJtSk3KdV8S)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_ASzx3sGuCDe0NSJtSk3KdV8S","name":"apply_patch","input":"*** Begin Patch\n*** Delete File: README.md\n*** Add File: README.md\n+# Prompt to Pixel\n+\n+A submission-ready frontend website for a college team project focused on AI-assisted design, prompt engineering, iteration, and creative process documentation.\n+\n+## Project Overview\n+\n+This project is a polished single-page portfolio website built with plain HTML, CSS, and JavaScript. It is designed to present AI-generated creative work as a process rather than a static gallery. The site emphasizes version history, prompt evolution, tool comparison, final selection logic, and reflection scaffolding.\n+\n+The current codebase is intentionally complete and presentation-ready while still leaving clearly labeled placeholder areas for:\n+\n+- AI-generated images\n+- prompt screenshots\n+- tool comparison screenshots\n+- team member names\n+- final reflection text\n+- final project-specific wording\n+\n+## Features\n+\n+- Responsive single-page layout with anchor navigation\n+- Dark AI-lab visual design with strong typography and polished spacing\n+- Hero section with placeholder hero/logo asset area\n+- About section with editable assignment-aligned copy\n+- Data-driven gallery overview for featured case studies\n+- Detailed case study viewer generated from centralized JavaScript objects\n+- Iteration slider that swaps version visuals and notes dynamically\n+- Style switcher that compares multiple prepared visual directions\n+- Meta analysis section with editable academic/professional scaffold text\n+- Process documentation support with workflow stages, tool rationale, stats, and screenshot placeholders\n+- Reflection support cards for the final team write-up\n+- Graceful missing-image handling so empty asset folders show styled placeholders instead of broken image icons\n+- Ready to zip and submit directly or deploy to GitHub Pages\n+\n+## File Structure\n+\n+```text\n+CSC150-Team-Demo-Website/\n+├── index.html\n+├── styles.css\n+├── script.js\n+├── README.md\n+└── assets/\n+    ├── icons/\n+    └── images/\n+        ├── shared/\n+        ├── case1/\n+        ├── case2/\n+        ├── case3/\n+        ├── case4/\n+        └── case5/\n+```\n+\n+## Setup Instructions\n+\n+1. Download or clone the repository.\n+2. Open `index.html` directly in a browser, or serve the folder with any basic static server if you prefer.\n+3. No install step, package manager, or build command is required.\n+\n+## Customization Guide\n+\n+### Replace placeholder images\n+\n+Put your final exported images into the existing folders inside `assets/images/`.\n+\n+Suggested organization:\n+\n+- `assets/images/shared/` for the logo, hero art, prompt screenshots, and style-switcher assets\n+- `assets/images/case1/` through `assets/images/case4/` for case-study-specific iterations and final outputs\n+\n+The current JavaScript already points to obvious placeholder file names such as:\n+\n+- `assets/images/shared/logo-placeholder.png`\n+- `assets/images/case1/v1-placeholder.jpg`\n+- `assets/images/case2/final-placeholder.jpg`\n+\n+If you keep the same filenames, the site will update automatically as soon as the real images are added. If you use different filenames, update the paths inside `script.js`.\n+\n+### Replace placeholder text\n+\n+Most editable content lives in `script.js`, especially:\n+\n+- case study titles\n+- summaries\n+- prompt versions\n+- iteration notes\n+- tool comparison content\n+- final selection rationale\n+- meta analysis scaffolds\n+- process documentation scaffolds\n+- reflection support cards\n+\n+Static layout copy such as the hero, about section intro, and footer can be edited in `index.html`.\n+\n+### Add or remove case studies\n+\n+Open `script.js` and update the `caseStudies` array.\n+\n+Each case study object includes fields such as:\n+\n+- `id`\n+- `title`\n+- `subtitle`\n+- `category`\n+- `tags`\n+- `intent`\n+- `promptVersions`\n+- `iterationImages`\n+- `toolComparisons`\n+- `finalSelection`\n+- `lessonsLearned`\n+\n+The overview cards and detailed case study viewer will update automatically.\n+\n+## GitHub Pages Deployment\n+\n+This project is ready for static hosting.\n+\n+1. Push the repository to GitHub.\n+2. Open the repository settings.\n+3. Go to `Pages`.\n+4. Under `Build and deployment`, choose `Deploy from a branch`.\n+5. Select the main branch and the root folder.\n+6. Save the settings and wait for GitHub Pages to publish the site.\n+\n+After deployment, update the footer placeholder text in `index.html` with your final live URL.\n+\n+## Important Submission Note\n+\n+This repository does not include actual AI-generated images or real prompt screenshots yet. Those assets must be added manually later by the student team before final submission.\n+\n+The website is built so that missing assets still display as clean placeholder panels, which makes it safe to edit incrementally without breaking the presentation.\n+\n+## Suggested Final Checklist\n+\n+- Replace all placeholder image files with final exported visuals\n+- Replace prompt screenshot placeholders with real evidence captures\n+- Update team names and project title if needed\n+- Finalize case-study-specific prompt and analysis text in `script.js`\n+- Add GitHub repository and live deployment information to the footer\n+- Review the site on desktop and mobile before submission\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_ASzx3sGuCDe0NSJtSk3KdV8S</summary>

```text
{"output":"Success. Updated the following files:\nA README.md\nD README.md\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_8w1i8EKMomlrws4SToAYcjr3)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_8w1i8EKMomlrws4SToAYcjr3","name":"apply_patch","input":"*** Begin Patch\n*** Add File: assets/icons/.gitkeep\n+\n*** Add File: assets/images/shared/.gitkeep\n+\n*** Add File: assets/images/case1/.gitkeep\n+\n*** Add File: assets/images/case2/.gitkeep\n+\n*** Add File: assets/images/case3/.gitkeep\n+\n*** Add File: assets/images/case4/.gitkeep\n+\n*** Add File: assets/images/case5/.gitkeep\n+\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_8w1i8EKMomlrws4SToAYcjr3</summary>

```text
{"output":"Success. Updated the following files:\nA assets/icons/.gitkeep\nA assets/images/shared/.gitkeep\nA assets/images/case1/.gitkeep\nA assets/images/case2/.gitkeep\nA assets/images/case3/.gitkeep\nA assets/images/case4/.gitkeep\nA assets/images/case5/.gitkeep\n","metadata":{"exit_code":0,"duration_seconds":0.2}}
```

</details>

<details>
<summary>Tool call: shell_command (call_Fcug5dJe9fUdceOyJFCmAfdr)</summary>

```json
{"command":"node --check script.js","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_lHoFxA5GfwEq5ATqfn9pa7CU)</summary>

```json
{"command":"Get-ChildItem -Recurse -Depth 2","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_76BECls5ZFMfTN05hE403bZX)</summary>

```json
{"command":"git status --short","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_Fcug5dJe9fUdceOyJFCmAfdr</summary>

```text
Exit code: 0
Wall time: 1.8 seconds
Output:

```

</details>

<details>
<summary>Tool output: call_lHoFxA5GfwEq5ATqfn9pa7CU</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          4/1/2026   1:25 PM                .vscode                                                              
d-----          4/1/2026   1:27 PM                assets                                                               
-a----          4/1/2026   1:17 PM           4984 .gitignore                                                           
-a----          4/1/2026   1:03 PM         191627 AIArtPortfolioConceptIdea.pdf                                        
-a----          4/1/2026  12:42 PM         127667 AssignmentInstructionsRubric.pdf                                     
-a----          4/1/2026   1:50 PM          15923 index.html                                                           
-a----          4/1/2026   2:04 PM           5068 README.md                                                            
-a----          4/1/2026   2:03 PM          39984 script.js                                                            
-a----          4/1/2026   1:53 PM          21011 styles.css                                                           


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\.vscode


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----          4/1/2026   1:25 PM             46 extensions.json                                                      
-a----          4/1/2026   1:25 PM             92 settings.json                                                        


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\assets


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          4/1/2026   2:04 PM                icons                                                                
d-----          4/1/2026   1:27 PM                images                                                               


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\assets\icons


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----          4/1/2026   2:04 PM              1 .gitkeep                                                             


    Directory: D:\CODE PROJECTS\SchoolProjects\CSC150-Team-Demo-Website\assets\images


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          4/1/2026   2:04 PM                case1                                                                
d-----          4/1/2026   2:04 PM                case2                                                                
d-----          4/1/2026   2:04 PM                case3                                                                
d-----          4/1/2026   2:04 PM                case4                                                                
d-----          4/1/2026   2:04 PM                case5                                                                
d-----          4/1/2026   2:04 PM                shared                                                               



```

</details>

<details>
<summary>Tool output: call_76BECls5ZFMfTN05hE403bZX</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:
 M .gitignore
 M README.md
?? .vscode/
?? assets/
?? index.html
?? script.js
?? styles.css

```

</details>

<details>
<summary>Tool call: update_plan (call_HjLddd4FlIKlwJjOjOtPtVmU)</summary>

```json
{"explanation":"Finished the single-page site, styling, data-driven interactions, placeholder asset structure, and README, then verified JavaScript syntax and project files.","plan":[{"step":"Create project folders and placeholder asset structure","status":"completed"},{"step":"Implement single-page HTML scaffold with all required sections","status":"completed"},{"step":"Add polished responsive CSS for dark AI-lab presentation","status":"completed"},{"step":"Implement data-driven JavaScript interactions and graceful fallbacks","status":"completed"},{"step":"Write submission-ready README and verify project files","status":"completed"}]}
```

</details>

<details>
<summary>Tool output: call_HjLddd4FlIKlwJjOjOtPtVmU</summary>

```text
Plan updated
```

</details>

<details>
<summary>Tool call: shell_command (call_aOp7roHr6ZN8Fghhazd1l6cV)</summary>

```json
{"command":"Get-ChildItem -Recurse -Force .github","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_EEsTmD8CNlPDjQeDC8W9umtN)</summary>

```json
{"command":"Get-Content README.md","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_aOp7roHr6ZN8Fghhazd1l6cV</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:

```

</details>

<details>
<summary>Tool output: call_EEsTmD8CNlPDjQeDC8W9umtN</summary>

```text
Exit code: 0
Wall time: 0.3 seconds
Output:
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
â”œâ”€â”€ index.html
â”œâ”€â”€ styles.css
â”œâ”€â”€ script.js
â”œâ”€â”€ README.md
â””â”€â”€ assets/
    â”œâ”€â”€ icons/
    â””â”€â”€ images/
        â”œâ”€â”€ shared/
        â”œâ”€â”€ case1/
        â”œâ”€â”€ case2/
        â”œâ”€â”€ case3/
        â”œâ”€â”€ case4/
        â””â”€â”€ case5/
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

This project is ready for static hosting.

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the main branch and the root folder.
6. Save the settings and wait for GitHub Pages to publish the site.

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

```

</details>

<details>
<summary>Tool call: apply_patch (call_sftKyw0Y5y0OIvxiwbipUFJv)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_sftKyw0Y5y0OIvxiwbipUFJv","name":"apply_patch","input":"*** Begin Patch\n*** Add File: .github/workflows/deploy-pages.yml\n+name: Deploy static site to GitHub Pages\n+\n+on:\n+  push:\n+    branches:\n+      - main\n+      - master\n+  workflow_dispatch:\n+\n+permissions:\n+  contents: read\n+  pages: write\n+  id-token: write\n+\n+concurrency:\n+  group: pages\n+  cancel-in-progress: true\n+\n+jobs:\n+  deploy:\n+    environment:\n+      name: github-pages\n+      url: ${{ steps.deployment.outputs.page_url }}\n+    runs-on: ubuntu-latest\n+\n+    steps:\n+      - name: Checkout\n+        uses: actions/checkout@v4\n+\n+      - name: Configure Pages\n+        uses: actions/configure-pages@v5\n+\n+      - name: Upload static site artifact\n+        uses: actions/upload-pages-artifact@v3\n+        with:\n+          path: .\n+\n+      - name: Deploy to GitHub Pages\n+        id: deployment\n+        uses: actions/deploy-pages@v4\n*** Add File: .nojekyll\n+\n*** Update File: README.md\n@@\n-## GitHub Pages Deployment\n-\n-This project is ready for static hosting.\n-\n-1. Push the repository to GitHub.\n-2. Open the repository settings.\n-3. Go to `Pages`.\n-4. Under `Build and deployment`, choose `Deploy from a branch`.\n-5. Select the main branch and the root folder.\n-6. Save the settings and wait for GitHub Pages to publish the site.\n-\n-After deployment, update the footer placeholder text in `index.html` with your final live URL.\n+## GitHub Pages Deployment\n+\n+This repository is already configured for GitHub Pages with a workflow file at `.github/workflows/deploy-pages.yml`.\n+\n+To publish it:\n+\n+1. Push the repository to GitHub.\n+2. Open the repository settings.\n+3. Go to `Pages`.\n+4. Under `Build and deployment`, set the source to `GitHub Actions`.\n+5. Make sure your default branch is `main` or `master`, since the workflow listens for pushes to either branch.\n+6. Push your latest changes and wait for the `Deploy static site to GitHub Pages` workflow to finish.\n+\n+The workflow uploads the project root as a static site, so no package install or build step is required.\n+\n+After deployment, update the footer placeholder text in `index.html` with your final live URL.\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_sftKyw0Y5y0OIvxiwbipUFJv</summary>

```text
{"output":"Success. Updated the following files:\nA .github/workflows/deploy-pages.yml\nA .nojekyll\nM README.md\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_92bh7RMsTJ8o4rM6AL4c22D1)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_92bh7RMsTJ8o4rM6AL4c22D1","name":"apply_patch","input":"*** Begin Patch\n*** Update File: .github/workflows/deploy-pages.yml\n@@\n     steps:\n       - name: Checkout\n         uses: actions/checkout@v4\n \n       - name: Configure Pages\n         uses: actions/configure-pages@v5\n+\n+      - name: Prepare static site files\n+        run: |\n+          mkdir site\n+          rsync -av \\\n+            --exclude \".git\" \\\n+            --exclude \".github\" \\\n+            --exclude \".vscode\" \\\n+            --exclude \"*.pdf\" \\\n+            --exclude \"site\" \\\n+            ./ site/\n \n       - name: Upload static site artifact\n         uses: actions/upload-pages-artifact@v3\n         with:\n-          path: .\n+          path: ./site\n \n       - name: Deploy to GitHub Pages\n         id: deployment\n         uses: actions/deploy-pages@v4\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_92bh7RMsTJ8o4rM6AL4c22D1</summary>

```text
{"output":"Success. Updated the following files:\nM .github/workflows/deploy-pages.yml\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: shell_command (call_cPLQf7HdkwEQgyDs1RUNllyC)</summary>

```json
{"command":"Get-Content .github\\workflows\\deploy-pages.yml","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_UWe6Mh3L88KwnHrZwSTX9G4P)</summary>

```json
{"command":"git status --short","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_cPLQf7HdkwEQgyDs1RUNllyC</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:
name: Deploy static site to GitHub Pages

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Prepare static site files
        run: |
          mkdir site
          rsync -av \
            --exclude ".git" \
            --exclude ".github" \
            --exclude ".vscode" \
            --exclude "*.pdf" \
            --exclude "site" \
            ./ site/

      - name: Upload static site artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./site

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

</details>

<details>
<summary>Tool output: call_UWe6Mh3L88KwnHrZwSTX9G4P</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:
 M .gitignore
 M README.md
?? .github/
?? .nojekyll
?? .vscode/
?? assets/
?? index.html
?? script.js
?? styles.css

```

</details>

<details>
<summary>Tool call: apply_patch (call_29Lm1QLU6woDq5cpvbmE9KJ4)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_29Lm1QLU6woDq5cpvbmE9KJ4","name":"apply_patch","input":"*** Begin Patch\n*** Update File: .github/workflows/deploy-pages.yml\n@@\n       - name: Prepare static site files\n         run: |\n-          mkdir site\n+          mkdir -p site\n           rsync -av \\\n             --exclude \".git\" \\\n             --exclude \".github\" \\\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_29Lm1QLU6woDq5cpvbmE9KJ4</summary>

```text
{"output":"Success. Updated the following files:\nM .github/workflows/deploy-pages.yml\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: shell_command (call_sz1RA7pWRdHtNGWrG9T9ES9f)</summary>

```json
{"command":"rg -n \"^\\.vscode/|^\\.DS_Store|^Thumbs\\.db|^node_modules/|^site/|^dist/|^build/|^assets/images/.+|^\\.nojekyll|^coverage/|^\\.idea/|^*.log$\" .gitignore","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_upwiqnnrAV7x0HMfhYxTrsTK)</summary>

```json
{"command":"Get-Content .gitignore","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_sz1RA7pWRdHtNGWrG9T9ES9f</summary>

```text
Exit code: 0
Wall time: 1 seconds
Output:
11:build/
13:dist/

```

</details>

<details>
<summary>Tool output: call_upwiqnnrAV7x0HMfhYxTrsTK</summary>

```text
Exit code: 0
Wall time: 0.4 seconds
Output:
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[codz]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py.cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
.pybuilder/
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
#   For a library or package, you might want to ignore these files since the code is
#   intended to run in multiple environments; otherwise, check them in:
# .python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
#Pipfile.lock

# UV
#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#uv.lock

# poetry
#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
#poetry.lock
#poetry.toml

# pdm
#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
#pdm.lock
#pdm.toml
.pdm-python
.pdm-build/

# pixi
#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
#pixi.lock
#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
#   in the .venv directory. It is recommended not to include this directory in version control.
.pixi

# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# SageMath parsed files
*.sage.py

# Environments
.env
.envrc
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/

# PyCharm
#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
#  and can be added to the global gitignore or merged into this file.  For a more nuclear
#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
#.idea/

# Abstra
# Abstra is an AI-powered process automation framework.
# Ignore directories containing user credentials, local state, and settings.
# Learn more at https://abstra.io/docs
.abstra/

# Visual Studio Code
#  Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore 
#  that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
#  and can be added to the global gitignore or merged into this file. However, if you prefer, 
#  you could uncomment the following to ignore the entire vscode folder
# .vscode/

# Ruff stuff:
.ruff_cache/

# PyPI configuration file
.pypirc

# Cursor
#  Cursor is an AI-powered code editor. `.cursorignore` specifies files/directories to
#  exclude from AI features like autocomplete and code analysis. Recommended for sensitive data
#  refer to https://docs.cursor.com/context/ignore-files
.cursorignore
.cursorindexingignore

# Marimo
marimo/_static/
marimo/_lsp/
__marimo__/

# Loose files and docs
AssignmentInstructionsRubric.pdf
AIArtPortfolioConceptIdea.pdf

```

</details>

<details>
<summary>Tool call: shell_command (call_9X2nIvIj7S10WZV1JlS7mMvr)</summary>

```json
{"command":"rg -n \"const caseStudies|thumbnail:|promptVersions:|iterationImages:|toolComparisons:|finalSelection:|assets/images/case|style-cinematic|prompt-shot\" script.js","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_Z5iWTKIcmTBqlE8ck0sJiVR5)</summary>

```json
{"command":"$i=1; Get-Content script.js | ForEach-Object { '{0,4}: {1}' -f $i, $_; $i++ }","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_9X2nIvIj7S10WZV1JlS7mMvr</summary>

```text
Exit code: 0
Wall time: 0.3 seconds
Output:
3:const caseStudies = [
11:    thumbnail: media("assets/images/case1/cover-placeholder.jpg", "Signal Bloom thumbnail placeholder", "Insert case study thumbnail here"),
14:    promptVersions: [
19:        screenshot: media("assets/images/case1/prompt-v1-placeholder.jpg", "Signal Bloom prompt v1 placeholder", "Insert prompt screenshot here")
25:        screenshot: media("assets/images/case1/prompt-v2-placeholder.jpg", "Signal Bloom prompt v2 placeholder", "Insert revised prompt screenshot here")
28:    iterationImages: [
31:        src: "assets/images/case1/v1-placeholder.jpg",
38:        src: "assets/images/case1/v2-placeholder.jpg",
45:        src: "assets/images/case1/v3-placeholder.jpg",
52:        src: "assets/images/case1/v4-placeholder.jpg",
59:        src: "assets/images/case1/v5-placeholder.jpg",
65:    toolComparisons: [
72:        image: media("assets/images/case1/tool-a-placeholder.jpg", "Signal Bloom tool A placeholder", "Insert tool comparison output here")
80:        image: media("assets/images/case1/tool-b-placeholder.jpg", "Signal Bloom tool B placeholder", "Insert second tool comparison output here")
83:    finalSelection: {
84:      image: media("assets/images/case1/final-placeholder.jpg", "Signal Bloom final selection placeholder", "Insert final selected result here"),
100:    thumbnail: media("assets/images/case2/cover-placeholder.jpg", "Museum Dreamscape thumbnail placeholder", "Insert case study thumbnail here"),
103:    promptVersions: [
108:        screenshot: media("assets/images/case2/prompt-v1-placeholder.jpg", "Museum Dreamscape prompt v1 placeholder", "Insert prompt screenshot here")
114:        screenshot: media("assets/images/case2/prompt-v2-placeholder.jpg", "Museum Dreamscape prompt v2 placeholder", "Insert revised prompt screenshot here")
117:    iterationImages: [
120:        src: "assets/images/case2/v1-placeholder.jpg",
127:        src: "assets/images/case2/v2-placeholder.jpg",
134:        src: "assets/images/case2/v3-placeholder.jpg",
141:        src: "assets/images/case2/v4-placeholder.jpg",
147:    toolComparisons: [
154:        image: media("assets/images/case2/tool-a-placeholder.jpg", "Museum Dreamscape tool A placeholder", "Insert tool comparison output here")
162:        image: media("assets/images/case2/tool-b-placeholder.jpg", "Museum Dreamscape tool B placeholder", "Insert second tool comparison output here")
165:    finalSelection: {
166:      image: media("assets/images/case2/final-placeholder.jpg", "Museum Dreamscape final selection placeholder", "Insert final selected result here"),
182:    thumbnail: media("assets/images/case3/cover-placeholder.jpg", "Modular Motion thumbnail placeholder", "Insert case study thumbnail here"),
185:    promptVersions: [
190:        screenshot: media("assets/images/case3/prompt-v1-placeholder.jpg", "Modular Motion prompt v1 placeholder", "Insert prompt screenshot here")
196:        screenshot: media("assets/images/case3/prompt-v2-placeholder.jpg", "Modular Motion prompt v2 placeholder", "Insert revised prompt screenshot here")
199:    iterationImages: [
202:        src: "assets/images/case3/v1-placeholder.jpg",
209:        src: "assets/images/case3/v2-placeholder.jpg",
216:        src: "assets/images/case3/v3-placeholder.jpg",
223:        src: "assets/images/case3/v4-placeholder.jpg",
230:        src: "assets/images/case3/v5-placeholder.jpg",
236:    toolComparisons: [
243:        image: media("assets/images/case3/tool-a-placeholder.jpg", "Modular Motion tool A placeholder", "Insert tool comparison output here")
251:        image: media("assets/images/case3/tool-b-placeholder.jpg", "Modular Motion tool B placeholder", "Insert second tool comparison output here")
254:    finalSelection: {
255:      image: media("assets/images/case3/final-placeholder.jpg", "Modular Motion final selection placeholder", "Insert final selected result here"),
271:    thumbnail: media("assets/images/case4/cover-placeholder.jpg", "Neon Flora thumbnail placeholder", "Insert case study thumbnail here"),
274:    promptVersions: [
279:        screenshot: media("assets/images/case4/prompt-v1-placeholder.jpg", "Neon Flora prompt v1 placeholder", "Insert prompt screenshot here")
285:        screenshot: media("assets/images/case4/prompt-v2-placeholder.jpg", "Neon Flora prompt v2 placeholder", "Insert revised prompt screenshot here")
288:    iterationImages: [
291:        src: "assets/images/case4/v1-placeholder.jpg",
298:        src: "assets/images/case4/v2-placeholder.jpg",
305:        src: "assets/images/case4/v3-placeholder.jpg",
312:        src: "assets/images/case4/v4-placeholder.jpg",
318:    toolComparisons: [
325:        image: media("assets/images/case4/tool-a-placeholder.jpg", "Neon Flora tool A placeholder", "Insert tool comparison output here")
333:        image: media("assets/images/case4/tool-b-placeholder.jpg", "Neon Flora tool B placeholder", "Insert second tool comparison output here")
336:    finalSelection: {
337:      image: media("assets/images/case4/final-placeholder.jpg", "Neon Flora final selection placeholder", "Insert final selected result here"),
380:    body: "Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg",
381:    media: media("assets/images/shared/prompt-shot-a-placeholder.jpg", "Prompt evidence placeholder A", "Insert prompt screenshot here")
386:    body: "Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg",
387:    media: media("assets/images/shared/prompt-shot-b-placeholder.jpg", "Prompt evidence placeholder B", "Insert prompt screenshot here")
427:      note: "Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg",
428:      media: media("assets/images/shared/style-cinematic-placeholder.jpg", "Cinematic style variation placeholder", "Insert cinematic style variation here")

```

</details>

<details>
<summary>Tool output: call_Z5iWTKIcmTBqlE8ck0sJiVR5</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Total output lines: 922
Output:
   1: const media = (src, alt, label) => ({ src, alt, label });
   2: 
   3: const caseStudies = [
   4:   {
   5:     id: "signal-bloom",
   6:     title: "Signal Bloom Poster Suite",
   7:     subtitle: "From atmosphere-first art to a cleaner poster identity",
   8:     category: "Prompt Evolution",
   9:     versionRange: "v1 to v5",
  10:     summary: "Shows how a poster series moved from moody but unfocused outputs into a more directed layout-ready system.",
  11:     thumbnail: media("assets/images/case1/cover-placeholder.jpg", "Signal Bloom thumbnail placeholder", "Insert case study thumbnail here"),
  12:     tags: ["prompt evolution", "layout control", "typography mood"],
  13:     intent: "Editable intent scaffold: explain the brief, audience, and what the team expected the first image round to solve.",
  14:     promptVersions: [
  15:       {
  16:         label: "v1 brief",
  17:         promptText: "[Replace with original prompt] Broad first prompt focused on subject, tone, and spectacle.",
  18:         note: "Why it changed: strong mood, weak structure.",
  19:         screenshot: media("assets/images/case1/prompt-v1-placeholder.jpg", "Signal Bloom prompt v1 placeholder", "Insert prompt screenshot here")
  20:       },
  21:       {
  22:         label: "v2 revision",
  23:         promptText: "[Replace with revised prompt] Add composition, palette, and layout guidance for poster use.",
  24:         note: "Why it changed: aimed for cleaner hierarchy and usable negative space.",
  25:         screenshot: media("assets/images/case1/prompt-v2-placeholder.jpg", "Signal Bloom prompt v2 placeholder", "Insert revised prompt screenshot here")
  26:       }
  27:     ],
  28:     iterationImages: [
  29:       {
  30:         label: "v1",
  31:         src: "assets/images/case1/v1-placeholder.jpg",
  32:         alt: "Signal Bloom version 1 placeholder",
  33:         caption: "Initial pass emphasized light bloom and mood over structure.",
  34:         note: "Editable note: record the first promising qualities."
  35:       },
  36:       {
  37:         label: "v2",
  38:         src: "assets/images/case1/v2-placeholder.jpg",
  39:         alt: "Signal Bloom version 2 placeholder",
  40:         caption: "Prompt tuning tightened the palette and central focus.",
  41:         note: "Editable note: explain what improved after revision."
  42:       },
  43:       {
  44:         label: "v3",
  45:         src: "assets/images/case1/v3-placeholder.jpg",
  46:         alt: "Signal Bloom version 3 placeholder",
  47:         caption: "Mid-stage output tested contrast and silhouette clarity.",
  48:         note: "Editable note: describe what still felt unresolved."
  49:       },
  50:       {
  51:         label: "v4",
  52:         src: "assets/images/case1/v4-placeholder.jpg",
  53:         alt: "Signal Bloom version 4 placeholder",
  54:         caption: "Later version balanced atmosphere with readability.",
  55:         note: "Editable note: connect this version to final selection logic."
  56:       },
  57:       {
  58:         label: "v5",
  59:         src: "assets/images/case1/v5-placeholder.jpg",
  60:         alt: "Signal Bloom version 5 placeholder",
  61:         caption: "Final candidate blended drama with layout readiness.",
  62:         note: "Editable note: compare selected and rejected options."
  63:       }
  64:     ],
  65:     toolComparisons: [
  66:       {
  67:         tool: "Tool A placeholder",
  68:         role: "Fast mood exploration",
  69:         rationale: "Editable rationale: explain why this tool was useful early.",
  70:         strengths: "Generated lighting and texture quickly.",
  71:         limitations: "Needed tighter prompt control for cleaner layouts.",
  72:         image: media("assets/images/case1/tool-a-placeholder.jpg", "Signal Bloom tool A placeholder", "Insert tool comparison output here")
  73:       },
  74:       {
  75:         tool: "Tool B placeholder",
  76:         role: "Refinement testing",
  77:         rationale: "Editable rationale: explain where a second tool gave more control.",
  78:         strengths: "More dependable composition and subject emphasis.",
  79:         limitations: "Could lose some of the expressive atmosphere.",
  80:         image: media("assets/images/case1/tool-b-placeholder.jpg", "Signal Bloom tool B placeholder", "Insert second tool comparison output here")
  81:       }
  82:     ],
  83:     finalSelection: {
  84:       image: media("assets/images/case1/final-placeholder.jpg", "Signal Bloom final selection placeholder", "Insert final selected result here"),
  85:       rationale: "Editable final note: summarize why this version best matched the brief."
  86:     },
  87:     lessonsLearned: [
  88:       "Specific composition language improved consistency.",
  89:       "AI generated mood quickly, but curation still mattered.",
  90:       "Late changes worked best when they solved one clear issue."
  91:     ]
  92:   },
  93:   {
  94:     id: "museum-dreamscape",
  95:     title: "Museum Dreamscape Key Art",
  96:     subtitle: "Testing surreal imagery inside a curated exhibit identity",
  97:     category: "Tool Comparison",
  98:     versionRange: "v1 to v4",
  99:     summary: "Compares prompt phrasing and tool behavior for a museum poster that needed both intrigue and clarity.",
 100:     thumbnail: media("assets/images/case2/cover-placeholder.jpg", "Museum Dreamscape thumbnail placeholder", "Insert case study thumbnail here"),
 101:     tags: ["tool comparison", "surreal direction", "curation"],
 102:     intent: "Editable intent scaffold: describe the campaign concept, target mood, and what success looked like.",
 103:     promptVersions: [
 104:       {
 105:         label: "v1 prompt",
 106:         promptText: "[Replace with original prompt] Start with spectacle, mood, and broad exhibit energy.",
 107:         note: "Why it changed: too abstract for a polished exhibit poster.",
 108:         screenshot: media("assets/images/case2/prompt-v1-placeholder.jpg", "Museum Dreamscape prompt v1 placeholder", "Insert prompt screenshot here")
 109:       },
 110:       {
 111:         label: "v2 revision",
 112:         promptText: "[Replace with revised prompt] Add gallery context, material cues, and controlled surreal details.",
 113:         note: "Why it changed: moved from idea generation toward art direction.",
 114:         screenshot: media("assets/images/case2/prompt-v2-placeholder.jpg", "Museum Dreamscape prompt v2 placeholder", "Insert revised prompt screenshot here")
 115:       }
 116:     ],
 117:     iterationImages: [
 118:       {
 119:         label: "v1",
 120:         src: "assets/images/case2/v1-placeholder.jpg",
 121:         alt: "Museum Dreamscape version 1 placeholder",
 122:         caption: "First pass delivered spectacle but limited restraint.",
 123:         note: "Editable note: call out the exciting but impractical parts."
 124:       },
 125:       {
 126:         label: "v2",
 127:         src: "assets/images/case2/v2-placeholder.jpg",
 128:         alt: "Museum Dreamscape version 2 placeholder",
 129:         caption: "Refinement made the scene feel more exhibition-ready.",
 130:         note: "Editable note: explain what became more coherent."
 131:       },
 132:       {
 133:         label: "v3",
 134:         src: "assets/images/case2/v3-placeholder.jpg",
 135:         alt: "Museum Dreamscape version 3 placeholder",
 136:         caption: "Selective constraints improved palette and hierarchy.",
 137:         note: "Editable note: show how prompt wording changed the result."
 138:       },
 139:       {
 140:         label: "v4",
 141:         src: "assets/images/case2/v4-placeholder.jpg",
 142:         alt: "Museum Dreamscape version 4 placeholder",
 143:         caption: "Final candidate balanced intrigue and communication.",
 144:         note: "Editable note: explain why this version won."
 145:       }
 146:     ],
 147:     toolComparisons: [
 148:       {
 149:         tool: "Tool A placeholder",
 150:         role: "High-concept exploration",
 151:         rationale: "Editable rationale: note how this tool pushed surreal concepts quickly.",
 152:         strengths: "Strong at atmosphere and surprise.",
 153:         limitations: "Less stable when the team needed repeatable framing.",
 154:         image: media("assets/images/case2/tool-a-placeholder.jpg", "Museum Dreamscape tool A placeholder", "Insert tool comparison output here")
 155:       },
 156:       {
 157:         tool: "Tool B placeholder",
 158:         role: "Controlled refinement",
 159:         rationale: "Editable rationale: explain how this tool supported polish and structure.",
 160:         strengths: "Cleaner subject emphasis and steadier composition.",
 161:         limitations: "Could feel safer than the exploratory option.",
 162:         image: media("assets/images/case2/tool-b-placeholder.jpg", "Museum Dreamscape tool B placeholder", "Insert second tool comparison output here")
 163:       }
 164:     ],
 165:     finalSelection: {
 166:       image: media("assets/images/case2/final-placeholder.jpg", "Museum Dreamscape final selection placeholder", "Insert final selected result here"),
 167:       rationale: "Editable final note: describe why this output best fit the exhibit identity."
 168:     },
 169:     lessonsLearned: [
 170:       "Tool switching worked best when the problem was clearly defined.",
 171:       "Surreal prompts improved when space and lighting were constrained.",
 172:       "The strongest result was the most communicative, not the noisiest."
 173:     ]
 174:   },
 175:   {
 176:     id: "modular-motion",
 177:     title: "Modular Motion Sneaker Board",
 178:     subtitle: "Product storytelling through materials, camera direction, and style transfer",
 179:     category: "Style Transfer",
 180:     versionRange: "v1 to v5",
 181:     summary: "Explores how product scenes changed as the team adjusted style references, material prompts, and presentation context.",
 182:     thumbnail: media("assets/images/case3/cover-placeholder.jpg", "Modular Motion thumbnail placeholder", "Insert case study thumbnail here"),
 183:     tags: ["style transfer", "material study", "product visualization"],
 184:     intent: "Editable intent scaffold: define the product concept, intended audience, and the cues AI needed to emphasize.",
 185:     promptVersions: [
 186:       {
 187:         label: "v1 prompt",
 188:         promptText: "[Replace with original prompt] Broad product concept with material ideas and energy cues.",
 189:         note: "Why it changed: the output needed better camera control and stronger presentation.",
 190:         screenshot: media("assets/images/case3/prompt-v1-placeholder.jpg", "Modular Motion prompt v1 placeholder", "Insert prompt screenshot here")
 191:       },
 192:       {
 193:         label: "v2 revision",
 194:         promptText: "[Replace with revised prompt] Add editorial photo language, finish notes, and motion-inspired framing.",
 195:         note: "Why it changed: aimed for a concept board rather than a generic mockup.",
 196:         screenshot: media("assets/images/case3/prompt-v2-placeholder.jpg", "Modular Motion prompt v2 placeholder", "Insert revised prompt screenshot here")
 197:       }
 198:     ],
 199:     iterationImages: [
 200:       {
 201:         label: "v1",
 202:         src: "assets/images/case3/v1-placeholder.jpg",
 203:         alt: "Modular Motion version 1 placeholder",
 204:         caption: "Initial renders suggested materials but lacked a memorable frame.",
 205:         note: "Editable note: describe where the first output felt generic."
 206:       },
 207:       {
 208:         label: "v2",
 209:         src: "assets/images/case3/v2-placeholder.jpg",
 210:         alt: "Modular Motion version 2 placeholder",
 211:         caption: "Prompt revisions added camera intention and stronger rhythm.",
 212:         note: "Editable note: note gains in realism or energy."
 213:       },
 214:       {
 215:         label: "v3",
 216:         src: "assets/images/case3/v3-placeholder.jpg",
 217:         alt: "Modular Motion version 3 placeholder",
 218:         caption: "Style references pushed the result toward an editorial look.",
 219:         note: "Editable note: compare realism and concept-art appeal."
 220:       },
 221:       {
 222:         label: "v4",
 223:         src: "assets/images/case3/v4-placeholder.jpg",
 224:         alt: "Modular Motion version 4 placeholder",
 225:         caption: "Later versions tested cleaner backgrounds and more layout room.",
 226:         note: "Editable note: explain why practical layout space mattered."
 227:       },
 228:       {
 229:         label: "v5",
 230:         src: "assets/images/case3/v5-placeholder.jpg",
 231:         alt: "Modular Motion version 5 placeholder",
 232:         caption: "Final candidate integrated clarity, energy, and brand feel.",
 233:         note: "Editable note: connect the winner to the project brief."
 234:       }
 235:     ],
 236:     toolComparisons: [
 237:       {
 238:         tool: "Tool A placeholder",
 239:         role: "Stylized concept generation",
 240:         rationale: "Editable rationale: explain which tool created the boldest shapes and moods.",
 241:         strengths: "Produced expressive silhouettes and lighting quickly.",
 242:         limitations: "Sometimes drifted away from the product intent.",
 243:         image: media("assets/images/case3/tool-a-placeholder.jpg", "Modular Motion tool A placeholder", "Insert tool comparison output here")
 244:       },
 245:       {
 246:         tool: "Tool B placeholder",
 247:         role: "Product-focused refinement",
 248:         rationale: "Editable rationale: explain how the second tool preserved readability.",
 249:         strengths: "Better at keeping the object central and legible.",
 250:         limitations: "Less surprising than the exploratory tool.",
 251:         image: media("assets/images/case3/tool-b-placeholder.jpg", "Modular Motion tool B placeholder", "Insert second tool comparison output here")
 252:       }
 253:     ],
 254:     finalSelection: {
 255:       image: media("assets/images/case3/final-placeholder.jpg", "Modular Motion final selection placeholder", "Insert final selected result here"),
 256:       rationale: "Editable final note: explain how the chosen version balanced concept appeal and clarity."
 257:     },
 258:     lessonsLearned: [
 259:       "Material language improved when finish and lighting were paired.",
 260:       "AI could stage products well, but brand clarity still needed human judgment.",
 261:       "Selection improved when novelty was judged against communication goals."
 262:     ]
 263:   },
 264:   {
 265:     id: "neon-flora",
 266:     title: "Neon Flora Album Cover System",
 267:     subtitle: "Building a repeatable cover style through prompt patterning",
 268:     category: "Series Development",
 269:     versionRange: "v1 to v4",
 270:     summary: "Documents a music-oriented identity system where the team tested consistency, variation, and the limits of AI as collaborator.",
 271:     thumbnail: media("assets/images/case4/cover-placeholder.jpg", "Neon Flora thumbnail placeholder", "Insert case study thumbnail here"),
 272:     tags: ["series development", "consistency", "AI collaboration"],
 273:     intent: "Editable intent scaffold: explain the identity goal and why consistency mattered across multiple covers.",
 274:     promptVersions: [
 275:       {
 276:         label: "v1 prompt",
 277:         promptText: "[Replace with original prompt] Style-driven prompt with color, subject, and mood anchors.",
 278:         note: "Why it changed: strong individually, weak as a repeatable system.",
 279:         screenshot: media("assets/images/case4/prompt-v1-placeholder.jpg", "Neon Flora prompt v1 placeholder", "Insert prompt screenshot here")
 280:       },
 281:       {
 282:         label: "v2 revision",
 283:         promptText: "[Replace with revised prompt] Add recurring motifs, palette rules, and layout guidance for a multi-cover set.",
 284:         note: "Why it changed: focused on system-building instead of one-off images.",
 285:         screenshot: media("assets/images/case4/prompt-v2-placeholder.jpg", "Neon Flora prompt v2 placeholder", "Insert revised prompt screenshot here")
 286:       }
 287:     ],
 288:     iterationImages: [
 289:       {
 290:         label: "v1",
 291:         src: "assets/images/case4/v1-placeholder.jpg",
 292:         alt: "Neon Flora version 1 placeholder",
 293:         caption: "First pass delivered style without repeatable structure.",
 294:         note: "Editable note: identify what worked only in isolation."
 295:       },
 296:       {
 297:         label: "v2",
 298:         src: "assets/images/case4/v2-placeholder.jpg",
 299:         alt: "Neon Flora version 2 placeholder",
 300:         caption: "Refinement added clearer palette rules and recurring motifs.",
 301:         note: "Editable note: explain which prompt rules improved consistency."
 302:       },
 303:       {
 304:         label: "v3",
 305:         src: "assets/images/case4/v3-placeholder.jpg",
 306:         alt: "Neon Flora version 3 placeholder",
 307:         caption: "Later outputs became easier to curate into a set.",
 308:         note: "Editable note: mention how selection criteria changed."
 309:       },
 310:       {
 311:         label: "v4",
 312:         src: "assets/images/case4/v4-placeholder.jpg",
 313:         alt: "Neon Flora version 4 placeholder",
 314:         caption: "Final candidate balanced identity, variation, and polish.",
 315:         note: "Editable note: describe why this version fit the series best."
 316:       }
 317:     ],
 318:     toolComparisons: [
 319:       {
 320:         tool: "Tool A placeholder",
 321:         role: "Motif discovery",
 322:         rationale: "Editable rationale: explain which tool surfaced the best visual hooks.",
 323:         strengths: "Helpful for strong motifs and color relationships.",
 324:         limitations: "Varied too much for a stable series.",
 325:         image: media("assets/images/case4/tool-a-placeholder.jpg", "Neon Flora tool A placeholder", "Insert tool comparison output here")
 326:       },
 327:       {
 328:         tool: "Tool B placeholder",
 329:         role: "Consistency testing",
 330:         rationale: "Editable rationale: describe how the second tool handled repeated rules.",
 331:         strengths: "Better at preserving palette and framing anchors.",
 332:         limitations: "Less visually daring than the exploratory option.",
 333:         image: media("assets/images/case4/tool-b-placeholder.jpg", "Neon Flora tool B placeholder", "Insert second tool comparison output here")
 334:       }
 335:     ],
 336:     finalSelection: {
 337:       image: media("assets/images/case4/final-placeholder.jpg", "Neon Flora final selection placeholder", "Insert final selected result here"),
 338:       rationale: "Editable final note: summarize why this output best captured the intended identity system."
 339:     },
 340:     lessonsLearned: [
 341:       "Consistency is a stronger AI test than one impressive image.",
 342:       "Prompt rules became useful once repeatable anchors were identified.",
 343:       "AI worked best as a collaborator when success criteria were explicit."
 344:     ]
 345:   }
 346: ];
 347: 
 348: const analysisInsights = [
 349:   { type: "Editable ins…1610 tokens truncated…1:       id: "editorial",
 432:       label: "Editorial",
 433:       title: "Editorial direction",
 434:       description: "Use this version to show how a cleaner, magazine-inspired prompt changed composition and readability.",
 435:       note: "Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg",
 436:       media: media("assets/images/shared/style-editorial-placeholder.jpg", "Editorial style variation placeholder", "Insert editorial style variation here")
 437:     },
 438:     {
 439:       id: "speculative",
 440:       label: "Speculative",
 441:       title: "Speculative direction",
 442:       description: "Use this version to show what happened when the same subject was pushed toward a more abstract outcome.",
 443:       note: "Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg",
 444:       media: media("assets/images/shared/style-speculative-placeholder.jpg", "Speculative style variation placeholder", "Insert speculative style variation here")
 445:     }
 446:   ]
 447: };
 448: 
 449: const state = {
 450:   activeCaseId: caseStudies[0].id,
 451:   sliderIndex: 0,
 452:   activeVariationId: interactiveLab.variations[0].id
 453: };
 454: 
 455: document.addEventListener("DOMContentLoaded", () => {
 456:   setupNavigation();
 457:   hydrateMediaShells(document);
 458:   renderCaseStudyGrid();
 459:   renderCaseStudySelector();
 460:   renderActiveCaseStudy();
 461:   renderAnalysis();
 462:   renderProcessStats();
 463:   renderWorkflowStages();
 464:   renderTools();
 465:   renderArtifacts();
 466:   renderContributions();
 467:   renderReflections();
 468:   setupIterationSlider();
 469:   setupStyleSwitcher();
 470: });
 471: 
 472: function setupNavigation() {
 473:   const header = document.querySelector(".site-header");
 474:   const toggle = document.querySelector(".menu-toggle");
 475:   const navLinks = document.querySelectorAll(".site-nav a");
 476:   if (!header || !toggle) return;
 477: 
 478:   toggle.addEventListener("click", () => {
 479:     const expanded = toggle.getAttribute("aria-expanded") === "true";
 480:     toggle.setAttribute("aria-expanded", String(!expanded));
 481:     header.classList.toggle("is-open", !expanded);
 482:   });
 483: 
 484:   navLinks.forEach((link) => {
 485:     link.addEventListener("click", () => {
 486:       toggle.setAttribute("aria-expanded", "false");
 487:       header.classList.remove("is-open");
 488:     });
 489:   });
 490: }
 491: 
 492: function renderCaseStudyGrid() {
 493:   const grid = document.getElementById("caseStudyGrid");
 494:   if (!grid) return;
 495: 
 496:   grid.innerHTML = caseStudies
 497:     .map(
 498:       (study) => `
 499:         <article class="panel case-card">
 500:           <div class="media-shell" data-src="${study.thumbnail.src}" data-alt="${study.thumbnail.alt}" data-label="${study.thumbnail.label}"></div>
 501:           <div class="case-card__header">
 502:             <div>
 503:               <span class="case-card__category">${study.category}</span>
 504:               <h3>${study.title}</h3>
 505:             </div>
 506:             <span class="case-card__range">${study.versionRange}</span>
 507:           </div>
 508:           <p>${study.summary}</p>
 509:           <ul class="tag-list">${study.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
 510:           <button class="case-card__action" type="button" data-case-open="${study.id}">Open detailed case study</button>
 511:         </article>
 512:       `
 513:     )
 514:     .join("");
 515: 
 516:   hydrateMediaShells(grid);
 517:   grid.querySelectorAll("[data-case-open]").forEach((button) => {
 518:     button.addEventListener("click", () => {
 519:       setActiveCaseStudy(button.getAttribute("data-case-open"));
 520:       document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
 521:     });
 522:   });
 523: }
 524: 
 525: function renderCaseStudySelector() {
 526:   const selector = document.getElementById("caseStudySelector");
 527:   if (!selector) return;
 528: 
 529:   selector.innerHTML = caseStudies
 530:     .map(
 531:       (study) => `
 532:         <button class="selector-button" type="button" role="tab" aria-selected="${study.id === state.activeCaseId}" data-case-select="${study.id}">
 533:           ${study.title}
 534:         </button>
 535:       `
 536:     )
 537:     .join("");
 538: 
 539:   selector.querySelectorAll("[data-case-select]").forEach((button) => {
 540:     button.addEventListener("click", () => {
 541:       setActiveCaseStudy(button.getAttribute("data-case-select"));
 542:     });
 543:   });
 544: }
 545: 
 546: function setActiveCaseStudy(caseId) {
 547:   if (!caseStudies.some((study) => study.id === caseId)) return;
 548:   state.activeCaseId = caseId;
 549:   renderCaseStudySelector();
 550:   renderActiveCaseStudy();
 551: }
 552: 
 553: function renderActiveCaseStudy() {
 554:   const container = document.getElementById("caseStudyDetail");
 555:   const study = getActiveCaseStudy();
 556:   if (!container || !study) return;
 557: 
 558:   container.innerHTML = `
 559:     <div class="panel case-detail__panel">
 560:       <div class="detail-top">
 561:         <div class="detail-heading">
 562:           <p class="eyebrow eyebrow--small">Active case study</p>
 563:           <h3>${study.title}</h3>
 564:           <p class="detail-subtitle">${study.subtitle}</p>
 565:           <ul class="detail-tag-list">${study.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
 566:           <div class="detail-meta">
 567:             <div class="detail-meta__card">
 568:               <span class="detail-meta__label">Category</span>
 569:               <span class="detail-meta__value">${study.category}</span>
 570:             </div>
 571:             <div class="detail-meta__card">
 572:               <span class="detail-meta__label">Version range</span>
 573:               <span class="detail-meta__value">${study.versionRange}</span>
 574:             </div>
 575:             <div class="detail-meta__card">
 576:               <span class="detail-meta__label">Focus</span>
 577:               <span class="detail-meta__value">${study.summary}</span>
 578:             </div>
 579:           </div>
 580:         </div>
 581:         <div class="media-shell media-shell--wide" data-src="${study.finalSelection.image.src}" data-alt="${study.finalSelection.image.alt}" data-label="${study.finalSelection.image.label}"></div>
 582:       </div>
 583: 
 584:       <section class="detail-block">
 585:         <h4 class="detail-block__title">Intent</h4>
 586:         <p>${study.intent}</p>
 587:       </section>
 588: 
 589:       <section class="detail-block">
 590:         <h4 class="detail-block__title">Prompt Evolution</h4>
 591:         <div class="prompt-grid">
 592:           ${study.promptVersions
 593:             .map(
 594:               (prompt) => `
 595:                 <article class="prompt-card">
 596:                   <span class="prompt-card__label">${prompt.label}</span>
 597:                   <h4>Prompt version</h4>
 598:                   <p class="prompt-card__text">${prompt.promptText}</p>
 599:                   <p class="prompt-card__note">${prompt.note}</p>
 600:                   <div class="media-shell" data-src="${prompt.screenshot.src}" data-alt="${prompt.screenshot.alt}" data-label="${prompt.screenshot.label}"></div>
 601:                 </article>
 602:               `
 603:             )
 604:             .join("")}
 605:         </div>
 606:       </section>
 607: 
 608:       <section class="detail-block">
 609:         <h4 class="detail-block__title">Output Iterations</h4>
 610:         <div class="iteration-grid">
 611:           ${study.iterationImages
 612:             .map(
 613:               (image) => `
 614:                 <article class="iteration-card">
 615:                   <span class="prompt-card__label">${image.label}</span>
 616:                   <h4>${image.caption}</h4>
 617:                   <div class="media-shell" data-src="${image.src}" data-alt="${image.alt}" data-label="Insert version output here"></div>
 618:                   <p>${image.note}</p>
 619:                 </article>
 620:               `
 621:             )
 622:             .join("")}
 623:         </div>
 624:       </section>
 625: 
 626:       <section class="detail-block">
 627:         <h4 class="detail-block__title">Tool Comparison</h4>
 628:         <div class="comparison-grid">
 629:           ${study.toolComparisons
 630:             .map(
 631:               (tool) => `
 632:                 <article class="comparison-card">
 633:                   <span class="comparison-card__label">${tool.tool}</span>
 634:                   <h4>${tool.role}</h4>
 635:                   <p>${tool.rationale}</p>
 636:                   <p><strong>Strengths:</strong> ${tool.strengths}</p>
 637:                   <p><strong>Limitations:</strong> ${tool.limitations}</p>
 638:                   <div class="media-shell" data-src="${tool.image.src}" data-alt="${tool.image.alt}" data-label="${tool.image.label}"></div>
 639:                 </article>
 640:               `
 641:             )
 642:             .join("")}
 643:         </div>
 644:       </section>
 645: 
 646:       <section class="detail-block">
 647:         <h4 class="detail-block__title">Final Selection</h4>
 648:         <p>${study.finalSelection.rationale}</p>
 649:       </section>
 650: 
 651:       <section class="detail-block">
 652:         <h4 class="detail-block__title">Lessons Learned</h4>
 653:         <ul class="bullet-list">${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join("")}</ul>
 654:       </section>
 655:     </div>
 656:   `;
 657: 
 658:   hydrateMediaShells(container);
 659: }
 660: 
 661: function renderAnalysis() {
 662:   const container = document.getElementById("analysisGrid");
 663:   if (!container) return;
 664:   container.innerHTML = analysisInsights
 665:     .map(
 666:       (insight) => `
 667:         <article class="panel insight-card">
 668:           <span class="insight-card__type">${insight.type}</span>
 669:           <h3>${insight.title}</h3>
 670:           <p>${insight.body}</p>
 671:         </article>
 672:       `
 673:     )
 674:     .join("");
 675: }
 676: 
 677: function renderProcessStats() {
 678:   const container = document.getElementById("processStats");
 679:   if (!container) return;
 680:   container.innerHTML = processStats
 681:     .map(
 682:       (stat) => `
 683:         <article class="stat-card">
 684:           <span class="stat-card__value">${stat.value}</span>
 685:           <span class="stat-card__label">${stat.label}</span>
 686:           <p class="stat-card__note">${stat.note}</p>
 687:         </article>
 688:       `
 689:     )
 690:     .join("");
 691: }
 692: 
 693: function renderWorkflowStages() {
 694:   const container = document.getElementById("workflowGrid");
 695:   if (!container) return;
 696:   container.innerHTML = workflowStages
 697:     .map(
 698:       (stage, index) => `
 699:         <article class="workflow-card">
 700:           <span class="workflow-card__label">${stage.label}</span>
 701:           <div class="workflow-card__number">${index + 1}</div>
 702:           <h4>${stage.title}</h4>
 703:           <p>${stage.body}</p>
 704:         </article>
 705:       `
 706:     )
 707:     .join("");
 708: }
 709: 
 710: function renderTools() {
 711:   const container = document.getElementById("toolGrid");
 712:   if (!container) return;
 713:   container.innerHTML = toolsUsed
 714:     .map(
 715:       (tool) => `
 716:         <article class="tool-card">
 717:           <span class="tool-card__label">${tool.label}</span>
 718:           <h4>${tool.title}</h4>
 719:           <p>${tool.body}</p>
 720:         </article>
 721:       `
 722:     )
 723:     .join("");
 724: }
 725: 
 726: function renderArtifacts() {
 727:   const container = document.getElementById("artifactGrid");
 728:   if (!container) return;
 729: 
 730:   container.innerHTML = processArtifacts
 731:     .map(
 732:       (artifact) => `
 733:         <article class="artifact-card">
 734:           <span class="artifact-card__label">${artifact.label}</span>
 735:           <h4>${artifact.title}</h4>
 736:           <p>${artifact.body}</p>
 737:           <div class="media-shell" data-src="${artifact.media.src}" data-alt="${artifact.media.alt}" data-label="${artifact.media.label}"></div>
 738:         </article>
 739:       `
 740:     )
 741:     .join("");
 742: 
 743:   hydrateMediaShells(container);
 744: }
 745: 
 746: function renderContributions() {
 747:   const container = document.getElementById("contributionGrid");
 748:   if (!container) return;
 749:   container.innerHTML = contributionCards
 750:     .map(
 751:       (card) => `
 752:         <article class="contribution-card">
 753:           <span class="contribution-card__label">${card.label}</span>
 754:           <h4>${card.title}</h4>
 755:           <p>${card.body}</p>
 756:         </article>
 757:       `
 758:     )
 759:     .join("");
 760: }
 761: 
 762: function renderReflections() {
 763:   const container = document.getElementById("reflectionGrid");
 764:   if (!container) return;
 765:   container.innerHTML = reflectionCards
 766:     .map(
 767:       (card) => `
 768:         <article class="panel reflection-card">
 769:           <span class="reflection-card__type">${card.type}</span>
 770:           <h3>${card.title}</h3>
 771:           <p>${card.body}</p>
 772:         </article>
 773:       `
 774:     )
 775:     .join("");
 776: }
 777: 
 778: function setupIterationSlider() {
 779:   const slider = document.getElementById("iterationSlider");
 780:   const prevButton = document.getElementById("iterationPrev");
 781:   const nextButton = document.getElementById("iterationNext");
 782:   const sliderStudy = getSliderCaseStudy();
 783:   if (!slider || !prevButton || !nextButton || !sliderStudy) return;
 784: 
 785:   slider.max = String(sliderStudy.iterationImages.length - 1);
 786:   slider.value = String(state.sliderIndex);
 787: 
 788:   slider.addEventListener("input", () => {
 789:     state.sliderIndex = Number(slider.value);
 790:     renderIterationSlider();
 791:   });
 792: 
 793:   prevButton.addEventListener("click", () => {
 794:     state.sliderIndex = Math.max(0, state.sliderIndex - 1);
 795:     slider.value = String(state.sliderIndex);
 796:     renderIterationSlider();
 797:   });
 798: 
 799:   nextButton.addEventListener("click", () => {
 800:     state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);
 801:     slider.value = String(state.sliderIndex);
 802:     renderIterationSlider();
 803:   });
 804: 
 805:   renderIterationSlider();
 806: }
 807: 
 808: function renderIterationSlider() {
 809:   const sliderStudy = getSliderCaseStudy();
 810:   const frame = sliderStudy?.iterationImages[state.sliderIndex];
 811:   const valueBadge = document.getElementById("iterationSliderValue");
 812:   const title = document.getElementById("iterationCaptionTitle");
 813:   const text = document.getElementById("iterationCaptionText");
 814:   const note = document.getElementById("iterationCaptionNote");
 815:   const mediaShell = document.getElementById("iterationSliderMedia");
 816:   const markers = document.getElementById("iterationMarkers");
 817:   if (!sliderStudy || !frame || !valueBadge || !title || !text || !note || !mediaShell || !markers) return;
 818: 
 819:   valueBadge.textContent = frame.label;
 820:   title.textContent = `${sliderStudy.title} ${frame.label}`;
 821:   text.textContent = frame.caption;
 822:   note.textContent = frame.note;
 823:   setMediaShell(mediaShell, { src: frame.src, alt: frame.alt, label: "Insert version output here" });
 824: 
 825:   markers.innerHTML = sliderStudy.iterationImages
 826:     .map(
 827:       (item, index) => `
 828:         <span class="step-indicator ${index === state.sliderIndex ? "is-active" : ""}">
 829:           ${item.label}
 830:         </span>
 831:       `
 832:     )
 833:     .join("");
 834: }
 835: 
 836: function setupStyleSwitcher() {
 837:   const group = document.getElementById("styleToggleGroup");
 838:   if (!group) return;
 839: 
 840:   group.innerHTML = interactiveLab.variations
 841:     .map(
 842:       (variation) => `
 843:         <button class="toggle-button" type="button" role="tab" aria-selected="${variation.id === state.activeVariationId}" data-variation="${variation.id}">
 844:           ${variation.label}
 845:         </button>
 846:       `
 847:     )
 848:     .join("");
 849: 
 850:   group.querySelectorAll("[data-variation]").forEach((button) => {
 851:     button.addEventListener("click", () => {
 852:       state.activeVariationId = button.getAttribute("data-variation");
 853:       setupStyleSwitcher();
 854:       renderStyleVariation();
 855:     });
 856:   });
 857: 
 858:   renderStyleVariation();
 859: }
 860: 
 861: function renderStyleVariation() {
 862:   const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);
 863:   const title = document.getElementById("styleToggleTitle");
 864:   const description = document.getElementById("styleToggleDescription");
 865:   const note = document.getElementById("styleToggleNote");
 866:   const mediaShell = document.getElementById("styleToggleMedia");
 867:   if (!variation || !title || !description || !note || !mediaShell) return;
 868: 
 869:   title.textContent = variation.title;
 870:   description.textContent = variation.description;
 871:   note.textContent = variation.note;
 872:   setMediaShell(mediaShell, { src: variation.media.src, alt: variation.media.alt, label: variation.media.label });
 873: }
 874: 
 875: function hydrateMediaShells(root) {
 876:   root.querySelectorAll(".media-shell[data-src]").forEach((shell) => {
 877:     setMediaShell(shell, {
 878:       src: shell.dataset.src,
 879:       alt: shell.dataset.alt || "",
 880:       label: shell.dataset.label || "Insert image here"
 881:     });
 882:   });
 883: }
 884: 
 885: function setMediaShell(shell, { src, alt, label }) {
 886:   if (!shell) return;
 887: 
 888:   shell.innerHTML = "";
 889:   shell.classList.remove("is-loaded");
 890: 
 891:   const image = document.createElement("img");
 892:   image.alt = alt || label;
 893:   image.loading = "lazy";
 894:   image.decoding = "async";
 895: 
 896:   const fallback = document.createElement("div");
 897:   fallback.className = "media-fallback";
 898:   fallback.innerHTML = `
 899:     <span class="media-fallback__eyebrow">Placeholder Asset</span>
 900:     <strong>${label}</strong>
 901:     <code>${src || "Add an asset path"}</code>
 902:   `;
 903: 
 904:   image.addEventListener("load", () => {
 905:     shell.classList.add("is-loaded");
 906:   });
 907: 
 908:   image.addEventListener("error", () => {
 909:     shell.classList.remove("is-loaded");
 910:   });
 911: 
 912:   shell.append(image, fallback);
 913:   if (src) image.src = src;
 914: }
 915: 
 916: function getActiveCaseStudy() {
 917:   return caseStudies.find((study) => study.id === state.activeCaseId);
 918: }
 919: 
 920: function getSliderCaseStudy() {
 921:   return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);
 922: }

```

</details>

<details>
<summary>Tool call: apply_patch (call_OtDvenlYLFP8BC5MrmGFBUKD)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_OtDvenlYLFP8BC5MrmGFBUKD","name":"apply_patch","input":"*** Begin Patch\n*** Update File: script.js\n@@\n   {\n     id: \"signal-bloom\",\n-    title: \"Signal Bloom Poster Suite\",\n-    subtitle: \"From atmosphere-first art to a cleaner poster identity\",\n-    category: \"Prompt Evolution\",\n-    versionRange: \"v1 to v5\",\n-    summary: \"Shows how a poster series moved from moody but unfocused outputs into a more directed layout-ready system.\",\n-    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Signal Bloom thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n-    intent: \"Editable intent scaffold: explain the brief, audience, and what the team expected the first image round to solve.\",\n+    title: \"Prompt 1\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V5\",\n+    summary: \"Placeholder sequence for Prompt 1, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Prompt 1 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 1\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 1 was trying to generate and what the team wanted to improve across each revision.\",\n     promptVersions: [\n       {\n-        label: \"v1 brief\",\n-        promptText: \"[Replace with original prompt] Broad first prompt focused on subject, tone, and spectacle.\",\n-        note: \"Why it changed: strong mood, weak structure.\",\n-        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Signal Bloom prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 1.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Prompt 1 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add composition, palette, and layout guidance for poster use.\",\n-        note: \"Why it changed: aimed for cleaner hierarchy and usable negative space.\",\n-        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Signal Bloom prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 1.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Prompt 1 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case1/v1-placeholder.jpg\",\n-        alt: \"Signal Bloom version 1 placeholder\",\n-        caption: \"Initial pass emphasized light bloom and mood over structure.\",\n-        note: \"Editable note: record the first promising qualities.\"\n+        alt: \"Prompt 1 base image placeholder\",\n+        caption: \"Prompt 1 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 1.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case1/v2-placeholder.jpg\",\n-        alt: \"Signal Bloom version 2 placeholder\",\n-        caption: \"Prompt tuning tightened the palette and central focus.\",\n-        note: \"Editable note: explain what improved after revision.\"\n+        alt: \"Prompt 1 image V2 placeholder\",\n+        caption: \"Prompt 1 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case1/v3-placeholder.jpg\",\n-        alt: \"Signal Bloom version 3 placeholder\",\n-        caption: \"Mid-stage output tested contrast and silhouette clarity.\",\n-        note: \"Editable note: describe what still felt unresolved.\"\n+        alt: \"Prompt 1 image V3 placeholder\",\n+        caption: \"Prompt 1 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case1/v4-placeholder.jpg\",\n-        alt: \"Signal Bloom version 4 placeholder\",\n-        caption: \"Later version balanced atmosphere with readability.\",\n-        note: \"Editable note: connect this version to final selection logic.\"\n+        alt: \"Prompt 1 image V4 placeholder\",\n+        caption: \"Prompt 1 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       },\n       {\n-        label: \"v5\",\n+        label: \"V5\",\n         src: \"assets/images/case1/v5-placeholder.jpg\",\n-        alt: \"Signal Bloom version 5 placeholder\",\n-        caption: \"Final candidate blended drama with layout readiness.\",\n-        note: \"Editable note: compare selected and rejected options.\"\n+        alt: \"Prompt 1 image V5 placeholder\",\n+        caption: \"Prompt 1 image V5\",\n+        note: \"Editable note: compare V5 against the previous revisions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Fast mood exploration\",\n-        rationale: \"Editable rationale: explain why this tool was useful early.\",\n-        strengths: \"Generated lighting and texture quickly.\",\n-        limitations: \"Needed tighter prompt control for cleaner layouts.\",\n-        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Signal Bloom tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 1 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 1.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Prompt 1 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Refinement testing\",\n-        rationale: \"Editable rationale: explain where a second tool gave more control.\",\n-        strengths: \"More dependable composition and subject emphasis.\",\n-        limitations: \"Could lose some of the expressive atmosphere.\",\n-        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Signal Bloom tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 1 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 1.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Prompt 1 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Signal Bloom final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: summarize why this version best matched the brief.\"\n+      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Prompt 1 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 1.\"\n     },\n     lessonsLearned: [\n-      \"Specific composition language improved consistency.\",\n-      \"AI generated mood quickly, but curation still mattered.\",\n-      \"Late changes worked best when they solved one clear issue.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 1 taught the team about iteration.\"\n     ]\n   },\n   {\n     id: \"museum-dreamscape\",\n-    title: \"Museum Dreamscape Key Art\",\n-    subtitle: \"Testing surreal imagery inside a curated exhibit identity\",\n-    category: \"Tool Comparison\",\n-    versionRange: \"v1 to v4\",\n-    summary: \"Compares prompt phrasing and tool behavior for a museum poster that needed both intrigue and clarity.\",\n-    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Museum Dreamscape thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n-    intent: \"Editable intent scaffold: describe the campaign concept, target mood, and what success looked like.\",\n+    title: \"Prompt 2\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V4\",\n+    summary: \"Placeholder sequence for Prompt 2, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Prompt 2 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 2\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 2 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Start with spectacle, mood, and broad exhibit energy.\",\n-        note: \"Why it changed: too abstract for a polished exhibit poster.\",\n-        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Museum Dreamscape prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 2.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Prompt 2 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add gallery context, material cues, and controlled surreal details.\",\n-        note: \"Why it changed: moved from idea generation toward art direction.\",\n-        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Museum Dreamscape prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 2.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Prompt 2 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case2/v1-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 1 placeholder\",\n-        caption: \"First pass delivered spectacle but limited restraint.\",\n-        note: \"Editable note: call out the exciting but impractical parts.\"\n+        alt: \"Prompt 2 base image placeholder\",\n+        caption: \"Prompt 2 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 2.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case2/v2-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 2 placeholder\",\n-        caption: \"Refinement made the scene feel more exhibition-ready.\",\n-        note: \"Editable note: explain what became more coherent.\"\n+        alt: \"Prompt 2 image V2 placeholder\",\n+        caption: \"Prompt 2 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case2/v3-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 3 placeholder\",\n-        caption: \"Selective constraints improved palette and hierarchy.\",\n-        note: \"Editable note: show how prompt wording changed the result.\"\n+        alt: \"Prompt 2 image V3 placeholder\",\n+        caption: \"Prompt 2 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case2/v4-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 4 placeholder\",\n-        caption: \"Final candidate balanced intrigue and communication.\",\n-        note: \"Editable note: explain why this version won.\"\n+        alt: \"Prompt 2 image V4 placeholder\",\n+        caption: \"Prompt 2 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"High-concept exploration\",\n-        rationale: \"Editable rationale: note how this tool pushed surreal concepts quickly.\",\n-        strengths: \"Strong at atmosphere and surprise.\",\n-        limitations: \"Less stable when the team needed repeatable framing.\",\n-        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Museum Dreamscape tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 2 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 2.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Prompt 2 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Controlled refinement\",\n-        rationale: \"Editable rationale: explain how this tool supported polish and structure.\",\n-        strengths: \"Cleaner subject emphasis and steadier composition.\",\n-        limitations: \"Could feel safer than the exploratory option.\",\n-        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Museum Dreamscape tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 2 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 2.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Prompt 2 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Museum Dreamscape final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: describe why this output best fit the exhibit identity.\"\n+      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Prompt 2 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 2.\"\n     },\n     lessonsLearned: [\n-      \"Tool switching worked best when the problem was clearly defined.\",\n-      \"Surreal prompts improved when space and lighting were constrained.\",\n-      \"The strongest result was the most communicative, not the noisiest.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 2 taught the team about iteration.\"\n     ]\n   },\n   {\n     id: \"modular-motion\",\n-    title: \"Modular Motion Sneaker Board\",\n-    subtitle: \"Product storytelling through materials, camera direction, and style transfer\",\n-    category: \"Style Transfer\",\n-    versionRange: \"v1 to v5\",\n-    summary: \"Explores how product scenes changed as the team adjusted style references, material prompts, and presentation context.\",\n-    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Modular Motion thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n-    intent: \"Editable intent scaffold: define the product concept, intended audience, and the cues AI needed to emphasize.\",\n+    title: \"Prompt 3\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V5\",\n+    summary: \"Placeholder sequence for Prompt 3, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Prompt 3 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 3\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 3 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Broad product concept with material ideas and energy cues.\",\n-        note: \"Why it changed: the output needed better camera control and stronger presentation.\",\n-        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Modular Motion prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 3.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Prompt 3 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add editorial photo language, finish notes, and motion-inspired framing.\",\n-        note: \"Why it changed: aimed for a concept board rather than a generic mockup.\",\n-        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Modular Motion prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 3.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Prompt 3 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case3/v1-placeholder.jpg\",\n-        alt: \"Modular Motion version 1 placeholder\",\n-        caption: \"Initial renders suggested materials but lacked a memorable frame.\",\n-        note: \"Editable note: describe where the first output felt generic.\"\n+        alt: \"Prompt 3 base image placeholder\",\n+        caption: \"Prompt 3 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 3.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case3/v2-placeholder.jpg\",\n-        alt: \"Modular Motion version 2 placeholder\",\n-        caption: \"Prompt revisions added camera intention and stronger rhythm.\",\n-        note: \"Editable note: note gains in realism or energy.\"\n+        alt: \"Prompt 3 image V2 placeholder\",\n+        caption: \"Prompt 3 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case3/v3-placeholder.jpg\",\n-        alt: \"Modular Motion version 3 placeholder\",\n-        caption: \"Style references pushed the result toward an editorial look.\",\n-        note: \"Editable note: compare realism and concept-art appeal.\"\n+        alt: \"Prompt 3 image V3 placeholder\",\n+        caption: \"Prompt 3 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case3/v4-placeholder.jpg\",\n-        alt: \"Modular Motion version 4 placeholder\",\n-        caption: \"Later versions tested cleaner backgrounds and more layout room.\",\n-        note: \"Editable note: explain why practical layout space mattered.\"\n+        alt: \"Prompt 3 image V4 placeholder\",\n+        caption: \"Prompt 3 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       },\n       {\n-        label: \"v5\",\n+        label: \"V5\",\n         src: \"assets/images/case3/v5-placeholder.jpg\",\n-        alt: \"Modular Motion version 5 placeholder\",\n-        caption: \"Final candidate integrated clarity, energy, and brand feel.\",\n-        note: \"Editable note: connect the winner to the project brief.\"\n+        alt: \"Prompt 3 image V5 placeholder\",\n+        caption: \"Prompt 3 image V5\",\n+        note: \"Editable note: compare V5 against the previous revisions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Stylized concept generation\",\n-        rationale: \"Editable rationale: explain which tool created the boldest shapes and moods.\",\n-        strengths: \"Produced expressive silhouettes and lighting quickly.\",\n-        limitations: \"Sometimes drifted away from the product intent.\",\n-        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Modular Motion tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 3 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 3.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Prompt 3 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Product-focused refinement\",\n-        rationale: \"Editable rationale: explain how the second tool preserved readability.\",\n-        strengths: \"Better at keeping the object central and legible.\",\n-        limitations: \"Less surprising than the exploratory tool.\",\n-        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Modular Motion tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 3 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 3.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Prompt 3 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Modular Motion final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: explain how the chosen version balanced concept appeal and clarity.\"\n+      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Prompt 3 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 3.\"\n     },\n     lessonsLearned: [\n-      \"Material language improved when finish and lighting were paired.\",\n-      \"AI could stage products well, but brand clarity still needed human judgment.\",\n-      \"Selection improved when novelty was judged against communication goals.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 3 taught the team about iteration.\"\n     ]\n   },\n   {\n     id: \"neon-flora\",\n-    title: \"Neon Flora Album Cover System\",\n-    subtitle: \"Building a repeatable cover style through prompt patterning\",\n-    category: \"Series Development\",\n-    versionRange: \"v1 to v4\",\n-    summary: \"Documents a music-oriented identity system where the team tested consistency, variation, and the limits of AI as collaborator.\",\n-    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Neon Flora thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n-    intent: \"Editable intent scaffold: explain the identity goal and why consistency mattered across multiple covers.\",\n+    title: \"Prompt 4\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V4\",\n+    summary: \"Placeholder sequence for Prompt 4, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Prompt 4 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 4\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 4 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Style-driven prompt with color, subject, and mood anchors.\",\n-        note: \"Why it changed: strong individually, weak as a repeatable system.\",\n-        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Neon Flora prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 4.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Prompt 4 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add recurring motifs, palette rules, and layout guidance for a multi-cover set.\",\n-        note: \"Why it changed: focused on system-building instead of one-off images.\",\n-        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Neon Flora prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 4.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Prompt 4 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case4/v1-placeholder.jpg\",\n-        alt: \"Neon Flora version 1 placeholder\",\n-        caption: \"First pass delivered style without repeatable structure.\",\n-        note: \"Editable note: identify what worked only in isolation.\"\n+        alt: \"Prompt 4 base image placeholder\",\n+        caption: \"Prompt 4 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 4.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case4/v2-placeholder.jpg\",\n-        alt: \"Neon Flora version 2 placeholder\",\n-        caption: \"Refinement added clearer palette rules and recurring motifs.\",\n-        note: \"Editable note: explain which prompt rules improved consistency.\"\n+        alt: \"Prompt 4 image V2 placeholder\",\n+        caption: \"Prompt 4 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case4/v3-placeholder.jpg\",\n-        alt: \"Neon Flora version 3 placeholder\",\n-        caption: \"Later outputs became easier to curate into a set.\",\n-        note: \"Editable note: mention how selection criteria changed.\"\n+        alt: \"Prompt 4 image V3 placeholder\",\n+        caption: \"Prompt 4 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case4/v4-placeholder.jpg\",\n-        alt: \"Neon Flora version 4 placeholder\",\n-        caption: \"Final candidate balanced identity, variation, and polish.\",\n-        note: \"Editable note: describe why this version fit the series best.\"\n+        alt: \"Prompt 4 image V4 placeholder\",\n+        caption: \"Prompt 4 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Motif discovery\",\n-        rationale: \"Editable rationale: explain which tool surfaced the best visual hooks.\",\n-        strengths: \"Helpful for strong motifs and color relationships.\",\n-        limitations: \"Varied too much for a stable series.\",\n-        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Neon Flora tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 4 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 4.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Prompt 4 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Consistency testing\",\n-        rationale: \"Editable rationale: describe how the second tool handled repeated rules.\",\n-        strengths: \"Better at preserving palette and framing anchors.\",\n-        limitations: \"Less visually daring than the exploratory option.\",\n-        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Neon Flora tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 4 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 4.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Prompt 4 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Neon Flora final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: summarize why this output best captured the intended identity system.\"\n+      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Prompt 4 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 4.\"\n     },\n     lessonsLearned: [\n-      \"Consistency is a stronger AI test than one impressive image.\",\n-      \"Prompt rules became useful once repeatable anchors were identified.\",\n-      \"AI worked best as a collaborator when success criteria were explicit.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 4 taught the team about iteration.\"\n     ]\n   }\n ];\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_OtDvenlYLFP8BC5MrmGFBUKD</summary>

```text
execution error: Io(Custom { kind: Other, error: "windows sandbox: runner error: CreateProcessAsUserW failed: 206" })
```

</details>

<details>
<summary>Tool call: apply_patch (call_Qr6RzqJm1MMeO5CmnYj5Zc3d)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_Qr6RzqJm1MMeO5CmnYj5Zc3d","name":"apply_patch","input":"*** Begin Patch\n*** Update File: script.js\n@@\n   {\n     id: \"signal-bloom\",\n-    title: \"Signal Bloom Poster Suite\",\n-    subtitle: \"From atmosphere-first art to a cleaner poster identity\",\n-    category: \"Prompt Evolution\",\n-    versionRange: \"v1 to v5\",\n-    summary: \"Shows how a poster series moved from moody but unfocused outputs into a more directed layout-ready system.\",\n-    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Signal Bloom thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"prompt evolution\", \"layout control\", \"typography mood\"],\n-    intent: \"Editable intent scaffold: explain the brief, audience, and what the team expected the first image round to solve.\",\n+    title: \"Prompt 1\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V5\",\n+    summary: \"Placeholder sequence for Prompt 1, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case1/cover-placeholder.jpg\", \"Prompt 1 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 1\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 1 was trying to generate and what the team wanted to improve across each revision.\",\n     promptVersions: [\n       {\n-        label: \"v1 brief\",\n-        promptText: \"[Replace with original prompt] Broad first prompt focused on subject, tone, and spectacle.\",\n-        note: \"Why it changed: strong mood, weak structure.\",\n-        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Signal Bloom prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 1.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case1/prompt-v1-placeholder.jpg\", \"Prompt 1 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add composition, palette, and layout guidance for poster use.\",\n-        note: \"Why it changed: aimed for cleaner hierarchy and usable negative space.\",\n-        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Signal Bloom prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 1.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case1/prompt-v2-placeholder.jpg\", \"Prompt 1 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case1/v1-placeholder.jpg\",\n-        alt: \"Signal Bloom version 1 placeholder\",\n-        caption: \"Initial pass emphasized light bloom and mood over structure.\",\n-        note: \"Editable note: record the first promising qualities.\"\n+        alt: \"Prompt 1 base image placeholder\",\n+        caption: \"Prompt 1 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 1.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case1/v2-placeholder.jpg\",\n-        alt: \"Signal Bloom version 2 placeholder\",\n-        caption: \"Prompt tuning tightened the palette and central focus.\",\n-        note: \"Editable note: explain what improved after revision.\"\n+        alt: \"Prompt 1 image V2 placeholder\",\n+        caption: \"Prompt 1 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case1/v3-placeholder.jpg\",\n-        alt: \"Signal Bloom version 3 placeholder\",\n-        caption: \"Mid-stage output tested contrast and silhouette clarity.\",\n-        note: \"Editable note: describe what still felt unresolved.\"\n+        alt: \"Prompt 1 image V3 placeholder\",\n+        caption: \"Prompt 1 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case1/v4-placeholder.jpg\",\n-        alt: \"Signal Bloom version 4 placeholder\",\n-        caption: \"Later version balanced atmosphere with readability.\",\n-        note: \"Editable note: connect this version to final selection logic.\"\n+        alt: \"Prompt 1 image V4 placeholder\",\n+        caption: \"Prompt 1 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       },\n       {\n-        label: \"v5\",\n+        label: \"V5\",\n         src: \"assets/images/case1/v5-placeholder.jpg\",\n-        alt: \"Signal Bloom version 5 placeholder\",\n-        caption: \"Final candidate blended drama with layout readiness.\",\n-        note: \"Editable note: compare selected and rejected options.\"\n+        alt: \"Prompt 1 image V5 placeholder\",\n+        caption: \"Prompt 1 image V5\",\n+        note: \"Editable note: compare V5 against the previous revisions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Fast mood exploration\",\n-        rationale: \"Editable rationale: explain why this tool was useful early.\",\n-        strengths: \"Generated lighting and texture quickly.\",\n-        limitations: \"Needed tighter prompt control for cleaner layouts.\",\n-        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Signal Bloom tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 1 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 1.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case1/tool-a-placeholder.jpg\", \"Prompt 1 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Refinement testing\",\n-        rationale: \"Editable rationale: explain where a second tool gave more control.\",\n-        strengths: \"More dependable composition and subject emphasis.\",\n-        limitations: \"Could lose some of the expressive atmosphere.\",\n-        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Signal Bloom tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 1 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 1.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case1/tool-b-placeholder.jpg\", \"Prompt 1 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Signal Bloom final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: summarize why this version best matched the brief.\"\n+      image: media(\"assets/images/case1/final-placeholder.jpg\", \"Prompt 1 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 1.\"\n     },\n     lessonsLearned: [\n-      \"Specific composition language improved consistency.\",\n-      \"AI generated mood quickly, but curation still mattered.\",\n-      \"Late changes worked best when they solved one clear issue.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 1 taught the team about iteration.\"\n     ]\n   },\n   {\n     id: \"museum-dreamscape\",\n-    title: \"Museum Dreamscape Key Art\",\n-    subtitle: \"Testing surreal imagery inside a curated exhibit identity\",\n-    category: \"Tool Comparison\",\n-    versionRange: \"v1 to v4\",\n-    summary: \"Compares prompt phrasing and tool behavior for a museum poster that needed both intrigue and clarity.\",\n-    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Museum Dreamscape thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"tool comparison\", \"surreal direction\", \"curation\"],\n-    intent: \"Editable intent scaffold: describe the campaign concept, target mood, and what success looked like.\",\n+    title: \"Prompt 2\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V4\",\n+    summary: \"Placeholder sequence for Prompt 2, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case2/cover-placeholder.jpg\", \"Prompt 2 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 2\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 2 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Start with spectacle, mood, and broad exhibit energy.\",\n-        note: \"Why it changed: too abstract for a polished exhibit poster.\",\n-        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Museum Dreamscape prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 2.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case2/prompt-v1-placeholder.jpg\", \"Prompt 2 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add gallery context, material cues, and controlled surreal details.\",\n-        note: \"Why it changed: moved from idea generation toward art direction.\",\n-        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Museum Dreamscape prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 2.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case2/prompt-v2-placeholder.jpg\", \"Prompt 2 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case2/v1-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 1 placeholder\",\n-        caption: \"First pass delivered spectacle but limited restraint.\",\n-        note: \"Editable note: call out the exciting but impractical parts.\"\n+        alt: \"Prompt 2 base image placeholder\",\n+        caption: \"Prompt 2 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 2.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case2/v2-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 2 placeholder\",\n-        caption: \"Refinement made the scene feel more exhibition-ready.\",\n-        note: \"Editable note: explain what became more coherent.\"\n+        alt: \"Prompt 2 image V2 placeholder\",\n+        caption: \"Prompt 2 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case2/v3-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 3 placeholder\",\n-        caption: \"Selective constraints improved palette and hierarchy.\",\n-        note: \"Editable note: show how prompt wording changed the result.\"\n+        alt: \"Prompt 2 image V3 placeholder\",\n+        caption: \"Prompt 2 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case2/v4-placeholder.jpg\",\n-        alt: \"Museum Dreamscape version 4 placeholder\",\n-        caption: \"Final candidate balanced intrigue and communication.\",\n-        note: \"Editable note: explain why this version won.\"\n+        alt: \"Prompt 2 image V4 placeholder\",\n+        caption: \"Prompt 2 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"High-concept exploration\",\n-        rationale: \"Editable rationale: note how this tool pushed surreal concepts quickly.\",\n-        strengths: \"Strong at atmosphere and surprise.\",\n-        limitations: \"Less stable when the team needed repeatable framing.\",\n-        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Museum Dreamscape tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 2 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 2.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case2/tool-a-placeholder.jpg\", \"Prompt 2 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Controlled refinement\",\n-        rationale: \"Editable rationale: explain how this tool supported polish and structure.\",\n-        strengths: \"Cleaner subject emphasis and steadier composition.\",\n-        limitations: \"Could feel safer than the exploratory option.\",\n-        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Museum Dreamscape tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 2 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 2.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case2/tool-b-placeholder.jpg\", \"Prompt 2 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Museum Dreamscape final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: describe why this output best fit the exhibit identity.\"\n+      image: media(\"assets/images/case2/final-placeholder.jpg\", \"Prompt 2 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 2.\"\n     },\n     lessonsLearned: [\n-      \"Tool switching worked best when the problem was clearly defined.\",\n-      \"Surreal prompts improved when space and lighting were constrained.\",\n-      \"The strongest result was the most communicative, not the noisiest.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 2 taught the team about iteration.\"\n     ]\n   },\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_Qr6RzqJm1MMeO5CmnYj5Zc3d</summary>

```text
{"output":"Success. Updated the following files:\nM script.js\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: apply_patch (call_vPhRA4r9URfShi9mMFVxkzC8)</summary>

```json
{"type":"custom_tool_call","status":"completed","call_id":"call_vPhRA4r9URfShi9mMFVxkzC8","name":"apply_patch","input":"*** Begin Patch\n*** Update File: script.js\n@@\n   {\n     id: \"modular-motion\",\n-    title: \"Modular Motion Sneaker Board\",\n-    subtitle: \"Product storytelling through materials, camera direction, and style transfer\",\n-    category: \"Style Transfer\",\n-    versionRange: \"v1 to v5\",\n-    summary: \"Explores how product scenes changed as the team adjusted style references, material prompts, and presentation context.\",\n-    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Modular Motion thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"style transfer\", \"material study\", \"product visualization\"],\n-    intent: \"Editable intent scaffold: define the product concept, intended audience, and the cues AI needed to emphasize.\",\n+    title: \"Prompt 3\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V5\",\n+    summary: \"Placeholder sequence for Prompt 3, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case3/cover-placeholder.jpg\", \"Prompt 3 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 3\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 3 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Broad product concept with material ideas and energy cues.\",\n-        note: \"Why it changed: the output needed better camera control and stronger presentation.\",\n-        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Modular Motion prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 3.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case3/prompt-v1-placeholder.jpg\", \"Prompt 3 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add editorial photo language, finish notes, and motion-inspired framing.\",\n-        note: \"Why it changed: aimed for a concept board rather than a generic mockup.\",\n-        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Modular Motion prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 3.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case3/prompt-v2-placeholder.jpg\", \"Prompt 3 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case3/v1-placeholder.jpg\",\n-        alt: \"Modular Motion version 1 placeholder\",\n-        caption: \"Initial renders suggested materials but lacked a memorable frame.\",\n-        note: \"Editable note: describe where the first output felt generic.\"\n+        alt: \"Prompt 3 base image placeholder\",\n+        caption: \"Prompt 3 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 3.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case3/v2-placeholder.jpg\",\n-        alt: \"Modular Motion version 2 placeholder\",\n-        caption: \"Prompt revisions added camera intention and stronger rhythm.\",\n-        note: \"Editable note: note gains in realism or energy.\"\n+        alt: \"Prompt 3 image V2 placeholder\",\n+        caption: \"Prompt 3 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case3/v3-placeholder.jpg\",\n-        alt: \"Modular Motion version 3 placeholder\",\n-        caption: \"Style references pushed the result toward an editorial look.\",\n-        note: \"Editable note: compare realism and concept-art appeal.\"\n+        alt: \"Prompt 3 image V3 placeholder\",\n+        caption: \"Prompt 3 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case3/v4-placeholder.jpg\",\n-        alt: \"Modular Motion version 4 placeholder\",\n-        caption: \"Later versions tested cleaner backgrounds and more layout room.\",\n-        note: \"Editable note: explain why practical layout space mattered.\"\n+        alt: \"Prompt 3 image V4 placeholder\",\n+        caption: \"Prompt 3 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       },\n       {\n-        label: \"v5\",\n+        label: \"V5\",\n         src: \"assets/images/case3/v5-placeholder.jpg\",\n-        alt: \"Modular Motion version 5 placeholder\",\n-        caption: \"Final candidate integrated clarity, energy, and brand feel.\",\n-        note: \"Editable note: connect the winner to the project brief.\"\n+        alt: \"Prompt 3 image V5 placeholder\",\n+        caption: \"Prompt 3 image V5\",\n+        note: \"Editable note: compare V5 against the previous revisions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Stylized concept generation\",\n-        rationale: \"Editable rationale: explain which tool created the boldest shapes and moods.\",\n-        strengths: \"Produced expressive silhouettes and lighting quickly.\",\n-        limitations: \"Sometimes drifted away from the product intent.\",\n-        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Modular Motion tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 3 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 3.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case3/tool-a-placeholder.jpg\", \"Prompt 3 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Product-focused refinement\",\n-        rationale: \"Editable rationale: explain how the second tool preserved readability.\",\n-        strengths: \"Better at keeping the object central and legible.\",\n-        limitations: \"Less surprising than the exploratory tool.\",\n-        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Modular Motion tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 3 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 3.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case3/tool-b-placeholder.jpg\", \"Prompt 3 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Modular Motion final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: explain how the chosen version balanced concept appeal and clarity.\"\n+      image: media(\"assets/images/case3/final-placeholder.jpg\", \"Prompt 3 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 3.\"\n     },\n     lessonsLearned: [\n-      \"Material language improved when finish and lighting were paired.\",\n-      \"AI could stage products well, but brand clarity still needed human judgment.\",\n-      \"Selection improved when novelty was judged against communication goals.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 3 taught the team about iteration.\"\n     ]\n   },\n   {\n     id: \"neon-flora\",\n-    title: \"Neon Flora Album Cover System\",\n-    subtitle: \"Building a repeatable cover style through prompt patterning\",\n-    category: \"Series Development\",\n-    versionRange: \"v1 to v4\",\n-    summary: \"Documents a music-oriented identity system where the team tested consistency, variation, and the limits of AI as collaborator.\",\n-    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Neon Flora thumbnail placeholder\", \"Insert case study thumbnail here\"),\n-    tags: [\"series development\", \"consistency\", \"AI collaboration\"],\n-    intent: \"Editable intent scaffold: explain the identity goal and why consistency mattered across multiple covers.\",\n+    title: \"Prompt 4\",\n+    subtitle: \"Base image and revision sequence\",\n+    category: \"Prompt Study\",\n+    versionRange: \"Base to V4\",\n+    summary: \"Placeholder sequence for Prompt 4, including the base image, later revisions, tool comparisons, and a final selection.\",\n+    thumbnail: media(\"assets/images/case4/cover-placeholder.jpg\", \"Prompt 4 thumbnail placeholder\", \"Insert case study thumbnail here\"),\n+    tags: [\"prompt 4\", \"base image\", \"revisions\"],\n+    intent: \"Editable intent scaffold: explain what Prompt 4 was trying to generate and what changed across revisions.\",\n     promptVersions: [\n       {\n-        label: \"v1 prompt\",\n-        promptText: \"[Replace with original prompt] Style-driven prompt with color, subject, and mood anchors.\",\n-        note: \"Why it changed: strong individually, weak as a repeatable system.\",\n-        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Neon Flora prompt v1 placeholder\", \"Insert prompt screenshot here\")\n+        label: \"Base prompt\",\n+        promptText: \"[Replace with original prompt] Base prompt for Prompt 4.\",\n+        note: \"Editable note: explain what the base prompt produced and why it needed revision.\",\n+        screenshot: media(\"assets/images/case4/prompt-v1-placeholder.jpg\", \"Prompt 4 base prompt screenshot placeholder\", \"Insert prompt screenshot here\")\n       },\n       {\n-        label: \"v2 revision\",\n-        promptText: \"[Replace with revised prompt] Add recurring motifs, palette rules, and layout guidance for a multi-cover set.\",\n-        note: \"Why it changed: focused on system-building instead of one-off images.\",\n-        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Neon Flora prompt v2 placeholder\", \"Insert revised prompt screenshot here\")\n+        label: \"Prompt revision 1\",\n+        promptText: \"[Replace with revised prompt] Revised prompt for Prompt 4.\",\n+        note: \"Editable note: explain what changed between the base prompt and the revision.\",\n+        screenshot: media(\"assets/images/case4/prompt-v2-placeholder.jpg\", \"Prompt 4 revised prompt screenshot placeholder\", \"Insert revised prompt screenshot here\")\n       }\n     ],\n     iterationImages: [\n       {\n-        label: \"v1\",\n+        label: \"Base\",\n         src: \"assets/images/case4/v1-placeholder.jpg\",\n-        alt: \"Neon Flora version 1 placeholder\",\n-        caption: \"First pass delivered style without repeatable structure.\",\n-        note: \"Editable note: identify what worked only in isolation.\"\n+        alt: \"Prompt 4 base image placeholder\",\n+        caption: \"Prompt 4 base image\",\n+        note: \"Editable note: describe the starting point for Prompt 4.\"\n       },\n       {\n-        label: \"v2\",\n+        label: \"V2\",\n         src: \"assets/images/case4/v2-placeholder.jpg\",\n-        alt: \"Neon Flora version 2 placeholder\",\n-        caption: \"Refinement added clearer palette rules and recurring motifs.\",\n-        note: \"Editable note: explain which prompt rules improved consistency.\"\n+        alt: \"Prompt 4 image V2 placeholder\",\n+        caption: \"Prompt 4 image V2\",\n+        note: \"Editable note: explain what changed from the base image to V2.\"\n       },\n       {\n-        label: \"v3\",\n+        label: \"V3\",\n         src: \"assets/images/case4/v3-placeholder.jpg\",\n-        alt: \"Neon Flora version 3 placeholder\",\n-        caption: \"Later outputs became easier to curate into a set.\",\n-        note: \"Editable note: mention how selection criteria changed.\"\n+        alt: \"Prompt 4 image V3 placeholder\",\n+        caption: \"Prompt 4 image V3\",\n+        note: \"Editable note: describe what improved or stayed unresolved in V3.\"\n       },\n       {\n-        label: \"v4\",\n+        label: \"V4\",\n         src: \"assets/images/case4/v4-placeholder.jpg\",\n-        alt: \"Neon Flora version 4 placeholder\",\n-        caption: \"Final candidate balanced identity, variation, and polish.\",\n-        note: \"Editable note: describe why this version fit the series best.\"\n+        alt: \"Prompt 4 image V4 placeholder\",\n+        caption: \"Prompt 4 image V4\",\n+        note: \"Editable note: explain why V4 was stronger or weaker than earlier versions.\"\n       }\n     ],\n     toolComparisons: [\n       {\n-        tool: \"Tool A placeholder\",\n-        role: \"Motif discovery\",\n-        rationale: \"Editable rationale: explain which tool surfaced the best visual hooks.\",\n-        strengths: \"Helpful for strong motifs and color relationships.\",\n-        limitations: \"Varied too much for a stable series.\",\n-        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Neon Flora tool A placeholder\", \"Insert tool comparison output here\")\n+        tool: \"Tool A\",\n+        role: \"Prompt 4 tool comparison A\",\n+        rationale: \"Editable rationale: explain how Tool A handled Prompt 4.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case4/tool-a-placeholder.jpg\", \"Prompt 4 tool A placeholder\", \"Insert tool comparison output here\")\n       },\n       {\n-        tool: \"Tool B placeholder\",\n-        role: \"Consistency testing\",\n-        rationale: \"Editable rationale: describe how the second tool handled repeated rules.\",\n-        strengths: \"Better at preserving palette and framing anchors.\",\n-        limitations: \"Less visually daring than the exploratory option.\",\n-        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Neon Flora tool B placeholder\", \"Insert second tool comparison output here\")\n+        tool: \"Tool B\",\n+        role: \"Prompt 4 tool comparison B\",\n+        rationale: \"Editable rationale: explain how Tool B handled Prompt 4.\",\n+        strengths: \"Editable strengths placeholder.\",\n+        limitations: \"Editable limitations placeholder.\",\n+        image: media(\"assets/images/case4/tool-b-placeholder.jpg\", \"Prompt 4 tool B placeholder\", \"Insert second tool comparison output here\")\n       }\n     ],\n     finalSelection: {\n-      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Neon Flora final selection placeholder\", \"Insert final selected result here\"),\n-      rationale: \"Editable final note: summarize why this output best captured the intended identity system.\"\n+      image: media(\"assets/images/case4/final-placeholder.jpg\", \"Prompt 4 final selection placeholder\", \"Insert final selected result here\"),\n+      rationale: \"Editable final note: explain why this was the selected final image for Prompt 4.\"\n     },\n     lessonsLearned: [\n-      \"Consistency is a stronger AI test than one impressive image.\",\n-      \"Prompt rules became useful once repeatable anchors were identified.\",\n-      \"AI worked best as a collaborator when success criteria were explicit.\"\n+      \"Record what changed most effectively from base image to later versions.\",\n+      \"Note which revision produced the strongest result.\",\n+      \"Summarize what Prompt 4 taught the team about iteration.\"\n     ]\n   }\n ];\n*** End Patch\n"}
```

</details>

<details>
<summary>Tool output: call_vPhRA4r9URfShi9mMFVxkzC8</summary>

```text
{"output":"Success. Updated the following files:\nM script.js\n","metadata":{"exit_code":0,"duration_seconds":0.1}}
```

</details>

<details>
<summary>Tool call: shell_command (call_RqzYGjfsxqU7pumZZXD5IYuW)</summary>

```json
{"command":"node --check script.js","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool call: shell_command (call_y2laVTsGUGXUixdPr1ahmc6W)</summary>

```json
{"command":"rg -n \"Prompt 1|Prompt 2|Prompt 3|Prompt 4|base image|image V2|image V3|image V4|image V5\" script.js","workdir":"d:\\CODE PROJECTS\\SchoolProjects\\CSC150-Team-Demo-Website","timeout_ms":10000}
```

</details>

<details>
<summary>Tool output: call_RqzYGjfsxqU7pumZZXD5IYuW</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:

```

</details>

<details>
<summary>Tool output: call_y2laVTsGUGXUixdPr1ahmc6W</summary>

```text
Exit code: 0
Wall time: 0.5 seconds
Output:
6:    title: "Prompt 1",
10:    summary: "Placeholder sequence for Prompt 1, including the base image, later revisions, tool comparisons, and a final selection.",
11:    thumbnail: media("assets/images/case1/cover-placeholder.jpg", "Prompt 1 thumbnail placeholder", "Insert case study thumbnail here"),
12:    tags: ["prompt 1", "base image", "revisions"],
13:    intent: "Editable intent scaffold: explain what Prompt 1 was trying to generate and what the team wanted to improve across each revision.",
17:        promptText: "[Replace with original prompt] Base prompt for Prompt 1.",
19:        screenshot: media("assets/images/case1/prompt-v1-placeholder.jpg", "Prompt 1 base prompt screenshot placeholder", "Insert prompt screenshot here")
23:        promptText: "[Replace with revised prompt] Revised prompt for Prompt 1.",
25:        screenshot: media("assets/images/case1/prompt-v2-placeholder.jpg", "Prompt 1 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
32:        alt: "Prompt 1 base image placeholder",
33:        caption: "Prompt 1 base image",
34:        note: "Editable note: describe the starting point for Prompt 1."
39:        alt: "Prompt 1 image V2 placeholder",
40:        caption: "Prompt 1 image V2",
41:        note: "Editable note: explain what changed from the base image to V2."
46:        alt: "Prompt 1 image V3 placeholder",
47:        caption: "Prompt 1 image V3",
53:        alt: "Prompt 1 image V4 placeholder",
54:        caption: "Prompt 1 image V4",
60:        alt: "Prompt 1 image V5 placeholder",
61:        caption: "Prompt 1 image V5",
68:        role: "Prompt 1 tool comparison A",
69:        rationale: "Editable rationale: explain how Tool A handled Prompt 1.",
72:        image: media("assets/images/case1/tool-a-placeholder.jpg", "Prompt 1 tool A placeholder", "Insert tool comparison output here")
76:        role: "Prompt 1 tool comparison B",
77:        rationale: "Editable rationale: explain how Tool B handled Prompt 1.",
80:        image: media("assets/images/case1/tool-b-placeholder.jpg", "Prompt 1 tool B placeholder", "Insert second tool comparison output here")
84:      image: media("assets/images/case1/final-placeholder.jpg", "Prompt 1 final selection placeholder", "Insert final selected result here"),
85:      rationale: "Editable final note: explain why this was the selected final image for Prompt 1."
88:      "Record what changed most effectively from base image to later versions.",
90:      "Summarize what Prompt 1 taught the team about iteration."
95:    title: "Prompt 2",
99:    summary: "Placeholder sequence for Prompt 2, including the base image, later revisions, tool comparisons, and a final selection.",
100:    thumbnail: media("assets/images/case2/cover-placeholder.jpg", "Prompt 2 thumbnail placeholder", "Insert case study thumbnail here"),
101:    tags: ["prompt 2", "base image", "revisions"],
102:    intent: "Editable intent scaffold: explain what Prompt 2 was trying to generate and what changed across revisions.",
106:        promptText: "[Replace with original prompt] Base prompt for Prompt 2.",
108:        screenshot: media("assets/images/case2/prompt-v1-placeholder.jpg", "Prompt 2 base prompt screenshot placeholder", "Insert prompt screenshot here")
112:        promptText: "[Replace with revised prompt] Revised prompt for Prompt 2.",
114:        screenshot: media("assets/images/case2/prompt-v2-placeholder.jpg", "Prompt 2 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
121:        alt: "Prompt 2 base image placeholder",
122:        caption: "Prompt 2 base image",
123:        note: "Editable note: describe the starting point for Prompt 2."
128:        alt: "Prompt 2 image V2 placeholder",
129:        caption: "Prompt 2 image V2",
130:        note: "Editable note: explain what changed from the base image to V2."
135:        alt: "Prompt 2 image V3 placeholder",
136:        caption: "Prompt 2 image V3",
142:        alt: "Prompt 2 image V4 placeholder",
143:        caption: "Prompt 2 image V4",
150:        role: "Prompt 2 tool comparison A",
151:        rationale: "Editable rationale: explain how Tool A handled Prompt 2.",
154:        image: media("assets/images/case2/tool-a-placeholder.jpg", "Prompt 2 tool A placeholder", "Insert tool comparison output here")
158:        role: "Prompt 2 tool comparison B",
159:        rationale: "Editable rationale: explain how Tool B handled Prompt 2.",
162:        image: media("assets/images/case2/tool-b-placeholder.jpg", "Prompt 2 tool B placeholder", "Insert second tool comparison output here")
166:      image: media("assets/images/case2/final-placeholder.jpg", "Prompt 2 final selection placeholder", "Insert final selected result here"),
167:      rationale: "Editable final note: explain why this was the selected final image for Prompt 2."
170:      "Record what changed most effectively from base image to later versions.",
172:      "Summarize what Prompt 2 taught the team about iteration."
177:    title: "Prompt 3",
181:    summary: "Placeholder sequence for Prompt 3, including the base image, later revisions, tool comparisons, and a final selection.",
182:    thumbnail: media("assets/images/case3/cover-placeholder.jpg", "Prompt 3 thumbnail placeholder", "Insert case study thumbnail here"),
183:    tags: ["prompt 3", "base image", "revisions"],
184:    intent: "Editable intent scaffold: explain what Prompt 3 was trying to generate and what changed across revisions.",
188:        promptText: "[Replace with original prompt] Base prompt for Prompt 3.",
190:        screenshot: media("assets/images/case3/prompt-v1-placeholder.jpg", "Prompt 3 base prompt screenshot placeholder", "Insert prompt screenshot here")
194:        promptText: "[Replace with revised prompt] Revised prompt for Prompt 3.",
196:        screenshot: media("assets/images/case3/prompt-v2-placeholder.jpg", "Prompt 3 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
203:        alt: "Prompt 3 base image placeholder",
204:        caption: "Prompt 3 base image",
205:        note: "Editable note: describe the starting point for Prompt 3."
210:        alt: "Prompt 3 image V2 placeholder",
211:        caption: "Prompt 3 image V2",
212:        note: "Editable note: explain what changed from the base image to V2."
217:        alt: "Prompt 3 image V3 placeholder",
218:        caption: "Prompt 3 image V3",
224:        alt: "Prompt 3 image V4 placeholder",
225:        caption: "Prompt 3 image V4",
231:        alt: "Prompt 3 image V5 placeholder",
232:        caption: "Prompt 3 image V5",
239:        role: "Prompt 3 tool comparison A",
240:        rationale: "Editable rationale: explain how Tool A handled Prompt 3.",
243:        image: media("assets/images/case3/tool-a-placeholder.jpg", "Prompt 3 tool A placeholder", "Insert tool comparison output here")
247:        role: "Prompt 3 tool comparison B",
248:        rationale: "Editable rationale: explain how Tool B handled Prompt 3.",
251:        image: media("assets/images/case3/tool-b-placeholder.jpg", "Prompt 3 tool B placeholder", "Insert second tool comparison output here")
255:      image: media("assets/images/case3/final-placeholder.jpg", "Prompt 3 final selection placeholder", "Insert final selected result here"),
256:      rationale: "Editable final note: explain why this was the selected final image for Prompt 3."
259:      "Record what changed most effectively from base image to later versions.",
261:      "Summarize what Prompt 3 taught the team about iteration."
266:    title: "Prompt 4",
270:    summary: "Placeholder sequence for Prompt 4, including the base image, later revisions, tool comparisons, and a final selection.",
271:    thumbnail: media("assets/images/case4/cover-placeholder.jpg", "Prompt 4 thumbnail placeholder", "Insert case study thumbnail here"),
272:    tags: ["prompt 4", "base image", "revisions"],
273:    intent: "Editable intent scaffold: explain what Prompt 4 was trying to generate and what changed across revisions.",
277:        promptText: "[Replace with original prompt] Base prompt for Prompt 4.",
279:        screenshot: media("assets/images/case4/prompt-v1-placeholder.jpg", "Prompt 4 base prompt screenshot placeholder", "Insert prompt screenshot here")
283:        promptText: "[Replace with revised prompt] Revised prompt for Prompt 4.",
285:        screenshot: media("assets/images/case4/prompt-v2-placeholder.jpg", "Prompt 4 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
292:        alt: "Prompt 4 base image placeholder",
293:        caption: "Prompt 4 base image",
294:        note: "Editable note: describe the starting point for Prompt 4."
299:        alt: "Prompt 4 image V2 placeholder",
300:        caption: "Prompt 4 image V2",
301:        note: "Editable note: explain what changed from the base image to V2."
306:        alt: "Prompt 4 image V3 placeholder",
307:        caption: "Prompt 4 image V3",
313:        alt: "Prompt 4 image V4 placeholder",
314:        caption: "Prompt 4 image V4",
321:        role: "Prompt 4 tool comparison A",
322:        rationale: "Editable rationale: explain how Tool A handled Prompt 4.",
325:        image: media("assets/images/case4/tool-a-placeholder.jpg", "Prompt 4 tool A placeholder", "Insert tool comparison output here")
329:        role: "Prompt 4 tool comparison B",
330:        rationale: "Editable rationale: explain how Tool B handled Prompt 4.",
333:        image: media("assets/images/case4/tool-b-placeholder.jpg", "Prompt 4 tool B placeholder", "Insert second tool comparison output here")
337:      image: media("assets/images/case4/final-placeholder.jpg", "Prompt 4 final selection placeholder", "Insert final selected result here"),
338:      rationale: "Editable final note: explain why this was the selected final image for Prompt 4."
341:      "Record what changed most effectively from base image to later versions.",
343:      "Summarize what Prompt 4 taught the team about iteration."

```

</details>
