import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { Listing } from '../../types';
import { formatDistance } from '../../utils/dateUtils';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link to={`/listing/${listing.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="object-cover w-full h-48"
          />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
            ${listing.price}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{listing.title}</h3>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{listing.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDistance(listing.createdAt)}</span>
          </div>
          
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {listing.meetupPreference}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};