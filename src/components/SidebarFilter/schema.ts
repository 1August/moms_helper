import { z } from 'zod'

export const formValuesSchema = z.object({
	fromCost: z.number().nonnegative().nullable(),
	// 	.number({
	// 	description: 'Minimum cost',
	// 	invalid_type_error: 'Invalid type',
	// })
	// 	.positive(),
	// tillCost: z.number({
	// 	description: 'Maximum cost',
	// }).min(0, 'Minimum value is 0').nullable(),
	tillCost: z.number().nonnegative().nullable(),
})
