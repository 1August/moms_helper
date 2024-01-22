import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice/authSlice.ts'
import pillsReducer from './slices/pillsSlice/pillsSlice.ts'
import { authApi } from '@/services/auth.ts'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		pills: pillsReducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(authApi.middleware),
	devTools: true,
})


