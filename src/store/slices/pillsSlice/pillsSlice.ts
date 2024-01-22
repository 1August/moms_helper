import { createSlice } from '@reduxjs/toolkit'
import { PillsSliceState } from '@/store/slices/pillsSlice/types.ts'
import { Request } from '@/api/types.ts'

const initialState: PillsSliceState & Request = {
	loading: false,
	error: null,
}
export const pillsSlice = createSlice({
	name: 'pillsSlice',
	initialState,
	reducers: (creators) => ({
		random: creators.reducer(state => {
			state.error = {
				message: 'Some error',
			}
		}),
		// creators.asyncThunk((arg, thunkAPI) => {
		//
		// 	return {
		//
		// 	}
		// }, {
		// 	pending: state => {
		// 		state.loading = true
		// 	},
		// 	rejected: (state, action) => {
		// 		if (axios.isAxiosError(action.payload)) {
		// 			state.error = new Error(action.payload.message)
		// 		}
		// 		if (action.payload && typeof action.payload === 'string') {
		// 			state.error = new Error(action.payload)
		// 		}
		// 		if (
		// 			action.payload && typeof action.payload === 'object' &&
		// 			action.payload.message && typeof action.payload.message === 'string'
		// 		) {
		// 			state.error = new Error(action.payload.message)
		// 		}
		// 		state.error = new Error('Unknown error')
		// 	},
		// 	fulfilled: (state, action) => {
		//
		// 	},
		// 	settled: state => {
		// 		state.loading = false
		// 	},
		// })
	}),
	selectors: {},
})

export const {} = pillsSlice.actions
export default pillsSlice.reducer
