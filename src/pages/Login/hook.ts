import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { userTokenSelector } from '@/store/slices/authSlice/selectors.ts'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormFields } from '@/types/Login.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormFieldsSchema } from '@/schemas/Login.ts'
import { useLoginMutation } from '@/services/auth.ts'
import { useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast.ts'
import { isErrorWithMessage } from '@/utils/api.ts'
import { setAuth } from '@/store/slices/authSlice'
import { localStorageSet } from '@/utils/localStorage.ts'

export const useLogin = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const token = useAppSelector(userTokenSelector)
	const { toast } = useToast()

	const form = useForm<LoginFormFields>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(LoginFormFieldsSchema),
	})

	const {
		formState: {
			defaultValues,
		},
		reset,
	} = form

	const loginMutation = useLoginMutation()
	const [login] = loginMutation

	const onValid: SubmitHandler<LoginFormFields> = async (values) => {
		try {
			const data = await login(values).unwrap()
			localStorageSet('token', data.token)
			dispatch(setAuth(data))

			navigate('/', {
				replace: true,
			})
		} catch (error) {
			if (isErrorWithMessage(error)) {
				toast({
					variant: 'destructive',
					title: error.data.message,
				})
			}
			toast({
				variant: 'destructive',
				title: 'Unknown error',
			})
		}
	}

	const onInvalid: SubmitErrorHandler<LoginFormFields> = (errors) => {
		console.log(errors)
	}

	const handleGoBack = useCallback(() => {
		navigate('/')
	}, [])

	const handleReset = useCallback(() => {
		reset(defaultValues)
	}, [])

	return {
		navigate,
		token,
		form,
		onValid,
		onInvalid,
		handleGoBack,
		handleReset,
		loginMutation,
	}
}
