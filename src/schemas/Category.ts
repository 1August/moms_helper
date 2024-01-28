import { idShape } from '@/schemas/User.ts'
import { object, string } from 'zod'

export const CategorySchema = object({
	_id: idShape,
	label: string(),
})

export const NewCategorySchema = object({
	label: string().min(5, 'Min value is 5 characters'),
})
