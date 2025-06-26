import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'user' | 'lynker';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, type: 'user' | 'lynker') => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // @ts-ignore
    const API_URL = (import.meta as any).env?.VITE_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:9000';

  // Check if user is already authenticated (e.g., on app load)
  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setUser({
          id: data.user._id,
          name: data.user.fullname || data.user.name || '',
          email: data.user.email,
          type: data.user.typeofuser === 'lynker' ? 'lynker' : 'user',
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const data = await res.json();
    setUser({
      id: data.userId || '',
      name: data.fullname || '',
      email: email,
      type: data.typeofuser === 'lynker' ? 'lynker' : 'user',
    });
  };

  const signup = async (name: string, email: string, password: string, type: 'user' | 'lynker') => {
    const res = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        fullname: name,
        email,
        password,
        typeofuser: type === 'lynker' ? 'lynker' : 'normal_user',
      }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Signup failed');
    }
    const data = await res.json();
    setUser({
      id: data.userId || '',
      name: name,
      email: email,
      type: type,
    });
  };

  const logout = async () => {
    // If backend has a logout endpoint, call it; else just clear user
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      // ignore errors
    }
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    checkAuth,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
