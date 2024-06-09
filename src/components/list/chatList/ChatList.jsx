import "./chatList.css";
import { useState } from "react";
const ChatList = () => {
    const [plusMode, setPlusMode] = useState(true);

    return (
        <div className="ChatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>    
                <img src={plusMode ? './plus.png' : './minus.png'} alt="plus-icon" className="plus"
                onClick={() => setPlusMode(!plusMode)} 
                />
            </div>

            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>

            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            <div className="item" id="">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <p className="message">Hey, how are you?</p>
                </div>
                <p className="time">10:30 AM</p>
            </div>
            
            
        </div>
    );
}

export default ChatList;