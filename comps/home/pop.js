import { useEffect, useState } from 'react';
import styles from '@/styles/css/stats.module.css';

const Pop = () => {

    const [pop, updatePop] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'dacb5d8b99msh967b47b0201b006p11ae8bjsn68485fc552f8',
                    'X-RapidAPI-Host': 'get-population.p.rapidapi.com'
                }
            };
            const query = await fetch('https://get-population.p.rapidapi.com/population', options);
            const pop = await query.json();
            console.log(pop);
            const {readable_format} = await pop;

            updatePop(readable_format);
        }
        setInterval(fetchData, 5000);
    }, []);

    return ( 
        <p className={`h2 ${styles.title}`}>{pop}</p>
     );
}
 
export default Pop;