import React, { useEffect, useState } from 'react';

// Add ImportMetaEnv type declaration for VITE_YT_API_KEY
declare global {
  interface ImportMetaEnv {
    VITE_YT_API_KEY?: string;
  }
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  viewCount?: number;
};

function extractPlaylistId(input: string) {
  try {
    // common patterns: list= param, embed/videoseries?list=..., plain playlist id (starts with PL)
    const listParamMatch = input.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (listParamMatch) return listParamMatch[1];

    const embedListMatch = input.match(/embed\/videoseries\?list=([a-zA-Z0-9_-]+)/);
    if (embedListMatch) return embedListMatch[1];

    // plain playlist id
    if (/^PL[a-zA-Z0-9_-]+$/.test(input)) return input;
    // if it's a full URL with list= in a different form
    if (input.includes('list=')) {
      const url = new URL(input);
      return url.searchParams.get('list') || input;
    }
  } catch (e) {
    // not a valid URL, treat as id
  }
  return input;
}

export default function PlaylistVideos({ playlist, max = 6, order = 'playlist' }: { playlist: string; max?: number; order?: 'views' | 'playlist' }) {
  const [videos, setVideos] = useState<VideoItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = (import.meta.env as any).VITE_YT_API_KEY as string | undefined;
  const playlistId = extractPlaylistId(playlist);

  useEffect(() => {
    let cancelled = false;
    async function fetchVideos() {
      setLoading(true);
      setError(null);
      try {
        if (API_KEY) {
          // 1) fetch playlist items to collect videoIds (API key path)
          const itemsRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${encodeURIComponent(
              playlistId
            )}&maxResults=50&key=${API_KEY}`
          );
          const itemsJson = await itemsRes.json();
          const ids: string[] = (itemsJson.items || [])
            .map((it: any) => it.snippet.resourceId?.videoId)
            .filter(Boolean);

          if (!ids.length) {
            setVideos([]);
            return;
          }

          // 2) fetch video statistics
          const chunk = ids.slice(0, 50).join(',');
          const vidRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${encodeURIComponent(
              chunk
            )}&key=${API_KEY}`
          );
          const vidJson = await vidRes.json();
          const videoMap: Record<string, VideoItem> = {};
          (vidJson.items || []).forEach((v: any) => {
            videoMap[v.id] = {
              id: v.id,
              title: v.snippet.title,
              thumbnail: v.snippet.thumbnails?.medium?.url || v.snippet.thumbnails?.default?.url || '',
              viewCount: parseInt(v.statistics?.viewCount || '0', 10),
            };
          });

          if (order === 'playlist') {
            const ordered = ids.slice(0, max).map((id) => videoMap[id]).filter(Boolean) as VideoItem[];
            if (!cancelled) setVideos(ordered);
          } else {
            const parsed: VideoItem[] = Object.values(videoMap);
            parsed.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
            if (!cancelled) setVideos(parsed.slice(0, max));
          }
        } else {
          // Fallback: try to fetch public playlist HTML and extract video IDs (best-effort, may be blocked by CORS)
          try {
            const resp = await fetch(`https://www.youtube.com/playlist?list=${encodeURIComponent(playlistId)}`);
            const html = await resp.text();
            // Match watch?v=VIDEOID occurrences
            const matches = Array.from(html.matchAll(/watch\\?v=([a-zA-Z0-9_-]{11})/g)).map((m) => m[1]);
            const unique = Array.from(new Set(matches));
            if (unique.length) {
              const parsed = unique.slice(0, max).map((id) => ({
                id,
                title: '',
                thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
              }));
              if (!cancelled) setVideos(parsed);
              return;
            }
            // if parsing failed, fall back to embedded playlist
            if (!cancelled) setVideos(null);
          } catch (e) {
            // CORS or network error - fall back to embedded playlist
            if (!cancelled) setVideos(null);
          }
        }
      } catch (err: any) {
        if (!cancelled) setError(err?.message || 'Failed to load playlist');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchVideos();
    return () => {
      cancelled = true;
    };
  }, [playlistId, API_KEY, max, order]);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Most viewed from playlist</h3>
      {error && <div className="text-sm text-red-600">{error}</div>}

      {loading ? (
        <div className="text-sm text-muted-foreground">Loading videos…</div>
      ) : videos === null ? (
        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
            <iframe
              title="YouTube Playlist"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-sm text-muted-foreground">No videos found in the playlist.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded overflow-hidden shadow bg-white">
      {playing ? (
        <div className="aspect-video bg-black">
          <iframe
            title={video.title || video.id}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="relative w-full aspect-video bg-black bg-center bg-cover"
          style={{ backgroundImage: `url('${video.thumbnail}')` }}
          aria-label={`Play ${video.title || 'video'}`}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <svg className="w-14 h-14 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
      <div className="p-3">
        <div className="font-semibold text-sm mb-1">{video.title || 'Video'}</div>
        <div className="text-xs text-muted-foreground">{(video.viewCount || 0).toLocaleString()} views</div>
      </div>
    </div>
  );
}
