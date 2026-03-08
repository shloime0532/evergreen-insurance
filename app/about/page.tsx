import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "../components/text-reveal";
import ScrollSection from "../components/scroll-section";
import FeatureCard from "../components/feature-card";

export const metadata: Metadata = {
  title: "About Us | Evergreen Insurance Group",
  description:
    "Meet the team behind Evergreen Insurance Group. Independent agents serving families and businesses since 1998 with transparent, personalized coverage.",
};

/* ── Inline SVG icons ── */
function TransparencyIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function AdvocacyIcon() {
  return (
    <svg
      className="h-7 w-7"
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

function SimplicityIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

/* ── Team data ── */
const team = [
  {
    name: "James Mitchell",
    role: "Principal Agent",
    bio: "25 years of protecting families and businesses.",
  },
  {
    name: "Elena Rodriguez",
    role: "Commercial Lines Director",
    bio: "Specializing in contractor and restaurant coverage.",
  },
  {
    name: "Marcus Chen",
    role: "Life & Health Advisor",
    bio: "Helping families plan for every chapter.",
  },
  {
    name: "Priya Patel",
    role: "Claims Advocate",
    bio: "Your voice when you need it most.",
  },
];

/* ── Timeline milestones ── */
const milestones = [
  { year: "1998", label: "Founded" },
  { year: "2008", label: "Expanded to Commercial" },
  { year: "2018", label: "Life & Health Division" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading"
          >
            Your neighbors, your agents.
          </TextReveal>
          <p className="mt-6 text-lg text-text-body/70 max-w-2xl mx-auto">
            We&rsquo;re not a call center. We&rsquo;re your local insurance
            team, rooted in this community and committed to protecting it.
          </p>
        </div>
      </section>

      {/* ── Story + Timeline ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Image placeholder */}
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-400 text-lg">
                Our Team
              </div>

              {/* Copy */}
              <div>
                <h2 className="text-3xl font-bold text-text-heading">
                  Built on trust, grown through relationships
                </h2>
                <p className="mt-4 text-text-body leading-relaxed">
                  Evergreen Insurance Group started in 1998 with a simple
                  idea: insurance should be personal. Founded by James Mitchell
                  out of a one-room office in Lakewood, we&rsquo;ve grown into a
                  full-service agency because we never stopped treating clients
                  like neighbors.
                </p>
                <p className="mt-4 text-text-body leading-relaxed">
                  Today, our team of licensed agents covers everything from auto
                  and home to complex commercial policies and retirement
                  planning&nbsp;&mdash; all under one roof.
                </p>

                {/* Timeline */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
                  {milestones.map((m) => (
                    <div key={m.year} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {m.year.slice(2)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text-heading">
                          {m.year}
                        </p>
                        <p className="text-xs text-text-body/70">{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center">
              Meet your team
            </h2>
            <p className="mt-3 text-center text-text-body/70 max-w-xl mx-auto">
              Real people who answer the phone, know your name, and fight for
              your best rate.
            </p>
          </ScrollSection>

          <ScrollSection className="mt-12 grid gap-8 grid-cols-2 lg:grid-cols-4" stagger>
            {team.map((person) => (
              <div key={person.name} className="text-center">
                {/* Photo placeholder */}
                <div className="mx-auto h-28 w-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-3xl font-bold">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-base font-bold text-text-heading">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-primary">{person.role}</p>
                <p className="mt-2 text-sm text-text-body/70">{person.bio}</p>
              </div>
            ))}
          </ScrollSection>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollSection>
            <h2 className="text-3xl font-bold text-text-heading text-center">
              What we stand for
            </h2>
          </ScrollSection>

          <ScrollSection
            className="mt-12 grid gap-8 sm:grid-cols-3"
            stagger
          >
            <FeatureCard
              variant="icon-large"
              icon={<TransparencyIcon />}
              title="Transparency"
              description="No hidden fees, no surprises. You'll always know exactly what you're paying for."
            />
            <FeatureCard
              variant="icon-large"
              icon={<AdvocacyIcon />}
              title="Advocacy"
              description="We fight for your best rate, every renewal, every year."
            />
            <FeatureCard
              variant="icon-large"
              icon={<SimplicityIcon />}
              title="Simplicity"
              description="Insurance shouldn't be complicated. We make it easy to understand."
            />
          </ScrollSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading">
              Ready to join the family?
            </h2>
            <p className="mt-4 text-text-body/70">
              Get a personalized quote from a team that actually picks up the
              phone.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Your Free Quote &rarr;
            </Link>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
