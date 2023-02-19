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
                        <FiExternalLink className="transition-all brightness-90 absolute top-0 right-0 text-white sm:text-2xl text-lg sm:m-2 m-1 z-10 cursor-pointer hover:brightness-75" />
                    </a>

                    <button
                        id="handleSpeak"
                        className="transition-all duration-200 flex absolute z-10 left-[45%] top-[45%] items-center justify-center shadow rounded-full cursor-pointer"
                        onClick={handleSpeak}
                    >
                        {isSpeaking && !isPaused ? (
                            <div className="bg-[rgba(0,0,0,0.4)] rounded-full">
                                <IoVolumeMute className="sm:h-[68px] sm:w-[68px] h-12 w-[46px] sm:scale-x-110 scale-x-110 sm:py-2 sm:pl-2 sm:pr-1 py-1 pl-[6px] pr-1" />
                            </div>
                        ) : (
                            <div className="bg-[rgba(0,0,0,0.4)] rounded-full">
                                <IoVolumeHigh className="sm:h-[68px] sm:w-16 h-12 w-11 p-1 sm:ml-1 ml-[2px]" />
                            </div>
                        )}
                    </button>
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
