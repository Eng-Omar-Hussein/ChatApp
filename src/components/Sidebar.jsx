import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div>Sidebar</div>
            <nav>
                <ul>
                    <li><Link to="/chat">Chat Room</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar