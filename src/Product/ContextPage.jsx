import {React, useContext} from 'react'
import { UserContext } from '../Context/UserContext';

function ContextPage() {

    const {user,setUser} = useContext(UserContext);
  return (
    <div>
     <label htmlFor="">{user}</label> 
    </div>
  )
}

export default ContextPage
