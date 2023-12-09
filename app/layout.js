import './globals.css'

export const metadata = {
  	title: 'Tyoma Portfolio',
  	description: 'French web developper'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{ children }</body>
		</html>
	)
}
