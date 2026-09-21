import About from '@/components/about'
import { Header } from '@/components/header'
import Jumbotron from '@/components/jumbotron'
import MeParticle from '@/components/me-particle'
import Wrapper from '@/components/wrapper'

export default function Home() {
    return (
        <div>
            <Wrapper>
                <Header />
                <Jumbotron title='developer.js'>
                    <p>&gt; Fullstack JavaScript developer | Freelance</p>
                    <p>&gt; status : open to new missions</p>
                </Jumbotron>
                <About />
            </Wrapper>
            <MeParticle />
        </div>
    )
}
