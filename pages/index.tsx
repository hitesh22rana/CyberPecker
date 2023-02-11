import { dehydrate, QueryClient, useQuery } from 'react-query'
import { NextRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import Navbar from '../components/Navbar'
import Results from '../components/Results'
import Title from '../components/Seo/Title'

const Footer = dynamic(() => import('../components/Footer'))
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'))
const ErrorPage = dynamic(() => import('next/error'))
const NextNProgress = dynamic(() => import('nextjs-progressbar'))

import { dataUrls, fetchNews } from '../utils/requests'
import { capitalize } from '../utils/helperFunctions'

export async function getServerSideProps(context) {
    const { category } = context.query
    const dataString = category ? `fetch${capitalize(category)}` : 'fetchBasic'
    const dataUrl = dataUrls[dataString]?.url

    if (!dataUrl) {
        return {
            props: {
                results: null,
            },
        }
    }

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(dataUrl, () => fetchNews(dataUrl))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default function Home(props): JSX.Element {
    const router: NextRouter = useRouter()
    const queryKey: string = props?.dehydratedState?.queries[0]?.queryKey
    const query = router?.query

    const { data, isError } = useQuery(queryKey, () => fetchNews(queryKey))

    if (!data || isError) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <Title query={query} />
            <NextNProgress color="#f44d30" showOnShallow={true} height={4} />
            <Navbar />
            <Results data={data} />
            <Footer />
            <ScrollToTop />
        </>
    )
}
