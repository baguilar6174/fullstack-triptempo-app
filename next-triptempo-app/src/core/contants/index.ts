/* eslint-disable @typescript-eslint/no-magic-numbers */

export const ZERO = 0 as const;
export const ONE = 1 as const;
export const TWO = 2 as const;
export const FOUR = 4 as const;
export const SIX = 6 as const;
export const TWENTY = 20 as const;
export const SEVENTY = 70 as const;
export const MINUS_ONE = -1 as const;

export const EMPTY_STRING = '';

export enum HttpCode {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500
}
