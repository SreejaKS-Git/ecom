import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from "../assets/big-city.jpg"
import HeadingPage from './HeadingPage';

function LoginPage() {

  const [loginuser, setLoginuser] = useState(false)

  const navigate = useNavigate()

  const token = "";
  
  function showOnChange(e) {
    const { name, value } = e.target
    setLoginuser({
      ...loginuser,
      [name]: value
    })
  }

  // const checkLoginData = () => {
  //   // const storedUsername = localStorage.getItem("username");
  //   // const storedPwd = localStorage.getItem("pwd");

  //   // if (storedUsername == loginuser.username && storedPwd == loginuser.password) {
  //       //   navigate("/productListing");

  //   // } else {
  //   //   alert("Invalid User credentials. Please try again!")
  //   // }


  //   const registreduser=JSON.parse(localStorage.getItem("loginDatas"))
   

  //   if (registreduser.username == loginuser.username && registreduser.password == loginuser.password) {
     
       
  //     navigate("/productListing");      

  //   } else {
  //     alert("Invalid User credentials. Please try again!")
  //   }
  // }

  const checkLoginData = (e) => {
 e.preventDefault();

  const registeredUsers = JSON.parse(localStorage.getItem("loginDatas")) || [];

  const matchedUser = registeredUsers.find(
    (user) => user.username === loginuser.username && user.password === loginuser.password
  );

   console.log("as " + matchedUser.username); 
  
    if (matchedUser) {
  
    localStorage.setItem("currentLogin", matchedUser.fullname);
    navigate("/productListing");       
  } else {
    alert("Invalid User credentials. Please try again!");
  }
};
  

  const backtoHome = () => {
    console.log("back to home page");
    navigate('/');
  };

  return (
    <div>
      <HeadingPage />

      <form className='container-2'>
        <label className="labels-2" htmlFor="">Username</label>
        <input className="inputs-2" type="text" name='username' onChange={(e) => showOnChange(e)} /> <br /> <br />

        <label className="labels-2" htmlFor="">Password</label>
        <input className="inputs-2" type="password" name='password' onChange={(e) => showOnChange(e)} /> <br /> <br />

        <button className="buttons" type='button' onClick={checkLoginData} >Sign In</button>
           
      </form>
      <div className='footerDiv'>
          
        </div>
    </div>
  )
}

export default LoginPage
