"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    
    // In static export mode, next-intl sets a NEXT_LOCALE cookie if cookies are enabled,
    // but on GH Pages static export we also need to change the path.
    // Use `replace` from next-intl/navigation which will prepend the correct locale
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleLocale}
        className="flex items-center justify-center h-10 px-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 font-medium transition-all hover:bg-cyan-500 hover:text-black hover:border-transparent hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
        aria-label="Toggle language"
      >
        <span className={locale === 'en' ? 'text-cyan-400 font-bold' : ''}>EN</span>
        <span className="mx-2 opacity-30">|</span>
        <span className={locale === 'fr' ? 'text-cyan-400 font-bold' : ''}>FR</span>
      </button>
    </div>
  );
}
