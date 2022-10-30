import '../styles/globals.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import useInitialLoading from '../hooks/useInitialLoading'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    const isLoading: boolean = useInitialLoading()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <span className="loader" />
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>CyberPecker</title>
                <meta charSet="UTF-8" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=ISO-8859-1"
                ></meta>
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="hitesh22rana" />

                <meta
                    name="description"
                    content="Get latest Cyber Security updates curated from different source under one roof."
                />

                <meta
                    property="og:url"
                    content="https://cyberpecker.vercel.app/"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="CyberPecker" />
                <meta
                    property="og:description"
                    content="Get latest Cyber Security updates curated from different source under one roof."
                />
                <meta
                    property="og:image"
                    content="https://cyberpecker.vercel.app/logoSEO.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:domain"
                    content="cyberpecker.vercel.app"
                />
                <meta
                    property="twitter:url"
                    content="https://cyberpecker.vercel.app/"
                />
                <meta name="twitter:title" content="CyberPecker" />
                <meta
                    name="twitter:description"
                    content="Get latest Cyber Security updates curated from different source under one roof."
                />
                <meta
                    name="twitter:image"
                    content="https://cyberpecker.vercel.app/logoSEO.png"
                />
                <meta name="geo.position" content="latitude; longitude" />
                <meta name="geo.placename" content="Place Name" />
                <meta name="geo.region" content="Country Subdivision Code" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                <Component {...pageProps} />
            </SkeletonTheme>
        </>
    )
}

export default MyApp
