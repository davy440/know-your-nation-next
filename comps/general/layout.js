import Head from "next/head";
import Footer from "../footer";
import { Banner } from "./banner";
import TopBar from "./top";
import Favicon from '@/public/favicon.svg';

const Layout = ({ title, children }) => {
    return(
        <>
            <Head>
                <link rel="Shortcut Icon" href={Favicon.src} />
            </Head>
            <TopBar />
            <Banner title={title} />
            <div id="content">
                {children}
            </div>
            <Footer />
        </>
        
    )
}

export default Layout;