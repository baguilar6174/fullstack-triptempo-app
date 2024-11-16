import { AxiosError } from 'axios';

import { API, AppError, type Route, type SuccessResponse } from '../core';

export class RoutesService {
	static getAll = async (): Promise<SuccessResponse<Route[]>> => {
		try {
			const { data } = await API.get<SuccessResponse<Route[]>>('/routes');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in get routes');
		}
	};
}
