'use client';
import DashboardLayout from '@/components/DashboardLayout';

export default function DemoPage() {  return (
    <DashboardLayout title='Demo'>
      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>LeaveFlow Demo</h2>
          <div className='bg-slate-900 border border-white/10 rounded-lg p-8'>
            <p className='text-gray-300 mb-4'>
              LeaveFlow is a modern leave management system that streamlines the process of requesting, approving, and tracking leave for teams.
            </p>
            
            <h3 className='text-lg font-semibold mt-6 mb-3'>Key Features:</h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Simple leave request submission</li>
              <li>Real-time approval workflow</li>
              <li>Leave balance tracking</li>
              <li>Admin dashboard for managing all requests</li>
              <li>Role-based access control</li>
              <li>Leave history and reporting</li>
            </ul>

            <h3 className='text-lg font-semibold mt-6 mb-3'>Demo Credentials:</h3>
            <div className='bg-slate-800/50 border border-white/5 rounded p-4 space-y-2 text-sm text-gray-300'>
              <p><strong>Admin Account:</strong></p>
              <p>Email: admin@leaveflow.local</p>
              <p>Password: password</p>
              
              <p className='mt-4'><strong>Employee Account:</strong></p>
              <p>Email: user@leaveflow.local</p>
              <p>Password: password</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-lg font-semibold mb-4'>How It Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-slate-900 border border-white/10 rounded-lg p-6'>
              <div className='text-blue-400 text-2xl mb-3'>1️⃣</div>
              <h4 className='font-semibold mb-2'>Apply</h4>
              <p className='text-sm text-gray-400'>Employees submit leave requests with dates and reason</p>
            </div>
            <div className='bg-slate-900 border border-white/10 rounded-lg p-6'>
              <div className='text-blue-400 text-2xl mb-3'>2️⃣</div>
              <h4 className='font-semibold mb-2'>Review</h4>
              <p className='text-sm text-gray-400'>Admins review requests and check leave balance</p>
            </div>
            <div className='bg-slate-900 border border-white/10 rounded-lg p-6'>
              <div className='text-blue-400 text-2xl mb-3'>3️⃣</div>
              <h4 className='font-semibold mb-2'>Approve</h4>
              <p className='text-sm text-gray-400'>Admins approve or reject with system updates</p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
