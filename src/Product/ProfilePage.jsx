import {React, useContext} from 'react'
import HeadingPage from './HeadingPage';


function ProfilePage() {

   const registreduser=JSON.parse(localStorage.getItem("loginDatas"))
    let loginToken= registreduser.fullname;

   console.log("Token received on listing page:", loginToken);  
 
  return (
    <div>
   <HeadingPage />

    </div>
  )
}

export default ProfilePage
