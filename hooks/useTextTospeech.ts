import { useState, useEffect } from 'react'
import { UseTextToSpeechReturn } from '../utils/interfaces'

const useTextToSpeech = (): UseTextToSpeechReturn => {
    const [text, setText] = useState<string>('')
    const [speaking, setSpeaking] = useState<boolean>(false)
    const [paused, setPaused] = useState<boolean>(false)
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
        null
    )

    useEffect(() => {
        if (window.speechSynthesis) {
            const u = new SpeechSynthesisUtterance()
            u.lang = 'en-US'
            u.rate = 1.1
            u.pitch = 1.1

            u.onstart = () => {
                setSpeaking(true)
            }

            u.onpause = () => {
                setPaused(true)
            }

            u.onresume = () => {
                setPaused(false)
            }

            u.onend = () => {
                setSpeaking(false)
                setPaused(false)
            }

            setUtterance(u)
        }
    }, [text])

    const speak = (text: string): void => {
        if (utterance) {
            setText(text)
            utterance.text = text
            window.speechSynthesis.speak(utterance)
        }
    }

    const pause = (): void => {
        if (utterance && speaking) {
            window.speechSynthesis.pause()
        }
    }

    const resume = (): void => {
        if (utterance && paused) {
            window.speechSynthesis.resume()
        }
    }

    const cancel = (): void => {
        if (utterance) {
            window.speechSynthesis.cancel()
            setSpeaking(false)
            setPaused(false)
            setUtterance(null)
            setText('')
        }
    }

    return { speak, pause, resume, cancel, speaking, paused }
}

export default useTextToSpeech
