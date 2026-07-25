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
    "Learn the name, vision, mission, and methods of Global Christ Message Ministry (GLOCMEMIN).",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Ministry"
        title={ministry.name}
        description={`Abbreviated ${ministry.shortName}. The church arm is ${ministry.churchArm}, raised to pastor those who are saved. Ministering under ${ministry.minister}.`}
      />

      <section className="section-tight">
        <div className="container grid items-start gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-8">
            <Reveal>
              <article className="border-t-2 border-navy pt-5">
                <p className="eyebrow">Vision</p>
                <p className="display mt-4 text-2xl leading-snug text-navy">
                  “{ministry.vision}”
                </p>
                <p className="mt-4 text-sm font-bold tracking-[0.12em] text-gold uppercase">
                  {ministry.visionRef}
                </p>
              </article>
            </Reveal>
            <Reveal delayMs={80}>
              <article className="border-t border-[var(--line)] pt-5">
                <p className="eyebrow">Mission · {ministry.missionRef}</p>
                <p className="display mt-4 text-2xl leading-snug text-navy">
                  {ministry.mission}
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delayMs={100}>
            <div className="flex flex-col items-center border border-[var(--line)] bg-white/40 px-8 py-10">
              <div className="logo-pair">
                <div className="logo-pair__item">
                  <Image
                    src="/images/logo.svg"
                    alt="GLOCMEMIN emblem"
                    width={120}
                    height={144}
                    priority
                  />
                  <p className="logo-pair__label">Ministry mark</p>
                </div>
                <div className="logo-pair__item">
                  <Image
                    src="/images/logo-scan.png"
                    alt="Original GLOCMEMIN printed logo"
                    width={120}
                    height={124}
                  />
                  <p className="logo-pair__label">From letterhead</p>
                </div>
              </div>
              <p className="mt-5 text-center text-sm text-ink-soft">
                {ministry.logoMeaning}
              </p>
              <p className="mt-3 text-sm font-bold tracking-[0.14em] text-azure uppercase">
                {ministry.visionRef}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How We Go"
            title="Mission pathways"
            description="The Word travels through evangelism, literature, training, and pastoral care."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {ministry.methods.map((method, index) => (
              <Reveal key={method.title} delayMs={index * 60}>
                <article className="rule-item">
                  <h3 className="display">{method.title}</h3>
                  <p>{method.text}</p>
                  {"ref" in method && method.ref ? (
                    <p className="mt-3 text-sm font-semibold text-azure">
                      {method.ref}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight section-band">
        <div className="container">
          <SectionHead
            eyebrow="Member Life"
            title="Saved to serve"
            description="Every believer is shaped for witness, work, and care for the needy."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {ministry.memberLife.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article>
                  <h3 className="display text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-ink-soft">{item.text}</p>
                  {"ref" in item && item.ref ? (
                    <p className="mt-2 text-sm font-semibold text-azure">
                      {item.ref}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-3xl border-l-[3px] border-gold pl-5">
            <h3 className="display text-xl text-navy">Giving</h3>
            <p className="mt-2 text-ink-soft">{ministry.giving}</p>
            <p className="mt-2 text-sm font-semibold text-azure">
              {ministry.givingRefs}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="House Practices"
            title="Life events, done biblically"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {ministry.practices.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="rule-item">
                  <h3 className="display">{item.title}</h3>
                  <p>{item.text}</p>
                  {"ref" in item && item.ref ? (
                    <p className="mt-3 text-sm font-semibold text-azure">
                      {item.ref}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/beliefs" className="btn btn-primary">
              Explore our beliefs
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
