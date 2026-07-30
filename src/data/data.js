// src/data/data.js

export const navLinks = [
  { id: 1, name: "About", url: "#about" },
  { id: 2, name: "Experience", url: "#experience" },
  { id: 3, name: "Projects", url: "#projects" },
  { id: 4, name: "Skills", url: "#skills" },
  { id: 5, name: "Achievements", url: "#achievements" },
  { id: 6, name: "Certifications", url: "#certifications" },
  { id: 7, name: "Education", url: "#education" },
  { id: 8, name: "Contact", url: "#contact" },
];

export const socialLinks = [
  { id: 1, name: "GitHub", url: "https://github.com/Dibyajyoti-Pradhan" },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/shaky_coder/",
  },
  {
    id: 4,
    name: "LeetCode",
    url: "https://leetcode.com/u/dibyojyotipradhan/",
  },
];

export const personalInfo = {
  name: "Dibyajyoti Pradhan",
  shortName: "Dibyajyoti",
  description: "Senior Software Engineer",
  location: "London, UK",
  experienceYears: "7+",
  specialization: "Full-stack products, distributed systems, and AI-assisted trust platforms",
  about: [
    `Senior Software Engineer based in London with 7+ years at <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>. I work across the full stack—building user-facing experiences and the distributed systems behind them—across payments, advertising, CRM, trust, governance, and safety.`,
    `At HubSpot, I design approval workflows, audit systems, abuse-detection tooling, event-driven services, and LLM-powered experiences with human-in-the-loop controls. Previously, I shipped revenue-driving Ads Manager experiences at Meta and helped build Amazon Pay for Business from the ground up. I also hold a Professional Certificate in Machine Learning and Artificial Intelligence from Imperial College London.`,
    `Outside of work, I love to travel, play chess, run marathons, and work out to stay fit and active.`,
  ],
  currentCompany: {
    name: "HubSpot",
    url: "https://en.wikipedia.org/wiki/HubSpot",
  },
  contact: {
    heading: "Get In Touch",
    message: `I'm open to new roles, collaborations, and interesting problems. My inbox is always open.`,
    email: "dibyajyotipradhan.official@gmail.com",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "Hack", "SQL"],
  },
  {
    category: "Full-Stack & Frameworks",
    items: [
      "React",
      "React Native",
      "Spring MVC",
      "Google Guice",
      "Dagger 2.0",
      "CHIRP RPC",
      "GraphQL",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "AI Systems",
    items: [
      "GPT-4o",
      "Claude AI",
      "LLM Integration",
      "Agents & Tool-Use Design",
      "Human-in-the-Loop Workflows",
      "Prompt Engineering",
      "Evaluations",
      "GenAI",
    ],
  },
  {
    category: "Distributed Systems & Infrastructure",
    items: [
      "Kafka",
      "Event-Driven Architecture",
      "Task Queues",
      "Caching",
      "Idempotency",
      "Microservices",
      "Kubernetes",
      "Docker",
      "AWS",
      "CI/CD",
      "Incident Response",
      "Git",
    ],
  },
  {
    category: "Data & Caching",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Vitess DB", "Memcached"],
  },
  {
    category: "Engineering",
    items: [
      "System Design",
      "Scalable Architecture",
      "RESTful APIs",
      "Microservices",
      "Backend Development",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    position: "Senior Software Engineer",
    company: "HubSpot",
    location: "London",
    url: "https://en.wikipedia.org/wiki/HubSpot",
    date: "07/2024 - Present",
    responsibilities: [
      "Designed and delivered an AI-powered approval automation platform for 40k+ upmarket portals, cutting eligible pre-review work from 72-minute median decision cycles to seconds while preserving permission checks, auditability, and human-in-the-loop controls.",
      "Architected GPT-4 powered audit log summarisation and the AuditTools assistant — natural-language queries, grounded event retrieval, JinJava templating, and Memcached caching — reducing enterprise security investigations from hours to minutes across 100k+ events.",
      "Built audit-log security alerts for abuse patterns such as brute-force logins, bulk exports, and sensitive permission changes on a platform ingesting tens of millions of events daily.",
      "Migrated approval-event publishing to asynchronous Unified Events using Kafka WBL and task queues, with shadow validation and a controlled rollout — removing up to 30 seconds of request-thread blocking.",
      "Also delivered Account Insights (10% higher retention and 40% platform adoption) and GPT-4o admin-cleanup agents that reduced recurring customer costs by 70%.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "React",
      "Google Guice",
      "HTML",
      "CSS",
      "GraphQL",
      "Kafka",
      "AWS",
      "Kubernetes",
      "Vitess DB",
      "MySQL",
      "HBase",
      "Backend",
      "Frontend",
      "GPT-4o",
      "LLM Agents",
      "Memcached",
      "Event-Driven Architecture",
      "Human-in-the-Loop Workflows",
    ],
  },
  {
    id: 2,
    position: "Software Engineer II",
    company: "Meta",
    location: "London",
    url: "https://en.wikipedia.org/wiki/Meta_Platforms",
    date: "04/2022 - 05/2024",
    responsibilities: [
      "Led mid-flight recommendation flows (Placements, Campaign Budget) in Ads Manager end-to-end — delivering a 0.04% top-line revenue lift, 12,000+ weekly resolutions, and the highest adoption among comparable recommendations.",
      "Platformised instant-resolution flows, reducing new-flow implementation from roughly 3 weeks to 3–4 days, while improving load times by 20% across 8 high-traffic surfaces through Relay query prefetching.",
      "Revamped the ad duplication flow for ODAX objectives — 14% revenue increase and 18% growth in ad duplications.",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "Hack",
      "SQL",
      "React Native",
      "GraphQL (Relay)",
      "A/B Testing (Experimentation)",
      "TAO",
      "Scuba",
      "Presto",
      "Frontend",
    ],
  },
  {
    id: 3,
    position: "Software Development Engineer II",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "10/2021 - 02/2022",
    responsibilities: [
      "Scaled Amazon Pay for Business to 5M downloads at a 4.3-star rating from launch.",
      "Built an offline-first architecture that eliminated perceived latency — the app felt instant even on degraded connections.",
      "Reduced MIS Settlement Report crawler time from 3 hours to 10 minutes, unblocking 70+ merchants daily.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "Python",
      "MySQL",
      "AWS",
      "React Native",
      "Spring MVC",
      "DynamoDB",
      "Frontend",
      "Backend",
    ],
  },
  {
    id: 4,
    position: "Software Development Engineer I",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "07/2019 - 09/2021",
    responsibilities: [
      "Built 18 product pages for the Amazon Pay for Business app, shipping with a team of 3 to 5M merchant engagements at launch.",
      "Mentored an SDE (promoted) and an intern (pre-placement offer). Promoted to SDE II within 2 years.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "AWS",
      "React Native",
      "Spring MVC",
      "DynamoDB",
      "React",
      "Full Stack",
      "RESTful APIs",
    ],
  },
  {
    id: 5,
    position: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Hyderabad",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "05/2018 - 07/2018",
    responsibilities: [
      "Built automation for sequence generation in a tier-1 service — used by 100+ developer teams across Amazon.",
      "Delivered a full-stack admin tool to monitor and manage sequence configurations in real-time.",
    ],
    techStack: [
      "Java",
      "AWS",
      "Spring MVC",
      "DynamoDB",
      "Backend",
      "RESTful APIs",
      "Micro-service Architecture",
    ],
  },
];

export const projects = [
  {
    id: 7,
    title: "Hull Tactical – S&P 500 Market Prediction",
    description:
      "Predicting S&P 500 market trends using supervised classification models. Applied feature engineering, cross-validation, and ensemble methods on historical financial data to forecast directional movement.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
    url: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",
    external: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",
    stars: 0,
    badge: "Imperial College London",
  },
  {
    id: 8,
    title: "Black-Box Optimisation Challenge",
    description:
      "Solved a black-box optimisation problem using Bayesian optimisation with Gaussian Process surrogates. Minimised expensive objective function evaluations while converging to the global optimum.",
    techStack: ["Python", "NumPy", "Scikit-learn", "GPy", "Jupyter"],
    url: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",
    external: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",
    stars: 0,
    badge: "Imperial College London",
  },
  {
    id: 1,
    title: "Cloud Storage System",
    description:
      "A Java-based cloud storage system that allows users to manage files and directories, perform file operations, and handle compression and decompression of files.",
    techStack: [
      "Java",
      "Maven",
      "JUnit 5",
      "File Management",
      "Compression",
      "Decompression",
    ],
    url: "https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",
    external: "https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",
    stars: 0,
  },
  {
    id: 2,
    title: "Concurrency In Java: Web Crawler",
    description:
      "Developed a concurrent web crawler in Java to explore and index pages within a specific domain. The crawler processes URLs from a given starting point, printing out each visited URL and its links while restricting itself to the specified domain.",
    techStack: ["Java", "Concurrency", "Maven", "JUnit", "Lombok"],
    url: "https://github.com/Dibyajyoti-Pradhan/Crawler",
    external: "https://github.com/Dibyajyoti-Pradhan/Crawler",
    stars: 0,
  },
  {
    id: 5,
    title: "Pokemon - Advanced HTML & CSS Project",
    description:
      "An advanced CSS project for Pokemon lovers, showcasing how far UI can be developed without JavaScript. Built using advanced HTML, CSS, SASS, BEM, and 7-1 Architecture.",
    techStack: ["HTML", "CSS", "SASS", "BEM", "7-1 Architecture"],
    url: "https://github.com/Dibyajyoti-Pradhan/Iris",
    external: "https://github.com/Dibyajyoti-Pradhan/Iris",
    stars: 0,
  },
  {
    id: 6,
    title: "Netflix: React",
    description:
      "A Netflix clone built from scratch using React, Firebase Authentication, and Styled Components. The project demonstrates advanced component usage and state management.",
    techStack: ["React", "Firebase", "Styled Components"],
    url: "https://github.com/Dibyajyoti-Pradhan/Netflix",
    external: "https://github.com/Dibyajyoti-Pradhan/Netflix",
    stars: 0,
  },
  {
    id: 3,
    title: "CLI Application: Cron Parser",
    description:
      "Implemented a cron expression parser in Java to expand cron strings into detailed schedules. Parses five fields (minute, hour, day of month, month, day of week) and outputs the schedule in a formatted table.",
    techStack: ["Java", "Maven", "CLI Development", "JUnit"],
    url: "https://github.com/Dibyajyoti-Pradhan/CronParser",
    external: "https://github.com/Dibyajyoti-Pradhan/CronParser",
    stars: 0,
  },
  {
    id: 4,
    title: "CSV Parser: Cookie Log",
    description:
      "Developed a command-line application in Java to parse log files and determine the most active cookies for a given date. Processes CSV logs to provide insights into cookie activity.",
    techStack: ["Java", "Maven", "JUnit", "Lombok", "Hashing"],
    url: "https://github.com/Dibyajyoti-Pradhan/Cookie",
    external: "https://github.com/Dibyajyoti-Pradhan/Cookie",
    stars: 0,
  },
];

export const achievements = [
  {
    id: 1,
    title: "GenAI for Ad Creative",
    description:
      "Introduced GenAI (Llama 2) for Ad Creatives in Meta Ads Manager App in Meta GenAI Hackathon, enhancing ad creative capabilities.",
  },
  {
    id: 2,
    title: "Innovation Award",
    description:
      'Received the "Most Innovative Award" at the Amazon Pay EDH Hackathon for pioneering a near-zero latency model for the Amazon Pay For Business App.',
  },
  {
    id: 3,
    title: "Scholarship",
    description:
      "Earned the Jagadis Bose National Talent Search Scholarship as one of 56 scholars selected from more than 3,000 applicants across top-tier colleges.",
  },
];

export const education = [
  {
    id: 1,
    school: "Jadavpur University",
    url: "https://en.wikipedia.org/wiki/Jadavpur_University",
    degree: "Bachelor Of Engineering",
    duration: "2015 - 2019",
    location: "Kolkata, India",
    major: "Electronics and Telecommunication Engineering",
    details: ["CGPA: 8.05", "Award Senior JBSNTS Scholarship"],
  },
  {
    id: 2,
    school: "Krishnath College School",
    url: "https://en.wikipedia.org/wiki/Krishnath_College_School/",
    degree: "Higher Secondary (WBCHSE)",
    duration: "2013 - 2015",
    location: "West Bengal, India",
    major: "",
    details: [
      "Percentage: 94.2%",
      "Percentile: 99.63%",
      "Physics 100 | Maths 95 | English 92",
      "WBJEE: 335 (GEN | Engg.) | 3351 (GEN | Med)",
      "Also cracked IISER Kolkata and IIEST (Mechanical)",
    ],
  },
  {
    id: 3,
    school: "Mary Immaculate School",
    url: "https://mismsd.in/",
    degree: "Secondary (ICSE)",
    duration: "2013",
    location: "West Bengal, India",
    major: "",
    details: [
      "Percentage: 90%",
      "Maths 97 | Computer Application 97 | Science 90",
    ],
  },
];

export const contactInfo = {
  heading: "Get In Touch",
  message: `I'm open to new roles, collaborations, and interesting problems. My inbox is always open.`,
  email: "dibyajyotipradhan.official@gmail.com",
};

export const certifications = [
  {
    id: 1,
    title: "Professional Certificate in Machine Learning and Artificial Intelligence",
    institution: "Imperial College London",
    institutionUrl: "https://www.imperial.ac.uk/business-school/executive-education/technology-analytics-data-science/professional-certificate-machine-learning-and-artificial-intelligence-programme/online/",
    department: "",
    duration: "25 Weeks",
    date: "2025 - 2026",
    status: "Completed",
    issuedDate: "April 9, 2026",
    credentialUrl: "https://certificates.emeritus.org/cc32b358-67db-440e-8d7e-b34e017f1f29#acc.HJN0mXxZ",
    certificatePdf: "/ImperialAI.pdf",
    certificateThumb: "/ImperialAI_thumb.png",
    blockchainId: "0xd8c36175de634850a1b6fc7ae86da566385f7ebb6dfc5479efd9d18c83486853",
    curriculum: [
      "Foundation: Intro to ML, Data Analysis with Pandas, Supervised Learning",
      "Core ML: Classification, Regression, Clustering, Dimensionality Reduction",
      "Advanced: Neural Networks, Deep Learning, CNNs, NLP",
      "Applied: Recommender Systems, Reinforcement Learning, Deployment",
      "Capstone: Industry Projects with Real-World Data"
    ],
    capstoneProjects: [
      {
        title: "Hull Tactical – S&P 500 Market Prediction",
        description: "Predicting market trends using classification models",
        url: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction"
      },
      {
        title: "Black-Box Optimisation Challenge",
        description: "Bayesian optimization with Gaussian Process surrogates",
        url: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge"
      }
    ],
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "Jupyter"],
    outcome: "",
    repositoryUrl: "https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London",
  },
];
