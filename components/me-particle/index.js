'use client'

import ParticleImage, { forces } from "react-particle-image"
import styles from './styles.module.css'
import { useEffect, useState } from "react"

const options = {
    filter: ({ x, y, image }) => {
        const pixel = image.get(x, y)
        return pixel.b > 100
    },
    radius: () => Math.random() * 1.5 + 0.5,
    color: ({ x, y, image }) => {
        const pixel = image.get(x, y)

        if (pixel.b < 180)
            return '#744C7E'

        return '#C582D6'
    }
}

const motionForce = (x, y) => forces.disturbance(x, y, 20)

function MeParticle() {
    const [canvasHeight, setCanvasHeight] = useState(800)

    useEffect(() => {
        if (window)
            setCanvasHeight(window.innerHeight)
    }, [])

    return (
        <div className={ styles.container }>
            <ParticleImage
                src='/me.png'
                height={ canvasHeight }
                width={ 550 }
                maxParticles={ 4500 } 
                scale={ 0.55 } 
                entropy={ 20 } 
                mouseMoveForce={ motionForce }
                backgroundColor="#170F19"
                particleOptions={ options }
            />
        </div>
    )
}

export default MeParticle
