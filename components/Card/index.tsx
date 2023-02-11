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
                className={`p-2 cursor-pointer hover:z-50 md:my-4 my-6 mx-2 3xl:w-[500px] bg-[#1e1e1e] rounded shadow border-2 border-[#212121] ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } transition duration-[250ms] ease-in`}
                onClick={() => setShowNewsModal(true)}
            >
                <ImageFallback
                    src={individualData?.newsImgURL}
                    fallbackSrc="/noImage.png"
                    width={1920}
                    height={1080}
                    author={
                        individualData.author
                            ? individualData?.author
                            : 'Unknown'
                    }
                    date={individualData?.newsDate}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${individualData?.newsImgURL}&w=16&q=1`}
                    className="border-[1px] hover:border-2 border-stone-700 transition duration-200 ease-in transform hover:scale-[1.1] hover:brightness-50"
                />

                <div className="flex flex-col mt-1">
                    <h3 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis md:text-base text-sm">
                        {individualData?.headlines}
                    </h3>

                    <p className="font-normal md:text-[0.85em] text-xs md:mt-4 mt-2 sm:line-clamp-4 line-clamp-3">
                        {individualData?.fullNews.trim()}
                    </p>
                </div>
            </div>
        </>
    )
}
