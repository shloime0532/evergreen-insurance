"use client";

import { useState } from "react";

const INSURANCE_TYPES = [
  { value: "Personal Auto", icon: "M19 17H5M19 17C19 18.1046 18.1046 19 17 19H16C14.8954 19 14 18.1046 14 17M19 17C19 15.8954 18.1046 15 17 15H16C14.8954 15 14 15.8954 14 17M5 17C5 18.1046 5.89543 19 7 19H8C9.10457 19 10 18.1046 10 17M5 17C5 15.8954 5.89543 15 7 15H8C9.10457 15 10 15.8954 10 17M14 17H10M3 13L4.5 6H19.5L21 13M3 13H21M3 13V17H5" },
  { value: "Homeowners", icon: "M3 12L12 3L21 12M5 10V20H19V10" },
  { value: "Renters", icon: "M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M3 21H21M9 7H10M9 11H10M14 7H15M14 11H15M9 15H15V21H9V15Z" },
  { value: "Commercial", icon: "M3 21H21M5 21V7L13 3V21M13 21H19V11L13 7M9 9H10M9 13H10M9 17H10" },
  { value: "Life", icon: "M20.84 4.61C19.68 3.45 17.85 3.45 16.69 4.61L12 9.29L7.31 4.61C6.15 3.45 4.32 3.45 3.16 4.61C2 5.77 2 7.6 3.16 8.76L12 17.59L20.84 8.76C22 7.6 22 5.77 20.84 4.61Z" },
  { value: "Health", icon: "M12 6V18M6 12H18M4.93 4.93C6.86 2.98 10.07 2.98 12 4.93C13.93 2.98 17.14 2.98 19.07 4.93C21.02 6.86 21.02 10.07 19.07 12C17.14 13.93 13.93 17.14 12 19.07C10.07 17.14 6.86 13.93 4.93 12C2.98 10.07 2.98 6.86 4.93 4.93Z" },
  { value: "Other", icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" },
];

type FormData = {
  insuranceType: string;
  name: string;
  phone: string;
  email: string;
  currentProvider: string;
  renewalDate: string;
  notes: string;
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    insuranceType: "",
    name: "",
    phone: "",
    email: "",
    currentProvider: "",
    renewalDate: "",
    notes: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStep = (): boolean => {
    if (step === 1 && !form.insuranceType) {
      setError("Please select an insurance type.");
      return false;
    }
    if (step === 2) {
      if (!form.name.trim()) { setError("Please enter your name."); return false; }
      if (!form.phone.trim() && !form.email.trim()) { setError("Please provide a phone number or email."); return false; }
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Please enter a valid email."); return false; }
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setError("");
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const submit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
        <h3 className="text-2xl font-bold text-text-heading mb-2">Thank you!</h3>
        <p className="text-text-body max-w-sm">
          We&apos;ll be in touch within 24 hours with your personalized quote. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() => s < step ? setStep(s) : undefined}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                s === step
                  ? "bg-primary scale-125"
                  : s < step
                  ? "bg-primary/40 cursor-pointer hover:bg-primary/60"
                  : "bg-gray-200"
              }`}
              aria-label={`Step ${s}`}
              disabled={s > step}
            />
            {s < 4 && (
              <div className={`w-8 h-0.5 rounded transition-colors duration-300 ${s < step ? "bg-primary/40" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step label */}
      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2 text-center">
        Step {step} of 4
      </p>

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
          {error}
        </div>
      )}

      {/* Steps container with transitions */}
      <div className="relative min-h-[320px]">
        {/* Step 1 — Insurance Type */}
        <div className={`transition-all duration-300 ${step === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
          <h2 className="text-xl font-bold text-text-heading mb-1 text-center">What type of insurance do you need?</h2>
          <p className="text-text-body/70 text-sm mb-6 text-center">Select one to get started</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INSURANCE_TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => update("insuranceType", t.value)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 ${
                  form.insuranceType === t.value
                    ? "border-primary bg-primary/5 text-primary shadow-sm"
                    : "border-gray-200 text-text-body"
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={t.icon} />
                </svg>
                {t.value}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Basic Info */}
        <div className={`transition-all duration-300 ${step === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
          <h2 className="text-xl font-bold text-text-heading mb-1 text-center">Tell us about yourself</h2>
          <p className="text-text-body/70 text-sm mb-6 text-center">So we can get back to you with a quote</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="q-name" className="block text-sm font-medium text-text-heading mb-1.5">Full Name *</label>
              <input id="q-name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="q-phone" className="block text-sm font-medium text-text-heading mb-1.5">Phone</label>
              <input id="q-phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(732) 555-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="q-email" className="block text-sm font-medium text-text-heading mb-1.5">Email</label>
              <input id="q-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
          </div>
        </div>

        {/* Step 3 — Coverage Details */}
        <div className={`transition-all duration-300 ${step === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
          <h2 className="text-xl font-bold text-text-heading mb-1 text-center">Coverage details</h2>
          <p className="text-text-body/70 text-sm mb-6 text-center">Help us find you the best rate</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="q-provider" className="block text-sm font-medium text-text-heading mb-1.5">Current Provider</label>
              <input id="q-provider" type="text" value={form.currentProvider} onChange={(e) => update("currentProvider", e.target.value)} placeholder="e.g. State Farm, Geico" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="q-renewal" className="block text-sm font-medium text-text-heading mb-1.5">Policy Renewal Date</label>
              <input id="q-renewal" type="date" value={form.renewalDate} onChange={(e) => update("renewalDate", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="q-notes" className="block text-sm font-medium text-text-heading mb-1.5">Anything specific you&apos;re looking for?</label>
              <textarea id="q-notes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Lower deductible, bundling discounts, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-heading placeholder:text-text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
            </div>
          </div>
        </div>

        {/* Step 4 — Review & Submit */}
        <div className={`transition-all duration-300 ${step === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
          <h2 className="text-xl font-bold text-text-heading mb-1 text-center">Review your request</h2>
          <p className="text-text-body/70 text-sm mb-6 text-center">Make sure everything looks right</p>
          <div className="space-y-3 bg-surface rounded-xl p-5 border border-gray-200">
            <ReviewRow label="Insurance Type" value={form.insuranceType} />
            <ReviewRow label="Name" value={form.name} />
            <ReviewRow label="Phone" value={form.phone || "Not provided"} />
            <ReviewRow label="Email" value={form.email || "Not provided"} />
            <ReviewRow label="Current Provider" value={form.currentProvider || "Not provided"} />
            <ReviewRow label="Renewal Date" value={form.renewalDate || "Not provided"} />
            <ReviewRow label="Notes" value={form.notes || "None"} />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 gap-4">
        {step > 1 ? (
          <button onClick={back} className="px-6 py-2.5 text-sm font-medium text-text-body rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            Back
          </button>
        ) : (
          <div />
        )}
        {step < 4 ? (
          <button onClick={next} className="px-8 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all">
            Next
          </button>
        ) : (
          <button onClick={submit} disabled={submitting} className="px-8 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:pointer-events-none">
            {submitting ? "Submitting..." : "Submit Quote Request"}
          </button>
        )}
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2 border-b border-gray-200 last:border-0">
      <span className="text-sm text-text-body/70 shrink-0">{label}</span>
      <span className="text-sm font-medium text-text-heading text-right">{value}</span>
    </div>
  );
}
