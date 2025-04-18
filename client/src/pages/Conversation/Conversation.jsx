import Messages from "./messages/Messages.jsx"

export default function Conversation(){
    return (
        <>
            {
                false?

                <div className="conversation conversation-default active">
                    <i className="ri-chat-3-line"></i>
                    <p>Select chat and view conversation!</p>
                </div>

                :

                <Messages Convo={true}/>
            }
        </>
    )
}