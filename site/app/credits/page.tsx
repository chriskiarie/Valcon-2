import type { Metadata } from "next";
import Container from "@/components/Container";
import { getAircraft } from "@/lib/content";

export const metadata: Metadata = {
  title: "Image Credits",
};

export default function CreditsPage() {
  const aircraft = getAircraft();

  return (
    <div className="page-shell">
      <Container>
        <div className="page-intro">
          <p className="eyebrow">Image Credits</p>
          <h1 className="page-title">Image Credits</h1>
          <p className="page-description">
            Photography is used illustratively for this concept preview. Credits
            below.
          </p>
        </div>

        <div className="page-body">
          <div className="credits-section">
            <h2 className="credits-section-title">Hero Photography</h2>
            <p className="credits-entry">
              Munich Airport plane handling at sunset — Richard Bartz / Wikimedia
              Commons,{" "}
              <a href="https://creativecommons.org/licenses/by-sa/2.5" rel="noreferrer" target="_blank">
                CC BY-SA 2.5
              </a>
              . Cropped and resized for this demo.
            </p>
          </div>

          <div className="credits-section">
            <h2 className="credits-section-title">Fleet Aircraft</h2>
            {aircraft.map((a) => (
              <div key={a.slug} className="credits-aircraft">
                <h3 className="credits-aircraft-name">{a.name}</h3>
                <p className="credits-entry">
                  Bombardier CRJ200 N96AP FDK MD1 — Acroterion / Wikimedia
                  Commons,{" "}
                  <a href="https://creativecommons.org/licenses/by-sa/4.0" rel="noreferrer" target="_blank">
                    CC BY-SA 4.0
                  </a>
                  . Cropped and resized for this demo.
                </p>
              </div>
            ))}
          </div>

          <div className="credits-section">
            <h2 className="credits-section-title">Flyby Aircraft</h2>
            <p className="credits-entry">
              Original Valcon Air SVG artwork.
            </p>
          </div>

          <div className="credits-section">
            <h2 className="credits-section-title">Typefaces</h2>
            <p className="credits-entry">
              Display: Fraunces (Silvia Ferri Palleschi, Google Fonts,
              SIL Open Font License). Body: DM Sans (Colophon Foundry, Google
              Fonts, SIL Open Font License).
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
