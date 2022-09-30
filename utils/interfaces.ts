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
