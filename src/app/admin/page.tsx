'use client';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import LeaveTable from '@/components/LeaveTable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAllLeaves, LeaveStatus, updateLeaveStatus } from '@/store/leaveSlice';
import { useEffect } from 'react';

export default function AdminDashboardPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading, error } = useAppSelector((s) => s.leave);

  useEffect(() => {
    dispatch(fetchAllLeaves());
  }, [dispatch]);

  const pending = leaves.filter((l) => l.status === 'PENDING').length;
  const approved = leaves.filter((l) => l.status === 'APPROVED').length;
  const rejected = leaves.filter((l) => l.status === 'REJECTED').length;

  const handleStatusChange = (id: string, status: LeaveStatus) => {
    dispatch(updateLeaveStatus({ id, status }));
  };

  return (
    <DashboardLayout title='Admin Dashboard'>
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
        <StatCard title='Total Requests' value={leaves.length} />
        <StatCard title='Pending Review' value={pending} />
        <StatCard title='Approved' value={approved} />
        <StatCard title='Rejected' value={rejected} />
      </section>

      <section>
        <h2 className='text-lg font-semibold mb-4'>Recent Requests</h2>
        {error && <div className='mb-4 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300'>{error}</div>}
        {loading ? <div>Loading...</div> : <LeaveTable leaves={leaves} onStatusChange={handleStatusChange} />}
      </section>
    </DashboardLayout>
  );
}
