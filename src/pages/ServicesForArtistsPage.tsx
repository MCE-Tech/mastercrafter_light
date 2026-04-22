import { Header } from "../components/header"
import { AnimatedBackground } from "../components/animated-background"
import { useEffect } from "react";
import { ServicesHero } from "../components/services-hero"
import { ArtistRoute } from "../components/artist-route"
import { MembershipPlans } from "../components/membership-plans"
import { ExtraPerks } from "../components/extra-perks"
import { FAQ } from "../components/faq"
import { ServicesCTA } from "../components/services-cta"

export default function ServicesForArtistsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    // <div className="flex min-h-screen flex-col">
    //   <AnimatedBackground />
    //   <Header />
    //   <main className="flex-1">
    //     <ServicesHero />
    //     <ArtistRoute />
    //     <MembershipPlans />
    //     <ExtraPerks />
    //     <FAQ />
    //     <ServicesCTA />
    //   </main>
    // </div>
    <main className="flex-1">
        <ServicesHero />
        <ArtistRoute />
        <MembershipPlans />
        <ExtraPerks />
        <FAQ />
        <ServicesCTA />
      </main>
  )
}
