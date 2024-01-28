import { infer as zodInfer } from 'zod'
import { FAQSchema } from '@/schemas/FAQ.ts'

export type FAQ = zodInfer<typeof FAQSchema>
