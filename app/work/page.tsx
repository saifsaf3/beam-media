import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Beam Media case studies across short-form video, restaurant content, retail campaigns and live event coverage in Birmingham and the West Midlands.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Beam Media Case Studies",
    description: "Real shoots, real local businesses and the thinking behind the content.",
    url: "/work",
    images: [
      {
        url: "/equipment-bazaar.jpg",
        width: 900,
        height: 1350,
        alt: "Beam Media case studies",
      },
    ],
  },
};

const caseStudies = [
  {
    number: "01",
    name: "Equipment Bazaar",
    type: "Retail · Short-form video",
    image: "/equipment-bazaar.jpg",
    imageAlt: "Equipment Bazaar content created by Beam Media",
    result: "17.9K views · 107 shares",
    description:
      "Specialist catering knowledge turned into a personality-led chicken-shop guide that people watched, saved and shared.",
    href: "https://www.tiktok.com/@equipmentbazaar/video/7666945026273840406",
    action: "Watch on TikTok",
    external: true,
  },
  {
    number: "02",
    name: "Harborne Indian Kitchen",
    type: "Hospitality · Food content",
    image: "/harborne-indian-kitchen.jpg",
    imageAlt: "Harborne Indian Kitchen content created by Beam Media",
    result: "20K+ Facebook views",
    description:
      "Warm food close-ups, confident pacing and a direct local invitation made the restaurant feel worth visiting.",
    href: "https://www.facebook.com/reel/1834823741029907/",
    action: "Watch on Facebook",
    external: true,
  },
  {
    number: "03",
    name: "Bangla Community Day",
    type: "Community · Event coverage",
    image: "/work/bangla-community-day/press-conference-wide.jpeg",
    imageAlt: "Bangla Community Day official press conference filmed by Beam Media",
    result: "Official press conference",
    description:
      "Panel, speaker and behind-the-scenes coverage for Walsall’s first-ever Bangla Community Day, filmed alongside Channel S.",
    href: "/work/bangla-community-day",
    action: "Read the case study",
    external: false,
  },
  {
    number: "04",
    name: "Liquid Print",
    type: "Print · Staff-led content",
    image: "/work/liquid-print/staff-product-demo.jpeg",
    imageAlt: "Liquid Print staff member presenting print samples during a Beam Media shoot",
    result: "Social-first product demo",
    description:
      "A real team member, real printed samples and a focused production setup make a physical service clear on a phone screen.",
    href: "/work/liquid-print",
    action: "Read the case study",
    external: false,
  },
] as const;

const additionalWork = [
  ["05", "Stechford Local", "Retail · Supermarket", "https://www.tiktok.com/@beammedia0/video/7612729315465235734"],
  ["06", "Madina Gift Shop", "Retail · Gifts", "https://www.tiktok.com/@beammedia0/video/7652800877278842134"],
  ["07", "Kiran’s Balti", "Hospitality · Restaurant", "https://www.tiktok.com/@beammedia0/video/7665867943481199894"],
] as const;

export default function WorkPage() {
  return (
    <main id="top" className="work-index-page">
      <SiteHeader />

      <section className="work-index-hero" aria-labelledby="work-index-title">
        <p className="eyebrow"><span /> Beam Media case studies</p>
        <h1 id="work-index-title">The idea.<br />The shoot.<br /><em>The result.</em></h1>
        <div>
          <p>
            A closer look at how we turn real businesses, products and people into content built to hold attention.
          </p>
          <a href="#case-studies">Explore the work <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="work-index-grid" id="case-studies" aria-label="Featured Beam Media case studies">
        {caseStudies.map((study) => (
          <article className="work-index-card" key={study.name}>
            <div className="work-index-card-image">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <span>{study.number}</span>
            </div>
            <div className="work-index-card-copy">
              <p>{study.type}</p>
              <h2>{study.name}</h2>
              <strong>{study.result}</strong>
              <p>{study.description}</p>
              {study.external ? (
                <a href={study.href} target="_blank" rel="noreferrer">
                  {study.action} <Arrow />
                </a>
              ) : (
                <Link href={study.href}>
                  {study.action} <Arrow />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="work-index-more" aria-labelledby="work-index-more-title">
        <div>
          <p>More client work</p>
          <h2 id="work-index-more-title">More businesses.<br /><em>More stories.</em></h2>
        </div>
        <div>
          {additionalWork.map(([number, name, type, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={name}>
              <span>{number}</span><strong>{name}</strong><small>{type}</small><Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="work-index-cta" aria-labelledby="work-index-cta-title">
        <p>Your business could be next</p>
        <h2 id="work-index-cta-title">Let’s make work<br /><em>worth showing.</em></h2>
        <div>
          <a href={ayubWhatsApp} target="_blank" rel="noreferrer">Start on WhatsApp <Arrow /></a>
          <Link href="/#plan">Build your content plan <Arrow /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
