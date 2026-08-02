import Image from "next/image";
import Link from "next/link";
import { Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { ProjectPlanner } from "./_components/ProjectPlanner";

const tiktokPlayer = (videoId: string) =>
  `https://www.tiktok.com/player/v1/${videoId}?music_info=0&description=0&rel=0&native_context_menu=0`;

const featuredWork = [
  {
    number: "01",
    name: "Equipment Bazaar",
    type: "Retail · Catering equipment",
    videoId: "7666945026273840406",
    videoUrl: "https://www.tiktok.com/@equipmentbazaar/video/7666945026273840406",
    copy: "A clear, personality-led guide to the equipment needed to open a chicken shop — useful specialist knowledge turned into content people wanted to save and share.",
    results: [
      ["17.9K", "Views"],
      ["345", "Likes"],
      ["107", "Shares"],
    ],
    services: ["Product walkthrough", "Short-form video", "Creative direction"],
  },
  {
    number: "02",
    name: "Harborne Indian Kitchen",
    type: "Hospitality · Indian restaurant",
    videoId: "7667116178875157782",
    videoUrl: "https://www.tiktok.com/@beammedia0/video/7667116178875157782",
    copy: "Cinematic food shots and chef-led personality brought the restaurant to life with warm, entertaining local content.",
    results: null,
    services: ["Food videography", "Concept development", "Social editing"],
  },
];

const moreWork = [
  ["Stechford Local", "Retail · Supermarket", "7612729315465235734"],
  ["Madina Gift Shop", "Retail · Gifts", "7652800877278842134"],
  ["Kiran’s Balti", "Hospitality · Restaurant", "7665867943481199894"],
];

const services = [
  ["01", "Short-form video", "Concepts, filming and edits for TikTok, Reels and Shorts."],
  ["02", "Food + product", "Clean close-ups that make people stop, look and want it."],
  ["03", "People + personality", "Founder stories and behind-the-scenes content people remember."],
  ["04", "Social direction", "A clear repeatable content plan built around your business."],
];

const process = [
  ["01", "Quick chat", "Tell us what you sell, who it is for and what you want to push."],
  ["02", "Ideas", "We shape the hooks and a focused plan for the shoot."],
  ["03", "Shoot", "We capture a bank of content without wasting your day."],
  ["04", "Edit + deliver", "You get polished vertical videos ready to post."],
];

export default function Home() {
  return (
    <main id="top" className="minimal-home">
      <SiteHeader />

      <section className="simple-hero" aria-labelledby="hero-title">
        <div className="simple-hero-copy">
          <p className="simple-kicker"><span /> Birmingham short-form studio</p>
          <h1 id="hero-title">
            Make them stop.<br />Make them <em>watch.</em>
          </h1>
          <div className="simple-hero-actions">
            <Link href="/#plan">Build your content plan <Arrow /></Link>
            <a href="tel:+447508182314">Call Ayub · 07508 182314</a>
          </div>
          <p className="simple-hero-intro">
            Social content for restaurants, shops and local businesses that want
            to look sharp, feel real and get remembered.
          </p>
        </div>
        <div className="simple-hero-visual">
          <Image
            src="/equipment-bazaar.jpg"
            alt="Beam Media content created for Equipment Bazaar"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
            priority
          />
          <p>Real businesses · Real content · Birmingham</p>
        </div>
      </section>

      <section className="simple-client-strip" aria-label="Clients Beam Media has worked with">
        <p>Clients we&apos;ve worked with</p>
        <div>
          <span>Equipment Bazaar</span>
          <span>Harborne Indian Kitchen</span>
          <span>Stechford Local</span>
          <span>Madina Gift Shop</span>
          <span>Kiran’s Balti</span>
          <span>Liquid Print</span>
          <span>Rajbari</span>
        </div>
      </section>

      <section className="results-work" id="work" aria-labelledby="work-title">
        <div className="simple-section-heading">
          <p>Selected work</p>
          <h2 id="work-title">The work.<br /><em>And the result.</em></h2>
          <p>Real videos from the Beam Media TikTok, with public figures checked in August 2026.</p>
        </div>

        <div className="result-case-list">
          {featuredWork.map((work) => (
            <article className="result-case" key={work.name}>
              <div className="result-video">
                <iframe
                  src={tiktokPlayer(work.videoId)}
                  title={`Beam Media TikTok for ${work.name}`}
                  loading="lazy"
                  allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="result-copy">
                <div className="result-label"><span>{work.number}</span><p>{work.type}</p></div>
                <h3>{work.name}</h3>
                <p className="result-description">{work.copy}</p>
                {work.results ? (
                  <div className="result-metrics" aria-label={`${work.name} TikTok results`}>
                    {work.results.map(([value, label]) => (
                      <div key={label}><strong>{value}</strong><span>{label}</span></div>
                    ))}
                  </div>
                ) : null}
                <ul aria-label="Services provided">
                  {work.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
                <a className="view-tiktok" href={work.videoUrl} target="_blank" rel="noreferrer">
                  Open on TikTok <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="more-work" aria-labelledby="more-work-title">
        <div>
          <p>More work</p>
          <h2 id="more-work-title">More brands.<br />Same energy.</h2>
        </div>
        <div className="more-work-list">
          {moreWork.map(([name, type, videoId], index) => (
            <a
              href={`https://www.tiktok.com/@beammedia0/video/${videoId}`}
              target="_blank"
              rel="noreferrer"
              key={name}
            >
              <span>0{index + 3}</span><strong>{name}</strong><small>{type}</small><Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="simple-services" id="services" aria-labelledby="services-title">
        <div className="simple-section-heading simple-section-heading-dark">
          <p>What we make</p>
          <h2 id="services-title">Simple service.<br /><em>Strong content.</em></h2>
          <p>One small team from the first idea to the final video.</p>
        </div>
        <div className="simple-service-grid">
          {services.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ProjectPlanner />

      <section className="simple-process" id="process" aria-labelledby="process-title">
        <div>
          <p>How it works</p>
          <h2 id="process-title">Easy from<br />start to post.</h2>
        </div>
        <ol>
          {process.map(([number, title, copy]) => (
            <li key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></li>
          ))}
        </ol>
      </section>

      <section className="simple-faq" id="faq" aria-labelledby="faq-title">
        <div>
          <p>Good to know</p>
          <h2 id="faq-title">Questions.<br /><em>Answered.</em></h2>
          <p>Still unsure? Call or WhatsApp us directly — no sales maze.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>How much does content cost?<span>+</span></summary>
            <p>It depends on the number of videos, the shoot, location and whether you need one-off or monthly content. Build a brief above and we&apos;ll recommend the right scope.</p>
          </details>
          <details>
            <summary>Do I need to know what to film?<span>+</span></summary>
            <p>No. Tell us what your business does and what you want to achieve. We&apos;ll shape the hooks, concepts and shot plan with you.</p>
          </details>
          <details>
            <summary>Can Beam Media post the videos too?<span>+</span></summary>
            <p>We can plan content around TikTok, Reels and Shorts, then discuss whether you want ready-to-post delivery or wider social direction.</p>
          </details>
          <details>
            <summary>Do you work outside Birmingham?<span>+</span></summary>
            <p>Yes. Beam Media is based in Birmingham and works with businesses across the UK. Add your location to the project brief so we can plan travel properly.</p>
          </details>
          <details>
            <summary>Can we make content every month?<span>+</span></summary>
            <p>Yes. Choose the monthly option in the planner and we&apos;ll shape a repeatable shoot and posting rhythm around your business.</p>
          </details>
        </div>
      </section>

      <section className="simple-cta" aria-labelledby="cta-title">
        <p>Ready when you are</p>
        <h2 id="cta-title">Need content?<br />Talk to us.</h2>
        <div>
          <a href={ayubWhatsApp} target="_blank" rel="noreferrer">WhatsApp Beam Media <Arrow /></a>
          <Link href="/contact">All contact details <Arrow /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
