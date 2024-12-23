import SideNav from './SideNav.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

const Layout = ({children}) => {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <SideNav></SideNav>
                    <div className="layout-page">
                        <NavBar ></NavBar>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                            <Footer></Footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )
}

export default Layout