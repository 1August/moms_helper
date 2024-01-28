import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { cn } from '@/utils/utils.ts'
import { Heading1 } from '@/components/Heading1'
import { Button } from '@/components/ui/button.tsx'
import medicineLogo from '@/assets/medicine_logo.png'

export const HomeHeroSection = () => {
	return (
		<Section className={cn('border-b-2')}>
			<Container
				className={cn(
					'items-center justify-center overflow-hidden grid grid-cols-3 gap-8'
				)}
			>
				<div className={cn('my-8')}>
					<Heading1 className={cn('text-balance')}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
						quia.
					</Heading1>
					<p className={cn('mt-4 text-justify')}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
						enim esse ipsa mollitia pariatur praesentium suscipit? Earum
						excepturi, laudantium nemo non quia vel. Blanditiis consequuntur est
						excepturi exercitationem obcaecati placeat quo repellendus suscipit
						vero voluptates! Adipisci aliquid asperiores doloribus earum hic
						impedit in ipsa, non, odio ratione reiciendis, sapiente sed!
					</p>
					<div className={cn('mt-4 flex items-center justify-start gap-4')}>
						<Button variant={'outline'}>Secondary</Button>
						<Button>Click me</Button>
					</div>
				</div>
				<img
					src={medicineLogo}
					alt='Banana photo'
					className={cn('p-4 h-full w-full object-center object-contain')}
				/>
				<div className={cn('my-8')}>
					<p className={cn('text-justify')}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
						culpa, delectus ducimus eligendi, error iure magni odio omnis,
						praesentium temporibus totam voluptates. Itaque labore nam odit
						porro qui quidem unde.
					</p>
					<p className={cn('mt-8 text-justify')}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
						aperiam asperiores atque autem culpa eaque et eum facilis ipsum
						labore magnam maiores molestiae possimus quae quis quo rem
						repudiandae, voluptates.
					</p>
					<p className={cn('mt-8 text-justify')}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
						aperiam aspernatur atque, consectetur consequatur corporis dolor
						exercitationem illum impedit, incidunt inventore minima nesciunt
						odit omnis quae quos sint soluta vero!
					</p>
				</div>
			</Container>
		</Section>
	)
}
