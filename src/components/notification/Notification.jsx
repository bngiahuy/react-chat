import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Notification = () => {
	return (
		<div>
			<ToastContainer
				position="top-right" // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
				autoClose={4000} // 3 seconds
				hideProgressBar={false}
				newestOnTop={false} // place new notification on top
				closeOnClick // close notification when clicked
				rtl={false} // right to left
				pauseOnFocusLoss // pause when focus is lost
				draggable // allow dragging
				pauseOnHover // pause when hovered
				theme="light" // dark or light
				transition:Slide // transition effect
			/>
		</div>
	);
};

export default Notification;
