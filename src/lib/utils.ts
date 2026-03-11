import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// utility for generating a normalized YouTube embed URL from a variety of
// inputs (short links, watch URLs, playlist IDs, etc.).  This keeps the logic
// out of the page component and makes it reusable elsewhere.
export function getYouTubeEmbedSrc(raw?: string) {
  if (!raw) return "";
  const value = String(raw).trim();
  const listMatch = value.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (listMatch) return `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}`;
  const shortMatch = value.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const watchMatch = value.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  if (/^PL[a-zA-Z0-9_-]+$/.test(value)) return `https://www.youtube.com/embed/videoseries?list=${value}`;
  return `https://www.youtube.com/embed/${value}`;
}
