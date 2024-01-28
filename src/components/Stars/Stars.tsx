import { cn } from '@/utils/utils.ts'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

export interface StarsProps {
	stars: number
	className?: string
}

export const Stars = ({ stars, className }: StarsProps) => {
	return (
		<div className={cn('flex items-center justify-start', className)}>
			{new Array(Math.floor(stars)).fill(null).map((_, i) => (
				<FaStar key={i} />
			))}
			{stars.toString().split('.')[1] && <FaStarHalfAlt />}
			{new Array(Math.floor(5 - stars)).fill(null).map((_, i) => (
				<FaRegStar key={i} />
			))}
			<span className={cn('ml-2')}>{stars}</span>
		</div>
	)
}
