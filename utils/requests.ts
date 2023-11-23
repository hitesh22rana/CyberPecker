import axios from 'axios'
import { capitalize } from './helperFunctions'

const API_URL = process.env.API_URL
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
const headers = {
    accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
}

export const dataUrls = {
    fetchGeneral: {
        title: 'general',
        url: `${API_URL}general`,
    },
    fetchDataBreach: {
        title: 'dataBreach',
        url: `${API_URL}dataBreach`,
    },
    fetchCyberAttack: {
        title: 'cyberAttack',
        url: `${API_URL}cyberAttack`,
    },
    fetchVulnerability: {
        title: 'vulnerability',
        url: `${API_URL}vulnerability`,
    },
    fetchMalware: {
        title: 'malware',
        url: `${API_URL}malware`,
    },
    fetchSecurity: {
        title: 'security',
        url: `${API_URL}security`,
    },
    fetchCloud: {
        title: 'cloud',
        url: `${API_URL}cloud`,
    },
    fetchBigData: {
        title: 'bigData',
        url: `${API_URL}bigData`,
    },
    fetchResearch: {
        title: 'research',
        url: `${API_URL}research`,
    },
    fetchSocialMedia: {
        title: 'socialMedia',
        url: `${API_URL}socialMedia`,
    },
    fetchCorporate: {
        title: 'corporate',
        url: `${API_URL}corporate`,
    },
    postSummary: {
        title: 'summarize',
        url: NEXT_PUBLIC_API_URL,
    },
}

export const fetchNews = async (dataUrl: string) => {
    try {
        const response = await axios.get(dataUrl, { headers })
        return response?.data
    } catch (error) {
        throw error
    }
}

export const postSummary = async (data: string) => {
    const postSummaryUrl = dataUrls.postSummary.url

    try {
        const response = await axios.post(
            postSummaryUrl,
            {
                data,
            },
            {
                headers,
            }
        )

        return response
    } catch (error) {
        throw error
    }
}

export function getDataUrl(category: string): string | null {
    const dataString = category
        ? `fetch${capitalize(category)}`
        : 'fetchGeneral'
    return dataUrls[dataString]?.url
}
