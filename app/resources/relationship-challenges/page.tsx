import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const metadata: Metadata = {
  title: '10 Relationship Challenges Every Couple Faces | The Couple Questions',
  description: 'Every relationship hits bumps. Learn about the 10 most common challenges couples face and practical ways to work through them together.',
  alternates: {
    canonical: '/resources/relationship-challenges',
  },
  openGraph: {
    title: '10 Relationship Challenges Every Couple Faces | The Couple Questions',
    description: 'Every relationship hits bumps. Learn about the 10 most common challenges couples face and practical ways to work through them together.',
    url: `${SITE_URL}/resources/relationship-challenges`,
    type: 'article',
  },
}

export default function RelationshipChallengesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": `${SITE_URL}/resources` },
      { "@type": "ListItem", "position": 3, "name": "10 Relationship Challenges Every Couple Faces", "item": `${SITE_URL}/resources/relationship-challenges` }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Relationship Challenges Every Couple Faces (And How to Actually Work Through Them)",
    "description": "Learn about the 10 most common challenges couples face, why they happen, and practical ways to work through them together.",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the most common relationship challenges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common relationship challenges include communication breakdowns, different conflict styles, mismatched love languages, money disagreements, intimacy issues, work-life balance struggles, family tensions, different future goals, trust issues, and growing apart over time."
        }
      },
      {
        "@type": "Question",
        "name": "How do you fix communication problems in a relationship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To fix communication problems, use 'I' statements instead of 'you' accusations, practice active listening by repeating back what you heard, and schedule regular check-ins when you're both calm. Most communication issues stem from never learning how to talk about emotions and needs effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Why do couples have different conflict styles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Couples have different conflict styles because everyone learned different ways to handle conflict growing up. One person may want to talk it out immediately while the other needs space. Neither style is wrong, but they can clash. The key is learning each other's patterns without judgment and agreeing on a 'timeout' system when things get heated."
        }
      },
      {
        "@type": "Question",
        "name": "How can couples rebuild intimacy and connection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To rebuild intimacy, schedule regular one-on-one time together, talk openly about physical and emotional needs, and focus on small moments of connection rather than just big gestures. Remember that intimacy requires ongoing intentional effort, especially as life gets busy and stressful."
        }
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Improve Communication in Your Relationship",
    "description": "Practical steps to overcome communication breakdowns and build better understanding with your partner",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Use I Statements",
        "text": "Replace 'you' accusations with 'I' statements to express your feelings without blaming your partner"
      },
      {
        "@type": "HowToStep",
        "name": "Practice Active Listening",
        "text": "Repeat back what you heard to ensure you understand your partner's perspective correctly"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule Regular Check-ins",
        "text": "Set aside dedicated time for conversations when you're both calm and focused"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, articleSchema, faqSchema, howToSchema]) }}
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
              10 Relationship Challenges Every Couple Faces (And How to Actually Work Through Them)
            </h1>
            <p className="text-xl text-muted-foreground">
              Every relationship hits bumps. The couples who make it aren&apos;t the ones who never have problems—they&apos;re the ones who learn to navigate challenges together instead of letting them build up into bigger issues.
            </p>
            <p className="text-lg text-muted-foreground">
              Here are the 10 most common challenges couples face, why they happen, and what you can do about them.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-10">
            {/* Challenge 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Communication Breakdowns</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">You&apos;re talking past each other, having the same argument over and over, or avoiding difficult conversations entirely.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Most of us never learned how to communicate about emotions, needs, or conflict. We assume our partner should &quot;just know&quot; what we mean.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Use &quot;I&quot; statements instead of &quot;you&quot; accusations</li>
                <li>Practice active listening (repeat back what you heard)</li>
                <li>Schedule regular check-ins when you&apos;re both calm</li>
                <li>Try our <a href={`${APP_URL}/home`} className="text-primary hover:underline">Communication Challenge</a> for structured practice</li>
              </ul>
            </section>

            {/* Challenge 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">2. Different Conflict Styles</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">One person wants to talk it out immediately, the other needs space. One gets loud, the other shuts down.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">We all learned different ways to handle conflict growing up. Neither style is wrong, but they can clash badly.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Learn each other&apos;s conflict patterns without judgment</li>
                <li>Agree on a &quot;timeout&quot; system when things get heated</li>
                <li>Focus on solving the problem together, not winning</li>
              </ul>
            </section>

            {/* Challenge 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">3. Mismatched Love Languages</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">You&apos;re both showing love, but neither feels loved. You give gifts, they want quality time. They help with chores, you want words of affirmation.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">We tend to give love the way <em>we</em> want to receive it, not the way our partner does.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Learn each other&apos;s love languages (words, touch, time, gifts, acts of service)</li>
                <li>Practice giving love in <em>their</em> language, not just yours</li>
                <li>Be specific about what makes you feel appreciated</li>
              </ul>
            </section>

            {/* Challenge 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">4. Money Disagreements</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">Arguing about spending, saving, or financial priorities. One person is a spender, the other a saver. Hidden purchases or financial stress.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Money represents different things to different people: security, freedom, control, love, status.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Have regular money conversations when you&apos;re not stressed</li>
                <li>Understand each other&apos;s money &quot;stories&quot; and fears</li>
                <li>Create a system that honors both of your needs</li>
              </ul>
            </section>

            {/* Challenge 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">5. Intimacy and Connection Issues</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">Feeling more like roommates than partners. Physical intimacy feels forced or infrequent. Emotional distance growing over time.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Life gets busy, stress kills connection, and intimacy requires ongoing intentional effort.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Schedule regular one-on-one time (yes, schedule it)</li>
                <li>Talk openly about physical and emotional needs</li>
                <li>Focus on small moments of connection, not just big gestures</li>
              </ul>
            </section>

            {/* Challenge 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">6. Work-Life Balance Struggles</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">One or both partners are always working, stressed, or unavailable. The relationship feels like it&apos;s getting leftover energy.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Career pressure, financial stress, or unclear boundaries between work and personal time.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Set clear work boundaries together</li>
                <li>Protect relationship time as fiercely as work time</li>
                <li>Support each other&apos;s career goals without sacrificing the relationship</li>
              </ul>
            </section>

            {/* Challenge 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">7. Family and In-Law Tensions</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">Disagreeing about time spent with families, dealing with difficult relatives, or navigating different family cultures.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Two family systems coming together, often with different values, traditions, and boundaries.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Present a united front as a couple</li>
                <li>Set clear boundaries with extended family</li>
                <li>Find compromises that honor both families when possible</li>
              </ul>
            </section>

            {/* Challenge 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">8. Different Future Goals</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">One wants kids, the other doesn&apos;t. Disagreeing about where to live, career priorities, or lifestyle choices.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">People grow and change, and sometimes in different directions.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Have honest conversations about non-negotiables</li>
                <li>Explore the &quot;why&quot; behind each person&apos;s goals</li>
                <li>Seek couples counseling for major incompatibilities</li>
              </ul>
            </section>

            {/* Challenge 9 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">9. Trust Issues</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">Jealousy, checking phones, bringing up past hurts, or feeling like you can&apos;t rely on your partner.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">Past betrayals (in this or other relationships), insecurity, or broken promises that haven&apos;t been addressed.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Address trust issues directly instead of hoping they&apos;ll fade</li>
                <li>Be consistent with small promises to rebuild trust</li>
                <li>Consider professional help for serious betrayals</li>
              </ul>
            </section>

            {/* Challenge 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-3">10. Growing Apart Over Time</h2>
              <p className="font-semibold text-foreground mb-2">What it looks like:</p>
              <p className="text-muted-foreground mb-3">You used to have so much to talk about, now conversations feel surface-level. You&apos;re living parallel lives instead of a shared one.</p>
              <p className="font-semibold text-foreground mb-2">Why it happens:</p>
              <p className="text-muted-foreground mb-3">People naturally evolve, and without intentional effort, couples can drift in different directions.</p>
              <p className="font-semibold text-foreground mb-2">What helps:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Stay curious about who your partner is becoming</li>
                <li>Try new experiences together regularly</li>
                <li>Share your own growth and changes openly</li>
              </ul>
            </section>

            {/* The Good News Section */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">The Good News</h2>
              <p className="text-muted-foreground mb-4">
                Every single one of these challenges is workable—if you&apos;re both willing to put in the effort. The key is addressing issues when they&apos;re still manageable, not waiting until they&apos;ve become relationship-threatening.
              </p>
              <p className="text-muted-foreground">
                Most problems aren&apos;t about compatibility; they&apos;re about skills. Communication, conflict resolution, intimacy, trust-building—these are all learnable.
              </p>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="space-y-3">
                <Link href="/resources/relationship-material" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold mb-1">10 Questions That Reveal If Someone Is Relationship Material</h3>
                  <p className="text-sm text-muted-foreground">Learn the right questions to ask when dating to assess compatibility.</p>
                </Link>
                <Link href="/resources" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold mb-1">More Resources</h3>
                  <p className="text-sm text-muted-foreground">Explore our full library of articles and quizzes for couples.</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Working on These Together?</h2>
              <p className="text-muted-foreground mb-4">
                If you recognize some of these challenges in your own relationship, you&apos;re not alone—and you&apos;re not stuck with them. We created the Couple Questions Game specifically to help couples have the conversations that matter. Instead of letting issues build up in silence, you can work through them together with guided, research-based discussions.
              </p>
              <p className="font-semibold text-foreground mb-2">Inside the app, you&apos;ll find:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Question cards that help you explore each of these challenge areas</li>
                <li>Guided conversations designed to build understanding, not create conflict</li>
                <li>Tools to improve communication, rebuild connection, and align on future goals</li>
                <li>A safe structure for discussing difficult topics like money, intimacy, and family</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Don&apos;t wait for small issues to become big ones. Start having better conversations today.
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
