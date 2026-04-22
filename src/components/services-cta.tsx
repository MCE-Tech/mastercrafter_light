import { Button } from "./ui/button"
import { CTASectionLayout } from "./ui/cta-section-layout"

export function ServicesCTA() {
  return (
    <section className="py-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-secondary/20 to-primary/20 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <CTASectionLayout 
          title={<span className="services-cta-title">Ready to Start Your Artist Journey?</span>}
          gradientFrom="[#8a2be2]"
          gradientTo="[#ff1493]"
        >
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#8a2be2] to-[#ff1493] opacity-90"></div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center sm:justify-center w-full">
            <Button className="w-full sm:w-auto gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-[#8a2be2] to-[#ff1493] text-white shadow-lg hover:from-[#7a1fd2] hover:to-[#e13ecb] transition-all duration-200">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform" target="_blank" rel="noopener noreferrer">
              Click here to Buy Artist Membership Plan
              </a>
            </Button>
          </div>
          


          <p className="text-white/80">Let's take your music career to the next level.</p>

        </CTASectionLayout>
      </div>
    </section>
  )
}
