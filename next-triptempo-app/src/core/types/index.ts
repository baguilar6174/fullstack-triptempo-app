export interface ValidationType {
	fields: string[];
	constraint: string;
}

export interface SuccessResponse<T> {
	result: T;
}

export interface PaginationResponse<T> {
	total: number;
	totalPages: number;
	currentPage: number;
	nextPage: number | null;
	prevPage: number | null;
	data: T;
}

export interface ErrorResponse {
	name: string;
	message: string;
	validationErrors?: ValidationType[];
}
