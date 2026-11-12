import { Fragment, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Product/MainPage'
import LoginPage from './Product/LoginPage'
import RegisterPage from './Product/RegisterPage'
import ProfilePage from './Product/ProfilePage'
import ProductListingPage from './Product/ProductListingPage'
import ProductDetails from './Product/ProductDetails';
import CategoryList from './Product/CategoryList';
import { UserContext } from './Context/UserContext';
//import { UserProvider } from './Context/UserContext';
import ContextPage from './Product/ContextPage'
import Home from './Product/Home'
import Profiles from './Product/Profiles'
import About from './Product/About'
import Contact from './Product/Contact'
import UserComponent from './Product/UserComponent'
import Counter from './Product/Counter'



function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState("John Deo")

  return (
    //  <UserContext.Provider value = {{user,setUser}}>
    //        <ContextPage />
    // </UserContext.Provider>

    // <Fragment>
    //   <div>
    //     <Counter />
    //   </div>
    // </Fragment>
    // <BrowserRouter>
    //  <UserComponent>
    //   <Routes>
    //     {/* Only Home gets Context */}
    //     <Route path="/" element={ <Home />
    //       }
    //     />

    //     <Route path="/about" element={<About />} />
      
    //     <Route path="/contact" element={<Contact />} />
        
    //     {/* Only Profile gets Context */}
    //     <Route path="/profiles" element={ <Profiles />
    //       }
    //     />
    //   </Routes>
    //               </UserComponent>

    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
         <Route path='/profile' element={<ProfilePage />} />
        <Route path='/productListing' element={<ProductListingPage />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/categoryList/:category' element={<CategoryList />} />

       </Routes>
     </BrowserRouter>
  )
}

export default App
