import {apiClient} from "./client.js";

export interface ArtistDetails {
  id: number;
  name: string;
  about: string | null;
  whyChoose: string | null;
  slug: string;
  image: string;
  craftTypeName: string;
  // Allowed null since the API explicitly returns null for these
  defaultTags: String[] | null; 
  craftScore: number | null;
  tags: Record<string, string[]> | null; // assuming tags are key-value pairs, adjust if it's an array or different structure
  languages: string[] | null;
  location: string | null;
  // Added the missing field from your API response
  isActive: boolean | null; 
}

export const getArtistDetails = async (craftType: string, stageName: string): Promise<ArtistDetails> => {
  const response = await apiClient.get(`/artists/${craftType}/${stageName}`);
  return response.data;
}

