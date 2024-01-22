import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginFormFields, LoginResponse } from '@/types/Login.ts'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BACKEND_URL,
	}),
	endpoints: builder => ({
		login: builder.mutation<LoginResponse, LoginFormFields>({
			query: (credentials) => ({
				method: 'POST',
				url: 'auth/login',
				body: credentials,
				timeout: 5 * 1000,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApi
