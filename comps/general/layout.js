import Footer from "../footer";
import { Banner } from "./banner";
import TopBar from "./top";

const Layout = ({ title, children }) => {
    return(
        <>
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