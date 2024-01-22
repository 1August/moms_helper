import { z } from 'zod'
import { LoginFormFieldsSchema, LoginResponseSchema } from '@/schemas/Login.ts'

export type LoginFormFields = z.infer<typeof LoginFormFieldsSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
