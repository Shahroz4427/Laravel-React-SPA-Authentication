import { usePerfectScrollbar } from '../../hooks/usePerfectScroller';
import { useEffect, useRef, useState } from 'react';
import { axios } from '../../lib/axios';

const ChatMessages = ({ messages, user, authUser, selectedContact }) => {


    const markMessageAsSeen = (messageId) => {
        axios.post('/api/chat/message/seen', { 'message_id': messageId })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });
    };


    const chatContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });

    const observer = useRef();
    const [manualScroll, setManualScroll] = useState(false);
    const seenMessages = useRef(new Set());

    useEffect(() => {
        if (!manualScroll && chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, user, manualScroll]);

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
            setManualScroll(!isNearBottom);
        }
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const messageId = entry.target.dataset.messageId;
                        const messageToId = entry.target.dataset.toId;
                        const messageSeen = entry.target.dataset.seen === 'true';
                        if (
                            messageToId === String(authUser.id) &&
                            !messageSeen &&
                            !seenMessages.current.has(messageId)
                        ) {
                            seenMessages.current.add(messageId);
                            markMessageAsSeen(messageId);
                        }
                    }
                });
            },
            { threshold: 1.0 }
        );

        const messageElements = chatContainerRef.current?.querySelectorAll('li[data-message-id]');
        messageElements?.forEach((el) => observer.current.observe(el));

        return () => {
            observer.current?.disconnect();
        };
    }, [messages, markMessageAsSeen, authUser.id]);

    return (
        <div
            ref={chatContainerRef}
            className="chat-history-body ps ps--active-y"
            onScroll={handleScroll}
        >
            <ul className="list-unstyled chat-history">
                {selectedContact === null ? messages
                    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
                    .map((message) => (
                        <li
                            key={message.id}
                            data-message-id={message.id}
                            data-from-id={message.from_id}
                            data-to-id={message.to_id}
                            data-seen={message.seen}
                            className={`chat-message ${message.from_id === authUser.id ? 'chat-message-right' : 'chat-message-left'}`}
                        >
                            <div className="d-flex overflow-hidden">
                                <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                        <p className="mb-0">{message.body}</p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                        {message.from_id === authUser.id && (
                                            <i
                                                className={`bx bx-check-double bx-16px me-1 ${message.seen ? 'text-success' : 'text-muted'}`}
                                            />
                                        )}
                                        <small>
                                            {new Date(message.created_at).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </small>
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
                    :
                    (<div
                        className="col app-chat-conversation d-flex align-items-center justify-content-center flex-column"
                        id="app-chat-conversation"
                    >
                        <div className="bg-label-primary p-8 rounded-circle">
                            <i className="icon-base bx bx-message-alt-detail icon-48px" />
                        </div>
                        <p className="my-4">Say Hello!</p>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default ChatMessages;
