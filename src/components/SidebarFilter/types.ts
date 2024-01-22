import { z } from 'zod'
import { formValuesSchema } from '@/components/SidebarFilter/schema.ts'

export type FilterValues = z.infer<typeof formValuesSchema>
