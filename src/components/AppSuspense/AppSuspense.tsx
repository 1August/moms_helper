import { PropsWithChildren, Suspense } from 'react'
import { Loading } from '@/components/Loading'

export const AppSuspense = ({ children }: PropsWithChildren) => {
	return (
		<Suspense fallback={<Loading />} children={children} />
	)
}
