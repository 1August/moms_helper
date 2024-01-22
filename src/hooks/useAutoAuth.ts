import { localStorageGet } from '@/utils/localStorage.ts'
import { decodeToken, isExpired } from 'react-jwt'
import { toast } from '@/components/ui/use-toast.ts'
import { DecodedUserToken } from '@/types/User.ts'
import { useAppDispatch } from '@/store/hooks.ts'
import { initialState, setAuth } from '@/store/slices/authSlice'
import { useEffect } from 'react'

const TOKEN_VALIDATE_TIMER = 60 * 1_000 // 1 minute
export const useAutoAuth = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const validateToken = () => {
			const token = localStorageGet<string>('token')
			console.log({ token })
			if (token == null) {
				return
			}
			if (isExpired(token)) {
				toast({
					variant: 'destructive',
					title: 'Token is expired. Please, log in into the system',
				})
				dispatch(setAuth(initialState))
				return
			}

			const user = decodeToken(token) as DecodedUserToken
			console.log({ decodedUser: user })
			dispatch(setAuth({
				user: {
					id: user.id,
					email: user.email,
				},
				token,
			}))
		}

		validateToken()

		const id = setInterval(() => {
			validateToken()
		}, TOKEN_VALIDATE_TIMER)

		return () => {
			clearInterval(id)
		}
	}, [])
}
