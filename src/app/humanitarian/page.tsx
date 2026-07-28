import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Humanitarian",
  description: ministry.humanitarianTitle,
};

export default function HumanitarianPage() {
  return (
    <>
      <PageHero
        eyebrow="Love in action"
        title="We care for people"
        description="Orphanage, rehab, clinic, and empowerment - faith that reaches the hurting."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow mb-8">{ministry.humanitarianTitle}</p>
          <div className="grid gap-8 md:grid-cols-2">
            {ministry.humanitarian.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article className="rule-item">
                  <p className="force-item__num">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="display mt-2 text-2xl text-navy">
                    {item.title}
                  </h2>
                  <p className="mt-3">{item.text}</p>
                  {"ref" in item && item.ref ? (
                    <p className="mt-3 text-sm font-semibold text-azure">
                      {item.ref}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="cta-band">
              <h2 className="display">{ministry.invitation}</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-on-dark">
                  Talk with us
                </Link>
                <Link href="/give" className="btn btn-ghost">
                  Partner by giving
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
