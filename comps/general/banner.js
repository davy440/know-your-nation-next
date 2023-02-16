import { TopBar } from './top';
import { useState } from 'react';
import Lottie from 'react-lottie';
import * as AnimationData from '@/public/Map.json';
import styles from '@/styles/css/Banner.module.css';


export const Banner = () => {
    const [isPaused, setPaused] = useState(false)
    const [isStopped, setStopped] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return(
        <>
            <TopBar />
            <div className={`kyn__banner h-screen ${styles.banner}`}>
                <div
                    className='container
                                mx-auto'
                >   
                    <div className={`kyn__bannerWrapper ${styles.bannerWrapper}`}>
                        <h2 className={`kyn__banner--title ${styles.title}`}>Know Your Nations</h2>
                
                        <Lottie
                            className='kyn__bannerGlobe'
                            options={defaultOptions}
                            height={800}
                            width={800}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}