import { z } from 'zod'
import { DecodedUserTokenSchema, UserSchema, UserTokenSchema } from '@/schemas/User.ts'

export const ROLES = ['ADMIN', 'USER'] as const
export type Role = typeof ROLES[number]
export type User = z.infer<typeof UserSchema>
export type UserToken = z.infer<typeof UserTokenSchema>
export type DecodedUserToken = z.infer<typeof DecodedUserTokenSchema>
