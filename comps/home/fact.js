import horizon from '@/public/horizon.svg';
import styles from '@/styles/css/fact.module.css';

const Fact = ({country}) => {
    
    const {name, fact} = country;
    return ( 
        <section className={`kyn_facts ${styles.fact}`}>
            <div className={`container ${styles.container}`}>
            <div className={`kyn__fact-wrapper ${styles.kyn__factWrapper}`}>
                <div className="kyn__fact-title">
                <h2 className={`section-title ${styles.title}`}>Country Fact</h2>
                <h3 className={`kyn__fact-country ${styles.h3}`}>{name}</h3>
                </div>
                <p className={`kyn__fact-text ${styles.factContent}`}>
                {fact}
                </p>
            </div>
            </div>
        <div className={styles.bg} style={{backgroundImage: `url(${horizon.src})`}}></div>
      </section>
    );
}
 
export default Fact;