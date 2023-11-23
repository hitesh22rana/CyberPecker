import { useState, useRef, useEffect, useMemo, Fragment } from 'react'
import dynamic from 'next/dynamic'

import { NewsData } from '../../utils/interfaces'
import ImageFallback from '../ImageFallback'
const NewsModal = dynamic(() => import('../NewsModal'))

interface PropsData {
    individualData: NewsData
}

export default function Index({ individualData }: PropsData): JSX.Element {
    const [showNewsModal, setShowNewsModal] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const observer = useMemo(() => {
        return new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            })
        })
    }, [])

    useEffect(() => {
        observer.observe(cardRef.current)

        return () => {
            observer.disconnect()
        }
    }, [observer, cardRef])

    return (
        <Fragment>
            {showNewsModal && (
                <NewsModal
                    individualData={individualData}
                    showNewsModal={showNewsModal}
                    setShowNewsModal={setShowNewsModal}
                />
            )}
            <div
                ref={cardRef}
                className={`group p-1 cursor-pointer hover:z-50 md:my-4 my-6 mx-2 bg-[#1e1e1e] rounded shadow-xl border-2 border-[#212121] drop-shadow bg-[url('/noise.png')] ${
                    isVisible
                        ? 'opacity-100'
                        : 'opacity-0 max-w-full max-h-full'
                } transition duration-[250ms] ease-in`}
                onClick={() => setShowNewsModal(true)}
            >
                <ImageFallback
                    src={individualData?.image}
                    fallbacksrc="/noImage.png"
                    width="1920"
                    height="1080"
                    suppressHydrationWarning={true}
                    handleSpeak={null}
                    isSpeaking={null}
                    canSpeak={false}
                    isPaused={true}
                    source={individualData?.source}
                    link={null}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${individualData?.image}&w=16&q=1`}
                    className="border-[1px] border-stone-700 transition duration-200 ease-in transform group-hover:brightness-50 aspect-[1.57] group-hover:backdrop-brightness-50"
                />

                <div className="flex flex-col mt-1 p-1">
                    <span className="font-semibold line-clamp-1 md:text-base text-sm">
                        {individualData?.headline}
                    </span>

                    <p className="font-medium md:text-[0.85em] brightness-95 text-xs md:mt-4 mt-2 line-clamp-4">
                        {individualData?.news}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}
