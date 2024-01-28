import { array } from 'zod'
import { CategorySchema } from '@/schemas/Category.ts'

export const CategoriesSchema = array(CategorySchema)
