import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const metadata: Metadata = {
  title: 'Relationship Resources & Articles | The Couple Questions',
  description: 'Free relationship resources, communication tips, and expert articles to help couples strengthen their connection. Guides on intimacy, conflict resolution, compatibility, and more.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Relationship Resources & Articles | The Couple Questions',
    description: 'Free relationship resources, communication tips, and expert articles to help couples strengthen their connection.',
    url: `${SITE_URL}/resources`,
  },
}

const resources = [
  {
    type: "quiz",
    title: "Free Conflict Management Style Quiz",
    description: "Discover your unique communication style during conflict. Take our research-based assessment to understand how you navigate disagreements and learn practical strategies for improvement.",
    href: `${APP_URL}/conflict-style-quiz`,
    external: true,
    readTime: "5 min quiz",
    featured: true
  },
  {
    type: "article",
    title: "10 Questions That Reveal If Someone Is Relationship Material",
    description: "When you're dating, chemistry is fun—but compatibility is what makes things last. Learn 10 important questions to help you figure out if someone is truly relationship material, without turning the date into a job interview.",
    href: "/resources/relationship-material",
    external: false,
    readTime: "8 min read"
  },
  {
    type: "article",
    title: "10 Relationship Challenges Every Couple Faces",
    description: "Every relationship hits bumps. Learn about the 10 most common challenges couples face, why they happen, and practical ways to work through them together instead of letting them build up.",
    href: "/resources/relationship-challenges",
    external: false,
    readTime: "10 min read"
  }
]

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": `${SITE_URL}/resources` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Header */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/assets/logo.png" alt="The Couple Questions" className="h-9 w-auto" />
              <span className="text-lg font-semibold text-foreground">The Couple Questions</span>
            </Link>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Relationship Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free articles and guides to help you build a stronger, deeper connection with your partner
            </p>
          </header>

          {/* Resources Grid */}
          <div className="space-y-8 mb-16">
            {resources.map((resource, index) => (
              resource.external ? (
                <a key={index} href={resource.href} className="block">
                  <Card className={`flex flex-col hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer ${resource.featured ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <CardHeader>
                      {resource.featured && (
                        <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2">
                          <span className="text-lg">✨</span>
                          <span>Featured Resource</span>
                        </div>
                      )}
                      <CardTitle className="text-2xl mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{resource.readTime}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full group" variant={resource.featured ? "default" : "outline"}>
                        {resource.type === "quiz" ? "Take Quiz" : "Read Article"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </a>
              ) : (
                <Link key={index} href={resource.href} className="block">
                  <Card className={`flex flex-col hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer ${resource.featured ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <CardHeader>
                      {resource.featured && (
                        <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2">
                          <span className="text-lg">✨</span>
                          <span>Featured Resource</span>
                        </div>
                      )}
                      <CardTitle className="text-2xl mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{resource.readTime}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full group" variant={resource.featured ? "default" : "outline"}>
                        {resource.type === "quiz" ? "Take Quiz" : "Read Article"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              )
            ))}
          </div>

          {/* CTA Section */}
          <section className="text-center bg-card rounded-lg border p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Relationship?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              These articles are just the beginning. Inside the Couple Questions app, you&apos;ll find hundreds of guided questions and conversations designed to help you grow together.
            </p>
            <Button asChild size="lg" className="group hover:scale-105 transition-transform">
              <a href={`${APP_URL}/auth`}>
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
