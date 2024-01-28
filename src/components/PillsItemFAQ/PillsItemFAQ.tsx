import { Heading3 } from '@/components/Heading3'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion.tsx'
import { cn } from '@/utils/utils.ts'
import { FAQ } from '@/types/FAQ.ts'

export interface PillsItemFAQProps {
	faq: FAQ[]
	className?: string
}

export const PillsItemFAQ = ({ faq, className }: PillsItemFAQProps) => {
	return (
		<div className={cn(className)}>
			<Heading3>FAQ</Heading3>
			<div>
				{faq.map((data) => (
					<Accordion key={data.label} type={'single'} collapsible>
						<AccordionItem value={data.label}>
							<AccordionTrigger>{data.label}</AccordionTrigger>
							<AccordionContent>{data.description}</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	)
}
