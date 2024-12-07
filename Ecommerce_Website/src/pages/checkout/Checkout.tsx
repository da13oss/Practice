import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/ui/Button';
import { ShippingForm } from '../../components/checkout/ShippingForm';
import { PaymentForm } from '../../components/checkout/PaymentForm';
import { OrderSummary } from '../../components/checkout/OrderSummary';

const checkoutSchema = z.object({
  shipping: z.object({
    fullName: z.string().min(2, 'Full name is required'),
    streetAddress: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    postalCode: z.string().min(5, 'Valid postal code is required'),
    country: z.string().min(2, 'Country is required'),
  }),
  payment: z.object({
    cardNumber: z.string().regex(/^\d{16}$/, 'Invalid card number'),
    expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'Invalid expiry date'),
    cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
    cardholderName: z.string().min(2, 'Cardholder name is required'),
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      // Simulate API call to process payment and create order
      await new Promise(resolve => setTimeout(resolve, 1500));
      clearCart();
      navigate('/account/orders');
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ShippingForm form={form} />
              <PaymentForm form={form} />
              
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/cart')}
                >
                  Back to Cart
                </Button>
                <Button type="submit">
                  Place Order
                </Button>
              </div>
            </div>
            
            <OrderSummary />
          </div>
        </form>
      </div>
    </div>
  );
};