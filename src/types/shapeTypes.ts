import { z } from 'zod'
import { idShape } from '@/schemas/User.ts'

export type ID = z.infer<typeof idShape>
