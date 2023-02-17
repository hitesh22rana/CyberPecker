import Image from 'next/image'
import { useState } from 'react'
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'

const fallbackSrc = '/noImage.png'

export default function Index({
    src,
    author,
    date,
    canSpeak,
    isPaused,
    isSpeaking,
    link,
    handleSpeak = null,
    ...rest
}): JSX.Element {
    const [imgSrc, setImgSrc] = useState(src)

    return (
        <div className="relative group">
            {canSpeak && (
                <>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer flex justify-center w-auto h-auto"
                    >
                        <FiExternalLink className="transition-all brightness-90 absolute top-0 right-0 text-white text-2xl m-2 z-10 cursor-pointer hover:brightness-75" />
                    </a>

                    <div className="transition-all duration-200 flex absolute z-10 left-[45%] top-[45%] items-center justify-center">
                        {isSpeaking && !isPaused ? (
                            <div
                                className="bg-[rgba(0,0,0,0.4)] rounded-full"
                                onClick={handleSpeak}
                            >
                                <IoVolumeMute className="h-[68px] w-[68px] scale-x-110 py-2 pl-2 pr-1 cursor-pointer hover:brightness-90" />
                            </div>
                        ) : (
                            <div
                                className="bg-[rgba(0,0,0,0.4)] rounded-full"
                                onClick={handleSpeak}
                            >
                                <IoVolumeHigh className="h-[68px] w-16 p-1 cursor-pointer ml-1 hover:brightness-90" />
                            </div>
                        )}
                    </div>
                </>
            )}

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
                    {author !== 'N/A' && author}
                </span>
                <span className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    {date !== 'N/A' && date}
                </span>
            </div>
        </div>
    )
}
