'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import store from '@/store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <Toaster position='top-right' />
      </Provider>
    </SessionProvider>
  );
}
