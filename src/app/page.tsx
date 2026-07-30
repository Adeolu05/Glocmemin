import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScheduleRow } from "@/components/ScheduleRow";
import { SectionHead } from "@/components/SectionHead";
import { SplitBlock } from "@/components/SplitBlock";
import { ThisWeekHighlight } from "@/components/ThisWeekHighlight";
import { ministry } from "@/content/ministry";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden grain">
        <Image
          src="/images/training-class.jpg"
          alt="Discipleship training class under the ministry tent"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.5)_0%,rgba(7,26,51,0.42)_40%,rgba(7,26,51,0.9)_100%)]" />

        <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <div className="max-w-3xl text-white">
            <p className="fade-up mb-3 text-sm font-bold tracking-[0.2em] text-[var(--gold)] uppercase">
              {ministry.churchArm}
            </p>
            <h1 className="display fade-up-delay text-[clamp(2.6rem,8vw,5.2rem)] text-white">
              {ministry.name}
              <span className="mt-2 block text-[0.45em] tracking-[0.08em]">
                ({ministry.shortName})
              </span>
            </h1>
            <p className="fade-up-delay-2 mt-5 max-w-xl text-lg text-white/88 md:text-xl">
              Come as you are - pray with us, learn Christ, and grow with the
              family under the tent.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <a
                href={ministry.contact.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Join us on WhatsApp
              </a>
              <a
                href={ministry.contact.facebookProgram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Catch us live on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitBlock
            label={
              <>
                <p className="eyebrow">Our heart</p>
                <h2 className="display">Why we gather</h2>
              </>
            }
          >
            <blockquote className="quote-block">
              <p className="display">“{ministry.vision}”</p>
              <footer>{ministry.visionRef}</footer>
            </blockquote>
            <p className="prose-lead mt-6">
              OUR MISSION: - {ministry.mission}
            </p>
            <Link href="/about" className="btn btn-outline mt-7">
              Get to know us better
            </Link>
          </SplitBlock>
        </div>
      </section>

      <section className="section-tight section-band">
        <div className="container">
          <SectionHead
            eyebrow="What we stand against"
            title="Freedom starts here"
            description={ministry.destroyClose}
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
            eyebrow="This week with us"
            title="Come pray. Come grow."
            description="Jump into daily prayer, vigils, and revival - most of it happens live on WhatsApp and Facebook."
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
                <p className="eyebrow">Don&apos;t miss this</p>
                <p className="display mt-2 text-2xl text-navy">
                  {ministry.monthly.title}
                </p>
                <p className="mt-1 text-ink-soft">{ministry.monthly.detail}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Join the revival group
                </a>
                <Link href="/programs" className="btn btn-outline">
                  See every program
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden border border-[var(--line)] bg-white/40">
              <Image
                src="/images/pastor-ajakaye.jpg"
                alt={ministry.ministerTitle}
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-sm tracking-[0.14em] text-azure uppercase">
                  Meet the minister
                </p>
                <p className="display mt-1 text-2xl text-navy">
                  {ministry.ministerTitle}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="overflow-hidden border border-[var(--line)] bg-navy text-white">
              <div className="flex justify-center bg-navy-deep px-4 py-5">
                <video
                  className="video-portrait"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/outreach.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm tracking-[0.14em] text-[var(--gold)] uppercase">
                  Out on the field
                </p>
                <p className="display mt-1 text-xl">
                  This is one of our outreach in conjunction with other churches
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight pb-20">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <p className="text-sm font-bold tracking-[0.18em] text-[var(--gold)] uppercase">
                You are welcome · {ministry.knowUs}
              </p>
              <h2 className="display">{ministry.invitation}</h2>
              <p>{ministry.locationNote}</p>
              <p className="mt-2">
                Find us at the tent: {ministry.contact.tentLocation}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  className="btn btn-on-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join us on WhatsApp
                </a>
                <a
                  href={ministry.contact.facebookProgram}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catch us live on Facebook
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
