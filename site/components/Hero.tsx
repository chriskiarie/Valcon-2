"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Hero() {
  useEffect(() => {
    // Scroll cue handling
    const cue = document.querySelector(".hero-cue");
    if (!cue) {
      return undefined;
    }

    const onScroll = () => {
      if (window.scrollY > 24) {
        cue.classList.add("is-hidden");
      } else {
        cue.classList.remove("is-hidden");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero on-dark" id="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Wilson Airport, Nairobi</p>
          <h1 className="hero-title">
            A quieter way to fly.
          </h1>
          <p className="hero-lede">
            Regional travel from Wilson Airport. Considered, quiet and
            dependable.
          </p>
          <div className="hero-actions">
            <Button href="/contact/#quote" variant="on-dark">
              Request a Quote
            </Button>
            <Button href="/fleet/" variant="outline">
              View the Fleet
            </Button>
          </div>
        </div>
        <div className="hero-media">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/fleet/fleet-crj200-01.webp"
              type="image/webp"
              width="900"
              height="600"
            />
            <source
              srcSet="/images/fleet/fleet-crj200-01.webp"
              type="image/webp"
              width="1200"
              height="800"
            />
            <img
              alt="Bombardier CRJ200 LR on the apron at Wilson Airport"
              className="hero-img"
              decoding="async"
              fetchPriority="high"
              height="800"
              loading="eager"
              src="/images/fleet/fleet-crj200-01.webp"
              width="1200"
            />
          </picture>
        </div>
      </div>

      <a
        aria-label="Scroll to content"
        className="hero-cue"
        href="#intro"
      >
        <span aria-hidden="true" className="hero-cue-line" />
        <span className="hero-cue-label">Scroll</span>
      </a>
    </section>
  );
}
