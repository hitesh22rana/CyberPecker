import { Fragment } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { NextRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import LRU from 'lru-cache'

const Results = dynamic(() => import('../components/Results'))
const Seo = dynamic(() => import('../components/Seo'))

import { fetchNews, getDataUrl } from '../utils/requests'

const cacheTime = 1000 * 60 * 15

const ssrCache = new LRU({
    max: 100,
    maxAge: cacheTime,
})

export async function getServerSideProps(context) {
    const { category } = context.query

    const dataUrl = getDataUrl(category)

    if (!dataUrl) {
        return {
            props: {
                dehydratedState: null,
                status: 404,
            },
        }
    }

    const cached = ssrCache.get(dataUrl)

    if (cached) {
        return {
            props: {
                dehydratedState: cached,
                status: 200,
            },
        }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(dataUrl, () => fetchNews(dataUrl), {
        cacheTime,
    })

    const status =
        queryClient?.getQueryState(dataUrl)?.error?.response?.status || 200

    ssrCache.set(dataUrl, dehydrate(queryClient))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            status: status,
        },
    }
}

export default function Home(props): JSX.Element {
    const router: NextRouter = useRouter()
    const queryKey: string = props?.dehydratedState?.queries[0]?.queryKey
    const category = router?.query?.category

    const { data } = useQuery(queryKey, () => fetchNews(queryKey), {
        staleTime: cacheTime,
    })

    if (!data) {
        return (
            <div className="flex justify-center items-center w-full md:h-[calc(100vh-320px)] h-[calc(100vh-360px)]">
                <span className="loader scale-50" />
            </div>
        )
    }

    return (
        <Fragment>
            <Seo category={category} />
            <Results data={data} />
        </Fragment>
    )
}
