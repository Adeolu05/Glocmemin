import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScheduleRow } from "@/components/ScheduleRow";
import { SectionHead } from "@/components/SectionHead";
import { SplitBlock } from "@/components/SplitBlock";
import { ThisWeekHighlight } from "@/components/ThisWeekHighlight";
import { ministry } from "@/content/ministry";
import { whatsappUrl } from "@/lib/site";

export default function HomePage() {
  const wa = whatsappUrl();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden grain">
        <Image
          src="/images/hero-dawn.jpg"
          alt="Open Bible at dawn over a hillside landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.42)_0%,rgba(7,26,51,0.35)_40%,rgba(7,26,51,0.88)_100%)]" />

        <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <div className="max-w-3xl text-white">
            <p className="fade-up mb-3 text-sm font-bold tracking-[0.2em] text-[var(--gold)] uppercase">
              {ministry.churchArm}
            </p>
            <h1 className="display fade-up-delay text-[clamp(3rem,9vw,5.8rem)] text-white">
              {ministry.name}
            </h1>
            <p className="fade-up-delay-2 mt-5 max-w-xl text-lg text-white/88 md:text-xl">
              Presenting every man perfect in Christ Jesus - through the
              undiluted Word of God to the whole world.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/programs" className="btn btn-primary">
                See Our Programs
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Worship With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitBlock
            label={
              <>
                <p className="eyebrow">Our Vision</p>
                <h2 className="display">Perfect in Christ Jesus</h2>
              </>
            }
          >
            <blockquote className="quote-block">
              <p className="display">“{ministry.vision}”</p>
              <footer>{ministry.visionRef}</footer>
            </blockquote>
            <p className="prose-lead mt-6">{ministry.mission}</p>
            <Link href="/about" className="btn btn-outline mt-7">
              Read the full story
            </Link>
          </SplitBlock>
        </div>
      </section>

      <section className="section-tight section-band">
        <div className="container">
          <SectionHead
            eyebrow="Why This Mission"
            title="We contend against four forces"
            description="Are you under the oppression of Satan, Sin, Flesh, or Worldliness? You need this mission."
          />

          <div className="force-grid">
            {ministry.destroy.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="force-item">
                  <p className="force-item__num">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="This Week"
            title="Gather. Pray. Win souls."
            description="Sunday worship leads the week - then prayer, vigils, and outreach carry the Word forward."
          />

          <ThisWeekHighlight />

          <Reveal>
            <div className="schedule-list">
              {ministry.sunday.map((item, index) => (
                <ScheduleRow
                  key={item.title}
                  label="Sunday"
                  title={item.title}
                  detail={item.detail}
                  time={item.time}
                  bordered={index !== ministry.sunday.length - 1}
                />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="revival-band">
              <div>
                <p className="eyebrow">Monthly Revival</p>
                <p className="display mt-2 text-2xl text-navy">
                  {ministry.monthly.title}
                </p>
                <p className="mt-1 text-ink-soft">
                  {ministry.monthly.dates} · {ministry.monthly.time} · Live &amp;
                  Online
                </p>
              </div>
              <Link href="/programs" className="btn btn-primary">
                Full schedule
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight pb-20">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <p className="text-sm font-bold tracking-[0.18em] text-[var(--gold)] uppercase">
                Know us · {ministry.knowUs}
              </p>
              <h2 className="display">
                Come and experience the power of the cross.
              </h2>
              <p>
                Reach {ministry.minister} on WhatsApp or fellowship with us in
                Odogbolu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={wa}
                  className="btn btn-on-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp {ministry.contact.whatsapp}
                </a>
                <Link href="/beliefs" className="btn btn-ghost">
                  What we believe
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
