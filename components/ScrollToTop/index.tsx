import { memo } from 'react'
import Image from 'next/image'
import useScreenSize from '../../hooks/useScreenSize'
import useWindowSize from '../../hooks/useWindowSize'
import { handleScrollToTop } from '../../utils/helperFunctions'

const Index = memo(function Index() {
    const currentHeight: number = useWindowSize()
    const progressCompletion: number = useScreenSize()
    const degrees: number = progressCompletion * 3.6

    return currentHeight > 100 ? (
        <button
            className="cursor-pointer fixed bottom-[30px] right-[10px] w-[35px] h-[35px] sm:right-[20px] sm:w-[50px] sm:h-[50px] rounded-full bg-white/80 outline-none border-none z-50 hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md backdrop-blur-lg"
            onClick={handleScrollToTop}
        >
            <div className="flex items-center justify-center w-[90%] h-[90%] translate-x-[5%] translate-y-[5%] absolute rounded-[50%] bg-white">
                <Image
                    width="100%"
                    height="100%"
                    src="/arrow.png"
                    alt="arrow"
                    loading="lazy"
                />
            </div>
            <div
                className=" w-full h-full rounded-[50%] bg-[#ddd]"
                style={{
                    background: `conic-gradient(#f44d30 ${degrees}deg, #ddd ${degrees}deg)`,
                }}
            />
        </button>
    ) : null
})

export default Index
