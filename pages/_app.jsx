import Head from 'next/head'

import '../css/normalize.css'
import '../css/app.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head
        children={
          <>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>Przemysław Tyczyński</title>
            <meta name="description" content="Trochę piszę trochę kodzę. Zapraszam." />
          </>
        }
      />
      <Component {...pageProps} />
    </>
  )
}
