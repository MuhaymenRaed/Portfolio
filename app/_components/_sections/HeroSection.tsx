"use client";

import {
  ArrowUpRight,
  Mail,
  Download,
  Monitor,
  FileText,
  Zap,
} from "lucide-react";
import ImageWithFallback from "@/app/_components/_image/ImageWithFallback";
import { useEffect, useState } from "react";
import type { Translations, Locale } from "@/app/translations";

interface HeroSectionProps {
  t: Record<string, string>;
  lang: string;
}

export function HeroSection({ t, lang }: HeroSectionProps) {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    setIsWindows(
      /Win/i.test(navigator.userAgent) &&
        !/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent),
    );
  }, []);
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 lg:px-16 pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="text-[11px] tracking-widest uppercase text-(--fontColor2) mb-10">
              {t.subtitle}
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10 leading-[0.95]">
              {t.heading1}
              <br />
              {t.heading2}
            </h1>
            <p className="text-xl md:text-2xl text-(--fontColor)/90 mb-8 max-w-xl leading-relaxed">
              {t.para1}
            </p>
            <p className="text-base text-(--fontColor2) mb-14 max-w-lg leading-relaxed">
              {t.para2}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-(--fontColor) text-(--backgroundColor) hover:bg-(--contrastColor) transition-all duration-300"
              >
                {t.viewWork}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <button
                onClick={scrollToContact}
                className="group cursor-pointer inline-flex items-center gap-2 px-8 py-4 border border-(--border) text-(--fontColor) hover:border-(--contrastColor) transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                {t.contact}
              </button>
            </div>

            {/* CV Downloads */}
            <div className="mt-10 pt-10 border-t border-(--fontColor2)/10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-(--fontColor2)/50 mb-4 font-bold">
                {t.cvLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/cv-en.pdf"
                  download="Muhaymen_Raed_CV.pdf"
                  className="group inline-flex items-center gap-3 px-5 py-3 border border-(--fontColor2)/15 hover:border-accent/40 bg-(--fontColor2)/3 hover:bg-accent/6 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4 text-(--fontColor2) group-hover:text-accent transition-colors shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-(--fontColor) leading-none">
                      {t.cvEn}
                    </span>
                    <span className="text-[10px] text-(--fontColor2)/50 leading-none">
                      {t.cvMeta}
                    </span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-(--fontColor2) group-hover:text-accent group-hover:animate-bounce transition-colors ml-1" />
                </a>
                <a
                  href="/cv-ar.pdf"
                  download="مهيمن_رائد_السيرة_الذاتية.pdf"
                  className="group inline-flex items-center gap-3 px-5 py-3 border border-(--fontColor2)/15 hover:border-accent/40 bg-(--fontColor2)/3 hover:bg-accent/6 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4 text-(--fontColor2) group-hover:text-accent transition-colors shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-(--fontColor) leading-none">
                      {t.cvAr}
                    </span>
                    <span className="text-[10px] text-(--fontColor2)/50 leading-none">
                      {t.cvMeta}
                    </span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-(--fontColor2) group-hover:text-accent group-hover:animate-bounce transition-colors ml-1" />
                </a>
              </div>
            </div>

            {/* Windows-only desktop app download */}
            {isWindows && (
              <div className="mt-10 pt-10 bord.rer-t border-(--fontColor2)/10">
                <p className="text-[10px] tracking-[0.2em] uppercase text-(--fontColor2)/50 mb-4 font-bold">
                  {t.desktopLabel}
                </p>
                <a
                  href="https://www.mediafire.com/file/gehn6z2gzqpx6vg/Muhaymen_CV.exe/file"
                  target="_blank"
                  className="group inline-flex items-center gap-4 p-4 border border-(--fontColor2)/15 hover:border-emerald-500/40 bg-(--fontColor2)/3 hover:bg-emerald-500/6 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-center w-9 h-9 border border-emerald-500/30 bg-emerald-500/10 shrink-0">
                    <Monitor className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-(--fontColor) leading-none">
                      {t.desktopTitle}
                    </span>
                    <span className="text-[11px] text-(--fontColor2)/60 leading-none">
                      {t.desktopMeta}
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-2 pl-4">
                    <Download className="w-4 h-4 text-emerald-400 group-hover:animate-bounce" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      .exe
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className="order-1 lg:order-2">
            <div className="group relative max-w-md mx-auto lg:ml-auto">
              {/* Ambient accent glow bleeding out from behind the portrait */}
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[3rem] bg-accent/12 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              ></div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-(--fontColor2)/10">
                <ImageWithFallback
                  src="/myself.png"
                  alt="Muhaymen Raed"
                  priority
                  className="hero-portrait w-full h-full object-cover transition-all duration-500 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none"></div>
              </div>

              {/* Floating role badge, overlapping the portrait's lower inner edge */}
              <div className="absolute -start-4 bottom-8 flex items-center gap-3 ps-3 pe-5 py-3 rounded-2xl bg-accent shadow-xl shadow-accent/25 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#04171a]/15 shrink-0">
                  <Zap className="w-4 h-4 text-[#04171a]" fill="currentColor" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#04171a] leading-none">
                    {t.badgeTitle}
                  </span>
                  <span className="text-[10px] font-semibold text-[#04171a]/70 leading-none">
                    {t.badgeMeta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
