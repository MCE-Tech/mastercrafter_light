import { useEffect, useState } from "react";
import { Artist, getArtistList } from "../api/artistList.api";

export const useArtistList = () => {
  const [artists, setArtists] = useState([] as Artist[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArtistList();
  }, []);

  const fetchArtistList = async () => {
    try {
      setLoading(true);

      const data = await getArtistList();

      setArtists(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch artists. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    artists,
    loading,
    error,
    refetch: fetchArtistList,
  };
};