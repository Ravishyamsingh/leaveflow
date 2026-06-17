import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type LeaveStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export type Leave = {
  _id?: string;
  id?: string;
  employeeName: string;
  employeeEmail: string;
  type: 'Casual' | 'Sick' | 'Earned';
  from: string; // ISO date
  to: string; // ISO date
  days: number;
  status: LeaveStatus;
  reason?: string;
  createdAt: string;
  updatedAt?: string;
  approvedBy?: string;
};

interface LeaveState {
  leaves: Leave[];
  loading: boolean;
  error: string | null;
}

// Fetch current user's leaves
export const fetchMyLeaves = createAsyncThunk(
  'leave/fetchMy',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/leaves');
      if (!res.ok) {
        throw new Error('Failed to fetch leaves');
      }
      const data = await res.json();
      // Map MongoDB _id to id for compatibility
      return data.map((leave: any) => ({
        ...leave,
        id: leave._id,
      }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch all leaves (admin only)
export const fetchAllLeaves = createAsyncThunk(
  'leave/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/leaves');
      if (!res.ok) {
        throw new Error('Failed to fetch leaves');
      }
      const data = await res.json();
      // Map MongoDB _id to id for compatibility
      return data.map((leave: any) => ({
        ...leave,
        id: leave._id,
      }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Create a new leave request
export const createLeave = createAsyncThunk(
  'leave/create',
  async (
    payload: { type: string; from: string; to: string; days: number; reason?: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch('/api/leaves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
      const data = await res.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Update leave status (approve/reject)
export const updateLeaveStatus = createAsyncThunk(
  'leave/updateStatus',
  async (
    payload: { id: string; status: LeaveStatus },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`/api/leaves/${payload.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: payload.status }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
      const data = await res.json();
      return { id: payload.id, status: payload.status, ...data };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: LeaveState = {
  leaves: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'leave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMyLeaves
      .addCase(fetchMyLeaves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyLeaves.fulfilled, (state, action: PayloadAction<Leave[]>) => {
        state.loading = false;
        state.leaves = action.payload;
      })
      .addCase(fetchMyLeaves.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch leaves';
      })
      // fetchAllLeaves
      .addCase(fetchAllLeaves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllLeaves.fulfilled, (state, action: PayloadAction<Leave[]>) => {
        state.loading = false;
        state.leaves = action.payload;
      })
      .addCase(fetchAllLeaves.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch leaves';
      })
      // createLeave
      .addCase(createLeave.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLeave.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createLeave.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create leave';
      })
      // updateLeaveStatus
      .addCase(updateLeaveStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action: PayloadAction<{ id: string; status: LeaveStatus }>) => {
        state.loading = false;
        const leave = state.leaves.find((item) => item.id === action.payload.id || item._id === action.payload.id);
        if (leave) {
          leave.status = action.payload.status;
          leave.updatedAt = new Date().toISOString();
        }
      })
      .addCase(updateLeaveStatus.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update leave';
      });
  },
});

export default slice.reducer;
