"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home", color: "bg-gdg-blue" },
  { label: "Team", href: "#team", color: "bg-gdg-red" },
  { label: "Events", href: "#events", color: "bg-gdg-yellow" },
  { label: "Gallery", href: "#gallery", color: "bg-gdg-green" },
  { label: "Portfolio", href: "#faqs", color: "bg-gdg-purple" },
  { label: "More", href: "#contact", color: "bg-gdg-blue" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        <a href="#home" aria-label="GDG RBU home" className="justify-self-start">
          <Logo className="h-8 w-12" />
        </a>

        <ul className="hidden items-center gap-3 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`${l.color} block rounded-lg border-2 border-black px-4 py-1.5 text-xs font-bold text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-line bg-surface md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="grid grid-cols-2 gap-3 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${l.color} block rounded-lg border-2 border-black px-3 py-2 text-center text-sm font-bold text-black shadow-[3px_3px_0_#000]`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}