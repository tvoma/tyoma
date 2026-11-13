import Link from 'next/link'
import styles from './styles.module.css'

export default function CallToAction() {
    return (
        <div className={ styles.actions }>
            <Link href='mailto:hello@tyoma.co' className={ styles.callToAction }>
                <span>Let&apos;s build something together</span>
                <b>Get in touch</b>
            </Link>
            <Link href='/projects' className={ styles.callToAction }>
                <span>Check out what I&apos;ve built</span>
                <b>My projects</b>
            </Link>
        </div>
    )
}
