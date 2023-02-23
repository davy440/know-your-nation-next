import Head from "next/head"

const continents = [{
    name: 'north-america',
    code: "NA"
},
{
    name: 'south-america',
    code: "SA"
},
{
    name: 'europe',
    code: "EU"
},
{
    name: 'asia',
    code: "AS"
},
{
    name: 'africa',
    code: "AF"
},
{
    name: 'oceania',
    code: "OC"
}]

export const getStaticPaths = async () => {

    const paths = continents.map(({ name }) => {
        return {
            params: { continent: name }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const contName = context.params.continent
    let contCode = ""
    continents.map(({ name, code }) => {
        if ( contName === name ) {
            contCode = code
        }
    })

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:
            `{
                continent(code: "${contCode}") {
                code
                name
                countries {
                  code
                  name
                  capital
                  currency
                }
              }
            }`
        })
    }
    const res = await fetch("https://countries.trevorblades.com/graphql", options)
    const continentData = await res.json()

    return {
        props: {
            continentData,
            title: continentData.data.continent.name
        },
        revalidate: 1
    }
}

const Continent = (props) => {
    const { countries, name } = props.continentData.data.continent
    
    return (
        <>
            <Head>
                <title>{name}</title>
                <meta property='og:title' content={name} />
                <meta description='og:description' content={`List of the nations in ${name}.`} />
            </Head>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    countries.map(({ code, name, capital, currency }) => {
                        return (
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
    )
    
}

export default Continent;