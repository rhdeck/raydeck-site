"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

const featuredTestimonials = [
  {
    quote:
      "Ray could be an actual genius. Amazing at working through things on the fly and explaining how they work and suggesting improvements.",
    name: "Roc Stevenson",
    featured: true,
  },
  {
    quote:
      "I cannot recommend Ray enough. He is more expensive than some of the other mentors I have worked with, but I think he winds up being a lot cheaper. He grasps what I am trying to do very quickly.",
    name: "Gregg Squire",
    featured: true,
  },
  {
    quote:
      "Ray went way above and beyond. He is extremely knowledgeable regarding OAuth2 and dev work. He also worked after the session was over to solve a problem that we couldn't figure out with weeks of work. 10/10.",
    name: "Michael Willcockson",
  },
  {
    quote:
      "High level teacher. Ray gave me an overview of the way I was approaching my project and kept me from reinventing the wheel. So much better than someone just doing what I said and wasting my time and money.",
    name: "Bernard L. Richter",
  },
  {
    quote:
      "Ray is obviously a very experienced and knowledgeable guy, easily able to navigate between low level coding problems and higher level conceptual ones. Highly recommended when you need to get to the root of thorny issues.",
    name: "Josh Kramer",
  },
  {
    quote:
      "Ray is awesome. He asks pointed questions that get to the heart of the issue and helps you brainstorm through the issues. He also has great technical expertise. Overall, I rate him 10/10!",
    name: "Ali Zaheer",
  },
  {
    quote:
      "Ray not only helps me find solutions, but he demonstrates why things work. His explanations mean I am also growing as a developer. Highly recommended!",
    name: "Jordan Belafonte",
  },
  {
    quote:
      "Ray was able to expertly articulate the solutions to my problems in an educational way that allowed me to learn not only what to do, but why to do it.",
    name: "Kirill Mikhailov",
  },
  {
    quote:
      "Ray is an excellent resource. He has the ability to breakdown complex technical solutions into digestible explanations.",
    name: "Ali Zaheer",
  },
  {
    quote:
      "State Change has played a defining role in our journey building this product. My cofounders and I struck gold when we came across it.",
    name: "Haley Wulfman",
  },
  {
    quote:
      "I wasted 30+ hours trying to solve an image upload challenge. Ray not only knew what to look for, but answered all — ALL — my questions.",
    name: "Eddy M.",
  },
  {
    quote:
      "He broke it down for me in an understandable way & quickly. I had calls with 2 different mentors who said it wasn't possible... Now time to implement. Thanks!",
    name: "J. K.",
  },
  {
    quote:
      "Very helpful in rethinking some architecture decisions on my backend setup.",
    name: "Nicholas Arner",
  },
  {
    quote:
      "Excellent help — Ridiculously knowledgeable — Would highly recommend.",
    name: "Thomas McMurrain",
  },
  {
    quote:
      "Ray is truly a mentor. He is not only versed technically, but is an excellent guide in navigating and preparing for career goals.",
    name: "Mike G",
  },
  {
    quote:
      "Really well explained, very patient and polite with lots of knowledge and experience. You get serious value for money.",
    name: "James Piner",
  },
];

// Split into 3 columns for the masonry-style marquee
const col1 = featuredTestimonials.filter((_, i) => i % 3 === 0);
const col2 = featuredTestimonials.filter((_, i) => i % 3 === 1);
const col3 = featuredTestimonials.filter((_, i) => i % 3 === 2);

function MarqueeColumn({
  testimonials,
  duration = 25,
  reverse = false,
}: {
  testimonials: typeof featuredTestimonials;
  duration?: number;
  reverse?: boolean;
}) {
  // Double the items for seamless looping
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden h-[600px]">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          y: { duration, repeat: Infinity, ease: "linear" },
        }}
        className="flex flex-col gap-4"
      >
        {items.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="rounded-xl border border-border bg-card/50 p-6 hover:bg-card/80 transition-colors"
          >
            <p className="text-sm leading-relaxed mb-3 text-foreground/90">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              — {t.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <a
            href="/testimonials"
            className="inline-block group"
          >
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              Wall of Love →
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
              Hundreds of people.
              <br />
              One consistent thing they say.
            </h2>
          </a>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
            &ldquo;He sees what I couldn&apos;t see.&rdquo; I&apos;ve helped hundreds of
            builders, founders, and technical leaders get unstuck — and they keep
            coming back.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          <MarqueeColumn testimonials={col1} duration={30} />
          <MarqueeColumn testimonials={col2} duration={35} reverse />
          <MarqueeColumn testimonials={col3} duration={28} />
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            These are a fraction of the hundreds of testimonials from real clients.{" "}
            <a
              href="/testimonials"
              className="text-primary hover:underline underline-offset-4"
            >
              See the full wall →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
