import { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '@/store/utils.ts'
import { AuthSliceState } from '@/store/slices/authSlice/types.ts'
import { User, UserToken } from '@/types/User.ts'

export const initialState: AuthSliceState = {
	user: {
		_id: '',
		email: '',
		// roles: [],
	},
	token: '',
}

export const authSlice = createAppSlice({
	name: 'authSlice',
	initialState,
	reducers: (create) => ({
		setAuth: create.reducer((state, action: PayloadAction<AuthSliceState>) => {
			state.user._id = action.payload.user._id
			state.user.email = action.payload.user.email
			state.token = action.payload.token
		}),
		setUser: create.reducer((state, action: PayloadAction<User>) => {
			state.user._id = action.payload._id
			state.user.email = action.payload.email
		}),
		setToken: create.reducer((state, action: PayloadAction<UserToken>) => {
			state.token = action.payload
		}),
	}),
})

export const { setUser, setToken, setAuth } = authSlice.actions
