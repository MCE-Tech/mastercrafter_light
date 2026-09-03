import { Guitar, Mic, Music, Star } from "lucide-react";
import drumsIcon from "../assets/icons/drums.png";

type ProfileArtist = {
  image: string;
  category?: string;
  name: string;
  subCategory?: string;
  rating?: number;
  score?: number;
  artistType?: string;
  tags?: string[];
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface ProfileCardProps {
  artist: ProfileArtist;
  ratingMax?: number;
}

const DEFAULT_RATING_MAX = 100;

const getArtistIcon = (artistType: string, tags: string[] = []) => {
  const normalizedArtistInfo = [artistType, ...tags].join(" ").toLowerCase();

  if (normalizedArtistInfo.includes("instrumentalist")) {
    return Guitar;
  }

  if (normalizedArtistInfo.includes("band")) {
    return drumsIcon;
  }

  if (normalizedArtistInfo.includes("singer")) {
    return Music;
  }

  if (
    normalizedArtistInfo.includes("anchor") ||
    normalizedArtistInfo.includes("achor")
  ) {
    return Mic;
  }

  return Music;
};

/**
 * ProfileCard
 *
 * Props:
 * - image: string (url of the cover photo)
 * - category: string (e.g. "Musicians / Band") — shown as the pink pill on the image
 * - name: string (e.g. "Rishabh Singh Bisht")
 * - subCategory: string (e.g. "Singer / Guitarist") — shown as the outlined pill
 * - rating: number (e.g. 80.0)
 * - icon: optional React component to swap out the music note badge
 */
export default function ProfileCard({ artist, ratingMax = DEFAULT_RATING_MAX }: Readonly<ProfileCardProps>) {
  const {
    image,
    name,
    icon,
    rating,
    score,
    category,
    artistType,
    subCategory,
    tags,
  } = artist;

  const displayCategory = category ?? artistType ?? "Artist";
  const displaySubCategory = subCategory ?? tags?.join(" / ") ?? artistType ?? "Performer";
  const displayRating = rating ?? score;
  const Icon = icon ?? getArtistIcon(displayCategory, tags);
  const isImageIcon = typeof Icon === "string";
  const hasDisplayRating =
    typeof displayRating === "number" && Number.isFinite(displayRating) && displayRating > 0;
  const normalizedRatingMax = ratingMax > 0 ? ratingMax : DEFAULT_RATING_MAX;
  const starFillPercentage = hasDisplayRating
    ? (Math.min(Math.max(displayRating, 0), normalizedRatingMax) / normalizedRatingMax) * 100
    : 0;

  return (
    <div className="relative transform transition-all duration-200 hover:z-10 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:border-blue-500">
    <div className="w-full max-w-sm mx-auto bg-white rounded-sm shadow-lg overflow-hidden" onClick={() => (window.location.href = `/artist/${name.toLowerCase().replace(/\s+/g, '-')}`)}>
      {/* Image section */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Icon badge, top-right */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
          {isImageIcon ? (
            <span
              aria-label="Band icon"
              role="img"
              className="h-5 w-5 bg-indigo-600"
              style={{
                WebkitMaskImage: `url(${Icon})`,
                maskImage: `url(${Icon})`,
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          ) : (
            <Icon className="w-5 h-5 text-indigo-600" strokeWidth={2.5} />
          )}
        </div>
      </div>


        
      {/* Content section */}
      <div className="p-5 h-40">
        {/* Name */}
        <h4 className="text-lg font-bold text-gray-900 mb-3">{name}</h4>
        {/* Category pill + rating row */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2 py-1 rounded-full text-[10px] text-white" style={{ backgroundColor: "#6366F1" }}>
            {displayCategory}
          </span>

          {hasDisplayRating && (
            <div className="flex items-center gap-1">
              <div className="relative h-5 w-5 shrink-0" aria-hidden="true">
                <Star className="absolute inset-0 h-5 w-5 fill-gray-200 text-gray-300" />
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${starFillPercentage}%` }}
                >
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-900">
                {displayRating.toFixed(1)} / 5
              </span>
            </div>
          )}
        </div>
        
        {/* Sub-category pill */}
        <div className="items-center pt-0 flex flex-wrap gap-2">
        {tags?.map((tag) =>(
          <span key={tag} className="inline-flex items-center rounded-full border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-[10px] bg-white/10 hover:bg-white/20">
            {tag}
          </span>
        ))}
        </div>
      </div>
    </div>
    </div>
  );
}