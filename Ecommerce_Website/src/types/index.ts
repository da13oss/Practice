// Type definitions for the application

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Lightsaber {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  crystalColor: string;
  style: string;
  inStock: boolean;
  customization?: LightsaberCustomization;
}

export interface LightsaberCustomization {
  hiltMaterial: string;
  bladeLength: number;
  crystalType: string;
  inscription?: string;
}

export interface CartItem {
  lightsaber: Lightsaber;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}