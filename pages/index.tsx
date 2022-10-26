import { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from '../node_modules/next/head'

import NextNProgress from 'nextjs-progressbar'

import Navbar from '../components/Navbar'
import Results from '../components/Results'
import SkeletonLoading from '../components/SkeletonLoading'

const Footer = dynamic(() => import('../components/Footer'))

import requests from '../utils/requests'
import { capitalize, handleScrollToTop } from '../utils/helperFunctions'
import { NewsData, NewsDataArray } from '../utils/interfaces'

import useWindowSize from '../hooks/useWindowSize'

export async function getServerSideProps(context) {
    const { category } = context.query

    const dataString = `fetch${capitalize(category)}`

    const dataUrl = requests[dataString]?.url || requests?.fetchBasic?.url

    const data: NewsDataArray = await fetch(dataUrl).then((res) => res.json())

    return {
        props: {
            results: data,
        },
    }
}

export default function Home(props): JSX.Element {
    const router: NextRouter = useRouter()
    const query = router?.query

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
            }, 200)
        }
        fetchData()
    }, [router?.isReady, router?.isFallback, props?.results])

    const currentHeight: number = useWindowSize()

    return (
        <div>
            <Head>
                {
                    <title>
                        {query?.category &&
                            capitalize(query?.category.toString()) + ' | '}{' '}
                        CyberPecker
                    </title>
                }
                <meta
                    name="CyberPecker"
                    content="Cyber Security News Website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NextNProgress color="#f44d30" showOnShallow={true} height={4} />

            <div>
                <Navbar />
            </div>

            {isLoading && <SkeletonLoading />}

            {!isLoading && <Results data={data} />}

            <Footer />

            {currentHeight > 100 && (
                <button
                    className="cursor-pointer fixed bottom-[30px] right-[10px] w-[35px] h-[35px] sm:right-[20px] sm:w-[50px] sm:h-[50px] rounded-full bg-white/80 outline-none border-none z-50 hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md backdrop-blur-lg"
                    onClick={handleScrollToTop}
                >
                    <img
                        width={'100%'}
                        height={'100%'}
                        src="/arrow.png"
                        alt="arrow"
                    />
                </button>
            )}
        </div>
    )
}
