import Navigation from "./Components/Navigation/Navigation.jsx"
import ChatList from "./Components/ChatList/ChatList.jsx"

function App() {
  return (

    <section className="chat-section">

        <div className="chat-container">

          <Navigation />
          <ChatList />

        </div>

    </section>
    
  )
}

export default App
