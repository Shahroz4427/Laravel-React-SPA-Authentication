
import { usePerfectScrollbar } from '../../hooks/usePerfectScroller';


const ChatContacts = ({ chatrooms, contacts, selectChatRoom, selectedChatRoom, selectedContact, selectContact }) => {

    const scrollContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });

    const inActiveOrActive = (chatroom) => {
        if (selectedContact != null) {
            return '';
        }
        if (selectedChatRoom?.user?.id && chatroom.user.id === selectedChatRoom.user.id) {
            return 'active';
        }
        return '';
    };
    


    return (
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
                    chatrooms.map((chatroom, index) => (
                        <li key={index} onClick={() => selectChatRoom(chatroom)}
                            className={`chat-contact-list-item mb-1 ${inActiveOrActive(chatroom)}`}>
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
                    ))
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
                {
                    contacts.map((contact, index) => (
                        <li key={contact.id} onClick={() => selectContact(contact)} className={`chat-contact-list-item mb-1 ${contact.id === selectedContact?.id && 'active'}`}>
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
                    ))
                }
            </ul>
        </div>
    )
}

export default ChatContacts