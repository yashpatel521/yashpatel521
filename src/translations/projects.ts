import type { Language } from "@/libs/types";
import type { ProjectTranslationItem } from "@/libs/interfaces";
import { IMG_PATH } from "@/libs/constants";

export const projects: { title: { fr: string; en: string }; subtitle: { fr: string; en: string }; viewCode: { fr: string; en: string }; items: ProjectTranslationItem[] } = {
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
      id: 1,
      title: {
        fr: "SmartOps – Plateforme SaaS d'Automatisation IA",
        en: "SmartOps – AI Automation SaaS Platform",
      },
      category: {
        fr: "Oct 2024 – Nov 2025",
        en: "Oct 2024 – Nov 2025",
      },
      description: {
        fr: "Plateforme SaaS propulsée par l'IA automatisant les flux de travail d'entreprise, le routage des tickets et les prévisions opérationnelles. Intégration de l'API OpenAI pour l'automatisation propulsée par l'IA, réduisant les frais généraux opérationnels de 45% via une architecture événementielle.",
        en: "AI-powered SaaS platform automating business workflows, ticket routing, and operational forecasting. Integrated OpenAI API for AI-driven automation, reducing operational overhead by 45% via an event-driven architecture.",
      },
      image: `${IMG_PATH}/projects/smartops.png`,
      tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "OpenAI"],
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
