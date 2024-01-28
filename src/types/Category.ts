import { infer as zodInfer } from 'zod'
import { CategorySchema, NewCategorySchema } from '@/schemas/Category.ts'

export type Category = zodInfer<typeof CategorySchema>
export type NewCategory = zodInfer<typeof NewCategorySchema>
