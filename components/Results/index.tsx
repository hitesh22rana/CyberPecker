import Card from '../Card'
import { NewsData, NewsDataArray } from '../../utils/interfaces'

const Index = ({ data }: NewsDataArray): JSX.Element => {
    return (
        <section className="mx-w-[2800px] px-5 my-10 sm:grid md:grid-cols-2 newxl:grid-cols-3 mx-auto 3xl:flex flex-wrap justify-center">
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
