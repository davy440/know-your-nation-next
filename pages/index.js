import Map from '@/comps/home/map';
import Fact from '@/comps/home/fact';
import Stats from '@/comps/home/stats';
import Head from 'next/head';
import styles from '@/styles/css/index.module.css';

export const getStaticProps = async () => {
  
  const res = await fetch('https://countries-api-71346-default-rtdb.firebaseio.com/.json')
  const countries = await res.json()

  const randomNum = Math.random() * Object.keys(countries).length << 0
  const randomProp = (obj) => {
    const keys = Object.keys(obj)
    return {
          "name": keys[randomNum], 
          "fact": obj[keys[randomNum]]['fact']
          };
  }

  return {
    props: {
      country: randomProp(countries),
      revalidate: 86400 * 10
    }
  }
}

const Home = ({ country }) =>  {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" key="title" />
      </Head>

      <section className={`kyn__map ${styles.map}`}>
        <div className="container">
          <h2 className="kyn__mapTitle section-title">The Continents</h2>
          <Map />
        </div>
      </section>

      <Fact country={country}/>

      <Stats />
    </>
  )
}

export default Home