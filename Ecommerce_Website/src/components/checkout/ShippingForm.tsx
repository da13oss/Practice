import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface ShippingFormProps {
  form: UseFormReturn<any>;
}

export const ShippingForm: React.FC<ShippingFormProps> = ({ form }) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register('shipping.fullName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.fullName.message}</p>
          )}
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            {...register('shipping.streetAddress')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.streetAddress && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.streetAddress.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            {...register('shipping.city')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.city && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.city.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            {...register('shipping.state')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.state && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.state.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            {...register('shipping.postalCode')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.postalCode.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            {...register('shipping.country')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.shipping?.country && (
            <p className="mt-1 text-sm text-red-600">{errors.shipping.country.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};