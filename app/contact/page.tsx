import type { Metadata } from "next";
import ContactForm from "@/app/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Evergreen Insurance Group",
  description:
    "Get in touch with Evergreen Insurance Group. Visit our Lakewood office, call us, or send a message online.",
};

const OFFICE_INFO = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    label: "Address",
    value: "742 Ocean Avenue\nLakewood, NJ 08701",
    href: "https://maps.google.com/?q=742+Ocean+Avenue+Lakewood+NJ+08701",
  },
  {
    icon: "M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.44 21.01 19.87 21.03 19.3 21.03C10.13 21.03 2.73 13.73 2.63 4.57C2.63 4.01 2.63 3.44 2.67 2.87C2.71 2.31 3.16 1.87 3.72 1.87H6.72C7.23 1.87 7.66 2.24 7.73 2.74C7.87 3.74 8.13 4.72 8.49 5.65C8.63 5.99 8.54 6.38 8.27 6.63L6.65 8.25C8.06 10.81 10.17 12.91 12.73 14.31L14.35 12.69C14.6 12.44 14.99 12.35 15.33 12.49C16.26 12.85 17.24 13.11 18.24 13.25C18.74 13.32 19.11 13.75 19.11 14.26V16.92H22Z",
    label: "Phone",
    value: "(732) 555-0188",
    href: "tel:+17325550188",
  },
  {
    icon: "M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z",
    label: "Email",
    value: "info@evergreeninsurance.com",
    href: "mailto:info@evergreeninsurance.com",
  },
];

const HOURS = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-secondary pt-28 pb-16 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Get in touch
        </h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-base sm:text-lg">
          Have a question or need help? We&apos;re just a call, email, or visit away.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Form — 3 columns */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 relative">
            <h2 className="text-xl font-bold text-text-heading mb-1">Send us a message</h2>
            <p className="text-text-body/70 text-sm mb-6">We typically respond within one business day.</p>
            <ContactForm />
          </div>

          {/* Info panel — 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Office info */}
            <div>
              <h2 className="text-lg font-bold text-text-heading mb-6">Visit our office</h2>
              <div className="space-y-5">
                {OFFICE_INFO.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text-body/60 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-text-heading whitespace-pre-line group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-sm font-bold text-text-heading mb-3 uppercase tracking-wider">
                Office Hours
              </h3>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-text-body">{h.day}</span>
                    <span className={`font-medium ${h.time === "Closed" ? "text-red-500" : "text-text-heading"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48596.93398857297!2d-74.2399!3d40.0987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18228f0769e1d%3A0xee3c3e7f51821f2a!2sLakewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1709825555555!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Evergreen Insurance Group office location in Lakewood, NJ"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
