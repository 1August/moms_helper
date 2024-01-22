import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { useBaseRoutes } from '@/routes/hooks/useBaseRoutes.tsx'
import { useAuthRoutes } from '@/routes/hooks/useAuthRoutes.tsx'
import { useAccountRoutes } from '@/routes/hooks/useAccountRoutes.tsx'
import { useServicesRoutes } from '@/routes/hooks/useServicesRoutes.tsx'

const baseRoutes = useBaseRoutes()
const authRoutes = useAuthRoutes()
const accountRoutes = useAccountRoutes()
const servicesRoutes = useServicesRoutes()

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{baseRoutes}
			{authRoutes}
			{accountRoutes}
			{servicesRoutes}
		</Route>,
	), {
		future: {
			// Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
			v7_normalizeFormMethod: true,
		},
	})
