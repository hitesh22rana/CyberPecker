import { useRef, useEffect, useCallback } from 'react'

function useHorizontalScroll() {
    const elRef = useRef(null)

    const onWheel = useCallback((e, el) => {
        if (e.deltaY) {
            e.preventDefault()
            el.scrollBy(e.deltaY, 0)
        }
    }, [])

    useEffect(() => {
        const el = elRef.current
        if (el) {
            el.addEventListener('wheel', (e) => onWheel(e, el), {
                passive: true,
            })
            return () =>
                el.removeEventListener('wheel', (e) => onWheel(e, el), {
                    passive: true,
                })
        }
    }, [elRef, onWheel])

    return elRef
}

export default useHorizontalScroll
