'use client';
import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  const base = 'px-4 py-2 rounded-md font-medium transition transform';
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:scale-105',
    secondary: 'bg-gray-700 text-white hover:scale-105',
    danger: 'bg-red-600 text-white hover:scale-105',
    ghost: 'bg-transparent border text-gray-200 hover:bg-white/5',
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
