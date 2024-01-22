import { ComponentProps } from 'react'
import { cn } from '@/utils/utils.ts'

export const Heading3 = (
	{
		children,
		className,
		...props
	}: ComponentProps<'h3'>,
) => {
	return (
		<h3 {...props} className={cn('text-2xl font-bold', className)}>
			{children}
		</h3>
	)
}
