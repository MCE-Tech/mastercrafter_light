// Centralized artist data for the site. Add new artists here.
// This simulates a JSON import, but allows for JSX in introduction fields.

import { Artist } from "@/types/Artist";
import anchorAishwarya from "../assets/images/anchor-aishwarya.png";
import gaurangSahu from "../assets/images/gaurang-sahu.png";
import humraag from "../assets/images/humraag.png";
import rishabhSighBisht from "../assets/images/rishabh-singh-bisht.jpg";
import prateekAggarwal from "../assets/images/prateek-aggarwal.jpg";
import vickyMelophile from "../assets/images/vickyMelophile.jpeg";

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
        instruments: [],
        performanceType: ["Live"],
        genre: [],
        craftScore: -1,
        lastModified: "2025-12-10",
        verificationDate: "",
        youtubeVideo : ["is54w6i1jJ8","Tn1N7blwpm8","elFOFbgiJwY"],
        introduction: (
            <>
                <p>
                    Anchor Aishwarya brings over 3 years of live anchoring experience, 
                    known for her vibrant stage presence and natural flair for connecting with audiences.
                    Having hosted events for reputed institutions like SEBI, NCDEX, and multiple college farewells, 
                    she transforms every stage into an engaging and memorable experience.
                </p>
            </>
        ),
        whyBook: [
            "Experienced in hosting large-scale events",
            "Fluent in multiple languages",
            "Engages audiences with humor and professionalism",
            "Adaptable to any event format",        ],
        youtubePlaylist:"PLoganb-r1cCJkuRINeb_ze9WdUyC62PfE"
    },
    {
        id: 2,
        name: "Gaurang Sahu",
        slug: "gaurang-sahu",
        image: gaurangSahu,
        instruments: ["Flute", "Guitar", "Cajon", "Didgeridoo"],
        artistType: "Musician/Instrumentalist",
        tags: ["Flutist", "Guitarist", "Multi-instrumentalist"],
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
        instruments: [],
        artistType: "Musician/Band",
        tags: ["Devotional","Sufi","Bollywood","+4"],
        bio: "Humraag is a charismatic host and anchor, bringing energy and professionalism to every event.",
        location: "Delhi NCR",
        language: ["Hindi", "English"],
        craftType: "Musician/Band",
        musicianType: ["Singer", "Guitarist","Drummer"],
        performanceType: ["Solo","Duo","Trio","Band"],
        genre: ["Devotional","Sufi","Bollywood","Patriotric","Fold", "Ghazal","Light Music"],
        craftScore: 88.05,
        lastModified: "2025-09-28",
        verificationDate: "2025-05-05",
        youtubeVideo : ["RKcKeXMG-EM","b5b6lIhIb48","_GXXqDCX5NQ"],
        introduction: (
            <>
                <p>
                  Humraag is a passionate <b>Hindi fusion band</b> with over <b>5 years of live performance experience</b>, rooted in Delhi NCR and known for <b>heartfelt, crowd-aware performances</b> blending vocals, guitar, keys, percussion, and drums.
                  <br/>
                  Inspired by <b>Mohammed Rafi</b> and <b>Ghulam Ali</b>, the band brings old-world soul with a contemporary touch. Their performances span <b>festivals, cafés, cultural events,</b> and celebrations across <b>Lucknow, Agra, Shimla,</b> and beyond.
                </p>
            </>
        ),
        bandLineup: [
            { role: "Lead Vocalist & Guitaris", name: "Himanshu Rana" },
            { role: "Guitarist & Backing Vocals", name: "Faizan" },
            { role: "Keyboardist", name: "Chirodeep" },
            { role: "Drummer & Percussionist", name: "Gaurav" },
        ],
        whyBook: [
            "Strong synergy and audience-first approach",
            "Versatile sound with Hindi fusion and emotional depth",
            "Experienced performers across festivals, cafés, and cultural events",
        ],
        youtubePlaylist:"PLoganb-r1cCKIUSGgRtPanNVvyJnWKrG9"
    },
    {
    id: 4,
    name: "Rishabh Singh Bisht",
    slug: "rishabh-singh-bisht",
    image: rishabhSighBisht,
    instruments: [],
    artistType: "Musician/Band",
    tags: ["Singer", "Guitarist"],
    bio: "Singer and guitarist performing Hindi and English repertoire across Bollywood and light music genres.",
    location: "Delhi NCR",
    language: ["English", "Hindi"],
    craftType: "Musicians / Band",
    musicianType: ["Singer", "Guitarist"],
    performanceType: ["Solo", "Duo"],
    genre: ["Bollywood Covers", "Light Music", "Semi Classical"],
    craftScore: 80.03,
    lastModified: "2025-09-28",
    verificationDate: "2025-05-05",
    youtubeVideo : ["2UxOJGsqXzQ","0GkSKB3iXVU","KK8K4obh4U0"],
    introduction: (
      <>
        <p>
          Rishabh delivers energetic yet emotionally resonant performances tailored for corporate evenings and private events.
        </p>
      </>
    ),
    whyBook: [
      "Classically trained artist with a deep yet versatile sound",
      "Engaging performer across college fests, cafés, and private events",
      "Connects with diverse audiences, from youth to seasoned music lovers"
    ],
    youtubePlaylist:"PLoganb-r1cCJnNsqtQhbYelmWoeknp8YT"
  },
  {
    id: 5,
    name: "Prateek Aggarwal",
    slug: "prateek-aggarwal",
    image: prateekAggarwal,
    instruments: [],
    artistType: "Musician/Band",
    tags: ["Singer", "Guitarist", "Ghazal", "Sufi"],
    bio: "Singer-guitarist performing Bollywood, Ghazal, and Sufi",
    location: "Delhi NCR",
    language: ["English", "Hindi", "Rajasthani"],
    craftType: "Musicians / Band",
    musicianType: ["Singer", "Guitarist"],
    performanceType: ["Solo", "Duo", "Trio"],
    youtubeVideo : ["CVrc_lk_lfE","wYuGLRekydM","iewNNzdP2ZU"],
    genre: [
      "Bollywood Covers",
      "Ghazal",
      "Devotional",
    ],
    craftScore: 68.85,
    lastModified: "2025-09-27T19:10:00",
    verificationDate: "2025-05-05",
    introduction: (
      <>
        <p>
          Prateek Aggarwal is a Delhi NCR-based vocalist and guitarist with over 10 years of live performance experience, known for his soothing semi-classical renditions blended with a contemporary touch.
        </p>
      </>
    ),
    whyBook: [
      "Soulful vocals with a semi-classical twist",
      "Ideal for acoustic, ambient, and serene sets",
      "Trained musician with a refined, modern style"
    ],
    youtubePlaylist:"PLoganb-r1cCJ2CDzCqnL4xYVpDbK1NIjr"
  },
  {
    id: 6,
    name: "Vicky Melophile",
    slug: "vicky-melophile",
    image: vickyMelophile,
    instruments: ["Guitar"],
    artistType: "Musician/Singer",
    tags: ["Bollywood Covers",
      "Light Music",
      "Folk","+3"],
    bio: "Singer-guitarist performing Bollywood, Ghazal, and Sufi",
    location: "Rishikesh, Uttrakhand",
    language: ["English", "Hindi"],
    craftType: "Musicians/Singer",
    musicianType: ["Singer", "Guitarist"],
    performanceType: ["Solo", "Duo", "Trio","Band"],
    youtubeVideo : ["p09YgAQQFyE","vvohAYVAjsk","6ePBkWSa2IU"],
    genre: [
      "Bollywood Covers",
      "Light Music",
      "Folk",
      "Sufi",
      "Devotional",
      "Semi Classical",
    ],
    craftScore: -1,
    lastModified: "2025-09-27T19:10:00",
    verificationDate: "2025-05-05",
    introduction: (
      <>
        <p>
          <b>Vicky Melophile</b> is a soulful solo acoustic artist with over <b>6 years of live experience</b>, known for expressive vocals, skilled guitar playing, and natural audience interaction. He primarily performs across <b>Rishikesh and Dehradun</b>.
          <br/>
          His repertoire spans <b>Bollywood, light music, Sufi/Folk, devotional, and semi-classical music</b> in Hindi and English. A regular at goSTOPS, he creates intimate, engaging experiences for diverse events and audiences.
        </p>
      </>
    ),
    whyBook: [
      "Soulful vocals & expressive acoustic guitar",
      "Strong audience connection with an engaging performance style",
      "Versatile repertoire suited for cafés, weddings, corporates, hotels, private events & festivals"
    ],
    youtubePlaylist:"PLWewBYm-PopY"
  }
];

export default artistsData;
