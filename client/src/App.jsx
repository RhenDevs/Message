import Navigation from "./Components/Navigation/Navigation.jsx";
import ChatList from "./Components/ChatList/ChatList.jsx";
// import {BroswserRoute} from "react-route-dom" // for routing npm i react-router-dom
function App() {
  return (
    <section className="chat-section">
      <div className="chat-container">
        <Navigation />
        <ChatList />
      </div>
    </section>
  );
}

export default App;
