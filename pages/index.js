import Map from '@/comps/home/map'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" key="title" />
      </Head>

      <section className="kyn__map">
        <h2 className="kyn__mapTitle section-title">The Continents</h2>
        <Map />
      </section>
      
    </>
  )
}

export default Home