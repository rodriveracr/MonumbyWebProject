// ===========================================================
// 🌐 src/components/LanguageSwitcher.tsx — versión estable y sincronizada (Next.js 15.5.4)
// ===========================================================
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = { small?: boolean };

export default function LanguageSwitcher({ small }: Props) {
  const router = useRouter();
  const pathnameFromHook = usePathname() || "/";
  const searchParams = useSearchParams();

  const query =
    searchParams && searchParams.toString() !== ""
      ? `?${searchParams.toString()}`
      : "";

  const [currentPath, setCurrentPath] = useState(pathnameFromHook);

  // ✅ Se sincroniza solo en cliente (previene diferencia SSR/CSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // 🔗 Construcción dinámica del path con idioma
  const buildPathWithLang = (lang: string) => {
    if (/^\/(es|en)(\/|$)/.test(currentPath)) {
      return currentPath.replace(/^\/(es|en)/, `/${lang}`) + query;
    }
    return (
      (currentPath === "/" ? `/${lang}` : `/${lang}${currentPath}`) + query
    );
  };

  // 🔄 Cambio de idioma controlado
  const changeLanguage = (
    lang: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e?.preventDefault();
    const dest = buildPathWithLang(lang);
    try {
      router.replace(dest);
    } catch {
      window.location.assign(dest);
    }
  };

  // 🧭 Determina idioma activo
  const active = (lang: string) =>
    /^\/(es|en)(\/|$)/.test(currentPath)
      ? currentPath.split("/")[1] === lang
      : false;

  const baseClasses = `rounded-full font-bold transition ${
    small ? "p-2" : "p-3"
  }`;

  // ===========================================================
  // 🏁 Render
  // ===========================================================
  return (
    <div
      className={`flex justify-center items-center ${
        small ? "space-x-4" : "space-x-6"
      }`}
      suppressHydrationWarning
    >
      {/* ES flag */}
      <a
        href={buildPathWithLang("es")}
        aria-current={active("es") ? "page" : undefined}
        aria-label="Español"
        onClick={(e) => changeLanguage("es", e)}
        className={`${baseClasses} inline-flex items-center justify-center ${
          active("es")
            ? "bg-purple-600 ring-2 ring-purple-400 shadow-lg shadow-purple-500/50"
            : "bg-gray-700 hover:bg-gray-600 hover:ring-2 hover:ring-gray-500"
        } mx-1`}
        title="Español"
      >
        <Image
          src="/flags/spain.svg"
          alt="Español"
          width={small ? 26 : 32}
          height={small ? 26 : 32}
          decoding="async"
          loading="lazy"
        />
      </a>

      {/* Separator */}
      <span className="lang-separator" aria-hidden="true">|</span>

      {/* EN flag */}
      <a
        href={buildPathWithLang("en")}
        aria-current={active("en") ? "page" : undefined}
        aria-label="English"
        onClick={(e) => changeLanguage("en", e)}
        className={`${baseClasses} inline-flex items-center justify-center ${
          active("en")
            ? "bg-purple-600 ring-2 ring-purple-400 shadow-lg shadow-purple-500/50"
            : "bg-gray-700 hover:bg-gray-600 hover:ring-2 hover:ring-gray-500"
        } mx-1`}
        title="English"
      >
        <Image
          src="/flags/usa.svg"
          alt="English"
          width={small ? 26 : 32}
          height={small ? 26 : 32}
          decoding="async"
          loading="lazy"
        />
      </a>
    </div>
  );
}
