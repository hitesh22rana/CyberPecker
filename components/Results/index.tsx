import FlipMove from 'react-flip-move'

import Card from '../Card'
import { NewsData, NewsDataArray } from '../../utils/interfaces'

const index = ({ data }: NewsDataArray): JSX.Element => {
    return (
        <FlipMove className="mx-w-[2800px] px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 mx-auto 3xl:flex flex-wrap justify-center">
            {data?.map((individualData: NewsData) => (
                <Card
                    key={individualData?.id}
                    individualData={individualData}
                />
            ))}
        </FlipMove>
    )
}

export default index
