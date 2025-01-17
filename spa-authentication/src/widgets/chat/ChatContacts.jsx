
import { usePerfectScrollbar } from '../../hooks/usePerfectScroller';


const ChatContacts = ({ chatrooms, contacts }) => {

    const scrollContainerRef = usePerfectScrollbar({
        wheelSpeed: 1,
        wheelPropagation: false,
        minScrollbarLength: 20,
    });


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
                {chatrooms}
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
                {contacts}
            </ul>
        </div>
    )
}

export default ChatContacts