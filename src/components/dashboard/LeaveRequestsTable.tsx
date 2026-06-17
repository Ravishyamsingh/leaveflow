/**
 * Leave Requests Table Component
 * Displays a list of leave requests with sorting and filtering
 */

'use client';

import { LeaveRequest } from '@/types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface LeaveRequestsTableProps {
  requests?: LeaveRequest[];
  loading?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export default function LeaveRequestsTable({
  requests = [],
  loading = false,
  onApprove,
  onReject,
}: LeaveRequestsTableProps) {
  if (loading) {
    return (
      <Card className='border border-white/10 bg-[#0D0D1A]'>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className='h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded animate-pulse'
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (requests.length === 0) {
    return (
      <Card className='border border-white/10 bg-[#0D0D1A]'>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center text-gray-400 py-8'>No leave requests found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='border border-white/10 bg-[#0D0D1A]'>
      <CardHeader>
        <CardTitle>Recent Leave Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b border-white/10'>
                <th className='text-left py-3 px-4 font-medium text-gray-300'>Employee</th>
                <th className='text-left py-3 px-4 font-medium text-gray-300'>Type</th>
                <th className='text-left py-3 px-4 font-medium text-gray-300'>Period</th>
                <th className='text-left py-3 px-4 font-medium text-gray-300'>Status</th>
                <th className='text-left py-3 px-4 font-medium text-gray-300'>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id} className='border-b border-white/5 hover:bg-white/5'>
                  <td className='py-3 px-4'>{request.employeeName}</td>
                  <td className='py-3 px-4'>{request.leaveType}</td>
                  <td className='py-3 px-4 text-gray-400'>
                    {new Date(request.startDate).toLocaleDateString()} -{' '}
                    {new Date(request.endDate).toLocaleDateString()}
                  </td>
                  <td className='py-3 px-4'>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === 'approved'
                          ? 'bg-green-500/20 text-green-300'
                          : request.status === 'rejected'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}
                    >
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className='py-3 px-4'>
                    <div className='flex gap-2'>
                      {request.status === 'pending' && (
                        <>
                          {onApprove && (
                            <button
                              onClick={() => onApprove(request._id!)}
                              className='text-green-400 hover:text-green-300 text-xs'
                            >
                              Approve
                            </button>
                          )}
                          {onReject && (
                            <button
                              onClick={() => onReject(request._id!)}
                              className='text-red-400 hover:text-red-300 text-xs'
                            >
                              Reject
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
