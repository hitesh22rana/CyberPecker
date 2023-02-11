import Image from 'next/image'
import Link from 'next/link'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiSuitcaseLine } from 'react-icons/ri'

export default function Index() {
    return (
        <div className="flex sm:flex-row items-center xl:justify-between mx-auto my-4 max-w-screen-xl flex-col justify-center">
            <Link href="/" className="cursor-pointer">
                <div className="flex flex-col gap-2 mx-4">
                    <Image
                        src="/logo.png"
                        height={50}
                        width={50}
                        alt="logo"
                        className="object-contain cursor-pointer"
                    />
                    <div className="flex flex-col gap-1 items-center">
                        <span className="font-normal sm:text-xs text-[0.6rem]">
                            Copyright © 2023 CyberPecker.
                        </span>
                        <span className="font-normal sm:text-xs text-[0.6rem]">
                            All Rights Reserved.
                        </span>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col gap-2 mx-4 my-4 sm:my-0">
                <h3 className="sm:text-base text-sm">Reach me out!</h3>
                <div className="flex flex-row items-center justify-center gap-4">
                    <a
                        href="https://hitesh22rana.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer text-white sm:text-2xl text-lg hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md"
                    >
                        <RiSuitcaseLine />
                    </a>

                    <a
                        href="https://github.com/hitesh22rana"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer text-white sm:text-2xl text-lg hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hitesh22rana/"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer text-white sm:text-2xl text-lg hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}
