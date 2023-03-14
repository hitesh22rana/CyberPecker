import Head from 'next/head'
import { memo } from 'react'
import { capitalize } from '../../utils/helperFunctions'

const Index = memo(function Index({
    category,
}: {
    category: string | string[] | undefined
}): JSX.Element {
    return (
        <Head>
            {
                <title>
                    {category && capitalize(category.toString()) + ' | '}{' '}
                    CyberPecker
                </title>
            }
            <meta
                name="description"
                content="Get the Latest Scoop on Cyberspace with CyberPecker."
            />
            <meta
                name="keywords"
                content="cyber security, cybersecurity, updates, news, cyber attacks, cyber threats, online security"
            />
            <meta name="author" content="CyberPecker Team" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta charSet="UTF-8" />

            {/* <-- Open Graph meta tags for social media sharing --> */}
            <meta
                property="og:title"
                content="CyberPecker - The Ultimate News Aggregator for Tech Enthusiasts."
            />
            <meta
                property="og:description"
                content="Get the Latest Scoop on Cyberspace with CyberPecker."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://cyberpecker.vercel.app/" />
            <meta
                property="og:image"
                content="https://cyberpecker.vercel.app/logoSEO.png"
            />

            {/* <-- Twitter meta tags for social media sharing --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="CyberPecker - The Ultimate News Aggregator for Tech Enthusiasts."
            />
            <meta
                name="twitter:description"
                content="Get the Latest Scoop on Cyberspace with CyberPecker."
            />
            <meta
                name="twitter:image"
                content="https://cyberpecker.vercel.app/logoSEO.png"
            />

            {/* <-- Geo meta tags --> */}
            <meta name="geo.position" content="latitude;longitude" />
            <meta name="geo.region" content="Country Subdivision Code" />
            <meta name="geo.placename" content="Place Name" />

            {/* <!-- Link to the favicon --> */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
})

export default Index
