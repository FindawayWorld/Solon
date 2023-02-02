import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Findaway's boilerplate for React sites/applications." />
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
                <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
                <link rel="mask-icon" href="%PUBLIC_URL%/safari-pinned-tab.svg" color="#0074d9" />
                <meta name="msapplication-TileColor" content="#0074d9" />
                <meta name="theme-color" content="#0074d9"></meta>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
