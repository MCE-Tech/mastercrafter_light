import { useState, useEffect, RefObject } from "react";

export function useShowStickyHeader(ref: RefObject<HTMLDivElement>): boolean {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const img = ref.current.querySelector("img");
            if (!img) return;
            const imgRect = img.getBoundingClientRect();
            const headerOffset = 16 * 4;
            setShowSticky(imgRect.bottom <= headerOffset);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ref]);

    return showSticky;
}
