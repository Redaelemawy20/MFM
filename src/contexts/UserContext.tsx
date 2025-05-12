'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { removeAuthToken } from '@/utils/auth';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize user from localStorage on client side
  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined') return;

    const loadUserData = () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setLoading(false);
          return;
        }

        // For manual testing, attempt to load user data from localStorage
        // In a real app, we might want to validate the token on the server
        const userData = localStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Logout function to clear user data and token
  const logout = () => {
    setUser(null);
    removeAuthToken();
    localStorage.removeItem('userData');
  };

  const value = {
    user,
    setUser: (newUser: User | null) => {
      setUser(newUser);
      // If user is being set, store in localStorage for persistence
      if (newUser) {
        localStorage.setItem('userData', JSON.stringify(newUser));
      }
    },
    isAuthenticated: !!user,
    logout,
    loading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
