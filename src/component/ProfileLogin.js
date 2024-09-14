import React, { useState } from 'react';
import './ProfileLogin.css';
import user from './image/user .jpg';
import { useNavigate } from 'react-router-dom'

export default function ProfileLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();


    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked);
    }

    const createAccount = () =>{
        navigate("/CreateAccount")
    }

    const Auth = () => {
        if (!username || !password) {
            alert('Please fill in all the fields');
        }
        else if (username === 'test' && password === 'test') {
            sessionStorage.setItem('Index', 'Yes');
            // Redirect to the desired page, for example:
            navigate("/Course")

        }
        else {
            alert('Login Failed');
        }
    };

    // ... (your other JSX code)

    return (
        <div className="login-profile" id="id01">

            <form onSubmit={Auth} method="post" className='form'>
                <div className="imgcontainer">
                    <img src={user} alt="Avatar" className="avatar" />
                </div>

                <div className="containerUser">
                    <label htmlFor="username"></label>
                    <input type="text" id="username" placeholder="Enter your username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Enter your password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='formbutton'>
                        <button onClick={Auth}>login</button>
                        <button type="submit" onClick={createAccount}>Create Account</button>
                    </div>
                    <div>
                        <input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} name="remember" /> Remember Me
                    </div>
                </div>

                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="/password-reset">password?</a></span>
                </div>
            </form>

        </div>

    )
}
