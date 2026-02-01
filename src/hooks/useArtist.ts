import { useMemo } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";

interface UseArtistReturn {
    artist: (typeof artistsData)[0] | null;
    isLoading: boolean;
}

export function useArtist(): UseArtistReturn {
    const { name } = useParams<{ name: string }>();

    const artist = useMemo(
        () =>
            artistsData.find(
                (a) => a.slug.toLowerCase() === String(name).toLowerCase(),
            ) || null,
        [name],
    );

    return { artist, isLoading: false };
}
