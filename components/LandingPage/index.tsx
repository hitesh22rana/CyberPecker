import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import cyberQuotes from '../../utils/cyberQuotes.json'
import { Quote } from '../../utils/interfaces'

export default function Index({ setEnter }) {
    const [animation, setAnimation] = useState<boolean>(false)
    const [quote, setQuote] = useState<Quote>(null)

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
            if (e.key === 'Enter' || e.key === ' ') {
                handleEnter()
            }
        },
        [handleEnter]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleEnterKeyPress, true)

        return () => {
            document.removeEventListener('keydown', handleEnterKeyPress, true)
        }
    }, [handleEnterKeyPress])

    useEffect(() => {
        function setNewQuote() {
            const randomQuote: Quote =
                cyberQuotes[Math.floor(Math.random() * cyberQuotes.length)]

            setQuote(randomQuote)
        }

        setNewQuote()

        const newQuote = setInterval(() => {
            setNewQuote()
        }, 10000)

        return () => clearInterval(newQuote)
    }, [])

    return (
        <div
            className={`flex flex-col justify-center items-center w-full h-full fixed top-0 z-[100] ${
                animation ? 'animate-fadeOut' : 'animate-fadeIn'
            }`}
        >
            {quote && (
                <div className="flex top-0 absolute h-auto md:w-[80%] w-[90%] mt-1">
                    <p
                        data-text={'"' + quote?.quote?.trim() + '"'}
                        className="font-medium md:text-sm text-[10px] mx-auto p-2 text-center glitch-text"
                    >
                        {'"' + quote?.quote?.trim() + '"'}
                        <cite className="font-medium md:text-[10px] text-[7px] text-orange-500 block items-end text-end">
                            - {quote?.author?.trim()}
                        </cite>
                    </p>
                </div>
            )}

            <div
                className="flex flex-col items-center gap-2 animate-pulse"
                onClick={handleEnter}
            >
                <Image
                    src="/logo.gif"
                    height={200}
                    width={200}
                    alt="logo"
                    className="object-contain"
                />
                <button className="text-lg border-[#f44d30] text-[#f44d30] hover:brightness-75">
                    Enter
                </button>
            </div>
        </div>
    )
}
