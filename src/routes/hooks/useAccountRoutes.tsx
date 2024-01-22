import { Route } from 'react-router-dom'
import { Clean } from '@/layout/Clean'
import { AppSuspense } from '@/components/AppSuspense'
import { AccountLazy } from '@/pages/Account/lazy.ts'
import { Error } from '@/pages/Error'

export const useAccountRoutes = () => {
	return (
		<Route
			path={'/account'}
			Component={Clean}
		>
			<Route
				index={true}
				element={<AppSuspense><AccountLazy /></AppSuspense>}
				errorElement={<Error />}
			/>
			<Route
				path={':id'}
				element={<AppSuspense><AccountLazy /></AppSuspense>}
				errorElement={<Error />}
			/>
		</Route>
	)
}
