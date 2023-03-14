import { Fragment } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { NextRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import LRU from 'lru-cache'

const Results = dynamic(() => import('../components/Results'))
const Seo = dynamic(() => import('../components/Seo'))
const ErrorPage = dynamic(() => import('next/error'))

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
                results: null,
            },
        }
    }

    const cached = ssrCache.get(dataUrl)

    if (cached) {
        return {
            props: {
                dehydratedState: cached,
            },
        }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(dataUrl, () => fetchNews(dataUrl), {
        cacheTime,
    })

    ssrCache.set(dataUrl, dehydrate(queryClient))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default function Home(props): JSX.Element {
    const router: NextRouter = useRouter()
    const queryKey: string = props?.dehydratedState?.queries[0]?.queryKey
    const category = router?.query?.category

    const { data, isError } = useQuery(queryKey, () => fetchNews(queryKey), {
        staleTime: cacheTime,
    })

    if (!data || isError) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Fragment>
            <Seo category={category} />
            <Results data={data} />
        </Fragment>
    )
}
