import { getCategories } from '@/api/requests/categories.ts'
import { createPill } from '@/api/requests/pill.ts'
import { Heading1 } from '@/components/Heading1'
import { Button } from '@/components/ui/button.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { useToast } from '@/components/ui/use-toast.ts'
import { CategoriesSchema } from '@/schemas/Categories.ts'
import { NewPillSchema } from '@/schemas/Pill.ts'
import { NewPill } from '@/types/Pill.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
	Controller,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

export const defaultValues: NewPill = {
	title: '',
	shortDescription: '',
	description: '',
	content: '',
	categories: [],
	src: '',
	alt: '',
	stars: 0,
}

export const CreatePill = () => {
	const { toast } = useToast()
	const { control, handleSubmit, reset, setFocus } = useForm<NewPill>({
		defaultValues,
		resolver: zodResolver(NewPillSchema),
	})

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['newPill'],
		mutationFn: async (pill: NewPill) => {
			const res = await createPill(pill)
			return res.data
		},
	})

	const {
		data: categories,
		isFetching: isCategoriesLoading,
		error: categoriesError,
		refetch,
	} = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const res = await getCategories()
			return CategoriesSchema.parse(res.data)
		},
	})

	const onValid: SubmitHandler<NewPill> = (data) => {
		mutateAsync(data)
			.then(() => {
				toast({
					title: 'Success',
				})

				reset(defaultValues)
			})
			.catch((reason) => {
				toast({
					variant: 'destructive',
					title: 'Error',
					description: reason,
				})
			})
	}

	const onInvalid: SubmitErrorHandler<NewPill> = (errors, event) => {
		event?.preventDefault()
		const [k, v] = Object.entries(errors)[0]
		toast({
			variant: 'destructive',
			title: k,
			description: v?.message || 'Error',
		})
		setFocus(k as keyof NewPill)
	}

	const handleReset = () => reset(defaultValues)

	if (isPending) {
		return <h1>Loading</h1>
	}
	if (categoriesError) {
		return <h1>{categoriesError?.message || 'Error'}</h1>
	}
	return (
		<div>
			<Heading1>Create New Pill</Heading1>
			<form onSubmit={handleSubmit(onValid, onInvalid)}>
				<Controller
					name={'title'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'title'}>Title</Label>
							<Input id={'title'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'shortDescription'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'shortDescription'}>Short description</Label>
							<Input id={'shortDescription'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'description'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'description'}>Description</Label>
							<Input id={'description'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'content'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'content'}>Content</Label>
							<Input id={'content'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'src'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'src'}>Image source</Label>
							<Input id={'src'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'alt'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'alt'}>Image description</Label>
							<Input id={'alt'} {...field} />
						</div>
					)}
				/>
				<Controller
					name={'stars'}
					control={control}
					render={({ field: { onChange, ...otherFields } }) => (
						<div>
							<Label htmlFor={'stars'}>Stars</Label>
							<Input
								id={'stars'}
								{...otherFields}
								onChange={(e) => onChange(+e.target.value)}
							/>
						</div>
					)}
				/>
				<Controller
					name={'categories'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'categories'}>Categories</Label>
							{isCategoriesLoading ? (
								<h1>Loading</h1>
							) : categories?.length ? (
								categories.map((category) => (
									<div key={category.label}>
										<Checkbox
											id={category.label}
											checked={field.value.includes(category._id)}
											onCheckedChange={(checked) => {
												return checked
													? field.onChange([...field.value, category._id])
													: field.onChange(
															field.value.filter((id) => id !== category._id)
														)
											}}
										/>
										<Label htmlFor={category.label}>{category.label}</Label>
									</div>
								))
							) : (
								<h1>
									There is no available categories. Please first create them
								</h1>
							)}
						</div>
					)}
				/>
				<div>
					<Button variant={'outline'} onClick={handleReset}>
						Reset
					</Button>
					<Button type={'submit'}>Create</Button>
				</div>
			</form>
			<Button
				type={'button'}
				variant={'secondary'}
				onClick={() => {
					refetch()
				}}
			>
				Update categories
			</Button>
		</div>
	)
}
