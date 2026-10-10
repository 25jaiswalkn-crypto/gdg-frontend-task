"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is GDG RBU?",
    a: "GDG RBU is the Google Developer Groups community at Ramdeobaba University. It focuses on empowering students through workshops, tech talks, hackathons, and peer-to-peer collaboration.",
  },
  {
    q: "How to join GDG?",
    a: "Keep an eye on our recruitment drives and events. You can also reach out through the contact details in the footer and we will guide you through the process.",
  },
  {
    q: "What does a GDG Lead do?",
    a: "A GDG Lead organizes events, mentors members, coordinates the core team, and keeps the community active and welcoming.",
  },
  {
    q: "How is GDG related to Google?",
    a: "Google Developer Groups is a program supported by Google Developers. Chapters are run independently by volunteers who share Google technologies with their local community.",
  },
  {
    q: "How to reach us?",
    a: "Use the email and social links in the footer, or visit us on campus at Ramdeobaba University, Nagpur.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h2 className="text-center text-4xl font-bold sm:text-5xl">FAQs</h2>

      <div className="mt-8 space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.q}
              className="rounded-md border-2 border-line bg-surface shadow-[3px_3px_0_var(--line)]"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-bold"
                >
                  {item.q}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t-2 border-line px-4 py-3 text-xs leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}