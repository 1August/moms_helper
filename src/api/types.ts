export type BaseError = {
	message: string
}

export interface Request {
	loading: boolean
	error: BaseError | null
}
