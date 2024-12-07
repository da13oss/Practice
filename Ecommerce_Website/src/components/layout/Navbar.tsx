import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Swords } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';

export const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Swords className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">LightsaberHub</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/shop" className="hover:text-blue-400">Shop</Link>
            <Link to="/cart" className="relative hover:text-blue-400">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <Link to="/account" className="hover:text-blue-400">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-blue-400">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};