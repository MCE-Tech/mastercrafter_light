"use client"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Music, Mic, Headphones, Star } from "lucide-react"
import { useState } from "react"

interface ArtistCardProps {
  name: string
  image: string
  classlist: string
  category: string
  tags: string[]
  rating?: number
  onClick?: () => void
}

export function ArtistCard({ name, image, classlist, category, tags, rating, onClick }: ArtistCardProps) {
  // Generate a deterministic gradient based on the artist's name
  const gradients = [
    "from-pink-500 to-purple-500",
    "from-blue-500 to-teal-500",
    "from-orange-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-purple-500 to-indigo-500",
  ]

  // Use the sum of character codes to determine the gradient
  const nameSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  const gradientIndex = nameSum % gradients.length
  const gradient = gradients[gradientIndex]
  const [error, setError] = useState(false)

  return (
    <Card className={`artist-card overflow-hidden cursor-pointer border-0 shadow-lg ${classlist} scale-95 h-[450px] w-[300px]`} onClick={onClick}>
      <div className="relative aspect-square overflow-hidden">
        {
          error && (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 z-10`} />
          )
        }
        <img
          src={image}
          alt={name}
          className="object-cover h-full w-full transition-transform z-0"
          onLoad={() => setError(false)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            setError(true)
            e.currentTarget.src = "/placeholder.svg?height=400&width=400";
          }}
        />
        <div className="absolute top-4 right-4 z-20">
          {category === "Musicians / Band" && (
            <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
              <Music className="h-5 w-5 text-primary" />
            </div>
          )}
          {category === "Anchor" && (
            <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
              <Mic className="h-5 w-5 text-secondary" />
            </div>
          )}
          {category === "DJ" && (
            <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
              <Headphones className="h-5 w-5 text-accent" />
            </div>
          )}
        </div>
      </div>
      <CardContent className="p-4 relative">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <h3 className="font-bold text-lg">{name}</h3>
        {rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs bg-white/10 hover:bg-white/20">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
