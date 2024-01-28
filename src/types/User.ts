import { infer as zodInfer } from 'zod'
import { DecodedUserTokenSchema, UserSchema, UserTokenSchema } from '@/schemas/User.ts'

export const ROLES = ['ADMIN', 'USER'] as const
export type Role = typeof ROLES[number]
export type User = zodInfer<typeof UserSchema>
export type UserToken = zodInfer<typeof UserTokenSchema>
export type DecodedUserToken = zodInfer<typeof DecodedUserTokenSchema>
