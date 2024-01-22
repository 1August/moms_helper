import { User, UserToken } from '@/types/User.ts'

export interface AuthSliceState {
	user: User
	token: UserToken
}
