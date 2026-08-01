import Image from "next/image";
import Link from "next/link";

export const ayubWhatsApp =
  "https://wa.me/447508182314?text=Hey%20Beam%20Media%20%E2%80%94%20I%27d%20love%20to%20talk%20about%20content%20for%20my%20business.";

export const anasWhatsApp =
  "https://wa.me/447737058865?text=Hey%20Beam%20Media%20%E2%80%94%20I%27d%20love%20to%20talk%20about%20content%20for%20my%20business.";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  return (
    <>
      <aside className="contact-strip" aria-label="Quick contact">
        <p><span /> Speak to Beam Media</p>
        <a href="tel:+447508182314"><strong>Ayub</strong> 07508 182314</a>
        <a href="tel:+447737058865"><strong>Anasur</strong> 07737 058865</a>
        <a className="contact-strip-whatsapp" href={ayubWhatsApp} target="_blank" rel="noreferrer">
          WhatsApp us <Arrow />
        </a>
      </aside>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Beam Media home">
          <Image
            className="official-logo official-logo-header"
            src="/beam-media-logo-official.png"
            alt="Beam Media"
            width={1500}
            height={1200}
            sizes="90px"
            priority
          />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#plan">Build a plan</Link>
          <Link href="/#process">Process</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div>
            <Link href="/#work">Work <Arrow /></Link>
            <Link href="/#services">Services <Arrow /></Link>
            <Link href="/#plan">Build a plan <Arrow /></Link>
            <Link href="/#process">Process <Arrow /></Link>
            <Link href="/contact">Contact <Arrow /></Link>
          </div>
        </details>
        <Link className="header-cta" href="/#plan">
          Start a project <Arrow />
        </Link>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <Image
            className="official-logo official-logo-footer"
            src="/beam-media-logo-official.png"
            alt="Beam Media"
            width={1500}
            height={1200}
            sizes="(max-width: 760px) 70vw, 330px"
          />
          <p>Short-form content for businesses worth watching.</p>
          <div className="footer-status"><span /> Birmingham · Available across the UK</div>
        </div>
        <div className="footer-links">
          <div>
            <p>Social</p>
            <a href="https://www.tiktok.com/@beammedia0" target="_blank" rel="noreferrer">
              TikTok <Arrow />
            </a>
            <a href="https://www.instagram.com/beammedia_/?hl=en" target="_blank" rel="noreferrer">
              Instagram <Arrow />
            </a>
          </div>
          <div>
            <p>Contact</p>
            <a href="tel:+447508182314">Call Ayub <Arrow /></a>
            <a href="tel:+447737058865">Call Anasur <Arrow /></a>
            <a href="mailto:beam.mediauk@gmail.com">Email <Arrow /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Beam Media</p>
          <p>Birmingham, UK</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <div className="mobile-contact-dock" aria-label="Quick mobile contact">
        <a href="tel:+447508182314">Call now</a>
        <a href={ayubWhatsApp} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  );
}
