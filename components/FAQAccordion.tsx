'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  { q: "What is the Couple Questions Game?", a: "The Couple Questions Game is a comprehensive conversation tool featuring two types of experiences: thoughtfully crafted questions for deep connection AND guided discussions that walk you through important relationship topics step-by-step. Both are designed to help couples build stronger, more meaningful relationships." },
  { q: "How is this different from other relationship conversation tools?", a: "Unlike competitors who offer only random question lists, we provide: Research-based questions organized by relationship stage, Structured guided discussions for complex topics like conflict resolution and future planning, Psychology-backed frameworks rather than generic prompts, and Strategic progression from surface-level to deep intimacy." },
  { q: "What's the difference between questions and guided discussions?", a: "Questions are perfect for spontaneous connection—pull one out during dinner or a car ride to spark meaningful conversation. Guided discussions are structured sessions that walk you through important relationship topics like communication styles, love languages, intimacy needs, etc." },
  { q: "What topics can we discuss?", a: "We offer discussions on communication skills, love languages, physical intimacy, conflict resolution, household management, money and finances, trust building, future planning, and more. Each topic is designed by relationship experts to foster meaningful conversations." },
  { q: "Is this therapy or counseling?", a: "No, we are not a therapy or counseling service. The Couple Questions provides conversation tools and prompts based on relationship science. If you're experiencing serious relationship problems or mental health issues, we encourage you to seek help from licensed professionals." },
  { q: "Do I need any special equipment or setup?", a: "No special equipment needed! Just a comfortable, private space where you won't be interrupted, and a device to access the app. We recommend turning off notifications and giving each other your full attention." },
  { q: "Is my data private and secure?", a: "Yes, we take your privacy seriously. Your conversations and personal information are encrypted and secure. We never share your data with third parties. For full details, please review our Privacy Policy." },
  { q: "Can I try it before purchasing?", a: "Yes! We offer free trial discussions so you can experience how The Couple Questions works before committing to premium features. Create an account to get started with your first free session." },
]

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
          <AccordionTrigger className="text-left hover:no-underline">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
