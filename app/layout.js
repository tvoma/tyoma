import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  	title: 'Tyoma\'s Portfolio',
  	description: 'French web developer'
}

export default function RootLayout({ children }) {
	const classList = [GeistMono.variable, GeistSans.variable].join(' ')

	return (
		<html lang="en" className={ classList }>
			<body>{ children }</body>
		</html>
	)
}
