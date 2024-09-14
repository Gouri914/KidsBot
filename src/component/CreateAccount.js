import React, { useState } from 'react';
import './CreateAccount.css'; // Import CSS if needed
// import createaccount from './createaccount.json'
// import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'


const CreateAccount = () => {
    // State variables for form fields
    const[user, setUser] = useState({
        email:"", 
        password:"", 
        confirmPassword:""
    })

    let name, value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});

        console.log(e.target.value);

    }

    const navigate = useNavigate();

    // Function to handle form submission
    const signin = () => {
        navigate("/ProfileLogin")
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., API call to create account)
        const response = await fetch('http://localhost:8080/Data',{
            
            method:'POST',

            body:JSON.stringify(user),

            headers:{
                'Content-Type':'application/json'
            }
        })

        const data = await response.json();
        console.log('Form submitted!');
        console.log(data);
    };

    return (

        <div className="create-account" style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden',}}>
            
            {/* <Lottie animationData={createaccount} loop={true} autoPlay={true} style={{ width: '100%'}} /> */}
            
            <form onSubmit={handleSubmit} className='form' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>

                <h2 style={{ color: '' }}>Create Account</h2>
                <div className="form-group">
                    
                    <label htmlFor="email" style={{ color: '' }}>Email:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} required />
                    {/* <span style={{fontWeight: 'bold',color: 'red',}}>{emailError}</span> */}
                </div>

                <div className="form-group">
                    <label htmlFor="password" style={{ color: '' }}>Password:</label>
                    <span className='ab'>
                        <i className="fas fa-eye"></i>
                    </span>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleInputs} required />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword" style={{ color: '' }}>Confirm Password:</label>
                    <span className='ab'>
                        <i className="fas fa-eye"></i>
                    </span>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={user.confirmPassword} onChange={handleInputs} required />
                </div>

                <div className='button'>
                    <button type="submit" id="signup">Sign up</button>
                    <button type="submit" id="signin" onClick={signin}>Sign in</button>
                </div>
            </form>
        </div >
    );
};

export default CreateAccount;
