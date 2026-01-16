"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden transition-all duration-200 hover:shadow-2xl hover:border-primary">
      <button
        className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white/5">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 gradient-text">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="What is a 1:1 Music Consultation?"
            answer="A 1:1 Music Consultation is a private session with one of our industry experts where we discuss your music, career goals, and provide personalized feedback and guidance. Depending on your membership tier, these sessions range from 30 minutes to 1 hour and cover everything from performance techniques to career strategy."
          />
          <FAQItem
            question="I'm just starting out. Can I still join?"
            answer="Our Free tier is specifically designed for beginners who are just exploring their musical journey. You can start with the basics and upgrade as your career develops. We believe in nurturing talent from the very beginning."
          />
          <FAQItem
            question="Do you help me get real gigs?"
            answer="Yes, that's one of our core services. We actively connect our artists with venues, events, and opportunities based on your style, availability, and career goals. Our commission structure is transparent, and we prioritize fair payment for all performances."
          />
          <FAQItem
            question="Are the payments transparent?"
            answer="100% transparency is our policy. You'll always know exactly what you're earning from each gig, what our commission is, and when you'll be paid. We provide detailed statements for all transactions and maintain open communication about financial matters."
          />
          <FAQItem
            question="Can I upgrade my plan anytime?"
            answer="Yes, you can upgrade your membership plan at any time as your career grows. We make the transition seamless, and any benefits from your new tier become immediately available. We also offer prorated adjustments when you upgrade mid-billing cycle."
          />
          <FAQItem
            question="How is Master Crafters different from other booking platforms?"
            answer="Unlike typical booking platforms that just connect artists to gigs, we focus on comprehensive career development. We offer personalized mentorship, portfolio creation, marketing support, and long-term career planning. We're partners in your musical journey, not just a booking service."
          />
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 backdrop-blur-sm border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="bg-green-500/20 p-2 rounded-full mt-1">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-muted-foreground">
              Ready to transform your musical journey? Contact us today to learn more about our services!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
