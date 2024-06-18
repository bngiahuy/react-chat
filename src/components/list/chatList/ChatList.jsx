import './chatList.css';
import { useEffect, useState } from 'react';
import AddUser from './addUser/addUser';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../libs/firebase';
import useUserStore from '../../../libs/zustand';
import useChatStore from '../../../libs/chatstore';
import ReactTimeAgo from 'react-time-ago';
const ChatList = () => {
	const [plusMode, setPlusMode] = useState(true);
	const [chats, setChats] = useState([]);
	const { currentUser } = useUserStore();
	const { changeChat } = useChatStore();

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, 'userchats', currentUser.id),
			async (_doc) => {
				// console.log('Current data: ', doc.data());
				const items = _doc.data().chats || [];

				const promises = items?.map(async (item) => {
					const chatDocRef = doc(db, 'users', item.receiverID);
					const chatDoc = await getDoc(chatDocRef);

					const user = chatDoc.data();
					return { ...item, user };
				});

				const chats = await Promise.all(promises);
				setChats(chats.sort((a, b) => b.updatedAt - a.updatedAt));
			}
		);

		return () => unsub();
	}, [currentUser.id]);
	// console.log('Chats: ', chats);
	console.log('curentUserid', currentUser.id);

	const handleSelectChat = async (chat) => {
		const userChats = chats.map((item) => {
			const { user, ...rest } = item;
			return rest;
		});
		console.log('userChats', userChats);
		const chatIndex = userChats.findIndex(
			(item) => item.chatID === chat.chatID
		);

		userChats[chatIndex].isSeen = true;

		const userChatsRef = doc(db, 'userchats', currentUser.id);

		try {
			await updateDoc(userChatsRef, {
				chats: userChats,
			});
			console.log(chat);
			changeChat(chat.chatID, chat.user);
		} catch (err) {
			console.log(err);
		}
	};

	const handlePlusClick = () => {
		setPlusMode(!plusMode);
	};
	return (
		<div className="ChatList">
			<div className="search">
				<div className="searchBar">
					<img src="./search.png" alt="search-icon" />
					<input type="text" placeholder="Search" />
				</div>
				<img
					src={plusMode ? './plus.png' : './minus.png'}
					alt="plus-icon"
					className="plus"
					onClick={handlePlusClick}
				/>
			</div>

			{/* <div className="item" id="">
				<img src="./avatar.png" alt="" />
				<div className="info">
					<span className="name">An Bui</span>
					<p className="message">Hey, how are you?</p>
				</div>
				<p className="time">10:30 AM</p>
			</div> */}

			{chats?.map((chat) => (
				<div
					className="item"
					key={chat.chatID}
					onClick={() => handleSelectChat(chat)}
				>
					<img src={chat.user.avatar || './avatar.png'} alt="" />
					<div className="info">
						<span className="name">{chat.user.name}</span>
						<p className="message">
							{chat.receiverID === currentUser.id
								? 'You: ' + chat.lastMessage
								: chat.lastMessage}
						</p>
					</div>
					{/* <p className="time">{chat.updatedAt.toDate()}</p> */}
					{chat.updatedAt && (
						<ReactTimeAgo
							className="time"
							date={chat.updatedAt.toDate()}
							locale="en-US"
						/>
					)}
				</div>
			))}
			{!plusMode && <AddUser />}
		</div>
	);
};

export default ChatList;
