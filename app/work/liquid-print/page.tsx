import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "../../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Liquid Print Brand Content Shoot",
  description:
    "Behind the scenes of Beam Media's staff-led short-form content shoot for Birmingham design, print and signage company Liquid Print.",
  alternates: { canonical: "/work/liquid-print" },
  openGraph: {
    title: "Liquid Print Brand Content Shoot | Beam Media",
    description:
      "Professional staff-led and product-focused content captured by Beam Media for Liquid Print in Birmingham.",
    url: "/work/liquid-print",
    images: [
      {
        url: "/work/liquid-print/staff-product-demo.jpeg",
        width: 665,
        height: 1182,
        alt: "Liquid Print staff-led product content filmed by Beam Media",
      },
    ],
  },
};

const gallery = [
  {
    src: "/work/liquid-print/staff-product-demo.jpeg",
    alt: "Liquid Print team member presenting printed business-card samples to camera",
    caption: "Staff-led content that puts real print samples directly in front of the viewer.",
  },
  {
    src: "/work/liquid-print/production-bts.jpeg",
    alt: "Beam Media professional camera, tripod and monitor setup outside Liquid Print",
    caption: "A controlled camera setup for sharp, repeatable social-first takes.",
  },
];

export default function LiquidPrintProject() {
  return (
    <main id="top" className="event-project-page liquid-project-page">
      <SiteHeader />

      <section className="event-project-hero liquid-project-hero" aria-labelledby="liquid-project-title">
        <div className="event-project-hero-copy">
          <p className="eyebrow"><span /> Brand content · Birmingham</p>
          <h1 id="liquid-project-title">Liquid<br /><em>Print.</em></h1>
          <p>
            Staff-led, product-focused short-form content for a Birmingham company helping businesses turn their ideas into print, design and signage.
          </p>
        </div>
        <div className="event-project-hero-image liquid-project-hero-image">
          <Image
            src="/work/liquid-print/staff-product-demo.jpeg"
            alt="Liquid Print team member presenting print samples during a Beam Media shoot"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            priority
          />
          <p>Real team · Real products · Built for social</p>
        </div>
      </section>

      <section className="event-project-facts" aria-label="Project facts">
        <div><span>Client</span><strong>Liquid Print</strong></div>
        <div><span>Sector</span><strong>Design, print + signage</strong></div>
        <div><span>Location</span><strong>Birmingham</strong></div>
        <div><span>Content focus</span><strong>Staff-led product demo</strong></div>
      </section>

      <section className="event-project-story" aria-labelledby="liquid-story-title">
        <div>
          <p>Make the product clear</p>
          <h2 id="liquid-story-title">Print people can<br /><em>see and feel.</em></h2>
        </div>
        <div>
          <p>
            Liquid Print works across design, litho and digital print, finishing and signage. The opportunity was to make those physical services feel immediate on a phone screen by putting a real member of the team and real printed samples at the centre of the content.
          </p>
          <p>
            Beam Media used a focused on-location setup for clear staff-led delivery, product movement and repeatable takes. It keeps the content human while letting the quality and range of the printed work do the selling.
          </p>
          <aside className="liquid-project-source">
            <span>About the business</span>
            <strong>Birmingham design, print and signage</strong>
            <a href="https://liquidprint.co.uk/" target="_blank" rel="noreferrer">Visit Liquid Print <Arrow /></a>
          </aside>
        </div>
      </section>

      <section className="event-project-gallery liquid-project-gallery" aria-label="Liquid Print project gallery">
        {gallery.map((image) => (
          <figure className="liquid-project-gallery-card" key={image.src}>
            <div>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="event-project-deliverables" aria-labelledby="liquid-deliverables-title">
        <div>
          <p>How the shoot worked</p>
          <h2 id="liquid-deliverables-title">Simple setup.<br />Useful <em>content.</em></h2>
        </div>
        <ol>
          <li><span>01</span><strong>Staff-led delivery</strong><p>A real member of the Liquid Print team brings knowledge and personality to the content.</p></li>
          <li><span>02</span><strong>Physical product demos</strong><p>Business cards and print samples create movement while showing the product clearly.</p></li>
          <li><span>03</span><strong>Professional capture</strong><p>Camera, tripod and monitoring create a reliable setup for clean, consistent takes.</p></li>
          <li><span>04</span><strong>Vertical-first framing</strong><p>The content is composed around the way customers actually watch on Reels and TikTok.</p></li>
        </ol>
      </section>

      <section className="event-project-cta" aria-labelledby="liquid-cta-title">
        <p>Got a product to show?</p>
        <h2 id="liquid-cta-title">Put a real person<br /><em>behind it.</em></h2>
        <div>
          <a href={ayubWhatsApp} target="_blank" rel="noreferrer">Plan a brand shoot <Arrow /></a>
          <Link href="/#work">See more Beam work <Arrow /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
