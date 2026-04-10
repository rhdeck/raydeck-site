"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm({ variant = "default" }: { variant?: "default" | "bottom" }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // Netlify Forms: POST form-urlencoded data to "/" with a matching form-name.
      // The static form in src/app/layout.tsx registers the "contact" form at
      // build time so Netlify knows to capture these submissions.
      const body = new URLSearchParams({
        "form-name": "contact",
        email,
        message,
        "bot-field": "", // honeypot — bots fill this, humans don't
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "Something went wrong. Please try again, or email ray@raydeck.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const isBottom = variant === "bottom";

  return (
    <div
      className={`relative rounded-2xl border border-border p-8 ${
        isBottom ? "bg-card/50" : "bg-card/80 backdrop-blur-sm glow-amber"
      }`}
    >
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={false}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Get My Rate Card
              </h3>
              <p className="text-sm text-muted-foreground">
                Tell me what you&apos;re working on. I&apos;ll send you how I can help
                — and what it costs.
              </p>
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's the challenge? (optional but helps me send you something useful)"
                rows={3}
                className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Me the Details"}
              {!submitting && <ArrowRight size={16} />}
            </button>

            {error && (
              <p className="text-xs text-destructive text-center">{error}</p>
            )}

            <p className="text-xs text-muted-foreground/60 text-center">
              No spam. Just a direct reply from Ray.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Check size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Got it.</h3>
            <p className="text-sm text-muted-foreground">
              I&apos;ll review what you sent and reply personally — usually within a
              few hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
