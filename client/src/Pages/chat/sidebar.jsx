
function Sidebar(){

    return(

        <aside className="chat-sidebar">

            <a href="#" className="chat-sidebar-logo">
                <i className="ri-chat-1-fill"></i>
            </a>

            <ul className="chat-sidebar-menu">

                <li className="active"><a href="#" data-title="Chats"><i className="ri-chat-3-line"></i></a></li>
                <li><a href="#" data-title="Contacts"><i className="ri-contacts-line"></i></a></li>
                <li><a href="#" data-title="Documents"><i className="ri-folder-line"></i></a></li>
                <li><a href="#" data-title="Settings"><i className="ri-settings-line"></i></a></li>

                <li className="chat-sidebar-profile">

                    <button type="button" className="chat-sidebar-profile-toggle">
                        <img src="/img/RHENZY.jpg" alt="" />
                    </button>

                    <ul className="chat-sidebar-profile-dropdown">
                        <li><a href="#"><i className="ri-user-line"></i> Profile</a></li>
                        <li><a href="#"><i className="ri-logout-box-line"></i> Logout</a></li>
                    </ul>

                </li>

            </ul>

        </aside>

    )

}

export default Sidebar