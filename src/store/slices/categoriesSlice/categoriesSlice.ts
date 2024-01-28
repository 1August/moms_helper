import { Category } from '@/types/Category.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Category[] = []
export const categoriesSlice = createSlice({
	name: 'categoriesSlice',
	initialState,
	reducers: (create) => ({
		setCategories: create.reducer((_, action: PayloadAction<Category[]>) => {
			return action.payload
		}),
		clearCategories: create.reducer(() => {
			return []
		}),
	}),
})

export const { setCategories, clearCategories } = categoriesSlice.actions
