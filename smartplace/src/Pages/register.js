// import './register.css'
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const register_url = 'http://127.0.0.1:8000/api';
const register_url = 'https://blendon.pythonanywhere.com/api';

function Register() {

  const paperStyle = {
    margin: "40px auto",
    width: 280,
    padding: 20,
  }
  const AvaStyle = {
    background: "Purple"
  }

  const navigate = useNavigate()
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const signUp = async () => {

    const request = new Request(
      `${register_url}/register/`,
      {
        body: JSON.stringify({ first_name, last_name, username, password, password2 }),
        headers: {
          'Content-Type': 'application/json'
        }, method: 'POST'
      }
    );
    const res = await fetch(request);
    const data = await res.json();

    if (res.ok) {
      console.log(data);
      console.log("User fetched")
      alert("Registered successfully")
      navigate('/login')
    }
    else {
      console.log("Failed");
      alert("Check creditials");
    }
  }
  // return (
  //     <div className="register">
  //         <div className="form-title">
  //             <div className="register-title">
  //                 Create Account
  //             </div>
  //             <div className="register-form">
  //                 <form>
  //                     <input type="text" placeholder='First Name'
  //                     value={first_name} onChange={(e)=>setfirst_name(e.target.value)} />

  //                     <br></br>

  //                     <input type="text" placeholder='Last Name'
  //                     value={last_name} onChange={(e)=>setlast_name(e.target.value)}/>

  //                     <br></br>

  //                     <input type="text" placeholder='User Name'
  //                     value={username} onChange={(e)=>setUsername(e.target.value)}/>

  //                     <br></br>

  //                     <input type="Password" placeholder='Password'
  //                     value={password} onChange={(e)=>setPassword(e.target.value)} />

  //                     <br></br>

  //                     <input type="Password" placeholder='Confirm Password'
  //                     value={password2} onChange={(e)=>setPassword2(e.target.value)}/>

  //                     <br></br>

  //                     <input className='btn' type="button" value="Sign Up" onClick={signUp} />
  //                 </form>
  //             </div>
  //         </div>
  //     </div>

  // );

  return (
    <Grid>
      <Paper style={paperStyle} elevation={10}>
        <Grid align="center">
          <Avatar style={AvaStyle}></Avatar>
          <h3>Register an account</h3>
        </Grid>

        <TextField label="Username" variant="outlined" fullWidth required
          value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <TextField label="First name" variant="outlined" fullWidth required
          value={first_name} onChange={(e) => setfirst_name(e.target.value)}
        />
        <br />
        <br />
        <TextField label="Last name" variant="outlined" fullWidth required
          value={last_name} onChange={(e) => setlast_name(e.target.value)}
        />
        <br />
        <br />
        <TextField type="password" label="Password" variant="outlined" fullWidth required
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <TextField type="password" label="Confirm password" variant="outlined" fullWidth required
          value={password2} onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" fullWidth onClick={signUp}>SIGN UP</Button>
      </Paper>
    </Grid>
  )

}

export default Register;