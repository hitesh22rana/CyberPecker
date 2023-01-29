import Head from 'next/head'
import { capitalize } from '../../utils/helperFunctions'

export default function Pages({ query }) {
    return (
        <Head>
            {
                <title>
                    {query?.category &&
                        capitalize(query?.category.toString()) + ' | '}{' '}
                    CyberPecker
                </title>
            }

            <meta charSet="UTF-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta
                httpEquiv="Content-Type"
                content="text/html; charset=ISO-8859-1"
            ></meta>
            <meta name="robots" content="index, follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                name="description"
                content={`
                    Get latest CyberSecurity updates curated from different source under one roof.
                    This page consists updates related to ${
                        query?.category &&
                        capitalize(query?.category.toString())
                    }`}
            />
        </Head>
    )
}
