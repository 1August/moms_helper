import { PropsWithChildren } from 'react'
import { cn } from '@/utils/utils.ts'

export interface SectionProps {
	withMarginTop?: boolean
	className?: string
}

export const Section = (
	{
		children,
		withMarginTop = false,
		className = '',
	}: PropsWithChildren<SectionProps>,
) => {
	return (
		<section className={cn({ 'mt-8': withMarginTop }, className)}>
			{children}
		</section>
	)
}
