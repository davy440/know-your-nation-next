import { useRouter } from 'next/router';
import * as AnimationData from '@/public/anim.json';
import styles from '@/styles/css/Banner.module.css';
import globe from '@/public/mapDavy.gif';
import Image from 'next/image';


export const Banner = ({title}) => {

    const router = useRouter()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return(
        router.pathname === "/" 
        ?
        <div className={`kyn__banner h-screen ${styles.homeBanner}`}>
            <div className='container mx-auto'>   
                <div className={`kyn__bannerWrapper ${styles.bannerWrapper}`}>
                    <h2 className={`kyn__banner--title ${styles.title}`}>Know Your Nations</h2>
                    <Image src={globe} alt="Globe" />
                </div>
            </div>
        </div> 
        :
        router.pathname !== "" &&
        <div className={`kyn__banner ${styles.defBanner}`}>
            <div className="container mx-auto">
                <h1 className={`kyn__pageTitle ${styles.pageTitle}`}>{title}</h1>
            </div>
        </div>
    )
}