import { useState, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'

import Head from '../node_modules/next/head'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

import requests from '../utils/requests'
import { NewsData, NewsDataArray } from '../utils/interfaces'

export async function getServerSideProps(context) {
    function capitalize(str: string): string {
        return str?.charAt(0).toUpperCase() + str?.slice(1)
    }

    const { category } = context.query

    const dataString = `fetch${capitalize(category)}`

    const dataUrl = requests[dataString]?.url || requests?.fetchBasic?.url

    return {
        props: (async function () {
            const data: NewsDataArray = await fetch(dataUrl).then((res) =>
                res.json()
            )
            return {
                results: data,
            }
        })(),
    }
}

export default function Home(props): JSX.Element {
    const router: NextRouter = useRouter()
    const query = router.query

    const [data, setData] = useState<Array<NewsData>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading((prev) => !prev)
            const response = await props.results
            setData(response)

            setTimeout(() => {
                router.isReady && setIsLoading((prev) => !prev)
            }, 1000)
        }
        fetchData()
    }, [router.isReady, props.results])

    if (isLoading) {
        return (
            <div className="flex w-full h-screen justify-center items-center">
                <span className="loader"></span>
            </div>
        )
    }

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.slice(1)
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

            <Results data={data} />
        </div>
    )
}
