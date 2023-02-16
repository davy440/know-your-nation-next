import Head from 'next/head'
import { Banner } from '@/comps/general/banner'
import styles from '@/styles/css/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" key="title" />
      </Head>
      <Banner />
    </>
  )
}

export default Home