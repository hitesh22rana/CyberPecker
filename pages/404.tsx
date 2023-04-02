import Link from 'next/link'

export default function Index() {
    return (
        <div className="fixed top-0 flex flex-col h-screen w-screen items-center justify-center">
            <h1
                title="404"
                className="text-[#f4e9e1] glitch md:text-9xl text-7xl drop-shadow"
                style={{
                    textShadow: '2px 2px #f44d30',
                }}
            >
                404
            </h1>
            <h2
                className="text-[#f4e9e1] md:text-xl text-base"
                style={{
                    textShadow: '1px 1px #f44d30',
                }}
            >
                Page Not Found
            </h2>
            <span className="text-[#f4e9e1] md:text-sm text-xs my-4 block md:max-w-lg max-w-xs text-center px-2">
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
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
