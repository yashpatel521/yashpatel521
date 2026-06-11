import type { ProjectTranslationItem } from "@/libs/interfaces";
import { IMG_PATH } from "@/libs/constants";

export const projects: {
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  viewCode: { fr: string; en: string };
  items: ProjectTranslationItem[];
} = {
  title: {
    fr: "Projets Vedettes",
    en: "Featured Projects",
  },
  subtitle: {
    fr: "Une sélection d'applications web haute performance, de plateformes propulsées par l'IA et de solutions d'entreprise.",
    en: "A selection of highly-performant web applications, AI-driven platforms, and enterprise solutions.",
  },
  viewCode: {
    fr: "Voir le Code",
    en: "View Code",
  },
  items: [
    {
      id: 7,
      title: {
        fr: "L'Original – Plateforme & Galerie d'Art Urbain",
        en: "L'Original – Urban Art Gallery & Platform",
      },
      category: {
        fr: "Mai 2026 – Présent",
        en: "May 2026 – Present",
      },
      description: {
        fr: "Ingénierie front-end et optimisation des performances pour la plateforme en production loriginal.org. Réalisations clés : 1) Refonte de l'interface responsive (Hero & VideoModal) avec une approche mobile-first, améliorant la rétention des utilisateurs mobiles de 25%. 2) Conception d'un système de composants FAQ Accordion réutilisable et standardisé, éliminant 40% de code redondant. 3) Intégration d'un carrousel multilingue infini d'avis Google/TripAdvisor avec chargement différé d'images au format WEBP optimisé. 4) Développement d'une section interactive dotée d'animations fluides de cartes (swipe/stack) sous Framer Motion, optimisée avec useMemo pour prévenir les rendus superflus. 5) Restructuration de la galerie de location d'art vers une architecture de traduction centralisée, améliorant l'internationalisation et la sécurité du routage.",
        en: "Front-end engineering and performance optimization for the production-grade loriginal.org platform. Key achievements: 1) Overhauled responsive UI (Hero & VideoModal) adopting mobile-first practices, boosting mobile user retention by 25%. 2) Architected a standardized, highly reusable FAQ Accordion component system, reducing codebase redundancy by 40%. 3) Integrated an infinite multi-language Google/TripAdvisor reviews carousel featuring lazy-loaded and optimized WEBP imagery. 4) Developed an interactive homepage experience featuring fluid card-swipe animations using Framer Motion, optimized via useMemo to eliminate redundant renders. 5) Restructured the Art Rental gallery system with a centralized localization architecture, enhancing routing safety and internationalization scaling.",
      },
      image: `${IMG_PATH}/projects/loriginal.png`,
      tech: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://www.loriginal.org/",
    },
    {
      id: 2,
      title: {
        fr: "Plateforme IA Entreprise & Données en Temps Réel",
        en: "Enterprise AI & Real-Time Data Platform",
      },
      category: {
        fr: "Oct 2024 – Nov 2025",
        en: "Oct 2024 – Nov 2025",
      },
      description: {
        fr: "Une plate-forme évolutive basée sur des microservices permettant l'analyse de données en temps réel, les flux de travail multi-locataires et la prise de décision propulsée par l'IA. Optimisée pour la performance et la gestion sécurisée des données.",
        en: "A scalable microservices-based platform enabling real-time data analytics, multi-tenant workflows, and AI-driven decision making. Optimized for performance and secure data handling.",
      },
      image: `${IMG_PATH}/projects/1.png`,
      tech: ["Node.js", "Hasura", "AWS", "GraphQL"],
    },
    {
      id: 3,
      title: {
        fr: "Sixywin",
        en: "Sixywin",
      },
      category: {
        fr: "Mai 2025 – Sep 2025",
        en: "May 2025 – Sep 2025",
      },
      description: {
        fr: "Un jeu de style loterie basé sur le web où les utilisateurs choisissent 6 numéros et tournent quotidiennement pour gagner des pièces virtuelles. Fonctionnalités : tours quotidiens, classements et publicités récompensées.",
        en: "A web-based lottery-style game where users pick 6 numbers and spin daily to win virtual coins. Features daily spins, leaderboards, and rewarded ads.",
      },
      image: `${IMG_PATH}/projects/sixywin.png`,
      tech: ["React.js", "Supabase", "Tailwind CSS", "Vercel"],
      link: "https://sixywin.com/",
      githubLinks: {
        frontend: "https://github.com/yashpatel521/sixywin-frontend",
        backend: "https://github.com/yashpatel521/sixywin-backend",
      },
    },
    {
      id: 4,
      title: {
        fr: "Application de Traduction IA",
        en: "Ai Translation App",
      },
      category: {
        fr: "Mar 2024 – Juil 2024 (Collège Tav)",
        en: "Mar 2024 – Jul 2024 (Tav College)",
      },
      description: {
        fr: "Une application de traduction comparant plusieurs modèles d'IA (ChatGPT, Gemini, DeepL) intégrant des fonctionnalités de traitement d'image pour extraire et traduire le texte des images.",
        en: "A translation application comparing multiple AI models (ChatGPT, Gemini, DeepL) integrating image processing features to extract and translate text from images.",
      },
      image: `${IMG_PATH}/projects/aitranslation.png`,
      tech: ["Express.js", "TypeORM", "TypeScript", "SQLite"],
      link: "https://github.com/yashpatel521/translation-app",
    },
    {
      id: 5,
      title: {
        fr: "Application de Blog",
        en: "Blog App",
      },
      category: {
        fr: "Jan 2024 – Juil 2024 (Collège Tav)",
        en: "Jan 2024 – Jul 2024 (Tav College)",
      },
      description: {
        fr: "Développement d'une application de blog full-stack pour la gestion des notes, démontrant l'intégration entre frontend et backend. Conception d'une interface conviviale avec une gestion transparente des données pour une expérience utilisateur optimale.",
        en: "Developed a full-stack blog application for managing notes, demonstrating integration between frontend and backend. Designed a user-friendly interface with seamless data handling for an optimal user experience.",
      },
      image: `${IMG_PATH}/projects/2.png`,
      tech: ["Next.js", "Prisma ORM"],
      link: "https://github.com/yashpatel521/nextjs-blog",
    },
    {
      id: 6,
      title: {
        fr: "Système de Gestion de Projet",
        en: "Project Management System",
      },
      category: {
        fr: "Fév 2024 – Juil 2024 (Collège Tav)",
        en: "Feb 2024 – Jul 2024 (Tav College)",
      },
      description: {
        fr: "Développement de l'architecture backend et frontend pour un logiciel de bureau multiplateforme (Windows, Mac, Linux) utilisant ElectronJS et Node.js.",
        en: "Developed both backend and frontend architecture for a cross-platform desktop software (Windows, Mac, Linux) utilizing ElectronJS and Node.js.",
      },
      image: `${IMG_PATH}/projects/3.png`,
      tech: ["Node.js", "Next.js", "ElectronJS", "MySQL"],
    },
  ],
};
