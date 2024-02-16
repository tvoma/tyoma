import { useEffect, useState } from 'react'

export default function useDeviceHelper() {
    const breakpoint = 900
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
    const [isLargeDevice, setIsLargeDevice] = useState(false)
    const [isSmallDevice, setIsSmallDevice] = useState(false)

    const setDimension = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        if (!screenSize.width || !screenSize.height) setDimension()

        window.addEventListener('resize', setDimension)

        return () => window.removeEventListener('resize', setDimension)
    }, [screenSize])

    useEffect(() => {
        const isMobile = screenSize.width < breakpoint
        const isDesktop = screenSize.width > breakpoint

        if (isDesktop) {
            setIsLargeDevice(true)
            setIsSmallDevice(false)
        }

        if (isMobile) {
            setIsSmallDevice(true)
            setIsLargeDevice(false)
        }
    }, [screenSize])

    return { isLargeDevice, isSmallDevice, screenSize }
}
