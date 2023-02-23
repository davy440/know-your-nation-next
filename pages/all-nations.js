import styles from '@/styles/css/allNations.module.css'
import Head from 'next/head'

export const getStaticProps = async () => {
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          countries {
            code
            name
            capital
            languages {
                name
            }
            currency
            emoji
          }
        }`
      })
    }
    const res = await fetch("https://countries.trevorblades.com/graphql", options)
    const countries = await res.json()
  
    return {
      props: {
        countries,
        title: "All Nations"
    },
      revalidate: 10 * 86400
    }
}

const AllNations = (props) => {

    const { countries } = props.countries.data
    
    return (
        <>
            <Head>
                <title>All Nations</title>
                <meta property='og:title' content='All Nations' />
                <meta description='og:description' content='List of the nations in the world.' />
            </Head>
            <header>
                <h2 className="pageTitle">List of all the nations in the World</h2>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    Object.keys(countries).map((index) => {
                        const { code, name, capital, currency} = countries[index]

                        return(
                            <tr key={code}>
                                <td>{name}</td>
                                <td>{capital}</td>
                                <td>{currency}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
     );
}
 
export default AllNations;