"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/app/_components/_ui/ThemeToggle";
import { LanguageToggle } from "@/app/_components/_ui/LanguageToggle";
import type { Translations, Locale } from "@/app/translations";

interface NavbarProps {
  t: Record<string, string>;
  lang: Locale;
}

export default function Navbar({ t, lang }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isWindows, setIsWindows] = useState(false);
  const SECTIONS = ["hero", "about", "projects", "skills", "contact"];

  useEffect(() => {
    setIsWindows(
      /Win/i.test(navigator.userAgent) &&
        !/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent),
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const navHeight = 80;
    let lastSection = "hero";

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        let currentSection = lastSection;

        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();

          if (rect.top <= navHeight + 200) {
            currentSection = id;
          } else {
            break;
          }
        }

        if (currentSection !== lastSection) {
          lastSection = currentSection;
          setActiveSection(currentSection);

          // Update URL safely (no history spam)
          window.history.replaceState(null, "", `#${currentSection}`);
        }

        ticking = false;
      });
    };

    // Initial sync
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // iOS-safe scrolling
    el.scrollIntoView({
      block: "start",
      behavior: "auto", // DO NOT use "smooth" on iOS
    });
  };

  return (
    <nav className="site-navbar fixed top-0 left-0 right-0 z-50 text-(--fontColor) shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="#hero"
              onClick={() => scrollToSection("hero")}
              className="text-xs sm:text-base tracking-tight text-(--fontColor) hover:text-(--contrastColor) transition-colors duration-300"
            >
              MR
            </Link>
          </div>

          <ul className="flex gap-4 sm:gap-6 lg:gap-10">
            <li
              className={
                activeSection === "about" ? "text-(--contrastColor)" : ""
              }
            >
              <Link
                href="#about"
                onClick={() => scrollToSection("about")}
                className="text-xs sm:text-base lg:text-base hover:text-(--contrastColor) transition-colors duration-300"
              >
                {t.about}
              </Link>
            </li>

            <li
              className={
                activeSection === "projects" ? "text-(--contrastColor)" : ""
              }
            >
              <Link
                href="#projects"
                onClick={() => scrollToSection("projects")}
                className="text-xs sm:text-base lg:text-base hover:text-(--contrastColor) transition-colors duration-300"
              >
                {t.projects}
              </Link>
            </li>

            <li
              className={
                activeSection === "skills" ? "text-(--contrastColor)" : ""
              }
            >
              <Link
                href="#skills"
                onClick={() => scrollToSection("skills")}
                className="text-xs sm:text-base lg:text-base hover:text-(--contrastColor) transition-colors duration-300"
              >
                {t.skills}
              </Link>
            </li>
            <li
              className={
                activeSection === "contact" ? "text-(--contrastColor)" : ""
              }
            >
              <Link
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className="text-xs sm:text-base lg:text-base hover:text-(--contrastColor) transition-colors duration-300"
              >
                {t.contact}
              </Link>
            </li>
          </ul>

          {/* Right-side controls */}
          <div className="flex items-center gap-2">
            {/* Windows-only desktop app download pill */}
            {isWindows && (
              <a
                href="https://www.mediafire.com/file/afneaqkkcliz852/Portfolio-Setup.rar/file"
                target="_blank"
                className="group hidden sm:flex items-center gap-2 px-3 py-1.5 border border-emerald-500/25 bg-emerald-500/[0.07] hover:bg-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-3 h-3 text-emerald-400 group-hover:animate-bounce shrink-0" />
                <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-400 group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  {t.desktopApp}
                </span>
              </a>
            )}
            <LanguageToggle lang={lang} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
