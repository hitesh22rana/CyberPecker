import type { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.css'
import useInitialLoading from '../hooks/useInitialLoading'

import Seo from '../components/Seo'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
    const isLoading: boolean = useInitialLoading()
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

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <span className="loader" />
            </div>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Seo />
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
