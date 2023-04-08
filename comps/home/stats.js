import people from '@/public/stats/people.png';
import countries from '@/public/stats/countries.png';
import continents from '@/public/stats/continent.png';
import world from '@/public/stats/world.png';
import Pop from './pop';
import styles from '@/styles/css/stats.module.css';
import Image from 'next/image';

const Stats = () => {

    return (
       <section className={`kyn__stats text-center ${styles.stats}`}>
            <div className="container">
                <div className={`kyn__population ${styles.stat}`}>
                    <Pop/>
                    <p className="stat-text">people</p>
                    <Image className={styles.img} src={people} alt="People"/>
                </div>
                <div className={`countries ${styles.stat}`}>
                    <p className={`h2 ${styles.title}`}>195</p>
                    <p className="stat-text">Countries</p>
                    <Image className={styles.img} src={countries} alt="Countries"/>
                </div>
                <div className={`continents ${styles.stat}`}>
                    <p className={`h2 ${styles.title}`}>7</p>
                    <p className="stat-text">Continents</p>
                    <Image className={styles.img} src={continents} alt="Continents"/>
                </div>
                <div className={`world ${styles.stat}`}>
                    <p className={`h2 ${styles.title}`}>1</p>
                    <p className="stat-text">World</p>
                    <Image className={styles.img} src={world} alt="World"/>
                </div>
            </div>
       </section>
    );
}
 
export default Stats;