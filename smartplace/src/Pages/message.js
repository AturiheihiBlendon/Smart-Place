import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './message.css'


const url_endpoint = 'http://127.0.0.1:8000/sms/create_sms/';

function Send_message () {

    const navigate = useNavigate()
    const [phone_number, setphone_number] = useState('');
    const [message, setmessage] = useState('');
    let user = JSON.parse(localStorage.getItem('user-info'));

        async function Send (refresh) {
            refresh.preventDefault();
            const formData = new FormData();
            formData.append("phone_number",phone_number);
            formData.append("message",message);

            let res = await fetch(`${url_endpoint}`,{
                method: 'POST',
                body:formData
            });
            if (res.ok){
                alert("Message sent")
                setphone_number('')
                setmessage('')
                navigate('/dashboard')
            }
            else {
                alert("Send fail")
                setphone_number('')
                setmessage('')
                navigate('/dashboard')
            }
            
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
                            <Link to='/' className='main-a'>Logout</Link>
                        </ul>
                    </nav>
                </div>
                
            </div>

            <div className='head-title'>
                <h3>Send Message</h3>
            </div>
            
            <div className='content'>

                <form action="">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="title">Phone number</label>
                            <input type="tel" name="phone_number" id="phone_number" 
                            value={phone_number} onChange={(e) =>{return setphone_number(e.target.value)}}
                            className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Text Message</label>
                            <textarea name="content" id="" cols="30" rows="5" 
                            value={message} onChange={(e) =>{return setmessage(e.target.value)}}
                            className="form-control"></textarea>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="SEND" onClick={ Send }
                            className="btn" />
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
export default Send_message