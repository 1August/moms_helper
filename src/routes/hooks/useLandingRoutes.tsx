import { Route } from 'react-router-dom'
import { Landing } from '@/layout/Landing'
import { AppSuspense } from '@/components/AppSuspense'
import { HomeLazy } from '@/pages/Home/lazy.ts'
import { Error } from '@/pages/Error'

export const useLandingRoutes = () => {
	return (
		<Route
			path={'/'}
			Component={Landing}
		>
			<Route
				index={true}
				element={<AppSuspense><HomeLazy /></AppSuspense>}
				errorElement={<Error />}
			/>
		</Route>
	)
}
