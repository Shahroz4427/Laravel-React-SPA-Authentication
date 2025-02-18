import { Link } from 'react-router-dom';
import Notification from '../components/Notification'

const NavBar = () => {

    const authUser = JSON.parse(localStorage.getItem("authUser"));

    const updateInertiaRootClass = () => {
        const dynamicClass = 'layout-menu-expanded';
        document.documentElement.classList.add(dynamicClass);
    }

    return (
        <>
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
            >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="#" id="customButton"
                    >
                        <i onClick={updateInertiaRootClass} className="bx bx-menu bx-sm"></i>
                    </a>
                </div>
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search..."
                                aria-label="Search..."
                            />
                        </div>
                    </div>
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <Notification />
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="#"
                                data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img
                                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                                        alt="placeholder" className="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img
                                                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                                                        alt="placeholder" className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-semibold d-block">{authUser.name}</span>
                                                <small className="text-muted"></small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link to='/user/profile' className="dropdown-item" >
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Settings</span>
                                    </a>
                                </li>

                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a type="button" className="dropdown-item" href="#">
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default NavBar;