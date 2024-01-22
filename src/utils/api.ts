export interface ApiError {
	data: {
		message: string
	}
}

export function isErrorWithMessage(
	error: unknown,
): error is ApiError {
	return (
		typeof error === 'object' &&
		error != null &&
		'data' in error &&
		typeof error.data === 'object' &&
		error.data != null &&
		'message' in error.data &&
		typeof (error as any).data.message === 'string'
	)
}
