import { ComponentProps } from 'react'
import { cn } from '@/utils/utils.ts'

export const Heading4 = (
	{
		children,
		className,
		...props
	}: ComponentProps<'h4'>,
) => {
	return (
		<h4 {...props} className={cn('text-2xl font-bold', className)}>
			{children}
		</h4>
	)
}
