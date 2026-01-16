import { Header } from "../components/header";
import { AnimatedBackground } from "../components/animated-background";
import { ClientsHero } from "../components/clients-hero";
import { ClientsIntro } from "../components/clients-intro";
import { ClientsFeatures } from "../components/clients-features";
import { ClientsPlans } from "../components/clients-plans";
import { ClientsPerks } from "../components/clients-perks";
import { ClientsFAQ } from "../components/clients-faq";
import { ClientsCTA } from "../components/clients-cta";

export default function ServicesForClientsPage() {
  return (
    // <div className="flex min-h-screen flex-col">
    //   <AnimatedBackground />
    //   <Header />
    //   <main className="flex-1">
    //     <ClientsHero />
    //     <ClientsIntro />
    //     <ClientsFeatures />
    //     <ClientsPlans />
    //     <ClientsPerks />
    //     <ClientsFAQ />
    //     <ClientsCTA />
    //   </main>
    // </div>
    <main className="flex-1">
        <ClientsHero />
        <ClientsIntro />
        <ClientsFeatures />
        <ClientsPlans />
        <ClientsPerks />
        <ClientsFAQ />
        <ClientsCTA />
      </main>
  );
}