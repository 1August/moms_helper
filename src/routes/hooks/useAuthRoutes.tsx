import { Route } from 'react-router-dom'
import { Clean } from '@/layout/Clean'
import { AppSuspense } from '@/components/AppSuspense'
import { LoginLazy } from '@/pages/Login/lazy.ts'
import { Error } from '@/pages/Error'

export const useAuthRoutes = () => {
	return (
		<Route
			path={'/auth'}
			Component={Clean}
		>
			<Route
				path={'login'}
				element={<AppSuspense><LoginLazy /></AppSuspense>}
				errorElement={<Error />}
			/>
		</Route>
	)
}
