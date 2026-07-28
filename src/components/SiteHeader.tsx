"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ministry } from "@/content/ministry";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/programs", label: "Programs" },
  { href: "/life", label: "Life" },
  { href: "/humanitarian", label: "Care" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color,border-color] duration-300 ${
          overHero ? "site-header--over-hero" : "site-header--solid"
        }`}
      >
        <div className="container flex items-center justify-between gap-4 py-3.5">
          <Link href="/" className="group flex items-center gap-3">
            <span
              className={`brand-mark ${
                overHero ? "brand-mark--on-dark" : "brand-mark--on-light"
              }`}
            >
              <Image
                src="/images/logo.svg"
                alt="GLOCMEMIN logo"
                width={40}
                height={48}
                priority
              />
            </span>
            <span className="leading-tight">
              <span
                className={`display block text-[1.1rem] tracking-tight transition-colors duration-300 ${
                  overHero ? "text-white" : "text-navy"
                }`}
              >
                GLOCMEMIN
              </span>
              <span
                className={`hidden text-[0.68rem] tracking-[0.1em] uppercase transition-colors duration-300 lg:block ${
                  overHero ? "text-white/70" : "text-ink-soft"
                }`}
              >
                Global Christ Message Ministry
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active ? "is-active" : ""} ${
                    overHero ? "nav-link--light" : "nav-link--dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={ministry.contact.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className={`btn hidden !min-h-10 !px-4 !text-sm sm:inline-flex ${
                overHero ? "btn-ghost" : "btn-primary"
              }`}
            >
              Join us live
            </a>
            <button
              type="button"
              className={`menu-toggle xl:hidden ${
                overHero ? "menu-toggle--light" : "menu-toggle--dark"
              }`}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`menu-bar absolute inset-x-0 top-0 ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`menu-bar absolute inset-x-0 top-1.5 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`menu-bar absolute inset-x-0 top-3 ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id={menuId}
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav__panel">
          <div className="container flex h-full flex-col pt-24 pb-10">
            <nav
              className="flex flex-1 flex-col justify-center gap-1"
              aria-label="Mobile"
            >
              {links.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    className={`mobile-nav__link ${active ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-nav__num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="display">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-white/15 pt-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-[var(--gold)] uppercase">
                {ministry.motto}
              </p>
              <a
                href={ministry.contact.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
                className="btn btn-primary mt-4 !bg-white !text-navy"
                onClick={() => setOpen(false)}
              >
                Join us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
