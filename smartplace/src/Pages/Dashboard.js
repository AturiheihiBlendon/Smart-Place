import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';


const BaseUrl = 'http://127.0.0.1:8000/';


function Dashboard() {

    const [janitor, setjanitor] = useState([])

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



            <div className='content'>
            </div>
        </div>
    );
}

export default Dashboard;