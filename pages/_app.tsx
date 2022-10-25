import '../styles/globals.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import useInitialLoading from '../hooks/useInitialLoading'

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
            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                <Component {...pageProps} />
            </SkeletonTheme>
        </>
    )
}

export default MyApp
