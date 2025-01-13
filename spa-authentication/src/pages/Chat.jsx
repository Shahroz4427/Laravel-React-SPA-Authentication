
import { usePerfectScrollbar } from '../hooks/usePerfectScroller';
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useEffect, useState } from 'react';
import echo from '../lib/websocket.js'
import { axios } from '../lib/axios';
import Layout from '../layout/Layout'
import './../chat.css'

const Chat = () => {


    useDocumentTitle('Chat');

    const scrollContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });

    const [contacts, setContacts] = useState([]);

    const [authenticatedUser, setAuthenticatedUser] = useState();

    const [selectedUser, setSelectedUser] = useState("");

    const [messageInput, setMessageInput] = useState("")

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await axios.get('api/chat/contacts');
                if (response.status === 200) {
                    setContacts(response.data);
                    if (response.data.length > 0) {
                        setSelectedUser(response.data[0]);
                    }
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        }

        fetchContacts();
    }, []);

    useEffect(() => {
        const authUser = localStorage.getItem("authUser");
        setAuthenticatedUser(JSON.parse(authUser));
    }, []);

    async function createMessage(data) {
        try {
            const response = await axios.post('api/chat/send-message', data);
            if (response.status === 200) {
                return response.data;
            }
        }
        catch (error) {
            throw error;
        }
    }

    const handleAddMessage = async () => {
        const newMessage = {
            id: crypto.randomUUID(),
            from_id: authenticatedUser.id,
            to_id: selectedUser.id,
            body: messageInput,
            attachment: null,
            seen: 0,
            created_at: new Date().toISOString(),
            updated_at: null,
        };

        setContacts((prevData) =>
            prevData.map((user) =>
                user.id === selectedUser.id
                    ? {
                        ...user,
                        messages: [...user.messages, newMessage],
                    }
                    : user
            )
        );

        try {
            const response = await createMessage({
                from_id: authenticatedUser.id,
                to_id: selectedUser.id,
                body: messageInput,
            });

            setContacts((prevData) =>
                prevData.map((user) =>
                    user.id === selectedUser.id
                        ? {
                            ...user,
                            messages: user.messages.map((message) =>
                                message.id === newMessage.id
                                    ? { ...message, id: response.id }
                                    : message
                            ),
                        }
                        : user
                )
            );
        } catch (error) {
            console.error("Error sending message:", error);
            setContacts((prevData) =>
                prevData.map((user) =>
                    user.id === selectedUser.id
                        ? {
                            ...user,
                            messages: user.messages.filter(
                                (message) => message.id !== newMessage.id
                            ),
                        }
                        : user
                )
            );
        }
    };

    const chatContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [contacts, selectedUser]);


    useEffect(() => {
        const authUser = localStorage.getItem("authUser");

        const user = JSON.parse(authUser);

        const channel = echo.private(`chat.${user.id}`);

        channel.listen('.message.send', (event) => {
            console.log(event);
        });

        return () => {
            echo.leave(`chat.${user.id}`);
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
                                {
                                    contacts.map((user, index) => {
                                        const latestMessage = user.messages.length > 0
                                            ? [...user.messages].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0]
                                            : null;
                                        return (
                                            <li
                                                onClick={() => setSelectedUser(user)}
                                                key={index}
                                                className={`chat-contact-list-item mb-1 ${selectedUser?.id === user.id ? "active" : ""}`}
                                            >
                                                <a className="d-flex align-items-center">
                                                    <div className={`flex-shrink-0 avatar ${user.active_status ? "avatar-online" : "avatar-offline"}`}>
                                                        <img
                                                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                    <div className="chat-contact-info flex-grow-1 ms-4">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h6 className="chat-contact-name text-truncate m-0 fw-normal">
                                                                {user.name}
                                                            </h6>
                                                            <small className="text-muted">
                                                                {latestMessage ? new Date(latestMessage.created_at).toLocaleTimeString() : "No time"}
                                                            </small>
                                                        </div>
                                                        <small className="chat-contact-status text-truncate">
                                                            {latestMessage
                                                                ? latestMessage.body
                                                                : "No messages"}
                                                        </small>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
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
                                            <h6 className="m-0 fw-normal">{selectedUser.name}</h6>
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
                            <div ref={chatContainerRef} className="chat-history-body ps ps--active-y">
                                <ul className="list-unstyled chat-history">
                                    {
                                        contacts && Array.isArray(contacts) && contacts.length > 0 && (
                                            contacts.filter(contact => contact.id === selectedUser.id).map((contact) => (
                                                contact.messages && Array.isArray(contact.messages) && contact.messages.length > 0 && (
                                                    contact.messages
                                                        .sort((a, b) => a.created_at > b.created_at ? 1 : -1)
                                                        .map((message, index) => (
                                                            <li key={message.id} className={`chat-message ${message.from_id === authenticatedUser.id ? "chat-message-right" : ""}`}>
                                                                <div className="d-flex overflow-hidden">
                                                                    <div className="chat-message-wrapper flex-grow-1">
                                                                        <div className="chat-message-text">
                                                                            <p className="mb-0">
                                                                                {message.body}
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-end text-muted mt-1">
                                                                            <i className={`bx bx-check-double bx-16px me-1 ${message.seen && "text-success"} `} />
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
                                                        ))
                                                )
                                            ))
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="chat-history-footer shadow-xs">
                                <div className="input-group">
                                    <input onChange={(e) => setMessageInput(e.target.value)} value={messageInput} type="text" className="form-control" placeholder="Message" aria-label="Message" aria-describedby="button-addon2" />
                                    <button onClick={() => { handleAddMessage(), setMessageInput(""); }} className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
                                </div>
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