import React from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { ListingGrid } from '../components/listings/ListingGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Find Amazing Deals in Your Neighborhood
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Browse local yard sales and discover unique treasures
        </p>
      </div>

      <SearchBar />
      <ListingGrid />
    </div>
  );
};