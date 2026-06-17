'use client';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import LeaveRequestsTable from '@/components/dashboard/LeaveRequestsTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user as { name?: string; email?: string; role?: string } | undefined;

  // Redirect based on user role
  useEffect(() => {
    if (status === 'authenticated' && user?.role === 'admin') {
      router.push('/admin');
    }
  }, [status, user?.role, router]);

  // Sample data - in production, fetch from your API
  const stats = {
    totalLeaves: 20,
    pendingRequests: 3,
    approvedLeaves: 12,
    rejectedLeaves: 2,
    availableBalance: 5,
    usedLeaves: 15,
  };

  if (status === 'loading') {
    return (
      <div className='min-h-screen bg-[#0D0D1A] flex items-center justify-center'>
        <div className='text-white'>Loading...</div>
      </div>
    );
  }

  return (
    <DashboardLayout title='Dashboard'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className='text-gray-400'>Here&apos;s your leave management overview.</p>
        </div>

        {/* Stats Overview */}
        <section className='mb-8'>
          <DashboardOverview stats={stats} loading={false} />
        </section>

        {/* Recent Activity & Quick Actions */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Leave Requests Table */}
          <div className='lg:col-span-2'>
            <LeaveRequestsTable requests={[]} loading={false} />
          </div>

          {/* Quick Info Cards */}
          <div className='space-y-4'>
            <Card className='border border-white/10 bg-[#111827]'>
              <CardHeader>
                <CardTitle className='text-base'>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <div className='text-sm'>
                  <p className='text-gray-400'>Current Month</p>
                  <p className='text-white font-semibold'>
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <div className='text-sm'>
                  <p className='text-gray-400'>Your Role</p>
                  <p className='text-white font-semibold capitalize'>{user?.role || 'Employee'}</p>
                </div>
                <div className='text-sm'>
                  <p className='text-gray-400'>Email</p>
                  <p className='text-white font-semibold truncate'>{user?.email || 'N/A'}</p>
                </div>
              </CardContent>
            </Card>

            <Card className='border border-white/10 bg-[#111827]'>
              <CardHeader>
                <CardTitle className='text-base'>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <a
                  href='/employee/apply'
                  className='block w-full px-4 py-2 text-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition'
                >
                  Apply for Leave
                </a>
                <a
                  href='/employee/leaves'
                  className='block w-full px-4 py-2 text-center text-sm bg-white/5 hover:bg-white/10 text-white rounded-md transition'
                >
                  View My Requests
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
