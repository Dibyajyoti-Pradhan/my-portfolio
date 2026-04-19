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
  about: [
    `Senior Software Engineer based in London. Over the past 6 years I’ve shipped products at <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a> — across payments, advertising infrastructure, and AI-powered CRM. At Meta I worked on the Ads Manager, shipping features that moved top-line revenue. At HubSpot I’ve worked on Account Insights — a real-time recommendation engine that improved user retention by 10% and drove 40% platform adoption across the CRM.`,
    `Currently completing a Professional Certificate in ML and AI at Imperial College London — and applying it directly to the AI-powered systems I'm building at HubSpot.`,
    `Outside of work, I love to travel, play chess, run marathons, and work out to stay fit and active.`,
  ],
  currentCompany: {
    name: "HubSpot",
    url: "https://en.wikipedia.org/wiki/HubSpot",
  },
  contact: {
    heading: "Get In Touch",
    message: `I'm open to new roles, collaborations, and interesting problems. My inbox is always open.`,
    email: "dibyojyotipradhan@gmail.com",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "Hack", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "React Native", "Spring MVC", "Google Guice", "Dagger 2.0"],
  },
  {
    category: "AI",
    items: ["GPT-4o", "Claude AI", "LLM Integration", "Prompt Engineering", "GenAI"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Kubernetes", "Kafka", "AWS", "CI/CD"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Vitess DB"],
  },
  {
    category: "Other",
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
      "Designed and built Account Insights, a real-time recommendation engine — 10% user retention increase and 40% platform adoption (highest across the platform).",
      "Architected GPT-4 powered audit log summarization — RPC infrastructure with JinJava templating and memcached caching, processing 100k+ audit events with sub-second response. Reduced enterprise security analysis from hours to minutes.",
      "Built AI-powered admin agents using GPT-4o to automate cleanup of stale CRM assets, reducing 70% of recurring customer costs.",
      "Currently contributing to the Product Approvals platform — building high-throughput, low-latency services for gated access, approval workflows, and audit trail integration across HubSpot products.",
      "Mentored junior developers and collaborated across engineering, product, and design.",
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
      "Built mid-flight recommendation flows (Placements, Campaign Budget) in Ads Manager — drove a 0.04% lift in Meta’s top-line revenue weighted adoptions and 12,000+ weekly resolutions.",
      "Cut screen load times by 20% across 8 high-traffic interfaces via Relay query pre-fetching.",
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
    title: "Scholarship Recognition",
    description:
      "Recognized with the Jagadis Bose National Talent Search Scholarship, selected as one of 56 scholars from over 3000 applicants from top-tier colleges.",
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
  email: "dibyojyotipradhan@gmail.com",
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
