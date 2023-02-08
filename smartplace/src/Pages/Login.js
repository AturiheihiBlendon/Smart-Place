import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css'
import { Avatar, Grid, Paper, TextField, Button } from '@mui/material'


// const login_url = 'http://127.0.0.1:8000/api'
const login_url = 'https://blendon.pythonanywhere.com/api/'

function Login() {

  const paperstyle = {
    margin: "30px auto",
    width: 300,
    padding:20,
    height: '60vh'
}
    
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
    // return (
        
    //     <div className="login">
    //         <div className="login-form">
    //            <div className="title">
    //             Login into your Smart Place account
    //            </div>
    //            <div className="loginn-form">
    //             <input type="text" placeholder='User Name' 
    //             value={username} onChange={(e)=>setUsername(e.target.value)} />
                
    //             <br></br>

    //             <input type="Password" placeholder='Password' 
    //             value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
    //             <br></br>

    //             <input className='btn' type="button" value="LOGIN" onClick={signin} />
    //            </div>
    //         </div>
    //     </div>
    // );

    return (
      <Grid>
          <Paper elevation={5} style={paperstyle}>
              <Grid align="center">
                  <Avatar></Avatar>
                  <h2>Login</h2>
              </Grid>
              <TextField label="UserName" variant="standard" fullWidth required
              value={username} onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField label="Password" variant="standard" type="password" fullWidth required
              value={password} onChange={(e)=>setPassword(e.target.value)}
              />
              <br></br>
              <br></br>
              <br></br>
              <Button variant="contained" onClick={signin} fullWidth>LOGIN</Button>
            </Paper>
        </Grid>
  )
    
}
export default Login;