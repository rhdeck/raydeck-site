"use client";

import { FadeIn } from "./motion";
import { ContactForm } from "./contact-form";

export function BottomCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to get unstuck?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tell me what you&apos;re working on. I&apos;ll send you my rate card and we
              can figure out the right way to work together — whether that&apos;s a
              single session or something deeper.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactForm variant="bottom" />
        </FadeIn>
      </div>
    </section>
  );
}
