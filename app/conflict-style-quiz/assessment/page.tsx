import type { Metadata } from 'next'
import ConflictStyleQuizAssessment from '@/components/quiz/ConflictStyleQuizAssessment'

export const metadata: Metadata = {
  title: 'Conflict Management Style Assessment',
  description: 'Answer 16 questions to discover your unique conflict management and communication style in relationships.',
  robots: { index: false },
}

export default function AssessmentPage() {
  return <ConflictStyleQuizAssessment />
}
