import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I've Been Reading — Ray Deck",
  description:
    "Over 500 books, lecture series, and college courses since 2020. A practicing intellectual's reading list.",
};

export default function BooksPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 flex-1">
        <div className="mx-auto max-w-3xl px-6 mb-16">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            What I&apos;ve Been Reading
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Keeping Up a Diet of Ideas
          </h1>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Late in 2020 I started a reading habit when I realized I could
              listen to audiobooks and absorb their information more rapidly.
              Since then I&apos;ve made daily consumption of long-form content —
              books, lecture series and college courses — core to my information
              diet.
            </p>
            <p>
              In the summer, I can read an hour or so per day at the gym, while
              that doubles or triples each day in the winter when I snowboard.
              Something about the relaxed mental state makes ingesting this
              wisdom easier.
            </p>
            <p>
              Not all the books are of equal value, and I read plenty where I
              disagree with the author. I often know going in that I will
              dislike the author, but understanding their point of view is
              important to expanding my intellectual horizons. Everything adds
              perspective, and I rarely regret investing in a book.
            </p>
            <p>
              And the value builds over time. The ideas from a previous book
              give me a leg up on how I understand a new one. This can work
              when reading &ldquo;forward&rdquo; (books based on other books) or
              &ldquo;backward&rdquo; (reading the books referenced in other books).
            </p>
            <p>
              The database below is over 500 books, audio programs and college
              courses. I hope this list might give you ideas to start or
              continue your own reading habit. If you find something helpful —
              or better yet, have a recommendation! — please{" "}
              <a
                href="/#contact"
                className="text-primary hover:underline underline-offset-4"
              >
                let me know
              </a>
              . I&apos;m always up for hearing from another bookworm.
            </p>
            <p className="text-foreground font-medium">
              —Ray
            </p>
          </div>
        </div>

        {/* Airtable embed */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border overflow-hidden bg-card/50">
            <iframe
              className="airtable-embed w-full"
              src="https://airtable.com/embed/appuUXeJZ22DV3JTo/shrVJZh3OB89hCqQy?backgroundColor=blue&viewControls=on"
              width="100%"
              height="800"
              style={{ background: "transparent", border: "none" }}
              title="Ray Deck's Reading List"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
