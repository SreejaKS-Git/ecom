import { React, useContext } from 'react'
import LoginHeading from './LoginHeading';
import NavPage from './NavPage';


function ProfilePage() {

  const registreduser = JSON.parse(localStorage.getItem("loginDatas"));
  const loginUser = localStorage.getItem("currentLogin");
  const currentUser = registreduser.find((user) => user.fullname === loginUser);

// Access individual values:
console.log(currentUser.fullname); // "bbb"
console.log(currentUser.email);    // "bbb"
console.log(currentUser.phone);    // "546"
console.log(currentUser.username); // "poiu"

  console.log("Token received on listing page:", loginUser);

  return (
    <div>
         <div className='profile-div'>
        <table>
<th></th>
<tr>
  <td><label htmlFor="">Full name</label></td>
  <td><label htmlFor="">{currentUser.fullname}</label></td>
</tr>
<tr>
  <td><label htmlFor="">email</label></td>
  <td><label htmlFor="">{currentUser.email}</label></td>
</tr>
<tr>
  <td><label htmlFor="">Phone</label></td>
  <td><label htmlFor="">{currentUser.phone}</label></td>
</tr>
<tr>
  <td><label htmlFor="">Username</label></td>
  <td><label htmlFor="">{currentUser.username}</label></td>
</tr>

        </table>


      </div>
    </div>
  )
}

export default ProfilePage
