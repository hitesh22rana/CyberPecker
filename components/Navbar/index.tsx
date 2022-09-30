import Image from 'next/image'
import NavLinks from '../NavLinks'

const index = () => {
    return (
        <nav className="flex flex-col w-full items-center justify-center max-w-[2600px] mx-auto">
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

export default index
