import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const metadata: Metadata = {
  title: '10 Questions That Reveal If Someone Is Relationship Material | The Couple Questions',
  description: "When you're dating, chemistry is fun—but compatibility is what makes things last. Learn 10 important questions to help you figure out if someone is truly relationship material.",
  alternates: {
    canonical: '/resources/relationship-material',
  },
  openGraph: {
    title: '10 Questions That Reveal If Someone Is Relationship Material | The Couple Questions',
    description: "When you're dating, chemistry is fun—but compatibility is what makes things last. Learn 10 important questions to help you figure out if someone is truly relationship material.",
    url: `${SITE_URL}/resources/relationship-material`,
    type: 'article',
  },
}

export default function RelationshipMaterialPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": `${SITE_URL}/resources` },
      { "@type": "ListItem", "position": 3, "name": "10 Questions That Reveal If Someone Is Relationship Material", "item": `${SITE_URL}/resources/relationship-material` }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Questions That Reveal If Someone Is Relationship Material (Without Killing the Vibe)",
    "description": "Learn 10 important questions to help you figure out if someone is truly relationship material, asked in a natural and playful way.",
    "author": {
      "@type": "Organization",
      "name": "The Couple Questions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Couple Questions",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/logo.png`
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2024-11-24"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, articleSchema]) }}
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
              <Link href="/resources">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16 max-w-3xl">
          <header className="mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              10 Questions That Reveal If Someone Is Relationship Material (Without Killing the Vibe)
            </h1>
            <p className="text-xl text-muted-foreground">
              When you&apos;re dating, chemistry is fun—but compatibility is what makes things last. The right questions can help you figure out whether someone is actually a good fit for a relationship, without turning the date into a job interview.
            </p>
            <p className="text-lg text-muted-foreground">
              Here are 10 important questions (that you can ask in a natural, even playful way) to help you see if someone is truly relationship material.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-10">
            {/* Question 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">1. &quot;What does a good relationship look like to you?&quot;</h2>
              <p className="text-muted-foreground mb-3">You&apos;re checking their relationship blueprint.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Do they mention respect, communication, trust, teamwork?</li>
                <li>Does their idea of closeness vs. independence feel similar to yours?</li>
                <li>Is their vision realistic, or more like a movie?</li>
              </ul>
            </section>

            {/* Question 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">2. &quot;How do you usually spend your weekends?&quot;</h2>
              <p className="text-muted-foreground mb-3">This is a low&#8209;pressure lifestyle question that reveals a lot.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Are they more of a homebody or always out?</li>
                <li>Do they prioritize rest, parties, hobbies, nature, family?</li>
                <li>Can you picture yourself genuinely enjoying that rhythm long term?</li>
              </ul>
            </section>

            {/* Question 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">3. &quot;What are your top 3 values in life?&quot;</h2>
              <p className="text-muted-foreground mb-3">Values quietly drive every big decision.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Things like honesty, growth, family, freedom, stability, adventure.</li>
                <li>Do they explain what those values look like in real life?</li>
                <li>Do yours overlap or clash?</li>
              </ul>
            </section>

            {/* Question 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">4. &quot;How do you handle conflict or tough conversations?&quot;</h2>
              <p className="text-muted-foreground mb-3">There&apos;s no lasting relationship without disagreement.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Do they shut down, get loud, avoid, or stay engaged?</li>
                <li>Can they admit what they&apos;re working on (e.g., not getting defensive)?</li>
                <li>Do they see conflict as something to solve together?</li>
              </ul>
            </section>

            {/* Question 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">5. &quot;What kind of support do you like when you&apos;re stressed?&quot;</h2>
              <p className="text-muted-foreground mb-3">You&apos;re exploring emotional availability and communication.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Do they know if they prefer advice, hugs, space, distraction, solutions?</li>
                <li>Are they willing to say what they need, instead of expecting mind&#8209;reading?</li>
              </ul>
            </section>

            {/* Question 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">6. &quot;What role do friends and family play in your life?&quot;</h2>
              <p className="text-muted-foreground mb-3">Their existing relationships say a lot.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Are they very close, very distant, or somewhere in between?</li>
                <li>Do they have healthy boundaries?</li>
                <li>Does their level of family/social involvement feel compatible with yours?</li>
              </ul>
            </section>

            {/* Question 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">7. &quot;Where do you see yourself in 3–5 years?&quot;</h2>
              <p className="text-muted-foreground mb-3">You&apos;re not looking for a perfect plan, just direction.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Themes like career focus, travel, settling down, kids, location.</li>
                <li>Are they clear about wanting (or not wanting) long&#8209;term partnership?</li>
                <li>Does their direction broadly align with where you&apos;re heading?</li>
              </ul>
            </section>

            {/* Question 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">8. &quot;What are your thoughts on kids, marriage, or long&#8209;term commitment?&quot;</h2>
              <p className="text-muted-foreground mb-3">Some topics are make&#8209;or&#8209;break, not &quot;we&apos;ll figure it out later.&quot;</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Are they honest about what they want right now?</li>
                <li>Are they open to commitment in general, or strongly against it?</li>
                <li>Does their answer fit your non&#8209;negotiables?</li>
              </ul>
            </section>

            {/* Question 9 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">9. &quot;What are you working on in yourself right now?&quot;</h2>
              <p className="text-muted-foreground mb-3">This reveals self&#8209;awareness and growth mindset.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Can they name something real (communication, boundaries, health, patience)?</li>
                <li>Do they take responsibility, or mostly blame others?</li>
                <li>Do they seem interested in growing alongside a partner?</li>
              </ul>
            </section>

            {/* Question 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">10. &quot;What makes you feel appreciated in a relationship?&quot;</h2>
              <p className="text-muted-foreground mb-3">You&apos;re checking for love languages and emotional needs.</p>
              <p className="font-semibold mb-2">Listen for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Do they light up at words, actions, time together, touch, little gifts?</li>
                <li>Do their needs feel like something you&apos;d enjoy giving, not just tolerate?</li>
                <li>Can they communicate this clearly?</li>
              </ul>
            </section>

            {/* Tips Section */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">How to Ask These Without Making It Awkward</h2>
              <p className="text-muted-foreground mb-4">
                You don&apos;t need to rapid&#8209;fire these on date one. Instead:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Sprinkle them into conversations over time</li>
                <li>Swap answers: &quot;Okay, your turn to ask me something back&quot;</li>
                <li>Make it playful: &quot;Serious question round: pick a number 1–10&quot;</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                The point isn&apos;t to test them—it&apos;s to get genuinely curious and share about yourself too.
              </p>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="space-y-3">
                <Link href="/resources/relationship-challenges" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold mb-1">10 Relationship Challenges Every Couple Faces</h3>
                  <p className="text-sm text-muted-foreground">Learn about common relationship obstacles and how to work through them.</p>
                </Link>
                <a href={`${APP_URL}/conflict-style-quiz`} className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold mb-1">Discover Your Conflict Management Style</h3>
                  <p className="text-sm text-muted-foreground">Take our quiz to understand how you handle disagreements.</p>
                </a>
                <Link href="/resources" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold mb-1">More Resources</h3>
                  <p className="text-sm text-muted-foreground">Explore our full library of articles and quizzes for couples.</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">Want More Questions Like This?</h2>
              <p className="text-muted-foreground mb-4">
                If you&apos;re already in a relationship (or heading into one you care about), I built something to help you go deeper. In the Couple Questions you&apos;ll find:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Question cards for different stages of a relationship</li>
                <li>Guided conversations based on research, not just random prompts</li>
                <li>Topics that help you explore values, conflict styles, intimacy, money, family, and more</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                If these 10 questions were helpful, you&apos;ll find many more inside the app to keep building connection once you&apos;re a couple.
              </p>
              <Button asChild size="lg" className="group hover:scale-105 transition-transform">
                <a href={`${APP_URL}/auth`}>
                  Try for Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
