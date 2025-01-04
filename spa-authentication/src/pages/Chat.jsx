
import { usePerfectScrollbar } from '../hooks/usePerfectScroller';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Layout from '../layout/Layout'
import { useEffect } from 'react';
import echo from '../lib/websocket';
import './../chat.css'

const Chat = () => {

    useDocumentTitle('Chat');

    const scrollContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });


    useEffect(() => {
        const channel = echo.private(`my-channel.${1}`);

        console.log(channel);

        channel.listen('.public-event', (event) => {
            console.log(event);
        });

        return () => {
            echo.leave(`my-channel.${1}`);
            console.log('Left the channel');
        };
    }, []);
    

    return (
        <Layout>
            <div className="app-chat card overflow-hidden">
                <div className="row g-0">
                    <div
                        className="col app-chat-sidebar-left app-sidebar overflow-hidden"
                        id="app-chat-sidebar-left"
                    >
                        <div className="chat-sidebar-left-user sidebar-header d-flex flex-column justify-content-center align-items-center flex-wrap px-6 pt-12">
                            <div className="avatar avatar-xl avatar-online chat-sidebar-avatar">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mt-4 mb-0">John Doe</h5>
                            <span>Admin</span>
                            <i
                                className="bx bx-x bx-lg cursor-pointer close-sidebar"
                                data-bs-toggle="sidebar"
                                data-overlay=""
                                data-target="#app-chat-sidebar-left"
                            />
                        </div>
                        <div className="sidebar-body px-6 pb-6 ps ps--active-y">
                            <div className="my-6">
                                <label
                                    htmlFor="chat-sidebar-left-user-about"
                                    className="text-uppercase text-muted mb-1"
                                >
                                    About
                                </label>
                                <textarea
                                    id="chat-sidebar-left-user-about"
                                    className="form-control chat-sidebar-left-user-about"
                                    rows={3}
                                    maxLength={120}
                                    defaultValue={
                                        "Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub."
                                    }
                                />
                            </div>
                            <div className="my-6">
                                <p className="text-uppercase text-muted mb-1">Status</p>
                                <div className="d-grid gap-2 pt-2 text-heading ms-2">
                                    <div className="form-check form-check-success">
                                        <input
                                            name="chat-user-status"
                                            className="form-check-input"
                                            type="radio"
                                            defaultValue="active"
                                            id="user-active"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="user-active">
                                            Online
                                        </label>
                                    </div>
                                    <div className="form-check form-check-warning">
                                        <input
                                            name="chat-user-status"
                                            className="form-check-input"
                                            type="radio"
                                            defaultValue="away"
                                            id="user-away"
                                        />
                                        <label className="form-check-label" htmlFor="user-away">
                                            Away
                                        </label>
                                    </div>
                                    <div className="form-check form-check-danger">
                                        <input
                                            name="chat-user-status"
                                            className="form-check-input"
                                            type="radio"
                                            defaultValue="busy"
                                            id="user-busy"
                                        />
                                        <label className="form-check-label" htmlFor="user-busy">
                                            Do not Disturb
                                        </label>
                                    </div>
                                    <div className="form-check form-check-secondary">
                                        <input
                                            name="chat-user-status"
                                            className="form-check-input"
                                            type="radio"
                                            defaultValue="offline"
                                            id="user-offline"
                                        />
                                        <label className="form-check-label" htmlFor="user-offline">
                                            Offline
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="my-6">
                                <p className="text-uppercase text-muted mb-1">Settings</p>
                                <ul className="list-unstyled d-grid gap-4 ms-2 pt-2 text-heading">
                                    <li className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bx bx-lock-alt me-1" />
                                            <span className="align-middle">Two-step Verification</span>
                                        </div>
                                        <div className="form-check form-switch mb-0 me-1">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultChecked=""
                                            />
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bx bx-bell me-1" />
                                            <span className="align-middle">Notification</span>
                                        </div>
                                        <div className="form-check form-switch mb-0 me-1">
                                            <input type="checkbox" className="form-check-input" />
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bx bx-user me-1" />
                                        <span className="align-middle">Invite Friends</span>
                                    </li>
                                    <li>
                                        <i className="bx bx-trash me-1" />
                                        <span className="align-middle">Delete Account</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex mt-6">
                                <button
                                    className="btn btn-primary w-100"
                                    data-bs-toggle="sidebar"
                                    data-overlay=""
                                    data-target="#app-chat-sidebar-left"
                                >
                                    <i className="bx bx-log-out bx-sm me-2" />
                                    Logout
                                </button>
                            </div>
                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                <div
                                    className="ps__thumb-x"
                                    tabIndex={0}
                                    style={{ left: 0, width: 0 }}
                                />
                            </div>
                            <div className="ps__rail-y" style={{ top: 0, height: 572, right: 0 }}>
                                <div
                                    className="ps__thumb-y"
                                    tabIndex={0}
                                    style={{ top: 0, height: 539 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
                        id="app-chat-contacts"
                    >
                        <div className="sidebar-header px-6 border-bottom d-flex align-items-center">
                            <div className="d-flex align-items-center me-6 me-lg-0">
                                <div
                                    className="flex-shrink-0 avatar avatar-online me-4"
                                    data-bs-toggle="sidebar"
                                    data-overlay="app-overlay-ex"
                                    data-target="#app-chat-sidebar-left"
                                >
                                    <img
                                        className="user-avatar rounded-circle cursor-pointer"
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="flex-grow-1 input-group input-group-merge rounded-pill">
                                    <span className="input-group-text" id="basic-addon-search31">
                                        <i className="bx bx-search bx-sm" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control chat-search-input"
                                        placeholder="Search..."
                                        aria-label="Search..."
                                        aria-describedby="basic-addon-search31"
                                    />
                                </div>
                            </div>
                            <i
                                className="bx bx-x bx-lg cursor-pointer position-absolute top-50 end-0 translate-middle d-lg-none d-block"
                                data-overlay=""
                                data-bs-toggle="sidebar"
                                data-target="#app-chat-contacts"
                            />
                        </div>
                        <div ref={scrollContainerRef} className="sidebar-body ps ps--active-y">
                            <ul
                                className="list-unstyled chat-contact-list py-2 mb-0"
                                id="chat-list"
                            >
                                <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                                    <h5 className="text-primary mb-0">Chats</h5>
                                </li>
                                <li className="chat-contact-list-item chat-list-item-0 d-none">
                                    <h6 className="text-muted mb-0">No Chats Found</h6>
                                </li>
                                <li className="chat-contact-list-item mb-1">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar avatar-online">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                    Waldemar Mannering
                                                </h6>
                                                <small className="text-muted">5 Minutes</small>
                                            </div>
                                            <small className="chat-contact-status text-truncate">
                                                Refer friends. Get rewards.
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item active mb-1">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar avatar-offline">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h6 className="chat-contact-name text-truncate fw-normal m-0">
                                                    Felecia Rower
                                                </h6>
                                                <small className="text-muted">30 Minutes</small>
                                            </div>
                                            <small className="chat-contact-status text-truncate">
                                                I will purchase it for sure. 👍
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item mb-0">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar avatar-busy">
                                            <span className="avatar-initial rounded-circle bg-label-success">
                                                CM
                                            </span>
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h6 className="chat-contact-name text-truncate fw-normal m-0">
                                                    Calvin Moore
                                                </h6>
                                                <small className="text-muted">1 Day</small>
                                            </div>
                                            <small className="chat-contact-status text-truncate">
                                                If it takes long you can mail inbox user
                                            </small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <ul
                                className="list-unstyled chat-contact-list mb-0 py-2"
                                id="contact-list"
                            >
                                <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                                    <h5 className="text-primary mb-0">Contacts</h5>
                                </li>
                                <li className="chat-contact-list-item contact-list-item-0 d-none">
                                    <h6 className="text-muted mb-0">No Contacts Found</h6>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Natalie Maxwell
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                UI/UX Designer
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Jess Cook
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Business Analyst
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="avatar d-block flex-shrink-0">
                                            <span className="avatar-initial rounded-circle bg-label-primary">
                                                LM
                                            </span>
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Louie Mason
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Resource Manager
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Krystal Norton
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Business Executive
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Stacy Garrison
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Marketing Ninja
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="avatar d-block flex-shrink-0">
                                            <span className="avatar-initial rounded-circle bg-label-success">
                                                CM
                                            </span>
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Calvin Moore
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                UX Engineer
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Mary Giles
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Account Department
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Waldemar Mannering
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                AWS Support
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="avatar d-block flex-shrink-0">
                                            <span className="avatar-initial rounded-circle bg-label-danger">
                                                AJ
                                            </span>
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Amy Johnson
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Frontend Developer
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                Felecia Rower
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Cloud Engineer
                                            </small>
                                        </div>
                                    </a>
                                </li>
                                <li className="chat-contact-list-item mb-0">
                                    <a className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                William Stephens
                                            </h6>
                                            <small className="chat-contact-status text-truncate">
                                                Backend Developer
                                            </small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col app-chat-history">
                        <div className="chat-history-wrapper">
                            <div className="chat-history-header border-bottom">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex overflow-hidden align-items-center">
                                        <i
                                            className="bx bx-menu bx-lg cursor-pointer d-lg-none d-block me-4"
                                            data-bs-toggle="sidebar"
                                            data-overlay=""
                                            data-target="#app-chat-contacts"
                                        />
                                        <div className="flex-shrink-0 avatar avatar-online">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                                data-bs-toggle="sidebar"
                                                data-overlay=""
                                                data-target="#app-chat-sidebar-right"
                                            />
                                        </div>
                                        <div className="chat-contact-info flex-grow-1 ms-4">
                                            <h6 className="m-0 fw-normal">Felecia Rower</h6>
                                            <small className="user-status text-body">
                                                NextJS developer
                                            </small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bx bx-phone cursor-pointer d-sm-inline-flex d-none btn btn-icon text-secondary me-1" style={{ fontSize: '25px' }} />
                                        <i className="bx bx-video cursor-pointer d-sm-inline-flex d-none btn btn-icon text-secondary me-1" style={{ fontSize: '25px' }} />
                                        <i className="bx bx-search cursor-pointer d-sm-inline-flex d-none btn btn-icon text-secondary me-1" style={{ fontSize: '25px' }} />
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon text-secondary dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="true"
                                                id="chat-header-actions"
                                            >
                                                <i className="bx bx-dots-vertical-rounded" style={{ fontSize: '25px' }} />
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="chat-header-actions"
                                            >
                                                <a className="dropdown-item" href="#">
                                                    View Contact
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Mute Notifications
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Block Contact
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Clear Chat
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Report
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="chat-history-body ps ps--active-y">
                                <ul className="list-unstyled chat-history">
                                    <li className="chat-message chat-message-right">
                                        <div className="d-flex overflow-hidden">
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">
                                                        How can we help? We're here for you! 😄
                                                    </p>
                                                </div>
                                                <div className="text-end text-muted mt-1">
                                                    <i className="bx bx-check-double bx-16px text-success me-1" />
                                                    <small>10:00 AM</small>
                                                </div>
                                            </div>
                                            <div className="user-avatar flex-shrink-0 ms-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message">
                                        <div className="d-flex overflow-hidden">
                                            <div className="user-avatar flex-shrink-0 me-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">
                                                        Hey John, I am looking for the best admin template.
                                                    </p>
                                                    <p className="mb-0">
                                                        Could you please help me to find it out? 🤔
                                                    </p>
                                                </div>
                                                <div className="chat-message-text mt-2">
                                                    <p className="mb-0">
                                                        It should be Bootstrap 5 compatible.
                                                    </p>
                                                </div>
                                                <div className="text-muted mt-1">
                                                    <small>10:02 AM</small>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message chat-message-right">
                                        <div className="d-flex overflow-hidden">
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">
                                                        sneat has all the components you'll ever need in a app.
                                                    </p>
                                                </div>
                                                <div className="text-end text-muted mt-1">
                                                    <i className="bx bx-check-double bx-16px text-success me-1" />
                                                    <small>10:03 AM</small>
                                                </div>
                                            </div>
                                            <div className="user-avatar flex-shrink-0 ms-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message">
                                        <div className="d-flex overflow-hidden">
                                            <div className="user-avatar flex-shrink-0 me-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">Looks clean and fresh UI. 😃</p>
                                                </div>
                                                <div className="chat-message-text mt-2">
                                                    <p className="mb-0">It's perfect for my next project.</p>
                                                </div>
                                                <div className="chat-message-text mt-2">
                                                    <p className="mb-0">How can I purchase it?</p>
                                                </div>
                                                <div className="text-muted mt-1">
                                                    <small>10:05 AM</small>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message chat-message-right">
                                        <div className="d-flex overflow-hidden">
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">Thanks, you can purchase it.</p>
                                                </div>
                                                <div className="text-end text-muted mt-1">
                                                    <i className="bx bx-check-double bx-16px text-success me-1" />
                                                    <small>10:06 AM</small>
                                                </div>
                                            </div>
                                            <div className="user-avatar flex-shrink-0 ms-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message">
                                        <div className="d-flex overflow-hidden">
                                            <div className="user-avatar flex-shrink-0 me-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">I will purchase it for sure. 👍</p>
                                                </div>
                                                <div className="chat-message-text mt-2">
                                                    <p className="mb-0">Thanks.</p>
                                                </div>
                                                <div className="text-muted mt-1">
                                                    <small>10:08 AM</small>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message chat-message-right">
                                        <div className="d-flex overflow-hidden">
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">Great, Feel free to get in touch.</p>
                                                </div>
                                                <div className="text-end text-muted mt-1">
                                                    <i className="bx bx-check-double bx-16px text-success me-1" />
                                                    <small>10:10 AM</small>
                                                </div>
                                            </div>
                                            <div className="user-avatar flex-shrink-0 ms-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message">
                                        <div className="d-flex overflow-hidden">
                                            <div className="user-avatar flex-shrink-0 me-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-message-wrapper flex-grow-1">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">
                                                        Do you have design files for sneat?
                                                    </p>
                                                </div>
                                                <div className="text-muted mt-1">
                                                    <small>10:15 AM</small>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-message chat-message-right">
                                        <div className="d-flex overflow-hidden">
                                            <div className="chat-message-wrapper flex-grow-1 w-50">
                                                <div className="chat-message-text">
                                                    <p className="mb-0">
                                                        Yes that's correct documentation file, Design files are
                                                        included with the template.
                                                    </p>
                                                </div>
                                                <div className="text-end text-muted mt-1">
                                                    <i className="bx bx-check-double bx-16px me-1" />
                                                    <small>10:15 AM</small>
                                                </div>
                                            </div>
                                            <div className="user-avatar flex-shrink-0 ms-4">
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Avatar"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="ps__rail-x" style={{ left: 0, bottom: "-615px" }}>
                                    <div
                                        className="ps__thumb-x"
                                        tabIndex={0}
                                        style={{ left: 0, width: 0 }}
                                    />
                                </div>
                                <div
                                    className="ps__rail-y"
                                    style={{ top: 615, height: 601, right: 0 }}
                                >
                                    <div
                                        className="ps__thumb-y"
                                        tabIndex={0}
                                        style={{ top: 304, height: 297 }}
                                    />
                                </div>
                            </div>
                            <div className="chat-history-footer shadow-xs">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Message" aria-label="Message" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col app-chat-sidebar-right app-sidebar overflow-hidden"
                        id="app-chat-sidebar-right"
                    >
                        <div className="sidebar-header d-flex flex-column justify-content-center align-items-center flex-wrap px-6 pt-12">
                            <div className="avatar avatar-xl avatar-online chat-sidebar-avatar">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mt-4 mb-0">Felecia Rower</h5>
                            <span>NextJS Developer</span>
                            <i
                                className="bx bx-x bx-lg cursor-pointer close-sidebar d-block"
                                data-bs-toggle="sidebar"
                                data-overlay=""
                                data-target="#app-chat-sidebar-right"
                            />
                        </div>
                        <div className="sidebar-body p-6 pt-0 ps ps--active-y">
                            <div className="my-6">
                                <p className="text-uppercase mb-1 text-muted">About</p>
                                <p className="mb-0">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content .
                                </p>
                            </div>
                            <div className="my-6">
                                <p className="text-uppercase mb-1 text-muted">
                                    Personal Information
                                </p>
                                <ul className="list-unstyled d-grid gap-4 mb-0 ms-2 py-2 text-heading">
                                    <li className="d-flex align-items-center">
                                        <i className="bx bx-envelope" />
                                        <span className="align-middle ms-2">josephGreen@email.com</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className="bx bx-phone-call" />
                                        <span className="align-middle ms-2">+1(123) 456 - 7890</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className="bx bx-time-five" />
                                        <span className="align-middle ms-2">Mon - Fri 10AM - 8PM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p className="text-uppercase text-muted mb-1">Options</p>
                                <ul className="list-unstyled d-grid gap-4 ms-2 py-2 text-heading">
                                    <li className="cursor-pointer d-flex align-items-center">
                                        <i className="bx bx-bookmark" />
                                        <span className="align-middle ms-2">Add Tag</span>
                                    </li>
                                    <li className="cursor-pointer d-flex align-items-center">
                                        <i className="bx bx-star" />
                                        <span className="align-middle ms-2">Important Contact</span>
                                    </li>
                                    <li className="cursor-pointer d-flex align-items-center">
                                        <i className="bx bx-image-alt" />
                                        <span className="align-middle ms-2">Shared Media</span>
                                    </li>
                                    <li className="cursor-pointer d-flex align-items-center">
                                        <i className="bx bx-trash" />
                                        <span className="align-middle ms-2">Delete Contact</span>
                                    </li>
                                    <li className="cursor-pointer d-flex align-items-center">
                                        <i className="bx bx-block" />
                                        <span className="align-middle ms-2">Block Contact</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex mt-6">
                                <button
                                    className="btn btn-danger w-100"
                                    data-bs-toggle="sidebar"
                                    data-overlay=""
                                    data-target="#app-chat-sidebar-right"
                                >
                                    Delete Contact
                                    <i className="bx bx-trash bx-sm ms-2" />
                                </button>
                            </div>
                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                <div
                                    className="ps__thumb-x"
                                    tabIndex={0}
                                    style={{ left: 0, width: 0 }}
                                />
                            </div>
                            <div className="ps__rail-y" style={{ top: 0, height: 575, right: 0 }}>
                                <div
                                    className="ps__thumb-y"
                                    tabIndex={0}
                                    style={{ top: 0, height: 563 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="app-overlay" />
                </div>
            </div>
        </Layout>
    )
}

export default Chat