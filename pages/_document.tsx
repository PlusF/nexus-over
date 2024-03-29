import Document, { Head, Html, Main, NextScript } from 'next/document';

const url = '';
const title = 'NExusOver';
const description = 'NExus Over';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja-JP">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:url" content={url} />
                    <meta property="og:description" content={description} />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:image" content={`${url}/og_image.png`} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="format-detection" content="telephone=no" />
                    <link rel="apple-Tournamentuch-icon" href="/apple-touch-icon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
