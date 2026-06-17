import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Auth Slice - Redux store for authentication state
 * Note: Primary authentication is handled by NextAuth.js
 * This slice is mainly for storing user session info in Redux if needed
 */

export type UserRole = 'employee' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
