import React from 'react';
import { User } from '../../types';

interface AccountDetailsProps {
  user: User;
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <p className="mt-1 text-gray-900">{user.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <p className="mt-1 text-gray-900">{user.email}</p>
        </div>
      </div>
    </div>
  );
};