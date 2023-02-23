// The Top Bar containing the Logo and the Navigation
import { useEffect, useState } from 'react';
import Logo from '@/public/LOGO.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/css/Top.module.css';
import NavDesktop from './nav/navDesktop';
import NavMobile from './nav/navMobile';



const TopBar = () => {

    const [view, setView] = useState('')

    const checkView = () => {
        window.innerWidth <= 767
        ? setView('mobile')
        : setView('desktop')
    }

    useEffect(() => {

        checkView()

        window.addEventListener('resize', () => {
            checkView()
        })

        return () => {
            window.removeEventListener('resize', checkView);
        }
    }, [])

    return(
        <div className={`kyn__top container ${styles.topBar}`}>
            <div className={`kyn__toplogoWrapper ${styles.logoWrapper}`}>
                <Link href="/"><Image className={`kyn__toplogo ${styles.logo}`} src={Logo} width={200} height={100} alt="Know your Nation" /></Link>
            </div>
            {
                view === 'desktop' &&
                <NavDesktop />
            }
            {
                view === 'mobile' &&
                <NavMobile />
                
            }
            
        </div>
    )
}

export default TopBar