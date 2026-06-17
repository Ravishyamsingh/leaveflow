'use client';
import React from 'react';

export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode }) {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/60' onClick={onClose} />
      <div className='relative z-10 bg-white dark:bg-[#111827] rounded-lg p-6 w-full max-w-lg'>
        {title && <h3 className='text-lg font-semibold mb-4'>{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  );
}
