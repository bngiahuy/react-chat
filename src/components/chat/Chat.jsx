import { useEffect, useState } from 'react';
import useChatStore from '../../libs/chatstore';
import Bottom from './bottom/Bottom';
import Center from './center/Center';
import './chat.css';
import Top from './top/Top';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../libs/firebase';
const Chat = () => {
	const { chatID } = useChatStore();

	return (
		<div className="chat">
			<Top chatID={chatID} />
			<Center chatID={chatID} />
			<Bottom chatID={chatID} />
		</div>
	);
};

export default Chat;
