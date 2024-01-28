import { getPills } from '@/api/requests/pills.ts'
import { Heading1 } from '@/components/Heading1'
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardInteractive,
	CardTitle,
} from '@/components/ui/card.tsx'
import { PillsSchema } from '@/schemas/Pills.ts'
import { cn } from '@/utils/utils.ts'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export const Pills = () => {
	const {
		data: pills,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['pills'],
		queryFn: async () => {
			const res = await getPills()
			return PillsSchema.parse(res.data)
		},
		retry: false,
	})

	if (isLoading) {
		return <h1>Loading</h1>
	}
	if (!pills || error) {
		return <h1>{error?.message || 'Error'}</h1>
	}
	return (
		<main>
			<div>
				<Heading1>Pills</Heading1>
				<div
					className={cn(
						'mt-4 grid',
						'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
						'gap-4 lg:gap-8'
					)}
				>
					{pills.map((pill) => (
						<CardInteractive key={pill._id} className={cn('relative')}>
							<CardHeader>
								<CardTitle>
									<Link
										to={`/services/pills/${pill._id}`}
										className={cn('static', 'after:absolute after:inset-0')}
									>
										{pill.title}
									</Link>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{pill.description}</CardDescription>
							</CardContent>
						</CardInteractive>
					))}
				</div>
			</div>
		</main>
	)
}
