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
    "OUR ONLINE PROGRAMS. Daily prayer, ORU ATUNYAN, The Hand Taught of God, Sinner’s Clinic, Healing /Deliverance, MAKE MY LIVE A NEW.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="OBJECTIVES"
        title="OUR ONLINE PROGRAMS"
        description="You can reach us on Whatsapp, 08034958884 and Face book on AJakaye Adeyemi."
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

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="online-strip">
              <div>
                <p className="eyebrow">Online &amp; Live</p>
                <h2 className="display mt-2 text-2xl text-navy">
                  Most programs take place on WhatsApp
                </h2>
                <p className="mt-2 text-ink-soft">
                  {ministry.contact.facebookProgramNote}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Join WhatsApp
                </a>
                <a
                  href={ministry.contact.facebookProgram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Facebook program
                </a>
              </div>
            </div>
          </Reveal>

          <ThisWeekHighlight showLink={false} />

          <SectionHead
            eyebrow="On Sunday"
            title="Sunday gatherings"
            description={ministry.saturdayNote}
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
            eyebrow="Weekly"
            title="Prayer, vigils and clinic"
            description={ministry.objectivesIntro}
          />

          <Reveal>
            <div className="schedule-list mb-8">
              {ministry.gatherings.map((item, index) => (
                <ScheduleRow
                  key={item.title}
                  label="Meeting"
                  title={item.title}
                  detail={item.detail}
                  time={"ref" in item && item.ref ? item.ref : "As scheduled"}
                  bordered={index !== ministry.gatherings.length - 1}
                />
              ))}
            </div>
          </Reveal>

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
              <p>{ministry.monthly.detail}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={ministry.contact.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-on-dark"
                >
                  Join WhatsApp
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Contact
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="rule-item">
              <h3 className="display">Tent location</h3>
              <p>{ministry.contact.locationDetail}</p>
              <a
                href={ministry.contact.facebookProgram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline mt-6"
              >
                Watch Facebook program
              </a>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
