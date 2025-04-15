import Content from "../content/content.jsx";
import Sidebar from "../sidebar.jsx";
import style from './chat.module.css'

function Chat() {
  return (
    <section className={style.chatSection}>
      <div classNam={style.chatContainer}>

        <Content />
        <Sidebar />

      </div>
    </section>
  );
}

export default Chat;
