import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { type ErrorResponse } from '../core';
import { AuthService } from '../services/auth.service';

interface State {
	token: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error?: ErrorResponse;
}

interface Actions {
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	clearError: () => void;
}

type Store = State & Actions;

const authAPI: StateCreator<Store> = (set, get) => ({
	token: null,
	isAuthenticated: false,
	isLoading: false,
	login: async (email: string, password: string) => {
		const state = get();
		set({ ...state, isLoading: true, error: undefined });
		try {
			const { result } = await AuthService.login(email, password);
			set({ token: result.token, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error as ErrorResponse, isLoading: false });
		}
	},
	logout: () => {
		set({ token: null, isAuthenticated: false });
	},
	clearError: () => {
		set({ error: undefined });
	}
});

export const useAuthStore = create<Store>()(devtools(persist(authAPI, { name: 'trip-tempo-auth-storage' })));
