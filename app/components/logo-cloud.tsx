"use client";

const CARRIERS = [
  "Allstate",
  "Progressive",
  "Travelers",
  "Hartford",
  "Liberty Mutual",
  "Nationwide",
];

export default function LogoCloud() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-text-body/50 mb-8">
        Trusted by carriers nationwide
      </p>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          {CARRIERS.map((name) => (
            <span
              key={`a-${name}`}
              className="mx-10 inline-block text-xl font-bold text-text-body/40 tracking-wide select-none"
            >
              {name}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {CARRIERS.map((name) => (
            <span
              key={`b-${name}`}
              className="mx-10 inline-block text-xl font-bold text-text-body/40 tracking-wide select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
