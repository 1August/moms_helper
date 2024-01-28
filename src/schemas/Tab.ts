import { custom, object, string } from 'zod'
import { FC } from 'react'

export const TabSchema = object({
	value: string(),
	label: string(),
	component: custom<FC>(),
})
