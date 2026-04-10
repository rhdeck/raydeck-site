"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const pillars = [
  {
    label: "Performance",
    title: "Cut the cost. Keep the value.",
    description:
      "Your system is slow, expensive, or both — but not everything in it matters equally. I find the 20% that's generating real value, carve it off from the rest, and rebuild it to run at a fraction of the cost. One client was pushing 150+ requirements through a dashboard bottlenecked by interpreter overhead. We extracted the computation engine into Lambda functions — same output, dramatically less infrastructure.",
    examples: [
      "Xano performance crises resolved without switching platforms",
      "Multi-gigabyte data warehouses architected for speed",
      "Infrastructure costs cut by isolating what actually needs to be fast",
    ],
  },
  {
    label: "Strategy",
    title: "Know what to kill.",
    description:
      "80% of your engineering effort is maintaining features only 5% of your users touch. The hardest strategic decision isn't what to build — it's what to stop building. I help you see which parts of your product create disproportionate value, so you can focus there and drop the rest. That's not just cost optimization — it changes your go-to-market, your pricing, and what your team works on Monday morning.",
    examples: [
      '"Autonomous backend" → "observability platform" — new category, new revenue',
      "Identify which customer segments are worth protecting vs. commodity",
      "Kill projects that look productive but dilute your edge",
    ],
  },
  {
    label: "AI",
    title: "AI changes everything. But not the way you think.",
    description:
      "AI isn't a feature you bolt on. It changes which problems are worth solving and which manual processes are hiding massive margin. I help you find where AI creates real leverage — not the flashy demo, but the boring Tuesday-morning spreadsheet task that takes 3 hours and holds budget authority. That's where the ROI lives, and it compounds.",
    examples: [
      "Weeks of debugging replaced with an afternoon using Claude Code",
      "Manual processes automated where the real margin hides",
      "AI strategy that starts with the business problem, not the model",
    ],
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Where AI, strategy, and performance meet.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed">
            Most consultants pick one lane. I work at the intersection — because
            the biggest breakthroughs happen when you see that your performance
            problem is actually a strategy problem, or your strategy problem is
            actually an AI problem. Short, sharp engagements that create
            outsized value fast.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.label}>
              <div className="group rounded-2xl border border-border bg-card/50 p-8 md:p-10 hover:border-primary/20 transition-all duration-300">
                <div className="grid md:grid-cols-[1fr,280px] gap-8">
                  <div>
                    <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-3">
                      {pillar.label}
                    </span>
                    <h3 className="text-xl font-semibold mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                      What this looks like
                    </p>
                    <ul className="space-y-2">
                      {pillar.examples.map((ex) => (
                        <li
                          key={ex}
                          className="text-sm text-foreground/80 pl-4 border-l-2 border-primary/30"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
