import './register.css'
function Register() {
    return (
        <div className="register">
            <div className="form-title">
                <div className="register-title">
                    Create Account
                </div>
                <div className="register-form">
                    <form>
                        <input type="text" placeholder='First Name' />
                        <br></br>
                        <input type="text" placeholder='Last Name'/>
                        <br></br>
                        <input type="text" placeholder='User Name'/>
                        <br></br>
                        <input type="Password" placeholder='Password' />
                        <br></br>
                        <input type="Password" placeholder='Confirm Password'/>
                        <br></br>
                        <input className='btn' type="button" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
        
    );
    
}

export default Register;