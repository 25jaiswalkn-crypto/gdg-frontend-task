"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code2 } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Passionate Community Leaders",
    text: "Our leaders build a space where students connect, learn together, and grow together.",
  },
  {
    icon: Code2,
    title: "Empowering Developers",
    text: "We run meetups and hands-on workshops that help developers learn new skills and share ideas.",
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
        className="grid overflow-hidden rounded-2xl border-2 border-line bg-surface shadow-[5px_5px_0_var(--line)] md:grid-cols-2"
      >
        <div className="p-6 sm:p-8">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Meet the Google Developer Group Team
          </h2>
          <p className="mt-4 text-xs leading-relaxed sm:text-sm">
            Google Developer Groups (GDG) are open and volunteer-run communities for developers
            interested in Google technologies. Our team connects students through learning,
            mentoring, and collaboration on campus.
          </p>

          <ul className="mt-6 space-y-4">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-line bg-background">
                  <Icon size={14} />
                </span>
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed opacity-80">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure id="gallery" className="relative min-h-64 border-t-2 border-line md:border-l-2 md:border-t-0">
          {failed ? (
            <div className="flex h-full min-h-64 items-center justify-center bg-gdg-blue/20 text-xs font-bold">
              Add public/team.jpg
            </div>
          ) : (
            <Image
              src="/team.jpg"
              alt="The Google Developer Groups RBU team together"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              onError={() => setFailed(true)}
            />
          )}
        </figure>
      </motion.div>
    </section>
  );
}