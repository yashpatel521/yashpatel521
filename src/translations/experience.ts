import type { ExperienceTranslationItem } from "@/libs/interfaces";

export const experience: { title: { fr: string; en: string }; subtitle: { fr: string; en: string }; items: ExperienceTranslationItem[] } = {
  title: {
    fr: "Expérience",
    en: "Experience",
  },
  subtitle: {
    fr: "Un parcours dans la création d'applications web évolutives et basées sur le cloud.",
    en: "A track record of building scalable web and cloud-based applications.",
  },
  items: [
    {
      id: 5,
      role: {
        fr: "Développeur Full-Stack (Systèmes de Production)",
        en: "Full-Stack Developer (Production Systems)",
      },
      company: {
        fr: "L'Original.org (Montréal, QC)",
        en: "L’Original.org (Montreal, QC)",
      },
      date: {
        fr: "Mai 2026 – Présent",
        en: "May 2026 – Present",
      },
      description: {
        fr: "– Concevoir et maintenir des applications de production full-stack à l'aide de services backend React, Next.js et Node.js.\n– Concevoir et implémenter des API sans serveur et des interfaces frontend pour les plateformes publiques.\n– Améliorer les performances du système grâce aux stratégies de mise en cache, à l'optimisation SSR et aux améliorations des API.\n– Gérer les pipelines CI/CD à l'aide de GitHub Actions et Vercel pour des flux de travail de déploiement automatisés.",
        en: "– Build and maintain full-stack production applications using React, Next.js, and Node.js backend services.\n– Design and implement serverless APIs and frontend interfaces for public-facing platforms.\n– Improve system performance using caching strategies, SSR optimization, and API enhancements.\n– Manage CI/CD pipelines using GitHub Actions and Vercel for automated deployment workflows.",
      },
      skills: ["React", "Next.js", "Node.js", "CI/CD", "Vercel", "GitHub Actions"],
      link: "https://www.loriginal.org/",
    },
    {
      id: 1,
      role: {
        fr: "Ingénieur Full-Stack Freelance (Contractuel)",
        en: "Freelance Full-Stack Engineer (Contract)",
      },
      company: {
        fr: "Travailleur Autonome (Montréal, QC)",
        en: "Self-Employed (Montreal, QC)",
      },
      date: {
        fr: "Oct 2024 – Nov 2025",
        en: "Oct 2024 – Nov 2025",
      },
      description: {
        fr: "– Concevoir et livrer des applications full-stack à l'aide de microservices React, Node.js et AWS Lambda.\n– Créer des systèmes alimentés par l'IA à l'aide de l'API OpenAI et de TypeScript, réduisant de 60% l'effort manuel des flux de travail.\n– Développer des systèmes backend événementiels dotés de tableaux de bord frontend en temps réel et de pipelines de traitement asynchrones.\n– Implémenter des systèmes d'authentification sécurisés intégrant JWT, contrôle d'accès basé sur les rôles et limitation du débit.",
        en: "– Designed and delivered full-stack applications using React, Node.js, and AWS Lambda microservices.\n– Built AI-powered systems using OpenAI API and TypeScript, reducing manual workflow effort by 60%.\n– Developed event-driven backend systems with real-time frontend dashboards and async processing pipelines.\n– Implemented secure authentication systems including JWT, role-based access control, and rate limiting.",
      },
      skills: ["React", "Node.js", "AWS Lambda", "TypeScript", "OpenAI API", "Security"],
    },
    {
      id: 2,
      role: {
        fr: "Étudiant en Génie Logiciel (Temps Plein)",
        en: "Software Engineering Student (Full-Time)",
      },
      company: {
        fr: "Collège TAV (Montréal, QC)",
        en: "TAV College (Montreal, QC)",
      },
      date: {
        fr: "Mars 2023 – Oct 2024",
        en: "Mar 2023 – Oct 2024",
      },
      description: {
        fr: "– Étudier le développement full-stack, notamment l'ingénierie de l'interface utilisateur frontend, les systèmes backend et l'architecture cloud.\n– Créer plusieurs projets full-stack à l'aide de React, Node.js et d'API REST avec intégration de bases de données.",
        en: "– Studied full-stack development including frontend UI engineering, backend systems, and cloud architecture.\n– Built multiple full-stack projects using React, Node.js, and REST APIs with database integration.",
      },
      skills: ["Software Engineering", "React", "Node.js", "REST APIs", "SQL"],
    },
    {
      id: 3,
      role: {
        fr: "Développeur Backend Node.js",
        en: "Node.js Backend Developer",
      },
      company: {
        fr: "JKSOL Infotech (Inde)",
        en: "JKSOL Infotech (India)",
      },
      date: {
        fr: "Juil 2021 – Juil 2022",
        en: "Jul 2021 – Jul 2022",
      },
      description: {
        fr: "– Développer plus de 12 API REST et intégrer des composants frontend pour les applications de production.\n– Améliorer les performances de la base de données de 30% grâce à des stratégies d'optimisation des requêtes et d'indexation.\n– Travailler sur des fonctionnalités full-stack intégrant l'interface utilisateur, la logique backend et la conception d'API.",
        en: "– Developed 12+ REST APIs and integrated frontend components for production applications.\n– Improved database performance by 30% through query optimization and indexing strategies.\n– Worked on full-stack features including UI integration, backend logic, and API design.",
      },
      skills: ["Node.js", "REST APIs", "Database Optimization", "Full-Stack"],
    },
    {
      id: 4,
      role: {
        fr: "Stagiaire Développeur PHP",
        en: "PHP Developer Intern",
      },
      company: {
        fr: "Differenz System (Inde)",
        en: "Differenz System (India)",
      },
      date: {
        fr: "Déc 2020 – Mai 2021",
        en: "Dec 2020 – May 2021",
      },
      description: {
        fr: "– Créer des interfaces frontend réactives à l'aide de HTML, CSS et JavaScript pour les systèmes de production.\n– Optimiser le backend PHP et les requêtes SQL, améliorant ainsi les performances globales de l'application.",
        en: "– Built responsive frontend interfaces using HTML, CSS, and JavaScript for production systems.\n– Optimized backend PHP and SQL queries improving overall application performance.",
      },
      skills: ["PHP", "SQL", "HTML/CSS", "JavaScript", "Frontend Development"],
    },
  ],
};
