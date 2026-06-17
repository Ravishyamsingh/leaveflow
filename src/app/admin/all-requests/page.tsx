'use client';
import DashboardLayout from '@/components/DashboardLayout';
import LeaveTable from '@/components/LeaveTable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAllLeaves, LeaveStatus, updateLeaveStatus } from '@/store/leaveSlice';
import { useEffect } from 'react';

export default function AllRequestsPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading, error } = useAppSelector((s) => s.leave);

  useEffect(() => {
    dispatch(fetchAllLeaves());
  }, [dispatch]);

  const handleStatusChange = (id: string, status: LeaveStatus) => {
    dispatch(updateLeaveStatus({ id, status }));
  };

  return (
    <DashboardLayout title='All Requests'>
      <section>
        <h2 className='text-lg font-semibold mb-4'>All Leave Requests</h2>
        {error && <div className='mb-4 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300'>{error}</div>}
        {loading ? <div>Loading...</div> : <LeaveTable leaves={leaves} onStatusChange={handleStatusChange} />}
      </section>
    </DashboardLayout>
  );
}
