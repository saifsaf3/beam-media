import type { Metadata } from "next";
import { anasWhatsApp, Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact Beam Media",
  description:
    "Contact Beam Media founders Ayub Ahmad and Anasur Rahman about short-form video, social content and brand campaigns in Birmingham and across the UK.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Beam Media — Let’s make your business unmissable",
    description: "Start a short-form content project with Beam Media in Birmingham.",
    url: "/contact",
  },
};

const founders = [
  {
    initials: "AA",
    name: "Ayub Ahmad",
    role: "Founder",
    displayNumber: "+44 7508 182314",
    callNumber: "+447508182314",
    whatsapp: ayubWhatsApp,
    accent: "lime",
  },
  {
    initials: "AR",
    name: "Anasur Rahman",
    role: "Co-founder",
    displayNumber: "07737 058865",
    callNumber: "+447737058865",
    whatsapp: anasWhatsApp,
    accent: "red",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <SiteHeader />

      <section className="contact-hero" aria-labelledby="contact-title">
        <p className="eyebrow"><span /> Birmingham based · Working across the UK</p>
        <h1 id="contact-title">
          Let&apos;s put your<br />business <em>in motion.</em>
        </h1>
        <div className="contact-hero-bottom">
          <p>
            Got a restaurant, shop or brand people need to know about? Tell us what
            you&apos;re building and we&apos;ll bring the concepts, cameras and edits.
          </p>
          <a href="mailto:beam.mediauk@gmail.com">
            beam.mediauk@gmail.com <Arrow />
          </a>
        </div>
      </section>

      <section className="contact-team" aria-labelledby="team-title">
        <div className="contact-section-heading">
          <p className="section-label">Talk to the team</p>
          <h2 id="team-title">Real people.<br />Direct line.</h2>
        </div>
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className={`founder-card ${founder.accent}`} key={founder.name}>
              <div className="founder-top">
                <span>{founder.initials}</span>
                <p>{founder.role}</p>
              </div>
              <h3>{founder.name}</h3>
              <a className="founder-number" href={`tel:${founder.callNumber}`}>
                {founder.displayNumber}
              </a>
              <div className="founder-actions">
                <a href={`tel:${founder.callNumber}`}>Call now <Arrow /></a>
                <a href={founder.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-social" aria-labelledby="social-title">
        <div>
          <p className="section-label">See what we&apos;re making</p>
          <h2 id="social-title">Follow the<br /><em>work.</em></h2>
        </div>
        <div className="social-contact-links">
          <a href="https://www.tiktok.com/@beammedia0" target="_blank" rel="noreferrer">
            <span>01</span><strong>TikTok</strong><small>@beammedia0</small><Arrow />
          </a>
          <a href="https://www.instagram.com/beammedia_/?hl=en" target="_blank" rel="noreferrer">
            <span>02</span><strong>Instagram</strong><small>@beammedia_</small><Arrow />
          </a>
          <a href="mailto:beam.mediauk@gmail.com">
            <span>03</span><strong>Email</strong><small>beam.mediauk@gmail.com</small><Arrow />
          </a>
        </div>
      </section>

      <section className="contact-final" aria-labelledby="contact-final-title">
        <p className="section-label">Your move</p>
        <h2 id="contact-final-title">One message.<br /><em>Big ideas.</em></h2>
        <a href={ayubWhatsApp} target="_blank" rel="noreferrer">
          Start on WhatsApp <Arrow />
        </a>
        <p>No forms. No waiting around. Speak directly to the team.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
