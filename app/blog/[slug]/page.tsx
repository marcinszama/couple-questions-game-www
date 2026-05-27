import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/blog'
import BlogContent from '@/components/BlogContent'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) return { title: 'Article Not Found | The Couple Questions' }

  return {
    title: `${article.frontmatter.title} | The Couple Questions`,
    description: article.frontmatter.description,
    alternates: {
      canonical: `https://www.couplequestionsgame.com/blog/${slug}`,
    },
    openGraph: {
      title: `${article.frontmatter.title} | The Couple Questions`,
      description: article.frontmatter.description,
      url: `https://www.couplequestionsgame.com/blog/${slug}`,
      siteName: 'The Couple Questions',
      locale: 'en_US',
      type: 'article',
      ...(article.frontmatter.ogImage && { images: [article.frontmatter.ogImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.frontmatter.title} | The Couple Questions`,
      description: article.frontmatter.description,
    },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  const { frontmatter, content } = article

  return (
    <div className="min-h-screen pb-24">

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium line-clamp-1">{frontmatter.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 py-12 border-b border-border mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
            {frontmatter.category}
          </span>
          <span className="text-muted-foreground text-sm">{frontmatter.readTime}</span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-muted-foreground text-sm">{frontmatter.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {frontmatter.description}
        </p>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6">
        <BlogContent content={content} />
      </article>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-card border border-primary/20 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Ready to put this into practice?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start a guided conversation with your partner — free, no download required.
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
