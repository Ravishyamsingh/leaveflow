/**
 * Dashboard Layout Context
 * Provides user and dashboard state to components
 */

import React from 'react';
import { User } from '@/types/dashboard';

export const UserContext = React.createContext<User | null>(null);
export const UserDetailsContext = React.createContext<any>(null);
export const OpenContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  return context;
};

export const useUserDetails = () => {
  const context = React.useContext(UserDetailsContext);
  return context;
};

export const useOpen = () => {
  const context = React.useContext(OpenContext);
  if (!context) {
    throw new Error('useOpen must be used within OpenContext.Provider');
  }
  return context;
};
