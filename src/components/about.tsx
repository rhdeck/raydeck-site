"use client";

import { BookOpen, Users, Code, Trophy } from "lucide-react";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "./motion";

const stats = [
  { icon: Code, value: "25+", label: "Years in software" },
  { icon: Users, value: "500+", label: "Builders helped" },
  { icon: BookOpen, value: "500+", label: "Books since 2020" },
  { icon: Trophy, value: "1,800+", label: "Session hours" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            About Ray
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Builder. Teacher. Student.
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-16">
            <p>
              I&apos;m a 25-year veteran of software and data science. I&apos;ve grown
              teams of technologists across generations of technology as a
              founder, CTO, and consultant to Fortune 500 companies. I&apos;ve
              built software companies worth millions and angel-invested in
              others.
            </p>
            <p>
              That breadth — from Solidity smart contracts to OAuth
              integrations to SpriteKit geometry to data warehousing — is what
              lets me see connections other specialists miss. It&apos;s a
              practicing intellectual life: building, teaching what I learn,
              and constantly consuming new ideas to sharpen the next
              conversation.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <SlideIn direction="left" className="mb-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
                  <stat.icon
                    size={20}
                    className="text-primary mx-auto mb-3"
                  />
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SlideIn>

        {/* Two cards: Teacher (State Change) + Student (Books) */}
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 h-full">
              <p className="text-[10px] text-primary uppercase tracking-widest mb-3">
                Teacher
              </p>
              <h3 className="text-lg font-semibold mb-2">
                State Change
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I founded State Change to teach what I know — an AI mentorship
                community where I work the hardest problems live, every week.
                1,800+ hours of archived sessions, 500+ builders helped, and
                an AI mentor trained on my mental models.
              </p>
              <a
                href="https://statechange.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Explore State Change →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-border bg-card/50 p-8 h-full">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                Student
              </p>
              <h3 className="text-lg font-semibold mb-2">
                500+ Books and Counting
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Since 2020, I&apos;ve averaged about 100 books a year — audiobooks,
                lecture series, college courses. Not all of equal value, and I
                read plenty where I disagree with the author. Everything adds
                perspective, and the ideas compound. A previous book gives me a
                leg up on how I understand the next one.
              </p>
              <a
                href="/books"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                See what I&apos;ve been reading →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
