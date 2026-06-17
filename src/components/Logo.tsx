import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="LeaveFlow home" className={className}>
      <span className="flex items-center space-x-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        <Image src="/img/logo-leaveflow.svg" width={32} height={32} alt="LeaveFlow logo" />
        <span>LeaveFlow</span>
      </span>
    </Link>
  );
}
