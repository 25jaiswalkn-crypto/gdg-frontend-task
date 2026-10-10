"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home", color: "bg-gdg-blue" },
  { label: "Team", href: "#team", color: "bg-gdg-red" },
  { label: "Events", href: "#events", color: "bg-gdg-yellow" },
  { label: "Gallery", href: "#gallery", color: "bg-gdg-green" },
  { label: "FAQs", href: "#faqs", color: "bg-gdg-purple" },
  { label: "Contact", href: "#contact", color: "bg-gdg-blue" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
      >
        <a href="#home" className="font-display text-lg font-bold" aria-label="GDG RBU home">
          GDG<span className="text-gdg-blue">.</span>RBU
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`${l.color} rounded-md border-2 border-line px-3 py-1 text-xs font-bold text-black shadow-[2px_2px_0_var(--line)] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--line)]`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
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
        <ul className="grid grid-cols-2 gap-2 border-t-2 border-line px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${l.color} block rounded-md border-2 border-line px-3 py-2 text-center text-sm font-bold text-black shadow-[2px_2px_0_var(--line)]`}
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