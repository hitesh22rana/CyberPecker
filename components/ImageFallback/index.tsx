import Image from 'next/image'
import { useEffect, useState } from 'react'

const fallbackSrc = '/noImage.png'

const Index = ({ src, author, date, ...rest }): JSX.Element => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <div className="relative group">
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

            <div className="transition-all duration-200 group-hover:flex absolute hidden flex-row justify-between w-full bottom-0 right-0 left-0 p-2 text-white gap-4">
                <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis shadow">
                    {author}
                </span>
                <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    {date !== 'N/A' && date}
                </span>
            </div>
        </div>
    )
}

export default Index
