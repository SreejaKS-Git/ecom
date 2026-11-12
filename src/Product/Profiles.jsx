import { useContext } from "react";
import { UserContext } from '../Context/UserContext';

function Profiles() {
const user = useContext(UserContext);


  return (
    <div>
      <h1>Profile</h1>


      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  )
}

export default Profiles
