"use client"

import { useMemo, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Guitar, Headphones, Mic, Music, Search } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { ARTISTS as ALL_ARTISTS } from "@/data/artistOverview"

type LocationState = {
  ourArtistPage?: boolean
}

type ArtistOverview = {
  id: number
  name: string
  slug: string
  image: string
  artistType?: string
  category?: string
  tags: string[]
  score?: number
  rating?: number
}

const getArtistTypeIcon = (category: string) => {
  const normalizedCategory = category.toLowerCase()

  if (normalizedCategory.includes("anchor")) {
    return { Icon: Mic, iconClassName: "text-secondary" }
  }

  if (normalizedCategory.includes("dj")) {
    return { Icon: Headphones, iconClassName: "text-accent" }
  }

  if (normalizedCategory.includes("instrumentalist")) {
    return { Icon: Guitar, iconClassName: "text-primary" }
  }

  return { Icon: Music, iconClassName: "text-primary" }
}

const autoplayPlugin = Autoplay({
  delay: 3500,
  stopOnInteraction: false,
})

export function ArtistsSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState | undefined
  const isOnOurArtistPage = state?.ourArtistPage ?? false

  const filteredArtists = useMemo(
    () =>
      (ALL_ARTISTS as ArtistOverview[]).filter((artist) => {
        const normalizedQuery = searchQuery.toLowerCase()
        const category = artist.artistType?.toLowerCase() ?? artist.category?.toLowerCase() ?? ""

        return (
          artist.name.toLowerCase().includes(normalizedQuery) ||
          category.includes(normalizedQuery) ||
          artist.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
        )
      }),
    [searchQuery],
  )

  const renderArtistCard = (artist: ArtistOverview) => {
    const category = artist.artistType ?? artist.category ?? "Artist"
    const { Icon, iconClassName } = getArtistTypeIcon(category)

    return (
      <Link
        key={artist.id}
        to={`/artist/${artist.slug}`}
        aria-label={`View profile of ${artist.name}`}
        className="group flex h-full min-h-[24rem] flex-col rounded-[1.5rem] border border-primary/10 bg-white p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        style={{ color: "inherit" }}
      >
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <div className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 shadow-sm">
            <Icon className={`h-4 w-4 ${iconClassName}`} />
          </div>
          <img
            src={artist.image}
            alt={artist.name}
            className="h-52 w-full object-cover object-center transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-3 flex min-h-[4.5rem] flex-col justify-center gap-1 rounded-[1rem] px-3 py-2 text-center">
          <p className="mb-2 text-sm text-muted-foreground w-full">{category}</p>
          <h3 className="min-h-[2.75rem] text-xl font-bold leading-snug text-slate-900">{artist.name}</h3>
          {artist.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap justify-center gap-1">
              {artist.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-[14px] font-medium text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    )
  }

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="space-y-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className={`w-full space-y-2 ${!isOnOurArtistPage ? "text-center" : ""}`}>
            <h2 className="discover-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-lg">
              Discover Our Talents
            </h2>
            <div className="mx-auto mb-2 mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80"></div>
            <p className="text-lg text-muted-foreground">Find the perfect artist for your next event</p>
          </div>

          {isOnOurArtistPage && (
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-25 blur transition duration-200 group-hover:opacity-50"></div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search artists, genres, instruments..."
                  className="w-full rounded-lg border bg-background/50 py-2.5 pl-10 pr-4 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {filteredArtists.length > 0 ? (
          <div className="space-y-6 rounded-[1.5rem]">
            <Carousel
              data-testid="artists-row-carousel"
              className="w-full"
              opts={{ align: "start", loop: filteredArtists.length > 3 }}
              plugins={[autoplayPlugin]}
            >
              <CarouselContent className="-ml-2 md:-ml-3" data-testid="artists-row-track">
                {filteredArtists.map((artist) => (
                  <CarouselItem
                    key={artist.id}
                    data-testid="artist-row-slide"
                    className="pl-2 md:pl-3 basis-[86%] sm:basis-[64%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%]"
                  >
                    {renderArtistCard(artist)}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ) : (
          <div className="space-y-4 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted/50">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground">No artists found matching your search.</p>
          </div>
        )}

        {filteredArtists.length > 0 && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => {
                navigate("/our-artists", { state: { ourArtistPage: true } })
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }}
              className="rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              View All Artists
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}