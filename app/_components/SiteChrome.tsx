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
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Beam Media home">
        <span className="brand-mark">BM.</span>
        <span className="brand-name">Beam Media</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#why">Why Beam</Link>
        <Link href="/#services">Services</Link>
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
          <Link href="/#why">Why Beam <Arrow /></Link>
          <Link href="/#services">Services <Arrow /></Link>
          <Link href="/#process">Process <Arrow /></Link>
          <Link href="/contact">Contact <Arrow /></Link>
        </div>
      </details>
      <Link className="header-cta" href="/contact">
        Start a project <Arrow />
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image
          src="/beam-media-mark.jpg"
          alt="Beam Media"
          width={720}
          height={720}
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
          <Link href="/contact">Contact us <Arrow /></Link>
          <a href="mailto:beam.mediauk@gmail.com">Email <Arrow /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Beam Media</p>
        <p>Birmingham, UK</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
