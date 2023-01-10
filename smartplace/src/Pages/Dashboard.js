import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import Janitor from '../components/janitor';


// const BaseUrl = 'http://127.0.0.1:8000/';
const BaseUrl = 'https://blendon.pythonanywhere.com/';


function Dashboard() {

    const navigate = useNavigate()
    const [janitor, setjanitor] = useState([])
    let user = JSON.parse(localStorage.getItem('user-info'));
    // console.log(user.user.username)

    const getAllJanitors = async () =>{
        const response = await fetch(`${BaseUrl}/janitors/`);
    
        const data = await response.json()
    
        if (response.ok){
            console.log(data)
            setjanitor(data)
        }
        else{
            console.log("Failed fetch")
        }
    }
    
    useEffect(
        ()=>{
            getAllJanitors()
        },[]
    )

    function logout () {
        localStorage.clear();
        navigate('/')

    }
    return (
        <div className="main">
            <div className="container">
                <div className="logo">
                    <Link to='/dashboard' className='logo-name'>SMART PLACE</Link>
                </div>

                <div className='user'>
                    <p className='user-msg'>Welcome <span className='logged'>{`${user.user['username']}`}</span></p>
                    <nav className='navigate'>
                        <ul>
                            <a href='/' className='main-a' onClick={ logout }>Logout</a>
                        </ul>
                    </nav>
                </div>
                
            </div>

            <div className='head-title'>
                <h3>Click on mobile no. to connect to your nearest janitor</h3>
            </div>
            
            <div className='content'>
                {janitor.length > 0 &&(
                    <div className="janitor-list">
                        {janitor.map((item) => (
                            <Janitor Username={item.Username}
                            Contact={item.Contact}
                            Description={item.Description}
                            Location={item.Location}
                            Rate={item.Rate}
                            key={item.id}/>
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Dashboard;