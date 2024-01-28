import { infer as zodInfer } from 'zod'
import { NewPillSchema, PillSchema } from '@/schemas/Pill.ts'

export type Pill = zodInfer<typeof PillSchema>
export type NewPill = zodInfer<typeof NewPillSchema>
