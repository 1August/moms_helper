import { instance } from '@/api/instance.ts'
import { AxiosRequestConfig } from 'axios'
import { NewCategory } from '@/types/Category.ts'

export const createCategory = (
	category: NewCategory,
	config?: AxiosRequestConfig
) => instance.post('/categories/category', category, config)
