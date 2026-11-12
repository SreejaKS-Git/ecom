import React, { useEffect, useState } from 'react'
import { useNavigate, BrowserRouter } from 'react-router-dom'
import backgroundimg from "../assets/background.png"
import HeadingPage from './HeadingPage';
import NavPage from './NavPage';
import FooterPage from './FooterPage';
import RegisterHeading from './RegisterHeading';

function RegisterPage() {

    const navigate = useNavigate();
    

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    })

    const userArray = [];

    function showOnChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function saveData() {
        // localStorage.setItem("username",form.username)
        // localStorage.setItem("pwd",form.password)

        const existingUsers = JSON.parse(localStorage.getItem("loginDatas")) || [];
        
        existingUsers.push(form); 

        const jsonString = JSON.stringify(existingUsers);
  
        localStorage.setItem("loginDatas",jsonString);
        alert("Registration Successful ");
       // navigate("/login");
    }

    useEffect(() => {
    }, [form.name])

    return (
        <div>
          <h1 class="headingDiv">Welcome Guest</h1>
          <RegisterHeading />
            <form>
               
                   {/* <NavPage /> */}

                <div className='container-2'>
                    <label class="labels-2" htmlFor="">Full Name</label>
                    <input class="inputs-2" type="text" name='fullname' onChange={(e) => showOnChange(e)} /> <br /> <br />

                    <label class="labels-2" htmlFor="">email</label>
                    <input class="inputs-2" type="text" name='email' onChange={(e) => showOnChange(e)} /> <br /> <br />

                    <label class="labels-2" htmlFor="">Phone</label>
                    <input class="inputs-2" type="text" name='phone' onChange={(e) => showOnChange(e)} /> <br /> <br />

                    <label class="labels-2" htmlFor="">Username</label>
                    <input class="inputs-2" type="text" name='username' onChange={(e) => showOnChange(e)} /> <br /> <br />

                    <label class="labels-2" htmlFor="">Password</label>
                    <input class="inputs-2" name='password' onChange={(e) => showOnChange(e)} /> <br /> <br />

                    <button class="buttons" type='button' onClick={saveData} >Submit</button>
                
                </div>
            
            </form>
            <FooterPage />
        </div>
    )
}

export default RegisterPage
