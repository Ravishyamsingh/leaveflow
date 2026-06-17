import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | LeaveFlow",
  description: "Manage your leave requests and view your leave balance.",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
