import Link from 'next/link'
import styles from './styles.module.css'

export default function CardProject({ title, description, href, period, technologies }) {
    return (
        <Link href={ href } target='_blank' className={ styles.card }>
            <h2>{ title }</h2>
            <p className={ styles.description }>{ description }</p>
            <p className={ styles.period }>{ period }</p>
            <p className={ styles.technologies }>{ technologies }</p>
        </Link>
    )
}
