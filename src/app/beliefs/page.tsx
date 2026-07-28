import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Beliefs",
  description: "OUR BELIEF - Trinity, Rapture, Angeles, Heaven and Hell, prayer, healing, and baptism.",
};

export default function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR BELIEF"
        title="OUR BELIEF"
        description={ministry.destroyClose}
      />

      <section className="section">
        <div className="container">
          <div className="border-t border-[var(--line)]">
            {ministry.beliefs.map((belief, index) => (
              <Reveal key={belief.title} delayMs={index * 40}>
                <article className="belief-row">
                  <p className="display belief-row__num">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="display">{belief.title}</h2>
                    <p>{belief.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="cta-band">
              <p className="text-sm tracking-[0.16em] text-white/60 uppercase">
                Invitation
              </p>
              <h2 className="display">{ministry.invitation}</h2>
              <p>{ministry.aboveAll}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-on-dark">
                  Contact us
                </Link>
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Join WhatsApp programs
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
