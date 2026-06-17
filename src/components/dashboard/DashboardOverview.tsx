/**
 * Dashboard Overview Component
 * Displays key statistics and metrics for the leave management system
 */

'use client';

import StatCard from './StatCardComponent';

interface DashboardStats {
  totalLeaves?: number;
  pendingRequests?: number;
  approvedLeaves?: number;
  rejectedLeaves?: number;
  availableBalance?: number;
  usedLeaves?: number;
}

interface DashboardOverviewProps {
  stats?: DashboardStats;
  loading?: boolean;
}

export default function DashboardOverview({
  stats = {
    totalLeaves: 20,
    pendingRequests: 2,
    approvedLeaves: 15,
    rejectedLeaves: 3,
    availableBalance: 5,
    usedLeaves: 15,
  },
  loading = false,
}: DashboardOverviewProps) {
  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='h-32 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg animate-pulse'
          />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <StatCard
        title='Total Leaves Allocated'
        value={stats.totalLeaves ?? 0}
        icon='📅'
      />
      <StatCard
        title='Pending Requests'
        value={stats.pendingRequests ?? 0}
        icon='⏳'
        change={stats.pendingRequests ? 10 : 0}
        trend={stats.pendingRequests && stats.pendingRequests > 0 ? 'up' : 'down'}
      />
      <StatCard
        title='Approved Leaves'
        value={stats.approvedLeaves ?? 0}
        icon='✅'
        change={-5}
        trend='down'
      />
      <StatCard
        title='Rejected Leaves'
        value={stats.rejectedLeaves ?? 0}
        icon='❌'
      />
      <StatCard
        title='Available Balance'
        value={stats.availableBalance ?? 0}
        icon='🔄'
      />
      <StatCard
        title='Used Leaves'
        value={stats.usedLeaves ?? 0}
        icon='✔️'
      />
    </div>
  );
}
