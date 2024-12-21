import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const Notification = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const ps = new PerfectScrollbar(scrollContainerRef.current, {
            wheelSpeed: 1,
            wheelPropagation: false,
            minScrollbarLength: 20,
        });
        const preventScrollPropagation = (e) => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;

            const isAtTop = scrollTop === 0 && e.deltaY < 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;

            if (isAtTop || isAtBottom) {
                e.preventDefault();
            }
        };

        const containerElement = scrollContainerRef.current;
        containerElement.addEventListener('wheel', preventScrollPropagation);
        return () => {
            ps.destroy();
            containerElement.removeEventListener('wheel', preventScrollPropagation);
        };
    }, []);

    return (
        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="true"
            >
                <span className="position-relative">
                    <i className="bx bx-bell" style={{fontSize:"20px"}} />
                    <span className="badge rounded-pill bg-danger badge-dot badge-notifications border" />
                    
                </span>
            </a>
            <ul
                className="dropdown-menu dropdown-menu-end p-0"
                data-bs-popper="static"
                style={{ width: '300px' }}
            >
                <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                        <h6 className="mb-0 me-auto">Notification</h6>
                        <div className="d-flex align-items-center h6 mb-0">
                            <span className="badge bg-label-primary me-2">8 New</span>
                            <a
                                href="#"
                                className="dropdown-notifications-all p-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                aria-label="Mark all as read"
                                data-bs-original-title="Mark all as read"
                            >
                                <i className="bx bx-envelope-open text-heading" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                    <div
                        ref={scrollContainerRef}
                        style={{ maxHeight: '400px', overflow: 'hidden' }}
                    >
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <img
                                                src="/img/avatars/1.png"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Congratulation Lettie 🎉</h6>
                                        <small className="mb-1 d-block text-body">
                                            Won the monthly best seller gold badge
                                        </small>
                                        <small className="text-muted">1h ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <span className="avatar-initial rounded-circle bg-label-danger">
                                                CF
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Charles Franklin</h6>
                                        <small className="mb-1 d-block text-body">
                                            Accepted your connection
                                        </small>
                                        <small className="text-muted">12hr ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <img
                                                src="/img/avatars/2.png"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">New Message ✉️</h6>
                                        <small className="mb-1 d-block text-body">
                                            You have new message from Natalie
                                        </small>
                                        <small className="text-muted">1h ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <span className="avatar-initial rounded-circle bg-label-success">
                                                <i className="bx bx-cart" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Whoo! You have new order 🛒 </h6>
                                        <small className="mb-1 d-block text-body">
                                            ACME Inc. made new order $1,154
                                        </small>
                                        <small className="text-muted">1 day ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <img
                                                src="/img/avatars/9.png"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Application has been approved 🚀 </h6>
                                        <small className="mb-1 d-block text-body">
                                            Your ABC project application has been approved.
                                        </small>
                                        <small className="text-muted">2 days ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <span className="avatar-initial rounded-circle bg-label-success">
                                                <i className="bx bx-pie-chart-alt" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Monthly report is generated</h6>
                                        <small className="mb-1 d-block text-body">
                                            July monthly financial report is generated{" "}
                                        </small>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <img
                                                src="/img/avatars/5.png"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">Send connection request</h6>
                                        <small className="mb-1 d-block text-body">
                                            Peter sent you connection request
                                        </small>
                                        <small className="text-muted">4 days ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <img
                                                src="/img/avatars/6.png"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">New message from Jane</h6>
                                        <small className="mb-1 d-block text-body">
                                            Your have new message from Jane
                                        </small>
                                        <small className="text-muted">5 days ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar">
                                            <span className="avatar-initial rounded-circle bg-label-warning">
                                                <i className="bx bx-error" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-0">CPU is running high</h6>
                                        <small className="mb-1 d-block text-body">
                                            CPU Utilization Percent is currently at 88.63%,
                                        </small>
                                        <small className="text-muted">5 days ago</small>
                                    </div>
                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                        <a href="#" className="dropdown-notifications-read">
                                            <span className="badge badge-dot" />
                                        </a>
                                        <a href="#" className="dropdown-notifications-archive">
                                            <span className="bx bx-x" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="border-top">
                    <div className="d-grid p-4">
                        <a className="btn btn-primary btn-sm d-flex" href="#">
                            <small className="align-middle">View all notifications</small>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export default Notification;
