import Footer from "../footer";
import { Banner } from "./banner";
import TopBar from "./top";

const Layout = ({ title, children }) => {
    console.log(title)
    return(
        <>
            <TopBar />
            <Banner title={title} />
            <div id="content" className="container mx-auto">
                {children}
            </div>
            <Footer />
        </>
        
    )
}

export default Layout;