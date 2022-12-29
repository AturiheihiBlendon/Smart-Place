import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="main">
            <div className="container">
                <div className="logo">
                    <Link to='/dashboard' className='logo-name'>SMART PLACE</Link>
                </div>

                <nav className='navigate'>
                    <ul>
                        <a href="#"className='main-a'>Logout</a>
                    </ul>
                </nav>

                
            </div>
        </div>
    );
}

export default Dashboard;