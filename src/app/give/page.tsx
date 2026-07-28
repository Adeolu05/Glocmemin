import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Give",
  description: ministry.giving,
};

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Sow into the work"
        title="Your giving keeps the mission moving"
        description="Offerings, gifts, and sacrificial giving help carry the Word - and care for people."
      />

      <section className="section">
        <div className="container max-w-3xl">
          <Reveal>
            <article className="border-t-2 border-navy pt-6">
              <h2 className="display text-2xl text-navy">
                What the Word teaches us about giving
              </h2>
              <p className="prose-lead mt-4">{ministry.giving}</p>
              <p className="mt-4 text-sm font-semibold text-azure">
                {ministry.givingRefs}
              </p>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="mt-10 border-t border-[var(--line)] pt-6">
              <h2 className="display text-2xl text-navy">
                Ready to give?
              </h2>
              <p className="mt-3 text-ink-soft">
                Bank account details are coming soon. For now, message the
                ministry on WhatsApp and we will guide you warmly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Message on WhatsApp
                </a>
                <a
                  href={`https://wa.me/234${ministry.contact.whatsapp.slice(1)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Chat {ministry.contact.whatsapp}
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={120}>
            <p className="prose-lead mt-12">{ministry.invitation}</p>
            <Link href="/humanitarian" className="btn btn-outline mt-6">
              See where love is working
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
