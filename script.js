const media = (src, alt, label) => ({ src, alt, label });

const caseStudies = [
  {
    id: "signal-bloom",
    title: "Prompt 1",
    subtitle: "Base image and revision sequence",
    category: "Prompt Study",
    versionRange: "Base to V4",
    summary: "Placeholder sequence for Prompt 1, including the base image, later revisions, tool comparisons, and a final selection.",
    thumbnail: media("assets/images/case1/cover-placeholder.jpg", "Prompt 1 thumbnail placeholder", "Insert case study thumbnail here"),
    tags: ["prompt 1", "base image", "revisions"],
    intent: "Editable intent scaffold: explain what Prompt 1 was trying to generate and what the team wanted to improve across each revision.",
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "[Replace with original prompt] Base prompt for Prompt 1.",
        note: "Editable note: explain what the base prompt produced and why it needed revision.",
        screenshot: media("assets/images/case1/prompt-v1-placeholder.jpg", "Prompt 1 base prompt screenshot placeholder", "Insert prompt screenshot here")
      },
      {
        label: "Prompt revision 1",
        promptText: "[Replace with revised prompt] Revised prompt for Prompt 1.",
        note: "Editable note: explain what changed between the base prompt and the revision.",
        screenshot: media("assets/images/case1/prompt-v2-placeholder.jpg", "Prompt 1 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
      }
    ],
    iterationImages: [
      {
        label: "Base",
        src: "assets/images/case1/v1-placeholder.jpg",
        alt: "Prompt 1 base image placeholder",
        caption: "Prompt 1 base image",
        note: "Editable note: describe the starting point for Prompt 1."
      },
      {
        label: "V2",
        src: "assets/images/case1/v2-placeholder.jpg",
        alt: "Prompt 1 image V2 placeholder",
        caption: "Prompt 1 image V2",
        note: "Editable note: explain what changed from the base image to V2."
      },
      {
        label: "V3",
        src: "assets/images/case1/v3-placeholder.jpg",
        alt: "Prompt 1 image V3 placeholder",
        caption: "Prompt 1 image V3",
        note: "Editable note: describe what improved or stayed unresolved in V3."
      },
      {
        label: "V4",
        src: "assets/images/case1/v4-placeholder.jpg",
        alt: "Prompt 1 image V4 placeholder",
        caption: "Prompt 1 image V4",
        note: "Editable note: explain why V4 was stronger or weaker than earlier versions."
      },
    ],
    toolComparisons: [
      {
        tool: "Tool A",
        role: "Prompt 1 tool comparison A",
        rationale: "Editable rationale: explain how Tool A handled Prompt 1.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case1/tool-a-placeholder.jpg", "Prompt 1 tool A placeholder", "Insert tool comparison output here")
      },
      {
        tool: "Tool B",
        role: "Prompt 1 tool comparison B",
        rationale: "Editable rationale: explain how Tool B handled Prompt 1.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case1/tool-b-placeholder.jpg", "Prompt 1 tool B placeholder", "Insert second tool comparison output here")
      }
    ],
    finalSelection: {
      image: media("assets/images/case1/final-placeholder.jpg", "Prompt 1 final selection placeholder", "Insert final selected result here"),
      rationale: "Editable final note: explain why this was the selected final image for Prompt 1."
    },
    lessonsLearned: [
      "Record what changed most effectively from base image to later versions.",
      "Note which revision produced the strongest result.",
      "Summarize what Prompt 1 taught the team about iteration."
    ]
  },
  {
    id: "museum-dreamscape",
    title: "Prompt 2",
    subtitle: "Base image and revision sequence",
    category: "Prompt Study",
    versionRange: "Base to V4",
    summary: "Placeholder sequence for Prompt 2, including the base image, later revisions, tool comparisons, and a final selection.",
    thumbnail: media("assets/images/case2/cover-placeholder.jpg", "Prompt 2 thumbnail placeholder", "Insert case study thumbnail here"),
    tags: ["prompt 2", "base image", "revisions"],
    intent: "Editable intent scaffold: explain what Prompt 2 was trying to generate and what changed across revisions.",
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "[Replace with original prompt] Base prompt for Prompt 2.",
        note: "Editable note: explain what the base prompt produced and why it needed revision.",
        screenshot: media("assets/images/case2/prompt-v1-placeholder.jpg", "Prompt 2 base prompt screenshot placeholder", "Insert prompt screenshot here")
      },
      {
        label: "Prompt revision 1",
        promptText: "[Replace with revised prompt] Revised prompt for Prompt 2.",
        note: "Editable note: explain what changed between the base prompt and the revision.",
        screenshot: media("assets/images/case2/prompt-v2-placeholder.jpg", "Prompt 2 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
      }
    ],
    iterationImages: [
      {
        label: "Base",
        src: "assets/images/case2/v1-placeholder.jpg",
        alt: "Prompt 2 base image placeholder",
        caption: "Prompt 2 base image",
        note: "Editable note: describe the starting point for Prompt 2."
      },
      {
        label: "V2",
        src: "assets/images/case2/v2-placeholder.jpg",
        alt: "Prompt 2 image V2 placeholder",
        caption: "Prompt 2 image V2",
        note: "Editable note: explain what changed from the base image to V2."
      },
      {
        label: "V3",
        src: "assets/images/case2/v3-placeholder.jpg",
        alt: "Prompt 2 image V3 placeholder",
        caption: "Prompt 2 image V3",
        note: "Editable note: describe what improved or stayed unresolved in V3."
      },
      {
        label: "V4",
        src: "assets/images/case2/v4-placeholder.jpg",
        alt: "Prompt 2 image V4 placeholder",
        caption: "Prompt 2 image V4",
        note: "Editable note: explain why V4 was stronger or weaker than earlier versions."
      }
    ],
    toolComparisons: [
      {
        tool: "Tool A",
        role: "Prompt 2 tool comparison A",
        rationale: "Editable rationale: explain how Tool A handled Prompt 2.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case2/tool-a-placeholder.jpg", "Prompt 2 tool A placeholder", "Insert tool comparison output here")
      },
      {
        tool: "Tool B",
        role: "Prompt 2 tool comparison B",
        rationale: "Editable rationale: explain how Tool B handled Prompt 2.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case2/tool-b-placeholder.jpg", "Prompt 2 tool B placeholder", "Insert second tool comparison output here")
      }
    ],
    finalSelection: {
      image: media("assets/images/case2/final-placeholder.jpg", "Prompt 2 final selection placeholder", "Insert final selected result here"),
      rationale: "Editable final note: explain why this was the selected final image for Prompt 2."
    },
    lessonsLearned: [
      "Record what changed most effectively from base image to later versions.",
      "Note which revision produced the strongest result.",
      "Summarize what Prompt 2 taught the team about iteration."
    ]
  },
  {
    id: "modular-motion",
    title: "Prompt 3",
    subtitle: "Base image and revision sequence",
    category: "Prompt Study",
    versionRange: "Base to V4",
    summary: "Placeholder sequence for Prompt 3, including the base image, later revisions, tool comparisons, and a final selection.",
    thumbnail: media("assets/images/case3/cover-placeholder.jpg", "Prompt 3 thumbnail placeholder", "Insert case study thumbnail here"),
    tags: ["prompt 3", "base image", "revisions"],
    intent: "Editable intent scaffold: explain what Prompt 3 was trying to generate and what changed across revisions.",
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "[Replace with original prompt] Base prompt for Prompt 3.",
        note: "Editable note: explain what the base prompt produced and why it needed revision.",
        screenshot: media("assets/images/case3/prompt-v1-placeholder.jpg", "Prompt 3 base prompt screenshot placeholder", "Insert prompt screenshot here")
      },
      {
        label: "Prompt revision 1",
        promptText: "[Replace with revised prompt] Revised prompt for Prompt 3.",
        note: "Editable note: explain what changed between the base prompt and the revision.",
        screenshot: media("assets/images/case3/prompt-v2-placeholder.jpg", "Prompt 3 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
      }
    ],
    iterationImages: [
      {
        label: "Base",
        src: "assets/images/case3/v1-placeholder.jpg",
        alt: "Prompt 3 base image placeholder",
        caption: "Prompt 3 base image",
        note: "Editable note: describe the starting point for Prompt 3."
      },
      {
        label: "V2",
        src: "assets/images/case3/v2-placeholder.jpg",
        alt: "Prompt 3 image V2 placeholder",
        caption: "Prompt 3 image V2",
        note: "Editable note: explain what changed from the base image to V2."
      },
      {
        label: "V3",
        src: "assets/images/case3/v3-placeholder.jpg",
        alt: "Prompt 3 image V3 placeholder",
        caption: "Prompt 3 image V3",
        note: "Editable note: describe what improved or stayed unresolved in V3."
      },
      {
        label: "V4",
        src: "assets/images/case3/v4-placeholder.jpg",
        alt: "Prompt 3 image V4 placeholder",
        caption: "Prompt 3 image V4",
        note: "Editable note: explain why V4 was stronger or weaker than earlier versions."
      },
    ],
    toolComparisons: [
      {
        tool: "Tool A",
        role: "Prompt 3 tool comparison A",
        rationale: "Editable rationale: explain how Tool A handled Prompt 3.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case3/tool-a-placeholder.jpg", "Prompt 3 tool A placeholder", "Insert tool comparison output here")
      },
      {
        tool: "Tool B",
        role: "Prompt 3 tool comparison B",
        rationale: "Editable rationale: explain how Tool B handled Prompt 3.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case3/tool-b-placeholder.jpg", "Prompt 3 tool B placeholder", "Insert second tool comparison output here")
      }
    ],
    finalSelection: {
      image: media("assets/images/case3/final-placeholder.jpg", "Prompt 3 final selection placeholder", "Insert final selected result here"),
      rationale: "Editable final note: explain why this was the selected final image for Prompt 3."
    },
    lessonsLearned: [
      "Record what changed most effectively from base image to later versions.",
      "Note which revision produced the strongest result.",
      "Summarize what Prompt 3 taught the team about iteration."
    ]
  },
  {
    id: "neon-flora",
    title: "Prompt 4",
    subtitle: "Base image and revision sequence",
    category: "Prompt Study",
    versionRange: "Base to V4",
    summary: "Placeholder sequence for Prompt 4, including the base image, later revisions, tool comparisons, and a final selection.",
    thumbnail: media("assets/images/case4/cover-placeholder.jpg", "Prompt 4 thumbnail placeholder", "Insert case study thumbnail here"),
    tags: ["prompt 4", "base image", "revisions"],
    intent: "Editable intent scaffold: explain what Prompt 4 was trying to generate and what changed across revisions.",
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "[Replace with original prompt] Base prompt for Prompt 4.",
        note: "Editable note: explain what the base prompt produced and why it needed revision.",
        screenshot: media("assets/images/case4/prompt-v1-placeholder.jpg", "Prompt 4 base prompt screenshot placeholder", "Insert prompt screenshot here")
      },
      {
        label: "Prompt revision 1",
        promptText: "[Replace with revised prompt] Revised prompt for Prompt 4.",
        note: "Editable note: explain what changed between the base prompt and the revision.",
        screenshot: media("assets/images/case4/prompt-v2-placeholder.jpg", "Prompt 4 revised prompt screenshot placeholder", "Insert revised prompt screenshot here")
      }
    ],
    iterationImages: [
      {
        label: "Base",
        src: "assets/images/case4/v1-placeholder.jpg",
        alt: "Prompt 4 base image placeholder",
        caption: "Prompt 4 base image",
        note: "Editable note: describe the starting point for Prompt 4."
      },
      {
        label: "V2",
        src: "assets/images/case4/v2-placeholder.jpg",
        alt: "Prompt 4 image V2 placeholder",
        caption: "Prompt 4 image V2",
        note: "Editable note: explain what changed from the base image to V2."
      },
      {
        label: "V3",
        src: "assets/images/case4/v3-placeholder.jpg",
        alt: "Prompt 4 image V3 placeholder",
        caption: "Prompt 4 image V3",
        note: "Editable note: describe what improved or stayed unresolved in V3."
      },
      {
        label: "V4",
        src: "assets/images/case4/v4-placeholder.jpg",
        alt: "Prompt 4 image V4 placeholder",
        caption: "Prompt 4 image V4",
        note: "Editable note: explain why V4 was stronger or weaker than earlier versions."
      }
    ],
    toolComparisons: [
      {
        tool: "Tool A",
        role: "Prompt 4 tool comparison A",
        rationale: "Editable rationale: explain how Tool A handled Prompt 4.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case4/tool-a-placeholder.jpg", "Prompt 4 tool A placeholder", "Insert tool comparison output here")
      },
      {
        tool: "Tool B",
        role: "Prompt 4 tool comparison B",
        rationale: "Editable rationale: explain how Tool B handled Prompt 4.",
        strengths: "Editable strengths placeholder.",
        limitations: "Editable limitations placeholder.",
        image: media("assets/images/case4/tool-b-placeholder.jpg", "Prompt 4 tool B placeholder", "Insert second tool comparison output here")
      }
    ],
    finalSelection: {
      image: media("assets/images/case4/final-placeholder.jpg", "Prompt 4 final selection placeholder", "Insert final selected result here"),
      rationale: "Editable final note: explain why this was the selected final image for Prompt 4."
    },
    lessonsLearned: [
      "Record what changed most effectively from base image to later versions.",
      "Note which revision produced the strongest result.",
      "Summarize what Prompt 4 taught the team about iteration."
    ]
  }
];

const analysisInsights = [
  {
    type: "Proposal-aligned insight",
    title: "Process transparency is the main value",
    body: "The project was proposed as more than an AI image gallery. Its strongest idea is that each piece should show the original prompt, revisions, final output, and commentary so the process is visible to the audience."
  },
  {
    type: "Proposal-aligned insight",
    title: "Iteration is the real subject",
    body: "The website is built around the belief that AI-assisted design improves through repeated prompt engineering and comparison, not through a single first-generation image."
  },
  {
    type: "Proposal-aligned insight",
    title: "Tool choice shapes the workflow",
    body: "Gemini's Nano Banana Pro, ChatGPT, and ChatGPT Codex each support different parts of the project. Image generation, prompt development, and site building are treated as connected but distinct tasks."
  },
  {
    type: "Proposal-aligned insight",
    title: "Human judgment still drives curation",
    body: "Even with AI supporting ideation and production, the team still decides which directions are strongest, which revisions matter, and how the work should be presented to viewers."
  }
];

const processStats = [
  { value: "5", label: "Student contributors", note: "Roles were defined in the initial proposal across management, prompting, generation, and development." },
  { value: "4", label: "Case studies scaffolded", note: "The site is currently organized around four prompt-based case studies." },
  { value: "3", label: "Core AI tools planned", note: "Gemini's Nano Banana Pro, ChatGPT, and ChatGPT Codex anchor the proposed workflow." },
  { value: "16", label: "Iteration slots prepared", note: "Four cases with four core version frames each are ready for swap-in." }
];

const workflowStages = [
  {
    label: "Stage 1",
    title: "Concept refinement",
    body: "The team refined an earlier AI art gallery idea into a process-focused portfolio centered on transparency, audience clarity, and visible iteration."
  },
  {
    label: "Stage 2",
    title: "Prompt engineering",
    body: "William Kiecka and John Cessario lead prompt development, shaping the original prompt set and the revisions that drive each case study forward."
  },
  {
    label: "Stage 3",
    title: "Image generation and comparison",
    body: "Vincent Cutaia focuses on image generation, using planned tools such as Gemini's Nano Banana Pro and ChatGPT to produce outputs worth comparing and refining."
  },
  {
    label: "Stage 4",
    title: "Site assembly and coordination",
    body: "Thomas Morrissey handles programming and site design while Mia Miceli supports project management, helping keep the build organized, coherent, and submission-ready."
  }
];

const toolsUsed = [
  {
    label: "Image generation",
    title: "Gemini's Nano Banana Pro",
    body: "Planned as a primary image-generation tool for producing initial AI artwork and alternate visual directions during the case study process."
  },
  {
    label: "Image generation",
    title: "ChatGPT",
    body: "Used as an additional AI platform for generating or refining visual concepts and supporting prompt experimentation across the project."
  },
  {
    label: "Vibe coding",
    title: "ChatGPT Codex",
    body: "Used to help build the frontend website, organize content scaffolding, and speed up iterative implementation of the final portfolio experience."
  },
  {
    label: "Documentation support",
    title: "Prompt screenshots and structured asset folders",
    body: "The process is reinforced through saved screenshots, labeled placeholder assets, and a folder structure that keeps prompts, outputs, and comparison evidence easy to track."
  }
];

const processArtifacts = [
  {
    label: "Initial prompt evidence",
    title: "Original prompt and early-generation capture",
    body: "Use this slot for a screenshot showing the first prompt or earliest tool interface state. Recommended path: assets/images/shared/prompt-shot-a-placeholder.jpg",
    media: media("assets/images/shared/prompt-shot-a-placeholder.jpg", "Prompt evidence placeholder A", "Insert prompt screenshot here")
  },
  {
    label: "Revision prompt evidence",
    title: "Refined prompt and iteration capture",
    body: "Use this slot for revised prompt wording, later tool settings, or a screenshot that shows how the team changed direction. Recommended path: assets/images/shared/prompt-shot-b-placeholder.jpg",
    media: media("assets/images/shared/prompt-shot-b-placeholder.jpg", "Prompt evidence placeholder B", "Insert prompt screenshot here")
  },
  {
    label: "Workflow evidence",
    title: "Proposal, planning, or comparison board",
    body: "Use this slot for planning notes, folder organization, side-by-side version comparisons, or other process proof. Recommended path: assets/images/shared/workflow-board-placeholder.jpg",
    media: media("assets/images/shared/workflow-board-placeholder.jpg", "Workflow evidence placeholder", "Insert workflow screenshot here")
  },
  {
    label: "Tool rationale evidence",
    title: "Model or tool choice support",
    body: "Use this slot for screenshots that justify why a specific tool was chosen for generation, variation, or site production. Recommended path: assets/images/shared/tool-rationale-placeholder.jpg",
    media: media("assets/images/shared/tool-rationale-placeholder.jpg", "Tool rationale evidence placeholder", "Insert tool rationale screenshot here")
  }
];

const contributionCards = [
  {
    label: "Team role",
    title: "Thomas Morrissey — Programmer and Site Designer",
    body: "Responsible for building the website, shaping the visual presentation, and turning the project concept into a polished frontend submission."
  },
  {
    label: "Team role",
    title: "Mia Miceli — Project Manager",
    body: "Supports planning, coordination, and overall progress so the concept, deliverables, and team responsibilities stay aligned."
  },
  {
    label: "Team role",
    title: "William Kiecka and John Cessario — Prompt Engineering",
    body: "Focused on developing and refining prompts, comparing revisions, and improving the direction of AI-generated results through iteration."
  },
  {
    label: "Team role",
    title: "Vincent Cutaia — Image Generation",
    body: "Leads image output creation, helping translate the prompt work into visual results that can be compared, selected, and documented."
  }
];

const reflectionCards = [
  {
    type: "Reflection scaffold",
    title: "Team vision",
    body: "The team's goal is to show AI-generated art with process transparency, making the original prompt, iteration path, final output, and commentary part of the presentation."
  },
  {
    type: "Reflection scaffold",
    title: "AI strengths",
    body: "AI makes it easier to generate multiple directions quickly, explore alternative looks, and move from a rough concept to several viable visual options."
  },
  {
    type: "Reflection scaffold",
    title: "AI weaknesses",
    body: "The project still depends on revision and judgment because first outputs are not always usable, and prompt wording can strongly affect clarity and consistency."
  },
  {
    type: "Reflection scaffold",
    title: "Vibe coding takeaways",
    body: "Using ChatGPT Codex helped accelerate the site's implementation, but the final result still depended on human choices about layout, polish, wording, and QA."
  },
  {
    type: "Reflection scaffold",
    title: "Team dynamics",
    body: "Clear role division across management, prompting, image generation, and programming helped the team cover both creative exploration and final delivery."
  },
  {
    type: "Reflection scaffold",
    title: "Closing insight",
    body: "The project became stronger when it shifted from a simple gallery idea to a process-focused portfolio that treats iteration and reasoning as part of the final work."
  }
];

const interactiveLab = {
  sliderCaseId: "signal-bloom",
  variations: [
    {
      id: "cinematic",
      label: "Cinematic",
      title: "Cinematic direction",
      description: "Use this version to show how dramatic lighting and lens language changed the same base brief.",
      note: "Suggested asset path: assets/images/shared/style-cinematic-placeholder.jpg",
      media: media("assets/images/shared/style-cinematic-placeholder.jpg", "Cinematic style variation placeholder", "Insert cinematic style variation here")
    },
    {
      id: "editorial",
      label: "Editorial",
      title: "Editorial direction",
      description: "Use this version to show how a cleaner, magazine-inspired prompt changed composition and readability.",
      note: "Suggested asset path: assets/images/shared/style-editorial-placeholder.jpg",
      media: media("assets/images/shared/style-editorial-placeholder.jpg", "Editorial style variation placeholder", "Insert editorial style variation here")
    },
    {
      id: "speculative",
      label: "Speculative",
      title: "Speculative direction",
      description: "Use this version to show what happened when the same subject was pushed toward a more abstract outcome.",
      note: "Suggested asset path: assets/images/shared/style-speculative-placeholder.jpg",
      media: media("assets/images/shared/style-speculative-placeholder.jpg", "Speculative style variation placeholder", "Insert speculative style variation here")
    }
  ]
};

const state = {
  activeCaseId: caseStudies[0].id,
  sliderIndex: 0,
  activeVariationId: interactiveLab.variations[0].id
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  hydrateMediaShells(document);
  renderCaseStudyGrid();
  renderCaseStudySelector();
  renderActiveCaseStudy();
  renderAnalysis();
  renderProcessStats();
  renderWorkflowStages();
  renderTools();
  renderArtifacts();
  renderContributions();
  renderReflections();
  setupIterationSlider();
  setupStyleSwitcher();
});

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-open");
    });
  });
}

function renderCaseStudyGrid() {
  const grid = document.getElementById("caseStudyGrid");
  if (!grid) return;

  grid.innerHTML = caseStudies
    .map(
      (study) => `
        <article class="panel case-card">
          <div class="media-shell" data-src="${study.thumbnail.src}" data-alt="${study.thumbnail.alt}" data-label="${study.thumbnail.label}"></div>
          <div class="case-card__header">
            <div>
              <span class="case-card__category">${study.category}</span>
              <h3>${study.title}</h3>
            </div>
            <span class="case-card__range">${study.versionRange}</span>
          </div>
          <p>${study.summary}</p>
          <ul class="tag-list">${study.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <button class="case-card__action" type="button" data-case-open="${study.id}">Open detailed case study</button>
        </article>
      `
    )
    .join("");

  hydrateMediaShells(grid);
  grid.querySelectorAll("[data-case-open]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCaseStudy(button.getAttribute("data-case-open"));
      document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCaseStudySelector() {
  const selector = document.getElementById("caseStudySelector");
  if (!selector) return;

  selector.innerHTML = caseStudies
    .map(
      (study) => `
        <button class="selector-button" type="button" role="tab" aria-selected="${study.id === state.activeCaseId}" data-case-select="${study.id}">
          ${study.title}
        </button>
      `
    )
    .join("");

  selector.querySelectorAll("[data-case-select]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCaseStudy(button.getAttribute("data-case-select"));
    });
  });
}

function setActiveCaseStudy(caseId) {
  if (!caseStudies.some((study) => study.id === caseId)) return;
  state.activeCaseId = caseId;
  renderCaseStudySelector();
  renderActiveCaseStudy();
}

function renderActiveCaseStudy() {
  const container = document.getElementById("caseStudyDetail");
  const study = getActiveCaseStudy();
  if (!container || !study) return;

  container.innerHTML = `
    <div class="panel case-detail__panel">
      <div class="detail-top">
        <div class="detail-heading">
          <p class="eyebrow eyebrow--small">Active case study</p>
          <h3>${study.title}</h3>
          <p class="detail-subtitle">${study.subtitle}</p>
          <ul class="detail-tag-list">${study.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <div class="detail-meta">
            <div class="detail-meta__card">
              <span class="detail-meta__label">Category</span>
              <span class="detail-meta__value">${study.category}</span>
            </div>
            <div class="detail-meta__card">
              <span class="detail-meta__label">Version range</span>
              <span class="detail-meta__value">${study.versionRange}</span>
            </div>
            <div class="detail-meta__card">
              <span class="detail-meta__label">Focus</span>
              <span class="detail-meta__value">${study.summary}</span>
            </div>
          </div>
        </div>
        <div class="media-shell media-shell--wide" data-src="${study.finalSelection.image.src}" data-alt="${study.finalSelection.image.alt}" data-label="${study.finalSelection.image.label}"></div>
      </div>

      <section class="detail-block">
        <h4 class="detail-block__title">Intent</h4>
        <p>${study.intent}</p>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Prompt Evolution</h4>
        <div class="prompt-grid">
          ${study.promptVersions
            .map(
              (prompt) => `
                <article class="prompt-card">
                  <span class="prompt-card__label">${prompt.label}</span>
                  <h4>Prompt version</h4>
                  <p class="prompt-card__text">${prompt.promptText}</p>
                  <p class="prompt-card__note">${prompt.note}</p>
                  <div class="media-shell" data-src="${prompt.screenshot.src}" data-alt="${prompt.screenshot.alt}" data-label="${prompt.screenshot.label}"></div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Output Iterations</h4>
        <div class="iteration-grid">
          ${study.iterationImages
            .map(
              (image) => `
                <article class="iteration-card">
                  <span class="prompt-card__label">${image.label}</span>
                  <h4>${image.caption}</h4>
                  <div class="media-shell" data-src="${image.src}" data-alt="${image.alt}" data-label="Insert version output here"></div>
                  <p>${image.note}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Tool Comparison</h4>
        <div class="comparison-grid">
          ${study.toolComparisons
            .map(
              (tool) => `
                <article class="comparison-card">
                  <span class="comparison-card__label">${tool.tool}</span>
                  <h4>${tool.role}</h4>
                  <p>${tool.rationale}</p>
                  <p><strong>Strengths:</strong> ${tool.strengths}</p>
                  <p><strong>Limitations:</strong> ${tool.limitations}</p>
                  <div class="media-shell" data-src="${tool.image.src}" data-alt="${tool.image.alt}" data-label="${tool.image.label}"></div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Final Selection</h4>
        <p>${study.finalSelection.rationale}</p>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Lessons Learned</h4>
        <ul class="bullet-list">${study.lessonsLearned.map((lesson) => `<li>${lesson}</li>`).join("")}</ul>
      </section>
    </div>
  `;

  hydrateMediaShells(container);
}

function renderAnalysis() {
  const container = document.getElementById("analysisGrid");
  if (!container) return;
  container.innerHTML = analysisInsights
    .map(
      (insight) => `
        <article class="panel insight-card">
          <span class="insight-card__type">${insight.type}</span>
          <h3>${insight.title}</h3>
          <p>${insight.body}</p>
        </article>
      `
    )
    .join("");
}

function renderProcessStats() {
  const container = document.getElementById("processStats");
  if (!container) return;
  container.innerHTML = processStats
    .map(
      (stat) => `
        <article class="stat-card">
          <span class="stat-card__value">${stat.value}</span>
          <span class="stat-card__label">${stat.label}</span>
          <p class="stat-card__note">${stat.note}</p>
        </article>
      `
    )
    .join("");
}

function renderWorkflowStages() {
  const container = document.getElementById("workflowGrid");
  if (!container) return;
  container.innerHTML = workflowStages
    .map(
      (stage, index) => `
        <article class="workflow-card">
          <span class="workflow-card__label">${stage.label}</span>
          <div class="workflow-card__number">${index + 1}</div>
          <h4>${stage.title}</h4>
          <p>${stage.body}</p>
        </article>
      `
    )
    .join("");
}

function renderTools() {
  const container = document.getElementById("toolGrid");
  if (!container) return;
  container.innerHTML = toolsUsed
    .map(
      (tool) => `
        <article class="tool-card">
          <span class="tool-card__label">${tool.label}</span>
          <h4>${tool.title}</h4>
          <p>${tool.body}</p>
        </article>
      `
    )
    .join("");
}

function renderArtifacts() {
  const container = document.getElementById("artifactGrid");
  if (!container) return;

  container.innerHTML = processArtifacts
    .map(
      (artifact) => `
        <article class="artifact-card">
          <span class="artifact-card__label">${artifact.label}</span>
          <h4>${artifact.title}</h4>
          <p>${artifact.body}</p>
          <div class="media-shell" data-src="${artifact.media.src}" data-alt="${artifact.media.alt}" data-label="${artifact.media.label}"></div>
        </article>
      `
    )
    .join("");

  hydrateMediaShells(container);
}

function renderContributions() {
  const container = document.getElementById("contributionGrid");
  if (!container) return;
  container.innerHTML = contributionCards
    .map(
      (card) => `
        <article class="contribution-card">
          <span class="contribution-card__label">${card.label}</span>
          <h4>${card.title}</h4>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");
}

function renderReflections() {
  const container = document.getElementById("reflectionGrid");
  if (!container) return;
  container.innerHTML = reflectionCards
    .map(
      (card) => `
        <article class="panel reflection-card">
          <span class="reflection-card__type">${card.type}</span>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");
}

function setupIterationSlider() {
  const slider = document.getElementById("iterationSlider");
  const prevButton = document.getElementById("iterationPrev");
  const nextButton = document.getElementById("iterationNext");
  const sliderStudy = getSliderCaseStudy();
  if (!slider || !prevButton || !nextButton || !sliderStudy) return;

  slider.max = String(sliderStudy.iterationImages.length - 1);
  slider.value = String(state.sliderIndex);

  slider.addEventListener("input", () => {
    state.sliderIndex = Number(slider.value);
    renderIterationSlider();
  });

  prevButton.addEventListener("click", () => {
    state.sliderIndex = Math.max(0, state.sliderIndex - 1);
    slider.value = String(state.sliderIndex);
    renderIterationSlider();
  });

  nextButton.addEventListener("click", () => {
    state.sliderIndex = Math.min(sliderStudy.iterationImages.length - 1, state.sliderIndex + 1);
    slider.value = String(state.sliderIndex);
    renderIterationSlider();
  });

  renderIterationSlider();
}

function renderIterationSlider() {
  const sliderStudy = getSliderCaseStudy();
  const frame = sliderStudy?.iterationImages[state.sliderIndex];
  const valueBadge = document.getElementById("iterationSliderValue");
  const title = document.getElementById("iterationCaptionTitle");
  const text = document.getElementById("iterationCaptionText");
  const note = document.getElementById("iterationCaptionNote");
  const mediaShell = document.getElementById("iterationSliderMedia");
  const markers = document.getElementById("iterationMarkers");
  if (!sliderStudy || !frame || !valueBadge || !title || !text || !note || !mediaShell || !markers) return;

  valueBadge.textContent = frame.label;
  title.textContent = `${sliderStudy.title} ${frame.label}`;
  text.textContent = frame.caption;
  note.textContent = frame.note;
  setMediaShell(mediaShell, { src: frame.src, alt: frame.alt, label: "Insert version output here" });

  markers.innerHTML = sliderStudy.iterationImages
    .map(
      (item, index) => `
        <span class="step-indicator ${index === state.sliderIndex ? "is-active" : ""}">
          ${item.label}
        </span>
      `
    )
    .join("");
}

function setupStyleSwitcher() {
  const group = document.getElementById("styleToggleGroup");
  if (!group) return;

  group.innerHTML = interactiveLab.variations
    .map(
      (variation) => `
        <button class="toggle-button" type="button" role="tab" aria-selected="${variation.id === state.activeVariationId}" data-variation="${variation.id}">
          ${variation.label}
        </button>
      `
    )
    .join("");

  group.querySelectorAll("[data-variation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeVariationId = button.getAttribute("data-variation");
      setupStyleSwitcher();
      renderStyleVariation();
    });
  });

  renderStyleVariation();
}

function renderStyleVariation() {
  const variation = interactiveLab.variations.find((item) => item.id === state.activeVariationId);
  const title = document.getElementById("styleToggleTitle");
  const description = document.getElementById("styleToggleDescription");
  const note = document.getElementById("styleToggleNote");
  const mediaShell = document.getElementById("styleToggleMedia");
  if (!variation || !title || !description || !note || !mediaShell) return;

  title.textContent = variation.title;
  description.textContent = variation.description;
  note.textContent = variation.note;
  setMediaShell(mediaShell, { src: variation.media.src, alt: variation.media.alt, label: variation.media.label });
}

function hydrateMediaShells(root) {
  root.querySelectorAll(".media-shell[data-src]").forEach((shell) => {
    setMediaShell(shell, {
      src: shell.dataset.src,
      alt: shell.dataset.alt || "",
      label: shell.dataset.label || "Insert image here"
    });
  });
}

function setMediaShell(shell, { src, alt, label }) {
  if (!shell) return;

  shell.innerHTML = "";
  shell.classList.remove("is-loaded");

  const image = document.createElement("img");
  image.alt = alt || label;
  image.loading = "lazy";
  image.decoding = "async";

  const fallback = document.createElement("div");
  fallback.className = "media-fallback";
  fallback.innerHTML = `
    <span class="media-fallback__eyebrow">Placeholder Asset</span>
    <strong>${label}</strong>
    <code>${src || "Add an asset path"}</code>
  `;

  image.addEventListener("load", () => {
    shell.classList.add("is-loaded");
  });

  image.addEventListener("error", () => {
    shell.classList.remove("is-loaded");
  });

  shell.append(image, fallback);
  if (src) {
    image.src = src;
    if (image.complete && image.naturalWidth > 0) {
      shell.classList.add("is-loaded");
    }
  }
}

function getActiveCaseStudy() {
  return caseStudies.find((study) => study.id === state.activeCaseId);
}

function getSliderCaseStudy() {
  return caseStudies.find((study) => study.id === interactiveLab.sliderCaseId);
}
