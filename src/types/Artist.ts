export interface Artist {
    id: number;
    name: string;
    slug: string;
    image: string;
    artistType: string;
    tags: string[];
    bio: string;
    bandLineup?: { role: string; name: string }[];
    location: string;
    language: string[];
    craftType: string;
    musicianType: string[];
    performanceType: string[];
    youtubeVideo: string[];
    genre: string[];
    craftScore: number;
    lastModified: string;
    verificationDate: string;
    introduction: React.ReactNode;
    whyBook: string[];
    youtubePlaylist: string;
    instruments: string[];
}
