export type Language = 'en' | 'fr';

export type TranslatableString = {
  fr: string;
  en: string;
};

export type TranslatableField<T> = T | TranslatableString;
