import { array } from 'zod'
import { PillSchema } from '@/schemas/Pill.ts'

export const PillsSchema = array(PillSchema)
