"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"


interface MusicPlayerProps {
  className?: string
}

export function MusicPlayer({ className = "" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Mock playlist
  const playlist = [
    { title: "Featured Track", artist: "Master Crafters Artist" },
    { title: "Live Performance", artist: "Master Crafters Band" },
    { title: "Acoustic Session", artist: "Master Crafters Musician" },
  ]

  const [currentTrack, setCurrentTrack] = useState(0)

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const updateDuration = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      nextTrack()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrack])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.volume = volume / 100
    setIsMuted(volume === 0)
  }, [volume])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(80)
    } else {
      setVolume(0)
    }
  }

  const handleTimeChange = (value: number[]) => {
    if (!audioRef.current) return

    const newTime = value[0]
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? playlist.length - 1 : prev - 1))
    if (isPlaying) {
      setIsPlaying(false)
      setTimeout(() => setIsPlaying(true), 100)
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev === playlist.length - 1 ? 0 : prev + 1))
    if (isPlaying) {
      setIsPlaying(false)
      setTimeout(() => setIsPlaying(true), 100)
    }
  }

  return (
    <div className={`bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md rounded-xl p-4 ${className}`}>
      <audio ref={audioRef} src={`/placeholder.mp3`} />

      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-medium">{playlist[currentTrack].title}</h4>
          <p className="text-sm text-muted-foreground">{playlist[currentTrack].artist}</p>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMute}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          <div className="w-20">
            <Slider value={[volume]} onValueChange={handleVolumeChange} max={100} step={1} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            onValueChange={handleTimeChange}
            max={duration || 100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" onClick={prevTrack}>
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={nextTrack}>
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <div className="music-wave mx-auto">
          <span style={{ height: isPlaying ? undefined : "10px" }}></span>
          <span style={{ height: isPlaying ? undefined : "10px" }}></span>
          <span style={{ height: isPlaying ? undefined : "10px" }}></span>
          <span style={{ height: isPlaying ? undefined : "10px" }}></span>
          <span style={{ height: isPlaying ? undefined : "10px" }}></span>
        </div>
      </div>
    </div>
  )
}
