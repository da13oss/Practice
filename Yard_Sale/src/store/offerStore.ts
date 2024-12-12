import { create } from 'zustand';

interface Offer {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

interface OfferStore {
  offers: Offer[];
  makeOffer: (listingId: string, amount: number) => void;
  acceptOffer: (offerId: string) => void;
  rejectOffer: (offerId: string) => void;
  getOffersForListing: (listingId: string) => Offer[];
}

export const useOfferStore = create<OfferStore>((set, get) => ({
  offers: [],

  makeOffer: (listingId: string, amount: number) => {
    const newOffer: Offer = {
      id: Math.random().toString(36).substr(2, 9),
      listingId,
      buyerId: 'current-user-id', // TODO: Get from auth store
      sellerId: 'seller-id', // TODO: Get from listing
      amount,
      status: 'pending',
      createdAt: new Date(),
    };

    set((state) => ({
      offers: [...state.offers, newOffer],
    }));
  },

  acceptOffer: (offerId: string) => {
    set((state) => ({
      offers: state.offers.map((offer) =>
        offer.id === offerId ? { ...offer, status: 'accepted' } : offer
      ),
    }));
  },

  rejectOffer: (offerId: string) => {
    set((state) => ({
      offers: state.offers.map((offer) =>
        offer.id === offerId ? { ...offer, status: 'rejected' } : offer
      ),
    }));
  },

  getOffersForListing: (listingId: string) => {
    return get().offers.filter((offer) => offer.listingId === listingId);
  },
}));