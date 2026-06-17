'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/authSlice';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { dashboardRoutes, adminRoutes } from '@/lib/dashboard-routes';

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user as { name?: string; email?: string; role?: string } | undefined;
  const [isOpen, setIsOpen] = useState(false);

  const routes = user?.role === 'admin' ? adminRoutes : dashboardRoutes;

  async function handleLogout() {
    dispatch(logout());
    await signOut({ redirect: false });
    router.push('/auth/login');
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#111827] text-white border border-white/10'
      >
        {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'fixed' : 'hidden'
        } md:flex md:flex-col w-60 bg-[#111827] text-stone-100 border-r border-white/10 h-screen sticky top-0 z-40 transition-all`}
      >
        {/* Logo */}
        <div className='px-6 py-6 font-semibold text-lg border-b border-white/10'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold'>
              LF
            </div>
            LeaveFlow
          </Link>
        </div>

        {/* Navigation */}
        <nav className='flex-1 px-4 py-6 space-y-2 overflow-y-auto'>
          {routes.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                pathname === link.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-white/5'
              } ${link.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            >
              <span className='text-lg'>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile & Logout */}
        <div className='px-4 py-6 border-t border-white/5 space-y-4'>
          <div className='flex items-center gap-3 px-4 py-3 rounded-md bg-white/5'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-semibold text-white'>
              {user?.name?.charAt(0).toUpperCase() ?? 'U'}
            </div>
            <div className='flex-1 min-w-0'>
              <div className='text-sm font-medium truncate'>{user?.name ?? 'Guest'}</div>
              <div className='text-xs text-gray-400 truncate'>{user?.email ?? ''}</div>
            </div>
          </div>

          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className='w-full px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition'
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 md:hidden z-30'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
