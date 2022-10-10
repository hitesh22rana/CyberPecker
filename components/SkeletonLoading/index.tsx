import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = (): JSX.Element => {
    return (
        <div className="p-2 my-4 mx-2 3xl:w-[500px]">
            <div className="relative w-auto h-auto overflow-hidden bg-[#313131]">
                <span className="skeletonImg"></span>
                <img
                    src="noImage.png"
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

                <div className="flex flex-row items-center justify-between">
                    <span className="w-[80px]">
                        <Skeleton />
                    </span>

                    <span className="w-[50px]">
                        <Skeleton />
                    </span>
                </div>

                <h4 className="font-light whitespace-normal text-[0.85em] mt-4">
                    <Skeleton count={3} />
                </h4>
            </div>
        </div>
    )
}

const index = (): JSX.Element => {
    return (
        <div className="mx-w-[2800px] px-5 my-10 sm:grid md:grid-cols-2 newxl:grid-cols-3 mx-auto 3xl:flex flex-wrap justify-center">
            {'123456'.split('')?.map((_, index: number) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}

export default index
