// User related types
export interface User {
  id: string;
  email: string;
  name: string;
  address: string;
  avatar?: string;
  createdAt: Date;
}

// Authentication types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Listing related types
export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  videos?: string[];
  seller: User;
  location: string;
  meetupPreference: 'public' | 'pickup' | 'dropoff';
  createdAt: Date;
  status: 'active' | 'sold' | 'pending';
}

// Chat related types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  listingId?: string;
}

export interface ChatRoom {
  id: string;
  participants: User[];
  messages: Message[];
  listingId?: string;
}