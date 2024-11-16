import { type ValidationType } from '../types';
interface AppErrorArgs {
	name?: string;
	message: string;
	validationErrors?: ValidationType[];
}

export class AppError extends Error {
	public readonly name: string;
	public readonly validationErrors?: ValidationType[];

	constructor(args: AppErrorArgs) {
		const { message, name, validationErrors } = args;
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);
		this.name = name ?? 'Aplication Error';
		this.validationErrors = validationErrors;
	}

	static internalServer(message: string): AppError {
		return new AppError({ name: 'InternalServerError', message });
	}
}
