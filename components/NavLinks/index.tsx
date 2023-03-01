import { useCallback, memo } from 'react'
import { NextRouter, useRouter } from 'next/router'
import useHorizontalScroll from '../../hooks/useHorizontalScroll'

import { capitalize } from '../../utils/helperFunctions'
import { dataUrls } from '../../utils/requests'

const categoryTitles = Object.entries(dataUrls).map(([, { title }]) => title)

const Index = memo(function Index() {
    const router: NextRouter = useRouter()
    const query = router.query
    const queryCategory = query?.category?.toString()

    const scrollRef = useHorizontalScroll()

    const handleCategory = useCallback(
        (title: string, queryCategory: string): void => {
            if (
                title === queryCategory ||
                (title === 'general' && !queryCategory)
            ) {
                return
            }

            const url = title === 'general' ? '/' : `/?category=${title}`
            router.push(url)
        },
        []
    )

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
                                onClick={() =>
                                    handleCategory(title, queryCategory)
                                }
                                className={`transition-all duration-200 transform select-none font-semibold ${
                                    title === queryCategory ||
                                    (title === 'general' && !queryCategory)
                                        ? 'text-[#f44d30]'
                                        : 'text-[#d1d5db] cursor-pointer hover:brightness-75 hover:scale-105 before:content-[""] before:absolute before:w-0 before:h-0.5 before:bottom-[-3px] before:-translate-x-2/4 before:translate-y-[0%] before:bg-[#f44d30] before:origin-center before:invisible before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-2/4 hover:before:visible hover:before:w-full'
                                }`}
                            >
                                {capitalize(title || 'General')}
                            </h2>
                        )
                )}
            </div>

            <div className="absolute top-0 right-0 shadow bg-gradient-to-l from-[#171717] h-full w-[5%] 4xl:hidden" />
        </div>
    )
})

export default Index
