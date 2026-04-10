import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SenjaWallOfLove } from "@/components/senja-wall-of-love";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall of Love — Ray Deck",
  description:
    "Hundreds of testimonials from founders, builders, and technical leaders who've worked with Ray Deck.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 flex-1">
        <div className="mx-auto max-w-3xl px-6 mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            Wall of Love
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            What clients say.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hundreds of founders, builders, and technical leaders have worked
            with me over the years. Here&apos;s what they say about the experience —
            unedited, straight from the source.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <SenjaWallOfLove />
        </div>
      </main>
      <Footer />
    </>
  );
}
