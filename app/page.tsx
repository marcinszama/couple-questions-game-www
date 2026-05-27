import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Heart, MessageCircle, Shield, Target, ChevronRight, Star, Check, BookOpen, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MobileNav } from '@/components/MobileNav'
import { FAQAccordion } from '@/components/FAQAccordion'
import { ContactDialog } from '@/components/ContactDialog'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'

export const metadata: Metadata = {
  title: 'The Couple Questions - Grow Your Connection | Evidence-Based Relationship Tool',
  description: 'Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection. Complete challenges in one evening. Try free today!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Couple Questions - Grow Your Connection | Evidence-Based Relationship Tool',
    description: 'Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection. Complete challenges in one evening. Try free today!',
    url: SITE_URL,
    siteName: 'The Couple Questions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Couple Questions - Grow Your Connection | Evidence-Based Relationship Tool',
    description: 'Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection. Complete challenges in one evening. Try free today!',
  },
}

export default function LandingPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Couple Questions",
    "description": "Evidence-based relationship communication tools and guided discussions for couples",
    "url": SITE_URL,
    "logo": `${SITE_URL}/assets/logo.png`,
    "founder": {
      "@type": "Person",
      "name": "Marcin Szamatowicz",
      "url": `${SITE_URL}/about`
    },
    "sameAs": [
      "https://www.linkedin.com/in/marcinszamatowicz/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@couplequestionsgame.com"
    }
  }

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "The Couple Questions",
    "url": SITE_URL,
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "20",
      "offerCount": "10"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Evidence-based guided discussions to help couples communicate better, resolve conflicts, and deepen connection. Complete challenges in one evening.",
    "screenshot": `${SITE_URL}/assets/mockup-1.png`,
    "featureList": [
      "Guided Conversations for deep relationship discussions",
      "Question Cards for spontaneous meaningful conversations",
      "Evidence-based relationship frameworks",
      "Topics on communication, intimacy, conflict resolution",
      "Web-based platform accessible anywhere"
    ],
    "author": {
      "@type": "Person",
      "name": "Marcin Szamatowicz"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Couple Questions Game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Couple Questions Game is a comprehensive conversation tool featuring two types of experiences: thoughtfully crafted questions for deep connection AND guided discussions that walk you through important relationship topics step-by-step. Both are designed to help couples build stronger, more meaningful relationships."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from other relationship conversation tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike competitors who offer only random question lists, we provide: Research-based questions organized by relationship stage, Structured guided discussions for complex topics like conflict resolution and future planning, Psychology-backed frameworks rather than generic prompts, and Strategic progression from surface-level to deep intimacy."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between questions and guided discussions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Questions are perfect for spontaneous connection—pull one out during dinner or a car ride to spark meaningful conversation. Guided discussions are structured sessions that walk you through important relationship topics like communication styles, love languages, intimacy needs, etc."
        }
      },
      {
        "@type": "Question",
        "name": "What topics can we discuss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer discussions on communication skills, love languages, physical intimacy, conflict resolution, household management, money and finances, trust building, future planning, and more. Each topic is designed by relationship experts to foster meaningful conversations."
        }
      },
      {
        "@type": "Question",
        "name": "Is this therapy or counseling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we are not a therapy or counseling service. The Couple Questions provides conversation tools and prompts based on relationship science. If you're experiencing serious relationship problems or mental health issues, we encourage you to seek help from licensed professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need any special equipment or setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No special equipment needed! Just a comfortable, private space where you won't be interrupted, and a device to access the app (phone, tablet, or computer). We recommend turning off notifications and giving each other your full attention."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data private and secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we take your privacy seriously. Your conversations and personal information are encrypted and secure. We never share your data with third parties. For full details, please review our Privacy Policy."
        }
      },
      {
        "@type": "Question",
        "name": "Can I try it before purchasing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free trial discussions so you can experience how The Couple Questions works before committing to premium features. Create an account to get started with your first free session."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, webApplicationSchema, faqSchema, breadcrumbSchema]) }}
      />
      <div className="min-h-screen bg-background font-poppins font-light">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo and Name */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/assets/logo.png" alt="Couple Questions" className="h-9 w-auto" loading="eager" width="36" height="36" />
                <span className="text-lg font-semibold text-foreground">The Couple Questions</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Product
                </a>
                <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
                <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
                <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Button asChild size="sm" className="group hover:scale-105 transition-transform">
                  <a href={`${APP_URL}/auth`} className="flex items-center gap-2">
                    Try for free
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Mobile Menu */}
              <MobileNav />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-accent-light to-background pt-8 pb-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Images - Above Title */}
            <div className="flex lg:hidden items-center justify-center gap-4 mb-8">
              <div className="relative w-28 h-auto">
                <img
                  src="/assets/mockup-1.png"
                  alt="Communication styles education card"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                  width="112"
                  height="240"
                />
              </div>
              <div className="relative w-28 h-auto">
                <img
                  src="/assets/mockup-3.png"
                  alt="Couple questions card interface"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                  width="112"
                  height="240"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-normal">
                  Grow Your Relationship, One Question at a Time
                </h1>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E06B80' }}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-semibold text-foreground">Question Cards:</span> Curated discussion topics perfect for instant connection
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E06B80' }}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-semibold text-foreground">Guided Conversations:</span> Structured sessions with expert insights and practical tools for lasting change
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E06B80' }}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-semibold text-foreground">Web-Based Platform:</span> Access anytime, anywhere - no downloads required
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <a href={`${APP_URL}/auth`} className="flex items-center gap-2">
                      Try for free
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
              {/* Desktop Images - Side by Side */}
              <div className="hidden lg:flex items-center justify-center gap-6">
                <div className="relative w-48 h-auto">
                  <img
                    src="/assets/mockup-1.png"
                    alt="Communication styles education card"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    loading="eager"
                    width="192"
                    height="411"
                  />
                </div>
                <div className="relative w-48 h-auto">
                  <img
                    src="/assets/mockup-3.png"
                    alt="Couple questions card interface"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    loading="eager"
                    width="192"
                    height="411"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center -space-x-3">
                <Avatar className="w-12 h-12 border-2 border-background shadow-md">
                  <AvatarImage src="/assets/avatar-1.png" alt="Couple" loading="lazy" />
                  <AvatarFallback className="bg-gradient-to-br from-pink-400 to-rose-500 text-white font-semibold">J</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-2 border-background shadow-md">
                  <AvatarImage src="/assets/avatar-2.png" alt="Couple" loading="lazy" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white font-semibold">M</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-2 border-background shadow-md">
                  <AvatarImage src="/assets/avatar-3.png" alt="Couple" loading="lazy" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white font-semibold">S</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-2 border-background shadow-md">
                  <AvatarImage src="/assets/avatar-4.png" alt="Couple" loading="lazy" />
                  <AvatarFallback className="bg-gradient-to-br from-amber-400 to-orange-500 text-white font-semibold">A</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-2 border-background shadow-md">
                  <AvatarImage src="/assets/avatar-5.png" alt="Couple" loading="lazy" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-semibold">K</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">Trusted by 100+ couples</p>
                <div className="flex items-center justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Join them in building stronger relationships</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Why Couples Choose Us
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transform your relationship with structured, science-backed conversations
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">One Evening, Real Results</h3>
                  <p className="text-muted-foreground">
                    45-60 minutes. One session. Lasting change.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Proven Science, No Fluff</h3>
                  <p className="text-muted-foreground">
                    Research-backed strategies from 40+ years of relationship science.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Practical Tools, Not Just Advice</h3>
                  <p className="text-muted-foreground">
                    Leave with specific practices you'll use tomorrow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Conversation, Not Lectures</h3>
                  <p className="text-muted-foreground">
                    Guided discussions that bring you closer together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Three easy steps to transform your relationship
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-2xl p-8 flex flex-col items-center text-center space-y-4 shadow-sm border border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step 1</span>
                <h3 className="text-xl font-semibold">Choose Your Discussion</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pick the conversation topic that you both want to explore right now
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 flex flex-col items-center text-center space-y-4 shadow-sm border border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step 2</span>
                <h3 className="text-xl font-semibold">Talk Together</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Find a comfortable, distraction-free space and focus completely on each other
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 flex flex-col items-center text-center space-y-4 shadow-sm border border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step 3</span>
                <h3 className="text-xl font-semibold">Reflect & Grow</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Take note of your insights and see how your connection grows stronger
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Question Cards Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Question Cards
                </h2>
                <p className="text-xl text-foreground font-medium">
                  Conversation starters for any moment
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Carefully crafted conversation-starting question cards</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Intensity guide to match your comfort level</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Bookmark feature to save your favorite questions for later</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Category breakdown to focus on what matters most now</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Lifetime access to revisit questions anytime</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/assets/mockup-3.png"
                  alt="Question Cards interface showing conversation starters"
                  className="w-full max-w-64 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Guided Discussions Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <img
                  src="/assets/mockup-1.png"
                  alt="Guided Discussions framework interface"
                  className="w-full max-w-64 h-auto object-contain drop-shadow-2xl"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Guided Discussions
                </h2>
                <p className="text-xl text-foreground font-medium">
                  Structured conversations that go deeper
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">45-60 minute discussion frameworks for focused connection</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Step-by-step guidance through important relationship topics</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Evidence-based insights woven throughout each session</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Practical tools to strengthen your bond after each discussion</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">Designed for when you want to dive deep together</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Everything you need to know about The Couple Questions
            </p>
            <FAQAccordion />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Relationship?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join thousands of couples building stronger relationships
            </p>
            <Button asChild variant="hero" size="default" className="text-base sm:text-lg group hover:scale-105 transition-transform w-auto mx-auto sm:size-lg">
              <a href={`${APP_URL}/auth`} className="flex items-center gap-2">
                Start Your First Conversation
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg">The Couple Questions</p>
                <p className="text-sm text-background/80 mt-1">Building stronger connections</p>
              </div>
              <div className="flex gap-6 text-sm text-background/80">
                <Link href="/about" className="hover:text-background transition-colors">About</Link>
                <Link href="/resources" className="hover:text-background transition-colors">Resources</Link>
                <Link href="/privacy-policy" className="hover:text-background transition-colors">Privacy</Link>
                <Link href="/terms-of-service" className="hover:text-background transition-colors">Terms</Link>
                <ContactDialog />
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-background/70">
              © 2025 Couple Questions. All rights reserved.
            </div>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
              <a
                href="https://peerpush.net/p/couple-questions-game"
                target="_blank"
                rel="noopener"
                className="w-[180px] hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://peerpush.net/p/couple-questions-game/badge.png"
                  alt="Couple Questions Game badge"
                  className="w-full"
                />
              </a>
              <a
                href="https://launchigniter.com/product/couple-questions-game?ref=badge-couple-questions-game"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://launchigniter.com/api/badge/couple-questions-game?theme=dark"
                  alt="Featured on LaunchIgniter"
                  width="170"
                  height="44"
                />
              </a>
              <a
                href="https://startupfa.me/s/the-couple-questions?utm_source=couplequestionsgame.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://startupfa.me/badges/featured-badge-small.webp"
                  alt="Couple Question Game - Featured on Startup Fame"
                  width="224"
                  height="36"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
