'use client';
export default function LoadingSpinner({ size = 24 }: { size?: number }) {
  return (
    <svg
      className='animate-spin text-white'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' opacity='0.15' />
      <path d='M22 12a10 10 0 00-10-10' stroke='currentColor' strokeWidth='4' strokeLinecap='round' />
    </svg>
  );
}
