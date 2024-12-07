import React from 'react';
import { useCartStore } from '../../store/cartStore';

export const OrderSummary: React.FC = () => {
  const { items } = useCartStore();
  const subtotal = items.reduce(
    (total, item) => total + item.lightsaber.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.lightsaber.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.lightsaber.name}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="font-medium">
              ${(item.lightsaber.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      
      <div className="space-y-4 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};