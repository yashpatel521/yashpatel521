"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className="fixed top-6 right-6 z-50 flex items-center gap-1 rounded-full border border-white/[0.08] bg-black/50 p-1 backdrop-blur-md"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
            locale === code
              ? "bg-cyan-500 text-[#050814] shadow-[0_0_12px_rgba(34,211,238,0.4)]"
              : "text-zinc-400 hover:text-white"
          }`}
          aria-current={locale === code ? "true" : undefined}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
