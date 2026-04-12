import { VibeVedaHero } from "./vibe-veda-hero"
import { VibeVedaAbout } from "./vibe-veda-about"
import { VibeVedaJoin } from "./vibe-veda-join"
import { VibeVedaCTA } from "./vibe-veda-cta"

export default function VibeVedaPage() {
  return (
    <main className="flex-1">
      <VibeVedaHero />
      <VibeVedaAbout />
      <VibeVedaJoin />
      <VibeVedaCTA />
    </main>
  )
}
