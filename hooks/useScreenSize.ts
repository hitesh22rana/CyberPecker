import { useLayoutEffect, useState } from 'react'

function useScreenSize() {
    const [size, setSize] = useState<number>(0)
    useLayoutEffect(() => {
        function updateSize() {
            const currentScroll = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight

            if (scrollHeight) {
                setSize(Number((currentScroll / scrollHeight).toFixed(2)) * 100)
            }
        }

        window.addEventListener('scroll', updateSize)
        updateSize()
        return () => window.removeEventListener('scroll', updateSize)
    }, [])
    return size
}

export default useScreenSize
