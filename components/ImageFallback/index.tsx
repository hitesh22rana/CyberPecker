import Image from 'next/image'
import { useState } from 'react'
import {
    extractDate,
    isValidAuthorName,
    removeSymbols,
} from '../../utils/helperFunctions'

const fallbackSrc = '/noImage.png'

export default function Index({ src, author, date, ...rest }): JSX.Element {
    const [imgSrc, setImgSrc] = useState(src)

    return (
        <div className="relative group">
            <Image
                {...rest}
                src={imgSrc}
                onError={() => {
                    setImgSrc(fallbackSrc)
                }}
                alt="news-img"
            />

            <div className="transition-all duration-200 group-hover:flex absolute hidden flex-row justify-between w-full bottom-0 right-0 left-0 p-2 text-white gap-4">
                <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis shadow">
                    {isValidAuthorName(author) && removeSymbols(author)}
                </span>
                <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    {date !== 'N/A' && extractDate(date)}
                </span>
            </div>
        </div>
    )
}
