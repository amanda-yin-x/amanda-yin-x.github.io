export type ExperienceCategory = "all" | "swe" | "research" | "product";

export type Experience = {
  id: string;
  company: string;
  team?: string;
  title: string;
  location: string;
  timeframe: string;
  categories: ExperienceCategory[];
  highlights: string[];
  tags: string[];
  order: number;
  status?: string;
};

export const experiences: Experience[] = [
  {
    id: "boosted-2026",
    company: "Boosted.ai",
    title: "Incoming SWE Intern",
    location: "Toronto, ON · AI for investment",
    timeframe: "Winter 2026",
    status: "Incoming — Winter 2026",
    categories: ["swe", "product"],
    highlights: ["Incoming Winter 2026 — building AI for investment outcomes."],
    tags: ["AI", "Product", "Software Engineering"],
    order: 202600
  },
  {
    id: "microsoft-s25",
    company: "Microsoft",
    team: "Outlook EAT (Enterprise Adoption Team)",
    title: "SWE Intern",
    location: "Redmond, WA · On-site",
    timeframe: "Jun 2025 – Aug 2025",
    categories: ["swe", "product"],
    highlights: [
      "Designed a native-to-web bridge integrating legacy PST into new Outlook.",
      "Built a pipeline with MAPI + Win32GQL + GraphQL to surface local task data in React/TypeScript.",
      "Shipped across 3 codebases spanning Rust, C++, TypeScript, React, and GraphQL."
    ],
    tags: ["Rust", "C++", "TypeScript", "React", "GraphQL", "Windows", "MAPI"],
    order: 202508
  },
  {
    id: "dsi-2025",
    company: "Data Sciences Institute",
    team: "University of Toronto",
    title: "Researcher",
    location: "Contract · Toronto / Remote",
    timeframe: "Apr 2025 – Nov 2025",
    categories: ["research"],
    highlights: [
      "Summer research fellow (2025); full paper acceptance to ICAART 2026: “Sliced-Wasserstein Distribution Alignment”.",
      "Explored weight and activation quantization using mathematical optimization for efficient LLM training/inference.",
      "Collaborated on applied research, experimentation, and writing."
    ],
    tags: ["LLM quantization", "Optimization", "PyTorch", "Research", "Paper writing"],
    order: 202511
  },
  {
    id: "stackadapt-w25",
    company: "StackAdapt",
    team: "Platform Planning",
    title: "SWE Intern",
    location: "Toronto, ON",
    timeframe: "Jan 2025 – Apr 2025",
    categories: ["swe", "product"],
    highlights: [
      "Led full-stack geo-radius targeting for campaign forecast planning (CSV upload, validation, API translation, live map editing).",
      "Built backend flows for S3 uploads, geocode API triggers, pseudo-zip generation, and forecast model attachment.",
      "Authored specs, split tickets, ran estimations, and facilitated weekly cross-team syncs.",
      "Hosted a Tech Tune-Up on SOLID principles and React best practices."
    ],
    tags: ["React", "TypeScript", "Ruby on Rails", "GraphQL"],
    order: 202504
  },
  {
    id: "microsoft-s24",
    company: "Microsoft",
    team: "Outlook Enterprise Adoption",
    title: "SWE & PM Intern",
    location: "Redmond, WA",
    timeframe: "May 2024 – Aug 2024",
    categories: ["swe", "product"],
    highlights: [
      "Designed MRU sorting and intelligent pinning for Outlook’s MetaOS apps.",
      "Implemented acquisition signal capture, MRU sorting algorithms, and resilient edge-case handling.",
      "Aligned engineering, product, and design stakeholders; authored a reviewed technical spec in month one.",
      "Shipped pin tip frequency tuning informed by user behavior analysis; features landed and awaiting flight."
    ],
    tags: ["TypeScript", "React", "GraphQL", "Product Management"],
    order: 202408
  },
  {
    id: "scotiabank-w24",
    company: "Scotiabank",
    team: "AI/ML Research",
    title: "SWE & ML Research Intern",
    location: "Toronto, ON",
    timeframe: "Jan 2024 – Apr 2024",
    categories: ["swe", "research"],
    highlights: [
      "Built machine learning pipelines for document classification with scalable performance.",
      "Created a full-stack data pipeline linking user event signals into unified MongoDB events.",
      "Generated relevance judgments via SDBN click model and expanded the feature store.",
      "Implemented Learning-to-Rank models with pairwise SVM to strengthen personalized rankings."
    ],
    tags: ["JavaScript", "Feature Engineering", "Signal Boosting", "LTR", "SVM", "Solr", "SQL"],
    order: 202404
  }
];

export const skills = [
  { name: "React", description: "Productive, accessible frontends", level: 5 },
  { name: "TypeScript", description: "Typed systems that scale", level: 5 },
  { name: "GraphQL", description: "Schema-first collaboration", level: 4 },
  { name: "Rust", description: "Systems integration for Outlook data bridge", level: 3 },
  { name: "C++", description: "Native pipelines and integrations", level: 3 },
  { name: "Windows APIs / MAPI", description: "Bridging legacy PST to modern UX", level: 3 },
  { name: "Ruby on Rails", description: "API + data modeling", level: 4 },
  { name: "LLM Quantization", description: "Weight/activation optimization", level: 4 },
  { name: "Optimization", description: "Mathematical methods for efficiency", level: 4 },
  { name: "Research Writing", description: "Papers and publication prep", level: 4 },
  { name: "ML Pipelines", description: "Feature engineering & ranking", level: 4 },
  { name: "Data Systems", description: "SQL, Solr, MongoDB", level: 4 },
  { name: "Leadership", description: "Specs, ticketing, cross-team syncs", level: 4 }
];

export const toolbox = {
  languages: ["TypeScript", "Rust", "C++", "JavaScript"],
  frontend: ["React", "GraphQL", "Framer Motion", "TailwindCSS"],
  backend: ["Ruby on Rails", "Node.js", "GraphQL APIs"],
  dataML: ["LLM quantization", "PyTorch", "Solr", "SQL", "MongoDB"],
  systems: ["Windows APIs / MAPI", "S3", "Experimentation", "System design"]
};

export const principles = [
  {
    title: "Human-first engineering",
    copy: "Clarity, usability, reliability — products that feel considered."
  },
  {
    title: "Ship → learn → iterate",
    copy: "Fast feedback loops, measured impact, and steady delivery."
  },
  {
    title: "Venture-minded builder",
    copy: "Turning bold ideas into outcomes with product sense and rigor."
  }
];

export const outsideWork = [
  { title: "Hikes & paddle boarding", emoji: "🏔️" },
  { title: "Tea over coffee chats", emoji: "🍵" },
  { title: "Reading design blogs", emoji: "📚" }
];

export const optimizationFocus = [
  "Performance and reliability",
  "Accessible UX",
  "Collaborative product development"
];

export const contactSuggestions = [
  "Product ideas",
  "Research",
  "Internships",
  "Hikes"
];
