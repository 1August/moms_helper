import { Shoppy } from '@/layout/Shoppy'
import { Route } from 'react-router-dom'
import { Error } from '@/pages/Error'
import { AppSuspense } from '@/components/AppSuspense'
import { PillsLazy } from '@/pages/Pills/lazy.ts'
import { PillsItemLazy } from '@/pages/PillsItem/lazy.ts'

export const useServicesRoutes = () => {
	return (
		<Route
			path={'/services'}
			Component={Shoppy}
		>
			<Route
				path={'pills'}
				errorElement={<Error />}
			>
				<Route
					index={true}
					element={<AppSuspense><PillsLazy /></AppSuspense>}
				/>
				<Route
					path={':id'}
					element={<AppSuspense><PillsItemLazy /></AppSuspense>}
				/>
			</Route>
		</Route>
	)
}
