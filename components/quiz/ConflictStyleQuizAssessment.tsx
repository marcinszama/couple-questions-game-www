'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { conflictQuizQuestions } from '@/lib/conflictQuiz/questions'
import { calculateQuizResults, getProfileEmoji } from '@/lib/conflictQuiz/scoring'
import type { QuizResponse } from '@/lib/conflictQuiz/types'

export default function ConflictStyleQuizAssessment() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState<QuizResponse[]>([])
  const [currentAnswer, setCurrentAnswer] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState('')

  const currentQuestion = conflictQuizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / conflictQuizQuestions.length) * 100

  const handleAnswerChange = (optionId: string) => {
    if (currentQuestion.maxSelections) {
      if (currentAnswer.includes(optionId)) {
        setCurrentAnswer(currentAnswer.filter((id) => id !== optionId))
      } else if (currentAnswer.length < currentQuestion.maxSelections) {
        setCurrentAnswer([...currentAnswer, optionId])
      }
    } else {
      const newResponse: QuizResponse = { questionId: currentQuestion.id, selectedOptions: [optionId] }
      const updatedResponses = [...responses.filter((r) => r.questionId !== currentQuestion.id), newResponse]
      setResponses(updatedResponses)
      setCurrentAnswer([])
      setTimeout(() => {
        if (currentQuestionIndex < conflictQuizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
          setShowResults(true)
        }
      }, 300)
    }
  }

  const handleNext = () => {
    if (currentAnswer.length === 0) return
    const newResponse: QuizResponse = { questionId: currentQuestion.id, selectedOptions: currentAnswer }
    const updatedResponses = [...responses.filter((r) => r.questionId !== currentQuestion.id), newResponse]
    setResponses(updatedResponses)
    setCurrentAnswer([])
    if (currentQuestionIndex < conflictQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      const prev = responses.find((r) => r.questionId === conflictQuizQuestions[currentQuestionIndex - 1].id)
      setCurrentAnswer(prev?.selectedOptions || [])
    }
  }

  const getGoalText = (optionId: string) => {
    const goalQuestion = conflictQuizQuestions.find((q) => q.id === 'C1')
    return goalQuestion?.options.find((o) => o.id === optionId)?.text || ''
  }

  if (showResults) {
    const goalResponse = responses.find((r) => r.questionId === 'C1')
    const selectedGoalTexts = goalResponse?.selectedOptions.map(getGoalText) || []
    const result = calculateQuizResults(responses, selectedGoalTexts)

    const handleEmailSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setEmailError('')
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address.')
        return
      }
      setIsSubmitting(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-quiz-results`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ email, results: result, profileEmoji: getProfileEmoji(result.primary.profileName) }),
          }
        )
        if (!res.ok) throw new Error('Failed')
        setEmailSent(true)
      } catch {
        setEmailError('Failed to send email. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/assets/logo.png" alt="The Couple Questions" className="h-9 w-auto" />
              <span className="text-lg font-semibold">The Couple Questions</span>
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {!emailSent ? (
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{getProfileEmoji(result.primary.profileName)}</div>
                <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
                <p className="text-muted-foreground">
                  Enter your email below to receive your detailed communication style results.
                </p>
              </div>
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="block mb-2">Email Address</Label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                  {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? '⏳ Sending Results...' : 'Send My Results'}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p className="mb-2">Your results include:</p>
                <ul className="space-y-1">
                  <li>✨ Your primary communication style</li>
                  <li>💪 Your strengths in conflict</li>
                  <li>🎯 Areas for growth</li>
                  <li>🎪 Personalized insights</li>
                </ul>
              </div>
            </Card>
          ) : (
            <Card className="p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold mb-4">Check Your Email!</h2>
                <p className="text-muted-foreground mb-6">
                  We've sent your detailed results to <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-8">Don't see it? Check your spam folder.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => router.push(`${process.env.NEXT_PUBLIC_APP_URL}/auth`)} size="lg" className="group">
                    Try Our App
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link href="/blog">More Resources</Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/assets/logo.png" alt="The Couple Questions" className="h-9 w-auto" />
            <span className="text-lg font-semibold">The Couple Questions</span>
          </Link>
          <Link href="/conflict-style-quiz" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {conflictQuizQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
            {currentQuestion.maxSelections && (
              <CardDescription>Select up to {currentQuestion.maxSelections} options</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.maxSelections ? (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <Checkbox
                      id={`option-${option.id}`}
                      checked={currentAnswer.includes(option.id)}
                      onCheckedChange={() => handleAnswerChange(option.id)}
                      disabled={!currentAnswer.includes(option.id) && currentAnswer.length >= (currentQuestion.maxSelections ?? 0)}
                    />
                    <Label htmlFor={`option-${option.id}`} className="text-base cursor-pointer leading-relaxed">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            ) : (
              <RadioGroup value={currentAnswer[0] || ''} onValueChange={(value) => handleAnswerChange(value)}>
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value={option.id} id={`option-${option.id}`} className="mt-1" />
                    <Label htmlFor={`option-${option.id}`} className="text-base cursor-pointer leading-relaxed">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentAnswer.length === 0} className="group">
            {currentQuestionIndex === conflictQuizQuestions.length - 1 ? 'See Results' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}
