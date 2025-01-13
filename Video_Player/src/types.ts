// Define TypeScript interfaces for our video data
export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Comment {
  id: string;
  videoId: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
}

export interface PlaylistItem {
  id: string;
  title: string;
  videos: Video[];
}