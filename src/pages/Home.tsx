import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VisionMission } from "@/components/vision-mission"
import { CoreValues } from "@/components/core-values"
import { ServicesSection } from "@/components/services-section"
import { ArtistsSection } from "@/components/artists-section"
import { CTASection } from "@/components/cta-section"
import { AnimatedBackground } from "@/components/animated-background"
import { images } from "@/assets/images"
import { InitiativesSection } from "@/components/our-initiatives"

export default function HomePage() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${images.chatGPTImage2})`
  };
  return (
    <div className="flex min-h-screen flex-col">

      {/* <div
      className="absolute inset-0 flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
      style={backgroundStyle}
    ></div> */}
      <div className="hidden sm:absolute sm:flex justify-center inset-0 z-10">
        {/* <img src={images.expected} className=" h-full" alt="" /> */}
        {/* <iframe 
          src='https://my.spline.design/particlenebula-1I1kmN3uj4uy3lrWLTs1EbPS/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        /> */}

        {/* default */}
        {/* <iframe src='https://my.spline.design/journeymapchillorbit-bymjeySZHKHkkdGHi9MeMd62/' 
          width='100%' 
          height='100%'
          className="scale-105">
        </iframe> */}
        

      {/* For transparent */}
      {/* <iframe src='https://my.spline.design/journeymapchillorbit-J0nSgJpJadPlJJW0xlSmgQfr/' frameborder='0' width='100%' height='100%'></iframe> */}
      </div>
      <main className="flex-1">
        <Hero />
        <VisionMission />
        <CoreValues />
        <div id="our-initiatives">
          <InitiativesSection/>
        </div>
        <div id="our-services">
          <ServicesSection />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20">
          <ArtistsSection />
        </div>
        <div id="contact-us">
          <CTASection />
        </div>
      </main>
    </div>
  )
}