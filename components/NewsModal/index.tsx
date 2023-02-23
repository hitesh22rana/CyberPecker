import { useState, SetStateAction, Dispatch, useRef } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import ImageFallback from '../ImageFallback'
import useTextToSpeech from '../../hooks/useTextTospeech'

import { NewsData } from '../../utils/interfaces'
import { dataUrls } from '../../utils/requests'
import {
    getCurrentWord,
    removeNonAlphanumeric,
    textFilter,
} from '../../utils/helperFunctions'

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
            const summarizedData: string = textFilter(data?.summary)
            setSummary(summarizedData)
        },
        onError: () => {
            setSummary(fullNews)
        },
    })

    const { speak, pause, resume, cancel, speaking, paused, currentWordIndex } =
        useTextToSpeech()

    const handleSpeakButtonRef = useRef(null)

    const toggleAnimation = () => {
        const handleSpeakButton = handleSpeakButtonRef.current

        if (handleSpeakButton.classList.contains('ping-animation')) {
            handleSpeakButton.classList.remove('ping-animation')
            setTimeout(() => {
                handleSpeakButton.classList.add('ping-animation')
            }, 100)
        } else {
            handleSpeakButton.classList.add('ping-animation')
        }
    }

    const handleSpeak = () => {
        if (handleSpeakButtonRef.current === null) {
            handleSpeakButtonRef.current =
                document.getElementById('handleSpeak')
        }

        if (speaking) {
            if (paused) {
                resume()
            } else {
                pause()
            }
        } else {
            speak(summary)
        }

        toggleAnimation()
    }

    const handleClose = () => {
        cancel()
        onClose()
    }

    const currentWord =
        summary &&
        removeNonAlphanumeric(getCurrentWord(summary, currentWordIndex))

    return (
        <>
            <div
                className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] w-screen h-full p-5 z-[100]"
                onClick={handleClose}
            ></div>

            <div
                className="flex fixed flex-col items-center justify-center z-[999] min-h-max min-w-min max-w-lg top-[50%] right-0 bottom-[50%] left-0 m-auto md:px-2 px-[6px] md:pt-2 pt-[6px] bg-[#1e1e1e] rounded w-[95%] pb-1 shadow-lg"
                style={{
                    transform: 'scale(1)',
                    WebkitTransform: 'scale(1)',
                    msTransform: 'scale(1)',
                    OTransform: 'scale(1)',
                    animation: 'modalPopUp 0.3s',
                    WebkitAnimation: 'modalPopUp 0.3s',
                    MozAnimation: 'modalPopUp 0.3s',
                    OAnimation: 'modalPopUp 0.3s',
                    backgroundImage: "url('/noise.png')",
                }}
            >
                {speaking && !paused && (
                    <div className="absolute -top-10">
                        <p className="font-semibold text-lg text-fade-animation">
                            {currentWord}
                        </p>
                    </div>
                )}

                <ImageFallback
                    src={individualData?.newsImgURL}
                    width={1920}
                    height={1080}
                    quality={100}
                    author={individualData?.author}
                    date={individualData?.newsDate}
                    suppressHydrationWarning={true}
                    handleSpeak={handleSpeak}
                    isSpeaking={speaking}
                    canSpeak={summary ? true : false}
                    isPaused={paused}
                    link={individualData?.newsURL}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${individualData?.newsImgURL}&w=16&q=1`}
                    className="border-[1px] hover:border-2 border-stone-700 transition duration-200 ease-in transform hover:scale-[1.1] hover:brightness-50"
                />
                <div
                    className="flex flex-col mt-1 justify-start items-start w-full md:p-1 p-0 pb-1"
                    style={{
                        animation: 'textReveal ease-in 0.3s',
                    }}
                >
                    <span className="text-left font-semibold whitespace-normal md:text-base md:tracking-tighter md:leading-[18px] tracking-tighter text-sm w-full">
                        {individualData?.headlines}
                    </span>

                    <p className="text-left font-medium whitespace-normal md:text-[0.8em] md:leading-4 md:tracking-tighter tracking-tight text-[0.68em] leading-[14px] md:mt-3 mt-2 w-full brightness-95">
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
