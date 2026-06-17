'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { createLeave } from '@/store/leaveSlice';
import toast from 'react-hot-toast';

export default function ApplyLeavePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((s) => s.leave);

  const [formData, setFormData] = useState({
    type: 'Casual',
    from: '',
    to: '',
    days: 1,
    reason: '',
  });

  function calculateDays(from: string, to: string) {
    if (!from || !to) return 1;
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }

  function handleFromChange(e: string) {
    setFormData({ ...formData, from: e, days: calculateDays(e, formData.to) });
  }

  function handleToChange(e: string) {
    setFormData({ ...formData, to: e, days: calculateDays(formData.from, e) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!formData.from || !formData.to) {
      toast.error('Please select both start and end dates');
      return;
    }

    try {
      const result = await dispatch(createLeave({
        type: formData.type,
        from: formData.from,
        to: formData.to,
        days: formData.days,
        reason: formData.reason,
      }));

      if (result.meta.requestStatus === 'fulfilled') {
        toast.success('Leave request submitted successfully!');
        router.push('/employee/leaves');
      } else {
        toast.error(error || 'Failed to submit leave request');
      }
    } catch (err) {
      toast.error('An error occurred');
    }
  }

  return (
    <DashboardLayout title='Apply for Leave'>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-slate-900 border border-white/10 rounded-lg p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>Leave Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className='w-full bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-white'
              >
                <option value='Casual'>Casual</option>
                <option value='Sick'>Sick</option>
                <option value='Earned'>Earned</option>
              </select>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>From Date</label>
                <input
                  type='date'
                  value={formData.from}
                  onChange={(e) => handleFromChange(e.target.value)}
                  required
                  className='w-full bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-white'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>To Date</label>
                <input
                  type='date'
                  value={formData.to}
                  onChange={(e) => handleToChange(e.target.value)}
                  required
                  className='w-full bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-white'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>Number of Days</label>
              <input
                type='number'
                value={formData.days}
                readOnly
                className='w-full bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-gray-400'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>Reason (Optional)</label>
              <textarea
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder='Please provide a reason for your leave request'
                rows={4}
                className='w-full bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-white placeholder-gray-500'
              />
            </div>

            {error && (
              <div className='bg-red-900/20 border border-red-800 text-red-300 px-4 py-3 rounded'>
                {error}
              </div>
            )}

            <div className='flex gap-4 pt-4'>
              <button
                type='submit'
                disabled={loading}
                className='flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition font-medium'
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
              <button
                type='button'
                onClick={() => router.back()}
                className='flex-1 bg-slate-700 text-white py-2 rounded-md hover:bg-slate-600 transition font-medium'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
