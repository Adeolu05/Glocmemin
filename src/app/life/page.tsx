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
        eyebrow="Discipleship"
        title="WHAT YOU SHOULD KNOW ABOUT YOURSELF"
        description="Why do you come to the church or fellowship?"
      />

      <section className="section">
        <div className="container">
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
                            {
                              ["i", "ii", "iii", "iv", "v", "vi"][dutyIndex]
                            }
                            ) {duty}
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
                Join WhatsApp programs
              </a>
              <Link href="/humanitarian" className="btn btn-outline">
                Humanitarian department
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
