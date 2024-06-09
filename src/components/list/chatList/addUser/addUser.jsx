import './addUser.css';
import { useState } from 'react';

const AddUser = () => {
	return (
		<div className="addUser">
			<form>
				<div className="form-group">
					<input type="text" placeholder="Username" id="name" name="name" />
				</div>

				<button type="submit">Search</button>
			</form>

			<div className="userResult">
				{/* Show user avatar and name here */}
				<div className="details">
					<img src="./avatar.png" alt="" />
					<span>An Nguyen</span>
				</div>

				<button>Add User</button>
			</div>
		</div>
	);
};

export default AddUser;
