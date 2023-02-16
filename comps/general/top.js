// The Top Bar containing the Logo and the Navigation
import NavItem from './navItem';
import Logo from '@/public/LOGO.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/css/Top.module.css';

export const TopBar = () => {

    const navData = [
        {text: "Home", href: "/"},
        {text: "All Nations", href: "#"},
        {text: "Categories", href: "#"}
    ]

    return(
        <div className={`kyn__top container ${styles.topBar}`}>
            <div className={`kyn__toplogoWrapper ${styles.logoWrapper}`}>
                <Link href="/"><Image className={`kyn__toplogo ${styles.logo}`} src={Logo} width={200} height={100} alt="Know your Nation" /></Link>
            </div>

            <nav id="kyn_navigation" className={`kyn__topNav ${styles.navigation}`}>
                <ul className='kyn__topNavList'>
                    {
                        navData.map(item => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <NavItem style={styles.li} {...item} />
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}