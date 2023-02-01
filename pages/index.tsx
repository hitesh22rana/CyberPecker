import { NextRouter, useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import NextNProgress from 'nextjs-progressbar'

const Footer = dynamic(() => import('../components/Footer'))
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'))

import Navbar from '../components/Navbar'
import Results from '../components/Results'

import { dataUrls, fetchNews } from '../utils/requests'
import { capitalize } from '../utils/helperFunctions'
import Head from 'next/head'

export async function getServerSideProps(context) {
    const { category } = context.query

    const dataString = `fetch${capitalize(category)}`

    let dataUrl = dataUrls[dataString]?.url

    if (dataUrl === undefined && category === undefined) {
        dataUrl = dataUrls?.fetchBasic?.url
    } else if (dataUrl === undefined && category) {
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
            <Head>
                {
                    <title>
                        {query?.category &&
                            capitalize(query?.category.toString()) + ' | '}{' '}
                        CyberPecker
                    </title>
                }
            </Head>
            <NextNProgress color="#f44d30" showOnShallow={true} height={4} />
            <Navbar />
            <Results data={data} />
            <Footer />
            <ScrollToTop />
        </>
    )
}
