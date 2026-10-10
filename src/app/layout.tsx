import type { Metadata } from "next";
import { Handjet, Space_Grotesk, Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const softPixel = Handjet({
  subsets: ["latin"],
  axes: ["ELGR", "ELSH"],
  variable: "--font-handjet",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Google Developer Groups, RBU",
  description:
    "Empowering students with cutting-edge tech skills, community, and resources for a future in technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${softPixel.variable} ${grotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}