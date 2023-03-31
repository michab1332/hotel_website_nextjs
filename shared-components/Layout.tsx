import Navbar from "./Navbar";
import Footer from "./Footer";
import ContantSection from "./ContactSection";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <ContantSection />
            <Footer />
        </>
    );
}

export default Layout;