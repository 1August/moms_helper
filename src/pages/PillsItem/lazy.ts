import { lazy } from 'react'

export const PillsItemLazy = lazy(() =>
	import('./PillsItem.tsx').then(({ PillsItem }) => ({ default: PillsItem })),
)
