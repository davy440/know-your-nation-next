import Link from "next/link";
import styles from "@/styles/css/navLink.module.css";

const NavItem = ({style="", text = "", href = "#"}) => {
    return(
        <li className={style}><Link className={styles.link} href={href}>{text}</Link></li>
    )
}

export default NavItem;