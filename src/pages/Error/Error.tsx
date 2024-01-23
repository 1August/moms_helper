import { useRouteError } from 'react-router-dom'

export const Error = () => {
	const error = useRouteError()

	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				{
					typeof error === 'object' &&
					error != null &&
					('statusText' in error &&
						typeof error.statusText === 'string' &&
						<i>{error.statusText}</i>
						||
						'message' in error &&
						typeof error.message === 'string' &&
						<i>{error.message}</i>
					)
				}
			</p>
		</div>
	)
}
