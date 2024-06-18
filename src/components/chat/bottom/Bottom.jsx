import React, { useState } from 'react';
import './bottom.css';
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../libs/firebase';
import useChatStore from '../../../libs/chatstore';
import useUserStore from '../../../libs/zustand';
import upload from '../../../libs/upload';

const Bottom = () => {
	const [onEmojiClick, setOnEmojiClick] = useState(false);
	const [text, setText] = useState('');
	const [img, setImg] = useState({ file: null, url: '' });
	const { chatID, user } = useChatStore();
	const { currentUser } = useUserStore();

	const handleEmojiClick = (event) => {
		console.log(event);
		setText((prev) => prev + event.emoji);
	};

	const handleImg = (e) => {
		if (e.target.files[0]) {
			setImg({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	const handleSend = async () => {
		if (text.trim() === '') return;
		let imgURL = null;
		try {
			if (img.file) {
				imgURL = await upload(img.file);
			}
			await updateDoc(doc(db, 'chats', chatID), {
				messages: arrayUnion({
					text,
					senderID: currentUser.id,
					createdAt: new Date(),
					...(imgURL && { img: imgURL }),
				}),
			});

			const userIDs = [currentUser.id, user.id];

			userIDs.forEach(async (userID) => {
				const userChatsRef = doc(db, 'userchats', userID);
				const userChatsSnapshot = await getDoc(userChatsRef);

				if (userChatsSnapshot.exists()) {
					const userChatsData = userChatsSnapshot.data();
					console.log('userChatsData:', userChatsData);
					const chatIndex = userChatsData.chats.findIndex(
						(chat) => chat.chatID === chatID
					);
					console.log('chatIndex', chatIndex);
					if (chatIndex !== -1) {
						userChatsData.chats[chatIndex].lastMessage = text;
						userChatsData.chats[chatIndex].updatedAt = new Date();
						userChatsData.chats[chatIndex].isSeen =
							userID === currentUser.id ? true : false;

						await updateDoc(userChatsRef, {
							chats: userChatsData.chats,
						});
					} else {
						throw new Error('Chat not found');
					}
				}
			});
		} catch (error) {
			console.log(error);
		}
		setText('');
		setImg({ file: null, url: '' });
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSend();
		}
	};
	return (
		<div className="bottom">
			<div className="icons">
				<label htmlFor="file">
					<img src="./img.png" alt="" />
				</label>
				<input
					type="file"
					id="file"
					onChange={handleImg}
					style={{ display: 'none' }}
				/>
				<img src="./mic.png" alt="" />
				<img src="./camera.png" alt="" />
			</div>

			<input
				type="text"
				placeholder="Message..."
				className="message"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onClick={() => (onEmojiClick ? setOnEmojiClick(false) : null)}
				onKeyDown={handleKeyDown}
			/>
			<div className="emoji">
				<img
					src="./emoji.png"
					alt="emoji-icon"
					onClick={() => setOnEmojiClick(!onEmojiClick)}
				/>

				<div className="emojiPicker">
					<EmojiPicker open={onEmojiClick} onEmojiClick={handleEmojiClick} />
				</div>
			</div>

			<button className="sendBtn" onClick={handleSend}>
				Send
			</button>
		</div>
	);
};

export default Bottom;
