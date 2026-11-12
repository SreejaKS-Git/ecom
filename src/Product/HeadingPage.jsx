import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from "../assets/big-city.jpg"

function HeadingPage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Logged in");
        navigate('/login');
    };

    const handleRegister = () => {
        console.log("New user Register here ");
        navigate('/register');
    };

     const handleProfile = () => {
        console.log("view profile");
        navigate('/profile');
    };

    const handleHome = () => {
        console.log("view home");
        navigate('/');
    };
    

    return (
        <div>
            <div className='headingDiv'>
                <h1>Shopping </h1>
            </div>
            <div className='container'>

                <div className='homeDiv'>
                   <button className="button-1" type='button' onClick={handleHome}>Home</button>                    
                </div>
                <div className='registerDiv'>
                    <label htmlFor="" className='labels-1'>New user? </label>
                    <button className="button-1" type='button' onClick={handleRegister}>Sign Up</button>
                </div>
                <div className='loginDiv'>
                    <label htmlFor="" className='labels-1'>Already signed up? </label>
                    <button className="button-1" type='button' onClick={handleLogin}>Sign In</button>
                </div>
                {/* <div className='userDiv'>
                    <label htmlFor="" className='labels-1'>Guest </label>
                    <button className="button-1" type='button' onClick={handleProfile}>Profile</button>
                </div> */}
            </div>


        </div>
    )
}

export default HeadingPage
