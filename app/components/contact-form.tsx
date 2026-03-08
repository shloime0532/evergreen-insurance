"use client";

import { useState } from "react";

const SUBJECTS = [
  "General Inquiry",
  "Get a Quote",
  "File a Claim",
  "Other",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    _honey: "", // honeypot
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validate = (): boolean => {
    if (!form.name.trim()) { setError("Please enter your name."); return false; }
    if (!form.email.trim() && !form.phone.trim()) { setError("Please provide an email or phone number."); return false; }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Please enter a valid email address."); return false; }
    if (!form.message.trim()) { setError("Please enter a message."); return false; }
    return true;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (form._honey) return; // bot caught

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at (732) 555-0188.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13L9 17L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text-heading mb-2">Message sent!</h3>
        <p className="text-text-body max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="c-name" className="block text-sm font-medium text-text-heading mb-1.5">Name *</label>
        <input
          id="c-name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-text-heading mb-1.5">Email</label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-sm font-medium text-text-heading mb-1.5">Phone</label>
          <input
            id="c-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(732) 555-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className="block text-sm font-medium text-text-heading mb-1.5">Subject</label>
        <select
          id="c-subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23334155' stroke-width='2'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="block text-sm font-medium text-text-heading mb-1.5">Message *</label>
        <textarea
          id="c-message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={form._honey}
          onChange={(e) => update("_honey", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
