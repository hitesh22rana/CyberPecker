import { useState, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'

import Head from '../node_modules/next/head'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import SkeletonLoading from '../components/SkeletonLoading'
import Footer from '../components/Footer'

import requests from '../utils/requests'
import { NewsData, NewsDataArray } from '../utils/interfaces'
import useWindowSize from '../hooks/useWindowSize'

export async function getServerSideProps(context) {
    function capitalize(str: string): string {
        return str?.charAt(0).toUpperCase() + str?.slice(1)
    }

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

    const currentHeight: number = useWindowSize()

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
            }, 500)
        }
        fetchData()
    }, [router?.isReady, props?.results, router?.isFallback])

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.slice(1)
    }

    function handleScrollToTop() {
        window.scroll(0, 0)
    }

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
