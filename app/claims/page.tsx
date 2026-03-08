import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claims Support | Evergreen Insurance Group",
  description:
    "File a claim and get expert support. We handle coordination with your carrier and advocate for the best outcome.",
};

const TIMELINE_STEPS = [
  {
    number: 1,
    title: "Report",
    description: "Call us or file online — we start immediately",
  },
  {
    number: 2,
    title: "Review",
    description: "We review your claim and coordinate with your carrier",
  },
  {
    number: 3,
    title: "Resolution",
    description: "We advocate for the best possible outcome",
  },
  {
    number: 4,
    title: "Follow-up",
    description: "We check in to make sure everything is resolved",
  },
];

const FAQ_ITEMS = [
  {
    question: "How do I file a claim?",
    answer:
      "Call us at (732) 555-0188 or submit through your carrier's app. We'll take it from there and handle all coordination.",
  },
  {
    question: "How long does the claims process take?",
    answer:
      "Most claims are resolved within 2-4 weeks, depending on complexity. We keep you updated at every step.",
  },
  {
    question: "Will filing a claim raise my rates?",
    answer:
      "Not necessarily. We'll advise you on whether it makes sense to file based on your deductible and claim history.",
  },
  {
    question: "What if my claim is denied?",
    answer:
      "We'll review the denial, help you understand your options, and advocate on your behalf with the carrier.",
  },
];

export default function ClaimsPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-secondary pt-28 pb-20 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          We&apos;re here when it matters.
        </h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-base sm:text-lg">
          Filing a claim can be stressful. We handle the hard parts so you
          don&apos;t have to.
        </p>
      </section>

      {/* Process Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-4">
          How the claims process works
        </h2>
        <p className="text-text-body/70 text-center max-w-lg mx-auto mb-12">
          From report to resolution, we guide you every step of the way.
        </p>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gray-200" />
            <div className="grid grid-cols-4 gap-6">
              {TIMELINE_STEPS.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-body/70 max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {TIMELINE_STEPS.map((step) => (
                <div key={step.number} className="relative flex gap-5">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 -ml-8">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-bold text-text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-body/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Card */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="bg-primary rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl shadow-primary/20">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/15 mx-auto mb-5">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.44 21.01 19.87 21.03 19.3 21.03C10.13 21.03 2.73 13.73 2.63 4.57C2.63 4.01 2.63 3.44 2.67 2.87C2.71 2.31 3.16 1.87 3.72 1.87H6.72C7.23 1.87 7.66 2.24 7.73 2.74C7.87 3.74 8.13 4.72 8.49 5.65C8.63 5.99 8.54 6.38 8.27 6.63L6.65 8.25C8.06 10.81 10.17 12.91 12.73 14.31L14.35 12.69C14.6 12.44 14.99 12.35 15.33 12.49C16.26 12.85 17.24 13.11 18.24 13.25C18.74 13.32 19.11 13.75 19.11 14.26V16.92H22Z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            24/7 Claims Hotline
          </h2>
          <a
            href="tel:+17325550188"
            className="inline-block text-3xl sm:text-4xl font-bold tracking-tight hover:underline mt-2"
          >
            (732) 555-0188
          </a>
          <p className="text-white/80 mt-3 text-sm sm:text-base">
            Available around the clock for emergencies
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Need to file a claim?
        </h2>
        <p className="text-white/70 mb-6 max-w-md mx-auto">
          Our team is ready to help. Call us anytime.
        </p>
        <a
          href="tel:+17325550188"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full text-base transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.44 21.01 19.87 21.03 19.3 21.03C10.13 21.03 2.73 13.73 2.63 4.57C2.63 4.01 2.63 3.44 2.67 2.87C2.71 2.31 3.16 1.87 3.72 1.87H6.72C7.23 1.87 7.66 2.24 7.73 2.74C7.87 3.74 8.13 4.72 8.49 5.65C8.63 5.99 8.54 6.38 8.27 6.63L6.65 8.25C8.06 10.81 10.17 12.91 12.73 14.31L14.35 12.69C14.6 12.44 14.99 12.35 15.33 12.49C16.26 12.85 17.24 13.11 18.24 13.25C18.74 13.32 19.11 13.75 19.11 14.26V16.92H22Z" />
          </svg>
          Call (732) 555-0188
        </a>
      </section>
    </div>
  );
}

/* ── Inline FAQ Accordion ── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="text-base font-semibold text-text-heading">
          {question}
        </span>
        <svg
          className="w-5 h-5 text-text-body/50 shrink-0 transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9L12 15L18 9" />
        </svg>
      </summary>
      <div className="px-6 pb-5 text-sm text-text-body leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
