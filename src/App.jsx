import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
const App = () => {
	const isUser = false;

	return (
		<div className="container">
			{isUser ? (
				<>
					<List />
					<Chat />
					<Detail />
				</>
			) : (
				<Login />
			)}

			<Notification />
		</div>
	);
};

export default App;
