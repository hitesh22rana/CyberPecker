import { NewsData } from '../../utils/interfaces'

interface PropsData {
    individualData: NewsData
}

const index = ({ individualData }: PropsData): JSX.Element => {
    function countWords(str: string): number {
        return str.split(' ').filter(function (n) {
            return n != ''
        }).length
    }

    return (
        <>
            <div className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-[1.025] hover:z-50 my-4 mx-2 3xl:w-[500px]">
                <a
                    href={individualData?.newsURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center w-auto h-auto"
                >
                    <img
                        src={individualData?.newsImgURL}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null
                            currentTarget.src = 'noImage.png'
                        }}
                        alt="news-img"
                        width={1920}
                        height={1080}
                    />
                </a>
                <div className="flex flex-col mt-1">
                    <h3 className="font-medium whitespace-normal text-[1em]">
                        {individualData?.headlines}
                    </h3>

                    <div className="flex flex-row justify-between w-full mt-2">
                        <span className="font-normal whitespace-normal text-[0.9em]">
                            {individualData.author
                                ? individualData?.author
                                : 'Unknown'}
                        </span>
                        <span className="font-normal whitespace-normal text-[0.9em]">
                            {individualData?.newsDate}
                        </span>
                    </div>
                    <h4 className="font-light whitespace-normal text-[0.85em] mt-4">
                        {countWords(individualData?.fullNews.trim()) < 35
                            ? individualData?.fullNews.trim()
                            : individualData.fullNews.trim().substring(0, 180) +
                              '...'}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default index
