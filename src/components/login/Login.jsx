import { toast } from 'react-toastify';
import './login.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../libs/firebase';

const Login = () => {
	const [avatar, setAvatar] = useState({ file: null, url: '' });

	const handleLogin = (e) => {
		e.preventDefault();

		// const _email = e.target.email.value;
		// const _password = e.target.password.value;
		// toast.success(`Hello`);
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const { name, email, password } = Object.fromEntries(formData);

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log('Log Error: ' + error);
			toast.error('Error: ' + error.message);
		}
	};

	return (
		<div className="login">
			<div className="login-form">
				<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<input type="text" placeholder="Email" name="email" />
					<input type="password" placeholder="Password" name="password" />
					<button type="submit">Login</button>
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
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
