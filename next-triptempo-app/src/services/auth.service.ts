import { AxiosError } from 'axios';

import { API, AppError, type Auth, type SuccessResponse } from '../core';

export class AuthService {
	static login = async (email: string, password: string): Promise<SuccessResponse<Auth>> => {
		try {
			const { data } = await API.post<SuccessResponse<Auth>>('/auth/login', {
				email,
				password
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in post login');
		}
	};
}
