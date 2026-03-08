"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Page-load choreography ── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.2
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.4
        );

      /* ── Scroll fade-out ── */
      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E293B 0%, #0D9488 100%)",
      }}
    >
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] opacity-0"
        >
          Protection that feels effortless.
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed opacity-0"
        >
          Independent insurance agents who find the right coverage at the right
          price&nbsp;&mdash; so you don&rsquo;t have to.
        </p>

        <Link
          ref={ctaRef}
          href="/get-a-quote"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 opacity-0"
        >
          Get Your Free Quote &rarr;
        </Link>
      </div>
    </section>
  );
}
