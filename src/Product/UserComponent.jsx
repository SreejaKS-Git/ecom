import React from 'react'
import { UserContext } from '../Context/UserContext';

function UserComponent({children})   {
 
  const user = {
    name: "anu",
    email: "anu@gmail.com",
    role: "Developer"
  };

   return (
    <div>
       <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
    </div>
  )
}

export default UserComponent
