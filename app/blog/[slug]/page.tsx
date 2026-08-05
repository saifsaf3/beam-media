import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../_components/SiteChrome";
import { blogPosts, getBlogPost } from "../../_content/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.publishedDate },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    mainEntityOfPage: `https://beammedia.agency/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Beam Media" },
    publisher: { "@type": "Organization", name: "Beam Media", url: "https://beammedia.agency" },
  };

  return (
    <main className="article-page" id="top">
      <SiteHeader />
      <article>
        <header className="article-hero">
          <Link href="/blog" className="article-back">← Back to blog</Link>
          <p>{post.category} <span>·</span> {post.readTime} <span>·</span> {post.dateDisplay}</p>
          <h1>{post.title}</h1>
          <p>{post.intro}</p>
        </header>
        <div className="article-content">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}
        </div>
        <aside className="article-cta">
          <p>Want content that does this for your business?</p>
          <h2>Make the next move<br /><em>with Beam.</em></h2>
          <Link href="/#plan">Build your content plan <span aria-hidden="true">↗</span></Link>
        </aside>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData).replace(/</g, "\\u003c") }} />
      <SiteFooter />
    </main>
  );
}
