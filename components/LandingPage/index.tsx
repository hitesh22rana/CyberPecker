import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function Index({ setEnter }) {
    const [animation, setAnimation] = useState<boolean>(false)

    const handleEnter = useCallback(
        function handleEnter() {
            setAnimation(true)

            const glitch = new Audio('/glitch.mp3')
            glitch.play()

            setTimeout(() => {
                setEnter(true)
            }, 400)
        },
        [setEnter]
    )

    const handleEnterKeyPress = useCallback(
        function handleEnterKeyPress(e) {
            if (e.key === 'Enter') {
                handleEnter()
            }
        },
        [handleEnter]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleEnterKeyPress, true)

        return () => {
            document.removeEventListener('keydown', handleEnterKeyPress)
        }
    }, [handleEnterKeyPress])

    return (
        <div
            className={`flex justify-center items-center w-full h-full fixed top-0 z-[100] ${
                animation ? 'animate-fadeOut' : 'animate-fadeIn'
            }`}
        >
            <div className="flex flex-col items-center gap-2 animate-pulse">
                <Image
                    src="/logo.gif"
                    height={200}
                    width={200}
                    alt="logo"
                    className="object-contain"
                />
                <button
                    className="text-lg border-[#f44d30] text-[#f44d30] hover:brightness-75"
                    onClick={handleEnter}
                >
                    Enter
                </button>
            </div>
        </div>
    )
}
