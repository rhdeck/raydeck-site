"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    iFrameResize?: (
      options: { log?: boolean; checkOrigin?: boolean },
      selector: string
    ) => void;
  }
}

export function SenjaWallOfLove() {
  useEffect(() => {
    // Load the iframe-resizer script once, then initialize
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://widget.senja.io/js/iframeResizer.min.js"]'
    );

    const init = () => {
      if (window.iFrameResize) {
        window.iFrameResize(
          { log: false, checkOrigin: false },
          "#wall-of-love-1E8JX9I"
        );
      }
    };

    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.senja.io/js/iframeResizer.min.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      id="wall-of-love-1E8JX9I"
      src="https://senja.io/p/ray-deck/1E8JX9I?hideNavigation=true&embed=true"
      title="Wall of Love"
      frameBorder="0"
      scrolling="no"
      width="100%"
    />
  );
}
