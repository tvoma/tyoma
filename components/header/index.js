import { IconAt, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import styles from './styles.module.css'

export function Header() {
    return (
        <header className={ styles.header }>
            <p className={ styles.gps }>49°11&rsquo;10&rdquo;N 0°21&rsquo;46&rdquo;W &bull; Normandy</p>
            <div className={ styles.links }>
                <a target="_blank" href="https://github.com/tvoma">
                    <IconBrandGithub /> <i>Github</i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tvoma/">
                    <IconBrandLinkedin /> <i>LinkedIn</i>
                </a>
                <a href="mailto:hello@tyoma.co">
                    <IconAt /> <i>hello@tyoma.co</i>
                </a>
            </div>
        </header>
    )
}
