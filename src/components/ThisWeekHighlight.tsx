import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getScheduleHighlights } from "@/lib/schedule";

type ThisWeekHighlightProps = {
  showLink?: boolean;
};

export function ThisWeekHighlight({ showLink = true }: ThisWeekHighlightProps) {
  const highlights = getScheduleHighlights();

  return (
    <Reveal>
      <div className="this-week">
        <div className="this-week__head">
          <div>
            <p className="eyebrow">Right now</p>
            <h3 className="display this-week__title">What&apos;s on this week</h3>
          </div>
          {showLink ? (
            <Link href="/programs" className="btn btn-outline !min-h-10 !px-4 !text-sm">
              See all programs
            </Link>
          ) : null}
        </div>
        <div className="this-week__grid">
          {highlights.map((item) => (
            <article key={`${item.eyebrow}-${item.title}`} className="this-week__card">
              <p className="this-week__eyebrow">{item.eyebrow}</p>
              <h4 className="display this-week__name">{item.title}</h4>
              <p className="this-week__time">{item.time}</p>
              <p className="this-week__detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
