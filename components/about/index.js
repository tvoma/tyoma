import CallToAction from '../call-to-action'
import styles from './styles.module.css'

export default function About() {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.about }>
                <h2>About.me</h2>
                <p>I build web apps end to end: front, back, and everything that makes them actually work in production.</p>
                <p>
                    Most of what I know, I learned by breaking things on my own projects first. 
                    I&apos;ve been a self-taught developer since 2016. I started with <em>HTML</em> and <em>CSS</em>, 
                    picked up <em>PHP</em> as my first real language, then kept learning through more formal studies, 
                    eventually landing on the <em>JavaScript</em> ecosystem. I&apos;ve been freelancing since 2021.
                </p>
                <p>I&apos;m available for freelance work, remote, ready to start quickly.</p>
            </div>
            <CallToAction />
        </div>
    )
}
