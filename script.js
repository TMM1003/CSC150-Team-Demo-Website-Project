const media = (src, alt, label) => ({ src, alt, label });

const caseStudies = [
  {
    id: "signal-bloom",
    title: "Prompt 1",
    subtitle: "Flower prompt evolution",
    category: "Image Evolution",
    versionRange: "V1 to V4",
    summary: "A flower prompt evolving from a simple starting point into a cinematic macro-style rose sequence.",
    thumbnail: media("assets/images/case1/prompt1image4.png", "Prompt 1 thumbnail", "Prompt 1 latest iteration"),
    tags: ["flower", "rose", "macro"],
    intent: "This case study tracks how a very simple flower prompt evolved into a detailed macro-style rose image through increasingly specific revisions to subject, lighting, texture, atmosphere, and composition.",
    featuredImage: media("assets/images/case1/prompt1image4.png", "Prompt 1 featured image", "Prompt 1 latest iteration"),
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "\"Generate an image of a flower\"",
        note: "The first version used a minimal prompt to establish a basic flower image and create a starting point for later refinements."
      },
      {
        label: "Prompt revision 1",
        promptText: "\"A close-up photograph of a vibrant, deep crimson velvet rose in full bloom, dripping with fresh dew and illuminated by a soft, early morning sun ray, against a softly blurred background of lush green leaves.\"",
        note: "This revision narrowed the subject to a crimson rose and added photographic direction through lighting, dew, and depth-of-field details."
      },
      {
        label: "Prompt revision 2",
        promptText: `This scene focuses on the intricate textures and high-contrast lighting that bring a single rose to life. The crimson petals feature a distinct "velvet" texture, where the edges catch the light to reveal a soft, downy sheen, while the deeper folds remain in rich, dark shadows.

Tiny, spherical dewdrops act as natural magnifying glasses, clinging to the petal surfaces and reflecting the surrounding greenery. The morning sun ray provides a dramatic "rim lighting" effect, tracing the silhouette of the flower and making the moisture glisten. By using a shallow depth of field, the background is transformed into a creamy bokeh of emerald and forest greens, ensuring the viewer's entire focus remains on the structural elegance of the bloom.`,
        note: "This version expanded the prompt with surface texture, reflective dew behavior, and stronger light contrast to improve realism and visual drama."
      },
      {
        label: "Prompt revision 3",
        promptText: `The Micro-Atmosphere

The image captures a fleeting moment of thermal transition. As the cool air of dawn meets the warmth of the first sunbeams, a faint, nearly invisible mist might be rising from the soil below, adding a soft "bloom" or glow to the light. The dewdrops are not merely static; they are heavy, some on the verge of sliding down the curve of a petal, creating a sense of imminent movement and temporal fragility.

Textural Depth and Color Theory

The contrast is driven by a sophisticated interplay of complementary colors:

The Crimson: Not a flat red, but a spectrum ranging from bright scarlet where the sun hits the "rim" to a near-black burgundy in the depths of the corolla.

The Greenery: The background bokeh is not just a blur; it is a mosaic of organic shapes. The emerald tones serve as a cool anchor to the hot intensity of the red rose, making the flower appear to vibrate with color.

The Physics of Light

The rim lighting mentioned previously does more than define the shape; it reveals the cellular structure of the rose. At the very edges, the petals become translucent, showing the delicate veins that act as the flower's vascular system. The light passing through these edges creates a subsurface scattering effect, giving the rose an internal radiance as if it were lit from within rather than just from an external source.

Compositional Focus

The shallow depth of field is pushed to its limit, likely achieved with a macro lens. Only the leading edge of the most prominent petal and a few strategic dewdrops are in razor-sharp focus. This forced perspective creates an intimate, almost voyeuristic view of nature, stripping away the garden's scale to focus on the architectural perfection of a single organism.`,
        note: "The final revision pushed the scene further with atmospheric effects, color theory, light physics, and macro composition to create a more cinematic result."
      }
    ],
    iterationImages: [
      { label: "V1", src: "assets/images/case1/prompt1image1.png", alt: "Prompt 1 base image", caption: "First image result" },
      { label: "V2", src: "assets/images/case1/prompt1image2.jpg", alt: "Prompt 1 image V2", caption: "Second image result" },
      { label: "V3", src: "assets/images/case1/prompt1image3.png", alt: "Prompt 1 image V3", caption: "Third image result" },
      { label: "V4", src: "assets/images/case1/prompt1image4.png", alt: "Prompt 1 image V4", caption: "Final image result" }
    ]
  },
  {
    id: "museum-dreamscape",
    title: "Prompt 2",
    subtitle: "Tree prompt evolution",
    category: "Image Evolution",
    versionRange: "V1 to V4",
    summary: "A tree prompt developing into a dramatic environmental scene with larger scale and richer atmosphere.",
    thumbnail: media("assets/images/case2/prompt2image4.png", "Prompt 2 thumbnail", "Prompt 2 latest iteration"),
    tags: ["tree", "oak", "environment"],
    intent: "This case study follows a tree prompt as it develops from a generic subject into a cinematic environmental portrait, adding realism, age, scale, atmosphere, and finally a surreal fantasy level of world-building detail.",
    featuredImage: media("assets/images/case2/prompt2image4.png", "Prompt 2 featured image", "Prompt 2 latest iteration"),
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "Generate a picture of a tree",
        note: "The opening prompt established the basic subject with almost no stylistic guidance, leaving the first image broad and unspecific."
      },
      {
        label: "Prompt revision 1",
        promptText: "A majestic, ancient oak tree standing alone in a misty meadow at golden hour. The gnarled branches are draped in emerald moss, with sunlight filtering through the dense canopy to create 'God rays' in the hazy air. Hyper-realistic textures, 8k resolution, cinematic lighting, ethereal atmosphere, with a soft-focus background of rolling hills.",
        note: "This revision transformed the subject into a specific ancient oak scene and introduced lighting, mood, and realism cues that made the image more cinematic."
      },
      {
        label: "Prompt revision 2",
        promptText: "A wide-angle, cinematic masterpiece of a colossal, thousand-year-old Great Oak rooted in a sprawling valley. The tree's massive, silver-grey trunk is deeply fissured, with colonies of bioluminescent fungi and thick velvet moss clinging to the bark. Golden twilight sunbeams pierce through a canopy of amber and jade leaves, illuminating millions of dancing dust motes and a light morning dew rising from the tall prairie grass. In the foreground, a few scattered acorns and wildflowers are rendered in sharp macro detail, while the mid-ground shows the gnarled roots breaking the earth like sleeping giants. The background fades into a soft-focus vista of violet-tinted mountains under a hazy, crepuscular sky. Shot on 35mm lens, f/1.8, incredibly intricate textures, ethereal 'National Geographic' style photography, serene and timeless mood.",
        note: "This version pushed the prompt outward into a full environmental composition with lens details, layered foreground and background depth, and a stronger sense of scale."
      },
      {
        label: "Prompt revision 3",
        promptText: "An ultra-high-definition panoramic composition of the 'World-Heart Oak,' a titanic botanical wonder that dominates a primordial valley floor. The bark is an intricate mosaic of weathered charcoal and silver, etched with natural runic patterns where sap glows with a faint, internal amber luminescence. The sprawling canopy, a dense fractal network of gold and emerald, creates a self-contained weather system; wisps of localized rain-mist fall from the lower branches, catching the 5:00 PM horizontal light to create shimmering, miniature rainbows. High-velocity particles of golden pollen and willow-wisps drift through the air with realistic fluid dynamics. The ground-plane is a rich tapestry of damp loam, decaying leaf litter, and translucent ferns that catch the backlight. In the extreme foreground, a single crystal-clear dewdrop hangs from a blade of grass, reflecting the entire tree in its refraction. Background atmospheric perspective shows layers of jagged, cerulean peaks disappearing into a heavy, volumetric haze. Rendered in Unreal Engine 5 style, ray-traced global illumination, sub-surface scattering on every leaf, 12k resolution, a breathtaking fusion of hyper-realism and high-fantasy surrealism.",
        note: "The final revision moved beyond realism into mythic fantasy, using advanced lighting, physics, and environmental effects to create a dramatic world-building image."
      }
    ],
    iterationImages: [
      { label: "V1", src: "assets/images/case2/prompt2image1.png", alt: "Prompt 2 base image", caption: "First image result" },
      { label: "V2", src: "assets/images/case2/prompt2image2.png", alt: "Prompt 2 image V2", caption: "Second image result" },
      { label: "V3", src: "assets/images/case2/prompt2image3.png", alt: "Prompt 2 image V3", caption: "Third image result" },
      { label: "V4", src: "assets/images/case2/prompt2image4.png", alt: "Prompt 2 image V4", caption: "Final image result" }
    ]
  },
  {
    id: "modular-motion",
    title: "Prompt 3",
    subtitle: "Chair prompt evolution",
    category: "Image Evolution",
    versionRange: "V1 to V4",
    summary: "A chair prompt refined into a luxury architectural interior sequence with stronger materials and lighting.",
    thumbnail: media("assets/images/case3/prompt3image4.png", "Prompt 3 thumbnail", "Prompt 3 latest iteration"),
    tags: ["chair", "interior", "design"],
    intent: "This case study develops a generic chair prompt into a highly art-directed architectural interior scene, adding material realism, lighting, camera language, and luxury design atmosphere with each revision.",
    featuredImage: media("assets/images/case3/prompt3image4.png", "Prompt 3 featured image", "Prompt 3 latest iteration"),
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "generate an image of a chair",
        note: "The opening prompt established the core object with no design style, material, or environmental direction."
      },
      {
        label: "Prompt revision 1",
        promptText: "Generate a photorealistic, mid-century modern lounge chair made of deep walnut wood and cognac leather. The chair is positioned in a minimalist, sun-drenched loft with floor-to-ceiling windows and concrete floors. Use soft cinematic lighting to highlight the texture of the leather grain, with a few dust motes dancing in the light beams. The composition should be a wide-angle shot, 8k resolution, conveying a sense of serene, high-end architectural design.",
        note: "This revision gave the chair a specific design style, materials, and environment while introducing cinematic lighting and a more upscale architectural mood."
      },
      {
        label: "Prompt revision 2",
        promptText: `A hyper-realistic architectural interior photograph of a classic mid-century modern lounge chair featuring rich, open-pore walnut grain and aged cognac leather with visible natural creasing. The chair is angled toward a towering wall of industrial steel-framed windows in a brutalist-inspired loft. Late afternoon "golden hour" sunlight streams through the glass, creating sharp, long-shadow geometries across a polished light-gray concrete floor.

The air is thick with atmosphere; microscopic dust particles are illuminated in the high-contrast light shafts. In the soft-focus background, a single monstera plant sits in a matte ceramic pot, adding a touch of organic green. The shot uses a shallow depth of field (f/2.8) to keep the tactile texture of the leather stitching in sharp focus while the urban cityscape outside the window blurs into a soft bokeh. 16k resolution, shot on 35mm lens, high dynamic range, evokes a mood of quiet, expensive solitude.`,
        note: "This version deepened the scene with more precise interior photography cues, stronger material detail, and a carefully staged relationship between the chair and the loft space."
      },
      {
        label: "Prompt revision 3",
        promptText: `A hyper-realistic, medium close-up architectural photograph of an authentic Eames-style mid-century modern lounge chair and ottoman, angled in profile within a grand, brutalist-inspired industrial loft. The open-pore walnut plywood shell exhibits a deep, hand-rubbed oil finish. The aged cognac-colored leather cushions are rendered with an almost microscopic fidelity, showing every natural wrinkle, tactile pore, complex creasing, and the precision-stitching of the buttons and piping. The metal parts of the bases are visible, with a subtle patina on the aluminum.

The chair rests on a large, textured hand-woven wool rug on the polished concrete floor. A towering, thirty-foot wall of grid-patterned, steel-framed industrial windows consumes the right side of the frame. Through the glass, a blurred but recognizable Manhattan skyline, including detailed architectural forms and distant traffic, creates an impressionistic bokeh background. Late afternoon "golden hour" sunlight streams through the glass, refracting slightly. The shafts of light are clearly defined, catching thousands of microscopic dust motes suspended in the thick, atmospheric air. These light beams cast complex, intersecting geometric shadows from the steel window grid, slicing across the concrete floor and draping over the edge of the leather ottoman.

In the mid-ground, a single, mature Monstera deliciosa plant, its leaves detailed with natural imperfections and holes, sits in a handmade, matte black ceramic planter on a low concrete pedestal, adding organic contrast. A stack of three vintage, well-worn architecture books sits on the polished concrete near the chair's base. The entire image is captured with an extremely high-end camera setup: a 35mm lens at f/1.4, resulting in a razor-thin depth of field that makes the texture of the chair's leather and wood pop while the city and plants dissolve into a cinematic haze. The image is rendered at 16k resolution, simulating a 100-megapixel medium-format file with high dynamic range, perfect color grading (warm tones), and subtle film grain. The atmosphere is one of profound, intellectual, expensive solitude.`,
        note: "The final revision pushed the prompt into luxury editorial territory, layering product-level detail, urban context, and advanced camera styling to create a more premium and cinematic image."
      }
    ],
    iterationImages: [
      { label: "V1", src: "assets/images/case3/prompt3image1.png", alt: "Prompt 3 base image", caption: "First image result" },
      { label: "V2", src: "assets/images/case3/prompt3image2.png", alt: "Prompt 3 image V2", caption: "Second image result" },
      { label: "V3", src: "assets/images/case3/prompt3image3.png", alt: "Prompt 3 image V3", caption: "Third image result" },
      { label: "V4", src: "assets/images/case3/prompt3image4.png", alt: "Prompt 3 image V4", caption: "Final image result" }
    ]
  },
  {
    id: "neon-flora",
    title: "Prompt 4",
    subtitle: "Car prompt evolution",
    category: "Image Evolution",
    versionRange: "V1 to V4",
    summary: "A car prompt pushed into a neon-lit hypercar series, from exterior concept to interior cockpit detail.",
    thumbnail: media("assets/images/case4/prompt4image4.png", "Prompt 4 thumbnail", "Prompt 4 latest iteration"),
    tags: ["car", "hypercar", "neon"],
    intent: "This case study evolves a generic car prompt into a cinematic electric hypercar study, moving from a simple exterior concept to a detailed neon-soaked body shot, a close-range mechanical macro, and finally a luxury performance cockpit interior.",
    featuredImage: media("assets/images/case4/prompt4image4.png", "Prompt 4 featured image", "Prompt 4 latest iteration"),
    promptVersions: [
      {
        label: "Base prompt",
        promptText: "generate an image of a car",
        note: "The opening prompt established the subject with no guidance about style, setting, lighting, or vehicle type."
      },
      {
        label: "Prompt revision 1",
        promptText: `An ultra-sleek electric hypercar finished in a deep metallic "midnight cherry" red, captured in a cinematic low-angle shot on a rain-slicked street within a neon-lit futuristic city at night. The composition features vivid cyan and magenta reflections dancing across the polished bodywork and carbon fiber accents, while integrated blue LED headlights pierce through a light atmospheric mist. This hyper-realistic 8k render utilizes a shallow depth of field to create a soft bokeh effect from the surrounding skyscrapers, emphasizing the car's aggressive stance and intricate textures with the precision of a professional 35mm automotive photograph.`,
        note: "This revision transformed the car into a specific electric hypercar scene with dramatic city lighting, color contrast, and a more cinematic automotive-photography style."
      },
      {
        label: "Prompt revision 2",
        promptText: `A close-up, highly detailed photograph of the same midnight cherry red electric hypercar, now focused on the rear quarter panel and wheel. The rain-slicked pavement from the previous image is still visible, reflecting the distorted, colorful blur of the surrounding neon-lit futuristic city. The image captures the complex geometry of the active carbon fiber rear wing as it deploys, highlighting its matte finish against the high-gloss body paint. Droplets of water bead on the surface and streak across the textured side-mirror camera housing. Intricate, multi-spoke alloy wheels, covered in a light film of road spray, reveal massive carbon-ceramic brake rotors and glowing red calipers through the spokes. A prominent rear light bar, a continuous arc of intensely bright red LEDs, slices horizontally across the frame, casting a sharp red glow on the wet ground. The shallow depth of field is even more pronounced here, reducing the background skyscrapers to a complex abstract tapestry of blurred geometric light, creating an intense bokeh. A light haze, mixed with subtle tire smoke from a recent acceleration, drifts around the massive rear tire. The perspective is a tight, three-quarter rear angle, emphasizing the muscular haunches and complex aerodynamic sculpting of the vehicle. The entire image has the high-definition texture and precise focus of a professional, close-range automotive macro shot, emphasizing mechanical artistry and material contrast.`,
        note: "This version tightened the framing and shifted attention to surface detail, aerodynamics, and mechanical components, making the image feel more technical and performance-focused."
      },
      {
        label: "Prompt revision 3",
        promptText: `Step inside the cockpit of the midnight cherry red hypercar for a macro-focused interior study that balances high-tech luxury with visceral performance. The frame centers on the driver's interface, where a yoke-style steering wheel wrapped in Alcantara and hand-stitched crimson thread meets a curved, transparent OLED instrument cluster displaying glowing amber telemetry data. Shifting the focus slightly, the center console reveals a series of haptic glass controls that shimmer with the same cyan and magenta neon hues bleeding in from the exterior city lights through the panoramic canopy. Rain streaks on the glass ceiling create a kinetic pattern of shadows across the deep-bolstered carbon fiber seats, while a subtle plume of condensation from the climate vents adds a sense of atmosphere to the cabin. The lighting is moody and interior-centric, catching the brushed titanium hardware and the microscopic weave of the dashboard's matte carbon fiber, all rendered with an extreme macro depth of field that turns the world outside the windshield into a soft, impressionistic wash of futuristic city lights.`,
        note: "The final revision moved inside the vehicle and reimagined the hypercar as a luxury cockpit study, emphasizing interface design, premium materials, and atmospheric interior lighting."
      }
    ],
    iterationImages: [
      { label: "V1", src: "assets/images/case4/prompt4image1.png", alt: "Prompt 4 base image", caption: "First image result" },
      { label: "V2", src: "assets/images/case4/prompt4image2.png", alt: "Prompt 4 image V2", caption: "Second image result" },
      { label: "V3", src: "assets/images/case4/prompt4image3.png", alt: "Prompt 4 image V3", caption: "Third image result" },
      { label: "V4", src: "assets/images/case4/prompt4image4.png", alt: "Prompt 4 image V4", caption: "Final image result" }
    ]
  }
];

const state = {
  activeCaseId: caseStudies[0].id
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  hydrateMediaShells(document);
  renderCaseStudyGrid();
  renderCaseStudySelector();
  renderActiveCaseStudy();
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
          <button class="case-card__action" type="button" data-case-open="${study.id}">Open image evolution</button>
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
          <p class="eyebrow eyebrow--small">Showcase viewer</p>
          <h3>${study.title}</h3>
          <p class="detail-subtitle">${study.subtitle}</p>
          <ul class="detail-tag-list">${study.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <div class="detail-meta">
            <div class="detail-meta__card">
              <span class="detail-meta__label">Type</span>
              <span class="detail-meta__value">${study.category}</span>
            </div>
            <div class="detail-meta__card">
              <span class="detail-meta__label">Range</span>
              <span class="detail-meta__value">${study.versionRange}</span>
            </div>
            <div class="detail-meta__card">
              <span class="detail-meta__label">Steps</span>
              <span class="detail-meta__value">${study.promptVersions.length} prompts / ${study.iterationImages.length} images</span>
            </div>
          </div>
        </div>
        <div class="media-shell media-shell--wide" data-src="${study.featuredImage.src}" data-alt="${study.featuredImage.alt}" data-label="${study.featuredImage.label}"></div>
      </div>

      <section class="detail-block">
        <h4 class="detail-block__title">Case Overview</h4>
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
                  <h4>Prompt text</h4>
                  <p class="prompt-card__text">${prompt.promptText}</p>
                  <p class="prompt-card__note">${prompt.note}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-block">
        <h4 class="detail-block__title">Image Evolution</h4>
        <div class="iteration-grid">
          ${study.iterationImages
            .map(
              (image) => `
                <article class="iteration-card">
                  <span class="prompt-card__label">${image.label}</span>
                  <h4>${image.caption}</h4>
                  <div class="media-shell" data-src="${image.src}" data-alt="${image.alt}" data-label="${image.caption}"></div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;

  hydrateMediaShells(container);
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
    <span class="media-fallback__eyebrow">Missing Asset</span>
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
