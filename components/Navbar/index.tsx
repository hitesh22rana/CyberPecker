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
                    src="/logo.gif"
                    height={100}
                    width={100}
                    alt="logo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/logo.gif"
                    className="object-contain"
                />
            </div>
            <img
                src="https://readme-typing-svg.demolab.com?font=space+mono&duration=5010&pause=1000&color=C88E61&center=true&vCenter=true&lines=CyberPecker;Get+the+latest+scoop+on+cyberspace"
                alt="banner"
                className="object-contain sm:h-7 h-6 sm:mt-[-20px] mt-[-25px]"
            />
            <NavLinks />
        </nav>
    )
})

export default Index
