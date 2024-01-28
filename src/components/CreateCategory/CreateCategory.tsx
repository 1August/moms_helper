import { createCategory } from '@/api/requests/category.ts'
import { Heading1 } from '@/components/Heading1'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { useToast } from '@/components/ui/use-toast.ts'
import { NewCategory } from '@/types/Category.ts'
import { useMutation } from '@tanstack/react-query'
import {
	Controller,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

export const defaultValues: NewCategory = {
	label: '',
}
export const CreateCategory = () => {
	const { toast } = useToast()
	const { control, handleSubmit, reset, setFocus } = useForm({
		defaultValues,
	})

	const { mutateAsync } = useMutation({
		mutationKey: ['createCategory'],
		mutationFn: async (category: NewCategory) => {
			const res = await createCategory(category)
			return res.data
		},
	})

	const onValid: SubmitHandler<NewCategory> = (data) => {
		mutateAsync(data)
			.then((value) => {
				toast({
					title: 'Success',
					description: 'Category created',
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

	const onInvalid: SubmitErrorHandler<NewCategory> = (errors) => {
		const [k, v] = Object.entries(errors)[0]
		toast({
			variant: 'destructive',
			title: k,
			description: v?.message || 'Error',
		})
		setFocus(k as keyof NewCategory)
	}

	return (
		<div>
			<Heading1>Create Category</Heading1>
			<form onSubmit={handleSubmit(onValid, onInvalid)}>
				<Controller
					name={'label'}
					control={control}
					render={({ field }) => (
						<div>
							<Label htmlFor={'label'}>Category name</Label>
							<Input id={'label'} {...field} />
						</div>
					)}
				/>
				<div>
					<Button type={'submit'}>Create</Button>
				</div>
			</form>
		</div>
	)
}
