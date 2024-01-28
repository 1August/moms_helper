import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@/store/slices/authSlice'
import { pillsSlice } from '@/store/slices/pillsSlice'
import { authApi } from '@/services/auth.ts'
import { categoriesApi } from '@/services/categories.ts'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		pills: pillsSlice.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[categoriesApi.reducerPath]: categoriesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware, categoriesApi.middleware),
	devTools: true,
})
