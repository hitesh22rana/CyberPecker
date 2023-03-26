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

            <div className="flex flex-col items-center gap-2 ">
                <Image
                    src="/logo.gif"
                    height={200}
                    width={200}
                    alt="logo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/logo.gif"
                    className="object-contain animate-pulse"
                />
                <span className="text-center my-4 mx-4 text-sm font-extralight">
                    Get the Latest Scoop on Cyberspace with CyberPecker
                </span>
                <button
                    className="my-4 md:text-lg text-sm cursor-pointer transition-all rounded-sm px-6 py-2 border-2 shadow-[2px_2px_#f44d30] hover:shadow-[4px_4px_5px_#f44d30] hover:brightness-90 bounce-button animate-pulse"
                    onClick={handleEnter}
                >
                    Enter
                </button>
            </div>
        </div>
    )
}
