// Component data interfaces (plain strings)
export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  date: string;
  result?: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

// Translation data interfaces (with TranslatableString)
import type { TranslatableString } from './types';

export interface ExperienceTranslationItem {
  id: number;
  role: TranslatableString;
  company: TranslatableString;
  date: TranslatableString;
  description: TranslatableString;
  skills: string[];
  link?: string;
}

export interface EducationTranslationItem {
  id: number;
  degree: TranslatableString;
  institution: TranslatableString;
  date: TranslatableString;
  result?: TranslatableString;
}

export interface SkillCategoryTranslation {
  id: number;
  title: TranslatableString;
  skills: string[];
}

export interface ProjectTranslationItem {
  id: number;
  title: TranslatableString | string;
  category: TranslatableString;
  description: TranslatableString;
  image: string;
  tech: string[];
  link?: string;
  githubLinks?: {
    frontend?: string;
    backend?: string;
  };
}
