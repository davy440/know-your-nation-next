import '@/styles/css/globals.css'
import Layout from '@/comps/general/layout'

export default function App({ Component, pageProps }) {

  const { title } = pageProps
  // console.log(pageProps)
  return (
    <>
      <Layout title={title}>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
