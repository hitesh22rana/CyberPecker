import Head from 'next/head'
import { capitalize } from '../../utils/helperFunctions'

export default function Title({ query }) {
    return (
        <Head>
            {
                <title>
                    {query?.category &&
                        capitalize(query?.category.toString()) + ' | '}{' '}
                    CyberPecker
                </title>
            }
        </Head>
    )
}
