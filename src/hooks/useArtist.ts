import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";

interface UseArtistReturn {
    artist: (typeof artistsData)[0] | null;
    isLoading: boolean;
}

export function useArtist(): UseArtistReturn {
    const { name } = useParams<{ name: string }>();
    const [isLoading, setIsLoading] = React.useState(false);

    const artist = useMemo(
        () =>
            artistsData.find(
                (a) => a.slug.toLowerCase() === String(name).toLowerCase(),
            ) || null,
        [name],
    );

    // helpful debug logs while troubleshooting direct-load issues
    if (typeof window !== "undefined") {
        // use console.debug so it doesn't clutter production logs when filtered
        // eslint-disable-next-line no-console
        console.debug("[useArtist] name=", name, "artist=", artist ? artist.slug : null, "isLoading=", isLoading);
    }

    // derive loading from `name` changes. keep a tiny debounce so
    // transitions feel smooth when switching artists client-side.
    React.useEffect(() => {
        let id: ReturnType<typeof setTimeout> | null = null;
        // if there's no name param we remain not-loading
        if (!name) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        id = setTimeout(() => setIsLoading(false), 150);

        return () => {
            if (id) clearTimeout(id);
        };
    }, [name]);

    return { artist, isLoading };
}
