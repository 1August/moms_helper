import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'
import { ChangeEvent, useCallback } from 'react'
import { ControllerRenderProps, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formValuesSchema } from '@/components/SidebarFilter/schema.ts'
import { filterDefaultValues } from '@/components/SidebarFilter/data.ts'
import { FilterValues } from '@/components/SidebarFilter/types.ts'

export const useSidebarFilter = () => {
	const [queryParams, setQueryParams] = useSearchParams()

	const form = useForm({
		defaultValues: filterDefaultValues,
		resolver: zodResolver(formValuesSchema),
	})

	const onValid: SubmitHandler<FilterValues> = (data) => {
		const res: URLSearchParamsInit = {}

		for (const [k, v] of Object.entries(data)) {
			if (v != null) {
				res[k] = `${v}`
			}
		}

		setQueryParams(res)
	}

	const onInvalid: SubmitErrorHandler<FilterValues> = (errors) => {
		console.error({ errors })
	}

	const handleFromCostInputChange = useCallback(
		(field: ControllerRenderProps<FilterValues, 'fromCost'>) =>
			(e: ChangeEvent<HTMLInputElement>) =>
				field.onChange(+e.target.value),
		[])

	const handleTillCostInputChange = useCallback(
		(field: ControllerRenderProps<FilterValues, 'tillCost'>) =>
			(e: ChangeEvent<HTMLInputElement>) =>
				field.onChange(+e.target.value),
		[])

	const handleResetClick = useCallback(() => form.reset(filterDefaultValues), [])

	return {
		queryParams,
		setQueryParams,
		form,
		onValid,
		onInvalid,
		handleFromCostInputChange,
		handleTillCostInputChange,
		handleResetClick,
	}
}
