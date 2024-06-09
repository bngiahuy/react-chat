import './chatList.css';
import { useEffect, useState } from 'react';
import AddUser from './addUser/addUser';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../libs/firebase';
import useUserStore from '../../../libs/zustand';
import { set } from 'firebase/database';
const ChatList = () => {
	const [plusMode, setPlusMode] = useState(true);
	const [chats, setChats] = useState([]);
	const { currentUser } = useUserStore();
	useEffect(() => {
		const unsub = onSnapshot(doc(db, 'userchats', currentUser.id), (doc) => {
			console.log('Current data: ', doc.data());
			setChats(doc.data());
		});

		return () => unsub();
	}, [currentUser.id]);
	console.log(chats);

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
			{!plusMode && <AddUser />}
		</div>
	);
};

export default ChatList;
