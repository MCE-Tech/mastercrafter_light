import {apiClient} from "./client.js";

export interface Artist {
  id: number;
  artistName: string;
  slug: string;
  image: string;
  craftTypeName: string;
  // Allowed null since the API explicitly returns null for these
  defaultTagValues: String[] | null; 
  craftScore: number | null;
  languages: string[] | null;
  // Added the missing field from your API response
  isActive: boolean | null; 
}

export const getArtistList = async (): Promise<Artist[]> => {
  // Good practice to type the return promise explicitly
  const response = await apiClient.get<Artist[]>("/artists");
  console.log("Fetched artists:", response.data); 
  return response.data;
};