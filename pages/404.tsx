import Link from 'next/link'

export default function Index({ statusCode }) {
    return (
        <div className="fixed top-0 flex flex-col h-screen w-screen items-center justify-center">
            <h1
                title={statusCode}
                className="text-[#f4e9e1] glitch md:text-9xl text-7xl hover:brightness-90"
            >
                {statusCode}
            </h1>
            <Link href="/">
                <a className="md:text-base text-xs cursor-pointer mt-5 hover:brightness-75 transition-all">
                    Go back
                </a>
            </Link>
        </div>
    )
}
