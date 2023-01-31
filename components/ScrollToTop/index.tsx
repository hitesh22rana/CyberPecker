import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'
import { handleScrollToTop } from '../../utils/helperFunctions'

export default function Index() {
    const currentHeight: number = useWindowSize()

    return (
        <>
            {currentHeight > 100 && (
                <button
                    className="cursor-pointer fixed bottom-[30px] right-[10px] w-[35px] h-[35px] sm:right-[20px] sm:w-[50px] sm:h-[50px] rounded-full bg-white/80 outline-none border-none z-50 hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md backdrop-blur-lg"
                    onClick={handleScrollToTop}
                >
                    <Image
                        width={'100%'}
                        height={'100%'}
                        src="/arrow.png"
                        alt="arrow"
                        loading="lazy"
                    />
                </button>
            )}
        </>
    )
}
