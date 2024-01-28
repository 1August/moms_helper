import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { cn } from '@/utils/utils.ts'
import { CardContent, CardDescription, CardHeader, CardInteractive, CardTitle, } from '@/components/ui/card.tsx'
import { Link } from 'react-router-dom'
import { Heading2 } from '@/components/Heading2'

import mukaltin from '@/assets/Mucaltin.png'
import { HomeHeroSection } from '@/components/HomeHeroSection'

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
	return (
		<main>
			<HomeHeroSection />
			<Section withMarginTop>
				<Container>
					<Heading2>Services</Heading2>
					<div className={cn('grid grid-cols-4 gap-4 mt-4')}>
						{services.map((service) => (
							<CardInteractive key={service.label} className={cn('relative')}>
								<CardHeader>
									<CardDescription>
										<img
											className={cn(
												'w-full aspect-square rounded object-center object-cover bg-primary-foreground'
											)}
											src={service.src}
											alt={service.alt}
										/>
									</CardDescription>
								</CardHeader>
								<CardContent>
									<CardTitle>
										<Link
											to={service.url}
											className={cn(
												'static text-primary',
												'after:absolute after:inset-0',
												'hover:underline'
											)}
										>
											{service.label}
										</Link>
									</CardTitle>
								</CardContent>
							</CardInteractive>
						))}
					</div>
				</Container>
			</Section>
		</main>
	)
}
