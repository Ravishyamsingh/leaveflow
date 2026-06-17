/**
 * Centralized Type Definitions for LeaveFlow
 */

export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

/**
 * User Types
 */
export type UserRole = 'admin' | 'employee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserSession extends User {
  // Additional session-specific fields
}

/**
 * Leave Management Types
 */
export type LeaveStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export type LeaveType = 'Casual' | 'Sick' | 'Earned';

export interface Leave {
  _id?: string;
  id?: string;
  employeeName: string;
  employeeEmail: string;
  employeeId?: string;
  type: LeaveType;
  from: string | Date;
  to: string | Date;
  days: number;
  status: LeaveStatus;
  reason?: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
  approvedBy?: string;
  rejectionReason?: string;
}

export interface LeaveRequest extends Omit<Leave, '_id' | 'id'> {
  // Payload for creating/updating leave requests
}

/**
 * API Response Types
 */
export interface ApiResponse<T = any> {
  message?: string;
  data?: T;
  error?: string;
  status: number;
}

export interface ErrorResponse {
  message: string;
  error?: string;
  status: number;
}

export interface SuccessResponse<T = any> {
  message: string;
  data?: T;
  status: number;
}

/**
 * Redux State Types
 */
export interface LeaveState {
  leaves: Leave[];
  loading: boolean;
  error: string | null;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

/**
 * Component Props Types
 */
export interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface LeaveTableProps {
  leaves: Leave[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  isAdmin?: boolean;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
}

export interface StatusBadgeProps {
  status: LeaveStatus;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Form Types
 */
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export interface CreateLeaveFormData {
  type: LeaveType;
  from: string; // ISO date
  to: string; // ISO date
  days: number;
  reason?: string;
}
