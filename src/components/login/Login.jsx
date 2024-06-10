import { toast } from 'react-toastify';
import './login.css';
import React, { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db, storage } from '../../libs/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../libs/upload';

const Login = () => {
	const [avatar, setAvatar] = useState({ file: null, url: '' });

	const [loading, setLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.target);
		const { email, password } = Object.fromEntries(formData);
		try {
			const request = await signInWithEmailAndPassword(auth, email, password);

			// request
			// 	.then(() => {
			// 		toast.success('Logged in successfully!');
			// 	})
			// 	.catch((error) => {
			// 		toast.error('Error: ' + error.message);
			// 		throw new Error(error);
			// 	});

			toast.success('Logged in successfully!');
		} catch (error) {
			console.log('Log Error: ' + error);
			toast.error('Error: ' + error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.target);

		const { name, email, password } = Object.fromEntries(formData);

		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const imageURL = await upload(avatar.file);
			await setDoc(doc(db, 'users', response.user.uid), {
				id: response.user.uid,
				name,
				email,
				avatar: imageURL,
				blocked_list: [],
			});

			await setDoc(doc(db, 'userchats', response.user.uid), {
				chats: [],
			});

			toast.success('User created successfully! You can log in now.');
		} catch (error) {
			console.log('Log Error: ' + error);
			toast.error('Error: ' + error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login">
			<div className="login-form">
				<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<input type="text" placeholder="Email" name="email" />
					<input type="password" placeholder="Password" name="password" />
					<button type="submit" disabled={loading}>
						Login
					</button>
				</form>
			</div>
			<div className="separator"></div>
			<div className="signup-form">
				<h2>Sign Up</h2>
				<form onSubmit={handleSignUp}>
					<label htmlFor="file">
						<img src={avatar.url || './avatar.png'} alt="" />
						Upload Avatar
					</label>
					<input
						type="file"
						name="file"
						id="file"
						onChange={(e) => {
							if (e.target.files[0]) {
								setAvatar({
									file: e.target.files[0],
									url: URL.createObjectURL(e.target.files[0]),
								});
							}
						}}
						style={{ display: 'none' }}
					/>
					<input type="text" placeholder="Name" name="name" />
					<input type="text" placeholder="Email" name="email" />
					<input type="password" placeholder="Password" name="password" />
					<button type="submit" disabled={loading}>
						{loading ? 'Loading...' : 'Sign Up'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
