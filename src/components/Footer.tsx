"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

const platformLinks = [
  { label: "Staffing", href: "#platform" },
  { label: "CRM", href: "#platform" },
  { label: "Workforce", href: "#platform" },
  { label: "Payroll", href: "#platform" },
];

const companyLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const pathname = usePathname();
  
  // Don't show footer on auth pages
  if (pathname?.startsWith("/auth")) {
    return null;
  }

  return (
    <footer className="relative">
      <Container>
        <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-gray-100 pt-10 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />

            <div className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
              Simplify leave requests, approvals, and tracking with LeaveFlow,
              a clean, role-based solution for teams.
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Platform
            </h3>
            <div className="-ml-3 flex w-full flex-wrap lg:ml-0">
              {platformLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <div className="-ml-3 flex w-full flex-wrap lg:ml-0">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <a
              href="mailto:hello@leaveflow.local"
              className="block rounded-md py-2 text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:text-gray-300"
            >
              hello@leaveflow.local
            </a>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Team-focused leave management.
            </p>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} LeaveFlow. Built from the
          Nextly open-source template foundation.
        </div>
      </Container>
    </footer>
  );
}
