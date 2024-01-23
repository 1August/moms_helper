import { toast } from '@/components/ui/use-toast.ts'

export const localStorageGet = <T, >(key: string): T | null => {
	try {
		const stringValue = localStorage.getItem(key)

		if (stringValue == null) {
			return null
		}
		return JSON.parse(stringValue) satisfies T
	} catch (error: unknown) {
		console.log(error)
		toast({
			variant: 'destructive',
			title: typeof error === 'object' &&
				error != null &&
				'message' in error &&
				typeof error.message == 'string' &&
				error?.message || 'Error on local storage',
		})
		return null
	}
}

export const localStorageSet = (key: string, value: unknown): void => {
	try {
		localStorage.setItem(key, JSON.stringify(value))
	} catch (error: unknown) {
		console.log(error)
		toast({
			variant: 'destructive',
			title: typeof error === 'object' &&
				error != null &&
				'message' in error &&
				typeof error.message == 'string' &&
				error?.message || 'Error on local storage',
		})
	}
}

export const localStorageRemove = <T, >(key: string): T | null => {
	try {
		const value: T | null = localStorageGet(key)
		localStorage.removeItem(key)
		return value
	} catch (error: unknown) {
		console.log(error)
		toast({
			variant: 'destructive',
			title: typeof error === 'object' &&
				error != null &&
				'message' in error &&
				typeof error.message == 'string' &&
				error?.message || 'Error on local storage',
		})
		return null
	}
}

export const localStorageClear = (): void => {
	try {
		localStorage.clear()
	} catch (error: unknown) {
		console.log(error)
		toast({
			variant: 'destructive',
			title: typeof error === 'object' &&
				error != null &&
				'message' in error &&
				typeof error.message == 'string' &&
				error?.message || 'Error on local storage',
		})
	}
}
