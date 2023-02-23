import { useState, createRef } from "react";
import styles from "@/styles/css/Top.module.css";
import { animated, SpringValue } from "@react-spring/web";
import NavList from "./navList";

const NavMobile = () => {

    let isShowing = createRef(false)
    let toggleTransform = new SpringValue('translateX(100%)', {
        config: {
            tension: 240,
            clamp: true
        }
    })

    const toggle = () => {
        toggleTransform.start(isShowing ? 'translateX(0%)' : 'translateX(100%)')
        isShowing = !isShowing
    }

    return (
        <>  
            <input
                type="checkbox"
                id="navBtn"
                className="navBtn"
                style={{display: "none"}}
                onClick={toggle}
            />
            <label
                for="navBtn"
                className={styles.btn}
                >   
            </label>
                <animated.div
                className={`kyn__mobileNavWrapper ${styles.mobileNavWrapper}`}
                style={{ transform: toggleTransform }}>
                <button
                    type="button"
                    className={styles.close}
                    onClick={toggle}>
                </button>
                <NavList listStyle={styles.liMobile} />
            </animated.div>
        </>
     );
}
 
export default NavMobile;