import type { ProjectDetailTranslationItem } from "@/libs/interfaces";
import { IMG_PATH } from "@/libs/constants";

export const projectDetails: ProjectDetailTranslationItem[] = [
  {
    id: 7,
    title: {
      fr: "L'Original – Galerie & Plateforme d'Art Urbain",
      en: "L'Original – Urban Art Gallery & Platform",
    },
    subtitle: {
      fr: "Développement de Fonctionnalités en Production",
      en: "Shipping Live Production Features",
    },
    overview: {
      fr: "Pour la plateforme L'Original, j'ai conçu, intégré et déployé plus de 6 modules majeurs de fonctionnalités aujourd'hui en production sur loriginal.org. Mes responsabilités couvraient le développement d'interfaces mobiles responsives, la refactorisation de composants visuels en briques réutilisables, l'intégration de flux d'internationalisation bilingues et la programmation d'algorithmes de recommandation.",
      en: "For the L'Original platform, I designed, developed, and deployed 6+ production-ready feature modules live on the loriginal.org platform. My responsibilities covered mobile-first responsive interfaces, refactoring visual layouts into reusable component packages, integrating bilingual (EN/FR) translation setups, and programming personalized card recommendation algorithms.",
    },
    challenges: [
      {
        title: {
          fr: "Réactivité et stabilité du Hero Section sur mobile",
          en: "Hero Image Responsiveness & Viewport Clipping",
        },
        description: {
          fr: "L'illustration principale et les boutons d'action du Hero Section souffraient de déformations de taille (jusqu'à 0px de large) et de chevauchements sur les appareils de 380px à 480px. Solution : Refonte complète du flux CSS sous Tailwind, réorganisation de l'ordre d'affichage des balises avec flex/grid et ajustement de l'échelle graphique.",
          en: "On small screen viewports (380px to 480px), structural constraints caused the main hero graphic to collapse to 0px width and clip adjacent buttons. Solution: Overhauled constraints using Tailwind mobile-first responsive styling and flex/grid element ordering.",
        },
      },
      {
        title: {
          fr: "Sélection d'avis et carrousel multilingue",
          en: "Multilingual Ingestion & Google Carousel",
        },
        description: {
          fr: "L'affichage des avis Google/TripAdvisor mélangeait les langues et ralentissait le chargement. Solution : Séparation des ensembles de données d'avis par langue dans le backend et implémentation du chargement différé (lazy loading) au format WEBP pour préserver la vitesse.",
          en: "Displaying mixed-language reviews from Google and TripAdvisor created visual confusion and degraded page speeds. Solution: Partitioned reviews datasets by language (EN/FR) and integrated an infinite carousel using optimized, lazy-loaded WebP assets.",
        },
      },
      {
        title: {
          fr: "Logique de swipe du podium & pertinence",
          en: "State Validation for Artist Recommendation",
        },
        description: {
          fr: "L'algorithme initial tentait de suggérer des toiles prématurément, provoquant des erreurs de pertinence. Solution : Mise à jour du système pour n'exécuter la recommandation qu'après l'enregistrement d'au moins 3 mentions 'J'aime' d'artistes uniques.",
          en: "The recommendations module triggered results before gathering sufficient preference inputs. Solution: Re-engineered card swipe controls, ensuring visual recommendations run only after the system records likes on at least 3 unique artists.",
        },
      },
    ],
    features: [
      {
        fr: "Task 1 – Responsive HeroSection & VideoModal : Refonte d'affichage mobile-first et commutation de fichiers vidéo (mobile vs bureau).",
        en: "Task 1 – Responsive HeroSection & VideoModal: Implemented mobile-first image constraints and device-based video files switching.",
      },
      {
        fr: "Task 2 – Reusable FAQ Accordion System : Création d'un composant Accordéon standardisé et réutilisable, éliminant 40% de code redondant.",
        en: "Task 2 – Reusable FAQ Accordion System: Standardized dynamic accordion elements across routes, removing 40% redundant code.",
      },
      {
        fr: "Task 3 – Google Reviews Carousel Integration : Carrousel d'avis infini Google/TripAdvisor avec séparation des avis par langue (EN/FR) et images WebP.",
        en: "Task 3 – Google Reviews Carousel: Infinite multilingual reviews carousel utilizing performance-optimized, lazy-loaded WebP graphics.",
      },
      {
        fr: "Task 4 – Modal & Tutorial Content Improvements : Correction des blocages de défilement et stabilisation de mise page sur iOS/Android.",
        en: "Task 4 – Modal & Tutorial Layout stability: Resolved mobile scroll locks and content layout shifts inside help/tutorial overlays.",
      },
      {
        fr: "Task 5 – Homepage Interactive Section : Double panneau interactif avec système de cartes à glisser pour les artistes et intégration de useMemo.",
        en: "Task 5 – Homepage Interactive Panel: Designed dual-panel layouts with swipe-based artist cards and useMemo performance controls.",
      },
      {
        fr: "Task 6 – Rental Gallery System Redesign : Mise en page 50/50 moderne, tableaux comparatifs, cartes de tarifs et routage sécurisé des slugs.",
        en: "Task 6 – Rental Gallery Redesign: Created modern 50/50 hero visuals, pricing matrix blocks, and routing safety guards.",
      },
      {
        fr: "Task 7 – Component Refactor & i18n Improvements : Extraction de composants partagés (ArtistCard, FavoriteArtworkCard, BookingCard) et routage i18n.",
        en: "Task 7 – Component Refactor: Extracted frontend modules (ArtistCard, FavoriteArtworkCard, BookingCard) and cleaned legacy i18n logic.",
      },
      {
        fr: "Task 8 – Podium Card Swipe Logic Enhancement : Recommandations dynamiques personnalisées basées sur un minimum de 3 mentions J'aime d'artistes uniques.",
        en: "Task 8 – Podium Recommendation Swipe: Built custom suggestions check checking for likes on at least 3 unique artists before processing.",
      },
    ],
    techExplanation: [
      {
        tech: "React.js / Next.js",
        explanation: {
          fr: "Fournit le socle applicatif pour les composants dynamiques, le routage sécurisé et la compilation de pages statiques.",
          en: "Supplies the core architecture for dynamic route views, shared state triggers, and static page compiles.",
        },
      },
      {
        tech: "Tailwind CSS",
        explanation: {
          fr: "Permet de concevoir des grilles flexibles adaptatives et de corriger l'ordre d'affichage des éléments pour mobile-first.",
          en: "Powers atomic design layout grids, custom visual cards gradients, and fluid responsive styling.",
        },
      },
      {
        tech: "Framer Motion",
        explanation: {
          fr: "Gère les animations physiques de glissement, les transitions fluides de cartes et les ouvertures de modales.",
          en: "Coordinates physical card dragging motions, page transitions, and smooth modal overlays.",
        },
      },
    ],
    contributions: [
      {
        fr: "Conception, revue de code, résolution de conflits de fusion et déploiement en production de plus de 6 modules majeurs de fonctionnalités.",
        en: "Participated in development, code reviews, merge conflicts resolution, and live production deployments for 6+ feature modules.",
      },
      {
        fr: "Refactorisation de la structure du code et extraction de composants d'affichage (ArtistCard, BookingCard, FavoriteArtworkCard, OtherProjectCard).",
        en: "Refactored visual layouts into shared component packages (ArtistCard, BookingCard, FavoriteArtworkCard, OtherProjectCard).",
      },
      {
        fr: "Amélioration des performances du site de location d'art en convertissant les images au format WEBP compressé.",
        en: "Optimized art gallery loading performance by setting up WEBP asset pipes, lowering mobile loading times.",
      },
      {
        fr: "Mise en place de l'internationalisation dynamique bilingue pour toutes les nouvelles sections et suppression de l'ancien code de traduction.",
        en: "Standardized dynamic EN/FR translation setups across views while purging legacy translation scripts.",
      },
    ],
    metrics: [
      {
        label: { fr: "Tâches Accomplies", en: "Tasks Completed" },
        value: "8",
      },
      {
        label: { fr: "Fonctionnalités Majeures", en: "Major Features" },
        value: "6+",
      },
      {
        label: { fr: "Déployé en Production", en: "Production Live" },
        value: "100%",
      },
      {
        label: { fr: "Langues (EN/FR)", en: "Languages (EN/FR)" },
        value: "2",
      },
    ],
    image: `${IMG_PATH}/projects/loriginal.png`,
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "Framer Motion", "Vercel", "Git/GitHub", "ESLint", "WebP Optimization", "Technical SEO"],
    link: "https://www.loriginal.org/",
  },
  {
    id: 2,
    title: {
      fr: "Plateforme IA Entreprise & Données en Temps Réel",
      en: "Enterprise AI & Real-Time Data Platform",
    },
    subtitle: {
      fr: "Architecture Microservices, Automatisation IA & Données en Direct",
      en: "Microservices Architecture, AI Automation & Live Data Streaming",
    },
    overview: {
      fr: "Une plateforme d'entreprise hautement évolutive conçue pour orchestrer des microservices complexes, exécuter des agents d'automatisation IA (via OpenAI API) et transmettre des flux de données en direct via GraphQL. Déployée sur un environnement cloud résilient pour assurer la robustesse de l'infrastructure.",
      en: "A highly-scalable enterprise platform built to coordinate complex microservices, trigger autonomous AI workflows (via OpenAI APIs), and stream live transactional records using GraphQL channels. Deployed on a serverless cloud environment to guarantee uptime under high concurrency.",
    },
    challenges: [
      {
        title: {
          fr: "Performance des flux de données en temps réel",
          en: "Real-Time Subscription Performance",
        },
        description: {
          fr: "Sous forte charge de trafic concurrent, la base de données rencontrait des goulots d'étranglement lors des abonnements. Solution : Indexation PostgreSQL optimisée et mise en œuvre du pooling de connexions Hasura.",
          en: "Under high concurrency, simultaneous query updates choked the subscription tunnels. Solution: Tuned PostgreSQL database indices and deployed Hasura transaction-level connection pooling.",
        },
      },
    ],
    features: [
      {
        fr: "Passerelle GraphQL en direct avec abonnements temps réel pour tableaux de bord interactifs.",
        en: "Live GraphQL subscriptions generating real-time charting and data telemetry.",
      },
      {
        fr: "Flux de travail alimentés par l'IA réduisant de 60% le temps de traitement des documents d'entreprise.",
        en: "AI-integrated document ingestion, reducing workflow processing overhead by 60%.",
      },
      {
        fr: "Sécurité d'accès rigoureuse grâce à la sécurité au niveau des lignes (RLS) intégrée.",
        en: "Strict multi-tenant isolation via database Row-Level Security (RLS).",
      },
    ],
    techExplanation: [
      {
        tech: "Node.js / GraphQL",
        explanation: {
          fr: "Permet de concevoir des microservices rapides et modulaires reliés par un schéma GraphQL unifié.",
          en: "Enables fast, modular backend controllers linked together through a unified GraphQL schema.",
        },
      },
      {
        tech: "Hasura / PostgreSQL",
        explanation: {
          fr: "Offre une API GraphQL instantanée sur PostgreSQL avec un contrôle d'accès basé sur les rôles.",
          en: "Generates an instant, highly-performant GraphQL wrapper over PostgreSQL database engines.",
        },
      },
      {
        tech: "AWS (Lambda & ECS)",
        explanation: {
          fr: "Héberge les tâches planifiées et les calculs sans serveur à la demande pour réduire les coûts d'infrastructure.",
          en: "Hosts containerized workers and serverless computational units for pay-as-you-go scaling.",
        },
      },
    ],
    contributions: [
      {
        fr: "Développement de l'intégration de l'API OpenAI pour automatiser la classification et l'extraction de données complexes.",
        en: "Integrated OpenAI API pipelines to automate data categorization and complex text extraction.",
      },
      {
        fr: "Définition de structures de contrôle d'accès sécurisées à base de jetons JWT.",
        en: "Wrote granular, custom JWT-based authenticators protecting sensitive client routes.",
      },
      {
        fr: "Optimisation de requêtes SQL lentes, améliorant de 30% la réactivité de la base de données.",
        en: "Redesigned slow-performing database queries, cutting general API response latency by 30%.",
      },
    ],
    metrics: [
      {
        label: { fr: "Disponibilité Système", en: "System Uptime" },
        value: "99.9%",
      },
      {
        label: { fr: "API Développées", en: "APIs Managed" },
        value: "12+",
      },
      {
        label: { fr: "Effort Manuel", en: "Manual Effort" },
        value: "-60%",
      },
    ],
    image: `${IMG_PATH}/projects/1.png`,
    tech: ["Node.js", "Hasura", "AWS", "GraphQL", "PostgreSQL", "OpenAI API"],
  },
  {
    id: 3,
    title: {
      fr: "Sixywin",
      en: "Sixywin",
    },
    subtitle: {
      fr: "Jeu de Loterie Web & Tableau de Bord en Temps Réel",
      en: "Web-Based Interactive Lottery & Real-Time Dashboard",
    },
    overview: {
      fr: "Sixywin (sixywin.com) est un jeu web interactif de type loterie où les joueurs choisissent 6 numéros et lancent quotidiennement une roue pour gagner des récompenses virtuelles. La plateforme incorpore des classements compétitifs, une protection robuste contre la triche et des mécanismes publicitaires intégrés.",
      en: "Sixywin (sixywin.com) is an interactive, gamified lottery application where players choose six numbers and spin a daily wheel to accumulate virtual currency. The platform features competitive leaderboards, robust anti-cheat logic, and ad-based monetization.",
    },
    challenges: [
      {
        title: {
          fr: "Prévention de la triche côté client",
          en: "Securing Spin Outcomes",
        },
        description: {
          fr: "Les joueurs essayaient d'intercepter le code client pour choisir le score gagnant. Solution : Déplacement de la génération des résultats sur des fonctions d'arrière-plan Supabase Edge signées cryptographiquement.",
          en: "Players attempted to tamper with client scripts to dictate winning coordinates. Solution: Offloaded reward determination entirely to Supabase Edge Functions with cryptographic verification signatures.",
        },
      },
    ],
    features: [
      {
        fr: "Roue de tirage 3D interactive conçue avec Framer Motion pour des arrêts réalistes.",
        en: "Highly interactive 3D spin wheel utilizing Framer Motion physics models for organic dampening.",
      },
      {
        fr: "Classements mondiaux actualisés instantanément grâce aux abonnements de base de données Supabase.",
        en: "Global leaderboards feeding off real-time Supabase subscriptions.",
      },
      {
        fr: "Monétisation intégrée avec publicités récompensées pour débloquer des tours supplémentaires.",
        en: "Rewarded advertisement APIs to grant users extra attempts while boosting revenue.",
      },
    ],
    techExplanation: [
      {
        tech: "React.js",
        explanation: {
          fr: "Assure un rendu d'interface réactif et gère les états dynamiques de l'utilisateur.",
          en: "Powers the reactive user interface structures and game state variables.",
        },
      },
      {
        tech: "Supabase",
        explanation: {
          fr: "Gère l'authentification des utilisateurs, le stockage relationnel et les fonctions Edge sans serveur.",
          en: "Supplies secure authentication pools, relational tables, and serverless Edge Functions.",
        },
      },
    ],
    contributions: [
      {
        fr: "Développement du moteur physique de la roue et des animations d'accompagnement.",
        en: "Designed the physics-backed math and animation logic for the spinning wheel.",
      },
      {
        fr: "Conception des bases de données et des déclencheurs automatiques de séries de connexions quotidiennes.",
        en: "Built the relational schema and automated trigger sequences to track daily streaks.",
      },
      {
        fr: "Sécurisation des transactions de pièces virtuelles contre les modifications non autorisées.",
        en: "Hardened user coins transaction processes, rendering them fully tamper-proof.",
      },
    ],
    metrics: [
      {
        label: { fr: "Lancers Quotidiens", en: "Daily Spins" },
        value: "10k+",
      },
      {
        label: { fr: "Temps de Réponse API", en: "Verification Lag" },
        value: "<150ms",
      },
    ],
    image: `${IMG_PATH}/projects/sixywin.png`,
    tech: ["React.js", "Supabase", "Tailwind CSS", "Vercel", "Framer Motion"],
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
    subtitle: {
      fr: "Comparateur de Modèles IA & Lecteur de Texte OCR",
      en: "AI Translation Benchmarking & OCR Text Extractor",
    },
    overview: {
      fr: "Conçue comme une étude comparative approfondie, cette application compare en temps réel la précision et les temps de réponse des principaux moteurs d'intelligence artificielle (GPT-4, Gemini, DeepL). Intègre également une reconnaissance de texte OCR permettant aux utilisateurs d'importer une photo pour la traduire immédiatement.",
      en: "Designed as an academic study on translation accuracy, this platform allows users to benchmark outputs from GPT-4, Google Gemini, and DeepL side-by-side. Additionally, it integrates an OCR pipeline that processes text from uploaded images and translates it dynamically.",
    },
    challenges: [
      {
        title: {
          fr: "Résolution OCR sur les images bruitées",
          en: "OCR Ingestion Cleanup",
        },
        description: {
          fr: "Les images contenant du bruit de fond ou une faible luminosité généraient des erreurs de transcription. Solution : Ajout d'un pré-traitement d'image pour ajuster le contraste et binariser les images avant l'OCR.",
          en: "Uploaded screenshots containing low contrast or complex patterns generated fragmented OCR outputs. Solution: Integrated contrast-enhancement and image binarization filters in Node before passing images to the parser.",
        },
      },
    ],
    features: [
      {
        fr: "Comparateur textuel multi-modèles avec statistiques de temps de réponse et de précision.",
        en: "Multi-model text comparisons displaying token counts, pricing estimates, and response latency.",
      },
      {
        fr: "Traitement d'images OCR intégré pour traduire instantanément les panneaux, livres ou documents.",
        en: "Integrated OCR scanner supporting image uploads to extract and instantly translate written text.",
      },
      {
        fr: "Historique local chiffré des traductions précédentes pour consultation hors ligne.",
        en: "Local historical log tracking past translation jobs with offline cache querying.",
      },
    ],
    techExplanation: [
      {
        tech: "Express.js",
        explanation: {
          fr: "Fournit une API REST robuste et légère pour connecter de multiples SDK d'IA.",
          en: "Exposes a fast backend REST framework connecting multiple vendor APIs.",
        },
      },
      {
        tech: "TypeORM / SQLite",
        explanation: {
          fr: "Assure la persistance locale des traductions et de l'historique utilisateur de manière structurée.",
          en: "Stores offline history files and custom categories using structured local tables.",
        },
      },
    ],
    contributions: [
      {
        fr: "Développement des contrôleurs d'API et connexion sécurisée aux modèles OpenAI et Gemini.",
        en: "Wrote clean api connectors integrating both OpenAI and Gemini AI models.",
      },
      {
        fr: "Mise en place de filtres d'amélioration d'image pour purifier les imports avant l'analyse textuelle.",
        en: "Configured pre-OCR image filtering systems to isolate text sections from noisy images.",
      },
    ],
    metrics: [
      {
        label: { fr: "Modèles Comparés", en: "Models Scaled" },
        value: "3 AI",
      },
      {
        label: { fr: "Langues Supportées", en: "Supported Languages" },
        value: "15+",
      },
    ],
    image: `${IMG_PATH}/projects/aitranslation.png`,
    tech: ["Express.js", "TypeORM", "TypeScript", "SQLite", "OpenAI API", "Gemini API"],
    link: "https://github.com/yashpatel521/translation-app",
  },
  {
    id: 5,
    title: {
      fr: "Application de Blog",
      en: "Blog App",
    },
    subtitle: {
      fr: "Plateforme de Publication Optimisée pour les Développeurs",
      en: "Full-Stack Developer Content & Notes Hub",
    },
    overview: {
      fr: "Une plateforme de blog haute performance développée en Next.js pour documenter mes projets de développement et notes techniques. Intègre la génération de pages statiques (ISR) pour un chargement instantané, un éditeur de texte Markdown et des balises de référencement optimisées.",
      en: "A high-performance personal blog engine developed to publish engineering journals and programming guides. Featuring Incremental Static Regeneration (ISR) for instant load speeds, markdown parsing, and deep search visibility.",
    },
    challenges: [
      {
        title: {
          fr: "Optimisation de l'invalidation du cache",
          en: "Cache Invalidation & Fresh Content",
        },
        description: {
          fr: "Garantir que les nouveaux articles s'affichent immédiatement sans reconstruire tout le site. Solution : Utilisation de la régénération statique incrémentielle (ISR) avec déclenchement par webhook.",
          en: "Ensuring newly published drafts appear on the production site instantly without rebuilding the static bundle. Solution: Deployed Next.js Incremental Static Regeneration (ISR) paired with on-demand API-driven cache invalidation.",
        },
      },
    ],
    features: [
      {
        fr: "Éditeur Markdown moderne avec coloration syntaxique des codes intégrée.",
        en: "Rich Markdown file parser rendering custom syntax highlights for various languages.",
      },
      {
        fr: "Filtres interactifs par mots-clés et catégories d'apprentissage.",
        en: "Advanced search routing supporting category tag filtering and text indexing.",
      },
      {
        fr: "Sitemap XML dynamique et métadonnées SEO configurées de manière automatisée.",
        en: "Self-generating SEO Sitemap XML indexes matching active publication nodes.",
      },
    ],
    techExplanation: [
      {
        tech: "Next.js",
        explanation: {
          fr: "Gère la génération de pages statiques et l'optimisation automatique des ressources.",
          en: "Optimizes image assets, compiles static layouts, and handles server-side execution.",
        },
      },
      {
        tech: "Prisma ORM",
        explanation: {
          fr: "Fournit une interface sécurisée et typée pour interagir avec la base de données relationnelle.",
          en: "Constructs database interaction layers using custom typed schemas.",
        },
      },
    ],
    contributions: [
      {
        fr: "Conception de l'architecture de données avec Prisma, associant articles, étiquettes et auteurs.",
        en: "Designed relational database schemas with tables representing articles, authors, and keywords.",
      },
      {
        fr: "Création d'un parseur Markdown personnalisé pour injecter des boîtes d'alertes stylisées.",
        en: "Authored specialized markdown tags converting code sections into glowing styled card outputs.",
      },
    ],
    metrics: [
      {
        label: { fr: "Régénération", en: "Regeneration Time" },
        value: "On-Demand",
      },
      {
        label: { fr: "Temps d'affichage", en: "First Contentful Paint" },
        value: "0.3s",
      },
    ],
    image: `${IMG_PATH}/projects/2.png`,
    tech: ["Next.js", "Prisma ORM", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yashpatel521/nextjs-blog",
  },
  {
    id: 6,
    title: {
      fr: "Système de Gestion de Projet",
      en: "Project Management System",
    },
    subtitle: {
      fr: "Application de Collaboration Multiplateforme de Bureau",
      en: "Cross-Platform Desktop Agile Workspace",
    },
    overview: {
      fr: "Un système de planification agile complet empaqueté pour bureau (Windows, macOS et Linux) à l'aide d'ElectronJS. Offre des tableaux Kanban interactifs, des indicateurs de charge de travail et un suivi hors ligne synchronisé en temps réel.",
      en: "A comprehensive Agile team workspace compiled as a native desktop application (Windows, macOS, Linux) using ElectronJS. Features interactive drag-and-drop Kanban layouts, workload graphs, and offline databases that sync in real-time.",
    },
    challenges: [
      {
        title: {
          fr: "Synchronisation de données hors ligne",
          en: "Offline Data Sync",
        },
        description: {
          fr: "Les utilisateurs perdaient du travail lors des déconnexions. Solution : Implémentation d'une file d'attente de requêtes SQLite locale qui se synchronise de manière transactionnelle avec la base de données principale MySQL après reconnexion.",
          en: "Desktop clients lost input during offline sessions. Solution: Engineered a local SQLite cache queue inside Electron, automatically syncing entries to the primary MySQL server upon reconnection.",
        },
      },
    ],
    features: [
      {
        fr: "Tableau Kanban interactif avec support natif du glisser-déposer.",
        en: "Interactive Kanban task board using native drag-and-drop hooks.",
      },
      {
        fr: "Notifications de bureau natives générées en fonction de l'importance des tâches.",
        en: "Desktop OS notifications triggered by task urgency thresholds.",
      },
      {
        fr: "Flux d'activité de l'équipe et historique de progression par utilisateur.",
        en: "Central team activity logs mapping operations chronologically.",
      },
    ],
    techExplanation: [
      {
        tech: "ElectronJS",
        explanation: {
          fr: "Permet de porter l'interface web Next.js vers une application de bureau exécutable.",
          en: "Bridges the Next.js frontend code with native operating system API contexts.",
        },
      },
      {
        tech: "MySQL / Node.js",
        explanation: {
          fr: "Gère les relations complexes de projets, tâches et rôles utilisateur de façon sécurisée.",
          en: "Stores primary client tables and handles transactional REST API endpoints.",
        },
      },
    ],
    contributions: [
      {
        fr: "Mise en place de la communication inter-processus (IPC) sécurisée entre Electron et le rendu web.",
        en: "Designed the IPC bridge, establishing secure communications between desktop layers and Next.js page views.",
      },
      {
        fr: "Développement du composant Kanban interactif réutilisable et adaptatif.",
        en: "Constructed the drag-and-drop state trackers handling card column swaps.",
      },
    ],
    metrics: [
      {
        label: { fr: "Temps de Synchro", en: "Sync Synchronization" },
        value: "Real-Time",
      },
      {
        label: { fr: "Compatibilité", en: "OS Support" },
        value: "Win/Mac/Linux",
      },
    ],
    image: `${IMG_PATH}/projects/3.png`,
    tech: ["Node.js", "Next.js", "ElectronJS", "MySQL", "Tailwind CSS"],
  },
];
