import { cn } from '@/utils/utils.ts'

export const Loading = () => {
	return (
		<div className={cn('fixed inset-0 z-40 flex items-center justify-center bg-background')}>
			<h1 className={cn('text-2xl font-bold')}>
				Loading...
			</h1>
		</div>
	)
}
