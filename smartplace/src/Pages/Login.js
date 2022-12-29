import './Login.css'

function Login() {
    return (
        
        <div className="login">
            <div className="login-form">
               <div className="title">
                Login into your Smart Place account
               </div>
               <div className="loginn-form">
                <input type="text" placeholder='User Name' />
                <br></br>
                <input type="Password" placeholder='Password'/>
                <br></br>
                <input className='btn' type="button" value="LOGIN" />
               </div>
            </div>
        </div>
    );
    
}
export default Login;