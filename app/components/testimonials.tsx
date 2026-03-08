"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      "Evergreen saved us $2,400/year on our business insurance. The process was painless.",
    name: "Michael R.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "After our house fire, they handled everything. I didn\u2019t have to make a single extra call.",
    name: "Sarah T.",
    role: "Homeowner",
  },
  {
    quote:
      "They found my daughter a health plan in under 48 hours. Actual humans who care.",
    name: "David K.",
    role: "Parent",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
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
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-primary mb-3">
          Client Stories
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-text-heading mb-16">
          What our clients say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Quotation mark */}
              <span className="text-5xl leading-none text-primary/20 font-serif select-none mb-4">
                &ldquo;
              </span>

              <blockquote className="text-xl md:text-2xl text-text-heading leading-snug font-medium flex-1">
                {t.quote}
              </blockquote>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-bold text-text-heading">{t.name}</p>
                <p className="text-sm text-text-body/70 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
