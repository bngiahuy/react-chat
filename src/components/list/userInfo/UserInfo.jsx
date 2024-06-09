import './userInfo.css';
import useUserStore from '../../../libs/zustand';

const UserInfo = () => {
	const { currentUser } = useUserStore();

	return (
		<div className="UserInfo">
			<div className="user">
				<img src={currentUser.avatar} alt="" />
				<h2>{currentUser.name}</h2>
			</div>
			<div className="icons">
				<img src="./more.png" alt="" />
				<img src="./video.png" alt="" />
				<img src="./edit.png" alt="" />
			</div>
		</div>
	);
};

export default UserInfo;
