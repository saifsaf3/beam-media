import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { blogPosts } from "../_content/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical content and social media advice for Birmingham restaurants, retailers and local businesses from Beam Media.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main className="blog-page" id="top">
      <SiteHeader />
      <section className="blog-hero" aria-labelledby="blog-title">
        <p>Beam Media Blog</p>
        <h1 id="blog-title">Ideas that help<br /><em>businesses move.</em></h1>
        <p>Useful advice on short-form video, social media and growing a local business — written without the marketing waffle.</p>
      </section>
      <section className="blog-list" aria-label="Latest articles">
        {blogPosts.map((post, index) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-number">0{index + 1}</div>
            <div className="blog-card-copy">
              <p>{post.category} <span>·</span> {post.readTime}</p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link href={`/blog/${post.slug}`}>Read article <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="blog-cta">
        <p>Want this done for you?</p>
        <h2>Let&apos;s make the<br /><em>content.</em></h2>
        <Link href="/#plan">Build your content plan <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
