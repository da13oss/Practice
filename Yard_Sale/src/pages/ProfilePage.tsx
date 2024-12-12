import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useListingStore } from '../store/listingStore';
import { useSavedListingStore } from '../store/savedListingStore';
import { ListingCard } from '../components/listings/ListingCard';
import { ProfileUpdateForm } from '../components/profile/ProfileUpdateForm';
import { User, Settings } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuthStore();
  const listings = useListingStore((state) => state.listings);
  const savedListingIds = useSavedListingStore((state) => state.savedListings);
  const [isEditing, setIsEditing] = React.useState(false);

  const userListings = listings.filter((listing) => listing.seller.id === user?.id);
  const savedListings = listings.filter((listing) =>
    savedListingIds.includes(listing.id)
  );

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <User className="h-10 w-10 text-gray-400" />
              )}
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Member since {user.createdAt.toLocaleDateString()}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              <p className="text-gray-600 dark:text-gray-400">{user.address}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            <Settings className="h-5 w-5" />
            Edit Profile
          </button>
        </div>
      </div>

      {isEditing && user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full">
            <ProfileUpdateForm
              user={user}
              onUpdate={updateProfile}
              onClose={() => setIsEditing(false)}
            />
          </div>
        </div>
      )}

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {userListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
            {userListings.length === 0 && (
              <p className="text-gray-600 dark:text-gray-400 col-span-full">
                You haven't created any listings yet.
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Saved Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
            {savedListings.length === 0 && (
              <p className="text-gray-600 dark:text-gray-400 col-span-full">
                You haven't saved any listings yet.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};