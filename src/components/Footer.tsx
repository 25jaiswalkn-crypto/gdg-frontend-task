import { ExternalLink, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import Confetti from "./Confetti";

const EMAIL = "gdsc@rknec.edu";
const PLACE = "Ramdeobaba University, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur 440013";

// Opens Google Maps with directions from the visitor's location to RBU
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PLACE)}`;

// Opens a Gmail compose window addressed to GDG RBU
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
  "Hello GDG RBU"
)}`;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

const socials = [
  {
    label: "GDG RBU on Instagram",
    href: "https://www.instagram.com/gdg_rbu/",
    color: "bg-[#f87171]",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GDG RBU on LinkedIn",
    href: "https://www.linkedin.com/company/gdg-rbu/",
    color: "bg-[#60a5fa]",
    icon: (
      <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GDG RBU on X",
    href: "https://x.com/gdsc_rcoem",
    color: "bg-[#4ade80]",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-md border-2 border-line bg-surface p-5 shadow-[6px_6px_0_var(--line)] sm:p-7">
          <div className="flex flex-col items-center text-center">
            <Logo outlined className="h-16 w-24" />
            <p className="mt-3 font-display text-2xl font-medium">Google Developer Groups</p>
            <p className="mt-1 text-xs font-bold">On Campus &bull; Ramdeobaba University</p>
          </div>

          <div className="my-6 border-t-2 border-dashed border-line" />

          <div className="grid gap-4 md:grid-cols-[1.7fr_1fr]">
            <div className="space-y-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Ramdeobaba University on Google Maps"
                className="group flex items-center gap-4 rounded-sm border-2 border-black bg-[#62a6ff] px-4 py-3 text-xs font-bold text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <MapPin size={18} className="shrink-0" aria-hidden="true" />
                <address className="flex-1 not-italic leading-relaxed">
                  Ramdeobaba University
                  <br />
                  Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013
                </address>
                <ExternalLink size={14} className="shrink-0 opacity-60 group-hover:opacity-100" aria-hidden="true" />
              </a>

              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Write an email to ${EMAIL} in Gmail`}
                className="group flex items-center gap-4 rounded-sm border-2 border-black bg-gdg-yellow px-4 py-5 text-xs font-bold text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <span className="flex-1">{EMAIL}</span>
                <ExternalLink size={14} className="shrink-0 opacity-60 group-hover:opacity-100" aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col items-center justify-center rounded-sm border-2 border-black bg-gdg-purple p-4 text-white shadow-[3px_3px_0_#000]">
              <p className="text-xs font-bold">Follow Us:</p>
              <ul className="mt-4 flex gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`${s.color} flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black text-black shadow-[2px_2px_0_#000] transition hover:-translate-y-0.5`}
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Confetti />
      </div>
    </footer>
  );
}