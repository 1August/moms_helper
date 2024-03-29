import { Container } from '@/components/Container'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { ModeToggle } from '@/components/ModeToggle'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { useAppSelector } from '@/store/hooks.ts'
import { userTokenSelector } from '@/store/slices/authSlice/selectors.ts'

export const Header = () => {
	const token = useAppSelector(userTokenSelector)

	return (
		<header className={cn('py-4 border-b-2')}>
			<Container className={cn('flex gap-x-8 gap-y-4 items-center justify-between flex-wrap')}>
				<div className={cn('flex gap-16 items-center justify-start')}>
					<div>
						<h1 className={cn('text-4xl font-bold text-rose-500')}>
							<Link to={'/'}>
								Mom's helper
							</Link>
						</h1>
					</div>
				</div>
				<div className={cn('flex gap-8 items-center justify-end')}>
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
