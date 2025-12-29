import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { BackgroundDecor } from "@/components/background";
import { Footer } from "@/components/footer";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="en" className={font.variable}>
      <body className="bg-transparent text-ink antialiased">
        <BackgroundDecor />
        <div className="relative z-10">
          <Navigation />
          <main className="max-w-6xl mx-auto px-6 lg:px-8 pb-16 pt-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
