import type { Language } from "@/libs/types";
import type { EducationTranslationItem } from "@/libs/interfaces";

export const education: { title: { fr: string; en: string }; subtitle: { fr: string; en: string }; items: EducationTranslationItem[] } = {
  title: {
    fr: "Éducation",
    en: "Education",
  },
  subtitle: {
    fr: "Apprentissage continu et réalisations académiques.",
    en: "Continuous learning and academic achievements.",
  },
  items: [
    {
      id: 1,
      degree: {
        fr: "Diplôme en Programmation Internet",
        en: "Diploma in Internet Programming",
      },
      institution: {
        fr: "Collège Tav",
        en: "Tav College",
      },
      date: {
        fr: "Mar 2023 - Oct 2024",
        en: "Mar 2023 - Oct 2024",
      },
      result: {
        fr: "Score: 90+/100",
        en: "Score: 90+/100",
      },
    },
    {
      id: 2,
      degree: {
        fr: "Baccalauréat en Technologie de l'Information",
        en: "Bachelor of Technology in Information Technology",
      },
      institution: {
        fr: "Université Uka Tarsadia",
        en: "Uka Tarsadia University",
      },
      date: {
        fr: "Aug 2017 - Jun 2021",
        en: "Aug 2017 - Jun 2021",
      },
      result: {
        fr: "CGPA: 8.93/10",
        en: "CGPA: 8.93/10",
      },
    },
    {
      id: 3,
      degree: {
        fr: "Cours de Français (B1)",
        en: "French Language Course (B1)",
      },
      institution: {
        fr: "Gouvernement, Montréal",
        en: "Government Class, Montreal",
      },
      date: {
        fr: "Nov 2024 - Sep 2025",
        en: "Nov 2024 - Sep 2025",
      },
      result: {
        fr: "Niveau B1 Validé",
        en: "Clear B1 Level",
      },
    },
  ],
};
