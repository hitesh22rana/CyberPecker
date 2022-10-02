import '../styles/globals.css'
import { SkeletonTheme } from 'react-loading-skeleton'

function MyApp({ Component, pageProps }) {
    return (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
            <Component {...pageProps} />
        </SkeletonTheme>
    )
}

export default MyApp
