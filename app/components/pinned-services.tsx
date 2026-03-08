"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Inline SVG icons ── */
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4L8 12V22C8 33.1 14.84 43.38 24 46C33.16 43.38 40 33.1 40 22V12L24 4Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24L22 28L30 20"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="32"
        height="34"
        rx="2"
        stroke="currentColor"
        strokeWidth={2.5}
      />
      <path d="M8 18H40" stroke="currentColor" strokeWidth={2.5} />
      <rect x="16" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} />
      <rect x="26" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} />
      <rect x="20" y="36" width="8" height="8" rx="1" stroke="currentColor" strokeWidth={2} />
      <path d="M24 4V10" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M20 4H28" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 42S6 30 6 18C6 12 10.48 6 16.5 6C20.04 6 23.16 8.32 24 10.5C24.84 8.32 27.96 6 31.5 6C37.52 6 42 12 42 18C42 30 24 42 24 42Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 20L22 24L30 16"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PANELS = [
  {
    icon: ShieldIcon,
    title: "Personal Insurance",
    description:
      "Auto, home, renters, and umbrella coverage tailored to your life.",
    cta: "Explore Personal Lines",
    href: "/services/personal",
    bg: "bg-surface",
  },
  {
    icon: BuildingIcon,
    title: "Business Insurance",
    description:
      "General liability, workers comp, and commercial property for businesses of every size.",
    cta: "Explore Commercial Lines",
    href: "/services/commercial",
    bg: "bg-white",
  },
  {
    icon: HeartIcon,
    title: "Life & Health",
    description:
      "Life insurance, health plans, Medicare, and disability coverage for every stage.",
    cta: "Explore Life & Health",
    href: "/services/life-health",
    bg: "bg-surface",
  },
];

export default function PinnedServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      /* ── Mobile: fade-in each card ── */
      const ctx = gsap.context(() => {
        mobileCardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }, sectionRef);
      return () => ctx.revert();
    }

    /* ── Desktop: horizontal scroll with pinning ── */
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  /* ── Mobile layout ── */
  if (isMobile) {
    return (
      <section ref={sectionRef} className="py-16 px-6">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-primary mb-4">
          What We Cover
        </h2>
        <p className="text-center text-3xl font-bold text-text-heading mb-12">
          Insurance built around&nbsp;you
        </p>

        <div className="space-y-8 max-w-lg mx-auto">
          {PANELS.map((panel, i) => (
            <div
              key={panel.title}
              ref={(el) => { mobileCardsRef.current[i] = el; }}
              className={`rounded-2xl ${panel.bg} p-8 shadow-sm border border-gray-100`}
            >
              <panel.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-text-heading mb-3">
                {panel.title}
              </h3>
              <p className="text-text-body leading-relaxed mb-6">
                {panel.description}
              </p>
              <Link
                href={panel.href}
                className="inline-flex items-center text-primary font-semibold text-sm group"
              >
                {panel.cta}
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ── Desktop layout ── */
  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Section header pinned above */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-16 pb-4 text-center pointer-events-none">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
          What We Cover
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
          Insurance built around&nbsp;you
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex items-center h-screen"
        style={{ width: `${PANELS.length * 100}vw` }}
      >
        {PANELS.map((panel) => (
          <div
            key={panel.title}
            className={`flex-shrink-0 w-screen h-screen flex items-center justify-center ${panel.bg}`}
          >
            <div className="max-w-xl px-8">
              <panel.icon className="h-16 w-16 text-primary mb-8" />
              <h3 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
                {panel.title}
              </h3>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                {panel.description}
              </p>
              <Link
                href={panel.href}
                className="inline-flex items-center text-primary font-semibold text-base group"
              >
                {panel.cta}
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
