import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/ui/Button';
import { CartSummary } from '../../components/cart/CartSummary';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce(
    (total, item) => total + item.lightsaber.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-8">Your Cart is Empty</h1>
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {items.map((item) => (
                <div
                  key={item.lightsaber.id}
                  className="flex items-center p-6 border-b last:border-b-0"
                >
                  <img
                    src={item.lightsaber.imageUrl}
                    alt={item.lightsaber.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold">{item.lightsaber.name}</h3>
                    <p className="text-gray-600">${item.lightsaber.price}</p>
                    <div className="mt-2 flex items-center">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.lightsaber.id, parseInt(e.target.value))
                        }
                        className="rounded border-gray-300"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.lightsaber.id)}
                        className="ml-4 text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      ${(item.lightsaber.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};