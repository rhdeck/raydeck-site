export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">Ray Deck</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Strategic clarity for software-driven businesses.
            </p>
          </div>

          {/* Site */}
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
              Site
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Wall of Love
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Reading List
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Work With Me
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
              Projects
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://statechange.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  State Change
                </a>
              </li>
              <li>
                <a
                  href="https://sustained.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sustained Writing
                </a>
              </li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
              Elsewhere
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/raydeck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ray_deck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@statechange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Ray Deck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
