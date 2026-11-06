import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  	title: 'Tyoma\'s Portfolio - Fullstack JavaScript developer freelance based in France',
  	description: 'Fullstack JavaScript / Typescript developer based in France. React / Next.js Expert.',
  	openGraph: {
		title: 'Tyoma\'s Portfolio - Fullstack JavaScript Developer',
		description: 'Fullstack JavaScript / Typescript developer based in France. React / Next.js Expert.',
		url: 'https://tyoma.co',
		siteName: "Tyoma's Portfolio",
		images: [
			{
				url: 'https://tyoma.co/',
				width: 800,
				height: 800,
				alt: "Tyoma's Portfolio",
			},
		],
		locale: 'en_US',
		type: 'website',
	},
  	twitter: {
		card: 'summary_large_image',
		title: 'Tyoma\'s Portfolio - Fullstack JavaScript Developer',
		description: 'Fullstack JavaScript / Typescript developer based in France. React / Next.js Expert.',
		images: ['https://tyoma.co/'],
	},
}

export default function RootLayout({ children }) {
	const classList = [GeistMono.variable, GeistSans.variable].join(' ')

	return (
		<html lang='en' className={ classList }>
			<body>{ children }</body>
		</html>
	)
}
