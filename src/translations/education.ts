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
        fr: "AEC en Programmation Internet",
        en: "AEC in Internet Programming",
      },
      institution: {
        fr: "Collège TAV (Montréal, QC, Canada)",
        en: "TAV College (Montreal, QC, Canada)",
      },
      date: {
        fr: "6 Fév 2023 – 15 Jan 2025 (≈2 ans)",
        en: "Feb 6, 2023 – Jan 15, 2025 (≈2 yrs)",
      },
      result: {
        fr: "Score: 90+/100",
        en: "Score: 90+/100",
      },
    },
    {
      id: 2,
      degree: {
        fr: "Baccalauréat en Technologie (B.Tech) en Technologie de l'Information",
        en: "Bachelor of Technology (B.Tech) in Information Technology",
      },
      institution: {
        fr: "Chhotubhai Gopalbhai Patel Institute of Technology, Université UKA Tarsadia (Bardoli, Gujarat, Inde)",
        en: "Chhotubhai Gopalbhai Patel Institute of Technology, UKA Tarsadia University (Bardoli, Gujarat, India)",
      },
      date: {
        fr: "19 Juil 2017 – 3 Juil 2021 (4 ans)",
        en: "Jul 19, 2017 – Jul 3, 2021 (4 yrs)",
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
