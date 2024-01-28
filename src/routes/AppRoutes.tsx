import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { useLandingRoutes } from '@/routes/hooks/useLandingRoutes.tsx'
import { useAuthRoutes } from '@/routes/hooks/useAuthRoutes.tsx'
import { useAccountRoutes } from '@/routes/hooks/useAccountRoutes.tsx'
import { useServicesRoutes } from '@/routes/hooks/useServicesRoutes.tsx'
import { Error } from '@/pages/Error'

const landingRoutes = useLandingRoutes()
const authRoutes = useAuthRoutes()
const accountRoutes = useAccountRoutes()
const servicesRoutes = useServicesRoutes()

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{landingRoutes}
			{authRoutes}
			{accountRoutes}
			{servicesRoutes}
			<Route
				path={'*'}
				element={<Error />}
			/>
		</Route>,
	), {
		future: {
			// Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
			v7_normalizeFormMethod: true,
		},
	})
