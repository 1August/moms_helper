import { z } from 'zod'
import { emailShape, passwordShape, UserSchema, UserTokenSchema } from '@/schemas/User.ts'

export const LoginFormFieldsSchema = z.object({
	email: emailShape.min(1, 'Email field is required'),
	password: passwordShape.min(1, 'Password field is required').min(6, 'Password min length is 6'),
})

export const LoginResponseSchema = z.object({
	user: UserSchema,
	token: UserTokenSchema,
})
