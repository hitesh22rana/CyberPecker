import { useState, useEffect } from 'react'
import { UseTextToSpeechReturn } from '../utils/interfaces'

const useTextToSpeech = (): UseTextToSpeechReturn => {
    const [text, setText] = useState<string>('')
    const [speaking, setSpeaking] = useState<boolean>(false)
    const [paused, setPaused] = useState<boolean>(false)
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
        null
    )

    useEffect(() => {
        if (!window.speechSynthesis) return

        const voices = window.speechSynthesis.getVoices()
        const voice = voices.find(
            (v) => v.name === 'Microsoft David - English (United States)'
        )

        const u = new SpeechSynthesisUtterance()
        u.lang = 'en-US'

        if (voice) {
            u.voice = voice
        }

        u.rate = 1.04
        u.pitch = 1.1

        u.onstart = () => setSpeaking(true)
        u.onpause = () => setPaused(true)
        u.onresume = () => setPaused(false)
        u.onboundary = (event) => {
            setCurrentWordIndex(event.charIndex)
        }
        u.onend = () => {
            setSpeaking(false)
            setPaused(false)
            setCurrentWordIndex(0)
        }

        setUtterance(u)

        return () => {
            if (utterance) {
                window.speechSynthesis.cancel()
                setSpeaking(false)
                setPaused(false)
                setUtterance(null)
                setText('')
                setCurrentWordIndex(0)
            }
        }
    }, [])

    useEffect(() => {
        if (utterance) {
            setText('')
            utterance.text = text
            window.speechSynthesis.speak(utterance)
        }
    }, [text, utterance])

    const speak = (text: string): void => {
        setText(text)
    }

    const pause = (): void => {
        if (utterance && speaking) {
            window.speechSynthesis.pause()
            setPaused(true)
        }
    }

    const resume = (): void => {
        if (utterance && paused) {
            window.speechSynthesis.resume()
            setPaused(false)
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

    return { speak, pause, resume, cancel, speaking, paused, currentWordIndex }
}

export default useTextToSpeech
