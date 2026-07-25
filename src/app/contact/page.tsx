import type { Metadata } from "next";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";
import { mapsEmbedUrl, mapsSearchUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Global Christ Message Ministry - phone, WhatsApp, email, Facebook, and fellowship location details.",
};

export default function ContactPage() {
  const wa = whatsappUrl();
  const maps = mapsSearchUrl();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the ministry"
        description={`Speak with ${ministry.minister}, join an online program, or fellowship with ${ministry.churchArm}.`}
        action={
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            WhatsApp {ministry.contact.whatsapp}
          </a>
        }
      />

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-10">
            <div className="grid gap-0">
              <Reveal>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-t-2 border-navy py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    WhatsApp
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.whatsapp}
                  </p>
                </a>
              </Reveal>

              <Reveal delayMs={60}>
                <a
                  href={`mailto:${ministry.contact.email}`}
                  className="block border-t border-[var(--line)] py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    Email
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.email}
                  </p>
                </a>
              </Reveal>

              <Reveal delayMs={100}>
                <div className="border-t border-b border-[var(--line)] py-6">
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    Facebook
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.facebook}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delayMs={80}>
              <ContactRequestForm />
            </Reveal>
          </div>

          <div className="grid gap-8">
            <Reveal delayMs={80}>
              <article>
                <h2 className="display text-2xl text-navy">Phone lines</h2>
                <ul className="mt-4 space-y-2">
                  {ministry.contact.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone}`}
                        className="text-lg font-semibold text-ink hover:text-azure"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={120}>
              <article className="border-t border-[var(--line)] pt-6">
                <h2 className="display text-2xl text-navy">Postal address</h2>
                <p className="mt-3 text-lg text-ink-soft">
                  {ministry.contact.postal}
                </p>
                <h3 className="display mt-6 text-xl text-navy">
                  Fellowship venue
                </h3>
                <p className="mt-2 text-ink-soft">{ministry.contact.venueNote}</p>
                <div className="maps-frame mt-5">
                  <iframe
                    title="Map to GLOCMEMIN fellowship venue"
                    src={mapsEmbedUrl()}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline mt-4"
                >
                  Open in Google Maps
                </a>
                <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-gold uppercase">
                  {ministry.motto}
                </p>
              </article>
            </Reveal>

            <Reveal delayMs={160}>
              <article className="border-t border-[var(--line)] pt-6">
                <h2 className="display text-2xl text-navy">Online programs</h2>
                <p className="mt-3 text-ink-soft">
                  Daily prayer, Monday and Wednesday vigils, Tuesday
                  Sinner&apos;s Clinic, monthly healing/deliverance, and{" "}
                  <strong>{ministry.monthly.title}</strong> revival all run live
                  and online. Message WhatsApp to receive joining details.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
