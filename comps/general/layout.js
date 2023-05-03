import Head from "next/head";
import Footer from "../footer";
import { Banner } from "./banner";
import TopBar from "./top";
import Favicon from '@/public/favicon.svg';
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    weight: ['400','700'],
    style: ['normal'],
    subsets: ['latin']
})

const Layout = ({ title, children }) => {
    return(
        <>
            <Head>
                <link rel="Shortcut Icon" href={Favicon.src} />
            </Head>
            <div className={poppins.className}>
            <TopBar />
            <Banner title={title} />
            <div id="content">
                {children}
            </div>
            <Footer />
            </div>
        </>
        
    )
}

export default Layout;