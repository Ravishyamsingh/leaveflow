'use client';
import { useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import LeaveTable from '@/components/LeaveTable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchMyLeaves } from '@/store/leaveSlice';

export default function EmployeeDashboardPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading } = useAppSelector((s) => s.leave);

  useEffect(() => {
    dispatch(fetchMyLeaves());
  }, [dispatch]);

  const pending = leaves.filter((l) => l.status === 'PENDING').length;
  const approved = leaves.filter((l) => l.status === 'APPROVED').length;
  const rejected = leaves.filter((l) => l.status === 'REJECTED').length;

  return (
    <DashboardLayout title='Employee Dashboard'>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <StatCard title='Leave Balance' value={'15'} />
        <StatCard title='Pending Requests' value={pending} />
        <StatCard title='Approved Leaves' value={approved} />
      </section>

      <section>
        <h2 className='text-lg font-semibold mb-4'>Recent Leave Requests</h2>
        {loading ? <div>Loading...</div> : <LeaveTable leaves={leaves} />}
      </section>
    </DashboardLayout>
  );
}
