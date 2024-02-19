import React, { useState } from 'react';
import "./LoginSignup.css";

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


export const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    
    const [name, setName] = useState({action});
    const [email, setEmail] = useState({action});
    const [password, setPassword] = useState({action});

    const handleSubmit = ()=> {
        if (action === "Login") {
            // Logic for login
            // Fetch user data from JSON file and check if username and password match
            if (email==='admin@delhirasoi.com' && password ==='Admin123'){
                console.log("Login Successful");
            }
            else
            {
                console.log("Login UnSuccessful");
            }

        } else if (action === "Sign Up") {
            // Logic for sign-up
            // Construct new user object
            const newUser = {
                username: name,
                email: email,
                password: password
            };
            // Save newUser to JSON file (this step depends on how you're managing file operations)
            // For simplicity, you can save newUser to state for demonstration
            console.log("New User:", newUser);
        }
    };

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>SignUp</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
            </div>
            {action==="Login"?<div></div>:
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            }
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {action==="Sign Up"?<div></div>:
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            <div className="submit-btn" onClick={handleSubmit}>
                Submit
            </div>
           
        </div>

    </div>
  )
}
