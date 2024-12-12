import { create } from 'zustand';
import { AuthState } from '../types';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<AuthState['user']>) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // TODO: Implement actual API call
    try {
      // Simulate API call
      const user = { id: '1', email, name: 'Test User', address: '', createdAt: new Date() };
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  register: async (email: string, password: string, name: string) => {
    // TODO: Implement actual API call
    try {
      const user = { id: '1', email, name, address: '', createdAt: new Date() };
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  updateProfile: async (userData) => {
    // TODO: Implement actual API call
    try {
      set((state) => ({
        user: state.user ? { ...state.user, ...userData } : null,
      }));
    } catch (error) {
      console.error('Profile update failed:', error);
      throw error;
    }
  },
}));