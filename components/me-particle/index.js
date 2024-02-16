'use client'

import { useEffect, useState } from "react"
import ParticleImage, { forces } from "react-particle-image"
import useDeviceHelper from "@/lib/hooks/use-device-helper"
import styles from './styles.module.css'

const options = {
    filter: ({ x, y, image }) => {
        const pixel = image.get(x, y)
        return pixel.b > 140 && pixel.r > 120
    },
    radius: () => Math.random() * 1.5 + 0.5,
    color: ({ x, y, image }) => {
        const pixel = image.get(x, y)

        if (pixel.r < 195)
            return '#744C7E'

        return '#C582D6'
    }
}

const motionForce = (x, y) => forces.disturbance(x, y, 20)

function MeParticle() {
    const [canvasHeight, setCanvasHeight] = useState(800)
    const { isSmallDevice } = useDeviceHelper()

    useEffect(() => {
        if (window)
            setCanvasHeight(window.innerHeight)
    }, [])

    return (
        <div className={ styles.container }>
            <ParticleImage
                src='/me.png'
                height={ canvasHeight }
                width={ 500 }
                maxParticles={ 6000 }
                scale={ isSmallDevice ? 0.55 : 0.7 } 
                entropy={ 20 } 
                mouseMoveForce={ motionForce }
                backgroundColor="#170F19"
                particleOptions={ options }
            />
        </div>
    )
}

export default MeParticle
