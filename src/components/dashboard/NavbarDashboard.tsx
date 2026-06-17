'use client';
import { Bell, Search, LogOut } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/authSlice';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function NavbarDashboard({ title = 'Dashboard' }: { title?: string }) {
  const { data: session } = useSession();
  const user = session?.user as { name?: string; email?: string; role?: string } | undefined;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    dispatch(logout());
    await signOut({ redirect: false });
    router.push('/auth/login');
  };

  return (
    <header className='flex items-center justify-between h-16 px-6 bg-[#0D0D1A] border-b border-white/10 text-stone-100 sticky top-0 z-40'>
      <div className='flex items-center gap-4'>
        <h1 className='text-lg font-semibold'>{title}</h1>
      </div>

      <div className='flex items-center gap-4'>
        <div className='hidden sm:flex items-center gap-2 bg-[#0b1220] rounded-md px-3 py-1'>
          <Search className='h-4 w-4 text-gray-400' />
          <input className='bg-transparent outline-none text-sm text-gray-300 w-40' placeholder='Search...' />
        </div>

        <button aria-label='notifications' className='p-2 rounded-md hover:bg-white/5 transition'>
          <Bell className='h-5 w-5 text-gray-400' />
        </button>

        <div className='flex items-center gap-3 pl-4 border-l border-white/10'>
          <div className='text-right hidden sm:block'>
            <div className='text-sm font-medium'>{user?.name ?? 'Guest'}</div>
            <div className='text-xs text-gray-400'>{user?.role ?? 'User'}</div>
          </div>
          <button
            onClick={handleLogout}
            className='p-2 rounded-md hover:bg-red-500/10 transition text-gray-400 hover:text-red-400'
            aria-label='logout'
            title='Logout'
          >
            <LogOut className='h-5 w-5' />
          </button>
        </div>
      </div>
    </header>
  );
}
