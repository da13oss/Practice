import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { Lightsaber } from '../types';

const SAMPLE_LIGHTSABERS: Lightsaber[] = [
  {
    id: '1',
    name: 'Defender Elite',
    price: 299.99,
    description: 'A balanced saber perfect for both defense and attack.',
    imageUrl: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&q=80&w=800',
    crystalColor: 'blue',
    style: 'classic',
    inStock: true,
  },
  {
    id: '2',
    name: 'Shadow Master',
    price: 349.99,
    description: 'Sleek design with enhanced maneuverability.',
    imageUrl: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&q=80&w=800',
    crystalColor: 'red',
    style: 'modern',
    inStock: true,
  },
];

export const Shop: React.FC = () => {
  const { addItem } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Lightsaber Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_LIGHTSABERS.map((saber) => (
            <div
              key={saber.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={saber.imageUrl}
                alt={saber.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{saber.name}</h2>
                <p className="text-gray-600 mb-4">{saber.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${saber.price}</span>
                  <Button
                    onClick={() => addItem(saber)}
                    disabled={!saber.inStock}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};