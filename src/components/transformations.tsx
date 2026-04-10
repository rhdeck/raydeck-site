"use client";

import { ArrowDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const transformations = [
  {
    before: "We have an autonomous backend",
    after: "You have an observability platform — name it that and your entire go-to-market changes.",
    time: "13 min",
    outcome: "New product category, new revenue model",
  },
  {
    before: "We've been debugging this WeWeb + 3D integration for weeks",
    after: "Wrong tool. Use Claude Code — you'll have it done this afternoon.",
    time: "20 min",
    outcome: "Weeks of work replaced with an afternoon",
  },
  {
    before: "We're spending too much on Xano and it's still slow",
    after: "Your data model is the bottleneck, not the platform. Here's the fix.",
    time: "1 session",
    outcome: "Performance solved without switching vendors",
  },
];

export function Transformations() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            What It Looks Like
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The reframe is the product.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
            Most people describe their problem one way. The actual problem is
            something else entirely. Here&apos;s what that looks like in practice.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {transformations.map((t) => (
            <StaggerItem key={t.before}>
              <div className="rounded-2xl border border-border bg-card/50 p-6 h-full flex flex-col">
                {/* Before */}
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  They said
                </p>
                <p className="text-sm text-foreground/70 italic mb-4">
                  &ldquo;{t.before}&rdquo;
                </p>

                {/* Arrow divider */}
                <div className="flex flex-col items-center gap-1 mb-4">
                  <div className="w-px h-4 bg-border" />
                  <ArrowDown size={14} className="text-primary shrink-0" />
                </div>

                {/* After */}
                <p className="text-[10px] text-primary uppercase tracking-widest mb-2">
                  I saw
                </p>
                <p className="text-sm text-foreground font-medium mb-6 flex-1">
                  &ldquo;{t.after}&rdquo;
                </p>

                {/* Stats */}
                <div className="flex gap-4 text-[11px] text-muted-foreground border-t border-border pt-4">
                  <span>
                    <span className="text-foreground font-medium">{t.time}</span> to clarity
                  </span>
                  <span className="text-border">|</span>
                  <span>{t.outcome}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
