"use client";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section className="home-section" id="gallery" aria-label="Gallery">
      <Container>
        <Reveal variant="below">
          <div className="gallery">
            <div className="gallery-copy">
              <p className="eyebrow">The fleet</p>
              <h2 className="gallery-heading">
                One aircraft, ready to fly.
              </h2>
              <p className="gallery-note">
                Bombardier CRJ200 LR, registration 5Y-VAL. Recently delivered
                to Wilson Airport, Nairobi.
              </p>
            </div>
            <div className="gallery-media">
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
                  alt="Bombardier CRJ200 LR overhead view on the apron"
                  className="gallery-img"
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
        </Reveal>
      </Container>
    </section>
  );
}
