"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { getAircraft } from "@/lib/content";

export default function NewestAddition() {
  const newest = getAircraft()[0];
  const registration = newest?.registrations[0];

  return (
    <section className="home-section">
      <Container>
        <Reveal variant="below">
          <div className="editorial-row addition-row">
            <span className="editorial-number">03</span>
            <div className="editorial-copy">
              <p className="eyebrow">Newest addition</p>
              <h2 className="band-title">
                {newest?.name}
                {registration ? (
                  <span className="band-registration">{registration}</span>
                ) : null}
              </h2>
              <p className="band-line">
                Recently delivered to Wilson Airport.
              </p>
            </div>
            <div className="band-actions">
              <Button href="/fleet/" variant="on-dark">
                View the fleet
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
