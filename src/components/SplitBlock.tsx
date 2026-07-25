import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SplitBlockProps = {
  label: ReactNode;
  children: ReactNode;
};

export function SplitBlock({ label, children }: SplitBlockProps) {
  return (
    <div className="split-block">
      <Reveal className="split-block__label">{label}</Reveal>
      <Reveal delayMs={80} className="split-block__content">
        {children}
      </Reveal>
    </div>
  );
}
