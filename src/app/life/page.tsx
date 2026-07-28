import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Life",
  description: ministry.knowYourselfTitle,
};

export default function LifePage() {
  return (
    <>
      <PageHero
        eyebrow="For every believer"
        title="Why you are here matters"
        description="Take a moment with these truths - they shape how we come to church and how we live for Christ."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow mb-2">From the brochure</p>
          <h2 className="display mb-8 text-2xl text-navy md:text-3xl">
            {ministry.knowYourselfTitle}
          </h2>
          <div className="border-t border-[var(--line)]">
            {ministry.knowYourself.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 40}>
                <article className="belief-row">
                  <p className="display belief-row__num">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="display">{item.title}</h2>
                    <p>{item.text}</p>
                    {"duties" in item && item.duties ? (
                      <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-soft">
                        {item.duties.map((duty, dutyIndex) => (
                          <li key={duty}>
                            (
                            {["i", "ii", "iii", "iv", "v", "vi"][dutyIndex]}){" "}
                            {duty}
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    {"ref" in item && item.ref ? (
                      <p className="belief-row__ref">{item.ref}</p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="prose-lead">{ministry.aboveAll}</p>
            <p className="prose-lead mt-4">{ministry.invitation}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ministry.contact.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Join us on WhatsApp
              </a>
              <Link href="/humanitarian" className="btn btn-outline">
                See our care work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
