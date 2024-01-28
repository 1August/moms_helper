import { instance } from '@/api/instance.ts'
import { AxiosRequestConfig } from 'axios'

export const getCategories = (config?: AxiosRequestConfig) =>
	instance.get('/categories', config)
