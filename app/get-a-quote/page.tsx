import type { Metadata } from "next";
import QuoteForm from "@/app/components/quote-form";

export const metadata: Metadata = {
  title: "Get a Free Quote | Evergreen Insurance Group",
  description:
    "Get a personalized insurance quote in under 5 minutes. We compare 50+ carriers to find you the best rate.",
};

const TRUST_POINTS = [
  {
    text: "We compare 50+ carriers",
    detail: "More options means better rates for you",
  },
  {
    text: "Average savings of $800/year",
    detail: "Our clients save an average of $800 annually",
  },
  {
    text: "No obligation, no spam",
    detail: "Get a quote with zero pressure — ever",
  },
  {
    text: "Licensed in NJ, NY & PA",
    detail: "Fully licensed and regulated in the tri-state area",
  },
];

export default function GetAQuotePage() {
  return (
    <section className="bg-surface min-h-screen">
      {/* Hero strip */}
      <div className="bg-secondary pt-28 pb-16 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Get your free quote
        </h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-base sm:text-lg">
          It takes less than 5 minutes. No commitment required.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Form — takes 3 of 5 columns */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <QuoteForm />
          </div>

          {/* Trust panel — takes 2 of 5 columns, hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28">
              <h2 className="text-lg font-bold text-text-heading mb-6">
                Why get a quote from us?
              </h2>
              <div className="space-y-5">
                {TRUST_POINTS.map((point) => (
                  <div key={point.text} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-3.5 h-3.5 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 13L9 17L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-heading">
                        {point.text}
                      </p>
                      <p className="text-sm text-text-body/70 mt-0.5">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-10 p-5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-body italic">
                  &ldquo;Saved us over $1,200 on our home and auto bundle.
                  The whole process took 10 minutes.&rdquo;
                </p>
                <p className="text-xs text-text-body/60 mt-2 font-medium">
                  — Michael T., Lakewood
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
