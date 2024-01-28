import { z } from 'zod'
import { ROLES } from '@/types/User.ts'

export const idShape = z.string()
export const emailShape = z.string().email('Field is not email type')
export const passwordShape = z.string()
export const roleShape = z.enum(ROLES)
export const rolesShape = z.array(roleShape)
export const tokenShape = z.string()

export const UserSchema = z.object({
	_id: idShape,
	email: emailShape,
	// roles: rolesShape,
})
export const UserTokenSchema = tokenShape
export const DecodedUserTokenSchema = z.object({
	_id: idShape,
	email: emailShape,
})
