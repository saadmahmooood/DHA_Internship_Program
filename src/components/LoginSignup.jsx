import React from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';
const LoginSignup = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/screen-two');
    };
  return (
    <div className="App">
      <img className="im" src="src/assets/images/logo.jpeg" alt="DHA Logo" />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Signup</label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="CNIC" placeholder="CNIC" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <input type="password" name="cpswd" placeholder="Confirm Password" required />
            <button onClick={handleButtonClick} type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" name="CNIC" placeholder="CNIC" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button onClick={handleButtonClick} type="submit">Login</button>
          </form>
        </div>

        <div className="title">
          <h1>Start Your Career Journey</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
