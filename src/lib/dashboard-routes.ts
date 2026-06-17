/**
 * Dashboard routes configuration for LeaveFlow
 * Defines all available navigation routes and their structure
 */

import { IRoute } from '@/lib/navigation';

export const dashboardRoutes: IRoute[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: '📊',
    collapse: false,
  },
  {
    name: 'Apply Leave',
    path: '/employee/apply',
    icon: '📝',
    collapse: false,
  },
  {
    name: 'My Requests',
    path: '/employee/leaves',
    icon: '📋',
    collapse: false,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    icon: '⚙️',
    collapse: false,
  },
];

// Admin specific routes
export const adminRoutes: IRoute[] = [
  {
    name: 'Admin Dashboard',
    path: '/admin',
    icon: '🏢',
    collapse: false,
  },
  {
    name: 'All Requests',
    path: '/admin/all-requests',
    icon: '📊',
    collapse: false,
  },
  {
    name: 'Users',
    path: '/admin/users',
    icon: '👥',
    collapse: false,
    disabled: true,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    icon: '⚙️',
    collapse: false,
    disabled: true,
  },
];

// Combined routes based on user role
export const getRoutesByRole = (role: string): IRoute[] => {
  if (role === 'admin') {
    return adminRoutes;
  }
  return dashboardRoutes;
};
