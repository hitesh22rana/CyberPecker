import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { UseTextToSpeechReturn } from '../utils/interfaces'

const useTextToSpeech = (): UseTextToSpeechReturn => {
    const [text, setText] = useState<string>('')
    const [speaking, setSpeaking] = useState<boolean>(false)
    const [paused, setPaused] = useState<boolean>(false)
    const [currentWord, setCurrentWord] = useState<string>(null)
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
        null
    )

    const index = useRef(0)
    const words = useRef([])

    const selectedVoice = useMemo(() => {
        if (!window.speechSynthesis) return null
        const voices = window.speechSynthesis.getVoices()
        return voices.find(
            (v) => v.name === 'Microsoft David - English (United States)'
        )
    }, [])

    useEffect(() => {
        if (!window.speechSynthesis) return

        const u = new SpeechSynthesisUtterance()
        u.lang = 'en-US'
        const voice = selectedVoice

        if (voice) {
            u.voice = voice
        }

        u.rate = 1
        u.pitch = 1.1

        u.onstart = () => {
            setSpeaking(true)
            index.current = 0
        }
        u.onpause = () => setPaused(true)
        u.onresume = () => setPaused(false)
        u.onboundary = () => {
            setCurrentWord(words.current[index.current])
            index.current += 1
        }
        u.onend = () => {
            setSpeaking(false)
            setPaused(false)
            setCurrentWord(null)
            index.current = 0
        }

        setUtterance(u)

        return () => {
            if (utterance) {
                window.speechSynthesis.cancel()
                setSpeaking(false)
                setPaused(false)
                setUtterance(null)
                setText('')
                words.current = []
            }
        }
    }, [selectedVoice])

    useEffect(() => {
        if (utterance) {
            setText('')
            utterance.text = text
            window.speechSynthesis.speak(utterance)
        }
    }, [text, utterance])

    const speak = useCallback((text: string): void => {
        words.current = text.split(' ')
        setText(text)
    }, [])

    const pause = useCallback((): void => {
        if (utterance && speaking) {
            setPaused(true)
            window.speechSynthesis.pause()
        }
    }, [utterance, speaking])

    const resume = useCallback((): void => {
        if (utterance && paused) {
            setPaused(false)
            window.speechSynthesis.resume()
        }
    }, [utterance, paused])

    const cancel = useCallback((): void => {
        if (utterance) {
            setUtterance(null)
            window.speechSynthesis.cancel()
            setSpeaking(false)
            setPaused(false)
            setText('')
            words.current = []
            index.current = 0
        }
    }, [utterance])

    return { speak, pause, resume, cancel, speaking, paused, currentWord }
}

export default useTextToSpeech
