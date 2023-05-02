import '@/styles/css/globals.css'
import Layout from '@/comps/general/layout'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  const { title } = pageProps
  return (
    <>
      <Layout className={poppins.className} title={title}>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
