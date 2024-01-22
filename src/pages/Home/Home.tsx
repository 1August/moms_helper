import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { cn } from '@/utils/utils.ts'
import banner from '../../assets/banana.jpg'
import { useAppSelector } from '@/store/hooks.ts'
import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Link } from 'react-router-dom'
import { Heading2 } from '@/components/Heading2'
import { Heading3 } from '@/components/Heading3'

import mukaltin from '@/assets/Mucaltin.png'
import { userSelector } from '@/store/slices/authSlice/selectors.ts'

export interface Service {
	label: string
	src: string
	alt: string
	url: `/services/${string}`
}

const services: Service[] = [
	{
		label: 'Pills',
		src: mukaltin,
		alt: 'Pills service page',
		url: '/services/pills',
	},
	// {
	// 	label: 'Some service',
	// 	src: '',
	// 	alt: 'Some service page',
	// 	url: '/services/unknown',
	// },
]
export const Home = () => {
	const user = useAppSelector(userSelector)

	useEffect(() => {
		console.log({ user })
	}, [user])

	return (
		<main>
			<Section>
				<Container noPadding className={cn('aspect-[3/1] flex items-center justify-center overflow-hidden')}>
					<div className={cn('w-full')}>
						<img src={banner} alt='Banana photo' className={cn('w-full object-center object-cover')} />
					</div>
				</Container>
			</Section>
			<Section withMarginTop>
				<Container>
					<Heading2>Services</Heading2>
					<div className={cn('grid grid-cols-4 gap-4 mt-4')}>
						{
							services.map(service => (
								<Card className={cn('relative hover:shadow-md hover:border-gray-500')}>
									<CardHeader>
										<CardTitle>
											<img
												className={cn('w-full aspect-square rounded object-center object-cover bg-primary-foreground')}
												src={service.src}
												alt={service.alt}
											/>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>
											<Heading3>
												<Link to={service.url}
															className={cn('static after:absolute after:inset-0 text-primary', 'hover:underline')}>
													{service.label}
												</Link>
											</Heading3>
										</CardDescription>
									</CardContent>
								</Card>
							))
						}
					</div>
				</Container>
			</Section>
		</main>
	)
}
