/**
 * Stat card component for displaying key metrics
 * Used in dashboard overview sections
 */

'use client';

import { Card } from '@/components/ui/Card';
import { StatCard as IStatCard } from '@/types/dashboard';

interface StatCardProps extends IStatCard {
  className?: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  trend,
  className = '',
}: StatCardProps) {
  return (
    <Card className={`p-6 rounded-lg border border-white/10 bg-[#0D0D1A] ${className}`}>
      <div className='flex items-start justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-gray-400'>{title}</p>
          <h3 className='mt-2 text-3xl font-bold text-white'>{value}</h3>
          {change !== undefined && (
            <p
              className={`mt-2 text-sm font-medium ${
                trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {trend === 'up' ? '↑' : '↓'} {Math.abs(change)}% from last month
            </p>
          )}
        </div>
        {icon && <div className='text-3xl text-blue-400'>{icon}</div>}
      </div>
    </Card>
  );
}
