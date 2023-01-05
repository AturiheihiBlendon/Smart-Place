import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './message.css'


const API = 'https://api.africastalking.com/version1/messaging?username=Mysite';
// const username = 'Mysite';

function Send_message () {

    const [to, setto] = useState('');
    const [message, setmessage] = useState('');
    const [username, setusername] = useState('Mysite');

    const Send = async (refresh) => {
        refresh.preventDefault();
    
        const request = new Request(
          `${API}`,
          {
            body:JSON.stringify({ username, to, message }),
            // body: new URLSearchParams({
            //     'username': { username },
            //     'to': { to },
            //     'message': { message }
            //   }),
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
            },method:'POST',
            mode: "no-cors",
          }
          
        );
        const res = await fetch(request);
        const data = await res.json();
    
        if (res.ok){
          console.log(data);
      }
      else{
          console.log("Failed Post method")
      }
        setto('');
        setmessage('');
        setusername('Mysite');
      }



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

            <div className='head-title'>
                <h3>Send Message</h3>
            </div>
            
            <div className='content'>
                <div className="message">
                    <div className="form-group">
                        <label htmlFor="title">Phone number</label>
                        <input type="tel" name="to" id="to" 
                        value={to} onChange={(e) =>{return setto(e.target.value)}}
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
            </div>
            
        </div>
    );
}
export default Send_message