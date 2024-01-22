import { lazy } from 'react'

export const AccountLazy = lazy(() =>
	import('./Account.tsx').then(({ Account }) => ({ default: Account })),
)
