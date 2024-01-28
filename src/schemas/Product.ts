import { array, number, object, string } from 'zod'
import { idShape } from '@/schemas/User.ts'
import { CategorySchema } from '@/schemas/Category.ts'

export const NewProductSchema = object({
	title: string().min(5, 'Min length is 5 characters'),
	shortDescription: string().min(10, 'Min length is 10 characters'),
	description: string().min(10, 'Min length is 10 characters'),
	content: string().min(30, 'Min length is 30 characters'),
	categories: array(string()),
	src: string().min(10, 'Min length is 10 characters'),
	alt: string().min(10, 'Min length is 10 characters'),
	stars: number().min(0, 'Minimum value is 0').max(5, 'Maximum value is 5'),
})

export const ProductSchema = object({
	_id: idShape,
	title: string(),
	shortDescription: string(),
	description: string(),
	content: string(),
	categories: array(CategorySchema),
	src: string(),
	alt: string(),
	stars: number().min(0, 'Minimum value is 0').max(5, 'Maximum value is 5'),
})
