import React from 'react';
import { ListingCard } from './ListingCard';
import { useListingStore } from '../../store/listingStore';

export const ListingGrid: React.FC = () => {
  const filteredListings = useListingStore((state) => state.getFilteredListings());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredListings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};