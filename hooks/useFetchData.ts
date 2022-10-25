import { useState, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { NewsData } from '../utils/interfaces'

function useFetchData(props) {
    const router: NextRouter = useRouter()
    const [data, setData] = useState<Array<NewsData>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading((prev) => !prev)
            const response = await props.results
            setData(response)

            setTimeout(() => {
                router?.isReady &&
                    !router?.isFallback &&
                    response?.length > 0 &&
                    setIsLoading((prev) => !prev)
            }, 250)
        }
        fetchData()
    }, [router?.isReady, props?.results, router?.isFallback])

    return { isLoading, data }
}

export default useFetchData
