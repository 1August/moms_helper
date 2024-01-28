import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { CreatePill } from '@/components/CreatePill'
import { Separator } from '@/components/ui/separator.tsx'
import { CreateCategory } from '@/components/CreateCategory'

export const Account = () => {
	return (
		<main>
			<Section>
				<Container>
					<CreatePill />
				</Container>
			</Section>
			<Section withMarginTop>
				<Separator />
			</Section>
			<Section withMarginTop>
				<Container>
					<CreateCategory />
				</Container>
			</Section>
		</main>
	)
}
