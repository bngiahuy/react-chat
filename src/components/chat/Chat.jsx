import Bottom from "./bottom/Bottom";
import Center from "./center/Center";
import "./chat.css";
import Top from "./top/Top";
const Chat = () => {
    return (
        <div className="chat">
            <Top />
            <Center />
            <Bottom />
        
        </div>
    );
}

export default Chat;