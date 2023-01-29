import '../styles/globals.css'
import useInitialLoading from '../hooks/useInitialLoading'

import { SkeletonTheme } from 'react-loading-skeleton'
import Seo from '../components/Seo'

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
            <Seo />
            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                <Component {...pageProps} />
            </SkeletonTheme>
        </>
    )
}

export default MyApp
