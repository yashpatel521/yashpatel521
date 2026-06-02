"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") {
    return routing.defaultLocale;
  }

  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const language of preferred) {
    const code = language.split("-")[0]?.toLowerCase();
    if (code && routing.locales.includes(code as Locale)) {
      return code as Locale;
    }
  }

  return routing.defaultLocale;
}

/** Client redirect for static export (GitHub Pages) where middleware does not run. */
export default function LocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    router.replace(`${basePath}/${locale}`);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212] text-zinc-400">
      <p className="text-sm tracking-wide">Loading…</p>
    </div>
  );
}
