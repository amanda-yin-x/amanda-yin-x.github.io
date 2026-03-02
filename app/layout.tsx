import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Amanda Yin · Software Engineer",
  description:
    "Portfolio of Amanda Yin — software engineer, LLM quantization researcher, and product builder.",
  metadataBase: new URL("https://amanda-yin-x.github.io"),
  openGraph: {
    title: "Amanda Yin · Software Engineer",
    description:
      "Portfolio of Amanda Yin — building human-centered software across full stack, product, and ML research.",
    type: "website",
    url: "https://amanda-yin.com",
    images: [{ url: "/profile.svg", width: 1200, height: 630, alt: "Amanda Yin" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${hand.variable}`}>
      <body className="bg-parchment text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
