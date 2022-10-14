import { NextRouter, useRouter } from 'next/router'
import requests from '../../utils/requests'

export default function Index() {
    const router: NextRouter = useRouter()
    const query = router.query

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.slice(1)
    }

    function handleCategory(title: string): void {
        if (
            query?.category === title ||
            (title === 'general' && !query?.category)
        )
            return
        router.push(
            title !== query?.category?.toString() &&
                (title !== 'general' ? `/?category=${title}` : '/')
        )
    }

    return (
        <div className="relative w-full flex items-center justify-center">
            <div className="w-full h-auto flex flex-row px-10 sm:px-20 text-xl font-medium tracking-wider whitespace-nowrap space-x-10 sm:space-x-16 overflow-x-scroll scrollbar-hide overflow-y-hidden">
                {Object.entries(requests).map(([key, { title }]) => (
                    <h2
                        key={key}
                        onClick={() => handleCategory(title)}
                        className="last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                        style={
                            (title === 'general' && !query?.category) ||
                            title === query?.category?.toString()
                                ? {
                                      color: 'rgb(239, 68, 68)',
                                      userSelect: 'none',
                                      WebkitUserSelect: 'none',
                                      MozUserSelect: 'none',
                                      msUserSelect: 'none',
                                  }
                                : {
                                      color: 'rgb(209, 213, 219)',
                                      userSelect: 'none',
                                      WebkitUserSelect: 'none',
                                      MozUserSelect: 'none',
                                      msUserSelect: 'none',
                                  }
                        }
                    >
                        {title === '' ? 'General' : capitalize(title)}
                    </h2>
                ))}
            </div>

            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-8 w-1/12 4xl:hidden"></div>
        </div>
    )
}
