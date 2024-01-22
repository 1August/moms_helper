import { cn } from '@/utils/utils.ts'
import { Heading4 } from '@/components/Heading4'
import { Input } from '@/components/ui/input.tsx'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { useSidebarFilter } from '@/components/SidebarFilter/hook.ts'

export const SidebarFilter = () => {
	const {
		form: {
			control,
			handleSubmit,
		},
		onValid,
		onInvalid,
		handleFromCostInputChange,
		handleTillCostInputChange,
		handleResetClick,
	} = useSidebarFilter()

	return (
		<div className={cn('px-4')}>
			<Heading4>
				Filters
			</Heading4>
			<Separator />
			<form
				onSubmit={handleSubmit(onValid, onInvalid)}
				className={cn('grid gap-4 mt-8')}
			>
				<div className={cn('flex gap-4 items-center justify-between')}>
					<Controller
						control={control}
						name={'fromCost'}
						render={({ field }) => (
							<Input
								placeholder={'0'}
								{...field}
								value={field?.value || undefined}
								onChange={handleFromCostInputChange(field)}
							/>
						)}
					/>
					<span>-</span>
					<Controller
						control={control}
						name={'tillCost'}
						render={({ field }) => (
							<Input
								placeholder={'10 000'}
								{...field}
								value={field?.value || undefined}
								onChange={handleTillCostInputChange(field)}
							/>
						)}
					/>
				</div>
				<div className={cn('mt-4 flex flex-wrap gap-4 items-center justify-end')}>
					<Button
						variant={'outline'}
						type={'reset'}
						onClick={handleResetClick}
					>
						Reset
					</Button>
					<Button
						type={'submit'}
					>
						Submit
					</Button>
				</div>
			</form>
		</div>
	)
}
