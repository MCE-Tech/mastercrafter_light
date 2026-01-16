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
    <div className="border border-muted rounded-lg overflow-hidden transition-all duration-200 hover:border-secondary/30">
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

export function ClientsFAQ() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/10 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-secondary/10 to-primary/10 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 gradient-text">FAQs — What Clients Ask Us</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="How is MCE different from traditional artist bookings?"
            answer="Unlike traditional bookings that just connect you with artists, we provide a complete end-to-end solution. We verify all artists, handle coordination, provide backups, and ensure quality performances. Our subscription model also offers cost benefits for regular bookings and premium events."
          />
          <FAQItem
            question="Can I get an artist multiple times without subscribing?"
            answer="Yes, you can book artists on a pay-as-you-go basis. However, subscribers receive priority booking, discounted rates, and additional perks like dedicated managers and refund support. For regular bookings, a subscription offers better value."
          />
          <FAQItem
            question="What if the artist doesn't match my vibe?"
            answer="We take great care to match artists to your event's vibe through our detailed curation process. However, if you're not satisfied with our recommendations, let us know and we'll suggest alternatives. Vibe Pro and Elite subscribers also get access to our artist rotation program for more variety."
          />
          <FAQItem
            question="Can I get artists for different cities?"
            answer="Yes! We have a network of verified artists across major Indian cities. Just let us know your event location, and we'll connect you with local talent. For destination events, travel and accommodation costs may apply."
          />
          <FAQItem
            question="Can I customize my plan?"
            answer="Absolutely. While our standard plans cover most needs, we understand that some events require special arrangements. Our Vibe Enterprise option offers fully customizable solutions for high-volume clients or those with specific requirements."
          />
        </div>
      </div>
    </section>
  )
}
