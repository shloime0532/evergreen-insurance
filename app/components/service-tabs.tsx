"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface ServiceTab {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ServiceTabsProps {
  services: ServiceTab[];
}

export default function ServiceTabs({ services }: ServiceTabsProps) {
  const [active, setActive] = useState(0);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* Scroll active tab into view on mobile */
  useEffect(() => {
    const tab = tabRefs.current[active];
    if (tab && tabBarRef.current) {
      const bar = tabBarRef.current;
      const scrollLeft =
        tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2;
      bar.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [active]);

  const current = services[active];

  return (
    <div>
      {/* Tab bar */}
      <div
        ref={tabBarRef}
        className="flex gap-1 overflow-x-auto scrollbar-hide border-b border-gray-200 -mx-4 px-4 sm:mx-0 sm:px-0"
        role="tablist"
      >
        {services.map((service, i) => (
          <button
            key={service.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={active === i}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 shrink-0 ${
              active === i
                ? "border-primary text-primary"
                : "border-transparent text-text-body/70 hover:text-text-heading hover:border-gray-300"
            }`}
          >
            <span className="hidden sm:inline">{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="text-2xl font-bold text-text-heading">
            {current.title}
          </h3>
          <p className="mt-3 text-text-body leading-relaxed">
            {current.description}
          </p>
        </div>

        <ul className="space-y-3">
          {current.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-text-body">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
