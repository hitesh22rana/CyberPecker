import { useEffect, useState, useCallback } from 'react'

function useWindowSize() {
    const [size, setSize] = useState<number>(0)

    const handleScroll = useCallback(() => {
        setSize(window.scrollY)
    }, [])

    useEffect(() => {
        let requestId: number

        function handleScrollDebounced() {
            if (requestId) {
                cancelAnimationFrame(requestId)
            }
            requestId = requestAnimationFrame(() => {
                handleScroll()
            })
        }

        window.addEventListener('scroll', handleScrollDebounced, {
            passive: true,
        })
        handleScrollDebounced()

        return () => {
            window.removeEventListener('scroll', handleScrollDebounced)
            cancelAnimationFrame(requestId)
        }
    }, [handleScroll])

    return size
}

export default useWindowSize
