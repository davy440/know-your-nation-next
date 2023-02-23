import styles from '@/styles/css/Top.module.css';
import NavList from "./navList"

const NavDesktop = () => {

    return(
        <nav id="kyn_navigation" className={`kyn__topNav ${styles.navigation}`}>
            <NavList listStyle={styles.li} linkStyle={styles.link} />
        </nav>
    )
}
export default NavDesktop