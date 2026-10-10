"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Google Developer Groups, RBU
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed sm:text-base">
            Empowering students with cutting-edge tech skills, community, and resources for a
            future in technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#team"
              className="rounded-md border-2 border-line bg-surface px-4 py-2 text-xs font-bold uppercase shadow-[3px_3px_0_var(--line)] transition hover:-translate-y-0.5"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="rounded-md border-2 border-line bg-gdg-yellow px-4 py-2 text-xs font-bold uppercase text-black shadow-[3px_3px_0_var(--line)] transition hover:-translate-y-0.5"
            >
              Join us
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto h-56 w-full max-w-sm sm:h-64"
        >
          <div className="absolute right-0 top-0 h-32 w-4/5 rounded-3xl bg-foreground" />
          <div className="absolute bottom-0 left-0 flex h-32 w-4/5 items-center justify-center rounded-3xl bg-foreground">
            <div className="h-5 w-3/5 rounded-full bg-background" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}