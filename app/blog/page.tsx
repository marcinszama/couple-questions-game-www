import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '@/lib/blog'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Relationship Blog — Tips, Guides & Advice for Couples | The Couple Questions',
  description: 'Expert guides on communication, intimacy, and connection for couples. Practical tips to deepen your relationship one conversation at a time.',
  alternates: {
    canonical: 'https://www.couplequestionsgame.com/blog',
  },
  openGraph: {
    title: 'Relationship Blog — Tips, Guides & Advice for Couples | The Couple Questions',
    description: 'Expert guides on communication, intimacy, and connection for couples.',
    url: 'https://www.couplequestionsgame.com/blog',
    siteName: 'The Couple Questions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relationship Blog — Tips, Guides & Advice for Couples | The Couple Questions',
    description: 'Expert guides on communication, intimacy, and connection for couples.',
  },
}

const COMING_SOON_ARTICLES = [
  {
    title: '50 Deep Questions to Ask Your Partner Tonight',
    category: 'Conversation Starters',
    description: 'Move beyond small talk with these thought-provoking questions designed to spark genuine connection and reveal new sides of your partner.',
    readTime: '6 min read',
  },
  {
    title: 'How to Rebuild Trust After a Relationship Conflict',
    category: 'Relationship Advice',
    description: 'Conflict is normal — but how you repair matters most. A practical guide to rebuilding trust and coming out stronger on the other side.',
    readTime: '8 min read',
  },
]

export default async function BlogPage() {
  const articles = await getAllArticles()
  const publishedArticles = articles.filter((a) => a.frontmatter.published)

  return (
    <div className="min-h-screen pb-24">

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Blog</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-b border-border mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Relationship Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Guides and advice to help couples communicate better, connect deeper, and grow together.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">

        {/* Published Articles */}
        {publishedArticles.length > 0 && (
          <div className="mb-20 space-y-6">
            {publishedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-card border border-border rounded-2xl p-8 hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                    {article.frontmatter.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{article.frontmatter.readTime}</span>
                  <span className="text-muted-foreground text-sm">·</span>
                  <span className="text-muted-foreground text-sm">{article.frontmatter.date}</span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors mb-3">
                  {article.frontmatter.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {article.frontmatter.description}
                </p>
                <div className="mt-6 text-sm font-semibold text-primary flex items-center gap-1">
                  Read article
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Coming Soon */}
        {COMING_SOON_ARTICLES.length > 0 && (
          <>
            <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-8">
              Coming soon
            </p>
            <div className="space-y-6 mb-16">
              {COMING_SOON_ARTICLES.map((article, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 opacity-50 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{article.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{article.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="bg-card border border-border rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Ready to deepen your connection?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start your first guided conversation — free, no download required.
          </p>
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}/auth`}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Try for free →
          </Link>
        </div>

      </div>
    </div>
  )
}
