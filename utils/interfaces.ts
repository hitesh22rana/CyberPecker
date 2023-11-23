export interface NewsData {
    id: string
    source: string
    headline: string
    news: string
    link: string
    image: string
}

export interface NewsDataArray {
    data: NewsData[]
}

export interface UseTextToSpeechReturn {
    speak: (text: string) => void
    pause: () => void
    resume: () => void
    cancel: () => void
    speaking: boolean
    paused: boolean
    currentWord: string
}

export interface Quote {
    quote: string
    author: string
}
