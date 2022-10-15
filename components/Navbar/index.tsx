import Image from 'next/image'
import useScreenSize from '../../hooks/useScreenSize'
import NavLinks from '../NavLinks'

const Index = () => {
    const progressCompletion: number = useScreenSize()

    return (
        <nav className="flex flex-col w-full items-center justify-center max-w-[2600px] mx-auto">
            <span
                style={{
                    transform: `translateX(${progressCompletion - 100}%)`,
                }}
                className="fixed z-[9999] bg-[#c88e61] h-1 w-full top-0"
            />
            <div className="flex items-center justify-center mx-auto mt-4 mb-8 my-4 w-[80px] h-[80px] sm:mt-8 sm:mb-12 sm:w-[100px] sm:h-[100px]">
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
}

export default Index
