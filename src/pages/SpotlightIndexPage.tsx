import { SpotlightHero } from "./spotlight-hero"
import { SpotlightHowItWorks } from "./spotlight-how-it-works"
import { SpotlightCraftScore } from "./spotlight-craft-score"
import { SpotlightForWho } from "./spotlight-for-who"
import { SpotlightCTA } from "./spotlight-cta"

export default function SpotlightIndexPage() {
  return (
    <main className="flex-1">
      <SpotlightHero />
      <SpotlightHowItWorks />
      <SpotlightCraftScore />
      <SpotlightForWho />
      <SpotlightCTA />
    </main>
  )
}
