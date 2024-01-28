import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '@/types/Category.ts'

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BACKEND_URL,
	}),
	endpoints: (builder) => ({
		getCategories: builder.query<Category[], void>({
			query: () => ({
				method: 'GET',
				url: '/categories',
				timeout: 5 * 1000,
			}),
		}),
	}),
})

export const { useGetCategoriesQuery } = categoriesApi
