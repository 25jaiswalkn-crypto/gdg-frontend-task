"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
        Upcoming Event
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl border-2 border-line bg-gradient-to-b from-neutral-300 to-neutral-800 p-5 text-white shadow-[5px_5px_0_var(--line)]"
        >
          <span className="absolute left-4 top-4 rounded-full border-2 border-black bg-white px-3 py-0.5 text-[10px] font-bold uppercase text-black">
            Upcoming
          </span>

          <h3 className="font-display text-xl font-bold uppercase tracking-wide">
            GDG Orientation
          </h3>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/80">
            Join us for an introduction to Google Developer Groups at RBU. Meet the team,
            learn what we do, and find out how you can get involved in workshops, hackathons,
            and community projects throughout the year.
          </p>

          <a
            href="#contact"
            aria-label="Learn more about GDG Orientation"
            className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-gdg-yellow text-black transition hover:translate-x-1"
          >
            <ArrowRight size={16} />
          </a>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex min-h-72 flex-col rounded-2xl border-2 border-line bg-gdg-yellow p-5 text-black shadow-[5px_5px_0_var(--line)]"
        >
          <h3 className="font-display text-3xl font-bold leading-tight">
            New
            <br />
            Event
          </h3>

          <div className="mt-auto space-y-1 text-xs">
            <p className="font-bold uppercase text-black/60">Date &amp; Time</p>
            <p className="font-bold">Oct 1, 2026</p>
            <p>5:00 PM</p>
          </div>

          <a
            href="#contact"
            className="mt-4 rounded-md border-2 border-black bg-black px-4 py-2 text-center text-xs font-bold uppercase text-white transition hover:-translate-y-0.5"
          >
            Register Now
          </a>
        </motion.article>
      </div>
    </section>
  );
}