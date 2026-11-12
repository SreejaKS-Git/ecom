import { useContext } from "react";
import { UserContext } from '../Context/UserContext';


function Home() {


  const user = useContext(UserContext);


  return (
    <div>
      <h1>Home</h1>


      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  );
}


export default Home;