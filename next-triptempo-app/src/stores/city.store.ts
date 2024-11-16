import { type StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { type City, type CreateCityDTO, type ErrorResponse } from '../core';
import { CitiesService } from '../services/cities.service';

interface State {
	cities: City[];
	updatedCity?: City;
	isLoading: boolean;
	error?: ErrorResponse;
}

interface Actions {
	getAll: () => Promise<void>;
	create: (dto: CreateCityDTO) => Promise<void>;
	delete: (id: string) => Promise<void>;
}

type Store = State & Actions;

const citiesAPI: StateCreator<Store> = (set, get) => ({
	cities: [],
	isLoading: false,
	getAll: async (): Promise<void> => {
		const state = get();
		set({ ...state, isLoading: true, error: undefined });
		try {
			const { result } = await CitiesService.getAll();
			set({ isLoading: false, cities: result });
		} catch (error) {
			set({ isLoading: false, cities: [], error: error as ErrorResponse });
		}
	},
	create: async (dto: CreateCityDTO): Promise<void> => {
		const state = get();
		set({ ...state, isLoading: true, error: undefined });
		try {
			const { result } = await CitiesService.create(dto);
			set({ isLoading: false, updatedCity: result, cities: [...state.cities, result] });
		} catch (error) {
			set({ isLoading: false, updatedCity: undefined, error: error as ErrorResponse });
		}
	},
	delete: async (id: string): Promise<void> => {
		const state = get();
		set({ ...state, isLoading: true, error: undefined });
		try {
			const { result } = await CitiesService.delete(id);
			set({ isLoading: false, updatedCity: result, cities: state.cities.filter((city) => city.id !== id) });
		} catch (error) {
			set({ isLoading: false, updatedCity: undefined, error: error as ErrorResponse });
		}
	}
});

export const useCitiesStore = create<Store>()(devtools(citiesAPI));
