import { infer as zodInfer } from 'zod'
import { LoginFormFieldsSchema, LoginResponseSchema } from '@/schemas/Login.ts'

export type LoginFormFields = zodInfer<typeof LoginFormFieldsSchema>
export type LoginResponse = zodInfer<typeof LoginResponseSchema>
