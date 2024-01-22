import { lazy } from 'react'

export const PillsLazy = lazy(() =>
	import('./Pills.tsx').then(({ Pills }) => ({ default: Pills })),
)
