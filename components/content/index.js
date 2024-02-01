import { IconBrandGithub } from "@tabler/icons-react"
import styles from './styles.module.css'

function Content() {
    return (
        <div className={ styles.container }>
            <h1>&gt; Welcome on board</h1>
            <p>&gt; This is the portfolio of a french web developer. His pseudonym is Tyoma.</p>
            <a target="_blank" href="https://github.com/tvoma">
                <IconBrandGithub /> <i>tvoma</i>
            </a>
        </div>
    )
}

export default Content
