import type { Metadata } from "next";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";
import { mapsEmbedUrl, mapsSearchUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach GLOBAL CHRIST MESSAGE MINISTRY on WhatsApp and Facebook. Tent location: Dojutelegan, Gekuba Apata, Ibadan.",
};

export default function ContactPage() {
  const wa = whatsappUrl();
  const maps = mapsSearchUrl();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the ministry"
        description={`You can reach us on Whatsapp, ${ministry.contact.whatsapp} and Face book on AJakaye Adeyemi.`}
        action={
          <div className="flex flex-wrap gap-3">
            <a
              href={ministry.contact.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Join WhatsApp programs
            </a>
            <a
              href={ministry.contact.facebookProgram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Watch on Facebook
            </a>
          </div>
        }
      />

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-10">
            <div className="grid gap-0">
              <Reveal>
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-t-2 border-navy py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    WhatsApp programs
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    Join the group where most programs take place
                  </p>
                </a>
              </Reveal>

              <Reveal delayMs={40}>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-t border-[var(--line)] py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    WhatsApp number
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.whatsapp}
                  </p>
                </a>
              </Reveal>

              <Reveal delayMs={80}>
                <a
                  href={ministry.contact.facebookProgram}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-t border-[var(--line)] py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    Facebook
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.facebook}
                  </p>
                  <p className="mt-2 text-ink-soft">
                    {ministry.contact.facebookProgramNote}
                  </p>
                </a>
              </Reveal>

              <Reveal delayMs={100}>
                <a
                  href={`mailto:${ministry.contact.email}`}
                  className="block border-t border-b border-[var(--line)] py-6 transition hover:bg-white/40"
                >
                  <p className="text-sm tracking-[0.14em] text-azure uppercase">
                    Email
                  </p>
                  <p className="display mt-2 text-2xl text-navy">
                    {ministry.contact.email}
                  </p>
                </a>
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
                <h2 className="display text-2xl text-navy">Tent location</h2>
                <p className="mt-3 text-lg text-ink-soft">
                  {ministry.contact.locationDetail}
                </p>
                <div className="maps-frame mt-5">
                  <iframe
                    title="Map to GLOCMEMIN tent location"
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
          </div>
        </div>
      </section>
    </>
  );
}
