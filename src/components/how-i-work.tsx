"use client";

import { Zap, Calendar, Repeat } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const engagements = [
  {
    icon: Zap,
    title: "Clarity Sessions",
    subtitle: "Hours, not days",
    description:
      "Bring your stuck problem. I diagnose, reframe, and give you a clear next step. Most people walk away saying they got more value in one hour than weeks of going in circles.",
    highlight: "My guarantee: if it's not worth it in the first 15 minutes, we part friends.",
  },
  {
    icon: Calendar,
    title: "Accelerator",
    subtitle: "10 hours over 1–2 weeks",
    description:
      "For bigger challenges — shipping a complex feature, rearchitecting a system, solving a performance crisis. Daily sessions for a week, then we run the ball. Cracked in the first week, shipped in the second.",
    highlight: "Recent projects: multi-GB data warehouse, automated real estate valuation system.",
  },
  {
    icon: Repeat,
    title: "Ongoing Advisory",
    subtitle: "When you need a recurring strategic partner",
    description:
      "Monthly deep sessions plus async access. For companies where having a technical strategist on call prevents the kind of mistakes that cost quarters, not days.",
    highlight: "Reserved for a small number of companies. By application.",
  },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            How I Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Short and sharp.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6 leading-relaxed">
            I work with you live. You drive — I don&apos;t take over your keyboard.
            You&apos;ll always know exactly where your time went, because you were
            right there.
          </p>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            We learn together. I take on hard problems that usually nobody has
            solved in the particular way you need. You leave with my diagnostic
            techniques and mental models — not a dependency on me.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {engagements.map((eng) => (
            <StaggerItem key={eng.title}>
              <div className="rounded-2xl border border-border bg-card/50 p-8 h-full flex flex-col">
                <eng.icon size={24} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-1">{eng.title}</h3>
                <p className="text-sm text-primary/80 font-medium mb-4">
                  {eng.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {eng.description}
                </p>
                <p className="text-xs text-muted-foreground/80 border-t border-border pt-4 italic">
                  {eng.highlight}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Get my rate card to see pricing for each →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
