/**
 * Single source of content for the portfolio.
 *
 * Every entry below is taken from the owner-supplied CV, the portfolio PDF,
 * or requirement.md. Do not add content that is not backed by those sources.
 *
 * Owner-review notes (intentionally NOT rendered):
 * - Chloris-AI dataset size / accuracy: the CV and portfolio PDF disagree,
 *   so no figure is published until the owner confirms one.
 * - Phone number: present in the CV, omitted from the public site by default.
 *
 * Images: originals live in assets/images/, optimized copies are generated into
 * public/images/ by `npm run images`. Only reference files that exist there.
 */

export type ExternalLinkData = {
  label: string;
  href: string;
};

export type ImageData = {
  /** Path under /public, e.g. "/images/profile/faiz-portrait.webp". */
  src: string;
  /** Describe what the image shows, for screen-reader users. */
  alt: string;
  width: number;
  height: number;
};

export type ProjectMedia = {
  /** "mobile" = phone screenshots (portrait), "desktop" = web/desktop screenshots (landscape). */
  kind: "mobile" | "desktop";
  shots: ImageData[];
};

export type Project = {
  id: string;
  title: string;
  period: string;
  /** Short format label, e.g. "Mobile app". */
  category: string;
  /** Context of the work, e.g. "Class assignment · Group project". */
  context: string;
  role: string;
  tools: string[];
  summary: string;
  contributions: string[];
  /** Optional scoping note shown with the details (e.g. disclaimers). */
  note?: string;
  repository?: ExternalLinkData;
  /** Real screenshots. Projects with media are shown as featured rows. */
  media?: ProjectMedia;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type FocusArea = {
  title: string;
  /** Technologies from the CV that back this focus area. */
  stack: string;
};

export const profile: {
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  about: string[];
  email: string;
  github: string;
  linkedin: string;
  /** Real portrait. Remove to hide the photo. */
  photo?: ImageData;
} = {
  name: "Faiz Azzam Attanthowi",
  eyebrow: "Computer Science Student · Developer",
  headline: "I build mobile apps, web systems, and backend services, and integrate AI where it fits.",
  intro:
    "Computer Science undergraduate at BINUS University @Malang focused on mobile development, full-stack web engineering, and backend infrastructure, shaped through collaborative class projects.",
  about: [
    "I'm a Computer Science student at Bina Nusantara University (BINUS) @Malang who enjoys turning technical ideas into usable digital products. My focus is mobile app development, full-stack web engineering, and backend infrastructure.",
    "Through group class projects I've worked with Flutter, Expo Go, Laravel, Golang, and Java, including features that integrate AI such as YOLOv8 object detection and the Gemini API. I'm also active as a Laboratory Assistant and campus community member, and I like solving real-world problems through collaborative development and continuous learning.",
  ],
  email: "azzam.attan873@gmail.com",
  github: "https://github.com/VanHeatcliff",
  linkedin: "https://www.linkedin.com/in/faiz-azzam-attanthowi",
  photo: {
    src: "/images/profile/faiz-portrait.webp",
    alt: "Portrait of Faiz Azzam Attanthowi in a white T-shirt, with city lights at night behind him",
    width: 720,
    height: 900,
  },
};

export const focusAreas: FocusArea[] = [
  { title: "Mobile Development", stack: "Flutter · Expo Go (React Native)" },
  { title: "Full-Stack Web", stack: "Laravel · PHP · MySQL" },
  { title: "Backend Engineering", stack: "Golang · Java · Maven" },
  { title: "AI Integration", stack: "YOLOv8 · Gemini API" },
];

/** Hero strip: technologies listed in the CV. */
export const heroStack = ["Flutter", "Expo Go", "Laravel", "Golang", "Java", "MySQL", "YOLOv8", "Gemini API"];

/** Highlights stated in the CV (Laboratory Assistant role and education). */
export const highlights = [
  { value: "3.76", label: "GPA out of 4.00" },
  { value: "8", label: "Lab classes taught as Laboratory Assistant" },
  { value: "140+", label: "Students mentored and evaluated" },
];

export const projects: Project[] = [
  {
    id: "hotel-arca",
    title: "Hotel Arca System",
    period: "May 2026",
    category: "Mobile app",
    context: "Class assignment · Group project",
    role: "Mobile Front-End Developer",
    tools: ["Expo Go", "Golang", "Gemini API"],
    summary:
      "A mobile-based hotel reservation platform with an AI-driven room recommendation feature. Users describe their ideal room in natural language, and the Gemini API extracts keywords to match their preferences with available room inventory.",
    contributions: [
      "Developed the mobile frontend with Expo Go as part of a three-person team on a three-week timeline.",
      "Integrated 52 API endpoints with the Golang backend, as described in the CV.",
      "Learned about microservice architecture and used ngrok to expose a teammate's locally hosted backend for frontend integration.",
    ],
    repository: {
      label: "VanHeatcliff/FE_mobile_hotelArca",
      href: "https://github.com/VanHeatcliff/FE_mobile_hotelArca.git",
    },
    media: {
      kind: "mobile",
      shots: [
        {
          src: "/images/projects/hotel-arca/home.webp",
          alt: "Hotel Arca home screen with a welcome banner and a room search form",
          width: 437,
          height: 900,
        },
        {
          src: "/images/projects/hotel-arca/ai-recommendation.webp",
          alt: "Hotel Arca AI recommendation screen suggesting rooms for a budget request",
          width: 370,
          height: 777,
        },
        {
          src: "/images/projects/hotel-arca/login.webp",
          alt: "Hotel Arca login screen",
          width: 370,
          height: 799,
        },
      ],
    },
  },
  {
    id: "chloris-ai",
    title: "Chloris-AI",
    period: "Oct – Dec 2025",
    category: "Mobile app",
    context: "Class assignment · Group project",
    role: "Mobile Developer (frontend & backend mobile implementation)",
    tools: ["Flutter", "YOLOv8", "Deep learning", "Roboflow", "TensorFlow Lite"],
    summary:
      "An agricultural mobile application designed to help identify crop diseases, with example crops including tomatoes, rice, lettuce, strawberries, and cucumbers.",
    contributions: [
      "Handled both frontend and backend mobile implementation in Flutter within a three-person team over a three-month development cycle.",
      "Worked on custom YOLOv8 model training and integration for plant disease identification within the mobile app.",
      "Tackled model deployment challenges, including format conversion, and learned about edge-AI and mobile architecture.",
    ],
    repository: {
      label: "Hyphen-14/Chloris-ai",
      href: "https://github.com/Hyphen-14/Chloris-ai.git",
    },
    media: {
      kind: "mobile",
      shots: [
        {
          src: "/images/projects/chloris-ai/home.webp",
          alt: "Chloris-AI home screen with a large Start Diagnosis button",
          width: 415,
          height: 900,
        },
        {
          src: "/images/projects/chloris-ai/diagnosis.webp",
          alt: "Chloris-AI diagnosis screen analysing a photo of a plant",
          width: 415,
          height: 900,
        },
      ],
    },
  },
  {
    id: "nutricare",
    title: "NutriCare",
    period: "Dec 2025",
    category: "Desktop / web app",
    context: "Class assignment · Group project",
    role: "Backend Developer",
    tools: ["Java", "Maven", "Gemini API"],
    summary:
      "A health application that generates personalized dietary recommendations from user-provided symptoms and medical history, and adjusts them when users share follow-up updates.",
    contributions: [
      "Built the core application logic in Java within a one-month timeframe as part of a three-person team.",
      "Integrated the Gemini API to process patient health conditions into personalized nutrition recommendations.",
      "Handled backend data processing for cases with multiple simultaneous diseases and overlapping dietary restrictions, strengthening algorithm design and object-oriented programming skills.",
    ],
    note: "Academic project. Its output is not medical advice and has not been clinically validated.",
    repository: {
      label: "Raynerqt/food-recomendation",
      href: "https://github.com/Raynerqt/food-recomendation.git",
    },
    media: {
      kind: "desktop",
      shots: [
        {
          src: "/images/projects/nutricare/analysis-result.webp",
          alt: "NutriCare analysis result listing recommended foods and foods to avoid",
          width: 1225,
          height: 609,
        },
        {
          src: "/images/projects/nutricare/health-form.webp",
          alt: "NutriCare form for entering a health condition, duration, and pain level",
          width: 1225,
          height: 604,
        },
        {
          src: "/images/projects/nutricare/login.webp",
          alt: "NutriCare login page",
          width: 1230,
          height: 609,
        },
      ],
    },
  },
  {
    id: "clothing-store",
    title: "Clothing Store",
    period: "Nov – Dec 2025",
    category: "Web system",
    context: "Class assignment · Group project",
    role: "Full-Stack Developer",
    tools: ["Laravel", "PHP", "MySQL"],
    summary:
      "An e-commerce and database management system for a clothing store, with a shopping cart, product filtering, an admin dashboard, and workflows for inventory, user data, and transactions.",
    contributions: [
      "Collaborated in a three-person team to build the system with Laravel within three weeks.",
      "Designed a relational MySQL database architecture of 16 tables for this project, as described in the CV.",
      "Addressed an N+1 query issue using Laravel Eloquent relationships and eager loading.",
    ],
    repository: {
      label: "VanHeatcliff/LABDatabase_Finpro",
      href: "https://github.com/VanHeatcliff/LABDatabase_Finpro.git",
    },
    media: {
      kind: "desktop",
      shots: [
        {
          src: "/images/projects/clothing-store/home.webp",
          alt: "Clothing Store home page with a seasonal collection banner",
          width: 1280,
          height: 786,
        },
        {
          src: "/images/projects/clothing-store/catalog.webp",
          alt: "Clothing Store catalog page with category filters and a product grid",
          width: 1280,
          height: 786,
        },
        {
          src: "/images/projects/clothing-store/product-detail.webp",
          alt: "Clothing Store product detail page",
          width: 1280,
          height: 782,
        },
      ],
    },
  },
  {
    id: "personal-web-portfolio",
    title: "Personal Web Portfolio",
    period: "May 2026",
    category: "Web system",
    context: "Class assignment · Self-initiated project",
    role: "Full-Stack Developer",
    tools: ["Laravel", "MySQL"],
    summary:
      "An earlier personal portfolio website built to showcase software projects and let visitors send inquiries through an email feature.",
    contributions: [
      "Learned to align architecture choices with project scale.",
      "Explored caching for a framework-heavy landing page.",
    ],
    note: "A previous Laravel project, separate from the static site you are viewing now.",
    repository: {
      label: "VanHeatcliff/PROFILEPAGE_UTS",
      href: "https://github.com/VanHeatcliff/PROFILEPAGE_UTS.git",
    },
  },
  {
    id: "sas-mental-healthclass",
    title: "SAS Mental HealthClass",
    period: "Apr – May 2026",
    category: "Agile project",
    context: "Class assignment · Group project",
    role: "Scrum Master",
    tools: ["Jira", "Agile / Scrum"],
    summary:
      "Coordinated a four-person Agile team (Product Owner, Scrum Master, and two developers) developing a mental health application.",
    contributions: [
      "Managed project workflows and facilitated one-week sprints using Jira.",
      "Supported team collaboration, helped resolve bottlenecks, and coordinated timely feature delivery.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", items: ["Golang", "Java", "PHP", "Python"] },
  { title: "Frontend & Mobile", items: ["Flutter", "Expo Go (React Native)"] },
  {
    title: "Backend & Database",
    items: ["Laravel", "MySQL (Master-Slave Replication)", "Backend Infrastructure"],
  },
  { title: "AI & Integration", items: ["YOLOv8 (Object Detection)", "Gemini API Integration"] },
  { title: "Tools", items: ["Git / Version Control", "Maven"] },
  { title: "Languages", items: ["Indonesian (Native)", "English (Working Proficiency)"] },
];

export const experiences: Experience[] = [
  {
    role: "Laboratory Assistant — Full Teaching",
    organization: "Digital Technopreneur Laboratory, BINUS @Malang",
    period: "Aug 2026 – Present",
    points: [
      "Led and managed full-teaching practical sessions for 8 laboratory classes, translating computer science concepts into hands-on learning.",
      "Mentored and evaluated 140+ students (20–21 students per class), guiding technical problem-solving, coding practices, and practical assignments.",
      "Delivered laboratory instruction in Database Technology, Computer Network, and Computational Physics.",
    ],
  },
  {
    role: "Backend Member",
    organization: "Bina Nusantara Computer Club (BNCC)",
    period: "Oct 2024 – Aug 2025",
    points: [
      "Collaborated with peers to develop technical skills and support technology-driven initiatives within the campus developer community.",
      "Engaged in backend software architecture discussions and continuous learning.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "Bina Nusantara University (BINUS) @Malang",
  period: "Sept 2024 – Present",
  expected: "2028",
  gpa: "3.76 / 4.00",
  /** Shown under the label "Semester". Update as studies progress. */
  semester: "5th",
  scholarship: "Scholarship recipient",
  coursework: [
    "Data Structures",
    "Algorithm Design and Analysis",
    "Artificial Intelligence",
    "Database Technology",
    "Object-Oriented Programming",
    "Web Programming",
    "Software Engineering",
  ],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
