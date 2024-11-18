
import { useNavigate } from 'react-router-dom';
import { axios } from '../lib/axios';

const SideNav = () => {


    const navigate = useNavigate();

    async function logout() {
        try {
            const response = await axios.post('/logout');
            if (response.status === 204) {
                localStorage.removeItem('authUser');
                navigate('/login');

            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="#" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src="logo.png" alt='Logo'
                            className="img-fluid rounded-circle"
                            style={{ height: '50px', width: '50px' }}></img>
                    </span>
                    <span className="mx-1">XELITE CRM</span>
                </a>
                <a href="#"
                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>
            <div className="menu-inner-shadow"></div>
            <ul className="menu-inner py-1">
                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Home">Home</div>
                    </a>
                </li>

                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-mail-send"></i>
                        <div data-i18n="Inbox">Inbox</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-task"></i>
                        <div data-i18n="Tasks">Tasks</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-chat"></i>
                        <div data-i18n="Chat">Chat</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-time"></i>
                        <div data-i18n="automail">Automail</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a onClick={logout} type="button" className="menu-link" href="#">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
export default SideNav;