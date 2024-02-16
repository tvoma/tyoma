import { IconBrandGithub } from "@tabler/icons-react"
import styles from './styles.module.css'

function Content() {
    return (
        <div className={ styles.container }>
            <p className={ styles.gps }>N 47°19&rsquo;17&rdquo; E 5°2&rsquo;29&rdquo;</p>
            <h1>Welcome on board</h1>
            <p>This is the portfolio of a french web developer. His pseudonym is Tyoma.</p>
            <a target="_blank" href="https://github.com/tvoma">
                <IconBrandGithub /> <i>tvoma</i>
            </a>
        </div>
    )
}

export default Content
