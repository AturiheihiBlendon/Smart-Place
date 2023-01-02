import './home.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='landing'>

            {/* Navigation */}
            {/* <div className="container">
                <div className="appname">
                <a className="navbar-brand" href="#">SMART PLACE</a>
                </div>
                <nav className="navbar navbar-expand-lg p-3">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="#">Home</a>
                        <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="">Register</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div> */}

            <div className="container">
                <div className="appname">
                    <Link to='/' className='app-name'>SMART PLACE</Link>
                </div>
                <nav className='navigation'>
                    <ul>
                        <Link to='/' className='links'>Home</Link>
                        <Link to='/register' className='links'>Register</Link>
                        <Link to='/dashboard' className='links'>Login</Link>
                    </ul>
                </nav>
            </div>



            <div className="inspire">
            Over years, people have employed janitors/ maids in their offices and homesteds.<br></br>
            It turns out most of those people lack skills and are not reliable in the long run<br></br>
            At <Link to='/'>SMART PLACE</Link> , we bring you credible and skilled janitors, laundary men and women.
            <Link to='/register'>Register</Link> today connect to one 
            </div>

            {/* Team */}
            <div className='team'>
                <div className="title">
                    <img src="https://avatars.githubusercontent.com/u/73010408?s=96&v=4" alt="" />
                    <div className="name">Blendon Aturiheihi
                    <br></br>
                    <span>
                        <p>
                            Full stack Software Developer
                        </p>
                    </span>
                    <div className="links">
                        <a href='https://www.linkedin.com/in/blendon-aturiheihi-1784ba211/'><i className="bi bi-linkedin"></i></a>
                        <a href='https://github.com/AturiheihiBlendon/Smart-Place'><i className="bi bi-github"></i></a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;