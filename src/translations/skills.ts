import type { Language } from "@/libs/types";
import type { SkillCategoryTranslation } from "@/libs/interfaces";

export const skills: { title: { fr: string; en: string }; subtitle: { fr: string; en: string }; categories: SkillCategoryTranslation[] } = {
  title: {
    fr: "Expertise Principale",
    en: "Core Expertise",
  },
  subtitle: {
    fr: "Architecture technique et ensembles de compétences spécialisés.",
    en: "Technical architecture and specialized skill sets.",
  },
  categories: [
    {
      id: 1,
      title: {
        fr: "Développement Frontend",
        en: "Frontend Development",
      },
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: {
        fr: "Ingénierie Backend",
        en: "Backend Engineering",
      },
      skills: ["Node.js", "PHP", "WordPress", "GraphQL"],
    },
    {
      id: 3,
      title: {
        fr: "Bases de Données & Cache",
        en: "Databases & Cache",
      },
      skills: ["PostgreSQL", "Redis", "Hasura", "MySQL"],
    },
    {
      id: 4,
      title: {
        fr: "Cloud & Intégration IA",
        en: "Cloud & AI Integration",
      },
      skills: ["AWS", "OpenAI API", "Serverless", "Microservices"],
    },
    {
      id: 5,
      title: {
        fr: "Résolution de Problèmes",
        en: "Problem Solving",
      },
      skills: ["Data Structures", "Algorithms", "LeetCode", "Logic Tuning"],
    },
  ],
};
