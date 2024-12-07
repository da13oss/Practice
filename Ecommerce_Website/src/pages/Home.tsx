import React from 'react';
import { Link } from 'react-router-dom';
import { Swords } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <Swords className="h-20 w-20 mx-auto text-blue-400 mb-8" />
          <h1 className="text-5xl font-bold mb-6">
            Craft Your Legacy with Premium Lightsabers
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted lightsabers, each one unique and
            customizable to match your path in the Force.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/shop">
              <Button size="lg">Browse Collection</Button>
            </Link>
            <Link to="/customize">
              <Button variant="outline" size="lg">
                Customize Your Saber
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Premium Materials</h3>
            <p className="text-gray-300">
              Crafted from the finest materials across the galaxy
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Custom Crystals</h3>
            <p className="text-gray-300">
              Choose from a variety of kyber crystals for your perfect blade
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Lifetime Warranty</h3>
            <p className="text-gray-300">
              Your lightsaber is protected by our galactic guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};