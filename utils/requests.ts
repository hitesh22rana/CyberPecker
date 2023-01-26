const API_URL = process.env.API_URL

export default {
    fetchBasic: {
        title: 'general',
        url: API_URL + 'basic',
    },
    fetchDataBreach: {
        title: 'dataBreach',
        url: API_URL + 'dataBreach',
    },
    fetchCyberAttack: {
        title: 'cyberAttack',
        url: API_URL + 'cyberAttack',
    },
    fetchVulnerability: {
        title: 'vulnerability',
        url: API_URL + 'vulnerability',
    },
    fetchMalware: {
        title: 'malware',
        url: API_URL + 'malware',
    },
    fetchSecurity: {
        title: 'security',
        url: API_URL + 'security',
    },
    fetchCloud: {
        title: 'cloud',
        url: API_URL + 'cloud',
    },
    fetchTech: {
        title: 'tech',
        url: API_URL + 'tech',
    },
    fetchIot: {
        title: 'iot',
        url: API_URL + 'iot',
    },
    fetchBigData: {
        title: 'bigData',
        url: API_URL + 'bigData',
    },
    fetchBusiness: {
        title: 'business',
        url: API_URL + 'business',
    },
    fetchMobility: {
        title: 'mobility',
        url: API_URL + 'mobility',
    },
    fetchResearch: {
        title: 'research',
        url: API_URL + 'research',
    },
    fetchSocialMedia: {
        title: 'socialMedia',
        url: API_URL + 'socialMedia',
    },
    fetchCorporate: {
        title: 'corporate',
        url: API_URL + 'corporate',
    },
    postSummary: {
        title: 'summarize',
        url: process.env.NEXT_PUBLIC_API_URL,
    },
}
