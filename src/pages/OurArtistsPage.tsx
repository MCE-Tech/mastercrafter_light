import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { ArtistsSection } from "@/components/artists-section"
import { OurArtistsHero } from "@/components/our-artists-hero"
import { getNotionIframe } from "@/lib/NotionIframeCache"

export default function OurArtistsPage() {
  const iframe = getNotionIframe();
  return (
    // <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
    //   <div className="fixed inset-0 -z-10">
    //     <AnimatedBackground />
    //   </div>
    //   <div className="relative z-10">
    //     <Header />
    //     <main className="flex-1">
    //       <div className="relative">
    //         {/* Decorative elements */}
    //         <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
    //         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 to-transparent" />
    //         {/* Content */}
    //         <div className="relative z-10">
    //           <OurArtistsHero />
    //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //             <ArtistsSection />
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <main className="flex-1">
          {/* <div className="relative">
            Decorative elements
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 to-transparent" />
            Content
            <div className="relative z-10">
              <OurArtistsHero />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ArtistsSection />
              </div>
            </div>
          </div> */}
          <iframe
            src="https://v2-embednotion.com/1e434c2c07ee80419a4cf725da78c7cc" className="w-full h-screen"
            title="Notion Page Embed"
          />

          {/* {iframe} */}

        </main>
  )
}