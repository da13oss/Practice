import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Heart, MessageCircle, DollarSign } from 'lucide-react';
import { useListingStore } from '../../store/listingStore';
import { useSavedListingStore } from '../../store/savedListingStore';
import { ChatWindow } from '../chat/ChatWindow';
import { MakeOfferForm } from '../offers/MakeOfferForm';

export const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = useListingStore((state) =>
    state.listings.find((l) => l.id === id)
  );
  const { toggleSaved, isSaved } = useSavedListingStore();
  const [showChat, setShowChat] = React.useState(false);
  const [showOfferForm, setShowOfferForm] = React.useState(false);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: listing.title,
        text: listing.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {listing.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${listing.title} ${index + 2}`}
                className="object-cover aspect-square rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Listing Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Share2 className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={() => toggleSaved(listing.id)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Heart
                  className={`h-6 w-6 ${
                    isSaved(listing.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-900">${listing.price}</div>

          <p className="text-gray-600">{listing.description}</p>

          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">Location:</span>
              <span className="ml-2">{listing.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">Meetup Preference:</span>
              <span className="ml-2">{listing.meetupPreference}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowChat(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <MessageCircle className="h-5 w-5" />
              Message Seller
            </button>
            <button
              onClick={() => setShowOfferForm(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <DollarSign className="h-5 w-5" />
              Make Offer
            </button>
          </div>

          {showChat && (
            <div className="mt-6">
              <ChatWindow roomId={`listing-${listing.id}`} />
            </div>
          )}

          {showOfferForm && (
            <div className="mt-6">
              <MakeOfferForm
                listingId={listing.id}
                onClose={() => setShowOfferForm(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};