import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { FiHome } from 'react-icons/fi'

export const Breadcrumb = () => {
	const location = useLocation()

	const links = [
		{
			title: 'Home',
			icon: FiHome,
			url: '/',
			path: '',
		},
		...location.pathname
			.split('/')
			.slice(1)
			.map((path) => ({
				title: path[0].toUpperCase() + path.slice(1),
				icon: null,
				url: '/',
				path,
			}))
			.map((link, i, arr) => {
				const url = arr
					.slice(0, i + 1)
					.reduce((url, link) => url + '/' + link.path, '')

				return {
					...link,
					url: url,
				}
			}),
	]

	return (
		<div className={cn('flex items-center justify-start')}>
			{links.map((link, i) => (
				<>
					<NavLink
						to={link.url}
						className={cn('flex items-center justify-start', 'hover:underline')}
						end
						key={link.url}
					>
						{link.icon != null && (
							<link.icon className={cn('mr-1 inline')} size={16} />
						)}
						{link.title}
					</NavLink>
					{i !== links.length - 1 && (
						<p className={cn('mx-2')} key={'icon-' + link.url}>
							/
						</p>
					)}
				</>
			))}
		</div>
	)
}
