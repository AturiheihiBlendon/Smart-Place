import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="main">
            <div className="container">
                <div className="logo">
                    <Link to='/dashboard' className='logo-name'>SMART PLACE</Link>
                </div>

                <div className='user'>
                    <p className='user-msg'>Welcome</p>
                    <nav className='navigate'>
                        <ul>
                            <Link to='/' className='main-a'>Logout</Link>
                            {/* <a href="#"className='main-a'>Logout</a> */}
                        </ul>
                    </nav>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;