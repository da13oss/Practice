import { create } from 'zustand';
import { Listing } from '../types';

interface ListingStore {
  listings: Listing[];
  searchQuery: string;
  locationFilter: string;
  setSearchQuery: (query: string) => void;
  setLocationFilter: (location: string) => void;
  addListing: (listing: Omit<Listing, 'id' | 'createdAt'>) => void;
  getFilteredListings: () => Listing[];
}

export const useListingStore = create<ListingStore>((set, get) => ({
  listings: [],
  searchQuery: '',
  locationFilter: '',

  setSearchQuery: (query) => set({ searchQuery: query }),
  setLocationFilter: (location) => set({ locationFilter: location }),

  addListing: (listing) => {
    const newListing: Listing = {
      ...listing,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    set((state) => ({ listings: [...state.listings, newListing] }));
  },

  getFilteredListings: () => {
    const { listings, searchQuery, locationFilter } = get();
    return listings.filter((listing) => {
      const matchesSearch = !searchQuery || 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !locationFilter ||
        listing.location.toLowerCase().includes(locationFilter.toLowerCase());

      return matchesSearch && matchesLocation;
    });
  },
}));