export interface Artist {
    id: number;
    name: string;
    slug: string;
    image: string;
    isMusician: boolean;
    tags: string[];
    bio: string;
    location: string;
    language: string[];
    craftType: string;
    musicianType: string[];
    performanceType: string[];
    genre: string[];
    craftScore: number;
    lastModified: string;
    verificationDate: string;
    introduction: React.ReactNode;
    whyBook: string[];
}
