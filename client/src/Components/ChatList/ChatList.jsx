import style from './ChatList.module.css'

export default function ChatList(){
    return(
        <div className={style.contentSidebar}>
            <div className={style.contentSidebarTitle}>Chats</div>

            <form action="" className={style.contentSidebarForm}>
                <input type="search" className={style.contentSidebarInput} placeholder="Search..." />
                <button type="submit" className={style.contentSidebarSubmit}><i className="ri-search-line"></i></button>
            </form>

            <div className={style.contentMessages}>
                <ul className={style.contentMessagesList}>

                    <li className={style.contentMessageTitle}><span>Recently</span></li>

                    <li>

                        <a href="#" data-conversation="#conversation-1">

                            <img className={style.contentMessageImage} src="img/RHENZY.jpg" alt="" />

                            <span className={style.contentMessageInfo}>
                                <span className={style.contentMessageName}>Someone</span>
                                <span className={style.contentMessageText}>Lorem ipsum dolor sit amet consectetur.</span>
                            </span>

                            <span className={style.contentMessageMore}>
                                <span className={style.contentMessageUnread}>5</span>
                                <span className={style.contentMessageTime}>12:30</span>
                            </span>

                        </a>

                    </li>

                    <li>

                        <a href="#" data-conversation="#conversation-2">

                            <img className={style.contentMessageImage} src="img/RHENZY.jpg" alt="" />

                            <span className={style.contentMessageInfo}>

                                <span className={style.contentMessageName}>Someone</span>
                                <span className={style.contentMessageText}>Lorem ipsum dolor sit amet consectetur.</span>

                            </span>

                            <span className={style.contentMessageMore}>
                                <span className={style.contentMessageTime}>12:30</span>
                            </span>

                        </a>
                        
                    </li>
                </ul>                                                                     
            </div>

        </div>
    )
}