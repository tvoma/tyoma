import styles from './styles.module.css'

export default function Jumbotron({ title, children }) {
    return (
        <div className={ styles.jumbotron }>
            <h1>{ title }</h1>
            { children }
        </div>
    )
}
