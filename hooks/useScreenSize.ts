import { useLayoutEffect, useState } from 'react'

function useScreenSize() {
    const [size, setSize] = useState<number>(0)
    useLayoutEffect(() => {
        function updateSize() {
            const currentScroll = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight

            setSize(
                scrollHeight
                    ? Number((currentScroll / scrollHeight).toFixed(2)) * 100
                    : 0
            )
        }

        window.addEventListener('scroll', updateSize)
        updateSize()
        return () => window.removeEventListener('scroll', updateSize)
    }, [])
    return size
}

export default useScreenSize
