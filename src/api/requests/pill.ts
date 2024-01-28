import { instance } from '@/api/instance.ts'
import { AxiosRequestConfig } from 'axios'
import { ID } from '@/types/shapeTypes.ts'
import { NewPill } from '@/types/Pill.ts'

export const getPill = (id: ID, config?: Omit<AxiosRequestConfig, 'params'>) =>
	instance.get('/pills/pill', { params: { id }, ...config })

export const createPill = (pill: NewPill, config?: AxiosRequestConfig) =>
	instance.post('/pills/pill', pill, config)
