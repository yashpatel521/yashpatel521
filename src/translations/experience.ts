import type { Language } from "@/libs/types";
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
        fr: "Développeur Full Stack",
        en: "Full Stack Developer",
      },
      company: {
        fr: "loriginal.org",
        en: "loriginal.org",
      },
      date: {
        fr: "Mai 2026 - Présent (Montréal, QC)",
        en: "May 2026 - Present (Montreal, QC)",
      },
      description: {
        fr: "Direction du développement des plateformes Artur.art et Loriginal.org. Conception et implémentation de composants React front-end et routes API Next.js back-end. Gestion du cycle de vie des applications via GitHub et Vercel, en assurant des performances élevées et un SEO technique.",
        en: "Leading the development of the Artur.art and Loriginal.org platforms. Designing and implementing front-end React components and back-end Next.js API routes. Managing application lifecycle via GitHub and Vercel, and ensuring high performance and technical SEO.",
      },
      skills: ["React", "Next.js", "Vercel", "SEO", "CI/CD"],
    },
    {
      id: 1,
      role: {
        fr: "Ingénieur Full Stack Freelance",
        en: "Freelance Full Stack Engineer",
      },
      company: {
        fr: "Travailleur Autonome",
        en: "Self-Employed",
      },
      date: {
        fr: "Oct 2024 - Mars 2026 (Montréal, QC)",
        en: "Oct 2024 - March 2026 (Montreal, QC)",
      },
      description: {
        fr: "Spécialisé dans l'analyse web avancée, l'automatisation back-end et le développement de systèmes alimentés par l'IA. Architecture de plateformes d'automatisation alimentées par l'IA utilisant GraphQL, AWS Lambda et des frameworks serverless pour optimiser les flux de travail d'entreprise.",
        en: "Specialized in advanced web analysis, backend automation, and AI-driven system development. Architected AI-powered automation platforms using GraphQL, AWS Lambda, and serverless frameworks to optimize enterprise workflows.",
      },
      skills: ["Node.js", "TypeScript", "AWS Lambda", "GraphQL", "AI/LLMs"],
    },
    {
      id: 2,
      role: {
        fr: "Gérant",
        en: "Manager",
      },
      company: {
        fr: "Subway",
        en: "Subway",
      },
      date: {
        fr: "Jan 2024 - Présent (Montréal, QC)",
        en: "Jan 2024 - Present (Montreal, QC)",
      },
      description: {
        fr: "Gestion des opérations quotidiennes et du personnel dans un environnement rapide.",
        en: "Managing daily operations and staffing in a fast-paced environment.",
      },
      skills: ["Management", "Operations"],
    },
    {
      id: 3,
      role: {
        fr: "Développeur Node.js",
        en: "Node.js Developer",
      },
      company: {
        fr: "JKSOL INFOTECH",
        en: "JKSOL INFOTECH",
      },
      date: {
        fr: "Juil 2021 - Juil 2022 (Inde)",
        en: "Jul 2021 - Jul 2022 (India)",
      },
      description: {
        fr: "Ingénierie et optimisation de 12 API back-end utilisant Node.js, Express.js et PostgreSQL, réduisant les temps de réponse serveur de 30% tout en supportant 50,000+ utilisateurs simultanés.",
        en: "Engineered and optimized 12 backend APIs using Node.js, Express.js, and PostgreSQL, reducing server response times by 30% while supporting 50,000+ concurrent users.",
      },
      skills: ["Node.js", "PostgreSQL", "TypeORM", "WebSocket", "AWS EC2"],
    },
    {
      id: 4,
      role: {
        fr: "Développeur PHP (Stage)",
        en: "PHP Developer (Internship)",
      },
      company: {
        fr: "Differenz System",
        en: "Differenz System",
      },
      date: {
        fr: "Déc 2020 - Mai 2021 (Inde)",
        en: "Dec 2020 - May 2021 (India)",
      },
      description: {
        fr: "Facilitation du développement et du déploiement de 8+ applications web WordPress et PHP, gestion des mises en production en direct, et réduction des temps d'arrêt de 20%.",
        en: "Facilitated development and deployment of 8+ WordPress and PHP web applications, managing live production releases, and reducing downtime by 20%.",
      },
      skills: ["PHP", "WordPress", "JavaScript", "SQL"],
    },
  ],
};
