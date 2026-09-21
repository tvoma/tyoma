import Wrapper from '@/components/wrapper'
import { Header } from '@/components/header'
import { projects } from '@/lib/factory'
import { mapProjects } from './mapper'
import Jumbotron from '@/components/jumbotron'

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
