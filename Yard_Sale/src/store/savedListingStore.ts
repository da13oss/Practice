import { create } from 'zustand';
import { Listing } from '../types';

interface SavedListingStore {
  savedListings: string[];
  toggleSaved: (listingId: string) => void;
  isSaved: (listingId: string) => boolean;
  getSavedListings: () => string[];
}

export const useSavedListingStore = create<SavedListingStore>((set, get) => ({
  savedListings: [],

  toggleSaved: (listingId: string) => {
    set((state) => {
      const isSaved = state.savedListings.includes(listingId);
      return {
        savedListings: isSaved
          ? state.savedListings.filter((id) => id !== listingId)
          : [...state.savedListings, listingId],
      };
    });
  },

  isSaved: (listingId: string) => {
    return get().savedListings.includes(listingId);
  },

  getSavedListings: () => {
    return get().savedListings;
  },
}));