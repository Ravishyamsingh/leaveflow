'use client';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import LeaveTable from '@/components/LeaveTable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAllLeaves, Leave, LeaveStatus, updateLeaveStatus } from '@/store/leaveSlice';
import { Download, Filter, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type StatusFilter = 'ALL' | LeaveStatus;
type TypeFilter = 'ALL' | Leave['type'];
type SortMode = 'newest' | 'oldest' | 'longest';

const statusOptions: StatusFilter[] = ['ALL', 'PENDING', 'APPROVED', 'REJECTED'];
const typeOptions: TypeFilter[] = ['ALL', 'Casual', 'Sick', 'Earned'];

function toDateValue(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function escapeCsv(value: string | number | undefined) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

export default function AdminDashboardPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading, error } = useAppSelector((s) => s.leave);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('ALL');
  const [sortMode, setSortMode] = useState<SortMode>('newest');

  useEffect(() => {
    dispatch(fetchAllLeaves());
  }, [dispatch]);

  const pending = leaves.filter((l) => l.status === 'PENDING').length;
  const approved = leaves.filter((l) => l.status === 'APPROVED').length;
  const rejected = leaves.filter((l) => l.status === 'REJECTED').length;
  const uniqueEmployees = new Set(leaves.map((l) => l.employeeEmail)).size;
  const averageDays = leaves.length
    ? (leaves.reduce((sum, leave) => sum + Number(leave.days || 0), 0) / leaves.length).toFixed(1)
    : '0';

  const filteredLeaves = useMemo(() => {
    const term = query.trim().toLowerCase();

    return leaves
      .filter((leave) => {
        const matchesStatus = statusFilter === 'ALL' || leave.status === statusFilter;
        const matchesType = typeFilter === 'ALL' || leave.type === typeFilter;
        const matchesQuery =
          term.length === 0 ||
          [leave.employeeName, leave.employeeEmail, leave.reason, leave.type, leave.status]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(term));

        return matchesStatus && matchesType && matchesQuery;
      })
      .sort((a, b) => {
        if (sortMode === 'oldest') {
          return toDateValue(a.createdAt) - toDateValue(b.createdAt);
        }
        if (sortMode === 'longest') {
          return Number(b.days || 0) - Number(a.days || 0);
        }
        return toDateValue(b.createdAt) - toDateValue(a.createdAt);
      });
  }, [leaves, query, sortMode, statusFilter, typeFilter]);

  const pendingAttention = useMemo(() => {
    return leaves
      .filter((leave) => leave.status === 'PENDING')
      .sort((a, b) => Number(b.days || 0) - Number(a.days || 0))
      .slice(0, 4);
  }, [leaves]);

  const typeBreakdown = useMemo(() => {
    return typeOptions
      .filter((type): type is Leave['type'] => type !== 'ALL')
      .map((type) => ({
        type,
        count: leaves.filter((leave) => leave.type === type).length,
      }));
  }, [leaves]);

  const handleStatusChange = (id: string, status: LeaveStatus) => {
    dispatch(updateLeaveStatus({ id, status }));
  };

  const handleExport = () => {
    const headers = ['Employee', 'Email', 'Type', 'From', 'To', 'Days', 'Status', 'Reason', 'Requested'];
    const rows = filteredLeaves.map((leave) => [
      leave.employeeName,
      leave.employeeEmail,
      leave.type,
      new Date(leave.from).toLocaleDateString(),
      new Date(leave.to).toLocaleDateString(),
      leave.days,
      leave.status,
      leave.reason || '',
      new Date(leave.createdAt).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((row) => row.map(escapeCsv).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a');

    link.href = url;
    link.download = 'leave-requests.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout title='Admin Dashboard'>
      <section className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-6'>
        <StatCard title='Total Requests' value={leaves.length} />
        <StatCard title='Pending Review' value={pending} />
        <StatCard title='Approved' value={approved} />
        <StatCard title='Rejected' value={rejected} />
        <StatCard title='Employees' value={uniqueEmployees} />
        <StatCard title='Avg. Days' value={averageDays} />
      </section>

      <section className='grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6'>
        <div className='xl:col-span-2 rounded-lg border border-white/10 bg-[#111827] p-5'>
          <div className='mb-4 flex items-center justify-between gap-3'>
            <div>
              <h2 className='text-lg font-semibold'>Review Queue</h2>
              <p className='text-sm text-gray-400'>{filteredLeaves.length} matching requests</p>
            </div>
            <button
              type='button'
              onClick={handleExport}
              disabled={filteredLeaves.length === 0}
              className='inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <Download className='h-4 w-4' />
              Export CSV
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            <label className='md:col-span-2 flex items-center gap-2 rounded-md border border-white/10 bg-[#0b1220] px-3 py-2'>
              <Search className='h-4 w-4 text-gray-400' />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className='w-full bg-transparent text-sm text-gray-100 outline-none placeholder:text-gray-500'
                placeholder='Search employee, email, type, reason'
              />
            </label>

            <label className='flex items-center gap-2 rounded-md border border-white/10 bg-[#0b1220] px-3 py-2'>
              <Filter className='h-4 w-4 text-gray-400' />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                className='w-full bg-transparent text-sm text-gray-100 outline-none'
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status} className='bg-[#111827]'>
                    {status === 'ALL' ? 'All statuses' : status}
                  </option>
                ))}
              </select>
            </label>

            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value as TypeFilter)}
              className='rounded-md border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-gray-100 outline-none'
            >
              {typeOptions.map((type) => (
                <option key={type} value={type} className='bg-[#111827]'>
                  {type === 'ALL' ? 'All leave types' : type}
                </option>
              ))}
            </select>
          </div>

          <div className='mt-3 flex flex-wrap items-center gap-2'>
            {[
              { label: 'Newest', value: 'newest' },
              { label: 'Oldest', value: 'oldest' },
              { label: 'Longest leave', value: 'longest' },
            ].map((item) => (
              <button
                key={item.value}
                type='button'
                onClick={() => setSortMode(item.value as SortMode)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                  sortMode === item.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className='rounded-lg border border-white/10 bg-[#111827] p-5'>
          <h2 className='text-lg font-semibold'>Needs Attention</h2>
          <p className='mb-4 text-sm text-gray-400'>Longest pending requests first</p>
          <div className='space-y-3'>
            {pendingAttention.length > 0 ? (
              pendingAttention.map((leave) => (
                <div key={leave.id || leave._id} className='rounded-md bg-white/5 p-3'>
                  <div className='flex items-start justify-between gap-3'>
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-medium text-white'>{leave.employeeName}</p>
                      <p className='truncate text-xs text-gray-400'>{leave.employeeEmail}</p>
                    </div>
                    <span className='rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-300'>
                      {leave.days} days
                    </span>
                  </div>
                  <p className='mt-2 line-clamp-2 text-sm text-gray-300'>{leave.reason || 'No reason provided'}</p>
                </div>
              ))
            ) : (
              <div className='rounded-md bg-white/5 p-4 text-sm text-gray-400'>No pending requests right now.</div>
            )}
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6'>
        {typeBreakdown.map((item) => (
          <div key={item.type} className='rounded-lg border border-white/10 bg-[#0b0f16] p-4'>
            <div className='text-sm text-gray-400'>{item.type} Leave</div>
            <div className='mt-2 flex items-end justify-between gap-4'>
              <span className='text-2xl font-semibold'>{item.count}</span>
              <span className='text-xs text-gray-500'>
                {leaves.length ? Math.round((item.count / leaves.length) * 100) : 0}% of total
              </span>
            </div>
          </div>
        ))}
        <div className='rounded-lg border border-white/10 bg-[#0b0f16] p-4'>
          <div className='text-sm text-gray-400'>Approval Rate</div>
          <div className='mt-2 flex items-end justify-between gap-4'>
            <span className='text-2xl font-semibold'>
              {leaves.length ? Math.round((approved / leaves.length) * 100) : 0}%
            </span>
            <span className='text-xs text-gray-500'>approved requests</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-lg font-semibold mb-4'>Requests</h2>
        {error && <div className='mb-4 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300'>{error}</div>}
        {loading ? (
          <div className='rounded-lg border border-white/10 bg-[#0b0f16] p-6 text-sm text-gray-400'>Loading requests...</div>
        ) : (
          <LeaveTable leaves={filteredLeaves} onStatusChange={handleStatusChange} showAdminDetails />
        )}
      </section>
    </DashboardLayout>
  );
}
