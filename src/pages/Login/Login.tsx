import { cn } from '@/utils/utils.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Button } from '@/components/ui/button.tsx'
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { Link, Navigate } from 'react-router-dom'
import { useLogin } from '@/pages/Login/hook.ts'

export const Login = () => {
	const {
		form: {
			handleSubmit,
			control,
		},
		token,
		onValid,
		onInvalid,
		handleGoBack,
		handleReset,
		loginMutation: [, {
			isLoading,
		}],
	} = useLogin()

	if (token) {
		return <Navigate to={'/'} />
	}
	return (
		<main className={cn('min-h-svh flex items-center justify-center')}>
			<div className={cn('min-h-full w-1/3')}>
				<Card className={'shadow-md shadow-rose-400 relative'}>
					<div className={cn('absolute top-2 left-2')}>
						<Button variant={'ghost'} size={'icon'} onClick={handleGoBack}>
							<HiMiniArrowSmallLeft className={cn('text-primary')} />
						</Button>
					</div>
					<CardHeader>
						<CardTitle className={cn('text-center')}>
							Log In
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit(onValid, onInvalid)}>
							<Controller
								control={control}
								name={'email'}
								disabled={isLoading}
								render={(
									{
										field,
										fieldState,
									},
								) => (
									<div>
										<Label htmlFor={'email'}>Email</Label>
										<Input
											{...field}
											id={'email'}
											placeholder={'user@example.com'}
											className={cn('mt-2')}
										/>
										{fieldState.error?.message && <Label className={cn('text-red-500 mt-1')}>
											{fieldState.error.message}
										</Label>}
									</div>
								)}
							/>
							<Controller
								control={control}
								name={'password'}
								disabled={isLoading}
								render={(
									{
										field,
										fieldState,
									},
								) => (
									<div className={cn('mt-4')}>
										<Label htmlFor={'password'}>Password</Label>
										<Input
											{...field}
											type={'password'}
											id={'password'}
											placeholder={'*****'}
											className={cn('mt-2')}
										/>
										{fieldState.error?.message && <Label className={cn('text-red-500 mt-1')}>
											{fieldState.error.message}
										</Label>}
									</div>
								)}
							/>
							<div className={cn('mt-4 flex items-center justify-end gap-4')}>
								<Link
									to={'/auth/signup'}
									className={cn('opacity-70 underline-offset-4', 'hover:opacity-100 hover:underline')}
								>
									Create new account
								</Link>
							</div>
							<div className={cn('mt-8 flex items-center justify-end gap-4')}>
								<Button
									type={'reset'}
									variant={'secondary'}
									onClick={handleReset}
									disabled={isLoading}
								>
									Reset
								</Button>
								<Button
									type={'submit'}
									disabled={isLoading}
								>
									Submit
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}
