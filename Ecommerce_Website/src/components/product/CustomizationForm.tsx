import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { LightsaberCustomization } from '../../types';

const customizationSchema = z.object({
  hiltMaterial: z.enum(['chrome', 'gold', 'black', 'silver']),
  bladeLength: z.number().min(24).max(40),
  crystalType: z.enum(['kyber', 'synthetic', 'compressed']),
  inscription: z.string().max(50).optional(),
});

interface CustomizationFormProps {
  onSubmit: (customization: LightsaberCustomization) => void;
  initialValues?: LightsaberCustomization;
}

export const CustomizationForm: React.FC<CustomizationFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LightsaberCustomization>({
    resolver: zodResolver(customizationSchema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Hilt Material</label>
        <select
          {...register('hiltMaterial')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="chrome">Chrome</option>
          <option value="gold">Gold</option>
          <option value="black">Black</option>
          <option value="silver">Silver</option>
        </select>
        {errors.hiltMaterial && (
          <p className="mt-1 text-sm text-red-600">{errors.hiltMaterial.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Blade Length (inches)</label>
        <input
          type="number"
          {...register('bladeLength', { valueAsNumber: true })}
          min="24"
          max="40"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.bladeLength && (
          <p className="mt-1 text-sm text-red-600">{errors.bladeLength.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Crystal Type</label>
        <select
          {...register('crystalType')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="kyber">Kyber Crystal</option>
          <option value="synthetic">Synthetic Crystal</option>
          <option value="compressed">Compressed Crystal</option>
        </select>
        {errors.crystalType && (
          <p className="mt-1 text-sm text-red-600">{errors.crystalType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Custom Inscription (Optional)
        </label>
        <input
          {...register('inscription')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your custom inscription"
        />
        {errors.inscription && (
          <p className="mt-1 text-sm text-red-600">{errors.inscription.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Apply Customization
      </Button>
    </form>
  );
};