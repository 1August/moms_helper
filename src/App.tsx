import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/AppRoutes.tsx'
import { useAutoAuth } from '@/hooks/useAutoAuth.ts'

function App() {
	useAutoAuth()

	return <RouterProvider router={router} />
}

export default App
