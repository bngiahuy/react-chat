import useChatStore from '../../../libs/chatstore';
import './top.css';

const Top = () => {
	const { user } = useChatStore();

	return (
		<div className="top">
			<div className="user">
				<img src={user.avatar || './avatar.png'} alt="" />
				<div className="info">
					<span className="name">{user.name}</span>
					<span className="status">Online</span>
				</div>
			</div>
			<div className="icons">
				<img src="./phone.png" alt="" />
				<img src="./video.png" alt="" />
				<img src="./info.png" alt="" />
			</div>
		</div>
	);
};

export default Top;
