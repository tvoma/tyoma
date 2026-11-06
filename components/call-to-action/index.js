import Link from 'next/link'
import styles from './styles.module.css'

export default function CallToAction() {
    return (
        <Link href='/projects' className={ styles.callToAction }>
            <span>Next step, check out</span>
            <b>what I&apos;ve built</b>
        </Link>
    )
}
