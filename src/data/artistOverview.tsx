// Example artist data (replace with real data or props/fetch in future)
import anchorAishwarya from "../assets/images/anchor-aishwarya.png";
import gaurangSahu from "../assets/images/gaurang-sahu.png";
import humraag from "../assets/images/humraag.png";
import rishabhSighBisht from "../assets/images/rishabh-singh-bisht.jpg";
import prateekAggarwal from "../assets/images/prateek-aggarwal.jpg";

export const ARTISTS: any[] = [
  {
    id: 2,
    name: "Gaurang Sahu",
    slug: "gaurang-sahu",
    image: gaurangSahu,
    artistType: "Musician/Instrumentalist",
    tags: ["Flutist","Guitarist", "Composer"],
    score: 92,
  },
  {
    id: 3,
    name: "Humraag",
    slug: "humraag",
    image: humraag,
    artistType: "Musician/Band",
    tags: ["Guitarist", "Singer", "Band"],
    score: 88,
  },
  {
    id: 4,
    name: "Rishabh Singh Bisht",
    slug: "rishabh-singh-bisht",
    image: rishabhSighBisht,
    artistType: "Musician/Band",
    tags: ["Singer", "Guitarist"],
    score: 80,
  },
  {
    id: 5,
    name: "Prateek Aggarwal",
    slug: "prateek-aggarwal",
    image: prateekAggarwal,
    artistType: "Musician/Band",
    tags: ["Singer", "Guitarist"],
    score: 68,
  },
  {
    id: 1,
    name: "Aishwarya Sharma",
    slug: "aishwarya-sharma",
    image: anchorAishwarya,
    artistType: "Anchor",
    tags: ["Host", "Anchor", "Events"],
    score: 0,
  },
  // Add more artists as needed
];