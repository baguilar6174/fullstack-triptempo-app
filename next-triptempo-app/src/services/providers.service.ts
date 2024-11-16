import { AxiosError } from 'axios';

import { API, AppError, type Provider, type SuccessResponse } from '../core';

export class ProvidersService {
	static getAll = async (): Promise<SuccessResponse<Provider[]>> => {
		try {
			const { data } = await API.get<SuccessResponse<Provider[]>>('/providers');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in get providers');
		}
	};
}
