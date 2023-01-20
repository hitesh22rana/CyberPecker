import Card from '../Card'
import { NewsData, NewsDataArray } from '../../utils/interfaces'

const Index = ({ data }: NewsDataArray): JSX.Element => {
    return (
        <section className="mx-w-[2800px] sm:px-5 px-2 gap-y-2 md:my-5 my-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto 3xl:flex flex-wrap justify-center">
            {data?.map((individualData: NewsData) => (
                <Card
                    key={individualData?.id}
                    individualData={individualData}
                />
            ))}
        </section>
    )
}

export default Index
