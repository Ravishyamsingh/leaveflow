'use client';
import React from 'react';

export default function StatCard({ title, value, icon }: { title: string; value: string | number; icon?: React.ReactNode }) {
  return (
    <div className='bg-[#111827] border border-white/10 rounded-xl p-5 hover:scale-[1.02] transition transform'>
      <div className='flex items-start justify-between'>
        <div>
          <div className='text-2xl font-bold'>{value}</div>
          <div className='text-sm text-gray-400'>{title}</div>
        </div>
        <div className='text-gray-400'>{icon}</div>
      </div>
    </div>
  );
}
