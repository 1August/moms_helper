import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts'
import { ThemeProvider } from '@/context/theme.tsx'
import { IconContext } from 'react-icons'
import { cn } from '@/utils/utils.ts'
import { Toaster } from '@/components/ui/toaster.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<IconContext.Provider
					value={{
						className: cn('text-primary'),
						size: '20',
					}}
				>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
					<Toaster />
				</IconContext.Provider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
