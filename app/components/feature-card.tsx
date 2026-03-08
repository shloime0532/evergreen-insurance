import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "accent-top" | "icon-large";
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = "accent-top",
}: FeatureCardProps) {
  if (variant === "icon-large") {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-text-heading">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-body/70">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200 border-t-4 border-t-primary">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-primary">{icon}</span>
        <h3 className="text-lg font-bold text-text-heading">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-text-body/70">{description}</p>
    </div>
  );
}
