import { memo } from 'react'
import Image from 'next/image'
import useScreenSize from '../../hooks/useScreenSize'
import NavLinks from '../NavLinks'

const Index = memo(function Index() {
    const progressCompletion: number = useScreenSize()

    return (
        <nav className="flex flex-col w-full items-center justify-center max-w-[2600px] mx-auto">
            <div
                style={{
                    transform: `translateX(${progressCompletion - 100}%)`,
                    transition: 'all 0.1s ease',
                }}
                className="fixed z-[9999] h-1 w-full bg-[#f44d30] top-0"
            />
            <div className="flex items-center justify-center mx-auto mt-4 mb-6 w-[70px] h-[70px] md:mt-8 md:w-[90px] md:h-[90px]">
                <Image
                    src="/logo.png"
                    height={100}
                    width={100}
                    alt="logo"
                    className="object-contain"
                />
            </div>
            <NavLinks />
        </nav>
    )
})

export default Index
