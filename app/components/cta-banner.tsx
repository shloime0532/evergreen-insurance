"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary py-20 md:py-28 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to save on your insurance?
        </h2>

        <p className="mt-4 text-lg text-white/80">
          Get a personalized quote in under 5 minutes.
        </p>

        <Link
          href="/get-a-quote"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          Start Your Free Quote
        </Link>

        <p className="mt-4 text-sm text-white/60">
          or call{" "}
          <a
            href="tel:+17325550188"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            (732) 555-0188
          </a>
        </p>
      </div>
    </section>
  );
}
