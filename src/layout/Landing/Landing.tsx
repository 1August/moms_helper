import { Outlet } from 'react-router-dom'
import { HeaderLanding } from '@/components/HeaderLanding'

export const Landing = () => {
	return (
		<>
			<HeaderLanding />
			<Outlet />
		</>
	)
}
