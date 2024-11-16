import { type StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { type Route, type ErrorResponse } from '../core';
import { RoutesService } from '../services/routes.service';

interface State {
	routes: Route[];
	updatedRoute?: Route;
	isLoading: boolean;
	error?: ErrorResponse;
}

interface Actions {
	getAll: () => Promise<void>;
}

type Store = State & Actions;

const routesAPI: StateCreator<Store> = (set, get) => ({
	routes: [],
	isLoading: false,
	getAll: async (): Promise<void> => {
		const state = get();
		set({ ...state, isLoading: true, error: undefined });
		try {
			const { result } = await RoutesService.getAll();
			set({ isLoading: false, routes: result });
		} catch (error) {
			set({ isLoading: false, routes: [], error: error as ErrorResponse });
		}
	}
});

export const useRoutesStore = create<Store>()(devtools(routesAPI));
