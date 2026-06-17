import Image from "next/image";
import { Container } from "@/components/Container";

const modulePills = ["Staffing", "CRM", "Workforce", "Payroll"];

const proofPoints = [
  {
    label: "Hiring pipeline",
    value: "3.2x",
    detail: "faster shortlist reviews",
  },
  {
    label: "Shift coverage",
    value: "Live",
    detail: "visibility across venues",
  },
  {
    label: "Payroll checks",
    value: "CA",
    detail: "compliance-ready workflows",
  },
];

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap items-center gap-y-12 pt-8 lg:pt-14">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
              Built for modern teams
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl xl:text-6xl dark:text-white">
              LeaveFlow — Streamline leave management for teams
            </h1>

            <p className="py-6 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
              Simplify leave requests, approvals, and tracking with a clean,
              role-based dashboard for employees and admins.
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="/auth/login"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-trueGray-900"
              >
                Login
              </a>
              <a
                href="#demo"
                className="rounded-md border border-gray-300 px-8 py-4 text-center text-lg font-medium text-gray-800 transition hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-trueGray-700 dark:text-gray-100 dark:hover:border-indigo-400"
              >
                Watch Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {modulePills.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-trueGray-700 dark:bg-trueGray-800 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="relative w-full max-w-xl">
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl dark:border-trueGray-700 dark:bg-trueGray-800">
              <Image
                src="/img/hero-leaveflow.png"
                width={616}
                height={617}
                className="object-cover"
                alt="LeaveFlow dashboard preview"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 grid gap-3 rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:grid-cols-3 dark:border-trueGray-700 dark:bg-trueGray-900">
              {proofPoints.map((item) => (
                <div key={item.label}>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="pt-16">
        <div className="grid gap-4 text-center md:grid-cols-4">
          {[
            "Restaurants",
            "Hotels",
            "Catering teams",
            "Multi-location operators",
          ].map((segment) => (
            <div
              key={segment}
              className="rounded-md border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-700 dark:border-trueGray-800 dark:bg-trueGray-900 dark:text-gray-300"
            >
              {segment}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
