import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "About",
  description:
    "NAME: - The ministry shall be call “GLOBAL CHRIST MESSAGE MINISTRY' (GLOCMEMIN) The Church arm is to be called- End time Christ Army.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={`${ministry.name} (${ministry.shortName})`}
        description="A people raised to take Christ to the world - and to train disciples under the tent."
      />

      <section className="section-tight">
        <div className="container grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-8">
            <Reveal>
              <article className="border-t-2 border-navy pt-5">
                <p className="eyebrow">NAME</p>
                <p className="mt-3 text-ink-soft">
                  The ministry shall be call “GLOBAL CHRIST MESSAGE MINISTRY&apos;
                  (GLOCMEMIN) The Church arm is to be called-{" "}
                  {ministry.churchArm}.
                </p>
                <p className="eyebrow mt-8">VISION</p>
                <p className="display mt-4 text-2xl leading-snug text-navy">
                  {ministry.vision}
                </p>
              </article>
            </Reveal>
            <Reveal delayMs={80}>
              <article className="border-t border-[var(--line)] pt-5">
                <p className="eyebrow">OUR MISSION</p>
                <p className="display mt-4 text-2xl leading-snug text-navy">
                  {ministry.mission}
                </p>
                <p className="mt-4 text-ink-soft">Through:-</p>
              </article>
            </Reveal>
          </div>

          <Reveal delayMs={100}>
            <div className="overflow-hidden border border-[var(--line)] bg-white/40">
              <Image
                src="/images/pastor-ajakaye.jpg"
                alt={ministry.ministerTitle}
                width={700}
                height={880}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="px-6 py-5">
                <p className="text-sm tracking-[0.14em] text-azure uppercase">
                  Meet the minister
                </p>
                <p className="display mt-1 text-2xl text-navy">
                  {ministry.ministerTitle}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How we go"
            title="This is how the Word travels"
            description="From village paths to Bible school - every path is aimed at souls and service."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {ministry.methods.map((method, index) => (
              <Reveal key={method.title} delayMs={index * 60}>
                <article className="rule-item">
                  <h3 className="display">
                    {String.fromCharCode(65 + index)}. {method.title}
                  </h3>
                  <p>{method.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight section-band">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden border border-[var(--line)] bg-white/50">
              <Image
                src="/images/training-class.jpg"
                alt="Training class under the tent"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-sm tracking-[0.14em] text-azure uppercase">
                  Life under the tent
                </p>
                <p className="mt-1 text-ink-soft">
                  this is one of our training class
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div>
              <p className="eyebrow">Our emblem</p>
              <h2 className="display mt-3 text-3xl text-navy">What the logo means</h2>
              <div className="mt-6 flex justify-center sm:justify-start">
                <Image
                  src="/images/logo.png"
                  alt="GLOCMEMIN letterhead logo — drop of oil"
                  width={220}
                  height={480}
                  className="h-auto w-[11rem] object-contain sm:w-[13rem]"
                />
              </div>
              <p className="prose-lead mt-4">{ministry.logoMeaning}</p>
              <p className="mt-4 text-ink-soft">{ministry.destroyIntro}</p>
              <ul className="mt-4 space-y-3 text-ink-soft">
                {ministry.destroy.map((item, index) => (
                  <li key={item.title}>
                    ({index + 1}) {item.text}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-semibold text-navy">
                {ministry.destroyClose}
              </p>
              <p className="mt-8 border-t border-[var(--line)] pt-5 text-ink-soft">
                {ministry.locationNote}
              </p>
              <p className="mt-2 text-ink-soft">
                The Tent location is at {ministry.contact.tentLocation}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Family life"
            title="How we walk together"
          />
          <div className="grid gap-8 md:grid-cols-1">
            {ministry.memberLife.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article className="rule-item">
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <SectionHead
              eyebrow="Milestones of life"
              title="Naming, marriage, and burial"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {ministry.practices.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="rule-item">
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="prose-lead">{ministry.aboveAll}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/beliefs" className="btn btn-primary">
                What we believe
              </Link>
              <Link href="/life" className="btn btn-outline">
                Why you come to fellowship
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
