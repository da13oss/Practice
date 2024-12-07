import React from 'react';

export const OrderHistory: React.FC = () => {
  // Mock order data - replace with actual data from API
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      total: 299.99,
      status: 'Delivered',
      items: ['Defender Elite'],
    },
    {
      id: '2',
      date: '2024-03-10',
      total: 349.99,
      status: 'Processing',
      items: ['Shadow Master'],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-600">{order.date}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {order.items.join(', ')}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">${order.total}</p>
                <p className="text-sm text-green-600">{order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};