"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const points = [
  {
    title: "Passionate Community Leaders",
    text: "Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.",
  },
  {
    title: "Empowering Developers",
    text: "We host meetups and codelabs to help developers stay current with modern tools and best practices.",
  },
];

export default function Team() {
  const [failed, setFailed] = useState(false);

  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="card-effect grid overflow-hidden rounded-md border-2 border-line bg-cream shadow-[8px_8px_0_var(--line)] md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-6 sm:p-10">
          <h2 className="max-w-xs font-display text-4xl font-bold leading-tight sm:text-5xl">
            Meet the Google Developer Group Team
          </h2>
          <p className="mt-6 text-xs leading-relaxed sm:text-sm">
            Google Developer Groups (GDG) are open and volunteer-run communities for developers
            interested in Google technologies. Our team focuses on learning, networking, and
            collaboration through events and hands-on sessions.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map(({ title, text }) => (
              <li key={title} className="flex gap-3">
                <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure id="gallery" className="relative min-h-72 md:min-h-full">
          {failed ? (
            <div className="flex h-full min-h-72 items-center justify-center bg-gdg-blue/20 text-xs font-bold">
              Team image not found in public/
            </div>
          ) : (
            <Image
              src="/team-new.png"
              alt="The Google Developer Groups RBU team together"
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw" quality={90}
              className="object-cover"
              onError={() => setFailed(true)}
            />
          )}
        </figure>
      </motion.div>
    </section>
  );
}