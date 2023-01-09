import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


// const login_url = 'http://127.0.0.1:8000/api'
const login_url = 'https://blendon.pythonanywhere.com/api/'

function Login() {
    
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signin = async () => {
    
        const request = new Request(
          `${login_url}/login/`,
          {
            body:JSON.stringify({username, password}),
            headers: {
              'Content-Type': 'application/json'
            },method:'POST'
          }
        );
        const res = await fetch(request);
        const data = await res.json();
    
        if (res.ok){
          // console.log(data);
          localStorage.setItem('user-info', JSON.stringify(data));
          // console.log("User fetched")
          navigate('/dashboard')
        }
        else{
          // console.log("Failed");
          alert("Invalid creditials");
        }
    }
    return (
        
        <div className="login">
            <div className="login-form">
               <div className="title">
                Login into your Smart Place account
               </div>
               <div className="loginn-form">
                <input type="text" placeholder='User Name' 
                value={username} onChange={(e)=>setUsername(e.target.value)} />
                
                <br></br>

                <input type="Password" placeholder='Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                <br></br>

                <input className='btn' type="button" value="LOGIN" onClick={signin} />
               </div>
            </div>
        </div>
    );
    
}
export default Login;