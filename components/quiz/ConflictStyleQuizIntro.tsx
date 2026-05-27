'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, Target, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const conflictStyles = [
  { emoji: '🔥', name: 'The Expresser', description: 'Communicates with energy, emotion, and immediacy' },
  { emoji: '🚪', name: 'The Withdrawer', description: 'Needs space to process before engaging in conflict' },
  { emoji: '🧠', name: 'The Analyzer', description: 'Approaches conflict logically and methodically' },
  { emoji: '🕊️', name: 'The Harmonizer', description: 'Prioritizes peace and connection above all else' },
  { emoji: '🏃', name: 'The Pursuer', description: 'Seeks immediate resolution and connection' },
  { emoji: '✨', name: 'The Secure Communicator', description: 'Stays present and responds with empathy during conflict' },
]

export default function ConflictStyleQuizIntro() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Free Assessment • 10 Minutes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Conflict Management Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Understand how you naturally navigate relationship challenges and learn to communicate more effectively with your partner
          </p>
          <Button size="lg" onClick={() => router.push('/conflict-style-quiz/assessment')} className="group text-lg px-8 py-6">
            Take the Free Quiz
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* What You'll Discover */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">What You'll Discover</CardTitle>
            <CardDescription className="text-base">
              This research-based assessment reveals your natural communication patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Brain, title: 'Your Communication Profile', desc: 'Identify whether you\'re an Expresser, Withdrawer, Analyzer, Harmonizer, Pursuer, or Secure Communicator' },
                { icon: Target, title: 'Your Strengths & Challenges', desc: 'Understand what you do well and where you can improve in conflict situations' },
                { icon: Users, title: 'Relationship Dynamics', desc: 'Learn how your style interacts with different partner communication styles' },
                { icon: CheckCircle2, title: 'Personalized Growth Path', desc: 'Get specific recommendations on what to work on to become a better communicator' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 6 Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-center">The 6 Conflict Management Styles</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everyone has a natural way of handling disagreements. Understanding your style is the first step to improving your relationships.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conflictStyles.map((style) => (
              <Card key={style.name} className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-2">{style.emoji}</div>
                  <CardTitle className="text-xl">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { step: 1, title: 'Answer 16 Questions', desc: 'Reflect on how you naturally respond in different conflict situations. There are no right or wrong answers.' },
              { step: 2, title: 'Get Your Results Instantly', desc: 'Receive your primary (and possibly secondary) conflict management style with detailed insights.' },
              { step: 3, title: 'Share With Your Partner', desc: 'Understanding both your styles is key to breaking negative patterns and building healthier communication.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Clock, title: 'Quick & Easy', desc: 'Complete in under 10 minutes' },
            { icon: Brain, title: 'Evidence-Based', desc: 'Grounded in attachment theory and relationship research' },
            { icon: CheckCircle2, title: 'Actionable Insights', desc: 'Get practical tips you can use immediately' },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="text-center">
              <CardContent className="pt-6">
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Ready to Understand Your Conflict Style?</CardTitle>
            <CardDescription className="text-base">
              Join thousands of couples who've transformed their communication by understanding their natural patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button size="lg" onClick={() => router.push('/conflict-style-quiz/assessment')} className="group text-lg px-8 py-6">
              Start the Free Quiz
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">No email required • Instant results • Completely free</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
