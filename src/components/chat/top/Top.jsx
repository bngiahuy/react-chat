import './top.css'

const Top = () => {
    return (
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="info">
                    <span className="name">An Bui</span>
                    <span className='status'>Online</span>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>
    );
}

export default Top;