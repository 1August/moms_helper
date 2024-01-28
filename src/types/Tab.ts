import { infer as zodInfer } from 'zod'
import { TabSchema } from '@/schemas/Tab.ts'

export type Tab = zodInfer<typeof TabSchema>
