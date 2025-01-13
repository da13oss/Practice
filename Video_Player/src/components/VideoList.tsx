import React from 'react';
import { Video } from '../types';

// VideoList component to display a list of available videos
interface VideoListProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  currentVideo: Video;
}

export function VideoList({ videos, onVideoSelect, currentVideo }: VideoListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Up Next</h2>
      <div className="space-y-3">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`flex gap-4 p-3 rounded-lg cursor-pointer transition ${
              currentVideo.id === video.id
                ? 'bg-indigo-50 border-indigo-200'
                : 'hover:bg-gray-50'
            }`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-40 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{video.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {video.description}
              </p>
              <span className="text-sm text-gray-500">{video.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}