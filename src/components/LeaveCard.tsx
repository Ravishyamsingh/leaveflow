'use client';
import StatusBadge from './StatusBadge';
import { Leave } from '@/store/leaveSlice';

export default function LeaveCard({ leave }: { leave: Leave }) {
  return (
    <div className='bg-[#111827] border border-white/10 rounded-lg p-4 hover:shadow-lg transition'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <div className='text-sm font-medium'>{leave.type}</div>
          <div className='text-xs text-gray-400'>
            {new Date(leave.from).toLocaleDateString()} — {new Date(leave.to).toLocaleDateString()}
          </div>
          <div className='text-xs text-gray-400 mt-2'>{leave.reason}</div>
        </div>

        <div className='flex flex-col items-end gap-2'>
          <StatusBadge status={leave.status} />
          <div className='text-xs text-gray-400'>{leave.days} days</div>
        </div>
      </div>
    </div>
  );
}
