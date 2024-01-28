import { array, object } from 'zod'
import { TabSchema } from '@/schemas/Tab.ts'
import { FAQSchema } from '@/schemas/FAQ.ts'
import { NewProductSchema, ProductSchema } from '@/schemas/Product.ts'

export const PillSchema = object({
	tabs: array(TabSchema).optional(),
	faq: array(FAQSchema).optional(),
}).merge(ProductSchema)

export const NewPillSchema = NewProductSchema
