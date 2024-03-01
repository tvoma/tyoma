import { IconBrandGithub } from "@tabler/icons-react"
import styles from './styles.module.css'

function Content() {
    return (
        <div className={ styles.container }>
            <p className={ styles.gps }>47°19&rsquo;17&rdquo;N 5°2&rsquo;29&rdquo;E</p>
            <h1>Welcome on board</h1>
            <p>I am a frontend developer living in France.</p>
            <a target="_blank" href="https://github.com/tvoma">
                <IconBrandGithub /> <i>tvoma</i>
            </a>
        </div>
    )
}

export default Content
