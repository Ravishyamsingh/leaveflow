'use client';
import React from 'react';

export default function StatusBadge({ status }: { status: 'PENDING' | 'APPROVED' | 'REJECTED' }) {
  const map = {
    PENDING: 'bg-amber-600/10 text-amber-400',
    APPROVED: 'bg-emerald-600/10 text-emerald-400',
    REJECTED: 'bg-red-600/10 text-red-400',
  } as const;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>
  );
}
