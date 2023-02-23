export interface NewsData {
    id: number
    headlines: string
    author: string
    fullNews: string
    newsURL: string
    newsImgURL: string | null
    newsDate: string
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
    currentWordIndex: number
}
