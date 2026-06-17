'use client';
import { Leave } from '@/store/leaveSlice';
import StatusBadge from './StatusBadge';

export default function LeaveTable({
  leaves,
  onStatusChange,
}: {
  leaves: Leave[];
  onStatusChange?: (id: string, status: 'APPROVED' | 'REJECTED') => void;
}) {
  if (leaves.length === 0) {
    return (
      <div className='bg-[#0b0f16] border border-white/5 rounded-lg p-6 text-sm text-gray-400'>
        No leave requests found.
      </div>
    );
  }

  return (
    <div className='bg-[#0b0f16] border border-white/5 rounded-lg overflow-x-auto'>
      <table className='min-w-full table-fixed'>
        <thead className='text-xs text-gray-400 uppercase'>
          <tr>
            <th className='p-3 text-left'>Employee</th>
            <th className='p-3 text-left'>Type</th>
            <th className='p-3 text-left'>From</th>
            <th className='p-3 text-left'>To</th>
            <th className='p-3 text-left'>Days</th>
            <th className='p-3 text-left'>Status</th>
            <th className='p-3 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((l) => {
            const leaveId = l.id || l._id;

            return (
            <tr key={leaveId} className='hover:bg-white/[0.03] transition'>
              <td className='p-3'>{l.employeeName}</td>
              <td className='p-3'>{l.type}</td>
              <td className='p-3'>{new Date(l.from).toLocaleDateString()}</td>
              <td className='p-3'>{new Date(l.to).toLocaleDateString()}</td>
              <td className='p-3'>{l.days}</td>
              <td className='p-3'>
                <StatusBadge status={l.status} />
              </td>
              <td className='p-3'>
                {onStatusChange && leaveId && l.status === 'PENDING' ? (
                  <div className='flex flex-wrap gap-2'>
                    <button
                      type='button'
                      onClick={() => onStatusChange(leaveId, 'APPROVED')}
                      className='rounded-md bg-emerald-600 px-3 py-1 text-xs font-medium text-white hover:bg-emerald-700'
                    >
                      Approve
                    </button>
                    <button
                      type='button'
                      onClick={() => onStatusChange(leaveId, 'REJECTED')}
                      className='rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700'
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <span className='text-sm text-gray-500'>Done</span>
                )}
              </td>
            </tr>
          );
          })}
        </tbody>
      </table>
    </div>
  );
}
