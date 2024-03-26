import { IconBrandGithub } from "@tabler/icons-react"
import styles from './styles.module.css'

function Content() {
    return (
        <div className={ styles.container }>
            <p className={ styles.gps }>48°33&rsquo;14&rdquo;N 0°25&rsquo;22&rdquo;E</p>
            <h1>developer.js</h1>
            <p>Votre futur développeur favoris.</p>
            <a target="_blank" href="https://github.com/tvoma">
                <IconBrandGithub /> <i>tvoma</i>
            </a>
        </div>
    )
}

export default Content
