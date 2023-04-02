import Link from 'next/link'

export default function Index() {
    return (
        <div className="fixed top-0 flex flex-col h-screen w-screen items-center justify-center">
            <h1
                title="500"
                className="text-[#f4e9e1] glitch md:text-9xl text-7xl drop-shadow"
                style={{
                    textShadow: '2px 2px #f44d30',
                }}
            >
                500
            </h1>
            <h2
                className="text-[#f4e9e1] md:text-xl text-base"
                style={{
                    textShadow: '1px 1px #f44d30',
                }}
            >
                Internal Server Error
            </h2>
            <span className="text-[#f4e9e1] md:text-sm text-xs my-4 block md:max-w-lg max-w-xs text-center px-2">
                The server encountered an internal error or misconfiguration and
                was unable to complete your request. Please be patient or try
                again later.
            </span>
            <Link
                href="/"
                className="md:text-base text-xs cursor-pointer transition-all rounded px-4 py-2 border-2 shadow-[2px_2px_#f44d30] hover:shadow-[4px_4px_5px_#f44d30] hover:brightness-90 bounce-button"
                style={{
                    textShadow: '1px 1px #f44d30',
                }}
            >
                Go back
            </Link>
        </div>
    )
}
