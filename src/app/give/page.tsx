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
        eyebrow="Support"
        title="Offering and sacrificial giving"
        description="The ministry is to be supported by offering, gift, percentage sacrificial offering ( which is more than tithes) rather than lunching and other ceremonies."
      />

      <section className="section">
        <div className="container max-w-3xl">
          <Reveal>
            <article className="border-t-2 border-navy pt-6">
              <h2 className="display text-2xl text-navy">Giving</h2>
              <p className="prose-lead mt-4">{ministry.giving}</p>
              <p className="mt-4 text-sm font-semibold text-azure">
                {ministry.givingRefs}
              </p>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="mt-10 border-t border-[var(--line)] pt-6">
              <h2 className="display text-2xl text-navy">Account details</h2>
              <p className="mt-3 text-ink-soft">
                Account details coming soon. For now, reach the ministry on
                WhatsApp to give or ask about offering.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  WhatsApp programs
                </a>
                <a
                  href={`https://wa.me/234${ministry.contact.whatsapp.slice(1)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  WhatsApp {ministry.contact.whatsapp}
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={120}>
            <p className="prose-lead mt-12">{ministry.invitation}</p>
            <Link href="/humanitarian" className="btn btn-outline mt-6">
              Humanitarian department
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
