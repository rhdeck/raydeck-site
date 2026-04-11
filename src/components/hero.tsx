"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactForm } from "./contact-form";

const heroImages = [
  {
    src: "/images/ray-notion-header.png",
    alt: "Ray Deck speaking at Chain React conference on machine learning",
    caption: "Speaking at Chain React on ML and mobile AI",
  },
  {
    src: "/images/ray-talk-brick.jpg",
    alt: "Ray Deck presenting architecture diagrams at a tech meetup",
    caption: "Walking through system architecture at a meetup",
  },
  {
    src: "/images/ray-talk-tensorflow.jpg",
    alt: "Ray Deck presenting on TensorFlow",
    caption: "Presenting on TensorFlow and machine learning",
  },
  {
    src: "/images/ray-speaking.png",
    alt: "Ray Deck on a coaching call",
    caption: "What working with me looks like — live on a call",
  },
  {
    src: "/images/ray-chairlift-1.jpg",
    alt: "Ray Deck recording a short from a ski chairlift",
    caption: "Thinking out loud from the chairlift",
  },
  {
    src: "/images/ray-chairlift-2.jpg",
    alt: "Ray Deck on a chairlift discussing AI",
    caption: "AI insights from 10,000 feet",
  },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const image = heroImages[currentImage];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        {/* Top row: Copy left, Photo right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0">
                <Image
                  src="/images/ray-hero.jpg"
                  alt="Ray Deck"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold text-sm">Ray Deck</p>
                <p className="text-primary font-medium text-xs tracking-wide uppercase">
                  Strategic Clarity &middot; Deep Technical Expertise
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              I see what&apos;s actually
              <br />
              <span className="text-primary">blocking you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Founders and technical leaders hire me when they need someone who
              can diagnose the real problem — not just the symptoms — and move
              them forward fast. 25 years of building, leading, and fixing
              software-driven businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 text-sm text-muted-foreground"
            >
              {[
                "Performance & Architecture",
                "Product Strategy",
                "AI & Automation",
                "Vendor Optimization",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Rotating photo (capped on mobile so it doesn't dominate) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-border aspect-square max-w-xs sm:max-w-sm lg:max-w-none mx-auto w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={currentImage === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Caption + dots */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentImage}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs text-muted-foreground"
                >
                  {image.caption}
                </motion.p>
              </AnimatePresence>

              <div className="flex gap-1.5 shrink-0 ml-4">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentImage
                        ? "bg-primary w-4"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Below — Contact Form, full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
