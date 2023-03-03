import { useEffect, useState, useCallback } from 'react'

function useScreenSize() {
    const [size, setSize] = useState<number>(0)

    const handleScroll = useCallback(() => {
        const currentScroll = window.scrollY
        const scrollHeight = document.body.scrollHeight - window.innerHeight

        setSize(
            scrollHeight
                ? Number((currentScroll / scrollHeight).toFixed(2)) * 100
                : 0
        )
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

        window.addEventListener('scroll', handleScrollDebounced)
        handleScrollDebounced()

        return () => {
            window.removeEventListener('scroll', handleScrollDebounced)
            cancelAnimationFrame(requestId)
        }
    }, [handleScroll])

    return size
}

export default useScreenSize
