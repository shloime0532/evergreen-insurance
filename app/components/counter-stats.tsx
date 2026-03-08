"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 10000, suffix: "+", label: "Active Policies" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 50, suffix: "+", label: "Insurance Carriers" },
];

export default function CounterStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;

        const target = { val: 0 };

        gsap.to(target, {
          val: STATS[i].value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(target.val).toLocaleString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center">
                <span
                  ref={(el) => { numberRefs.current[i] = el; }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tabular-nums"
                >
                  0
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary ml-0.5">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-text-body font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
