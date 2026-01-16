import { Button } from "./ui/button"
import { CTASectionLayout } from "./ui/cta-section-layout"
import { ContactInfo } from "./ui/contact-info"
import { SocialLinks } from "./ui/social-links"

export function ClientsCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <CTASectionLayout
          title={<span className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl block">Ready to Book the Right Artist?</span>}
          subtitle="Planning a performance or hosting an event? Get in touch for availability, pricing, and customized options tailored to your needs."
          gradientFrom="[#a259e2]"
          gradientTo="[#ff1493]"
          className="clients-cta-gradient-bg"
        >
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#a259e2] to-[#ff1493] opacity-90"></div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="gap-2 px-8 py-3 text-lg font-bold bg-gradient-to-r from-[#a259e2] to-[#ff1493] text-white shadow-lg hover:from-[#7a1fd2] hover:to-[#e13ecb] transition-all duration-200">Avail your benefit Now !</Button>
          </div>

          <ContactInfo className="mt-8" />
          <SocialLinks className="mt-4" />
        </CTASectionLayout>
      </div>
    </section>
  )
}
