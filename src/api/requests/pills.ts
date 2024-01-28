import { instance } from '@/api/instance.ts'
import { AxiosRequestConfig } from 'axios'

export const getPills = (config?: AxiosRequestConfig) =>
	instance.get('/pills', config)
