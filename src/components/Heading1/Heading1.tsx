import { ComponentProps } from 'react'
import { cn } from '@/utils/utils.ts'

export const Heading1 = (
	{
		children,
		className,
		...props
	}: ComponentProps<'h1'>,
) => {
	return (
		<h1 {...props} className={cn('text-4xl font-bold', className)}>
			{children}
		</h1>
	)
}
