import Wrapper from '@/components/wrapper'
import { Header } from '@/components/header'
import { projects } from '@/lib/factory'
import Jumbotron from '@/components/jumbotron'
import { mapProjects } from './mapper'

export const metadata = {
  title: 'Projects - Tyoma\'s Portfolio',
  description: 'All my personal projects - Fullstack JavaScript Developer',
  openGraph: {
    title: 'Projects - Tyoma\'s Portfolio',
    description: 'All my personal projects - Fullstack JavaScript Developer',
    url: 'https://tyoma.co/projects',
  },
}

export default function Projects() {
    return (
        <Wrapper>
            <Header />
            <Jumbotron title='projects.js'>
                <p>&gt; All my personal projects</p>
                <br />
            </Jumbotron>
            { mapProjects(projects) }
        </Wrapper>
    )
}
