import { getPill } from '@/api/requests/pill.ts'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { Heading1 } from '@/components/Heading1'
import { Heading2 } from '@/components/Heading2'
import { Heading3 } from '@/components/Heading3'
import { Heading4 } from '@/components/Heading4'
import { PillsItemFAQ } from '@/components/PillsItemFAQ'
import { Section } from '@/components/Section'
import { Stars } from '@/components/Stars'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardInteractive,
	CardTitle,
} from '@/components/ui/card.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { PillSchema } from '@/schemas/Pill.ts'
import { Pill } from '@/types/Pill.ts'
import { cn } from '@/utils/utils.ts'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

// TODO: zoomable pill image
export const PillsItem = () => {
	const { id } = useParams()
	const queryKey = (() => {
		const keys = ['pill']
		if (id) {
			keys.push(`pill/${id}`)
		}
		return keys
	})()

	const {
		data: product,
		isLoading,
		error,
	} = useQuery({
		queryKey,
		queryFn: async () => {
			if (!id) {
				throw new Error('ID was not found')
			}
			const res = await getPill(id)

			if (res.data == null) {
				throw new Error('Pill not found')
			}

			return PillSchema.parse(res.data)
		},
	})

	if (isLoading) {
		return <h1>Loading</h1>
	}
	if (!product || error) {
		return <h1>{error?.message || 'Error'}</h1>
	}
	return (
		<main className={cn('mt-8')}>
			<Section>
				<Container>
					<Breadcrumb />
				</Container>
			</Section>
			<Section withMarginTop>
				<Container
					className={cn(
						'grid items-start',
						'sm:grid-cols-[2fr_3fr] md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]',
						'gap-4 md:gap-8'
					)}
				>
					<Card className={cn('sm:sticky top-8', 'shadow-xl dark:shadow-none')}>
						<CardHeader>
							<CardTitle>
								<img
									src={product.src}
									className={cn(
										'rounded bg-primary-foreground w-full aspect-square object-center object-cover'
									)}
									alt={product.alt}
								/>
							</CardTitle>
						</CardHeader>
						<CardContent className={cn('mt-4')}>
							<Stars stars={product.stars} />
							<CardTitle className={cn('mt-4')}>{product.title}</CardTitle>
							<CardDescription className={cn('mt-4')}>
								{product.shortDescription}
							</CardDescription>
							<div className={cn('mt-4')}>
								Categories:&nbsp;
								<span>
									{product.categories.map((category, i) => (
										<>
											<Link
												key={category._id}
												to={`/category/${category._id}`}
												className={cn('hover:underline')}
											>
												{category.label}
											</Link>
											{i !== product.categories.length - 1 && (
												<span key={'span_' + category._id}>,&nbsp;</span>
											)}
										</>
									))}
								</span>
							</div>
						</CardContent>
					</Card>
					<div>
						<Heading1 className={cn('text-balance')}>{product.title}</Heading1>
						<Heading4 className={cn('mt-4 text-balance')}>
							Описание: {product.description}
						</Heading4>
						<p className={cn('mt-4 text-justify')}>{product.content}</p>
						<div className={cn('mt-8')}>
							<Heading3>Some categories</Heading3>
							<Tabs
								defaultValue={product.tabs?.[0].value}
								className={cn('mt-4')}
							>
								<TabsList className={cn('w-full justify-start')}>
									{product.tabs?.map((tab) => (
										<TabsTrigger value={tab.value} key={tab.label}>
											{tab.label}
										</TabsTrigger>
									))}
								</TabsList>
								{product.tabs?.map((tab) => (
									<TabsContent value={tab.value} key={tab.label}>
										<tab.component />
									</TabsContent>
								))}
							</Tabs>
						</div>
						<PillsItemFAQ faq={product.faq || []} className={cn('mt-8')} />
					</div>
				</Container>
			</Section>
			<Section withMarginTop>
				<Container>
					<Separator />
				</Container>
			</Section>
			<Section withMarginTop>
				<Container>
					<Heading2>Related products</Heading2>
					<div
						className={cn(
							'grid gap-8 mt-4',
							'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
						)}
					>
						{new Array(10)
							.fill(null)
							.map(
								(_, i): Pill => ({
									_id: `${i}`,
									title: `Some title ${i}`,
									description: 'Description',
									shortDescription: 'Short description',
									src: '',
									alt: 'No image',
									categories: [],
									stars: Math.max(Math.min(i, 5), 0),
									content:
										'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, odio.',
								})
							)
							.map((d) => PillSchema.parse(d))
							.map((card) => (
								<CardInteractive key={card._id} className={cn('py-12')}>
									<CardHeader>
										<CardTitle>{card.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<Stars stars={card?.stars ?? 0} />
										<CardDescription>{card.description}</CardDescription>
									</CardContent>
								</CardInteractive>
							))}
					</div>
				</Container>
			</Section>
		</main>
	)
}
