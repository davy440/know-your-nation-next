import styles from "@/styles/css/footer.module.css";

const Footer = () => {
    return ( 
        <div className={`kyn__footer ${styles.footer}`}>
            <div className="container mx-auto">
                <div className="colophon">Copyright © 2023. All Rights Reserved.</div>
            </div>
        </div>
     );
}
 
export default Footer;