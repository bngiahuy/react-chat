import './detail.css';
const Detail = () => {
	return (
		<div className="detail">
			<div className="user">
				<img src="./avatar.png" alt="" />
				<span className="name">An Bui</span>
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
				<button className="logout">Log out</button>
			</div>
		</div>
	);
};

export default Detail;
