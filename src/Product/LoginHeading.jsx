import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from "../assets/big-city.jpg"

function LoginHeading() {

  const navigate = useNavigate();
  const registreduser=JSON.parse(localStorage.getItem("loginDatas"))
   let loginToken= registreduser.fullname;

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
            
                <div className='userDiv'>
                    <label htmlFor="" className='labels-1'>Hello </label>
                    <button className="button-1" type='button' onClick={handleProfile}>{loginToken}</button>
                </div>
            </div>
        </div>
    )
}
export default LoginHeading
