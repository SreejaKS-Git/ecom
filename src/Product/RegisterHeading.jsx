import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterHeading() {
    const navigate = useNavigate();

      const handleLogin = () => {
        console.log("Logged in");
        navigate('/login');
    };

     const handleHome = () => {
        console.log("view home");
        navigate('/');
    };

  return (
    <div>
       <div className='container'>

                <div className='homeDiv'>
                   <button className="button-1" type='button' onClick={handleHome}>Home</button>                    
                </div>

                <div className='loginDiv'>
                    <label htmlFor="" className='labels-1'>Already signed up? </label>
                    <button className="button-1" type='button' onClick={handleLogin}>Sign In</button>
                </div>
             
            </div>
    </div>
  )
}

export default RegisterHeading
