'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';
import LeaveTable from '@/components/LeaveTable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchMyLeaves } from '@/store/leaveSlice';
import Button from '@/components/Button';

export default function LeavesPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading } = useAppSelector((s) => s.leave);

  useEffect(() => {
    dispatch(fetchMyLeaves());
  }, [dispatch]);

  return (
    <DashboardLayout title='My Leave Requests'>
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Leave Request History</h2>
          <Link href='/employee/apply'>
            <Button variant='primary'>Apply for Leave</Button>
          </Link>
        </div>

        {loading ? (
          <div className='text-center py-8'>
            <div className='text-gray-400'>Loading your leave requests...</div>
          </div>
        ) : leaves.length === 0 ? (
          <div className='bg-slate-900 border border-white/10 rounded-lg p-8 text-center'>
            <p className='text-gray-400 mb-4'>No leave requests yet</p>
            <Link href='/employee/apply'>
              <Button variant='primary'>Create Your First Request</Button>
            </Link>
          </div>
        ) : (
          <LeaveTable leaves={leaves} />
        )}
      </div>
    </DashboardLayout>
  );
}
