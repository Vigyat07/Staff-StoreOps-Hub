'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { User, UserRole } from '@/lib/types';
import { mockEmployees } from '@/lib/data';

const mockUsers: Record<string, { password?: string; user: User }> = {
  'admin@belc.com': {
    password: 'admin123',
    user: { id: 'user-1', name: 'Admin User', email: 'admin@belc.com', role: 'admin' },
  },
  'manager@belc.com': {
    password: 'manager123',
    user: { id: 'user-2', name: mockEmployees.find(e => e.id === 'emp-2')?.name || 'Store Manager', email: 'manager@belc.com', role: 'store_manager', storeId: 'store-1' },
  },
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('belc-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('belc-user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    const account = mockUsers[email.toLowerCase()];
    if (account && account.password === pass) {
      localStorage.setItem('belc-user', JSON.stringify(account.user));
      setUser(account.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('belc-user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
