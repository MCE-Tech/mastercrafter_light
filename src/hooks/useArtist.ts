import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";

interface UseArtistReturn {
    artist: (typeof artistsData)[0] | null;
    isLoading: boolean;
}

export function useArtist(): UseArtistReturn {
    const { name } = useParams<{ name: string }>();
    const [isLoading, setIsLoading] = React.useState(true);

    const artist = useMemo(
        () =>
            artistsData.find(
                (a) => a.slug.toLowerCase() === String(name).toLowerCase(),
            ) || null,
        [name],
    );

    // simulate fetching delay; remove when real API is wired up
    React.useEffect(() => {
        setIsLoading(true);
        const id = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(id);
    }, [artist]);

    return { artist, isLoading };
}
