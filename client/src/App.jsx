import Navigation from "./pages/Navigation/Navigation.jsx"
import ChatList from "./pages/ChatList/ChatList.jsx"
import Conversation from "./pages/Conversation/Conversation.jsx"
// import {BroswserRoute} from "react-route-dom" // for routing npm i react-router-dom

function App() {
  return (
    <section className="chat-section">
      
      <div className="chat-container">
        <Navigation />
        <ChatList />
        <Conversation/>
      </div>

    </section>
  );
}

export default App;
