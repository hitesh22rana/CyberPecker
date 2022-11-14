import Image from 'next/image'
import { useEffect, useState } from 'react'

const Index = ({ src, fallbackSrc, ...rest }): JSX.Element => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <Image
            {...rest}
            src={imgSrc}
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                    setImgSrc(fallbackSrc)
                }
            }}
            onError={() => {
                setImgSrc(fallbackSrc)
            }}
            alt="news-img"
        />
    )
}

export default Index
