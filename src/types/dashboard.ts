/**
 * Dashboard and UI type definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'employee' | 'admin';
  avatar?: string;
  createdAt?: Date;
}

export interface UserDetails {
  full_name?: string;
  avatar_url?: string;
  subscription_status?: 'active' | 'inactive';
  [key: string]: any;
}

// Chat/AI types
export type OpenAIModel = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-turbo';

export interface ChatBody {
  inputMessage: string;
  model: OpenAIModel;
}

// Table types
export interface TableDataRow {
  [key: string]: any;
}

// Card/Stat types
export interface StatCard {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down';
}

// Chart types
export interface ChartData {
  name: string;
  data: number[];
}

export interface ChartOptions {
  [key: string]: any;
}

// Leave request types (specific to LeaveFlow)
export interface LeaveRequest {
  _id?: string;
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LeaveBalance {
  employeeId: string;
  annualLeave: number;
  sickLeave: number;
  casualLeave: number;
  usedLeave: number;
}
