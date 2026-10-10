"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-center font-display text-4xl font-bold sm:text-5xl">Upcoming Event</h2>

      <div className="mt-10 grid gap-8 md:grid-cols-[2.3fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card-effect relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl border-2 border-line bg-gradient-to-b from-neutral-200 to-neutral-800 p-6 text-white shadow-[8px_8px_0_var(--line)]"
        >
          <span className="absolute left-6 top-6 rounded-full border-2 border-black bg-white px-3 py-0.5 text-[10px] font-bold uppercase text-black">
            Upcoming
          </span>

          <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
            GDG Orientation
          </h3>
          <p className="mt-3 line-clamp-3 max-w-2xl text-xs leading-relaxed text-white/75">
            Google Developer Groups (GDG) &ndash; Student Chapter is a community of students passionate
            about technology, innovation, and learning. We bring students together to learn,
            build, and grow through technical workshops, hands-on sessions, hackathons, projects,
            and networking opportunities.
          </p>

          <a
            href="#contact"
            aria-label="Learn more about GDG Orientation"
            className="mt-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-gdg-yellow text-black transition hover:-translate-y-0.5 hover:translate-x-0.5"
          >
            <ArrowUpRight size={16} />
          </a>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="card-effect relative flex min-h-80 flex-col rounded-3xl border-2 border-line bg-gdg-yellow p-6 text-black shadow-[8px_8px_0_var(--line)]"
        >
          <h3 className="font-display text-4xl font-bold leading-none">
            New
            <br />
            Event
          </h3>

          {/* Divider with the ticket notch cut into the left edge */}
          <div className="relative mt-auto">
            <span
              aria-hidden="true"
              className="absolute top-1/2 hidden h-7 w-3.5 -translate-y-1/2 rounded-r-full border-2 border-l-0 border-line bg-background md:block"
              style={{ left: "-26px" }}
            />
            <hr className="border-0 border-t border-dotted border-black/40" />
          </div>

          <div className="mt-4 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-black/50">
              Date &amp; Time
            </p>
            <p className="text-sm font-bold">Oct 7, 2026</p>
            <p className="text-sm font-bold">3:00 PM</p>
          </div>

          <a
            href="#contact"
            className="mt-5 rounded-lg border-2 border-black bg-black px-4 py-2.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            Register Now
          </a>
        </motion.article>
      </div>
    </section>
  );
}