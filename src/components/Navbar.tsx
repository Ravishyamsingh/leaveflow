"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "@/components/DarkSwitch";
import { Logo } from "@/components/Logo";

const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "Demo", href: "#demo" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const pathname = usePathname();
  
  // Don't show navbar on auth pages
  if (pathname?.startsWith("/auth")) {
    return null;
  }

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-1">
        <Logo />

        <div className="nav__item ml-auto mr-2 flex gap-3 lg:order-2 lg:ml-0">
          <ThemeChanger />
          <div className="nav__item mr-3 hidden lg:flex">
            <Link
              href="/auth/login"
              className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700 md:ml-5"
            >
              Login
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none lg:hidden dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/auth/login"
                  className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5"
                >
                  Login
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu) => (
              <li className="nav__item mr-3" key={menu.label}>
                <Link
                  href={menu.href}
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
