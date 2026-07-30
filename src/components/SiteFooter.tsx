import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialIcons";
import { ministry } from "@/content/ministry";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="brand-mark brand-mark--on-dark brand-mark--footer">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={88}
              />
            </span>
            <div>
              <p className="display text-xl">{ministry.shortName}</p>
              <p className="text-sm text-white/55">{ministry.churchArm}</p>
            </div>
          </div>
          <p className="max-w-sm text-white/70">{ministry.locationNote}</p>
          <p className="mt-3 text-sm text-white/70">
            Visit the tent at {ministry.contact.tentLocation}.
          </p>
          <SocialLinks className="mt-5" tone="dark" />
          <p className="site-footer__motto">{ministry.motto}</p>
        </div>

        <div>
          <p className="site-footer__label">Explore</p>
          <ul className="site-footer__links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/beliefs">Beliefs</Link>
            </li>
            <li>
              <Link href="/programs">Programs</Link>
            </li>
            <li>
              <Link href="/life">Life</Link>
            </li>
            <li>
              <Link href="/humanitarian">Care</Link>
            </li>
            <li>
              <Link href="/give">Give</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__label">Come close</p>
          <ul className="site-footer__links">
            <li>
              <a href={`mailto:${ministry.contact.email}`}>
                {ministry.contact.email}
              </a>
            </li>
            <li>
              <a
                href={ministry.contact.whatsappGroup}
                target="_blank"
                rel="noreferrer"
              >
                Join us on WhatsApp
              </a>
            </li>
            <li>
              <a
                href={ministry.contact.facebookProgram}
                target="_blank"
                rel="noreferrer"
              >
                Live on Facebook · {ministry.contact.facebook}
              </a>
            </li>
            <li>
              <a
                href={ministry.contact.youtube}
                target="_blank"
                rel="noreferrer"
              >
                YouTube · {ministry.contact.youtubeLabel}
              </a>
            </li>
            <li>WhatsApp {ministry.contact.whatsapp}</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ministry.name}
          </p>
          <p>
            {ministry.knowUs} · {ministry.visionRef}
          </p>
        </div>
      </div>
    </footer>
  );
}
