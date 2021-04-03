import React from 'react';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jotaEmeCortat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
