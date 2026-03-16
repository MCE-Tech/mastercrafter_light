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
        musicianType: ["Singer"],
        performanceType: ["Live"],
        genre: [],
        craftScore: -1,
        lastModified: "2025-12-10",
        verificationDate: "2025-09-15",
        youtubeVideo : ["is54w6i1jJ8?si=UlgUgITO0C_3SgJ7"],
        introduction: (
            <>
                <h2>About Aishwarya Sharma</h2>
                <p>
                    Aishwarya is a celebrated vocalist with a passion for both
                    classical and contemporary music. Her performances captivate
                    audiences and leave a lasting impression.
                </p>
            </>
        ),
        whyBook: [
            "Award-winning performer with 10+ years of experience",
            "Engages audiences of all ages",
            "Versatile repertoire: Bollywood, classical, and more",
            "Professional, punctual, and easy to work with",
        ],
    },
    {
        id: 2,
        name: "Gaurang Sahu",
        slug: "gaurang-sahu",
        image: gaurangSahu,
        artistType: "Musician",
        tags: ["Guitarist", "Composer", "Live"],
        bio: "Gaurang is a talented guitarist and composer, known for his energetic live performances and original compositions.",
        location: "Delhi, India",
        language: ["Hindi", "English"],
        craftType: "Instrumental Music",
        musicianType: ["Guitarist", "Composer"],
        performanceType: ["Live", "Studio"],
        genre: ["Rock", "Fusion"],
        craftScore: 92,
        lastModified: "2025-10-11",
        verificationDate: "2025-09-20",
        youtubeVideo : ["6ORS2teb9r4"],
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
    ]
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
    ]
  },
];

export default artistsData;
