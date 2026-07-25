import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ministry } from "@/content/ministry";

export const metadata: Metadata = {
  title: "Beliefs",
  description:
    "Statement of faith of Global Christ Message Ministry - Trinity, Christ, angels, heaven and hell, prayer, healing, and baptism.",
};

export default function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="Statement of Faith"
        title="What we believe"
        description="Our confession is rooted in Scripture - from the Triune God to the finished work of Christ, and the Spirit-filled life of the believer."
      />

      <section className="section">
        <div className="container">
          <div className="border-t border-[var(--line)]">
            {ministry.beliefs.map((belief, index) => (
              <Reveal key={belief.title} delayMs={index * 40}>
                <article className="belief-row">
                  <p className="display belief-row__num">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="display">{belief.title}</h2>
                    <p>{belief.text}</p>
                    {"ref" in belief && belief.ref ? (
                      <p className="belief-row__ref">{belief.ref}</p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="cta-band">
              <p className="text-sm tracking-[0.16em] text-white/60 uppercase">
                An open invitation
              </p>
              <h2 className="display">
                If Jesus is not yet your Lord, today is the day to turn to Him.
              </h2>
              <p>
                Hell is for sinners - that is why Jesus came into this world to
                save us. Come and experience the power of the cross.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-on-dark">
                  Talk to us
                </Link>
                <Link href="/programs" className="btn btn-ghost">
                  Join a program
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
