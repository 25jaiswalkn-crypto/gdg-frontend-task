"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Google Developer Groups, RBU
          </h1>
          <p className="mt-5 max-w-xs font-mono text-sm leading-8 sm:text-base sm:leading-9">
            Empowering students with cutting-edge tech skills, community, and resources for a
            future in technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#team"
              className="border-2 border-line bg-surface px-4 py-2 text-[11px] font-bold uppercase shadow-[4px_4px_0_var(--line)] transition hover:-translate-y-0.5"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="border-2 border-line bg-surface px-4 py-2 text-[11px] font-bold uppercase shadow-[4px_4px_0_var(--line)] transition hover:-translate-y-0.5"
            >
              Profile
            </a>
          </div>
          <span className="mt-5 inline-block -rotate-2 bg-foreground px-2 py-1 text-[10px] font-bold text-background">
            GDG • RBU
          </span>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <svg viewBox="0 0 400 270" className="h-auto w-full text-foreground">
            <rect x="150" y="0" width="250" height="190" rx="32" fill="currentColor" />
            <rect x="0" y="50" width="295" height="220" rx="32" fill="currentColor" />
            <rect x="88" y="104" width="230" height="30" rx="15" fill="var(--background)" />
            <circle cx="108" cy="118" r="5" fill="none" stroke="#999" strokeWidth="1.5" />
            <path d="M112 122 L116 126" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
            <text
              x="205"
              y="124"
              textAnchor="middle"
              fontSize="13"
              fill="#999"
              letterSpacing="2"
              fontFamily="monospace"
            >
              gdgr
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}