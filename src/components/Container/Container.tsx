import { cn } from '@/utils/utils.ts'
import { PropsWithChildren } from 'react'

interface ContainerProps {
	className?: string;
	noPadding?: boolean;
}

export const Container = (
	{
		children,
		className = '',
		noPadding = false,
	}: PropsWithChildren<ContainerProps>,
) => {
	return (
		<div className={cn({ 'px-3 md:px-6 lg:px-12 xl:px-24': !noPadding }, className)}>
			{children}
		</div>
	)
}
