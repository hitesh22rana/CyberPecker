import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { useState, Fragment } from 'react'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import useInitialLoading from '../hooks/useInitialLoading'

import { NextRouter, useRouter } from 'next/router'

const ClientError = dynamic(() => import('./404'))
const ServerError = dynamic(() => import('./500'))
const NextNProgress = dynamic(() => import('nextjs-progressbar'))
const Navbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'))
const LandingPage = dynamic(() => import('../components/LandingPage'))

import {
    dehydrate,
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
    const router: NextRouter = useRouter()
    const isLoading = useInitialLoading()
    const [enter, setEnter] = useState<boolean>(false)
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    )
    const dehydratedState = dehydrate(queryClient)

    if (router.pathname === '/404' || pageProps['status'] === 404) {
        return <ClientError />
    } else if (router.pathname === '/500' || pageProps['status'] === 500) {
        return <ServerError />
    }

    return isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
            <span className="loader" />
        </div>
    ) : (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                {!enter ? (
                    <LandingPage setEnter={setEnter} />
                ) : (
                    <Fragment>
                        <NextNProgress
                            color="#f44d30"
                            showOnShallow={true}
                            height={4}
                        />
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                        <ScrollToTop />
                        <Analytics />
                    </Fragment>
                )}
            </Hydrate>
        </QueryClientProvider>
    )
}

export default App
