import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "../../components/text-reveal";
import ScrollSection from "../../components/scroll-section";
import ServiceTabs from "../../components/service-tabs";
import FaqAccordion from "../../components/faq-accordion";

export const metadata: Metadata = {
  title: "Personal Insurance | Evergreen Insurance Group",
  description:
    "Auto, home, renters, and umbrella insurance from independent agents who treat you like family. Get a personalized quote today.",
};

/* ── Tab icons ── */
function CarIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.803l-1.772-4.43A1.125 1.125 0 0016.823 9H7.177a1.125 1.125 0 00-1.049.726L4.355 14.15H3.375"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function RentersIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    </svg>
  );
}

function UmbrellaIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

/* ── Service data ── */
const services = [
  {
    icon: <CarIcon />,
    title: "Auto",
    description:
      "Full coverage auto insurance that keeps you protected on every road. We compare rates from top carriers so you get the best price without sacrificing protection.",
    features: [
      "Liability Coverage",
      "Collision Protection",
      "Comprehensive Coverage",
      "Uninsured Motorist",
      "Roadside Assistance",
    ],
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    description:
      "Protect your biggest investment with coverage built for your home. From natural disasters to everyday accidents, we make sure you're covered.",
    features: [
      "Dwelling Protection",
      "Personal Property",
      "Liability Coverage",
      "Loss of Use",
      "Additional Structures",
    ],
  },
  {
    icon: <RentersIcon />,
    title: "Renters",
    description:
      "Your belongings deserve protection, even if you don't own the walls. Affordable renters insurance that covers what matters to you.",
    features: [
      "Personal Property Coverage",
      "Liability Protection",
      "Additional Living Expenses",
      "Medical Payments",
    ],
  },
  {
    icon: <UmbrellaIcon />,
    title: "Umbrella",
    description:
      "Extra liability protection that goes beyond your standard policies. Peace of mind for when life throws something unexpected your way.",
    features: [
      "Extended Liability",
      "Lawsuit Defense Costs",
      "Worldwide Coverage",
      "Asset Protection",
    ],
  },
];

/* ── FAQ data ── */
const faqs = [
  {
    question: "How do I know if I have enough coverage?",
    answer:
      "We review your assets, lifestyle, and risk factors to recommend the right coverage levels. Most people are underinsured without realizing it. A quick policy review with one of our agents can identify any gaps.",
  },
  {
    question: "Can you bundle my auto and home insurance?",
    answer:
      "Absolutely. Bundling is one of the easiest ways to save. We typically see 15-25% savings when clients combine their auto and home policies through the same carrier.",
  },
  {
    question: "What happens if I need to file a claim?",
    answer:
      "Call us first. Our claims advocate Priya will walk you through every step, handle the paperwork, and make sure you get a fair settlement. You won't be left navigating the process alone.",
  },
  {
    question: "Do you offer coverage for high-value homes?",
    answer:
      "Yes. We work with specialty carriers that provide tailored coverage for high-value homes, including extended replacement cost, fine art coverage, and identity theft protection.",
  },
  {
    question: "How often should I review my insurance policies?",
    answer:
      "At least once a year, or whenever you experience a major life change like buying a home, getting married, or adding a teen driver. We proactively reach out to clients at renewal to make sure their coverage still fits.",
  },
];

export default function PersonalInsurancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading"
          >
            Protect what matters most.
          </TextReveal>
          <p className="mt-6 text-lg text-text-body/70 max-w-2xl mx-auto">
            Comprehensive personal insurance from a team that treats you like
            family.
          </p>
        </div>
      </section>

      {/* ── Service Tabs ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center mb-12">
              Coverage for every part of your life
            </h2>
            <ServiceTabs services={services} />
          </ScrollSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <FaqAccordion
              heading="Frequently asked questions"
              items={faqs}
            />
          </ScrollSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading">
              Get a personalized quote
            </h2>
            <p className="mt-4 text-text-body/70">
              It takes 5 minutes. No obligations, no pressure.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Personalized Quote &rarr;
            </Link>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
