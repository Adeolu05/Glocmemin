import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ScheduleRow } from "@/components/ScheduleRow";
import { SectionHead } from "@/components/SectionHead";
import { ThisWeekHighlight } from "@/components/ThisWeekHighlight";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Sunday services, online prayer, vigils, Sinner’s Clinic, healing, deliverance, and Make My Live A New revival schedule.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Schedule"
        title="When we gather"
        description="Bible studies tagged Back to God's Quarry, prayer meetings, Sunday worship, and online programs throughout the week."
      />

      <section className="section-tight">
        <div className="container">
          <ThisWeekHighlight showLink={false} />

          <SectionHead
            eyebrow="Sunday"
            title="The Lord’s Day"
            description="Main worship, fishing time, and the first-Sunday communion gathering."
          />

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
        </div>
      </section>

      <section className="section section-band">
        <div className="container">
          <SectionHead
            eyebrow="Weekly Rhythm"
            title="Live and online"
            description={`Daily prayer, vigils, clinic, healing, and village evangelism - reach us on WhatsApp ${ministry.contact.whatsapp}.`}
          />

          <Reveal>
            <div className="schedule-list">
              {ministry.weekly.map((item, index) => (
                <ScheduleRow
                  key={`${item.day}-${item.title}`}
                  label={item.day}
                  title={item.title}
                  detail={item.detail}
                  time={item.time}
                  bordered={index !== ministry.weekly.length - 1}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="cta-band h-full">
              <p className="text-sm tracking-[0.16em] text-white/60 uppercase">
                Monthly Revival
              </p>
              <h2 className="display !max-w-none">{ministry.monthly.title}</h2>
              <p className="!text-[var(--gold)] !text-xl">
                {ministry.monthly.dates}
              </p>
              <p className="!mt-2">{ministry.monthly.time}</p>
              <p>{ministry.monthly.detail}</p>
              <Link href="/contact" className="btn btn-on-dark mt-8">
                Ask how to join online
              </Link>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {ministry.gatherings.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article className="rule-item">
                  <h3 className="display">{item.title}</h3>
                  <p>{item.detail}</p>
                  {"ref" in item && item.ref ? (
                    <p className="mt-2 text-sm font-semibold text-azure">
                      {item.ref}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
