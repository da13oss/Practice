import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../../components/ui/Button';
import { OrderHistory } from '../../components/account/OrderHistory';
import { AccountDetails } from '../../components/account/AccountDetails';

export const Account: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <AccountDetails user={user} />
            <OrderHistory />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  View Orders
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};