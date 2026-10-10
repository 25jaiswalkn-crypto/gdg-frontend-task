"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-line bg-surface shadow-[2px_2px_0_var(--line)] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}