import { ComponentProps } from 'react'
import { cn } from '@/utils/utils.ts'

export const Heading2 = (
	{
		children,
		className,
		...props
	}: ComponentProps<'h2'>,
) => {
	return (
		<h2 {...props} className={cn('text-3xl font-bold', className)}>
			{children}
		</h2>
	)
}
