import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { emailHref, whatsappHref } from "@/lib/contact";
import { getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for the Valcon Air concept preview. Direct contact details are being confirmed.",
};

export default function ContactPage() {
  const site = getSite();
  const hasWhatsApp = Boolean(site.whatsapp);
  const hasEmail = Boolean(site.email);
  const hasPhone = Boolean(site.phoneTel && site.phone);

  return (
    <div className="page-shell">
      <Container>
        <div className="page-intro">
          <p className="eyebrow">{site.base}</p>
          <h1 className="page-title">Contact</h1>
          <p className="page-description">
            Valcon Air Solutions Limited is based at Wilson Airport, Nairobi.
            Direct contact details are being confirmed for this concept preview.
          </p>
        </div>

        <div className="page-body">
          <div className="quote-panel on-dark" id="quote">
            <h2 className="quote-panel-title">Request a quote</h2>
            <p className="quote-panel-copy">
              {hasWhatsApp || hasEmail || hasPhone
                ? "Tell us your route, dates and passenger count, and the team will respond with availability."
                : "The enquiry form is the next step for this concept preview. Until contact details are confirmed, explore the fleet to see the aircraft."}
            </p>
            <div className="quote-actions">
              {hasWhatsApp && (
                <a
                  className="btn btn--on-dark"
                  href={whatsappHref(site.whatsapp)}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              )}
              {hasEmail && (
                <a className="btn btn--outline" href={emailHref(site.email)}>
                  Email
                </a>
              )}
              <Button href="/fleet/" variant={hasWhatsApp ? "outline" : "on-dark"}>
                View the fleet
              </Button>
              <Button href="/" variant="outline">
                Back to home
              </Button>
            </div>
          </div>

          <div className="facts-grid facts-grid--auto">
            <div className="fact-card">
              <p className="fact-label">Base</p>
              <p className="fact-value">{site.base}</p>
            </div>

            {hasPhone && (
              <div className="fact-card">
                <p className="fact-label">Phone</p>
                <a className="fact-value" href={`tel:${site.phoneTel}`}>
                  {site.phone}
                </a>
              </div>
            )}

            {hasEmail && (
              <div className="fact-card">
                <p className="fact-label">Email</p>
                <a className="fact-value" href={emailHref(site.email)}>
                  {site.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
