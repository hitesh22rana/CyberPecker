import { NewsData } from '../../utils/interfaces'
import ImageFallback from '../ImageFallback'

interface PropsData {
    individualData: NewsData
}

const Index = ({ individualData }: PropsData): JSX.Element => {
    function countWords(str: string): number {
        return str.split(' ').filter(function (n) {
            return n != ''
        }).length
    }

    return (
        <>
            <div className="p-2 cursor-pointer hover:z-50 md:my-4 my-6 mx-2 3xl:w-[500px] bg-[#1e1e1e] rounded shadow">
                <a
                    href={individualData?.newsURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center w-auto h-auto"
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
                </a>
                <div className="flex flex-col mt-1">
                    <h3 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis md:text-base text-sm">
                        {individualData?.headlines}
                    </h3>

                    <p className="font-normal whitespace-normal md:text-[0.85em] text-xs md:mt-4 mt-2">
                        {countWords(individualData?.fullNews.trim()) < 35
                            ? individualData?.fullNews.trim()
                            : individualData.fullNews.trim().substring(0, 180) +
                              '...'}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Index
