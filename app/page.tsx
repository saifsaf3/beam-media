import Image from "next/image";
import Link from "next/link";
import { Arrow, ayubWhatsApp, SiteFooter, SiteHeader } from "./_components/SiteChrome";

const tiktokPlayer = (videoId: string) =>
  `https://www.tiktok.com/player/v1/${videoId}?music_info=0&description=0&rel=0&native_context_menu=0`;

const services = [
  {
    number: "01",
    title: "Short-form content",
    copy: "Hooks, scripts, filming and edits built for TikTok, Reels and Shorts — not recycled TV ads.",
  },
  {
    number: "02",
    title: "Food + product",
    copy: "Cinematic close-ups and sharp product photography that make people stop, look and want it.",
  },
  {
    number: "03",
    title: "Personality-led ideas",
    copy: "Founder stories, chef skits and behind-the-scenes moments that make the people behind your brand memorable.",
  },
  {
    number: "04",
    title: "Social strategy",
    copy: "A repeatable content direction shaped around your business, audience and what is moving on social right now.",
  },
];

const process = [
  ["01", "Find the hook", "We learn what makes your business worth watching."],
  ["02", "Shoot with intent", "A focused session built around a bank of strong ideas."],
  ["03", "Cut for attention", "Fast pacing, clear story and platform-native edits."],
  ["04", "Get it moving", "Ready-to-post content made to earn attention."],
];

const feedWork = [
  {
    name: "Stechford Local",
    type: "Retail · Local supermarket",
    note: "12.8K on a pinned local-first video",
    videoId: "7612729315465235734",
    colour: "feed-lime",
  },
  {
    name: "Madina Gift Shop",
    type: "Retail · Gifts + lifestyle",
    note: "Products framed to stop the scroll",
    videoId: "7652800877278842134",
    colour: "feed-red",
  },
  {
    name: "Kiran’s Balti",
    type: "Hospitality · Restaurant",
    note: "Food content with heat and personality",
    videoId: "7665867943481199894",
    colour: "feed-green",
  },
];

const clients = [
  "Equipment Bazaar",
  "Harborne Indian Kitchen",
  "Stechford Local",
  "Madina Gift Shop",
  "Kiran’s Balti",
  "Rajbari Kitchen",
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Birmingham, UK · Short-form studio</p>
          <h1>
            Make them
            <span>stop.</span>
            Make them
            <span>watch.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Beam Media creates scroll-stopping social content for restaurants,
              shops and local brands ready to look impossible to ignore.
            </p>
            <a className="circle-link" href="#work" aria-label="See selected work">
              <span>See the work</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Beam Media client work">
          <div className="hero-stamp">Content<br />that hits</div>
          <Image
            className="hero-equipment"
            src="/equipment-bazaar.jpg"
            alt="Beam Media short-form content for Equipment Bazaar"
            fill
            sizes="(max-width: 1050px) 74vw, 35vw"
            priority
          />
          <div className="hero-phone">
            <Image
              src="/harborne-indian-kitchen.jpg"
              alt="Harborne Indian Kitchen captured by Beam Media"
              fill
              sizes="(max-width: 760px) 39vw, 16vw"
            />
            <span className="play-button" aria-hidden="true">▶</span>
            <p>Harborne Indian Kitchen</p>
          </div>
          <p className="vertical-note">Filmed in Birmingham · Cut for the feed</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>SHORT-FORM CONTENT</span><b>✦</b><span>FOOD + PRODUCT</span><b>✦</b>
          <span>BEHIND THE SCENES</span><b>✦</b><span>SOCIAL STRATEGY</span><b>✦</b>
          <span>SHORT-FORM CONTENT</span><b>✦</b><span>FOOD + PRODUCT</span><b>✦</b>
        </div>
      </div>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <p className="section-label">What we do</p>
        <div>
          <h2 id="manifesto-title">
            Your business already has a story.
            <em> We make it worth watching.</em>
          </h2>
          <p>
            No stiff corporate promos. No content for content&apos;s sake. We find the
            personality, product and moments people actually care about — then turn
            them into videos built for the way people watch now.
          </p>
        </div>
      </section>

      <section className="client-ribbon" aria-label="Brands we have created content for">
        <p>Seen on the feed</p>
        <div>
          {clients.map((client) => <span key={client}>{client}</span>)}
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2 id="work-title">Proof, in motion.</h2>
          <a href="https://www.tiktok.com/@beammedia0" target="_blank" rel="noreferrer">
            View all on TikTok <Arrow />
          </a>
        </div>

        <article className="case-study case-equipment">
          <div className="case-copy">
            <p className="case-number">01 / 02</p>
            <p className="case-type">Retail · Catering equipment</p>
            <h3>Equipment<br />Bazaar</h3>
            <p>
              We turned a warehouse full of catering kit into useful, funny and
              personality-led short-form content — making specialist products feel
              native to the feed.
            </p>
            <ul aria-label="Services provided">
              <li>Creative direction</li>
              <li>Short-form video</li>
              <li>Behind the scenes</li>
            </ul>
          </div>
          <div className="case-media red-media">
            <iframe
              src={tiktokPlayer("7659537226765831446")}
              title="Beam Media TikTok for Equipment Bazaar"
              loading="lazy"
              allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <span className="media-caption">POV: testing the equipment ourselves</span>
          </div>
        </article>

        <article className="case-study case-harborne">
          <div className="case-media green-media">
            <iframe
              src={tiktokPlayer("7667116178875157782")}
              title="Beam Media TikTok for Harborne Indian Kitchen"
              loading="lazy"
              allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <span className="media-caption">Food, character and the energy behind it</span>
          </div>
          <div className="case-copy">
            <p className="case-number">02 / 02</p>
            <p className="case-type">Hospitality · Indian restaurant</p>
            <h3>Harborne<br />Indian Kitchen</h3>
            <p>
              Cinematic food shots meet chef-led personality. We brought the
              restaurant to life with content that feels warm, entertaining and
              unmistakably local.
            </p>
            <ul aria-label="Services provided">
              <li>Food videography</li>
              <li>Concept development</li>
              <li>Social-first editing</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="feed-work" aria-labelledby="feed-work-title">
        <div className="feed-work-heading">
          <p className="section-label">More from the feed</p>
          <h2 id="feed-work-title">Local brands.<br /><em>Big energy.</em></h2>
          <p>From retail counters to restaurant kitchens, every brand gets its own rhythm.</p>
        </div>
        <div className="feed-grid">
          {feedWork.map((item, index) => (
            <article className={`feed-card ${item.colour}`} key={item.name}>
              <div className="feed-card-top">
                <span>0{index + 3}</span>
                <p>{item.type}</p>
              </div>
              <div className="feed-frame">
                <iframe
                  src={tiktokPlayer(item.videoId)}
                  title={`Beam Media TikTok for ${item.name}`}
                  loading="lazy"
                  allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-heading light-heading">
          <p className="section-label">What we make</p>
          <h2 id="services-title">Built for attention.</h2>
          <p>From the first idea to the final cut, every frame has a job.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <p>{service.number}</p>
              <h3>{service.title}</h3>
              <span aria-hidden="true">↘</span>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="section-label">How it works</p>
          <h2 id="process-title">From idea<br />to feed.</h2>
          <p>Clear, collaborative and built to keep the good ideas moving.</p>
        </div>
        <ol className="process-list">
          {process.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <p className="section-label">Your move</p>
        <h2 id="cta-title">Ready to look<br /><em>unmissable?</em></h2>
        <p>Tell us about your business. We&apos;ll bring the ideas, cameras and edits.</p>
        <Link href="/contact">Meet the team <Arrow /></Link>
        <span className="cta-note">Birmingham based · Available across the UK</span>
      </section>

      <section className="quick-contact" aria-label="Quick contact">
        <p>Ready now?</p>
        <a href={ayubWhatsApp} target="_blank" rel="noreferrer">Message Beam Media on WhatsApp <Arrow /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
