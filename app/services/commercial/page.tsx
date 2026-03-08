import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "../../components/text-reveal";
import ScrollSection from "../../components/scroll-section";
import FeatureCard from "../../components/feature-card";

export const metadata: Metadata = {
  title: "Commercial Insurance | Evergreen Insurance Group",
  description:
    "Business insurance for construction, restaurants, retail, healthcare, and more. Tailored commercial coverage from independent agents who understand your industry.",
};

/* ── Industry icons (inline SVG) ── */
function ConstructionIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />
    </svg>
  );
}

function HealthcareIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function ProfessionalIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

/* ── Industry data ── */
const industries = [
  {
    icon: <ConstructionIcon />,
    title: "Construction",
    description:
      "General liability, workers comp, and commercial auto packages built for contractors and subcontractors.",
  },
  {
    icon: <RestaurantIcon />,
    title: "Restaurants",
    description:
      "Property, liability, and liquor coverage tailored for food service businesses of every size.",
  },
  {
    icon: <RetailIcon />,
    title: "Retail",
    description:
      "Storefront coverage that protects your inventory, property, and customers from the unexpected.",
  },
  {
    icon: <HealthcareIcon />,
    title: "Healthcare",
    description:
      "Professional liability, cyber insurance, and regulatory compliance coverage for medical practices.",
  },
  {
    icon: <ProfessionalIcon />,
    title: "Professional Services",
    description:
      "Errors & omissions, professional liability, and business owner policies for consultants, accountants, and more.",
  },
  {
    icon: <RealEstateIcon />,
    title: "Real Estate",
    description:
      "Landlord policies, property coverage, and liability protection for investors and property managers.",
  },
];

/* ── Coverage types ── */
const coverageTypes = [
  {
    title: "General Liability",
    description:
      "Protects your business from claims of bodily injury, property damage, and personal injury that occur during normal operations.",
  },
  {
    title: "Workers Compensation",
    description:
      "Covers medical expenses and lost wages for employees injured on the job. Required by law in most states.",
  },
  {
    title: "Commercial Auto",
    description:
      "Covers vehicles used for business purposes, including company cars, trucks, and fleet vehicles.",
  },
  {
    title: "Commercial Property",
    description:
      "Protects your business property, equipment, and inventory from fire, theft, and natural disasters.",
  },
  {
    title: "Professional Liability",
    description:
      "Also known as E&O insurance. Covers claims of negligence, mistakes, or failure to deliver professional services.",
  },
  {
    title: "Cyber Liability",
    description:
      "Protects against data breaches, ransomware attacks, and other cyber threats that can cripple a modern business.",
  },
];

export default function CommercialInsurancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading"
          >
            Built for businesses like yours.
          </TextReveal>
          <p className="mt-6 text-lg text-text-body/70 max-w-2xl mx-auto">
            Industry-specific commercial insurance from agents who understand
            what you do and what you&rsquo;re up against.
          </p>
        </div>
      </section>

      {/* ── Industry Grid ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center">
              Industries we specialize in
            </h2>
            <p className="mt-3 text-center text-text-body/70 max-w-xl mx-auto">
              Every business is different. We build coverage around your specific
              risks.
            </p>
          </ScrollSection>

          <ScrollSection
            className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            stagger
          >
            {industries.map((industry) => (
              <FeatureCard
                key={industry.title}
                variant="icon-large"
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            ))}
          </ScrollSection>
        </div>
      </section>

      {/* ── Coverage Types ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center">
              Coverage types
            </h2>
            <p className="mt-3 text-center text-text-body/70 max-w-xl mx-auto">
              The building blocks of a solid commercial insurance program.
            </p>
          </ScrollSection>

          <ScrollSection className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger>
            {coverageTypes.map((coverage) => (
              <div
                key={coverage.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-text-heading">
                  {coverage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body/70">
                  {coverage.description}
                </p>
              </div>
            ))}
          </ScrollSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading">
              Talk to a commercial specialist
            </h2>
            <p className="mt-4 text-text-body/70">
              We&rsquo;ll review your operations and build a coverage plan that
              fits your industry and budget.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Talk to a Commercial Specialist &rarr;
            </Link>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
