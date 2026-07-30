import { ministry } from "@/content/ministry";

type SocialLinksProps = {
  className?: string;
  tone?: "light" | "dark";
};

const iconClass = "h-5 w-5 shrink-0";

function WhatsAppIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 2.08.55 4.1 1.6 5.88L2 22l4.45-1.66a10.1 10.1 0 0 0 5.59 1.66h.01c5.46 0 9.89-4.4 9.89-9.83A9.77 9.77 0 0 0 12.04 2Zm0 17.95h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.64.98.89-2.57-.2-.31a8.1 8.1 0 0 1-1.25-4.34c0-4.5 3.7-8.16 8.25-8.16 2.2 0 4.27.85 5.83 2.4a8.05 8.05 0 0 1 2.42 5.76c0 4.5-3.7 8.17-8.24 8.17Zm4.52-6.12c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.49.64 2.07.7 2.81.59.43-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8.1h2.72l.41-3.16H13.5V8.72c0-.91.25-1.54 1.57-1.54h1.68V4.35A23.5 23.5 0 0 0 14.2 4.2c-2.43 0-4.1 1.48-4.1 4.2v2.34H7.5v3.16h2.6V22h3.4Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 7.2a3.02 3.02 0 0 0-2.12-2.14C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.38.46A3.02 3.02 0 0 0 .5 7.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 4.8 3.02 3.02 0 0 0 2.12 2.14C4.5 19.4 12 19.4 12 19.4s7.5 0 9.38-.46a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
      />
    </svg>
  );
}

export function SocialLinks({ className = "", tone = "dark" }: SocialLinksProps) {
  const toneClass =
    tone === "light"
      ? "social-links social-links--light"
      : "social-links social-links--dark";

  const links = [
    {
      href: ministry.contact.whatsappGroup,
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
    },
    {
      href: ministry.contact.facebookProgram,
      label: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      href: ministry.contact.youtube,
      label: "YouTube",
      icon: <YouTubeIcon />,
    },
  ] as const;

  return (
    <ul className={`${toneClass} ${className}`.trim()} aria-label="Social links">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
            <span className="social-links__label">{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
