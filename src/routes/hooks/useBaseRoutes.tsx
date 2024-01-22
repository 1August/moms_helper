import { Route } from 'react-router-dom'
import { Simple } from '@/layout/Simple'
import { AppSuspense } from '@/components/AppSuspense'
import { HomeLazy } from '@/pages/Home/lazy.ts'
import { Error } from '@/pages/Error'

export const useBaseRoutes = () => {
	return (
		<Route
			path={'/'}
			Component={Simple}
		>
			<Route
				index={true}
				element={<AppSuspense><HomeLazy /></AppSuspense>}
				errorElement={<Error />}
			/>
		</Route>
	)
}
