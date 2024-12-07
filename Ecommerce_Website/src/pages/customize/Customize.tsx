import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swords } from 'lucide-react';
import { CustomizationForm } from '../../components/product/CustomizationForm';
import { Button } from '../../components/ui/Button';
import { LightsaberCustomization } from '../../types';
import { useCartStore } from '../../store/cartStore';

const BASE_LIGHTSABER = {
  id: 'custom-1',
  name: 'Custom Lightsaber',
  price: 499.99,
  description: 'Your personalized lightsaber, crafted to your exact specifications.',
  imageUrl: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&q=80&w=800',
  crystalColor: 'blue',
  style: 'custom',
  inStock: true,
};

export const Customize: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [preview, setPreview] = useState<LightsaberCustomization | null>(null);

  const handleCustomization = (customization: LightsaberCustomization) => {
    setPreview(customization);
  };

  const handleAddToCart = () => {
    if (preview) {
      addItem({
        ...BASE_LIGHTSABER,
        customization: preview,
        price: calculatePrice(preview),
      });
      navigate('/cart');
    }
  };

  const calculatePrice = (customization: LightsaberCustomization) => {
    let price = BASE_LIGHTSABER.price;
    
    // Add cost for premium materials
    if (customization.hiltMaterial === 'gold') price += 200;
    else if (customization.hiltMaterial === 'chrome') price += 100;
    
    // Add cost for longer blades
    price += (customization.bladeLength - 24) * 10;
    
    // Add cost for premium crystals
    if (customization.crystalType === 'synthetic') price += 150;
    else if (customization.crystalType === 'compressed') price += 250;
    
    // Add cost for inscription
    if (customization.inscription) price += 50;
    
    return price;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Swords className="h-16 w-16 mx-auto text-blue-500 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Customize Your Lightsaber</h1>
          <p className="text-xl text-gray-600">
            Create your perfect weapon by selecting from our premium customization options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <CustomizationForm onSubmit={handleCustomization} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Preview</h2>
            {preview ? (
              <div className="space-y-6">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={BASE_LIGHTSABER.imageUrl}
                    alt="Custom Lightsaber Preview"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Selected Options:</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>Hilt Material: {preview.hiltMaterial}</li>
                      <li>Blade Length: {preview.bladeLength} inches</li>
                      <li>Crystal Type: {preview.crystalType}</li>
                      {preview.inscription && (
                        <li>Inscription: {preview.inscription}</li>
                      )}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">Total Price:</span>
                      <span className="text-2xl font-bold">
                        ${calculatePrice(preview).toFixed(2)}
                      </span>
                    </div>
                    <Button onClick={handleAddToCart} className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Customize your lightsaber to see the preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};