'use client';
import Sidebar from './dashboard/Sidebar';
import NavbarDashboard from './dashboard/NavbarDashboard';

export default function DashboardLayout({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className='min-h-screen bg-[#0D0D1A] text-stone-100'>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 min-h-screen'>
          <NavbarDashboard title={title} />
          <main className='p-6'>{children}</main>
        </div>
      </div>
    </div>
  );
}
