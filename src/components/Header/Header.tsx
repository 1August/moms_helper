import { Container } from '@/components/Container'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { Input } from '@/components/ui/input.tsx'
import { ModeToggle } from '@/components/ModeToggle'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import { HiOutlineSearch, HiOutlineUserCircle } from 'react-icons/hi'
import { Label } from '@/components/ui/label.tsx'
import { useAppSelector } from '@/store/hooks.ts'
import { userTokenSelector } from '@/store/slices/authSlice/selectors.ts'

export const Header = () => {
	const token = useAppSelector(userTokenSelector)

	return (
		<header className={cn('py-4 border-b-2')}>
			<Container className={cn('flex gap-x-8 gap-y-4 items-center justify-between flex-wrap')}>
				<div className={cn('flex gap-16 items-center justify-start')}>
					<div className={cn('relative after:absolute after:-right-8 after:top-0 after:bottom-0 h-full' +
						' after:border-r-2')}>
						<h1 className={cn('text-4xl font-bold text-rose-500')}>Mom's helper</h1>
					</div>
					<div>
						<ul className={cn('flex items-center gap-8 justify-end')}>
							<li>
								<NavLink
									to={'/'}
									className={({ isActive }) => cn('opacity-70', { 'opacity-100': isActive })}
									end
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/services'}
									className={({ isActive }) => cn('opacity-70', { 'opacity-100': isActive })}
									end
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/about'}
									className={({ isActive }) => cn('opacity-70', { 'opacity-100': isActive })}
									end
								>
									About us
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/help'}
									className={({ isActive }) => cn('opacity-70', { 'opacity-100': isActive })}
									end
								>
									Help?
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={cn('flex gap-8 items-center justify-end')}>
					<div className={cn('relative')}>
						<Input
							id={'search'}
							className={cn('min-w-48 pl-8')}
							placeholder={'Search here'}
						/>
						<Label htmlFor={'search'}>
							<HiOutlineSearch className={cn('absolute top-1/2 left-2 -translate-y-1/2')} />
						</Label>
					</div>
					<div className={cn('flex gap-8 items-center justify-end')}>
						<ModeToggle />
						<div>
							{
								token ? (
									<ul className={cn('flex gap-8 items-center justify-end text-nowrap')}>
										<li>
											<Link
												to={'/account'}
												className={cn('flex gap-[0.25rem] items-center')}
											>
												<HiOutlineUserCircle /> Account
											</Link>
										</li>
									</ul>
								) : (
									<ul className={cn('flex gap-8 items-center justify-end text-nowrap')}>
										<li>
											<Link
												to={'/auth/login'}
												className={cn('flex gap-[0.25rem] items-center')}
											>
												<FiLogIn /> Log In
											</Link>
										</li>
										<li>
											<Link
												to={'/auth/signup'}
												className={cn('flex gap-[0.25rem] items-center')}
											>
												<FiUserPlus /> Sign up
											</Link>
										</li>
									</ul>
								)
							}
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}
