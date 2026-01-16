import { Button } from "./ui/button"
import { Mail, Phone } from "lucide-react"
import { CTASectionLayout } from "./ui/cta-section-layout"
import { ContactInfo } from "./ui/contact-info"

export function CTASection() {
  return (
    <section className="py-6 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-y-3" />


      <div className="container px-4 md:px-6 relative z-10">
        <CTASectionLayout
          title="Ready to Book the Right Artist?"
          subtitle="Planning a performance or hosting an event? Get in touch for availability, pricing, and customized options tailored to your needs."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              className="gap-2 bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = 'mailto:mastercrafters.ent@gmail.com'}
            >
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </Button>
            <Button
              className="gap-2 bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = 'tel:+918329303275'}
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </Button>
          </div>

          <ContactInfo className="mt-8" />
        </CTASectionLayout>
      </div>
    </section>
  )
}
