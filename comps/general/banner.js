import { useRouter } from 'next/router';
import * as AnimationData from '@/public/anim.json';
import styles from '@/styles/css/Banner.module.css';


export const Banner = ({title}) => {

    const router = useRouter()
    console.debug(router.pathname)
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
            
                    {/* <Lottie
                        className='kyn__bannerGlobe'
                        options={defaultOptions}
                        height={800}
                        width={800}
                        style={{zIndex: "1"}}
                    /> */}
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