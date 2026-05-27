import type { Metadata } from 'next'
import ConflictStyleQuizIntro from '@/components/quiz/ConflictStyleQuizIntro'

export const metadata: Metadata = {
  title: 'Free Conflict Management Style Quiz — Discover Your Communication Pattern',
  description: 'Take our free 16-question quiz to discover your conflict management style. Learn whether you\'re an Expresser, Withdrawer, Analyzer, Harmonizer, Pursuer, or Secure Communicator.',
  alternates: {
    canonical: 'https://www.couplequestionsgame.com/conflict-style-quiz',
  },
  openGraph: {
    title: 'Free Conflict Management Style Quiz — Discover Your Communication Pattern',
    description: 'Take our free 16-question quiz to discover your conflict management style. Get personalized insights to improve your relationship communication.',
    url: 'https://www.couplequestionsgame.com/conflict-style-quiz',
    siteName: 'The Couple Questions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Conflict Management Style Quiz',
    description: 'Discover your conflict management style in 10 minutes. Free, instant results.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Conflict Management Style Quiz',
  description: 'Discover your unique conflict management and communication style with this comprehensive 16-question assessment.',
  educationalLevel: 'All levels',
  timeRequired: 'PT10M',
  url: 'https://www.couplequestionsgame.com/conflict-style-quiz',
  about: [
    { '@type': 'Thing', name: 'Conflict resolution' },
    { '@type': 'Thing', name: 'Communication styles' },
    { '@type': 'Thing', name: 'Relationship psychology' },
  ],
}

export default function ConflictStyleQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ConflictStyleQuizIntro />
    </>
  )
}
