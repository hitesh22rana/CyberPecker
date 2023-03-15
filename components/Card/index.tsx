import { useState, useRef, useEffect, useMemo } from 'react'
import { NewsData } from '../../utils/interfaces'
import ImageFallback from '../ImageFallback'
import NewsModal from '../NewsModal'

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
        <>
            {showNewsModal && (
                <NewsModal
                    individualData={individualData}
                    setShowNewsModal={setShowNewsModal}
                />
            )}
            <div
                ref={cardRef}
                className={`group p-1 cursor-pointer hover:z-50 md:my-4 my-6 mx-2 bg-[#1e1e1e] rounded shadow border-2 border-[#212121] drop-shadow ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } transition duration-[250ms] ease-in`}
                style={{
                    backgroundImage: "url('/noise.png')",
                }}
                onClick={() => setShowNewsModal(true)}
            >
                <ImageFallback
                    src={individualData?.newsImgURL}
                    fallbacksrc="/noImage.png"
                    width={1920}
                    height={1080}
                    author={individualData.author}
                    date={individualData?.newsDate}
                    suppressHydrationWarning={true}
                    handleSpeak={null}
                    isSpeaking={null}
                    canSpeak={false}
                    isPaused={true}
                    link={null}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${individualData?.newsImgURL}&w=16&q=1`}
                    className="border-[1px] hover:border-2 border-stone-700 transition duration-200 ease-in transform group-hover:scale-[1.1] group-hover:brightness-50"
                />

                <div className="flex flex-col mt-1 p-1">
                    <span className="font-semibold line-clamp-1 md:text-base text-sm">
                        {individualData?.headlines}
                    </span>

                    <p className="font-medium md:text-[0.85em] brightness-95 text-xs md:mt-4 mt-2 line-clamp-4">
                        {individualData?.fullNews}
                    </p>
                </div>
            </div>
        </>
    )
}
