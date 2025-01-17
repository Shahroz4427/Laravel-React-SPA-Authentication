
import useDocumentTitle from '../hooks/useDocumentTitle.jsx';
import ChatContacts from '../widgets/chat/ChatContacts.jsx';
import ChatMessages from '../widgets/chat/ChatMessages.jsx';
import { useEffect, useState } from 'react';
import { axios } from '../lib/axios.js';
import echo from '../lib/websocket.js'
import Layout from '../layout/Layout'
import './../chat.css'

const Chat = () => {

    useDocumentTitle('Chat');

    const [chatrooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messageToRender, setMessageToRender] = useState([]);
    const [selectedChatRoom, setSelectedChatRoom] = useState({});
    const [messageInput, setMessageInput] = useState("");
    const [contacts, setContacts] = useState([]);
    const authUser = JSON.parse(localStorage.getItem("authUser"));

    useEffect(() => {
        async function fetchChatRooms() {
            try {
                const response = await axios.get('api/chat/chatrooms');
                if (response.status === 200) {
                    setChatRooms(response.data);
                    if (response.data.length > 0) {
                        setSelectedChatRoom(response.data[0]);
                    }
                }
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchChatRooms();

    }, []);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await axios.get('api/chat/messages');
                if (response.status === 200) {
                    setMessages(response.data);
                }
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchMessages();
    }, []);

    useEffect(() => {
        if (selectedChatRoom && messages.length > 0) {
            const filteredMessages = messages.filter(
                (message) =>
                    (message.from_id === selectedChatRoom.from_id && message.to_id === selectedChatRoom.to_id) ||
                    (message.from_id === selectedChatRoom.to_id && message.to_id === selectedChatRoom.from_id)
            );

            setMessageToRender(filteredMessages);
        }
    }, [selectedChatRoom, messages]);

    const handleAddMessage = async () => {
        const newMessage = {
            id: Date.now().toString(),
            from_id: authUser.id,
            to_id: selectedChatRoom.user.id,
            body: messageInput,
            attachment: null,
            seen: 0,
            created_at: new Date().toISOString(),
            updated_at: null,
        };


        setMessages((prevMessages) => [...prevMessages, newMessage]);

        setChatRooms((prevChatRooms) =>
            prevChatRooms.map((chatroom) => {
                if (
                    (chatroom.from_id === newMessage.from_id && chatroom.to_id === newMessage.to_id) ||
                    (chatroom.from_id === newMessage.to_id && chatroom.to_id === newMessage.from_id)
                ) {
                    return {
                        ...chatroom,
                        latest_message: newMessage,
                    };
                }
                return chatroom;
            })
        );

        try {
            const response = await axios.post("api/chat/messages", {
                from_id: newMessage.from_id,
                to_id: newMessage.to_id,
                body: newMessage.body,
            });

            if (response.status === 200) {
                const serverMessage = response.data;


                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg.id === newMessage.id ? serverMessage : msg
                    )
                );


                setChatRooms((prevChatRooms) =>
                    prevChatRooms.map((chatroom) => {
                        if (
                            (chatroom.from_id === serverMessage.from_id && chatroom.to_id === serverMessage.to_id) ||
                            (chatroom.from_id === serverMessage.to_id && chatroom.to_id === serverMessage.from_id)
                        ) {
                            return {
                                ...chatroom,
                                latest_message: serverMessage,
                            };
                        }
                        return chatroom;
                    })
                );
            }
        } catch (error) {
            console.error("Failed to send message:", error);


            setMessages((prevMessages) =>
                prevMessages.filter((msg) => msg.id !== newMessage.id)
            );


            setChatRooms((prevChatRooms) =>
                prevChatRooms.map((chatroom) => {
                    if (
                        (chatroom.from_id === newMessage.from_id && chatroom.to_id === newMessage.to_id) ||
                        (chatroom.from_id === newMessage.to_id && chatroom.to_id === newMessage.from_id)
                    ) {
                        return {
                            ...chatroom,
                            latest_message: chatroom.latest_message && chatroom.latest_message.id !== newMessage.id
                                ? chatroom.latest_message
                                : null,
                        };
                    }
                    return chatroom;
                })
            );
        }

        setMessageInput("");
    };

    useEffect(() => {
        const channel = echo.private(`chat.${authUser.id}`);

        channel.listen('.receive.message', (event) => {
            const newMessage = {
                id: event.message.id,
                from_id: event.message.from_id,
                to_id: event.message.to_id,
                body: event.message.body,
                attachment: event.message.attachment,
                seen: event.message.seen,
                created_at: event.message.created_at,
                updated_at: event.message.updated_at,
            };

            const messageSound = new Audio('/ringtone/sound.mp3');
            messageSound.play();

            setMessages((prevMessages) =>
                [...prevMessages, newMessage].sort(
                    (a, b) => new Date(a.created_at) - new Date(b.created_at)
                )
            );

            setChatRooms((prevChatRooms) =>
                prevChatRooms.map((chatroom) => {
                    if (
                        (chatroom.from_id === newMessage.from_id && chatroom.to_id === newMessage.to_id) ||
                        (chatroom.from_id === newMessage.to_id && chatroom.to_id === newMessage.from_id)
                    ) {
                        return {
                            ...chatroom,
                            latest_message: newMessage,
                        };
                    }
                    return chatroom;
                })
            );

        });

        return () => {
            echo.leave(`chat.${authUser.id}`);
        };
    }, [authUser.id]);


    useEffect(() => {

        async function fetchContacts() {
            try {
                const response = await axios.get('api/chat/contacts');
                if (response.status === 200) {
                    setContacts(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchContacts();

    }, []);


    useEffect(() => {
        const channel = echo.private(`mark.message.seen.${authUser.id}`);

        channel.listen('.message.seen', (event) => {
            console.log(event);
            const seenMessageId = event.message.id;
            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.id === seenMessageId ? { ...msg, seen: true } : msg
                )
            );
        });

        return () => {
            echo.leave(`mark.message.seen.${authUser.id}`);
        };
    }, [authUser.id]);


    const markMessageAsSeen = (messageId) => {
        axios.post('/api/chat/message/seen', { 'message_id': messageId })
            .then((response) => {
                console.log('Message marked as seen');
            })
            .catch((error) => {
                console.error('Error marking message as seen:', error);
            });
    };


    const renderChatRooms = chatrooms.map((chatroom, index) => (
        <li onClick={() => setSelectedChatRoom(chatroom)} key={index}
            className={`chat-contact-list-item mb-1 ${chatroom.user.id === selectedChatRoom.user.id && 'active'}`}>
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
                            {chatroom.user.name}
                        </h6>
                        <small className="chat-contact-list-item-time">5 Minutes</small>
                    </div>
                    <small className="chat-contact-status text-truncate">
                        {chatroom.latest_message?.body}
                    </small>
                </div>
            </a>
        </li>
    ));

    const renderContacts = contacts.map((contact, index) => (
        <li key={contact.id} className="chat-contact-list-item">
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
                        {contact.name}
                    </h6>
                    <small className="chat-contact-status text-truncate">
                        UI/UX Designer
                    </small>
                </div>
            </a>
        </li>
    ));

    // const renderMessages = messageToRender.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).map((message) => (
    //     <li
    //         key={message.id}
    //         className={`chat-message ${message.from_id === authUser.id ? "chat-message-right" : "chat-message-left"}`}
    //     >
    //         <div className="d-flex overflow-hidden">
    //             <div className="chat-message-wrapper flex-grow-1">
    //                 <div className="chat-message-text">
    //                     <p className="mb-0">{message.body}</p>
    //                 </div>
    //                 <div className="text-end text-muted mt-1">
    //                     <i
    //                         className={`bx bx-check-double bx-16px me-1 ${message.seen ? "text-success" : "text-muted"}`}
    //                     />
    //                     <small>
    //                         {new Date(message.created_at).toLocaleTimeString([], {
    //                             hour: "2-digit",
    //                             minute: "2-digit",
    //                         })}
    //                     </small>
    //                 </div>
    //             </div>
    //             <div className="user-avatar flex-shrink-0 ms-4">
    //                 <div className="avatar avatar-sm">
    //                     <img
    //                         src="https://bootdey.com/img/Content/avatar/avatar2.png"
    //                         alt="Avatar"
    //                         className="rounded-circle"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </li>
    // ));


    return (
        <Layout>
            <div className="app-chat card overflow-hidden">
                <div className="row g-0">
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
                        <ChatContacts chatrooms={renderChatRooms} contacts={renderContacts} />

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
                                            <h6 className="m-0 fw-normal">{selectedChatRoom.user?.name}</h6>
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
                            <ChatMessages
                                authUser={authUser}
                                user={selectedChatRoom}
                                messages={messageToRender}
                                markMessageAsSeen={markMessageAsSeen}>
                            </ChatMessages>

                            <div className="chat-history-footer shadow-xs">
                                <div className="input-group">
                                    <input onChange={(e) => setMessageInput(e.target.value)} value={messageInput} type="text" className="form-control" placeholder="Message" aria-label="Message" aria-describedby="button-addon2" />
                                    <button onClick={handleAddMessage} className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
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