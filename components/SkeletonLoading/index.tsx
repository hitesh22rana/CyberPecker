import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = (): JSX.Element => {
    return (
        <div className="p-2 md:my-4 my-6 mx-2 3xl:w-[500px] bg-[#1e1e1e] rounded shadow border-2 border-[#212121]">
            <div className="relative w-auto h-auto overflow-hidden bg-[#313131]">
                <span className="skeletonImg"></span>
                <Image
                    src="/noImage.png"
                    alt="news-img"
                    width={1920}
                    height={1080}
                    className="opacity-0"
                />
            </div>

            <div className="flex flex-col mt-1">
                <h3 className="font-medium whitespace-normal text-[1em]">
                    <Skeleton />
                </h3>

                <p className="font-light whitespace-normal text-[0.85em] mt-4">
                    <Skeleton count={3} />
                </p>
            </div>
        </div>
    )
}

const Index = (): JSX.Element => {
    const SkeletonCount = 8

    return (
        <div className="mx-w-[2800px] sm:px-5 px-2 gap-y-2 md:my-5 my-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto 3xl:flex flex-wrap justify-center">
            {Array(SkeletonCount)
                .fill(1)
                ?.map((_, index: number) => (
                    <SkeletonCard key={index} />
                ))}
        </div>
    )
}

export default Index
