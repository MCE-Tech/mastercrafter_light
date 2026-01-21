// Centralized artist data for the site. Add new artists here.
// This simulates a JSON import, but allows for JSX in introduction fields.

import anchorAishwarya from "../assets/images/anchor-aishwarya.png";
import gaurangSahu from "../assets/images/gaurang-sahu.png";
import humraag from "../assets/images/humraag.png";

const artistsData = [
  {
    id: 1,
    name: "Aishwarya Sharma",
    slug: "aishwarya-sharma",
    image: anchorAishwarya,
    isMusician: true,
    tags: ["Vocalist", "Performer", "Indie"],
    bio: "Aishwarya is a versatile artist known for her soulful voice and engaging stage presence.",
    location: "Mumbai, India",
    language: ["Hindi", "English"],
    craftType: "Vocal Music",
    musicianType: ["Singer"],
    performanceType: ["Live", "Virtual"],
    genre: ["Bollywood", "Classical"],
    craftScore: 87,
    lastModified: "2025-10-10",
    verificationDate: "2025-09-15",
    introduction: (
      <>
        <h2>About Aishwarya Sharma</h2>
        <p>Aishwarya is a celebrated vocalist with a passion for both classical and contemporary music. Her performances captivate audiences and leave a lasting impression.</p>
      </>
    ),
    whyBook: [
      "Award-winning performer with 10+ years of experience",
      "Engages audiences of all ages",
      "Versatile repertoire: Bollywood, classical, and more",
      "Professional, punctual, and easy to work with"
    ]
  },
  {
    id: 2,
    name: "Gaurang Sahu",
    slug: "gaurang-sahu",
  image: gaurangSahu,
    isMusician: true,
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
    introduction: (
      <>
        <p><b>Gaurang Sahu</b> is a self-taught <b>Indian flute artist</b> and multi-instrumentalist from Delhi with over 15 years of live performance experience. Famous for his <b>flute beatboxing</b> and rhythm-based fusion.<br/>
        He has performed across <b>India and internationally</b> — from <b>Beijing</b> and <b>Xinxiang</b> to the grand stage of the <b>World Cultural Festival</b> alongside 1,000+ musicians. His talent has graced top venues, TEDx stages, weddings, and VIP gatherings for icons like <b>Padma Bhushan Pt. Debu Chaudhary</b> and <b>Governor Satya Pal Malik</b>.</p>
      </>
    ),
    whyBook: [
      "Versatile live sets using flute, guitar, cajon, didgeridoo, beatboxing",
      "Performs at weddings, cafés, restaurants, corporates, festivals",
      "Delivers custom performances, production, and sound design",
      "Passionate educator — has taught the flute to over 20 students"
    ]
  },
  {
    id: 3,
    name: "Humraag",
    slug: "humraag",
  image: humraag,
    isMusician: false,
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
    introduction: (
      <>
        <h2>About Humraag</h2>
        <p>Humraag is a sought-after anchor and host, known for making every event memorable with wit and charm.</p>
      </>
    ),
    whyBook: [
      "Experienced in hosting large-scale events",
      "Fluent in multiple languages",
      "Engages audiences with humor and professionalism",
      "Adaptable to any event format"
    ]
  },
];

export default artistsData;
