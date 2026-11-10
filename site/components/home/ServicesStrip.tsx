"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ServiceZoomModal from "@/components/home/ServiceZoomModal";
import { getServices } from "@/lib/content";

export default function ServicesStrip() {
  const services = getServices();
  const [zoomOpen, setZoomOpen] = useState(false);
  const [activeService, setActiveService] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <section className="home-section" aria-label="Services">
      <Container>
        <Reveal variant="below">
          <ul className="service-rows">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className={`service-row ${
                  index % 2 === 0 ? "service-row--image-right" : ""
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="service-number">0{index + 1}</div>
                <div className="service-copy">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-copy-text">
                    {service.summary.replace(/\[placeholder\]/gi, "").trim()}
                  </p>
                </div>
                <div className="service-media">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <button
                    className="service-zoom-btn"
                    onClick={() => {
                      setActiveService({
                        src: service.image,
                        alt: service.title,
                        title: service.title,
                      });
                      setZoomOpen(true);
                    }}
                  >
                    <span className="service-zoom-label">Open image</span>
                    <span className="service-zoom-icon">↗</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      {activeService && (
        <ServiceZoomModal
          isOpen={zoomOpen}
          onClose={() => {
            setZoomOpen(false);
            setActiveService(null);
          }}
          src={activeService.src}
          alt={activeService.alt}
          title={activeService.title}
        />
      )}
    </section>
  );
}
