import { Heading1 } from '@/components/Heading1'
import { CardContent, CardDescription, CardHeader, CardInteractive, CardTitle } from '@/components/ui/card.tsx'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'

const pills = [
	{
		id: 1,
		title: 'Lorem 1',
		description: 'Lorem ipsum dolor sit amet',
	},
	{
		id: 2,
		title: 'Lorem 2',
		description: 'Lorem ipsum dolor sit amet',
	},
	{
		id: 3,
		title: 'Lorem 3',
		description: 'Lorem ipsum dolor sit amet',
	},
]
export const Pills = () => {
	return (
		<main>
			<div>
				<Heading1>Pills</Heading1>
				<div className={cn('mt-4 grid grid-cols-3 gap-4')}>
					{
						pills.map(pill => (
							<CardInteractive
								key={pill.id}
								className={cn('relative')}
							>
								<CardHeader>
									<CardTitle>
										<Link
											to={`/services/pills/${pill.id}`}
											className={cn('static', 'after:absolute after:inset-0')}
										>
											{pill.title}
										</Link>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										{pill.description}
									</CardDescription>
								</CardContent>
							</CardInteractive>
						))
					}
				</div>
			</div>
		</main>
	)
}
