import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import Confetti from "./Confetti";

const socials = [
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/", color: "bg-gdg-red" },
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/", color: "bg-gdg-blue" },
  { label: "GitHub", short: "GH", href: "https://github.com/", color: "bg-gdg-green" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border-2 border-line bg-surface p-5 shadow-[5px_5px_0_var(--line)] sm:p-6">
          <div className="flex flex-col items-center text-center">
            <Logo />
            <p className="mt-2 font-display text-xl font-bold">Google Developer Groups</p>
            <p className="text-xs opacity-80">On Campus · Ramdeobaba University</p>
          </div>

          <div className="my-5 border-t-2 border-dashed border-line" />

          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-md border-2 border-line bg-gdg-blue p-3 text-xs font-bold text-black shadow-[3px_3px_0_var(--line)]">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <address className="not-italic">
                  Ramdeobaba University, Ambazari Road, Katol Road, Nagpur 440013
                </address>
              </div>
              <a
                href="mailto:gdg@rbunagpur.in"
                className="flex items-center gap-3 rounded-md border-2 border-line bg-gdg-yellow p-3 text-xs font-bold text-black shadow-[3px_3px_0_var(--line)] transition hover:-translate-y-0.5"
              >
                <Mail size={16} className="shrink-0" />
                gdg@rbunagpur.in
              </a>
            </div>

            <div className="rounded-md border-2 border-line bg-gdg-purple p-3 text-center text-black shadow-[3px_3px_0_var(--line)]">
              <p className="text-xs font-bold">Follow us</p>
              <ul className="mt-3 flex justify-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`${s.color} flex h-9 w-9 items-center justify-center rounded-md border-2 border-black text-xs font-bold transition hover:-translate-y-0.5`}
                    >
                      {s.short}
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