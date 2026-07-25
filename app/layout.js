import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  	title: 'Tyoma\'s Portfolio - Développeur Fullstack JavaScript',
  	description: 'Développeur Fullstack JavaScript / Typescript localisé en France. Spécialiste React / Next.js. Maitrise Node.js, Prisma, API Rest, SEO, accessibilité web, .',
}

export default function RootLayout({ children }) {
	const classList = [GeistMono.variable, GeistSans.variable].join(' ')

	return (
		<html lang='fr' className={ classList }>
			<body>{ children }</body>
		</html>
	)
}
