import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from "../assets/big-city.jpg"

function LogoutHeadingPage() {

    const navigate = useNavigate();

    let loginToken = localStorage.getItem("currentLogin");

     const handleProfile = () => {
        console.log("view profile");
        navigate('/profile');
    };

       const handleLogout = () => {
        localStorage.removeItem("currentLogin");
    
        console.log("logout");
        navigate('/');
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
            
                <div className='userDiv'>
                    <label htmlFor="" className='labels-1'>Hello </label>
                    <button className="button-1" type='button' onClick={handleProfile}>{loginToken}</button>
                </div>
                 <div className='logoutDiv'>
                    <button className="button-1" type='button' onClick={handleLogout}>Logout</button>
                </div>
            </div>
    </div>
  )
}

export default LogoutHeadingPage
