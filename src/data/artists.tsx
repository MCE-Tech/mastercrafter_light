// Centralized artist data for the site. Add new artists here.
// This simulates a JSON import, but allows for JSX in introduction fields.

import { Artist } from "@/types/Artist";
import anchorAishwarya from "../assets/images/anchor-aishwarya.png";
import gaurangSahu from "../assets/images/gaurang-sahu.png";
import humraag from "../assets/images/humraag.png";
import rishabhSighBisht from "../assets/images/rishabh-singh-bisht.jpg";
import prateekAggarwal from "../assets/images/prateek-aggarwal.jpg";

const artistsData: Artist[] = [
    {
        id: 1,
        name: "Aishwarya Sharma",
        slug: "aishwarya-sharma",
        image: anchorAishwarya,
        artistType: "Anchor",
        tags: ["Anchor", "Host", "Events"],
        bio: "Aishwarya is a versatile artist known for her soulful voice and engaging stage presence.",
        location: "Delhi NCR",
        language: ["Hindi", "English"],
        craftType: "Anchor",
        musicianType: [],
        performanceType: ["Live"],
        genre: [],
        craftScore: -1,
        lastModified: "2025-12-10",
        verificationDate: "2025-09-15",
        youtubeVideo : ["is54w6i1jJ8","Tn1N7blwpm8","elFOFbgiJwY"],
        introduction: (
            <>
                <h2>About Aishwarya Sharma</h2>
                <p>
                    Anchor Aishwarya brings over 3 years of live anchoring experience, 
                    known for her vibrant stage presence and natural flair for connecting with audiences.
                    Having hosted events for reputed institutions like SEBI, NCDEX, and multiple college farewells, 
                    she transforms every stage into an engaging and memorable experience.
                </p>
            </>
        ),
        whyBook: [
            "Skilled in live audience interaction and energetic crowd work",
            "Experience with corporate, academic, and social events",
            "Passionate anchor ready to bring spark and spontaneity to your event",
        ],
        youtubePlaylist:"PLoganb-r1cCJkuRINeb_ze9WdUyC62PfE"
    },
    {
        id: 2,
        name: "Gaurang Sahu",
        slug: "gaurang-sahu",
        image: gaurangSahu,
        artistType: "Musician",
        tags: ["Guitarist", "Flutist", "Multi-instrumentalist"],
        bio: "Gaurang is a talented guitarist and composer, known for his energetic live performances and original compositions.",
        location: "Delhi, India",
        language: ["Hindi", "English"],
        craftType: "Instrumental Music",
        musicianType: ["Guitarist", "Flutist", "Multi-instrumentalist"],
        performanceType: ["Live", "Studio"],
        genre: ["Rock", "Fusion"],
        craftScore: 92.41,
        lastModified: "2025-09-28",
        verificationDate: "2025-05-05",
        youtubeVideo : ["6ORS2teb9r4","8YnWBq-C5fA","JTMHOFf8_Ns"],
        youtubePlaylist : "PLoganb-r1cCIwFSPzrkDltOWCzQiX4ScB",
        introduction: (
            <p>
              <b>Gaurang Sahu</b> is a self-taught <b>Indian flute artist</b> and 
              multi-instrumentalist from Delhi with 15+ years of live performance experience, 
              known for his <b>flute beatboxing</b> and rhythm-driven fusion.
              <br />
              He has performed across <b>India and internationally</b> — from 
              <b>Beijing</b> and <b>Xinxiang</b> to the <b>World Cultural Festival</b> 
              alongside 1,000+ musicians.
            </p>
        ),
        whyBook: [
            "Versatile live sets using flute, guitar, cajon, didgeridoo, beatboxing",
            "Performs at weddings, cafés, restaurants, corporates, festivals",
            "Delivers custom performances, production, and sound design",
            // "Passionate educator — has taught the flute to over 20 students",
        ],
    },
    {
        id: 3,
        name: "Humraag",
        slug: "humraag",
        image: humraag,
        artistType: "Performer",
        tags: ["Host", "Anchor", "Events"],
        bio: "Humraag is a charismatic host and anchor, bringing energy and professionalism to every event.",
        location: "Bangalore, India",
        language: ["Hindi", "English", "Kannada"],
        craftType: "Anchoring",
        musicianType: [],
        performanceType: ["Live", "Corporate"],
        genre: ["Events", "Shows"],
        craftScore: 78,
        lastModified: "2025-10-12",
        verificationDate: "2025-09-25",
        youtubeVideo : ["83xk79cTFWw"],
        introduction: (
            <>
                <h2>About Humraag</h2>
                <p>
                    Humraag is a sought-after anchor and host, known for making
                    every event memorable with wit and charm.
                </p>
            </>
        ),
        whyBook: [
            "Experienced in hosting large-scale events",
            "Fluent in multiple languages",
            "Engages audiences with humor and professionalism",
            "Adaptable to any event format",
        ],
        youtubePlaylist:""
    },
    {
    id: 4,
    name: "Rishabh Singh Bisht",
    slug: "rishabh-singh-bisht",
    image: rishabhSighBisht,
    artistType: "Musician",
    tags: ["Singer", "Acoustic", "Bollywood"],
    bio: "Singer and guitarist performing Hindi and English repertoire across Bollywood and light music genres.",
    location: "Delhi NCR",
    language: ["English", "Hindi"],
    craftType: "Musicians / Band",
    musicianType: ["Singer", "Guitarist"],
    performanceType: ["Solo", "Duo"],
    genre: ["Bollywood Covers", "Light Music", "Semi Classical"],
    craftScore: 80.03375,
    lastModified: "2025-09-27T19:10:00",
    verificationDate: "2025-05-05",
    youtubeVideo : ["2UxOJGsqXzQ"],
    introduction: (
      <>
        <p>
          Rishabh delivers energetic yet emotionally resonant performances tailored for corporate evenings and private events.
        </p>
      </>
    ),
    whyBook: [
      "Balanced commercial and classical appeal",
      "Good adaptability across audiences",
      "Ideal for intimate and corporate settings"
    ],
    youtubePlaylist:""
  },
  {
    id: 5,
    name: "Prateek Aggarwal",
    slug: "prateek-aggarwal",
    image: prateekAggarwal,
    artistType: "Singer",
    tags: ["Singer", "Guitarist", "Ghazal", "Sufi"],
    bio: "Singer-guitarist performing Bollywood, Ghazal, and Sufi",
    location: "Delhi NCR",
    language: ["English", "Hindi", "Rajasthani"],
    craftType: "Musicians / Band",
    musicianType: ["Singer", "Guitarist"],
    performanceType: ["Solo", "Duo", "Trio"],
    youtubeVideo : ["PLoganb-r1cCJ2CDzCqnL4xYVpDbK1NIjr"],
    genre: [
      "Bollywood Covers",
      "Ghazal",
      "Devotional",
    ],
    craftScore: 68.8531,
    lastModified: "2025-09-27T19:10:00",
    verificationDate: "2025-05-05",
    introduction: (
      <>
        <p>
          Prateek blends soulful vocals with acoustic guitar to create intimate and expressive performances.
        </p>
      </>
    ),
    whyBook: [
      "Strong classical base",
      "Great for mehfil-style events",
      "Versatile language repertoire"
    ],
    youtubePlaylist:""
  },
];

export default artistsData;
