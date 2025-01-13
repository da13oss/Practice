import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Video } from '../types';

// VideoPlayer component that handles video playback and controls
interface VideoPlayerProps {
  video: Video;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        src={video.url}
        className="w-full rounded-lg shadow-lg"
        poster={video.thumbnail}
        onClick={togglePlay}
      />
      
      {/* Video controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between text-white">
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMute}
              className="p-2 hover:bg-white/20 rounded-full transition"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-white/20 rounded-full transition"
            >
              <Maximize size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}