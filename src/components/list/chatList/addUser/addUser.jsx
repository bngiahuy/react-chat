import './addUser.css';
import { useState } from 'react';
import {
	collection,
	getDocs,
	query,
	where,
	doc,
	setDoc,
	getDoc,
	serverTimestamp,
	updateDoc,
	arrayUnion,
} from 'firebase/firestore';
import { db } from '../../../../libs/firebase';
import { toast } from 'react-toastify';
import useUserStore from '../../../../libs/zustand';
const AddUser = () => {
	const [users, setUsers] = useState([]);
	const { currentUser } = useUserStore();
	const handleSearch = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const name = formData.get('name').replace(/\s+/g, ' ').trim();
		try {
			const usersRef = collection(db, 'users');
			const q = query(usersRef, where('name', '==', name));

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) {
				toast.error('User not found');
				return;
			}

			querySnapshot.forEach((doc) => {
				// console.log(doc.id, ' => ', doc.data());
				setUsers((prev) => [...prev, doc.data()]);
			});
		} catch (error) {
			console.error('Error search document: ', error);
			toast.error('Error: ' + error.message);
		}
	};

	const handleAddUser = async (id) => {
		const chatRef = collection(db, 'chats');
		const userChatRef = collection(db, 'userchats');

		try {
			const newChatRef = doc(chatRef);

			await setDoc(newChatRef, {
				messages: [],
				createdAt: serverTimestamp(),
			});

			await updateDoc(doc(userChatRef, id), {
				chats: arrayUnion({
					chatID: newChatRef.id,
					receiverID: currentUser.id,
					lastMessage: '',
					updatedAt: Date.now(),
				}),
			});

			await updateDoc(doc(userChatRef, currentUser.id), {
				chats: arrayUnion({
					chatID: newChatRef.id,
					receiverID: id,
					lastMessage: '',
					updatedAt: Date.now(),
				}),
			});
			console.log(newChatRef.id);
		} catch (error) {
			console.error('Error adding User: ', error);
			toast.error('Error: ' + error.message);
		}
	};
	return (
		<div className="addUser">
			<form onSubmit={handleSearch}>
				<div className="form-group">
					<input type="text" placeholder="Username" id="name" name="name" />
				</div>

				<button type="submit" onClick={() => setUsers([])}>
					Search
				</button>
			</form>

			{/* <div className="userResult">
				<div className="details">
					<img src="./avatar.png" alt="" />
					<span>An Nguyen</span>
				</div>

				<button>Add User</button>
			</div> */}

			{users.map((user) => (
				<div className="userResult" key={user.id}>
					<div className="details">
						<img src={user.avatar || './avatar.png'} alt="" />
						<span>{user.name}</span>
					</div>

					<button
						onClick={() => {
							handleAddUser(user.id);
						}}
					>
						Add User
					</button>
				</div>
			))}
		</div>
	);
};

export default AddUser;
