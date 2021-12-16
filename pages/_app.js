import Head from 'next/head';

//CSS
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ConteúdoSim</title>
        <link rel="shortcut icon" href="/favicons/favicon-cs-main.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
