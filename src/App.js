import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';
import Modal from "./components/LoginForm";

const projectID = '9913eb63-eb8e-4dcd-8a4d-e83b0176f391';

const App = () => {
if (!localStorage.getItem('username')) return <Modal />

    return (
        <ChatEngine
        height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    //   onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App;