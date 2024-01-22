import { Selector } from '@reduxjs/toolkit'
import { RootState } from '@/store/types.ts'

export const userSelector: Selector = (state: RootState) => state.auth.user
export const userTokenSelector: Selector = (state: RootState) => state.auth.token
