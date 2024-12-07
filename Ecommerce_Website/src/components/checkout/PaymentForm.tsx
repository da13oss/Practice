import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreditCard } from 'lucide-react';

interface PaymentFormProps {
  form: UseFormReturn<any>;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ form }) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-6">
        <CreditCard className="h-6 w-6 text-gray-400" />
        <h2 className="text-xl font-semibold">Payment Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            {...register('payment.cardNumber')}
            placeholder="1234 5678 9012 3456"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.payment?.cardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.payment.cardNumber.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            {...register('payment.expiryDate')}
            placeholder="MM/YY"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.payment?.expiryDate && (
            <p className="mt-1 text-sm text-red-600">{errors.payment.expiryDate.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            {...register('payment.cvv')}
            type="password"
            placeholder="123"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.payment?.cvv && (
            <p className="mt-1 text-sm text-red-600">{errors.payment.cvv.message}</p>
          )}
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input
            {...register('payment.cardholderName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.payment?.cardholderName && (
            <p className="mt-1 text-sm text-red-600">{errors.payment.cardholderName.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};