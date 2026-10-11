import type { Metadata } from "next";
import { Pixelify_Sans, Space_Grotesk, Space_Mono, Chakra_Petch } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
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

const techFont = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-tech",
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
      className={`${pixel.variable} ${grotesk.variable} ${spaceMono.variable} ${techFont.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}