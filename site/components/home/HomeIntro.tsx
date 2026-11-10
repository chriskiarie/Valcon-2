"use client";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { getSite } from "@/lib/content";

export default function HomeIntro() {
  const site = getSite();

  return (
    <section className="home-section" id="intro">
      <Container>
        <Reveal variant="below">
          <div className="editorial-row">
            <span className="editorial-number">01</span>
            <div className="editorial-copy">
              <p className="eyebrow">Valcon Air</p>
              <h2 className="intro-heading">
                Considered, quiet and dependable.
              </h2>
              <p className="intro-base">
                Valcon Air is based at {site.base}.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
