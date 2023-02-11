import { useState, SetStateAction, Dispatch } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import ImageFallback from '../ImageFallback'
import { NewsData } from '../../utils/interfaces'
import { dataUrls } from '../../utils/requests'

interface PropsData {
    individualData: NewsData
    setShowNewsModal: Dispatch<SetStateAction<boolean>>
}

const Index = ({
    individualData,
    setShowNewsModal,
}: PropsData): JSX.Element => {
    const [summary, setSummary] = useState<string | null>(null)

    const { fullNews } = individualData || {}
    const { url: postSummaryUrl } = dataUrls?.postSummary || {}

    const onClose = () => setShowNewsModal(false)

    const getSummary = async () => {
        try {
            const response = await axios.post(
                postSummaryUrl,
                {
                    data: fullNews?.trim(),
                },
                {
                    headers: {
                        accept: 'application/json;charset=UTF-8',
                        'Content-Type': 'application/json',
                    },
                }
            )

            return response
        } catch (error) {
            throw error
        }
    }

    useQuery(String(individualData?.id), getSummary, {
        onSuccess: ({ data }) => {
            const summarizedData: string = data?.summary?.trim()
            setSummary(summarizedData)
        },
        onError: () => {
            setSummary(fullNews)
        },
    })

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
                    WebkitTransform: 'scale(1)',
                    msTransform: 'scale(1)',
                    OTransform: 'scale(1)',
                    animation:
                        'borderRotate 2500ms linear infinite, modalPopUp 0.3s',
                    WebkitAnimation:
                        'borderRotate 2500ms linear infinite, modalPopUp 0.3s',
                    MozAnimation:
                        'borderRotate 2500ms linear infinite, modalPopUp 0.3s',
                    OAnimation:
                        'borderRotate 2500ms linear infinite, modalPopUp 0.3s',
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
                        width={1920}
                        height={1080}
                        quality={100}
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
                    className="flex flex-col mt-1 justify-start items-start w-full"
                    style={{
                        animation: 'textReveal ease-in 0.3s',
                    }}
                >
                    <h3 className="text-left font-medium whitespace-normal md:text-base text-sm w-full">
                        {individualData?.headlines}
                    </h3>

                    <p className="text-left md:font-normal font-light whitespace-normal md:text-xs text-[0.65em] leading-3 md:mt-3 mt-2 w-full">
                        {summary || (
                            <span className="flex justify-center items-center">
                                <span className="loader" />
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Index
