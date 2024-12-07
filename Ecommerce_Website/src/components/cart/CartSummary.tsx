import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

interface CartSummaryProps {
  subtotal: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  const navigate = useNavigate();
  const shipping = 9.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
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
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button
          className="w-full"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};