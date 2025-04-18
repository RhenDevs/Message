import style from './Navigation.module.css' 

export default function Navigation(){
    return (

        <aside className={style.chatSidebar}>

            <a href="#" className={style.chatSidebarLogo}> 
                <i className="ri-chat-1-fill"></i>
            </a>

            <ul className={style.chatSidebarMenu}> 

                <li className={style.active}><a href="#" data-title="Chats"><i className="ri-chat-3-line"></i></a></li>
                <li><a href="#" data-title="Contacts"><i className="ri-contacts-line"></i></a></li>
                <li><a href="#" data-title="Documents"><i className="ri-folder-line"></i></a></li>
                <li><a href="#" data-title="Settings"><i className="ri-settings-line"></i></a></li>

                <li className={style.chatSidebarProfile}>

                    <button type="button" className={style.chatSidebarProfileToggle}>
                        <img src="img/RHENZY.jpg" alt=""/>
                    </button>

                    <ul className={style.chatSidebarProfileDropdown}>
                        <li><a href="#"><i className="ri-user-line"></i> Profile</a></li>
                        <li><a href="#"><i className="ri-logout-box-line"></i> Logout</a></li>
                    </ul>

                </li>

            </ul>

        </aside>
    )
}
