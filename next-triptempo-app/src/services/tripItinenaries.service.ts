import { AxiosError } from 'axios';

import { API, type SuccessResponse, type TripItinerary, type PaginationResponse, AppError } from '../core';

export class TripItinerariesService {
	static getTripItineraries = async (
		startCityId: string,
		endCityId: string
	): Promise<SuccessResponse<PaginationResponse<TripItinerary[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponse<TripItinerary[]>>>(
				'/providers/tripItineraries',
				{
					params: { startCityId, endCityId }
				}
			);
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in get trip itinenaries');
		}
	};
}
