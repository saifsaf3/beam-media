import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "../../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Bangla Community Day Event Coverage",
  description:
    "Beam Media's event videography coverage of the official press conference for Walsall's first-ever Bangla Community Day, filmed alongside Channel S.",
  alternates: { canonical: "/work/bangla-community-day" },
  openGraph: {
    title: "Bangla Community Day Event Coverage | Beam Media",
    description:
      "Official press conference coverage in Walsall by Beam Media, filmed alongside Channel S.",
    url: "/work/bangla-community-day",
    images: [
      {
        url: "/work/bangla-community-day/press-conference-wide.jpeg",
        width: 1024,
        height: 768,
        alt: "Walsall Bangla Community Day official press conference",
      },
    ],
  },
};

const gallery = [
  {
    src: "/work/bangla-community-day/press-conference-wide.jpeg",
    alt: "Press and guests attending Walsall's first Bangla Community Day official press conference",
    caption: "The official press conference panel and attending community press.",
    className: "event-project-gallery-wide",
  },
  {
    src: "/work/bangla-community-day/beam-camera-bts.jpeg",
    alt: "Beam Media camera rig used to record the Bangla Community Day press conference",
    caption: "Beam Media on location, set up for close speaker coverage.",
    className: "event-project-gallery-tall",
  },
  {
    src: "/work/bangla-community-day/speaker-coverage.jpeg",
    alt: "A speaker addressing the Bangla Community Day official press conference",
    caption: "Speakers, announcements and the story behind the community day.",
    className: "event-project-gallery-wide",
  },
];

export default function BanglaCommunityDayProject() {
  return (
    <main id="top" className="event-project-page">
      <SiteHeader />

      <section className="event-project-hero" aria-labelledby="event-project-title">
        <div className="event-project-hero-copy">
          <p className="eyebrow"><span /> Event coverage · Walsall</p>
          <h1 id="event-project-title">Bangla<br />Community<br /><em>Day.</em></h1>
          <p>
            Official press conference coverage for Walsall&apos;s first-ever Bangla Community Day — filmed by Beam Media alongside Channel S.
          </p>
        </div>
        <div className="event-project-hero-image">
          <Image
            src="/work/bangla-community-day/press-conference-wide.jpeg"
            alt="Bangla Community Day official press conference in Walsall"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            priority
          />
          <p>Real event · Real room · Real coverage</p>
        </div>
      </section>

      <section className="event-project-facts" aria-label="Project facts">
        <div><span>Project</span><strong>Official press conference</strong></div>
        <div><span>Presented by</span><strong>Laxmi Jewellers</strong></div>
        <div><span>Organised by</span><strong>Shongo Shomithi</strong></div>
        <div><span>Media floor</span><strong>Alongside Channel S</strong></div>
      </section>

      <section className="event-project-story" aria-labelledby="event-story-title">
        <div>
          <p>Beyond social content</p>
          <h2 id="event-story-title">Coverage that<br /><em>holds the room.</em></h2>
        </div>
        <div>
          <p>
            Beam Media joined the press and community representatives in Walsall to document the official announcement of a new cultural event for the town. The job called for clear, respectful coverage of a live panel rather than staged social content.
          </p>
          <p>
            We captured the speakers, the wider press conference and behind-the-scenes details while working alongside Channel S. The material gives the organisers a professional record of the launch and content they can use to build attention ahead of the community day.
          </p>
          <aside>
            <span>Main event announced</span>
            <strong>Sunday 30 August 2026 · Walsall Rugby Club</strong>
          </aside>
        </div>
      </section>

      <section className="event-project-gallery" aria-label="Project gallery">
        {gallery.map((image) => (
          <figure className={image.className} key={image.src}>
            <div>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="event-project-deliverables" aria-labelledby="event-deliverables-title">
        <div>
          <p>What Beam brought</p>
          <h2 id="event-deliverables-title">Ready when<br />it goes <em>live.</em></h2>
        </div>
        <ol>
          <li><span>01</span><strong>On-location filming</strong><p>Professional camera and audio coverage built around a live press environment.</p></li>
          <li><span>02</span><strong>Speaker coverage</strong><p>Clear angles for the panel, podium and key announcements as they happened.</p></li>
          <li><span>03</span><strong>Room + atmosphere</strong><p>Audience, press and behind-the-scenes details that give the event proper context.</p></li>
          <li><span>04</span><strong>Media collaboration</strong><p>Working confidently on the media floor alongside established broadcaster Channel S.</p></li>
        </ol>
      </section>

      <section className="event-project-cta" aria-labelledby="event-cta-title">
        <p>Planning an event?</p>
        <h2 id="event-cta-title">Make sure it gets<br /><em>remembered.</em></h2>
        <div>
          <a href={ayubWhatsApp} target="_blank" rel="noreferrer">Discuss event coverage <Arrow /></a>
          <Link href="/#work">See more Beam work <Arrow /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
