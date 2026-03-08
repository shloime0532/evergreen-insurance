"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  heading?: string;
}

export default function FaqAccordion({ items, heading }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      {heading && (
        <h2 className="text-3xl font-bold text-text-heading text-center mb-10">
          {heading}
        </h2>
      )}

      <div className="mx-auto max-w-3xl divide-y divide-gray-200">
        {items.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-text-heading pr-4">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-body/50 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-text-body/70">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
