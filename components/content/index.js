import { IconAt, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import styles from './styles.module.css'

function Content() {
    return (
        <div className={ styles.container }>
            <p className={ styles.gps }>49°11&rsquo;10&rdquo;N 0°21&rsquo;46&rdquo;W</p>
            <h1>developer.js</h1>
            <p></p>
            <p>&gt; Développeur fullstack Javascript &bull; Votre futur développeur favori.</p>
            <p className='text-light'>J&apos;interviens sur des applications web, de l&apos;interface à l&apos;API, avec une attention particulière portée à la logique métier de chaque projet.</p>
            <p className={ styles.callToAction }>
                <span>Un projet ? Parlons en !</span>
                <a href="mailto:hello@tyoma.co">
                    <IconAt /> <i>hello@tyoma.co</i>
                </a>
            </p>
            <p>Retrouvez-moi sur :</p>
            <p className={ styles.socials }>
                <a target="_blank" href="https://github.com/tvoma">
                    <IconBrandGithub /> <i>Github</i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tvoma/">
                    <IconBrandLinkedin /> <i>LinkedIn</i>
                </a>
            </p>
        </div>
    )
}

export default Content
