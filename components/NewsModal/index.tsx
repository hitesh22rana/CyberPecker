import ImageFallback from '../ImageFallback'
import { NewsData } from '../../utils/interfaces'

interface PropsData {
    individualData: NewsData
    onClose: () => void
}

const index = ({ individualData, onClose }: PropsData): JSX.Element => {
    return (
        <>
            <div
                className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] w-screen h-full p-5 z-[100]"
                onClick={onClose}
            ></div>

            <div
                className="flex fixed flex-col items-center justify-center z-[999] min-h-max min-w-min max-w-lg top-[50%] right-0 bottom-[50%] left-0 m-auto p-2 bg-[#1e1e1e] rounded shadow w-[95%] border-gradient"
                style={{
                    transform: 'scale(1)',
                    animation:
                        'borderRotate var(--d) linear infinite forwards, modalPopUp 0.3s',
                }}
            >
                <a
                    href={individualData?.newsURL}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer flex justify-center w-auto h-auto"
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
                <div
                    className="flex flex-col mt-1"
                    style={{
                        animation: 'textReveal ease-in 0.3s',
                    }}
                >
                    <h3 className="font-medium whitespace-normal md:text-base text-sm">
                        {individualData?.headlines}
                    </h3>

                    <p className="md:font-normal font-light whitespace-normal md:text-xs text-[0.65em] leading-3 md:mt-3 mt-2">
                        {individualData?.fullNews.trim()}
                    </p>
                </div>
            </div>
        </>
    )
}

export default index
