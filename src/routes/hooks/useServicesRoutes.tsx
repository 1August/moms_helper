import { Shoppy } from '@/layout/Shoppy'
import { Route } from 'react-router-dom'
import { Error } from '@/pages/Error'
import { AppSuspense } from '@/components/AppSuspense'
import { PillsLazy } from '@/pages/Pills/lazy.ts'
import { Simple } from '@/layout/Simple'
import { PillsItemLazy } from '@/pages/PillsItem/lazy.ts'

export const useServicesRoutes = () => {
	return (
		<Route path={'/services'} errorElement={<Error />}>
			<Route path={'pills'} errorElement={<Error />}>
				<Route Component={Shoppy} errorElement={<Error />}>
					<Route
						index={true}
						element={
							<AppSuspense>
								<PillsLazy />
							</AppSuspense>
						}
						errorElement={<Error />}
					/>
				</Route>
				<Route Component={Simple} errorElement={<Error />}>
					<Route
						path={':id'}
						element={
							<AppSuspense>
								<PillsItemLazy />
							</AppSuspense>
						}
						errorElement={<Error />}
					/>
				</Route>
			</Route>
		</Route>
	)
}
