import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeaveFlow | Authentication",
  description: "Sign in or create your LeaveFlow account.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: Don't wrap with html/body here - root layout already does that
  return <>{children}</>;
}
