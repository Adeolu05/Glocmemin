import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHead({
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionHeadProps) {
  return (
    <Reveal className={`section-head ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display text-navy">{title}</h2>
      {description ? <p>{description}</p> : null}
      {children}
    </Reveal>
  );
}
