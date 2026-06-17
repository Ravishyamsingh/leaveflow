/**
 * Dashboard Footer Component
 * Provides consistent footer for all dashboard pages
 */

'use client';

export default function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-8 border-t border-white/10 bg-[#0D0D1A] py-6'>
      <div className='px-6 text-center'>
        <p className='text-sm text-gray-400'>
          &copy; {currentYear} LeaveFlow. All rights reserved.
        </p>
        <div className='mt-3 flex items-center justify-center gap-6 text-xs'>
          <a href='#' className='text-gray-400 hover:text-white transition'>
            Privacy Policy
          </a>
          <a href='#' className='text-gray-400 hover:text-white transition'>
            Terms of Service
          </a>
          <a href='#' className='text-gray-400 hover:text-white transition'>
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
