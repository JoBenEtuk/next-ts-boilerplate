import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="next-ts" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="next-ts" />
        <meta name="description" content="" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="next-ts" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/svg/icon.svg" />
        <meta name="twitter:creator" content="@JoBenEtuk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="next-ts" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="next-ts" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/svg/icon.svg" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/icon.svg" rel="icon" type="image/svg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/svg/icon.svg"></link>
        <meta name="theme-color" content="#8B436C" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
