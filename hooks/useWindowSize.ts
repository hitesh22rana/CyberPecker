import { useLayoutEffect, useState } from 'react'

function useWindowSize() {
    const [size, setSize] = useState<number>(0)
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.scrollY)
        }

        window.addEventListener('scroll', updateSize)
        updateSize()
        return () => window.removeEventListener('scroll', updateSize)
    }, [])
    return size
}

export default useWindowSize
