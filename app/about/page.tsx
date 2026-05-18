import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'

export const metadata: Metadata = {
  title: 'About Marcin | The Couple Questions - Relationship Communication Expert',
  description: 'Meet Marcin, creator of The Couple Questions. Former tech consultant turned relationship communication expert, helping couples build stronger connections through meaningful conversations.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Marcin | The Couple Questions - Relationship Communication Expert',
    description: 'Meet Marcin, creator of The Couple Questions. Former tech consultant turned relationship communication expert, helping couples build stronger connections through meaningful conversations.',
    url: `${SITE_URL}/about`,
  },
}

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marcin Szamatowicz",
    "jobTitle": "The Couple Questions Game Founder and CEO",
    "description": "Former tech consultant turned relationship communication enthusiast, helping couples build stronger connections through meaningful conversations and evidence-based tools.",
    "image": `${SITE_URL}/assets/marcin-photo.jpg`,
    "url": `${SITE_URL}/about`,
    "sameAs": ["https://www.linkedin.com/in/marcinszamatowicz/"],
    "knowsAbout": [
      "Relationship Communication",
      "Psychology",
      "Emotional Wellbeing",
      "Couples Therapy",
      "Self-Awareness"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "The Couple Questions"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, breadcrumbSchema]) }}
      />
      <div className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-foreground">About</h1>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-xl font-semibold text-foreground">Hi, I&apos;m Marcin</p>

                <p>
                  After years as a strategic consultant and growth manager at major tech companies,
                  I discovered my true passion: psychology and wellbeing.
                </p>

                <p>
                  I&apos;m fascinated by what makes some relationships thrive while others struggle,
                  even when love is clearly present. Through my research, I&apos;ve learned that most
                  relationship challenges aren&apos;t about compatibility—they&apos;re about communication
                  and self-awareness.
                </p>

                <p>
                  The reality is that most couples have never been taught how to have truly
                  meaningful conversations. Yet relationships, like any important aspect of life,
                  require intentional care and the right tools to flourish.
                </p>

                <p>
                  My mission is simple: make those tools accessible to every couple who wants
                  to grow together.
                </p>

                <p>
                  I created the Couple Questions Game because I believe communication isn&apos;t just
                  about talking—it&apos;s about creating a safe space where both people can be vulnerable,
                  understand themselves better, and build something extraordinary together.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="/assets/marcin-photo.jpg"
                  alt="Marcin"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-foreground/80 flex items-center gap-2 flex-wrap">
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/marcinszamatowicz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>{" "}
                to join the conversation about building stronger relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
