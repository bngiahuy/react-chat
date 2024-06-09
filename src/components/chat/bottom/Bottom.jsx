import { useState } from 'react';
import './bottom.css'
import EmojiPicker from 'emoji-picker-react';

const Bottom = () => {
    const [onEmojiClick, setOnEmojiClick] = useState(false);
    const [text, setText] = useState('');


    const handleEmojiClick = (event) => {
        console.log(event);
        setText(prev => prev + event.emoji);
    }

    // console.log(text) // Debugging   
    return (
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./mic.png" alt="" />
                <img src="./camera.png" alt="" />

            </div>
            
            <input type="text" placeholder="Message..." className='message' value={text} onChange={e=>setText(e.target.value)}/>
            <div className="emoji">
                <img src="./emoji.png" alt="emoji-icon" onClick={()=>setOnEmojiClick(!onEmojiClick)}/>
                <EmojiPicker open={onEmojiClick} onEmojiClick={handleEmojiClick}/>
            </div>
            
            <button className='sendBtn'>Send</button>
        </div>
    );
}

export default Bottom;