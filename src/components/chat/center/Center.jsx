import { doc, onSnapshot } from 'firebase/firestore';
import './center.css';
import { useEffect, useRef, useState } from 'react';
import { db } from '../../../libs/firebase';
import ReactTimeAgo from 'react-time-ago';
import useUserStore from '../../../libs/zustand';

const Center = ({ chatID }) => {
	const messagesEndRef = useRef(null);
	const [chat, setChat] = useState();
	const { currentUser } = useUserStore();

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [chat?.messages]);

	useEffect(() => {
		const unSub = onSnapshot(doc(db, 'chats', chatID), (res) => {
			setChat(res.data());
		});

		return () => {
			unSub();
		};
	}, [chatID]);

	console.log(chat);
	return (
		<div className="center">
			{chat?.messages?.map((message) => (
				<div
					className={
						message.senderID === currentUser?.id
							? 'message message-own'
							: 'message'
					}
					key={message.createdAt}
				>
					{/* {message.senderID && <img src={message.senderID.avatar} alt="img" />} */}
					<div className="text">
						{message.img && <img src={message.img} alt="img" />}
						<p>{message.text}</p>
						{/* <span className="time">
							{message.createdAt.toDate().toDateString()}
						</span> */}
						{
							<ReactTimeAgo
								className="time"
								date={message.createdAt.toDate()}
								locale="en-US"
							/>
						}
					</div>
				</div>
			))}

			{/* {img.url && (
				<div className="message message-own">
					<div className="text">
						<img src={img.url} alt="img" />
					</div>
				</div>
			)} */}

			<div ref={messagesEndRef}></div>
		</div>
	);
};

export default Center;
