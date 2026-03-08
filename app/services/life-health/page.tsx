import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "../../components/text-reveal";
import ScrollSection from "../../components/scroll-section";
import FeatureCard from "../../components/feature-card";

export const metadata: Metadata = {
  title: "Life & Health Insurance | Evergreen Insurance Group",
  description:
    "Life insurance, health coverage, Medicare supplements, and disability insurance. Plan for every chapter with guidance from experienced advisors.",
};

/* ── Product icons ── */
function LifeIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MedicareIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function DisabilityIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

/* ── Comparison data ── */
const risks = [
  "Medical bills become a financial crisis",
  "Your family loses income if you can't work",
  "Retirement savings get wiped out by one diagnosis",
  "Loved ones are left without a safety net",
];

const benefits = [
  "Medical expenses are handled without draining savings",
  "Disability coverage replaces your income while you recover",
  "Your retirement plan stays intact no matter what happens",
  "Your family is protected with guaranteed financial support",
];

/* ── Products ── */
const products = [
  {
    icon: <LifeIcon />,
    title: "Life Insurance",
    description:
      "Term and permanent life policies that give your family financial security. We help you choose the right amount based on your income, debts, and goals.",
  },
  {
    icon: <HealthIcon />,
    title: "Health Insurance",
    description:
      "Individual and family health plans from top carriers. We navigate the marketplace so you get the best coverage at a price that works.",
  },
  {
    icon: <MedicareIcon />,
    title: "Medicare Supplements",
    description:
      "Fill the gaps in original Medicare with Medigap and Medicare Advantage plans. We simplify the enrollment process and find the right fit.",
  },
  {
    icon: <DisabilityIcon />,
    title: "Disability Insurance",
    description:
      "Protect your most valuable asset: your ability to earn. Short-term and long-term disability coverage that replaces income when you need it most.",
  },
];

export default function LifeHealthPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading"
          >
            Plan for every chapter.
          </TextReveal>
          <p className="mt-6 text-lg text-text-body/70 max-w-2xl mx-auto">
            Life changes fast. The right coverage makes sure you&rsquo;re ready
            for whatever comes next.
          </p>
        </div>
      </section>

      {/* ── Comparison Section ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center mb-12">
              The difference coverage makes
            </h2>
          </ScrollSection>

          <ScrollSection className="grid gap-8 md:grid-cols-2" stagger>
            {/* Without coverage */}
            <div className="rounded-2xl bg-red-50 border border-red-200 p-8">
              <h3 className="text-lg font-bold text-red-800 mb-6">
                Without proper coverage
              </h3>
              <ul className="space-y-4">
                {risks.map((risk) => (
                  <li key={risk} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-red-800/80 text-sm">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Evergreen */}
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8">
              <h3 className="text-lg font-bold text-green-800 mb-6">
                With Evergreen
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
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
                    <span className="text-green-800/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* ── Product Cards ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center">
              Our life &amp; health products
            </h2>
            <p className="mt-3 text-center text-text-body/70 max-w-xl mx-auto">
              Comprehensive options to protect your health, income, and
              family&rsquo;s future.
            </p>
          </ScrollSection>

          <ScrollSection
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            stagger
          >
            {products.map((product) => (
              <FeatureCard
                key={product.title}
                variant="icon-large"
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            ))}
          </ScrollSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading">
              Schedule a free consultation
            </h2>
            <p className="mt-4 text-text-body/70">
              Sit down with Marcus and build a plan that covers your family for
              every stage of life.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Schedule a Free Consultation &rarr;
            </Link>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
