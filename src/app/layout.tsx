import type { Metadata } from "next";
import { Chakra_Petch, Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-chakra",
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
    <html lang="en" suppressHydrationWarning className={`${chakra.variable} ${spaceMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}