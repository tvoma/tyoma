import Link from 'next/link'
import styles from './styles.module.css'
import { IconExternalLink } from '@tabler/icons-react'

export default function CardProject({ title, description, href, hrefLabel, period, technologies }) {
    return (
        <div className={ styles.card }>
            <div className={ styles.head }>
                <h2>{ title }</h2>
                <p className={ styles.period }>{ period }</p>
            </div>
            <p className={ styles.description }>{ description }</p>
            <p className={ styles.technologies }>{ technologies }</p>
            <Link href={ href } target='_blank'>
                <span>{ hrefLabel }</span>
                <IconExternalLink size={ 16 } />
            </Link>
        </div>
    )
}
