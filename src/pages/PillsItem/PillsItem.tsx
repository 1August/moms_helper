import { Container } from '@/components/Container'
import { cn } from '@/utils/utils.ts'
import { Card, CardContent, CardDescription, CardHeader, CardInteractive, CardTitle } from '@/components/ui/card.tsx'

import temp from '@/assets/Mucaltin.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.tsx'
import { Heading1 } from '@/components/Heading1'
import { Heading3 } from '@/components/Heading3'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx'
import { Section } from '@/components/Section'
import { Separator } from '@/components/ui/separator.tsx'
import { Heading4 } from '@/components/Heading4'
import { Heading2 } from '@/components/Heading2'

const thisProduct = {
	title: 'Lorem',
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sunt.',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque esse et laboriosam officia omnis porro quos sapiente veniam voluptatibus. Atque expedita illum iusto laborum nemo nisi, pariatur voluptas voluptate.',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis culpa debitis earum eos esse facilis fugit incidunt laudantium minima minus, modi, officia porro repellendus sunt. Asperiores beatae commodi consequuntur doloremque eligendi ex fugit illo in incidunt iste iusto labore laborum magni minima nihil nulla numquam omnis, perspiciatis porro possimus praesentium provident quam quas, sequi ullam veritatis voluptatibus! Est et, exercitationem hic qui repellat voluptates voluptatibus! Ab aliquid assumenda at cupiditate distinctio dolor et exercitationem in iusto labore laudantium maxime minus necessitatibus nesciunt numquam, placeat, quibusdam repellendus repudiandae sapiente sed sit tempore ullam voluptate! Ea inventore nisi numquam quasi unde. Ad animi aspernatur aut blanditiis cumque delectus distinctio dolor dolorem dolorum esse eveniet expedita fugiat ipsa laudantium maiores molestias nemo nihil nobis nulla obcaecati optio placeat quae, ratione recusandae reiciendis sed velit voluptatibus? Accusantium culpa dolor eveniet perferendis qui, quidem repudiandae sit temporibus? Dignissimos dolores ipsum nam totam velit! Iste.',
	src: temp,
	alt: 'Lorem alt',
	stars: 4.5,
	tabs: [
		{
			value: 'tab1',
			label: 'Tab 1',
			component: () => <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, deserunt eaque
				excepturi
				ipsum, iste minus molestiae odio omnis placeat, rem tempore ut voluptatum! Ad aliquid dicta doloribus enim
				eveniet
				excepturi explicabo, facilis in inventore itaque libero maiores, nesciunt optio qui quos sequi sunt veniam!
				Fugit
				mollitia nam pariatur perferendis recusandae saepe tempora? Aperiam, asperiores beatae corporis nam praesentium
				velit. Ad at dolore ea et id incidunt ipsa minima molestias mollitia nam nisi nulla obcaecati praesentium
				provident suscipit, tempora voluptas. A alias aliquam amet dignissimos et eum fugit illo ipsam molestias nemo,
				nisi non officia perferendis quae quam sit soluta vitae!</h1>,
		},
		{
			value: 'tab2',
			label: 'Tab 2',
			component: () => <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorum facere libero
				natus numquam sapiente sequi ullam vero. Ea, recusandae, ullam? Consectetur doloremque eveniet fuga nisi omnis
				porro quod quos repellendus soluta tenetur. Consequatur, culpa delectus dolor et in nobis quaerat. Aliquid
				commodi
				corporis distinctio dolores ipsam nihil repellat? Aliquam asperiores aspernatur aut blanditiis consectetur
				ducimus
				ea eaque est minus necessitatibus non nostrum odio, officia optio qui quisquam reprehenderit rerum sed soluta
				veniam. A accusamus, accusantium, architecto beatae consequatur corporis delectus deserunt eius fugiat hic illum
				in magnam molestias obcaecati odit officiis optio perferendis quod rem sed sequi ullam unde?</h1>,
		},
		{
			value: 'tab3',
			label: 'Tab 3',
			component: () => <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maxime molestiae
				necessitatibus, nemo veritatis vitae voluptatibus? Accusamus accusantium amet dicta magnam magni. Autem
				consectetur, doloribus eos impedit in incidunt iusto laborum molestiae neque nisi nostrum odio officia placeat
				quisquam quod, reiciendis repellat voluptates. Asperiores atque consectetur cupiditate debitis dolore eligendi
				eos
				et iure maiores molestiae necessitatibus non officiis provident qui quibusdam recusandae repellendus rerum sunt
				tempora, voluptatem. Amet animi consequatur corporis cum debitis distinctio eligendi esse et expedita facere
				illum
				incidunt inventore ipsam libero molestiae nam nihil nisi nobis optio perferendis quam, repellat repudiandae
				rerum
				sit sunt vitae voluptas voluptatibus.</h1>,
		},
	],
	faq: [
		{
			label: 'Lorem ipsum 1',
			description: 'lorem ipsum dolor sit amet 1.',
		},
		{
			label: 'Lorem ipsum 2',
			description: 'lorem ipsum dolor sit amet 2.',
		},
		{
			label: 'Lorem ipsum 3',
			description: 'lorem ipsum dolor sit amet 3.',
		},
	],
}
export const PillsItem = () => {
	return (
		<main className={cn('mt-8')}>
			<Section>
				<Container
					className={
						cn(
							'grid items-start',
							'sm:grid-cols-[2fr_3fr] md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]',
							'gap-4 md:gap-8',
						)
					}
				>
					<Card>
						<CardHeader>
							<CardTitle>
								<img
									src={thisProduct.src}
									className={cn('rounded bg-primary-foreground w-full aspect-square object-center object-cover')}
									alt={thisProduct.alt}
								/>
							</CardTitle>
						</CardHeader>
						<CardContent className={cn('mt-4')}>
							<CardTitle>
								{thisProduct.title}
							</CardTitle>
							<CardDescription className={cn('mt-4')}>
								{thisProduct.shortDescription}
							</CardDescription>
						</CardContent>
					</Card>
					<div>
						<Heading1>
							{thisProduct.title}
						</Heading1>
						<Heading4 className={cn('mt-4')}>
							{thisProduct.description}
						</Heading4>
						<p className={cn('mt-4')}>
							{thisProduct.content}
						</p>
						<div className={cn('mt-8')}>
							<Heading3>
								Some categories
							</Heading3>
							<Tabs defaultValue='tab1' className={cn('mt-4')}>
								<TabsList className={cn('w-full justify-start')}>
									{
										thisProduct.tabs.map(tab => (
											<TabsTrigger value={tab.value}>
												{tab.label}
											</TabsTrigger>
										))
									}
								</TabsList>
								{thisProduct.tabs.map(tab => (
									<TabsContent
										value={tab.value}
									>
										<tab.component />
									</TabsContent>
								))}
							</Tabs>
						</div>
						<div className={cn('mt-8')}>
							<Heading3>
								FAQ
							</Heading3>
							<div>
								{
									thisProduct.faq.map(data => (
										<Accordion
											key={data.label}
											type={'single'}
											collapsible
										>
											<AccordionItem value={data.label}>
												<AccordionTrigger>
													{data.label}
												</AccordionTrigger>
												<AccordionContent>
													{data.description}
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									))
								}

							</div>
						</div>
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
					<Heading2>
						Related products
					</Heading2>
					<div className={cn('grid grid-cols-4 gap-8 mt-4')}>
						{
							new Array(5)
								.fill({
									title: 'Some title',
									description: 'Description',
								})
								.map(card => (
									<CardInteractive
										key={card.title}
										className={cn('py-12')}
									>
										<CardHeader>
											<CardTitle>
												{card.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>
												{card.description}
											</CardDescription>
										</CardContent>
									</CardInteractive>
								))
						}

					</div>
				</Container>
			</Section>
		</main>
	)
}
