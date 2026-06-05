"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { Language } from "./types";

interface LanguageContextValue {
  lang: Language;
  toggle: () => void;
  t: (field: { en: string; fr: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
  t: (field) => field.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const t = useCallback(
    (field: { en: string; fr: string }) => field[lang],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
