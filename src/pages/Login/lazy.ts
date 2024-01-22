import { lazy } from 'react'

export const LoginLazy = lazy(() =>
	import('./Login.tsx').then(({ Login }) => ({ default: Login })),
)
