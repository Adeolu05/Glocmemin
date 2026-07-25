import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  action,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="page-hero__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display page-hero__title">{title}</h1>
          {description ? (
            <p className="page-hero__desc">{description}</p>
          ) : null}
          {action ? <div className="page-hero__action">{action}</div> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
