import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        media="print"
                        onLoad={() => {
                            const link = document.createElement('link')
                            link.href =
                                'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap'
                            link.rel = 'stylesheet'
                            document.head.appendChild(link)
                        }}
                        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
                    />
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
