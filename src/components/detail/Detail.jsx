import { signOut } from 'firebase/auth';
import { auth } from '../../libs/firebase';
import useUserStore from '../../libs/zustand';
import './detail.css';
const Detail = () => {
	const { currentUser } = useUserStore();
	const handleLogout = async () => {
		await signOut(auth)
			.then(() => {
				console.log('Sign out successfully');
			})
			.catch((error) => {
				console.error('Error signing out: ', error);
			});
	};
	return (
		<div className="detail">
			<div className="user">
				<img src={currentUser.avatar || './avatar.png'} alt="" />
				<span className="name">{currentUser.name}</span>
				<p className="status">Online</p>
			</div>

			<div className="info">
				<div className="option">
					<div className="title">
						<span>Chat settings</span>
						<img src="./arrowUp.png" alt="" />
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Help</span>
						<img src="./arrowUp.png" alt="" />
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Photos</span>
						<img src="./arrowDown.png" alt="" />
					</div>

					<div className="photos">
						<div className="photoItems">
							<div className="photoDetails">
								<img src="/bg.png" alt="" />
								<span>abc.png</span>
							</div>
							<img src="./download.png" alt="" className="downloadIcon" />
						</div>
						<div className="photoItems">
							<div className="photoDetails">
								<img src="/bg.png" alt="" />
								<span>abc.png</span>
							</div>
							<img src="./download.png" alt="" className="downloadIcon" />
						</div>
						<div className="photoItems">
							<div className="photoDetails">
								<img src="/bg.png" alt="" />
								<span>abc.png</span>
							</div>
							<img src="./download.png" alt="" className="downloadIcon" />
						</div>
						<div className="photoItems">
							<div className="photoDetails">
								<img src="/bg.png" alt="" />
								<span>abc.png</span>
							</div>
							<img src="./download.png" alt="" className="downloadIcon" />
						</div>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Files</span>
						<img src="./arrowUp.png" alt="" />
					</div>
				</div>

				<button className="blockBtn">Block</button>
				<button className="logout" onClick={handleLogout}>
					Log out
				</button>
			</div>
		</div>
	);
};

export default Detail;
