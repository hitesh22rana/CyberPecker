import { NextRouter, useRouter } from 'next/router'
import useHorizontalScroll from '../../hooks/useHorizontalScroll'

import { capitalize } from '../../utils/helperFunctions'
import { dataUrls } from '../../utils/requests'

const categoryTitles = Object.entries(dataUrls).map(([, { title }]) => title)

export default function Index() {
    const router: NextRouter = useRouter()
    const query = router.query
    const queryCategory = query?.category?.toString()

    const scrollRef = useHorizontalScroll()

    function handleCategory(title: string): void {
        if (
            title === queryCategory ||
            (title === 'general' && !queryCategory)
        ) {
            return
        }
        title !== queryCategory &&
            router.push(title !== 'general' ? `/?category=${title}` : '/')
    }

    return (
        <div className="relative w-full flex items-center justify-center">
            <div
                ref={scrollRef}
                className="w-full h-auto flex flex-row px-10 md:px-20 md:text-xl text-lg font-medium tracking-wider whitespace-nowrap space-x-8 sm:space-x-14 overflow-x-scroll scrollbar-hide overflow-y-hidden py-2 scroll-smooth"
            >
                {categoryTitles.map(
                    (title) =>
                        title !== 'summarize' && (
                            <h2
                                key={title}
                                onClick={() => handleCategory(title)}
                                className={`sm:last:pr-10 cursor-pointer transition-all duration-200 transform hover:brightness-75 hover:scale-105 select-none ${
                                    title === queryCategory ||
                                    (title === 'general' && !queryCategory)
                                        ? 'text-[#f44d30]'
                                        : 'text-[#d1d5db]'
                                }`}
                            >
                                {capitalize(title === '' ? 'General' : title)}
                            </h2>
                        )
                )}
            </div>

            <div className="absolute top-0 left-0 bg-[#171717] h-full w-[2%] 4xl:hidden"></div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#171717] h-full w-1/12 4xl:hidden"></div>
        </div>
    )
}
