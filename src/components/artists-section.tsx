"use client"

import { useState, useRef, useEffect } from "react"
import { ArtistCard } from "./artist-card"
import { Button } from "./ui/button"
import { Search } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/css/slickSlider.css"
import {images} from "../assets/images/"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  centerMode: boolean;
  centerPadding: string;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }[];
}

type LocationState = {
  ourArtistPage: boolean;
};

const ARTISTS = [
  {
    id: 1,
    name: "Gaurang Sahu",
    image: `${images.gaurangSahuProfileImg}`,
    category: "Musicians / Band",
    tags: ["Flutist", "Guitarist", "Cajon", "Beatbox"],
    rating: 92.4,
  },
  {
    id: 2,
    name: "Prateek Aggarwal",
    image: `${images.prateekAggarwalProfileImg}`,
    category: "Musicians / Band",
    tags: ["Singer / Guitarist"],
    rating: 68.8,
  },
  {
    id: 3,
    name: "Rishabh Singh Bisht",
    image: `${images.rishabhSinghBishtProfileImg}`,
    category: "Musicians / Band",
    tags: ["Singer / Guitarist"],
    rating: 80.0,
  },
  {
    id: 4,
    name: "Humraag",
    image: `${images.humraagProfileImg}`,
    category: "Musicians / Band",
    tags: ["Singer / Guitarist", "Guitarist", "Singer", "Cajon", "Drums", "Percussions"],
    rating: 88.0,
  },
  {
    id: 5,
    name: "Anchor Aishwarya",
    image: `${images.anchorAishwariyaProfileImg}`,
    category: "Anchor",
    tags: ["Anchor"],
    rating: 85.5,
  },
]

export function ArtistsSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showInfinite, setShowInfinite] = useState(true)
  const sliderRef = useRef<Slider | null>(null);
  const navigate = useNavigate();

  const filteredArtists = ARTISTS.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleArtistClick = (id: number) => {
    console.log(`Artist ${id} clicked`)
    // Navigate to artist page in a real app
    // router.push(`/artists/${id}`)
  }
  

  const settings: SliderSettings = {
    dots: true,
    infinite: showInfinite,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // below 768px → show 2
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setShowInfinite(false);
    } else {
      setShowInfinite(true);
    }
  }, [searchQuery]);

  const location = useLocation();
  const state = location.state as LocationState;
  const isOnOurArtistPage = state?.ourArtistPage ?? false;

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className={`space-y-2 w-full ${!isOnOurArtistPage ? "text-center" : ""}`}>
            <h2 className={`discover-heading text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg `}>
              Discover Our Talents
            </h2>
            <div className="mx-auto mt-2 mb-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80"></div>
            <p className="text-lg text-muted-foreground">
              Find the perfect artist for your next event
            </p>
          </div>

          {isOnOurArtistPage && (
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search artists, genres, instruments..."
                  className="pl-10 pr-4 py-2.5 w-full md:w-[300px] rounded-lg border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
          
        </div>

        {/* Artists Grid */}
        { isOnOurArtistPage && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredArtists.map((artist) => (
              <div 
                key={artist.id}
                className="transform transition-all duration-200 hover:scale-105"
              >
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                  classlist=""
                  category={artist.category}
                  tags={artist.tags}
                  rating={artist.rating}
                  onClick={() => handleArtistClick(artist.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* <div className="relative sm:flex sm:justify-center"> */}
          {/* <button 
              type="button" 
              className="absolute bg-gray-200 font-extrabold text-xl rounded-full text-gray-500 top-1/2 left-8 -translate-y-1/2 px-2  pb-1"
              onClick={() => sliderRef?.current?.slickPrev()}
            >
                &lt;
            </button>
            <button 
              type="button" 
              className="absolute bg-gray-200 font-extrabold text-xl rounded-full text-gray-500 top-1/2 right-8 -translate-y-1/2 px-2 pb-1"
              onClick={() => sliderRef?.current?.slickNext()}
            >
                &gt;
            </button> */}

        {!isOnOurArtistPage && (
          <div>
            <div className="">
              <Slider ref={sliderRef} {...settings} >
                {filteredArtists.map((artist) => (
                  <div 
                    key={artist.id}
                    className="transform transition-all duration-200 hover:scale-100"
                  >
                    <ArtistCard
                      name={artist.name}
                      image={artist.image}
                      classlist="m-8"
                      category={artist.category}
                      tags={artist.tags}
                      rating={artist.rating}
                      onClick={() => handleArtistClick(artist.id)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground">No artists found matching your search.</p>
          </div>
        )}

        {/* View All Button */}
        {filteredArtists.length > 0 && (
          <div className="flex justify-center pt-8">
            <Button 
              onClick={() => {
                navigate('/our-artists', { state: { ourArtistPage: true } });
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100); // delay ensures scroll happens after route change
              }}
              className="px-8 py-3 text-base font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Artists
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
