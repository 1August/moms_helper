import { object, string } from 'zod'
import { idShape } from '@/schemas/User.ts'

export const FAQSchema = object({
	id: idShape,
	label: string(),
	description: string(),
})
