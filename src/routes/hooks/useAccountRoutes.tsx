import { Route } from 'react-router-dom'
import { AppSuspense } from '@/components/AppSuspense'
import { AccountLazy } from '@/pages/Account/lazy.ts'
import { Error } from '@/pages/Error'
import { Simple } from '@/layout/Simple'

export const useAccountRoutes = () => {
	return (
		<Route
			path={'/account'}
			Component={Simple}
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
